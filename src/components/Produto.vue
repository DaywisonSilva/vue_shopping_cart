<template>
  <div class="produto">
    <div class="produto__box">
      <img :src="produto.str_url_image" alt="" class="produto__image" />
    </div>
    <div class="produto__box produto__box--description">
      <app-title>{{ produto.str_product }}</app-title>
      <app-subtitle>{{ produto.str_description }}</app-subtitle>
    </div>

    <div class="produto__box">
      <app-btn @click="$emit('onAddProduct', produto)">Adicionar</app-btn>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const ProdutoProps = Vue.extend({
  props: {
    produto: Object,
  },
})

export default class HelloWorld extends ProdutoProps {
  message = 'olá'
}
</script>

<style scoped>
.produto {
  width: 100%;
  min-height: 150px;
  max-width: 600px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.produto__image {
  width: 120px;
  height: 120px;
  object-fit: cover;
}

.produto__box {
  margin: 10px 10px;
}

.produto__box--description {
  width: 100%;
  min-width: 200px;
  max-width: 320px;
}
</style>
