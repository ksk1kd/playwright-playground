import { CurrentTimeDisplay } from './components/CurrentTimeDisplay'

function App() {
  return (
    <>
      <main>
        <div className="container">
          <h1>Top Page</h1>

          <div>
            <label htmlFor="text">Text Input</label>
            <input id="text" type="text" />
          </div>

          <div>
            <label htmlFor="checkbox">I agree to the terms above</label>
            <input id="checkbox" type="checkbox" />
          </div>

          <div>
            <label htmlFor="select">Choose a color</label>
            <select id="select">
              <option value="red">Red</option>
              <option value="blue">Blue</option>
            </select>
          </div>

          <CurrentTimeDisplay />
        </div>
      </main>
    </>
  )
}

export default App
