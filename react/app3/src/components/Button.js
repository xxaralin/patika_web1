import  { useTheme } from '../context/ThemeContext'

function Button() {
    const {theme, setTheme}=useTheme();
    console.log(theme)


  return (
    <div>
        Active Theme= {theme}
        <button onClick={()=>setTheme(theme==="light" ? "dark" : "light")}>Change Theme</button>
    </div>
  );
}

export default Button;