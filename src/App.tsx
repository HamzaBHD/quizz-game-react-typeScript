import { useState } from 'react'

import './App.css'
import ThemeButton from './components/ThemeButton'

import QuizzPage from './pages/QuizzPage'

function App() {
  const [theme, setTheme] = useState<string>('dark')
  return (
    <div className={`App ${theme}`}>
      <ThemeButton theme={theme} setTheme={setTheme} />
      <QuizzPage theme={theme} />
    </div>
  )
}

export default App
