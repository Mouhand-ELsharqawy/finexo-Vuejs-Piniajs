import axios from "axios";
import { defineStore } from "pinia";

export const useTeamStore = defineStore("teamStore",{
  state: () => ({
    teams: [], error: null
  }),
  actions: {
    async getTeam(){
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data

        this.teams = data
      }catch(error){
        this.error = error.message
      }
    },

    async addTeam(teamdata){
      try{
        const res = await axios.post('http://localhost:3000/team',teamdata)
        const data = await res.data

        this.teams.push(data)
      }catch(error){
        this.error = error.message
      }
    },

    async getOneTeam(id){
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.data

        this.teams = data
      }catch(error){
        this.error = error.message
      }
    },

    async updateTeam(teamdata){
      try{
        const res = await axios.patch('http://localhost:3000/team/'+teamdata.id,teamdata.data)
        const data = await res.data

        this.teams = this.teams.splice(this.teams[data.id],1,data)
      }catch(error){
        this.error = error.message
      }
    },

    async deleteTeam(id){
      try{
        await axios.delete('http://localhost:3000/team/'+id)

        this.teams = this.teams.splice(id,1)
      }catch(error){
        this.error = error.message
      }
    }
  } 
})