<template>
  <div>
    <h1>掲示板</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: '掲示板'
    }
  }
}
</script>