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
                            <v-icon class="arrow">keyboard_arrow_right</v-icon>
                            <v-icon class="arrow arrow2"> keyboard_arrow_right</v-icon>
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
                            <v-icon class="arrow">keyboard_arrow_right</v-icon>
                            <v-icon class="arrow arrow2"> keyboard_arrow_right</v-icon>
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
          color=""
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

</style>