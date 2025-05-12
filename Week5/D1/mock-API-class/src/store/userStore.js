import { ref } from 'vue'

export default function useUserStore(){
    const users = ref([]);
    const hasUsers = ref(false);
    const loading = ref(false);
    const error = ref(null);

    async function fetchUsers(){
        //if(hasUsers) return;
        try{
            const response = await fetch('/api/users')
            if (!response.ok) {
              throw new Error('Network error')
            }
            const data = await response.json()
            users.value = data.users
            //hasUsers.value = true;
        } catch (error) {
            error.value = error.message;
            console.error("Error fetching: ", error)
        }
    }

    return {
        users,
        loading,
        error,
        fetchUsers
    }
}