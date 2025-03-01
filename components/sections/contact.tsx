import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

import { PhoneIcon } from "../icons";
import { subtitle, title } from "../primitives";

const Contact = () => {
  return (
    <section className="mt-16" id="contact">
      <h1 className={title({ size: "sm" })}>Contact</h1>

      <div className="mt-4 flex flex-wrap justify-between">
        <p className={subtitle()}>
          Contact us today to book your appointment or learn more about our
          services.
        </p>

        <div className="flex flex-wrap gap-x-3">
          <Button
            as={Link}
            className="shrink-0 font-medium tracking-wide mt-2"
            color="primary"
            href="tel:+13107396337"
            startContent={<PhoneIcon size={17} />}
          >
            (310) 739-6337
          </Button>

          <Button
            as={Link}
            className="shrink-0 font-medium tracking-wide mt-2"
            color="default"
            href="tel:+16613629119"
            startContent={<PhoneIcon size={17} />}
          >
            (661) 362-9119
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
