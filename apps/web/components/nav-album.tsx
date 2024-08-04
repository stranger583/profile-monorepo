import { Card } from "@repo/ui/card";
import fish from "@public/images/fish.jpg";
import Image from "next/image";

function NavAlbum() {
  return (
    <Card className="p-0 overflow-hidden h-32 relative">
      <Image
        src={fish}
        className="absolute -top-1/3 left-1/2 -translate-x-1/2"
        alt="fish"
      />
    </Card>
  );
}

export default NavAlbum;
