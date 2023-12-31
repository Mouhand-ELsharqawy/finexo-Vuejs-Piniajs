<template>
    <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
        <div class="col-md-2 col-lg-3 info_col ">
          <form @submit.prevent="handleSubmit">
                <input 
                type="text" 
                placeholder="Enter Customer  Firstname"
                v-model="firstname" />

                <input 
                type="text" 
                placeholder="Enter Customer  Lastname"
                v-model="lastname" />

                <input 
                type="text" 
                placeholder="Enter Customer Phone"
                v-model="phone" />
                <input 
                type="text" 
                placeholder="Enter Customer Acount"
                v-model="acount" />
                <input 
                type="email" 
                placeholder="Enter Customer Gmail"
                v-model="gmail" />
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
import { useCustomerStore } from "@/stores/customerStore"
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router"

    const customerStore = useCustomerStore()
    const router = useRouter()
    const route = useRoute()
    const id = route.query.id

    const firstname = ref('')
    const lastname = ref('')
    const phone = ref('')
    const gmail = ref('')
    const acount = ref('')

    const handleSubmit = () => {
        const data = {
            firstname: firstname.value,
            lastname: lastname.value,
            phone: phone.value,
            gmail: gmail.value,
            acount: acount.value,
        }

        const customerdata = {
            data: data,
            id: id 
        }

        customerStore.updateCustomer(customerdata)
        router.push('/customer')
    }


</script>