<template>
  <div>
    <label for="name">名前</label>
    <br />
    <input
      type="text"
      v-model="list.name"
      id="name"
      placeholder="1文字以上入力してください"
    />
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
