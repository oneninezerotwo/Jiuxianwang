<template>
    <div id="fl">
        我的
    </div>
</template>
<script>
export default {
    data() {
    return {
      title: "我的酒仙",
    };
  },
  created() {
    this.$store.state.title = this.title;
  },
}
</script>

<style scoped>
#fl{
    margin-top: 100px;
}
</style>
