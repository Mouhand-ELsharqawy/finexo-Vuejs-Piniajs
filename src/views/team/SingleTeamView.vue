<template>
  <section class="team_section layout_padding">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Employee </span>
        </h2>
      </div>

      <div class="team_container">
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
                  <router-link :to="{ name: 'updateteam', query: { id: teams.id } }">
                    <button type="button" class="btn btn-primary">
                      Update Employee
                    </button>
                  </router-link>
                  <button 
                    type="button" 
                      class="btn btn-danger"
                        @click="handleDelete">
                          Delete Employee
                    </button>
                </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </section>

</template>


<script setup>
import { useTeamStore } from "@/stores/TeamStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

  const route = useRoute()
  const router = useRouter()
  const id = route.query.id

  const teamStore = useTeamStore()
  onMounted(() => teamStore.getOneTeam(id))
  
  const { error, teams } = storeToRefs(teamStore) 

  const handleDelete = () => {
    teamStore.deleteTeam(id)
    router.push('/team')
  }

  
</script>