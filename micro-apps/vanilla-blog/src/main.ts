import './style.css'
import { setupCounter } from './counter.ts'
import { UsersService } from './services/users.ts'

const usersService = new UsersService()

async function loadUsers() {
  try {
    const users = await usersService.getUsers()

    console.log(users)
  } catch (error) {
    console.error(error)
  }
}

loadUsers()

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">
  <div>
    <h1>The Vanilla Blog</h1>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
</section>

<section id="next-steps">
  <div id="docs">
    </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
