import { Card, CardContent } from "@repo/ui/card";
import fuji from "@public/images/fuji.jpg";
import Link from "next/link";
import Image from "next/image";

const navInfos = [
  { title: "Home", link: "" },
  { title: "About", link: "./about" },
  { title: "Projects", link: "./projects" },
  { title: "Articles", link: "./articles" },
];

function NavCard() {
  return (
    <Card className=" bg-[rgba(36,36,36)] text-white relative overflow-hidden">
      <Image
        src={fuji}
        alt="fuji"
        className="absolute z-10 left-0 -top-[110px] opacity-75"
      />
      <CardContent className="flex flex-col gap-2 relative z-20">
        {navInfos.map((navInfo) => (
          <Link
            key={navInfo.title}
            href={navInfo.link}
            className="text-bold text-base"
          >
            {navInfo.title}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

export default NavCard;
