import './style.css'
// import { setupCounter } from './counter.ts'
import { fetchPosts } from './features/posts/posts.ts'
import { fetchUsers } from './features/users/users.ts'
import { createUserPostCardContainer } from './components/UserPostCardContainer.ts'
import { inputEl, labelEl } from './components/SearchInput.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main id=center>
  <section>
    <div>
      <h1 class="title">The Vanilla Blog</h1>
    </div>
    <div id="search-box">
    </div>
  </section>

  <article id="users">
    <div id="users-container">
    </div>
  </article>
</main>
`
const searchBox = document.querySelector('#search-box')
searchBox?.appendChild(labelEl)
searchBox?.appendChild(inputEl)
const [users, posts] = await Promise.all([fetchUsers({}), fetchPosts()])
createUserPostCardContainer({ users, posts })

// usersContainer?.appendChild(userCardContainer)
// console.log(container)
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
