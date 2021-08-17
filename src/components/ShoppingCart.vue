<template>
  <div class="shoppingCart">
    <table class="shoppingCart__table">
      <tbody>
        <tr v-for="item in items" :key="item.id_product">
          <td class="shoppingCart__firstTableData">
            <img :src="item.str_url_image" class="shoppingCart__image" />
            {{ item.str_product }}
          </td>
          <td>
            {{ getFormatedCurrency(item.nu_princing * item.qtd_products) }}
          </td>
          <td>
            <button @click="$emit('onIncrementQtdProducts', item.id_product)">
              +</button
            ><span>{{ item.qtd_products }}</span
            ><button @click="$emit('onDecrementQtdProducts', item.id_product)">
              -
            </button>
          </td>
          <td @click="$emit('onDelete', item.id_product)">excluir</td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <td>Descrição</td>
          <td>Valor (P x Qtd.)</td>
          <td>Qtd.</td>
        </tr>
      </thead>
    </table>

    <div class="shoppingCart__totalPricing">
      <div>Total</div>
      <div>
        {{ totalPrice }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const shoppingCartProps = Vue.extend({
  props: {
    items: Array,
  },
})

export default class ShoppingCart extends shoppingCartProps {
  get totalPrice(): string {
    let price = 0
    if (this.items.length) {
      price = this.items.reduce((acc: number, crr: any) => {
        return acc + crr.nu_princing * crr.qtd_products
      }, 0)
    }

    return this.getFormatedCurrency(price)
  }

  getFormatedCurrency(value: number): string {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }
}
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
  padding: 10px;
}

.shoppingCart__table {
  width: calc(100% - 20px);
  min-width: 580px;
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

.shoppingCart__totalPricing {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.shoppingCart__totalPricing div:nth-child(2) {
  text-align: end;
}
</style>
