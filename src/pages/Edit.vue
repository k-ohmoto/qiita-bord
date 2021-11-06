<template>
  <div>
    <Title :title="title"></Title>
    <Input></Input>
    <Textarea />
    <br />
    <button @click="updateButton" :disabled="!list.comment || !list.name">
      変更する
    </button>
    <router-link to="/" tag="button">一覧に戻る</router-link>
  </div>
</template>

<script>
import Title from "@/components/atoms/Title.vue";
import Input from "@/components/molecules/form/Input.vue";
import Textarea from "@/components/molecules/form/Textarea.vue";

export default {
  data() {
    return {
      title: "編集",
    };
  },
  components: {
    Title,
    Input,
    Textarea,
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
  },
  methods: {
    updateButton() {
      this.$store.dispatch("updateList", this.list);
    },
  },
};
</script>
