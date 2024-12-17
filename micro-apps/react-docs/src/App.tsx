import Header from './components/Header/'
import './App.css'
import MainList from './components/MainList'

function App() {
  return (
    <>
      <Header />
      <div>
        <h2>Vite + React</h2>
        <p>This is a simple Web Application created using Vite and React.</p>
        <p>It's main focus is on React documentation to explain and leverage React features.</p>
      </div>
      <MainList />
    </>
  )
}

export default App
