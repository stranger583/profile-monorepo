import MenuIcon from "@icons/menu-icon";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@repo/ui/drawer";
import NavLink from "./nav-link";
import GitHubIcon from "@icons/github-icon";
import LinkedinIcon from "@icons/linkedin-icons";
import Link from "next/link";
import ArrowUprightIcon from "@icons/arrow-up-right-icon";

function Header() {
  return (
    <header className="p-4 z-20 text-sm flex fixed items-center justify-between rounded-b-md top-0 left-0 h-12 w-full bg-card border-b border-secondaryText/50  tablet:hidden">
      Home
      <Drawer>
        <DrawerTrigger>
          <MenuIcon className="w-4" />
        </DrawerTrigger>
        <DrawerContent className="bg-section border-secondaryText/50">
          <DrawerHeader>
            <DrawerTitle></DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <NavLink />
            <hr className="my-2" />
            <Link
              href="https://github.com/stranger583"
              target="_blank"
              className="flex items-center gap-2"
            >
              <GitHubIcon className="w-4" />
              <span>github</span>
              <ArrowUprightIcon className="w-4 ml-auto" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/cozy-chen-508a68280/"
              target="_blank"
              className="flex items-center gap-2"
            >
              <LinkedinIcon className="w-4" />
              <span>LinkedIn</span>
              <ArrowUprightIcon className="w-4 ml-auto" />
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </header>
  );
}

export default Header;
