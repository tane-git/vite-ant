import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import PrimaryButton from './components/PrimaryButton';
import { Nav } from './components';

// antd
// import 'antd/dist/antd.css';
import 'antd/dist/antd.less';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <Nav />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p><PrimaryButton /></p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is very hot: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
