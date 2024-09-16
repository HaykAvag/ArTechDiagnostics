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

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
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
