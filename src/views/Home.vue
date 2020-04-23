<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>


export default {
  name: 'Home',
  created() {
    this.getData()
  },
  methods:{
    async getData(){
      let { data }  = await this.$services('viewCount')
      console.log('data',data)
    }
  }
}
</script>
