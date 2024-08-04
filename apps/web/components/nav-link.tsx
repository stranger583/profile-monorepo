import { NavMenuInfos } from "@constant/s/nav-menu-infos";
import AboutIcon from "@icons/about-icon";
import ArticleIcon from "@icons/article-icon";
import HomeIcon from "@icons/home-icon";
import ProjectsIcon from "@icons/projects-icon";
import Link from "next/link";

const iconsHandler = (key: string) => {
  switch (key) {
    case "Home":
      return <HomeIcon />;
    case "About":
      return <AboutIcon />;
    case "Projects":
      return <ProjectsIcon />;
    case "Articles":
      return <ArticleIcon />;
    default:
      return;
  }
};
function NavLink() {
  return (
    <>
      {NavMenuInfos.map((navInfo) => (
        <Link
          key={navInfo.title}
          href={navInfo.link}
          className="text-bold text-sm tablet:text-base flex gap-2"
        >
          {iconsHandler(navInfo.title)}
          {navInfo.title}
        </Link>
      ))}
    </>
  );
}

export default NavLink;
