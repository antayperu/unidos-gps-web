export default function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className = '',
}: {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={`flex flex-col gap-3 ${align === 'center' ? 'text-center items-center' : ''} ${className}`}
    >
      <h2 className="font-heading text-3xl md:text-4xl text-brand-primary-900">{title}</h2>
      {subtitle && (
        <p className="font-body text-base text-neutral-500 max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
