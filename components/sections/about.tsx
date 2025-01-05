import { title } from "../primitives";

const About = () => {
  return (
    <section className="mt-16" id="about">
      <h1 className={title({ size: "sm" })}>About ArTech Diagnostics</h1>

      <div className="block lg:flex justify-between">
        <p className="pt-4 text-base lg:text-lg">
          ArTech Diagnostics is a leading provider of advanced automotive
          diagnostic services. With state-of-the-art equipment and expert
          technicians, we specialize in ADAS calibration, comprehensive car
          diagnostics, and ECU programming. Our mission is to keep your vehicle
          running at peak performance with cutting-edge technology and
          unparalleled expertise.
        </p>
      </div>
    </section>
  );
};

export default About;
