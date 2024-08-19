
"use client";

import { Button, Navbar } from "flowbite-react";

export function NavbarEnigma() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="">
        <img src="../../public/assets/enigma/LogoGrowWithEnigmaCamp-PNG.png" className="mr-3 sm:w-20" alt="Flowbite React Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
