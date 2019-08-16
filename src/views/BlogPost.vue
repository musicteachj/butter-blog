<template>
  <div id="blogPost">
    <Toolbar/>
    <Parallax/>
    <v-container>
      <h1 class="display-3">Blog Post</h1>
    </v-container>
  </div>
</template>

<script>
import Toolbar from '../components/Toolbar'
import Parallax from '../components/Parallax'

export default {
  components: {
    Toolbar,
    Parallax
  },
  data() {
    return {

    }
  }
}
</script>