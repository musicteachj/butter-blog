<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn 
          v-for="(i, index) in icons" 
          :key="index" 
          icon
          :href="i.href"
        >
          <v-icon color="">{{i.iconName}}</v-icon>
        </v-btn>
      </template>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        {iconName: 'mdi-facebook', href: 'https://www.facebook.com'},
        {iconName: 'mdi-twitter', href: 'https://www.twitter.com'},
        {iconName: 'mdi-pinterest', href: 'https://www.twitter.com'},
        {iconName: 'mdi-instagram', href: 'https://www.twitter.com'},
      ]
    }
  }
}
</script>