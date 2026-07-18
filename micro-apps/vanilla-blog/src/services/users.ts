import type { User } from '../types/users'
import { ApiClient } from './api'

export class UsersService extends ApiClient {
  async getUsers(): Promise<User[]> {
    return this.get<User[]>('users')
  }
}
