import { authService } from '../_services/auth.service';
import router from '@/router';
import axios from 'axios';

export const profile = {
  namespaced: true,
  state: {
    error: null,
    profile: {},
    profileForm: '',
    PROFILE_FORMS: {
      ABOUT_ME: 'aboutMe',
      BASIC_INFO: 'basicInfo',
      EDUCATION: 'eduction',
      WORK: 'work',
      selectedEducationIndex: 0,
      selectedWorkIndex: 0
    }
  },
  actions: {
    setEducationIndex({ commit }, index) {
      commit('setEducationIndex', index);
    },
    getProfile({ commit }, userId) {
      commit('resetProfile');
      const UserId = userId || JSON.parse(localStorage.getItem('user'))._id;
      authService.get(`/user/profile/${UserId}`)
        .then(response => {
          commit('setProfile', response.data);
        },
          error => commit('failure', error));
    },
    updateProfile({ commit }, payload) {
      const UserId = JSON.parse(localStorage.getItem('user'))._id;
      authService.put(`/user/profile/${UserId}`, payload)
        .then(response => {
          commit('setProfile', response.data);
        },
          error => commit('failure', error));
    },
    setProfileForm({ commit }, formName) {
      commit('setProfileForm', formName);
    },
    addNewEducation({ commit }, education) {
      commit('addNewEducation', education);
    },
    addNewWorkExperience({ commit }, work) {
      commit('addNewWorkExperience', work);
    },
    setWorkExperienceIndex({ commit }, index) {
      commit('setWorkExperienceIndex', index);
    },
    resetFormData({ commit }) {
      commit('resetFormData');
    },
    addConnection({ commit }, connectionId) {
      authService.patch(`user/connections/${connectionId}`)
        .then(response => {
          commit('setProfile', response.data);
        },
          error => commit('failure', error));
    },
    removeConnection({ commit }, connectionId) {
      authService.patch(`user/connections/${connectionId}/remove`)
        .then(response => {
          commit('setProfile', response.data);
        },
          error => commit('failure', error));
    },
    getProdegreesData({ commit }, connectionId) {
      return authService.get('prodegrees');
    }
  },
  mutations: {
    setProfile(state, profileData) {
      state.profile = profileData;
    },
    resetProfile(state) {
      state.profile = {};
    },
    setProfileForm(state, formName) {
      state.profileForm = formName;
    },
    setEducationIndex(state, index) {
      state.PROFILE_FORMS.selectedEducationIndex = index;
    },
    addNewEducation(state, education) {
      state.profile.education.push(education);
    },
    removeEducation(state, index) {
      state.profile.education = state.profile.education.splice(index, 1);
    },
    resetFormData(state) {
      state.profileForm = '';
      state.profile.education = state.profile.education.filter(item => item._id);
      state.profile.workExperience = state.profile.workExperience.filter(item => item._id);
    },
    setWorkExperienceIndex(state, index) {
      state.PROFILE_FORMS.selectedWorkIndex = index;
    },
    addNewWorkExperience(state, education) {
      state.profile.workExperience.push(education);
    },
    removeWorkExperience(state, index) {
      state.profile.workExperience = state.profile.workExperience.splice(index, 1);
    },
    failure(state, err) {
      state.error = err;
    }
  },
  getters: {
    profile: state => state.profile
  },
}
