"use client";
import ArrowDownIcon from "@icons/arrow-down";
import { Card } from "@repo/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@repo/ui/collapsible";
import Link from "next/link";

const menuInfos = [
  {
    title: "Projects",
    items: [
      {
        id: "0",
        title: "i voluptates adipisci alias a nemo vel",
        link: "./",
      },
      {
        id: "1",
        title: "i voluptates adipisci alias a nemo vel",
        link: "./",
      },
    ],
  },
  {
    title: "Articles",
    items: [
      {
        id: "0",
        title: "i voluptates adipisci alias a nemo vel",
        link: "./",
      },
      {
        id: "1",
        title: "i voluptates adipisci alias a nemo vel",
        link: "./",
      },
    ],
  },
];

function NavCollapsible() {
  return (
    <Card className="flex flex-col gap-2">
      {menuInfos.map((menuInfo) => (
        <Collapsible key={menuInfo.title}>
          <CollapsibleTrigger className="flex gap-2 items-center justify-between w-full">
            {menuInfo.title}
            <ArrowDownIcon className="text-secondaryText h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent>
            {menuInfo.items.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className="text-secondaryText text-sm"
              >
                {item.title}
              </Link>
            ))}
          </CollapsibleContent>
        </Collapsible>
      ))}
    </Card>
  );
}

export default NavCollapsible;
