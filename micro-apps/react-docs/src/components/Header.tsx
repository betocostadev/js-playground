import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'

const Header = () => {
  return (
    <header>
      <h1>React Docs</h1>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </header>
  )
}

export default Header
