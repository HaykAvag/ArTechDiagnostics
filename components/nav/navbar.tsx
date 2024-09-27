"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import { Button } from "@nextui-org/button";
import { useReducer } from "react";

import { siteConfig } from "@/config/site";
import NavbarLink from "@/components/nav/link";
import Menu from "@/components/nav/menu";
import { Logo, FacebookIcon, PhoneIcon } from "@/components/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <NextUINavbar
      isBordered={true}
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ArTech Diagnostics</p>
          </NextLink>
        </NavbarBrand>

        <ul className="hidden lg:flex gap-4 ml-2">
          {siteConfig.navItems.map(({ href, label }) => (
            <NavbarItem key={href}>
              <NavbarLink href={href} label={label} />
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent justify="end">
        <Link
          isExternal
          aria-label="Facebook"
          className="hidden lg:flex"
          href={siteConfig.links.twitter}
        >
          <FacebookIcon className="text-default-500" />
        </Link>

        <Button
          as={Link}
          className="min-w-1 font-medium tracking-wide lg:w-auto"
          color="primary"
          href="tel:+16613629490"
          startContent={<PhoneIcon size={17} />}
        >
          <p className="hidden lg:block">(661) 360-2868</p>
        </Button>
      </NavbarContent>

      <Menu setIsMenuOpen={setIsMenuOpen} />
    </NextUINavbar>
  );
};

export default Navbar;
