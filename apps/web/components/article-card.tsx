import Image from "next/image"
import Link from "next/link"
import fish from '@public/images/fish.jpg'
import { cN } from "@libs/styles-merge";


interface ArticleInfos {
    imgUrl: string,
    link: string,
    date: string,
    skills: string[],
    title: string,
    description: string;
}

interface ArticleBlockProps {
    articleInfos: ArticleInfos
    className?: string;
}

function ArticleBlock({ articleInfos,className }: ArticleBlockProps) {
    const { imgUrl, link, date, skills, title, description } = articleInfos
    return (
        <div className={cN("laptop:w-1/2 w-full",className)}>
            <Link href={link}>
                <div className="overflow-hidden rounded-lg w-full laptop:h-[200px] mb-2">
                    <Image src={fish} alt='article project' className="w-full object-cover" />
                </div>
                <p className="text-sm text-secondaryText mb-2">{date}</p>
                <div className="flex gap-1 mb-2 ">
                    {skills.map(skill => (
                        <div key={skill} className="px-3 py-1 bg-tag rounded-full text-sm border border-cardBorder">{skill}</div>
                    ))}
                </div>
                <h4 className="font-bold mb-1">{title}</h4>
                <article className="text-sm text-secondaryText">{description}</article>
            </Link>
        </div>
    )
}

export default ArticleBlock
