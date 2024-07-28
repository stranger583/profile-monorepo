import Link from "next/link";
import { cN } from "@libs/styles-merge";
interface MainSectionBlockProps {
    title: string;
    titleSize?: 'base' | 'xl' | '2xl' | '3xl';
    url?: string;
    children?: React.ReactNode;
}

const textStyle = {
    '3xl': 'text-3xl',
    '2xl': 'text-2xl',
    'xl': 'text-xl',
    'base': 'text-base',
}

function MainSectionBlock({ titleSize = 'xl', title, url, children }: MainSectionBlockProps) {
    return (
        <div>
            <div className="flex justify-between mb-4">
                <h3 className={cN('text-primaryText font-bold', textStyle[titleSize])}>{title}</h3>
                {url && <Link href={url} className='self-end text-sm text-secondaryText'>see all</Link>}
            </div>
            <div className='mt-6'>
                {children}
            </div>
        </div>
    )
}

export default MainSectionBlock
