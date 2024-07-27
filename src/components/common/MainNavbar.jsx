"use client";
// hooks
import { useEffect, useRef, useState } from "react";
// components
import { Nav, Navbar, Container } from "react-bootstrap";
import MainButton from "./MainButton";
// import { motion } from "framer-motion";
// data
import { PAGES_LINKS } from "../../../public/data/dummyData";
// assets
import logoImageLight from "../../../public/assets/images/logo_light.svg";
import logoImageDark from "../../../public/assets/images/logo_dark.svg";
// styles
import "./Navbar.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { fadeLeftVariant } from "../../../public/data/framerMotionVariant";
import { motion } from "framer-motion";
import FadeAnimate from "./animation/FadeAnimate";

// import FadeAnimate from "./animation/FadeAnimate";
// import { fadeLeftVariant } from "../../../public/data/framerMotionVariant";

const MainNavbar = () => {
  const [logo, setLogo] = useState(logoImageLight);
  const header = useRef(null);
  const pathName = usePathname()

  useEffect((_) => {
    window.addEventListener("scroll", (_) => {
      if (window.scrollY > 200) {
        // console.log(header.current);
        header.current?.classList.add("sticky-top", "dark-header");
        header.current.classList.remove("header-to-top", "position-absolute");
        setLogo(logoImageDark);
      } else if (window.scrollY > 100) {
        // header.current.classList.remove("");
        header.current.classList.add("header-to-top");
      } else {
        header.current.classList.remove(
          "header-to-top",
          "sticky-top",
          "dark-header"
        );
        header.current.classList.add("position-absolute");
        setLogo(logoImageLight);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <Navbar
      expand="lg"
      ref={header}
      className="px-md-2 py-0 header position-absolute "
    >
      <Container fluid>
        <FadeAnimate dir={'rtl'}>
        <Link href="/" className="header__logo">
          <Image
            src={logo}
            className="w-100 h-100"
            // width="150"
            alt="BREAKROW"
            />
        </Link>
            </FadeAnimate>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <FadeAnimate dir={'ltr'} className="ms-auto my-2 my-lg-0 ">
            <Nav className="align-items-start">
              {PAGES_LINKS.map((link) => (
                <Link
                  href={link.path}
                  key={link.path}
                  // className="text-decoration-none text-black px-3"
                  className={`header-nav_link ${pathName === link.path?'active':''}`}
                >
                  {link.name}
                </Link>
              ))}
            </Nav>
          </FadeAnimate>
          <MainButton>اتصل الان</MainButton>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MainNavbar;

{
  /* <Navbar
expand="lg"
// ref={header}
className="px-md-2 header position-absolute "
>
<Container fluid>
  <Link href={"/"}>
    <img
      // variants={fadeLeftVariant}
      src={logoImageDark}
      className="w-50"
      alt="BREAKROW"
    />
  </Link>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <div className="me-auto my-2 my-lg-0 ">
      <Nav className="align-items-start">
        {PAGES_LINKS.map((link) => (
          <Link
          href={link.path}
          key={link.path}
          // className="text-decoration-none text-black px-3"
          className={`header-nav_link`}
          >
            {link.name}
          </Link>
        ))}
      </Nav>
    </div>
    <MainButton>اتصل الان</MainButton>
  </Navbar.Collapse>
</Container>
</Navbar> */
}
