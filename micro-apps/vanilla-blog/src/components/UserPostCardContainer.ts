import type { User, UserWithPosts } from '../types/users'
import type { Post } from '../types/posts'
import { createUserCard } from './UserCard'
import { createUserWithPosts } from '../utils/common'

const fragment = document.createDocumentFragment()

export const createUserPostCardContainer = ({
  users,
  posts,
}: {
  users: User[] | undefined
  posts: Post[] | undefined
}) => {
  if (!users) return

  const container = document.querySelector('#users-container')
  if (container) container.classList.add('users-card-container')

  let userAndPosts: UserWithPosts

  users.forEach((user) => {
    if (posts) {
      const userPosts: Post[] = posts.filter((post) => user.id === post.userId)

      userAndPosts = createUserWithPosts({ user, userPosts })
    }

    fragment.appendChild(createUserCard(userAndPosts))
  })

  if (container) container.appendChild(fragment)
  return container
}
