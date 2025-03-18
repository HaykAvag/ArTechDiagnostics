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
import Image from "next/image";

import { siteConfig } from "@/config/site";
import NavbarLink from "@/components/nav/link";
import Menu from "@/components/nav/menu";
import { FacebookIcon, PhoneIcon } from "@/components/icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useReducer((current) => !current, false);

  return (
    <NextUINavbar
      className="bg-default-200"
      height="7rem"
      isBordered={true}
      isMenuOpen={isMenuOpen}
      maxWidth="2xl"
      position="sticky"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarBrand as="li">
          <NextLink href="/">
            <Image
              alt="Logo"
              className="w-24 h-auto"
              height={536}
              src="/logo.png"
              width={343}
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-10 center" justify="center">
        {siteConfig.navItems.map(({ href, label }) => (
          <NavbarItem key={href}>
            <NavbarLink href={href} label={label} size="lg" />
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <Link
          isExternal
          aria-label="Facebook"
          className="hidden lg:flex"
          href={siteConfig.links.facebook}
        >
          <FacebookIcon className="text-default-500" size={30} />
        </Link>

        <Button
          as={Link}
          className="min-w-1 font-medium tracking-wide lg:w-auto"
          color="primary"
          href="tel:+16613629119"
          startContent={<PhoneIcon size={17} />}
        >
          <p className="hidden lg:block">(661) 362-9119</p>
        </Button>
      </NavbarContent>

      <Menu setIsMenuOpen={setIsMenuOpen} />
    </NextUINavbar>
  );
};

export default Navbar;
