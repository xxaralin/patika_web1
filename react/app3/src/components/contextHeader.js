import { useTheme } from '../context/ThemeContext'

function ContextHeader() {
    const {theme, setTheme}=useTheme();

  return (
    <div>
        Active Theme: {theme}
        <button onClick={()=>setTheme(theme=="light"?"dark":"light")}>Change theme</button>
    </div>
  )
}

export default ContextHeader