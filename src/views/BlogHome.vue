<template>
  <div id="blog">
    <Toolbar/>
    <Parallax/>
    <v-container>
      <div>
        <v-layout>
          <v-flex xs12>
            <v-card flat>
              <v-container grid-list-md fluid>
                <v-layout
                  class="line"
                  v-for="(post, index) in posts"
                  :key="post.slug + '_' + index"
                  row
                  wrap
                >
                  <v-flex xs6 d-flex>
                    <!-- Blog 1 Card 1 -->
                      <!-- IF -->
                        <v-card v-if="isOdd(index)" flat tile style="margin-right:20px">
                          <div class="boxTwoImage">
                            <img class="featuredImage" :src="post.featured_image" alt=""/>
                          </div>
                        </v-card>
                      <!-- ELSE -->
                        <v-card v-else id="blog1Card1" flat tile style="margin-right:20px">
                          <h1>{{post.title}}</h1>
                          <p>{{post.author.first_name}} / {{moment(post.published).format("ll")}}</p>
                          <p>
                            {{post.summary}}
                          </p>
                          <div>
                            <v-btn
                              :to="'/' + post.slug"
                              text
                              type="div"
                              class="blogLinks">
                                Read More
                            </v-btn>
                            <!-- <v-icon class="arrow">keyboard_arrow_right</v-icon>
                            <v-icon class="arrow arrow2"> keyboard_arrow_right</v-icon> -->
                          </div>
                        </v-card>
                    <!-- End Blog Card 1 -->
                  </v-flex>
                  <v-flex xs6 d-flex>
                    <!-- Blog 1 Card 2 -->
                      <!-- IF -->
                        <v-card v-if="isOdd(index)" id="blog1Card2" flat tile style="margin-left:20px">
                          <h1>{{post.title}}</h1>
                          <p>{{post.author.first_name}} / {{moment(post.published).format("ll")}}</p>
                          <p>
                            {{post.summary}}
                          </p>
                          <div>
                            <v-btn
                              :to="'/' + post.slug"
                              text
                              type="div"
                              class="blogLinks">
                                Read More
                            </v-btn>
                            <!-- <v-icon class="arrow">keyboard_arrow_right</v-icon>
                            <v-icon class="arrow arrow2"> keyboard_arrow_right</v-icon> -->
                          </div>
                        </v-card>
                      <!-- ELSE -->
                        <v-card v-else flat tile style="margin-left:20px">
                          <div class="boxTwoImage">
                            <img class="featuredImage" :src="post.featured_image" alt=""/>
                          </div>
                        </v-card>
                    <!-- End Blog Card 2 -->
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
      </div>
      <div class="text-xs-center">
        <v-pagination
          color="green"
          circle
          @input="pagGetPosts"
          v-model="page"
          :length="2"/>
      </div>
    </v-container>
  </div> <!-- End of #blog div -->
</template>

<script>
import Toolbar from '../components/Toolbar'
import Parallax from '../components/Parallax'

import { butter } from '@/buttercms'
const moment = require('moment');

export default {
  components: {
    Toolbar,
    Parallax
  },
  data() {
    return {
      page: 1,
      posts: [],
      categories: [],
      selectedBlog: false,
      moment: moment,
    }
  },
  methods: {
    isOdd(num) {
      return num % 2;
    },
    getPosts(page) {
      butter.post.list({
        page: this.page,
        page_size: 2
      }).then((res) => {
        this.posts = res.data.data
      })
    },
    getCategories() {
      butter.category.list().then((res) => {})
    },
    getPostsByCategory() {
      butter.category.retrieve('test-category-slug', {
        include: 'recent-posts'
      }).then((res) => {})
    }
  },
  computed: {
    pagGetPosts(page) {
      butter.post.list({
        page: this.page,
        page_size: 2
      }).then((res) => {
        this.posts = res.data.data
      })
    }
  },
  created() {
    this.getPosts();
    this.getCategories();
    this.getPostsByCategory();
  }
}
</script>

<style scoped>
#blog {
  font-family: 'Lato', sans-serif !important;
  background-color: white;
}

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

.line {
  padding-bottom: 2%;
  padding-top: 2%;
  border-bottom: 1px solid lightgrey;
}

#blogCard1, #blogCard2 {
  font-family: 'Lato', sans-serif !important;
}

.blogLinks {
  color: green;
  text-decoration: none;
  text-transform: none !important;
  margin-left: -15px;
  margin-top: 1px;
}

.blogLinks:hover {
  text-decoration: underline;
  background-color: none !important;
}

.blogLinks:hover:before {
  background-color: transparent;
}

.arrow {
  color: green;
  font-size: 15px;
  margin-left: -25px;
}

.arrow2 {
  margin-left: -10px;
}

.boxTwoImage {
  background-color: white;
  height: 100%;
  width: 100%;
}

.featuredImage {
  width: 100%;
  height: 100%;
}
</style>