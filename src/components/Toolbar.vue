<template>
  <div>
    <v-toolbar>
      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn
          :style="iconMargins"
          target="_blank"
          v-for="(i, index) in icons" 
          :key="index" 
          icon
          :href="i.href"
          dark
        >
          <v-icon 
            color="green"
            :size="iconSize">
            {{i.iconName}}
          </v-icon>
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
  },
  computed: {
    iconSize() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '22px'
        case 'sm': return '28px'
        case 'md': return '32px'
        case 'lg': return '36px'
        case 'xl': return '46px'
      }
    },
    iconMargins() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 'margin: 0 2% 0 2%'
        case 'sm': return 'margin: 0 2.5% 0 2.5%'
        case 'md': return 'margin: 0 2.5% 0 2.5%'
        case 'lg': return 'margin: 0 2.5% 0 2.5%'
        case 'xl': return 'margin: 0 2.5% 0 2.5%'
      }
    }
  }
}
</script>