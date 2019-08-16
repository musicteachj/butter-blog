<template>
  <div id="blog">
    <Toolbar/>
    <Parallax/>
    <v-container>
      <h1 class="display-4">Blog Home</h1>

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
                              :to="'/blogHome/' + post.slug"
                              flat
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
                              :to="'/blogHome/' + post.slug"
                              flat
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
          @input="pageGetPosts"
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
    }
  },
  computed: {

  },
  created() {

  }
}
</script>

<style scoped>

</style>