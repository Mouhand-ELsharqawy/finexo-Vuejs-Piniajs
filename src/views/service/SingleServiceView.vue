<template>
  
  <section class="service_section layout_padding" v-if="services">
    <div class="service_container">
      <div class="container " v-if="services.length > 0">
       
        <div class="row">
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
                  <router-link :to="{ name: 'updateservice', query: { id: services.id } }">
                    <button type="button" class="btn btn-primary">
                      Update Service
                    </button>
                  </router-link>
                  <button 
                    type="button" 
                      class="btn btn-danger"
                        @click="handleDelete">
                          Delete Service
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        OOooops there's no data yet 
      </div>
    </div>
  </section>
  <section v-else-if="error">
    {{ error }}
  </section>
  <section v-else>
    Loading....
  </section>
</template>

<script setup>
import { useServiceStore } from "@/stores/serviceStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";



  const serviceStore = useServiceStore()
  const route = useRoute()
  const router = useRouter()
  const id = route.query.id
  
  onMounted(() => serviceStore.getOneService(id))
  const { error, services } = storeToRefs(serviceStore)

  const handleDelete = () => {
    serviceStore.deleteService(id)
    router.push('/service')
  }

</script>