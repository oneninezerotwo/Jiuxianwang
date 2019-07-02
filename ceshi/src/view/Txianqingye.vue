<template>
    <div>
        <Therder />
        <Ttxianqinye />
    </div>
</template>
<script>
import Therder from '../components/Thomes/Therder'
import Ttxianqinye from '../components/Thomes/Ttxianqinye'
export default {
        data(){
            return{
                title:'详情页'
            }
        },
        created(){
             this.$store.state.title = this.title;
             console.log(this);
        },

      


        components:{
            Therder,
            Ttxianqinye
    }
    
    
    
}
</script>

<style lang="scss" scoped>



</style>

