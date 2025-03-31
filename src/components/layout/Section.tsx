import { clsx } from 'clsx';

const SECTION_STYLES = {
  default: 'py-20',
  compact: 'py-12',
  large: 'py-32'
};

const CONTAINER_STYLES = {
  default: 'container mx-auto px-6',
  narrow: 'container mx-auto px-6 max-w-4xl',
  wide: 'container mx-auto px-6 max-w-7xl',
};

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  container?: keyof typeof CONTAINER_STYLES;
  spacing?: keyof typeof SECTION_STYLES;
}

export function Section({ 
  id, 
  className, 
  children, 
  container = 'default',
  spacing = 'default' 
}: SectionProps) {
  return (
    <section 
      id={id}
      className={clsx(
        SECTION_STYLES[spacing],
        className
      )}
    >
      <div className={CONTAINER_STYLES[container]}>
        {children}
      </div>
    </section>
  );
}