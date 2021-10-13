<template>
  <div>
    <h2>投稿画面</h2>
    <hr>
    <div>
      <label for="name">名前</label>
      <br>
      <input type="text" v-model="name" id="name" autofocus="">
    </div>
    <div>
      <label for="text">コメント</label>
      <br>
      <textarea v-model="comment" id="text"></textarea>
    </div>
    <br>
    <button @click="addList">投稿する</button>
    <router-link to="/" tag="button">記事一覧</router-link>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      name: '',
      comment: '',
    }
  },
  methods: {
    addList() {
      if (this.name === '' || this.comment === '') return;
      firebase.firestore().collection(`posts`).add({
        name: this.name,
        comment: this.comment,
      }).then(() => {
        this.name = '';
        this.comment = '';
      })
    },
  }
}
</script>