<template>
  <div>
    <h1>掲示板！</h1>
    名前
    <div><input type="text" v-model="name"></div>
    コメント
    <div><textarea v-model="comment"></textarea></div>
    <br>
    <button @click="submitPosts">投稿する</button>
    <router-link to="/list">一覧</router-link>
  </div>
</template>

<script>
import axios from 'axios';
import list from '@/components/List.vue'

// eslint-disable-next-line no-unused-vars
const url = 'https://firestore.googleapis.com/v1/projects/qiita-bord/databases/(default)/documents/posts';

export default {
  data() {
    return {
      name: '',
      comment: '',
      posts: ''
    }
  },
  comments: {
    list
  },
  created() {
    this.getPosts();
  },
  methods: {
    submitPosts() {
      axios.post(
          url,
          {
            fields: {
              name: {
                stringValue: this.name
              },
              comment: {
                stringValue: this.comment
              }
            }
          }
      ).then(() => {
        this.name = '';
        this.comment = '';
        this.getPosts();
      })
    },
    getPosts() {
      axios.get(
          url
      )
          .then(res => {
            this.posts = res.data.documents;
          });
    }
  }
}
</script>