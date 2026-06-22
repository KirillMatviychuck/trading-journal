import './styles/index.css'
import useTheme from './providers/Theme/lib/useTheme'

function App() {
  const { theme, toggleTheme } = useTheme()
  console.log(theme);

  return (
    <div className={`app ${theme}`}>
      Hello traders
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  )
}

export default App
