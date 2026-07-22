import type { IQueryParams } from '../types/queries'
import type { User } from '../types/users'
import { ApiClient } from './api'

export class UsersService extends ApiClient {
  async getUsers(params: IQueryParams): Promise<User[]> {
    const { limit, skip, order, sortBy } = params

    return this.get<User[]>(
      this.buildUrl('users', {
        limit,
        skip,
        order,
        sortBy,
      })
    )
  }

  async searchUsers(search: string, limit = 10) {
    const matches = this.get<User[]>(
      this.buildUrl('users/search', {
        q: search,
        limit,
      })
    )
    console.log(matches)
  }
}

const usersService = new UsersService()
export default usersService
