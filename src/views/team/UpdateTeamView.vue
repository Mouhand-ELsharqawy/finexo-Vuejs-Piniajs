<template>
    <section class="info_section layout_padding2">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-3 info_col">
        <div class="col-md-2 col-lg-3 info_col ">
          <form @submit.prevent="handleSubmit">
                <input 
                type="text" 
                placeholder="Enter Employee Firstname"
                v-model="employeefirstname" />

                <input 
                type="text" 
                placeholder="Enter Employee Lastname"
                v-model="employeelastname" />

                <input 
                type="text" 
                placeholder="Enter Employee Email"
                v-model="email" />

                <input 
                type="text" 
                placeholder="Enter Employee Phone"
                v-model="phone" />

                <input 
                type="text" 
                placeholder="Enter Employee What's Up"
                v-model="whatsup" />

                <input 
                type="text" 
                placeholder="Enter Employee Position"
                v-model="position" />

                <input 
                type="text" 
                placeholder="Enter Employee Salary"
                v-model="salary" />

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
import { useTeamStore } from "@/stores/TeamStore";
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

    const teamStore = useTeamStore()
    const router = useRouter()
    const route = useRoute()
    const id = route.query.id

    const employeefirstname = ref('')
    const employeelastname = ref('')
    const email = ref('')
    const phone = ref('')
    const whatsup = ref('')
    const position = ref('')
    const salary = ref('')

    const handleSubmit = () => {

        const data = {
            employeefirstname: employeefirstname.value,
            employeelastname: employeelastname.value,
            email: email.value,
            phone: phone.value,
            whatsup: whatsup.value,
            position: position.value,
            salary: salary.value
        }
        
        const teamdata = {
            id: id,
            data: data
        }

        teamStore.updateTeam(teamdata)
        router.push('/team')
    }

    
</script>