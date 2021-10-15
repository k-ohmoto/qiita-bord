<template>
  <div>
    <Title :title="title"></Title>
    <hr>
    <div>
      <label for="name">名前</label>
      <br>
      <input type="text" v-model="list.name" id="name">
      <p class="alert" v-if="!list.name">1文字以上入力してください</p>
    </div>
    <div>
      <label for="text">コメント</label>
      <br>
      <textarea v-model="list.comment" id="text"></textarea>
      <p class="alert" v-if="!list.comment">1文字以上入力してください</p>
    </div>
    <br>
    <button @click="updateButton">変更する</button>
    <router-link to="/" tag="button">一覧に戻る</router-link>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'

export default {
  data() {
    return {
      title: '編集'
    }
  },
  components: {
    Title
  },
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
<style lang="css" scoped>
.alert {
  color: red;
}
</style>
