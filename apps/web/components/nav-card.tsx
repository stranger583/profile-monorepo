import { Card, CardContent } from "@repo/ui/card";
import fuji from "@public/images/fuji.jpg";
import Image from "next/image";
import NavLink from "./nav-link";

function NavCard() {
  return (
    <Card className=" bg-[rgba(36,36,36)] text-white relative overflow-hidden">
      <Image
        src={fuji}
        alt="fuji"
        className="absolute z-10 left-0 -top-[110px] opacity-75"
      />
      <CardContent className="flex flex-col gap-2 relative z-20">
        <NavLink />
      </CardContent>
    </Card>
  );
}

export default NavCard;
