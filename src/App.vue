<template>
  <div id="app">
    <Produto
      v-for="(produto, key) in produtos"
      :produto="produto"
      :key="key"
      @onAddProduct="addProduct"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Produto from './components/Produto.vue'
import data from './api/data.json'

type product = {
  str_product: string
  str_description: string
  str_url_image: string
  nu_princing: number
}

@Component({
  components: {
    Produto,
  },
})
export default class App extends Vue {
  produtos = data

  produtosEscolhidos = []

  addProduct(product: product): void {
    this.produtosEscolhidos.push(product);
  }
}
</script>
