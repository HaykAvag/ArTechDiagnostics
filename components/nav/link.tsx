import Link from "next/link";
import { link as linkStyles } from "@nextui-org/theme";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NavbarLink = ({
  href,
  label,
  size = "md",
}: {
  href: string;
  label: string;
  size?: "sm" | "md" | "lg";
}) => {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      className={clsx(
        isActive && "font-bold",
        linkStyles({ color: isActive ? "primary" : "foreground", size }),
      )}
      href={href}
    >
      {label}
    </Link>
  );
};

export default NavbarLink;
