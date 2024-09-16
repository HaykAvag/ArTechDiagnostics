import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { TwitterIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-28">
        <div className="inline-block max-w-2xl text-center justify-center">
          <h1 className={title({ color: "violet" })}>ADAS</h1>
          <h1 className={title()}> Calibration Center</h1>

          <h2 className={subtitle({ class: "mt-4" })}>
            Cathedral City ADAS & Car Diagnostics Experts
          </h2>
        </div>

        <div className="flex gap-3">
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
        </div>
      </section>

      <section className="flex flex-wrap justify-center gap-4 mt-8">
        <Card className="w-64">
          <CardHeader className="flex-col gap-1">
            <TwitterIcon />
            <p className="text-lg font-bold">ADAS</p>
          </CardHeader>
          <Divider />
          <CardBody className="p-4">
            aasasfio jasfi joiofasasasfio jasfi joiofasasasfio jasfi
            joiofassasfio jasfi joiofas
          </CardBody>
        </Card>

        <Card className="w-64">
          <CardHeader className="flex-col gap-1">
            <TwitterIcon />
            <p className="text-lg font-bold">ADAS</p>
          </CardHeader>
          <Divider />
          <CardBody className="p-4">asasfio jasfi joiofas</CardBody>
        </Card>
      </section>
    </>
  );
}
