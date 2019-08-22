<template>
  <div id="blogPost2">
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
                        text
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
import lodash from 'lodash'
import { butter } from '@/buttercms'

import Toolbar from '../components/Toolbar'
import Parallax from '../components/Parallax'
// import { resolve } from 'dns';

export default {
  components: {
    Toolbar,
    Parallax
  },
  data() {
    return {
      relatedArticles: [],
      relatedArticlesOne: [],
      relatedArticlesTwo: [],
      relatedArticlesThree: [],
      post: {}
    }
  },
  methods: {
    // Get Post
    getPost() {
      return butter.post.retrieve(this.$route.params.slug)
        .then((res) => {
          this.post = res.data
          resolve()
        }).catch((res) => {

        })
    },
    // Get post by first category
    getPostByCategoryOne(post) {
      return butter.category.retrieve(this.post.data.categories[0].slug, {
        include: 'recent_posts'
      })
      .then((res) => {
        this.relatedArticlesOne = res.data.data.recent_posts;
      })
    },
    // Get post by second category
    getPostByCategoryTwo(post) {
      if (this.post.data.categories[1] != undefined) {
        return butter.category.retrieve(this.post.data.categories[1].slug, {
          include: 'recent_posts'
        })
        .then((res) => {
          this.relatedArticlesTwo = res.data.data.recent_posts;
        })
      } else {
        return butter.category.retrieve(this.post.data.categories[0].slug, {
          include: 'recent_posts'
        })
        .then((res) => {
          this.relatedArticlesThree = res.data.data.recent_posts;
        })
      }
    },
    // Get post by third category
    getPostByCategoryThree(post) {
      if (this.post.data.categories[2] != undefined) {
        return butter.category.retrieve(this.post.data.categories[2].slug, {
          include: 'recent_posts'
        })
        .then((res) => {
          this.relatedArticlesThree = res.data.data.recent_posts;
        })
      } else if (this.post.data.categories[2] && this.post.data.categories[1] != undefined) {
         return butter.category.retrieve(this.post.data.categories[0].slug, {
          include: 'recent_posts'
        })
        .then((res) => {
          this.relatedArticlesThree = res.data.data.recent_posts;
        })
      } else {
         return butter.category.retrieve(this.post.data.categories[0].slug, {
          include: 'recent_posts'
        })
        .then((res) => {
          this.relatedArticlesThree = res.data.data.recent_posts;
        })
      }
    },
    // Merge arrays
    mergeArrays() {
      let combinedArr = [];
      combinedArr.push(this.relatedArticlesOne, this.relatedArticlesTwo, this.relatedArticlesThree)
      let flatten = _.flatten(combinedArr);
      let uniq = _.uniqBy(flatten, 'title');
      this.relatedArticles = uniq;
    }
  },
  watch: {
    $route(to, from) {
      this.getPost()
    }
  },
  created() {
    // Chaining methods, get posts by category
    this.getPost().then(
      (success) => {
        this.getPostByCategoryOne().then(
          (s) => {
            this.getPostByCategoryTwo().then(
              (s) => {
                this.getPostByCategoryThree().then(
                  (s) => {
                    this.mergeArrays();
                  })
              })
          })
      },
      (fail) => {
        console.log(fail)
      })
  },
}
</script>

<style scoped>
#blogPost2 {
  font-family: 'Lato', sans-serif !important;
  background-color: white;
}

.featuredImg {
  width: 100% !important;
  padding-right: 3%;
}

.right-card {
  text-align: center;
}

.line {
  border-right: 1px solid lightgray;
}

.content {
  padding-right: 3%;
}

.relatedContainer {
  position: sticky;
  top: 10px;
  position: -webkit-sticky;
}

.blogLinksHeader {
  font-family: 'Lato', sans-serif !important;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 30px;
}

.blogLinks {
  width: 100%;
  color: green;
  text-decoration: none;
  text-transform: none !important;
  background-color: transparent;
}

.blogLinks:hover {
  text-decoration: underline;
  background-color: transparent !important;
}

.blogLinks:hover:before {
  background-color: transparent;
}

.blogTitles {
  white-space: normal;
  font-size: 16px;
}
</style>

<style>
.content img {
  max-width: 100%;
}
</style>