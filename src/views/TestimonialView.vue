<template>
  
  <section class="client_section layout_padding" v-if="testimoial">
    <div class="container">
      <div class="heading_container heading_center psudo_white_primary mb_45">
        <h2>
          What says our <span>Customers</span>
        </h2>
      </div>
      <div class="carousel-wrap " v-if="testimoial.length > 0">
        <div class="owl-carousel client_owl-carousel" v-for="test in testimoial" :key="test.id">

          <testimonial-component :data="{test}" />

        </div>
      </div>
      <div v-else>
        OOooops there's no data yet
      </div>
    </div>
  </section>
  

</template>

<script> 
import { useTestimonialStore } from '@/stores/TestimonialStore'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import TestimonialComponent from '@/components/TestimonialComponent.vue'
export default{
  components: { TestimonialComponent },
  setup(){
    const testimonialStore = useTestimonialStore()
  
  const { error, testimoial } = storeToRefs(testimonialStore)
  onMounted(() => testimonialStore.getTestimonial())

  return {
    error, testimoial
  }
  }
}


  

</script>