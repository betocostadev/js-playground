import type { Post } from '../types/posts'
import { ApiClient } from './api'

export class PostsService extends ApiClient {
  async getPosts(): Promise<Post[]> {
    return this.get<Post[]>('posts')
  }
}

const postsService = new PostsService()
export default postsService
