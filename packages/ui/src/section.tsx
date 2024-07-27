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
      className={cN(`bg-section px-4 py-8 rounded-lg`,className)}
    >
      {children}
    </div>
  );
}