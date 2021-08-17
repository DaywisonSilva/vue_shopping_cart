<template>
  <div id="app">
    <ul>
      <li v-for="(product, key) in products" :key="key">
        <Product :product="product" @onAddProduct="addProduct" />
      </li>
    </ul>
    <shopping-cart :items="chosenProducts" @onDelete="removeProduct" @onIncrementQtdProducts="incrementProducts" @onDecrementQtdProducts="decrementProducts"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Product from './components/Product.vue'
import shoppingCart from './components/ShoppingCart.vue'
import data from './api/data.json'

type product = {
  id_product: string
  str_product: string
  str_description: string
  str_url_image: string
  nu_princing: number
  qtd_products: number
}

@Component({
  components: {
    Product,
    shoppingCart,
  },
})
export default class App extends Vue {
  products = data

  chosenProducts: Array<product> = []

  addProduct(product: product): void {
    let productObj = { ...product }
    productObj.qtd_products = 1
    if (this.chosenProducts.length === 0) {
      this.chosenProducts.push(productObj)
    } else {
      let alreadyHasProduct = this.chosenProducts.some(
        (chosenProduct) => chosenProduct.id_product === product.id_product
      )
      if (!alreadyHasProduct) {
        this.chosenProducts.push(productObj)
      } else {
        alert('Você já escolheu esse produto')
      }
    }

    console.log(this.chosenProducts)
  }

  removeProduct(idProduct: string): void {
    console.log(idProduct)
    this.chosenProducts.forEach((el, i) => {
      if (el.id_product === idProduct) {
        this.chosenProducts.splice(i, 1)
      }
    })
  }

  incrementProducts(idProduct: string): void {
    this.chosenProducts.forEach((el, i) => {
      if (el.id_product === idProduct) {
        this.chosenProducts[i].qtd_products++;
      }
    })
  }

  decrementProducts(idProduct: string): void {
    this.chosenProducts.forEach((el, i) => {
      if (el.id_product === idProduct && el.qtd_products > 1) {
        this.chosenProducts[i].qtd_products--;
      }
    })
  }
}
</script>
