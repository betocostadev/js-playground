import usersService from '../../services/usersService'
import type { IQueryParams } from '../../types/queries'

export async function fetchUsers(params: IQueryParams) {
  try {
    const users = await usersService.getUsers(params)
    console.log(users)
    return users
  } catch (error) {
    console.error(error)
  }
}
