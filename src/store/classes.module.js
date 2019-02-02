import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

const apiUrl = '/'
export const classes = {
  namespaced: true,
  state: {
    currentLesson:{
      assignmentNumber: 0,
      classId: '',
      lessonId: '',
      currentLessonIndex: 0,
      editClass: {
        lessonIndex: 0,
        currentClass: null
      }
    },
    currentClass: {},
    error: {},
    feeds: [],
    myClasses: {
      type: '',
      instructor: null,
      student: null
    },
    watchedLessons: {},
    showSubmitAssignment: false
  },
  actions: {
    createClass({ commit }, payload) {
      authService.post('/classes', payload)
        .then(
          response => {
            router.push({ name: 'classPage', params: { id: response.data._id } });
          }, error => commit('failure', error)
        );
    },
    updateClass({ commit }, payload) {
      return authService.put(`/classes/${payload._id}`, payload)
    },
    deleteClass({ commit }, payload) {
      return authService.del(`/classes/${payload._id}`)
    },
    getMyClasses({ commit }, payload) {
      commit('resetMyClasses');
      authService.get(`/classes/${payload.type}/${payload.id}`)
        .then(response => {
          // axios.all(response.data.map((mClass) => {
          //   return authService.getMedia(`/images/${mClass.img._id}`)
          //     .then(function (img) {
          //       mClass.img = img.data;
          //       return mClass;
          //     });
          // })).then((finalClasses) => {
          //   commit('setMyClasses', { type: payload.type, data: finalClasses });
          // });
          commit('setMyClasses', { type: payload.type, data: response.data });
        },
          error => commit('failure', error));
    },
    getClass({ commit }, id) {
      commit('setCurrentClass', {});
      authService.get(`/classes/${id}`)
        .then(response => {
          // authService.getMedia(`/images/${response.data.img}`)
          //   .then(res => {
              response.data.totalDuration = 0;
             // response.data.img = res.data;
              response.data.lessons = response.data.lessons.map(lesson => {
                response.data.totalDuration += lesson.secondsDuration;
                lesson.expanded = false;
                return lesson
              });
              response.data.totalDuration = Math.round(response.data.totalDuration);
              commit('setCurrentClass', response.data);
           // });
        },
          error => commit('failure', error));
    },
    getFeeds({ commit }) {
     return authService.get(`/feed`)
        // .then(
        //   response => commit('setFeeds', response.data),
        //   error => commit('failure', error)
        // );
    },
    getPorotfolioFeeds({ commit }) {
      return authService.get(`/portfolio/feed`)
     },
    getWatchedLessons({ commit }) {
      authService.get(`/classes/student/${JSON.parse(localStorage.getItem('user'))._id}/watched`)
        .then(
          response => commit('setWatchedLessobns', response.data),
          error => commit('failure', error)
        );
    },
    uploadVideo({ commit }, payload) {
      return authService.fileUpload('/uploads/video', payload);
    },
    uploadFiles({ commit }, payload) {
      return authService.fileUpload('/uploads', payload);
    },
    uploadAssignmentFiles({ commit }, payload) {
      return authService.fileUpload('/uploads/assignment', payload);
    },
    getMedia({ commit }, mediaId) {
      return authService.getMedia(`/images/${mediaId}`);
    },
    getMediaDetail({ commit }, mediaId) {
      return authService.getMedia(`/media/detail/${mediaId}`);
    },
    enrollClass({ commit }, payload) {
      return authService.put(`/classes/instructor/${payload.classId}/${payload.type}`, payload);
    },
    watchedLesson({ commit }, payload) {
      return authService.put(`/classes/lesson/${payload.classId}/watched`, payload);
    },
    submitAssignmentTolesson({ commit }, payload) {
      return authService.post(`/student-assignments/${payload.parentClass.classId}/${payload.parentClass.lessonId}`, payload);
    },
    setCurretLesson({ commit }, payload) {
      commit('setCurretLesson', payload)
    },
    setShowSubmitAssignment({ commit }, payload) {
      commit('setShowSubmitAssignment', payload)
    },
    setEditClass({ commit }, payload) {
      commit('setEditClass', payload)
    }
  },
  mutations: {
    setEditClass(state, data) {
      state.editClass = data;
    },
    setShowSubmitAssignment(state, flag) {
      state.showSubmitAssignment = flag;
    },
    setCurretLesson(state, cLesson) {
      state.currentLesson = cLesson;
    },
    setWatchedLessobns(state, lessons) {
      state.watchedLessons = lessons;
    },
    setCurrentClass(state, cClass) {
      state.currentClass = cClass;
    },
    setFeeds(state, feeds) {
      state.feeds = feeds;
    },
    setMyClasses(state, myClasses) {
      state.myClasses.type = myClasses.type;
      state.myClasses[myClasses.type] = myClasses.data;
    },
    resetMyClasses(state) {
      state.myClasses.instructor = [];
      state.myClasses.student = [];
      state.myClasses.type = '';
    },
    failure(state, error) {
      state.error = { error };
    }
  },
  getters: {
    allCategories: state => state.allCategories,
    currentClass: state => state.currentClass,
    feeds: state => state.feeds,
    myClasses: state => state.myClasses
  },
}
