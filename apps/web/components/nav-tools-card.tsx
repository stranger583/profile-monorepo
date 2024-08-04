import { Card, CardHeader, CardContent } from "@repo/ui/card";

interface NavToolsCardProps {
    title: string;
    children :React.ReactNode
}

function NavToolsCard({title,children}:NavToolsCardProps) {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardContent className="flex gap-2">
        {children}
      </CardContent>
    </Card>
  );
}

export default NavToolsCard;
