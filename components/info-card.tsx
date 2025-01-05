import { Card, CardBody, CardHeader } from "@nextui-org/card";

import { IconSvgProps } from "@/types";

const InfoCard = ({
  name,
  description,
  icon: Icon,
}: {
  name: string;
  description: string;
  icon: React.FC<IconSvgProps>;
}) => {
  return (
    <Card className="min-w-64 grow flex-1">
      <CardHeader className="px-6 pt-5 flex gap-6">
        <Icon color="#b22845" size={36} />
        <p className="text-lg font-bold whitespace-pre-line">{name}</p>
      </CardHeader>

      <CardBody className="p-6 pt-2">{description}</CardBody>
    </Card>
  );
};

export default InfoCard;
