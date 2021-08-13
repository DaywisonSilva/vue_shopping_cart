<template>
  <div class="produto">
    <h1 @click="onClick">Produtos</h1>
    <CButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CButton from '@/components/CButton'

@Component({
  components: {
    CButton,
  },
})
export default class HelloWorld extends Vue {
  message = 'olá'

  onClick(): void {
    console.log(this.message)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
