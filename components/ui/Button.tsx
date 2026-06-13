import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'whatsapp'

const base =
  'inline-flex items-center justify-center gap-2 font-body font-medium text-base px-6 py-3 rounded-full min-h-[44px] min-w-[44px] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand-primary-600 hover:bg-brand-primary-700 text-white focus-visible:ring-brand-primary-500',
  secondary:
    'border border-brand-primary-600 text-brand-primary-600 hover:bg-brand-primary-50 bg-transparent focus-visible:ring-brand-primary-500',
  whatsapp:
    'bg-whatsapp hover:bg-whatsapp-dark text-white focus-visible:ring-whatsapp',
}

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: undefined
  variant?: Variant
}

type ButtonAsAnchor = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  variant?: Variant
}

type ButtonProps = ButtonAsButton | ButtonAsAnchor

export default function Button({
  variant = 'primary',
  className = '',
  children,
  href,
  ...rest
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`

  if (href !== undefined) {
    const isExternal = href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
    return (
      <a
        href={href}
        className={cls}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
