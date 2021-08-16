<template>
  <div id="app">
    <Product
      v-for="(product, key) in products"
      :product="product"
      :key="key"
      @onAddProduct="addProduct"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Product from './components/Product.vue'
import data from './api/data.json'

type product = {
  id_product: string
  str_product: string
  str_description: string
  str_url_image: string
  nu_princing: number
}

@Component({
  components: {
    Product,
  },
})
export default class App extends Vue {
  products = data

  chosenProducts: Array<product> = []

  addProduct(product: product): void {
    if (this.chosenProducts.length === 0) {
      this.chosenProducts.push(product)
    } else {
      let alreadyHasProduct = this.chosenProducts.some(chosenProduct => chosenProduct.id_product === product.id_product)
      if(!alreadyHasProduct) this.chosenProducts.push(product)
      else alert('Você já escolheu esse produto')
    }

    console.log(this.chosenProducts)
  }
}
</script>
