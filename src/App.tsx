import { Box } from './components/Box'
import { CurrentTimeDisplay } from './components/CurrentTimeDisplay'
import { NewTabButton } from './components/NewTabButton'
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
          <NewTabButton />
        </div>
      </main>
    </>
  )
}

export default App
