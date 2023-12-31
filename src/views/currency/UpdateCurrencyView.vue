<template>
  <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
        <div class="col-md-2 col-lg-3 info_col ">
          <form @submit.prevent="handleSubmit">
                <input 
                type="text" 
                placeholder="Enter Currency Name"
                v-model="name" />
                <input 
                type="text" 
                placeholder="Enter Currency Type"
                v-model="type" />
                <input 
                type="number" 
                placeholder="Enter Currency Price"
                v-model="price" />
            <button type="submit">
              Submit
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script setup> 
import { useCurrencyStore } from "@/stores/currencyStore";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

    const currenctStore = useCurrencyStore()
    const router = useRouter()
    const route = useRoute()
    const id = route.query.id

    const name = ref('')
    const type = ref('')
    const price = ref('')

    const handleSubmit = () => {
        const data = {
            name: name.value,
            type: type.value,
            price: price.value
        }

        const currenctdata = {
            id: id,
            data: data
        }

        currenctStore.updateCurrency(currenctdata)
        router.push('/currency')
    }

  
</script>