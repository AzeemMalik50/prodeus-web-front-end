<template>
      <form action="/search" class="search w-form">
            <img src="@/assets/Search.svg" class="image-4" />
            <input type="search" class="search-input w-input" maxlength="256" v-on:keydown.enter.prevent="searchProdeus" name="query" v-model="query" placeholder="Search prodeus" id="search" required="">
            <input type="submit" value="Search" class="search-button w-button">
            </form>
</template>
<script>
export default {
  data() {
    return {
      query: ""
    };
  },
  methods: {
    searchProdeus() {
      if (this.query) {
     this.$router.push({ name: "search", query: { query: this.query } });
      }
    }
  }
};
</script>
