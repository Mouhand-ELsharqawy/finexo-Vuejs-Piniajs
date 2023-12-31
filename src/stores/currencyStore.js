import axios from "axios";
import { defineStore } from "pinia";

export const useCurrencyStore = defineStore("currencyStore",{
  state: () => ({
    currencies: [], error: null
  }) ,
  actions: {
    async getCurrency(){
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = await res.data

        this.currencies = data
      }catch(error){
        this.error = error.message
      }
    },

    async addCurrency(currencydata){
      try{
        const res = await axios.post('http://localhost:3000/currency',currencydata)
        const data = await res.data

        this.currencies.push(data)
      }catch(error){
        this.error = error.message
      }
    },

    async getOneCurrency(id){
      try{
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        const data = await res.data

        this.currencies = data
      }catch(error){
        this.error = error.message
      }
    },

    async updateCurrency(currencydata){
      try{
        const res = await axios.patch('http://localhost:3000/currency/'+currencydata.id,
        currencydata.data)

        const data = await res.data

        this.currencies = this.currencies.splice(this.currencies[data.id],1,data)
      }catch(error){
        this.error = error.message
      }
    },

    async deleteCurrency(id){
      try{
        await axios.delete('http://localhost:3000/currency/')
        this.currencies = this.currencies.splice(id,1)
      }catch(error){
        this.error = error.message
      }
    }
  } 
})