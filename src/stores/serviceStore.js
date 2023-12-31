import axios from "axios";
import { defineStore } from "pinia";

export const useServiceStore = defineStore("serviceStore",{
    state: () => ({
        services: [], error: null
    }),
    actions: {
        async getService(){
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
                const data = await res.data

                this.services = data
            }catch(error){
                this.error = error.message
            }
        },

        async addService(servicedata){
            try{
                const res = await axios.post('http://localhost:3000/service',servicedata)
                const data = await res.data

                this.services.push(data)
            }catch(error){
                this.error = error.message
            }
        },

        async getOneService(id){
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
                const data = res.data

                this.services = data
            }catch(error){
                this.error = error.message
            }
        },

        async updateService(servicedata){
            try{
                const res = await axios.patch('http://localhost:3000/service/'+servicedata.id,
                servicedata.data)
                
                const data = await res.data

                this.services = this.services.splice(this.services[data.id],1,data)
            }catch(error){
                this.error = error.message
            }
        },

        async deleteService(id){
            try{
                await axios.delete('http://localhost:3000/service/'+id)
                this.services = this.services.splice(id,1)
            }catch(error){
                this.error = error.message
            }
        }
    }
})