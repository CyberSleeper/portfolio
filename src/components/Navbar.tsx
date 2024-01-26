import ThemeContext from "@/components/contexts/ThemeContext"
import { useContext } from "react";


const Navbar = () => {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <nav className="fixed top-0 left-0 w-full z-10 bg-light-section dark:bg-dark-section">
      <button onClick={() => {
        toggle()
        }}>
        {dark ? 'Light' : 'Dark'}
      </button>
    </nav>
  )
}

export default Navbar