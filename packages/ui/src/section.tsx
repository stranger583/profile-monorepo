import { cN } from "./utils/utils";
interface SectionProps {
  className?: string;
  children: React.ReactNode;
}
export function Section({
  className,
  children,
}: SectionProps) {
  return (
    <div
      className={cN(`w-[calc(100dvw_-_32px)] shrink-0 tablet:shrink bg-section px-4 py-8 rounded-lg tablet:overflow-y-auto min-w-80 tablet:h-[calc(100dvh_-_32px)] flex flex-col gap-2 scrollbar-thin scrollbar-webkit`,className)}
    >
      {children}
    </div>
  );
}