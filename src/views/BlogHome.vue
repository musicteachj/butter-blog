<template>
  <div id="blog">
    <Toolbar/>
    <Parallax/>
    <h1 class="display-4">Blog Home</h1>
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