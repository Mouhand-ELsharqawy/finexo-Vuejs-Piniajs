<template>
    <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
        <div class="col-md-2 col-lg-3 info_col ">
          <form @submit.prevent="handleSubmit">
                <input 
                type="text" 
                placeholder="Enter Service Type"
                v-model="type" />

                <input 
                type="text" 
                placeholder="Enter Service Description"
                v-model="desc" />

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
import { useServiceStore } from "@/stores/serviceStore";
import { ref } from "vue";
import { useRouter } from "vue-router";

    const serviceStore = useServiceStore()
    const router = useRouter()

    const type = ref('')
    const desc = ref('')

    const handleSubmit = () => {
        const data = {
            type: type.value,
            desc: desc.value
        }

        serviceStore.addService(data)
        router.push('/services')
    }

</script>