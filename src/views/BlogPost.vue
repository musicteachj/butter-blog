<template>
  <div id="blogPost">
    <Toolbar/>
    <Parallax/>
    <v-container>
      <div v-if="post.data">
        <v-flex xs12>
          <v-card flat>
            <v-container grid-list-md fluid>
              <v-layout row wrap>
                <!-- BLOG -->
                <v-flex class="line" xs9 d-flex>
                  <v-card class="leftCard" flat>
                    <h1 class="is-size-2">{{ post.data.title }}</h1>
                    <h4>{{ post.data.author.first_name }} {{ post.data.author.last_name }}</h4>
                    <img class="featuredImg" :src="post.data.featured_image" alt="">
                    <div class="content" v-html="post.data.body"></div>
                  </v-card>
                </v-flex>
                <!-- RELATED ARTICLES -->
                <v-flex xs3 d-flex>
                  <v-card class="rightCard" flat>
                    <div class="relatedContainer">
                      <h1 class="blogLinksContainer">Related Articles</h1>
                      <v-btn
                        active-class="blogLinks"
                        v-for="(item, index) in relatedArticles" :key="index"
                        :to="'/' + item.slug"
                        :flat="true"
                        type="div"
                        class="bloglinks">
                        <span class="blogTitles">{{ item.title }}</span>
                      </v-btn>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </div>
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