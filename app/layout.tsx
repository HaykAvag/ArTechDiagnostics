import "@/styles/globals.css";
import type { Metadata, Viewport } from "next";

import clsx from "clsx";
import { Link } from "@nextui-org/link";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import Navbar from "@/components/nav/navbar";
import { FacebookIcon, InstagramIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.className,
        )}
      >
        <Providers themeProps={{ enableSystem: false, attribute: "class" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main>{children}</main>

            <footer className="container mx-auto max-w-screen-2xl flex lg:flex-row flex-col py-6 pt-10 pr-10 mt-4 justify-between px-10">
              <div className="flex gap-1 pb-3">
                <Link
                  isExternal
                  aria-label="Facebook"
                  href={siteConfig.links.facebook}
                >
                  <InstagramIcon className="text-default-500" size={30} />
                </Link>

                <Link
                  isExternal
                  aria-label="Facebook"
                  href={siteConfig.links.instagram}
                >
                  <FacebookIcon className="text-default-500" size={30} />
                </Link>
              </div>

              <div className="flex flex-wrap">
                <span className="text-default-600">
                  © 2024 ArTech Diagnostics LLC.
                </span>

                <span className="text-primary">&nbsp;All Rights Reserved.</span>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
