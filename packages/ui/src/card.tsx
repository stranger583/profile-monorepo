import { cN } from "./utils/utils";
interface CardProps {
  className?: string;
  children: React.ReactNode;
}
export function Card({
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cN(`bg-card px-4 py-5 rounded-lg`,className)}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  className?: string;
  children: React.ReactNode;
}
export function CardHeader({
  className,
  children,
}: CardHeaderProps) {
  return (
    <div
      className={cN(`mb-2`,className)}
    >
      {children}
    </div>
  );
}

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}
export function CardContent({
  className,
  children,
}: CardContentProps) {
  return (
    <div
      className={cN(``,className)}
    >
      {children}
    </div>
  );
}

