<template>
    <div id="fl">
       裸价清仓
    </div>
</template>
<script>
export default {
    data() {
    return {
      title: "裸价清仓",
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
