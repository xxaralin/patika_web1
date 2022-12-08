import Button from "./Button"
import ContextHeader from "./contextHeader"

import { useTheme } from "../context/ThemeContext"
import Profile from "./Profile";


function Container() {
    const {theme}= useTheme();


  return (
    <div className={`app ${theme}`}>
        <ContextHeader/>
        <hr/>
        <Button/>

        <hr/>
        <Profile/>
    </div>
  )
}

export default Container;