<template>
  <div>
    <Title :title="title"></Title>
    <div>
      <label for="name">名前</label>
      <br />
      <input
        type="text"
        v-model="name"
        id="name"
        placeholder="1文字以上入力してください"
      />
    </div>
    <div>
      <label for="text">コメント</label>
      <br />
      <textarea
        v-model="comment"
        id="text"
        placeholder="1文字以上入力してください"
      ></textarea>
    </div>
    <br />
    <button @click="addList" :disabled="!this.comment || !this.name">
      投稿する
    </button>
    <router-link to="/" tag="button">記事一覧</router-link>
  </div>
</template>

<script>
import firebase from "firebase";
import Title from "@/components/atoms/Title.vue";

export default {
  data() {
    return {
      name: "",
      comment: "",
      title: "投稿",
    };
  },
  components: {
    Title,
  },
  methods: {
    addList() {
      if (this.name === "" || this.comment === "") return;
      firebase
        .firestore()
        .collection(`posts`)
        .add({
          name: this.name,
          comment: this.comment,
          timestamp: firebase.firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
          alert("投稿が完了しました。");
          this.name = "";
          this.comment = "";
        });
    },
  },
};
</script>
