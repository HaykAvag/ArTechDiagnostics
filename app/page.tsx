import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import clsx from "clsx";

import { title, subtitle } from "@/components/primitives";
import Services from "@/components/sections/services";
import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import bannerImage from "@/assets/banner.png";

export default function Home() {
  return (
    <>
      <section
        className="flex flex-col items-center justify-center gap-4 py-32 lg:py-44 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-b before:from-[rgba(14,24,35,0.9)] before:to-[rgba(14,24,35,0.5)] before:z-10"
        id="home"
      >
        <Image
          alt="Banner"
          className="absolute w-full min-w-fit"
          src={bannerImage}
        />

        <div className="inline-block max-w-2xl text-center justify-center z-10">
          <h1 className={title({ color: "violet" })}>ADAS</h1>
          <h1 className={title({ color: "light" })}> Calibration Center</h1>

          <h2 className={subtitle({ color: "light", class: "mt-4" })}>
            Cathedral City ADAS & Car Diagnostics Experts
          </h2>
        </div>

        <Button
          as={Link}
          className={clsx(
            buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow"
            }),
            "z-10"
          )}
          href="tel:+16613629490"
        >
          Book Service
        </Button>
      </section>

      <div className="px-10 mt-10 max-w-screen-2xl container mx-auto">
        <Services />
        <About />
        <Contact />
      </div>
    </>
  );
}
