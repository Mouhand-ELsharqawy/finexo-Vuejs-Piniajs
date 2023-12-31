<template>
  <section class="team_section layout_padding" v-if="teams">
    <div class="container-fluid">
      <div class="heading_container heading_center">
        <h2 class="">
          Our <span> Employee </span>
        </h2>
      </div>

      <div class="team_container" v-if="teams.length > 0">
        <div class="row" v-for="team in teams" :key="team.id">


          <team-list-component :data= {team} />

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
    Loading..........
  </section>
</template>

<script setup> 
import { useTeamStore } from "@/stores/TeamStore";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import teamListComponent from "@/components/teamListComponent.vue";

  const teamStore = useTeamStore()
  onMounted(() => teamStore.getTeam())
  const { error, teams } = storeToRefs(teamStore) 
  

 
</script>