<template>
  <div class="product">
    <div class="product__box">
      <img :src="product.str_url_image" alt="" class="product__image" />
      <div class="product__pricing">{{ getNumberFormat(product.nu_princing) }}</div>
    </div>
    <div class="product__box product__box--description">
      <app-title>{{ product.str_product }}</app-title>
      <app-subtitle>{{ product.str_description }}</app-subtitle>
    </div>
    <div class="product__box">
      <app-btn @click="$emit('onAddProduct', product)">Adicionar</app-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const productProps = Vue.extend({
  props: {
    product: Object,
  },
})

export default class HelloWorld extends productProps {
  message = 'olá'

  getNumberFormat(value:number): string {
    return new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(value)
  }
}
</script>

<style scoped>
.product {
  width: 100%;
  min-height: 150px;
  max-width: 600px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.product__image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.product__box {
  margin: 10px 8px;
}

.product__box--description {
  width: 100%;
  min-width: 200px;
  max-width: 320px;
}

.product__pricing {
  text-align: center;
  padding: 4px;
  border-radius: 4px;
  background-color: rgb(42, 165, 144);
  color: white;
}
</style>
