<template>
  
  <section v-if="services" class="service_section layout_padding">
    <div  v-if="services.length > 0" class="service_container">
      <div class="container " v-for="service in services" :key="service.id">
       
        <service-list-component :data= {service} />
        </div>
       </div>
     <div v-else>
        OOooops there's no data yet 
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
import ServiceListComponent from "@/components/ServiceListComponent.vue";
import { useServiceStore } from "@/stores/serviceStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";



  const serviceStore = useServiceStore()
  onMounted(() => serviceStore.getService())
  const { error, services } = storeToRefs(serviceStore)
  

  
</script>