<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { IUsers, User } from './types/users'

const users = ref<User[]>([])
const isLoading = ref(true)
const selectedCountry = ref('All')

onMounted(() => {
  loadUsers()
})

const loadUsers = async () => {
  if (!isLoading.value) return

  // Add this loading state to avoid the problem to fetch users multiple times
  // due to setTimout in onRefresh
  isLoading.value = true

  const baseUrl = 'https://randomuser.me/api/?results=10'
  const url = selectedCountry.value === 'All' ? baseUrl : `${baseUrl}&nat=${selectedCountry}`
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }

    const data: IUsers = await response.json()
    users.value = data.results

    setTimeout(() => {
      isLoading.value = false
    }, 1000)

    console.log(users.value)
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <div class="container">
    <div class="heading">
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
      <h1>Users</h1>
    </div>
    <span v-if="isLoading" class="spinner" />
    <p v-if="!users.length">No users loaded</p>
    <ul v-else class="user-list">
      <li v-for="user in users" :key="user.login.uuid" class="card">
        <img :src="user.picture.medium" alt="user.name.first" />
        <p>{{ `Hello! I'm ${user.name.first} ${user.name.last}` }}</p>
        <p>{{ user.email }}</p>
        <p>
          <strong>Location: </strong
          >{{ `${user.location.city}/${user.location.state} - ${user.location.country} ` }}
        </p>
      </li>
    </ul>
    <button @click="loadUsers">Load users</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.heading {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1em;
}
.user-list {
  list-style-type: none;
  padding: 0;
}
/* Card */
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  box-shadow: 0 0 1em #ccc;
}
.card img {
  border-radius: 50%;
  margin-bottom: 0.5em;
}
.card p {
  margin: 0.5em 0;
}
.card:hover {
  transform: scale(1.05);
  transition: transform 300ms;
  cursor: pointer;
}
/* Logo */
.logo {
  height: 4em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.spinner {
  border: 8px solid rgba(0, 0, 0, 0.1);
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
