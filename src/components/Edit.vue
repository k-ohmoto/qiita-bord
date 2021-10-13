<template>
  <div>
    <h2>編集</h2>
    <hr>
    <div>
      <label for="name">名前</label>
      <br>
      <input type="text" v-model="list.name" id="name">
    </div>
    <div>
      <label for="text">コメント</label>
      <br>
      <textarea v-model="list.comment" id="text"></textarea>
    </div>
    <br>
    <button @click="updateButton">変更する</button>
    <router-link to="/" tag="button">一覧に戻る</router-link>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('matchList', {
          param: this.param,
        }
    )
  },
  computed: {
    lists() {
      return this.$store.state.lists
    },
    param() {
      return this.$route.params.id
    },
    list() {
      return this.$store.state.list
    }
  },
  methods: {
    updateButton() {
      this.$store.dispatch('updateList', this.list)
    },
  },
}
</script>