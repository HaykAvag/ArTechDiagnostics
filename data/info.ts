import { CarIcon, CheckmarkIcon, CrosshairIcon } from "@/components/icons";

export default {
  services: [
    {
      name: "Advanced Driver\nAssistance Systems",
      description:
        "Also known as “ADAS” for short, we specialize in the servicing of features and systems that are specifically designed to increase vehicle safety and assist drivers with everything from parking to traveling on the freeway.",
      icon: CrosshairIcon,
    },
    {
      name: "Diagnostics",
      description:
        "Do you have a vehicle in your repair shop or collision shop that is running rough, stalling, or simply will not start? Maybe an airbag light or check engine light is on? Many of these issues can be taken care of onsite. Our highly skilled technicians can diagnose and/or repair right at your facility with our mobile solution. There is no need to send the vehicle to the dealer.",
      icon: CheckmarkIcon,
    },
    {
      name: "Programming",
      description:
        "Are you replacing an ECM, PCM, Transmission Control Module, or Head Lamp Assembly that requires coding or programming? Are you experiencing an electronic key programming or Anti-Theft immobilizer malfunction? We can come to you!  Our mobile solution, along with our highly skilled technicians have the technology to take care of all your programming and coding needs right at your shop.",
      icon: CarIcon,
    },
  ],
};
