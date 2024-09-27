import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import Services from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-32">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h1 className={title({ color: "violet" })}>ADAS</h1>
          <h1 className={title()}> Calibration Center</h1>

          <h2 className={subtitle({ class: "mt-4" })}>
            Cathedral City ADAS & Car Diagnostics Experts
          </h2>
        </div>

        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.docs}
        >
          Book Service
        </Link>
      </section>

      <Services />
    </>
  );
}
