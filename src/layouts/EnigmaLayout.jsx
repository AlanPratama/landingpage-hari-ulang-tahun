import { NavbarEnigma } from "../components/NavbarEnigma"

export const EnigmaLayout = ({ children }) => {
  return (
    <>
        <NavbarEnigma/>
        {children}
    </>
  )
}
