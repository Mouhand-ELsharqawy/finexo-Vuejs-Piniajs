<template>
  <section class="team_section layout_padding" v-if="customers">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Customers </span>
        </h2>
      </div>

      <div class="team_container" v-if="customers.length> 0">
        <div class="row" v-for="customer in customers" :key="customer.id"> 
          <div style="display: flex;">
          <customer-list-component :data= {customer} />
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
import CustomerListComponent from "@/components/CustomerListComponent.vue";



    const customerStore = useCustomerStore()
    onMounted(() => customerStore.getCustomer())
    const { error, customers } = storeToRefs(customerStore)
  

</script>