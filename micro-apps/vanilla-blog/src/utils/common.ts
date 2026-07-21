import type { Post } from '../types/posts'
import type { User } from '../types/users'

export const createUserWithPosts = ({ user, userPosts }: { user: User; userPosts: Post[] }) => {
  const userWithLatestPosts = Object.assign(user, {
    posts: userPosts.length ? [...userPosts.slice(0, 3)] : [],
  })

  return userWithLatestPosts
}
