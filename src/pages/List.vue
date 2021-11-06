<template>
  <div>
    <Title :title="title"></Title>
    <div v-for="list in lists" :key="list.id">
      <p>名前:{{ list.name }}</p>
      <p>コメント:{{ list.comment }}</p>
      <router-link :to="{ name: 'Edit', params: { id: list.id } }" tag="button"
        >編集</router-link
      >
      <button @click="deleteButton(list.id)">削除</button>
      <hr />
    </div>
    <router-link to="/post" tag="button">投稿する</router-link>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";

export default {
  data() {
    return {
      title: "記事一覧",
    };
  },
  components: {
    Title,
  },
  created() {
    this.$store.dispatch("fetchLists");
  },
  computed: {
    lists() {
      return this.$store.state.lists;
    },
  },
  methods: {
    deleteButton(id) {
      if (confirm("リストを削除しますか？")) {
        this.$store.dispatch("removeList", id);
      }
    },
  },
};
</script>
