import "./globals.css";
import "@repo/ui/styles.css";

import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardContent } from "@repo/ui/card";
import { Section } from "@repo/ui/section";
import * as Collapsible from "@repo/ui/collapsible";
import me from "@public/images/me.jpg";
import fish from "@public/images/fish.jpg";
import bar from "@public/images/bar.jpg";
import fuji from "@public/images/fuji.jpg";
import lionTravel from "@public/images/lion-travel.jpg";

import ThemeButton from "@components/theme-button";
import MainSectionBlock from "@components/main-section-block";
import ArticleBlock from "@components/article-card";

import { Locale } from "../../i18n.config";
import { getDictionary } from "../../get-dictionary";
import LangButton from "@components/lang-button";
import GitHubIcon from "@icons/github";
import LinkedinIcon from "@icons/linkedin-icons";
import ArrowDownIcon from "@icons/arrow-down";
const mockArticleData = [
  {
    imgUrl: "./images/lion-travel.jpg",
    link: "./",
    date: "June 3, 2024",
    skills: ["Nextjs", "React", "TailwindCSS"],
    title: "XinMedia",
    description:
      "i voluptates adipisci alias a nemo vel ipsamlit. Facere doloremque error debitis veniam similique. Corporis vitae",
  },
  {
    imgUrl: "./images/lion-travel.jpg",
    link: "./",
    date: "June 3, 2024",
    skills: ["Nextjs", "React", "TailwindCSS"],
    title: "XinFlight",
    description:
      "i voluptates adipisci alias a nemo vel ipsamlit. Facere doloremque error debitis veniam similique. Corporis vitae",
  },
];

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { HomePage } = await getDictionary(lang);
  return (
    <>
      <Section className="overflow-y-auto h-[calc(100dvh_-_32px)] w-[720px] flex flex-col gap-10 grow ">
        <MainSectionBlock title={HomePage.mainTitle} titleSize="2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            placeat soluta maiores natus doloribus porro. Eum, sequi neque velit
            pariatur unde quasi, iure laudantium, voluptatem rerum voluptates
            ipsum sint. Quam.
          </p>
        </MainSectionBlock>
        <MainSectionBlock title="Recent Project" url="./">
          <div className="flex items-center justify-between gap-4">
            {mockArticleData.map((infos) => (
              <ArticleBlock key={infos.title} articleInfos={infos} />
            ))}
          </div>
        </MainSectionBlock>
        <MainSectionBlock title="Recent Article" url="./">
          <div className="flex items-center justify-between gap-4">
            {mockArticleData.map((infos) => (
              <ArticleBlock key={infos.title} articleInfos={infos} />
            ))}
          </div>
        </MainSectionBlock>
      </Section>
      <Section className="overflow-y-auto min-w-80 h-[calc(100dvh_-_32px)] w-[360px] flex flex-col gap-2 ">
        <div className="-mb-4">
          <h2 className="text-2xl font-bold">Yong Chen</h2>
          <h4 className="text-base font-bold mb-4">Frond End Developer</h4>
        </div>
        <Card className="p-0 pb-4">
          <CardHeader className=" rounded-t-lg overflow-hidden">
            <Image
              src={me}
              alt="me"
              className=" h-40 object-cover mb-2 block"
            ></Image>
          </CardHeader>
          <CardHeader className="px-4">
            <p>Information :</p>
          </CardHeader>
          <CardContent className="px-4">
            <p>Mail : zed042760@gmail.com</p>
            <p>Birthday : 04 / 27 / 1999</p>
            <p>Experience : 1 year and 8 months</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Educational : </CardHeader>
          <CardContent>
            <p className="">
              Department of Industrial Education, National Taiwan Normal
              University
            </p>
            <p className="text-secondaryText">09 / 2017 - 06 / 2021</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Work Experience : </CardHeader>
          <CardContent>
            <Card className=" p-0 bg-white">
              <Link className="flex gap-2 items-center" href="">
                <CardHeader className="overflow-hidden rounded-l-lg mb-0">
                  <Image src={lionTravel} alt="lion-travel" className="w-20" />
                </CardHeader>
                <CardContent>
                  <p className="text-black font-semibold">Lion Travel</p>
                  <p className="text-secondaryText text-sm -mt-0.5">
                    02 / 2022 ~ 02 / 2024
                  </p>
                </CardContent>
              </Link>
            </Card>
          </CardContent>
        </Card>
        <Card className="p-0 overflow-hidden h-40 relative">
          <Image
            src={bar}
            alt="bar"
            className="absolute -top-1/3 left-1/2 -translate-x-1/2"
          ></Image>
        </Card>
      </Section>
    </>
  );
}
