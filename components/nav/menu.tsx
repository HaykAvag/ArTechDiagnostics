import type { DispatchWithoutAction } from "react";

import {
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/navbar";

import Link from "@/components/nav/link";
import { siteConfig } from "@/config/site";

const Menu = ({ setIsMenuOpen }: { setIsMenuOpen: DispatchWithoutAction }) => {
  return (
    <>
      <NavbarMenuToggle className="lg:hidden" />

      {/* TODO: If you don't add this pt-0 by default, there is a padding at the top causing a visual glitch when closing the menu
       * maybe commit change to nextui to fix this? */}
      <NavbarMenu className="pt-0">
        <div className="mx-4 mt-2 flex flex-col gap-2 pt-2">
          {siteConfig.navItems.map(({ href, label }) => (
            <NavbarMenuItem key={href} onClick={setIsMenuOpen}>
              <Link href={href} label={label} size="lg" />
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </>
  );
};

export default Menu;
