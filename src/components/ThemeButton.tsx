import { ThemeButtonProps } from '../types/Types'

const ThemeButton = ({ theme, setTheme }: ThemeButtonProps) => {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <div className={`theme-button ${theme}-button`} onClick={toggleTheme}></div>
  )
}

export default ThemeButton
