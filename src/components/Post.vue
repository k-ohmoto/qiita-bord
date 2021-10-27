<template>
  <div>
    <Title :title="title"></Title>
    <hr>
    <div>
      <label for="name">名前</label>
      <br>
      <input type="text" v-model="name" id="name">
      <p class="alert" v-if="!this.name">1文字以上入力してください</p>
      <p class="ok" v-else>OK!</p>
    </div>
    <div>
      <label for="text">コメント</label>
      <br>
      <textarea v-model="comment" id="text"></textarea>
      <p class="alert" v-if="!this.comment">1文字以上入力してください</p>
      <p class="ok" v-else>OK!</p>
    </div>
    <br>
    <button @click="addList" :disabled="!this.comment || !this.name">投稿する</button>
    <router-link to="/" tag="button">記事一覧</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
import Title from '@/components/Title.vue'

export default {
  data() {
    return {
      name: '',
      comment: '',
      title: '投稿'
    }
  },
  components: {
    Title
  },
  methods: {
    addList() {
      if (this.name === '' || this.comment === '') return;
      firebase.firestore().collection(`posts`).add({
        name: this.name,
        comment: this.comment,
        timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
      }).then(() => {
        alert('投稿が完了しました。')
        this.name = '';
        this.comment = '';
      })
    },
  }
}
</script>

<style lang="css" scoped>
.alert {
  color: red;
}
.ok {
  color: green;
  font-weight: bold;
}
</style>