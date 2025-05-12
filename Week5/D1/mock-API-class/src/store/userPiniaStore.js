import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      users: [],
      loading: false,
      error: null
    }
  },
  actions: {
    async fetchUsers() {
      try {
        const response = await fetch('/api/users')
        this.data = await response.json()
        this.users = this.data.users;
        console.log(this.users)
      } catch (error) {
        console.error('Error fetching: ', error)
      }
    }
  }
})