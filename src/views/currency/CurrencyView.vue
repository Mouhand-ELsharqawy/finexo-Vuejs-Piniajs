<template>
  
  <section class="service_section layout_padding" v-if="currencies">
    <div class="service_container">
      <div class="container" v-if="currencies.length > 0">
       
        <div class="row" v-for="currency in currencies" :key="currency.id">        

         <currency-list-component :data= {currency} />

        </div>
      </div>
      <div v-else>
          Ooops there's no data yet
        </div>
    </div>
  </section>
  <section v-else-if="error">
    {{ error }}
  </section>
  <div v-else>
    Loading....
  </div>
</template>

<script setup>
import CurrencyListComponent from "@/components/CurrencyListComponent.vue";
import { useCurrencyStore } from "@/stores/currencyStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";



    const currencyStore = useCurrencyStore()
    onMounted(() => currencyStore.getCurrency())
    const { error, currencies } = storeToRefs(currencyStore)
   
</script>