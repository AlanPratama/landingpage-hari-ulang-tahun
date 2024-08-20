import { Button, Navbar } from "flowbite-react";

export function NavbarEnigma() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img
          src="./assets/enigma/LogoGrowWithEnigmaCamp-PNG.png"
          className="mr-3 w-20 sm:w-20"
          alt="Enigma Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <a target="_blank" href="https://www.instagram.com/enigmacamp/">
          <Button style={{ backgroundColor: "#3266a8" }}>Join Now</Button>
        </a>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#Home" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#OurCultures">Our Cultures</Navbar.Link>
        <Navbar.Link href="#OurMoments">Our Moments</Navbar.Link>
        <Navbar.Link href="#ContactUs">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
