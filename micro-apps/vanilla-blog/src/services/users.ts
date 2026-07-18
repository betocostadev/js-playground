import { ApiClient } from './api'

export class UsersService extends ApiClient {
  async getUsers() {
    const users = await this.get('users')
    return users
  }
}
