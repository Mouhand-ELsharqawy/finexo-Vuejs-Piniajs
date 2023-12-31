<template>
  <section class="team_section layout_padding" v-if="customers">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Customers </span>
        </h2>
      </div>

      <div class="team_container" v-if="customers.length> 0">
        <div class="row">


          <div class="col-lg-3 col-sm-6">
            <div class="box ">
              <div class="img-box">
                <img src="../../assets/images/team-1.jpg" class="img1" alt="">
              </div>
              <div class="detail-box">
                <h5>
                  Joseph Brown
                </h5>
                <p>
                  Marketing Head
                </p>
              </div>
              <div class="social_box">
                <router-link to="">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </router-link>
                <router-link to="">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </router-link>
                <router-link to="">
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </router-link>
                <router-link to="">
                  <i class="fa fa-instagram" aria-hidden="true"></i>
                </router-link>
                <router-link to="">
                  <i class="fa fa-youtube-play" aria-hidden="true"></i>
                </router-link>
              </div>

              <div style="display: flex">
                  <router-link :to="{ name: 'updatecustomer', query: { id: customers.id } }">
                    <button type="button" class="btn btn-primary">
                      Update Customer
                    </button>
                  </router-link>
                  <button 
                    type="button" 
                      class="btn btn-danger"
                        @click="handleDelete">
                          Delete Customer
                    </button>
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
    Loading...........
  </section>
</template>



<script setup>
import { useCustomerStore } from "@/stores/customerStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";


    const router = useRouter()
    const route = useRoute()
    const id = route.query.id

    const customerStore = useCustomerStore()
    onMounted(() => customerStore.getOneCustomer(id))
    const { error, customers } = storeToRefs(customerStore)

    const handleDelete = () => {
      customerStore.deleteCustomer(id)
      router.push('/customer')
    }
   
</script>