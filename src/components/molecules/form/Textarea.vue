<template>
  <div>
    <label for="text">コメント</label>
    <br />
    <textarea
      v-model="list.comment"
      id="text"
      placeholder="1文字以上入力してください"
    ></textarea>
  </div>
</template>
<script>
export default {
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
};
</script>
