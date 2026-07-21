import usersService from './services/usersService'

export async function fetchUsers() {
  try {
    const users = await usersService.getUsers()
    console.log(users)
    return users
  } catch (error) {
    console.error(error)
  }
}
