import type { UserWithPosts } from '../types/users'

export function createUserCard(userWithPosts: UserWithPosts) {
  const div = document.createElement('div')
  div.classList.add('user-card')
  const dataSection = document.createElement('div')
  div.innerHTML = `
      <h2>Author: ${userWithPosts.name}</h2>
  `

  dataSection.innerHTML = `
    <p>✉️ ${userWithPosts.email}</p>
    <p>🌎 ${userWithPosts.website}</p>
  `
  dataSection.classList.add('user-data')

  div.appendChild(dataSection)

  const postsDiv = document.createElement('section')
  postsDiv.innerHTML = `
    <h3>Latest posts</h3>
  `

  if (userWithPosts.posts.length) {
    userWithPosts.posts.forEach((post) => {
      const div = document.createElement('div')
      div.classList.add('users-posts-container')

      div.innerHTML = `
        <h4 class="user-post-title">${post.title.length > 40 ? post.title.slice(0, 40) + '...' : post.title}</h4>
        <p>${post.body.length > 50 ? post.body.slice(0, 50) + '...' : post.body}</p>
      `

      div.children[0].classList.add('user-post-title')
      postsDiv.appendChild(div)
    })
  }

  div.appendChild(postsDiv)

  return div
}
