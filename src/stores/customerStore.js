import axios from "axios";
import { defineStore } from "pinia";

export const useCustomerStore = defineStore("customerStore",{
  state: () => ({
    
      customers: [], error: null
    }) ,
  actions: {
    async getCustomer(){
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data

        this.customers = data
      }catch(error){
        this.error = error.message
      }
    },

    async addCustomer(customerdata){
      try{
        const res = await axios.post('http://localhost:3000/customer',customerdata)
        const data = await res.data

        this.customers.push(data)
      }catch(error){
        this.error = error.message
      }
    },

    async getOneCustomer(id){
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.data

        this.customers = data
      }catch(error){
        this.error = error.message
      }
    },

    async updateCustomer(customerdata){
      try{
        const res = await axios.patch('http://localhost:3000/customer/'+customerdata.id,
        customerdata.data)
        const data = await res.data

        this.customers = this.customers.splice(this.customers[data.id],1,data)
      }catch(error){
        this.error = error.message
      }
    },

    async deleteCustomer(id){
      try{
        await axios.delete('http://localhost:3000/customer/'+id)
        this.customers = this.customers.splice(id,1)
      }catch(error){
        this.error = error.message
      }
    }
  } 
})