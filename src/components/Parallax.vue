<template>
  <div class="blogImageContainer">
    <v-parallax 
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
      class="blogMainImage">
      <h1 class="white--text mb-2 display-3 test-xs-center blogHeading">Butter Image</h1>
      <v-layout 
        slot="placeholder"
        fill-height
        align-center
        justify-center
        ma-0>
        <v-progress-circular
          indeterminate
          color="green">

        </v-progress-circular>
      </v-layout>
    </v-parallax>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<style scoped>
.blogImageContainer {
  background-color: white;
  height: 350px;
  width: 100%;
}

.blogMainImage {
  max-width: 100%;
  max-height: 100%;
  object-fit: fill !important;
}

.blogHeading {
  margin-top: 6% !important;
  text-shadow: 3px 3px black;
  font-size: 4.5vw !important;
  font-family: 'Lato', sans-serif !important;
}
</style>