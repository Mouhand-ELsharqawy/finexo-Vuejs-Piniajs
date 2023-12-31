import axios from "axios";
import { defineStore } from "pinia";

export const useTestimonialStore = defineStore("TestimonialStore",{
  state: () => ({
    testimoial: [], error:null
  }) ,
  actions: {
    async getTestimonial(){
      try{
        
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data

        this.testimoial = data
      }catch(error){
        this.error = error.message
      }
    }
  } 
})