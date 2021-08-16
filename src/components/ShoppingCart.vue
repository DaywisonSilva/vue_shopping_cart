<template>
  <div class="shoppingCart">
    <table class="shoppingCart__table">
      <tbody>
        <tr v-for="item in items" :key="item.id_product">
          <td class="shoppingCart__firstTableData">
            <img :src="item.str_url_image" class="shoppingCart__image" />
            {{ item.str_product }}
          </td>
          <td>{{ item.nu_princing }}</td>
          <td><button>+</button>/ <button>-</button></td>
          <td>excluir</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <td>Descrição</td>
          <td>Valor (P x Qtd.)</td>
          <td>Qtd.</td>
        </tr>
      </thead>
      <tfoot>
        <tr>
          Total: R$80,00
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const shoppingCartProps = Vue.extend({
  props: {
    items: Array,
  },
})

export default class ShoppingCart extends shoppingCartProps {}
</script>

<style scoped>
.shoppingCart {
  width: 100%;
  min-height: 150px;
  max-width: 600px;
  margin: 30px auto 10px auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: #3d3d3d;
  border-radius: 18px;
  word-wrap: break-word;
  color: white;
  overflow-x: auto;
}

.shoppingCart__table {
  width: 100%;
  min-width: 600px;
  overflow-x: auto;
}

.shoppingCart__image {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.shoppingCart__firstTableData {
  display: flex;
  align-items: center;
}
</style>
