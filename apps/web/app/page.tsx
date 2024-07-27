import { Card, CardHeader, CardContent } from "@repo/ui/card";
import { Section } from "@repo/ui/section"
import Image from "next/image";
import "@repo/ui/styles.css";
import "./globals.css";
import me from '@public/images/me.jpg'
import fish from '@public/images/fish.jpg'
import bar from '@public/images/bar.jpg'
import lionTravel from '@public/images/lion-travel.jpg'
import moon from '@public/svg/moon.svg'
import linkedin from '@public/svg/linkedin.svg'
import github from '@public/svg/github.svg'
import len from '@public/svg/len.svg'
import fuji from "@public/images/fuji.jpg"
import arrow from '@public/svg/arrow.svg'
import arrowButton from '@public/svg/arrow-button.svg'


import Link from "next/link";
import { Button } from "@repo/ui/button";


export default function Home() {
  return (
    <main className="flex justify-between gap-2">
      <Section className="w-[360px] flex flex-col gap-4">
        <Card className=" relative overflow-hidden">
          <Image src={fuji} alt="fuji" className="absolute z-10 left-0 -top-[110px] opacity-75" />
          <CardContent className="flex flex-col gap-2 relative z-20">
            <Link href='' className="text-bold text-base">Home</Link>
            <Link href='' className="text-bold text-base">About</Link>
            <Link href='' className="text-bold text-base">Project</Link>
            <Link href='' className="text-bold text-base">Article</Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Tools </CardHeader>
          <CardContent className="flex gap-2">
            <Button variant="default" className="p-0">
              <Image src={moon} alt="dark mode" />
            </Button>
            <Button variant="default" className="p-0">
              <Image src={len} alt="len" />
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex gap-2 items-center">
            Projects
            <Image src={arrow} alt='arrow' />
          </CardHeader>
          <CardContent className="mb-4">
            <Link href='' className="text-secondaryText text-sm">i voluptates adipisci alias a nemo vel</Link>
            <Link href='' className="text-secondaryText text-sm">i voluptates adipisci alias a nemo vel</Link>
            <Link href='' className="text-secondaryText text-sm">i voluptates adipisci alias a nemo vel</Link>
          </CardContent>
          <CardHeader className="flex gap-2 items-center">
            Articles
            <Image src={arrow} alt='arrow' />
          </CardHeader>
          <CardContent>
            <Link href='' className="text-secondaryText text-sm">i voluptates adipisci alias a nemo vel</Link>
            <Link href='' className="text-secondaryText text-sm">i voluptates adipisci alias a nemo vel</Link>
            <Link href='' className="text-secondaryText text-sm">i voluptates adipisci alias a nemo vel</Link>
          </CardContent>
        </Card>
        <Card className="p-0 overflow-hidden h-32 relative">
          <Image src={fish} className="absolute -top-1/3 left-1/2 -translate-x-1/2" alt="fish" />
        </Card>
        <Card>
          <CardHeader>Links </CardHeader>
          <CardContent className="flex gap-2">
            <Image src={linkedin} alt="dark mode"></Image>
            <Image src={github} alt="len"></Image>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Say something...  </CardHeader>
          <CardContent className="flex items-center justify-between bg-input rounded-full p-0.5">
            <input type="text" className=" bg-transparent" />
            <Button variant="default" className="p-1"><Image src={arrowButton} alt='arrow-button' /></Button>
          </CardContent>
        </Card>
      </Section>
      <Section className="w-[720px]">
        <Card>
          <CardHeader>Tools </CardHeader>
          <CardContent>lin1</CardContent>
        </Card>
      </Section>
      <Section className="w-[360px] flex flex-col gap-4">
        <div className="-mb-4">
          <h2 className="text-2xl font-bold">Yong Chen</h2>
          <h4 className="text-base font-bold mb-4">Frond End Developer</h4>
        </div>
        <Card className="p-0 pb-4">
          <CardHeader className=" rounded-t-lg overflow-hidden">
            <Image src={me} alt='me' className=" h-40 object-cover mb-2 block"></Image>
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
              Department of Industrial Education,
              National Taiwan Normal University
            </p>
            <p className="text-secondaryText">
              09 / 2017 - 06/2021
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>Work Experience : </CardHeader>
          <CardContent>
            <Card className=" p-0 bg-input">
              <Link className='flex gap-2 items-center' href=''>
                <CardHeader className="overflow-hidden rounded-l-lg mb-0">
                  <Image src={lionTravel} alt='lion-travel' className="w-20" />
                </CardHeader>
                <CardContent>
                  <p className="text-black font-semibold">Lion Travel</p>
                  <p className="text-secondaryText text-sm -mt-0.5">02 / 2022 ~ 02 / 2024</p>
                </CardContent>
              </Link>
            </Card>
          </CardContent>
        </Card>
        <Card className="p-0 overflow-hidden h-40 relative">
          <Image src={bar} alt="bar" className="absolute -top-1/3 left-1/2 -translate-x-1/2"></Image>
        </Card>
      </Section>
    </main>
  );
}
