<template>
  <div id="blogPost">
    <Toolbar/>
    <Parallax/>
    <h1 class="display-3">Blog Post</h1>
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