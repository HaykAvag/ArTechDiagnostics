import clsx from "clsx";

import InfoCard from "@/components/info-card";
import info from "@/data/info";
import { title } from "@/components/primitives";

const Services = () => {
  return (
    <section id="services">
      <h1
        className={clsx(
          "text-center lg:text-left",
          title({ size: "sm", fullWidth: true }),
        )}
      >
        Our Services
      </h1>

      <div className="flex lg:flex-row flex-col items-center lg:justify-between lg:items-stretch gap-5 mt-8">
        {info.services.map(({ name, description, icon }) => (
          <InfoCard
            key={name}
            description={description}
            icon={icon}
            name={name}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
