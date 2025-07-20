import { Box } from './components/Box'
import { CurrentTimeDisplay } from './components/CurrentTimeDisplay'
import { UserForm } from './components/UserForm'

function App() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Top Page</h1>
          <UserForm />
          <CurrentTimeDisplay />
          <Box />
        </div>
      </main>
    </>
  )
}

export default App
