import { NavbarEnigma } from "../components/NavbarEnigma"
import { SplashEnigma } from "../pages/enigma/SplashEnigma"

export const EnigmaLayout = ({ children }) => {
  return (
    <>
        <SplashEnigma />
        <NavbarEnigma/>
        {children}
    </>
  )
}
