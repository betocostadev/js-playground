import './style.css'
// import { setupCounter } from './counter.ts'
import { fetchPosts } from './posts'
import { fetchUsers } from './users.ts'
import { createUserPostCardContainer } from './components/UserPostCardContainer.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<main id=center>
  <section>
    <div>
      <h1 class="title">The Vanilla Blog</h1>
    </div>
  </section>

  <article id="users">
    <div id="users-container">
    </div>
  </article>
</main>
`
const [users, posts] = await Promise.all([fetchUsers(), fetchPosts()])
createUserPostCardContainer({ users, posts })

// usersContainer?.appendChild(userCardContainer)
// console.log(container)
// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
