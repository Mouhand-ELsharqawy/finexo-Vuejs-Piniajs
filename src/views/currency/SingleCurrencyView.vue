<template>
  
  <section class="service_section layout_padding" v-if="currencies">
    <div class="service_container">
      <div class="container ">
       
        <div class="row" v-if="currencies.length > 0">
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="../../assets/images/s1.png" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Currency Wallet
                </h5>
                <p>
                  fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  The
                  point of using
                </p>
                <div style="display: flex">
                  <router-link :to="{ name: 'updatecurrency', query: { id: currencies.id } }">
                    <button type="button" class="btn btn-primary">
                      Update Currency
                    </button>
                  </router-link>
                  <button 
                    type="button" 
                      class="btn btn-danger"
                        @click="handleDelete">
                          Delete Currency
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          Ooops there's no data yet
        </div>
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
import { useCustomerStore } from "@/stores/customerStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

    const router = useRouter()
    const route = useRoute()
    const id = route.query.id
    const currencyStore = useCustomerStore()
    
    onMounted(() => currencyStore.getOneCurrency(id))
    const { error, currencies } = storeToRefs(currencyStore)

    const handleDelete = () => {
      currencyStore.deleteCurrency(id)
      router.push('/currency')
    }
 

</script>