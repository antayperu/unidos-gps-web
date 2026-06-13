import { Testimonial } from '@/content/testimonials'

type Props = { testimonial: Testimonial }

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <article className="bg-neutral-50 rounded-2xl p-6 lg:p-8 shadow-sm flex flex-col gap-5 hover:shadow-elevated hover:-translate-y-1 transition-all duration-200">

      {/* Avatar + meta */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-brand-primary-700 flex items-center justify-center flex-shrink-0">
          <span className="font-heading font-bold text-white text-base leading-none">
            {testimonial.initials}
          </span>
        </div>
        <div>
          <p className="font-heading font-bold text-brand-primary-900 text-sm leading-snug">
            {testimonial.name}
          </p>
          <p className="font-body text-xs text-neutral-500 leading-snug">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>

      {/* Estrellas */}
      <div
        className="flex gap-0.5"
        aria-label={`${testimonial.rating} de 5 estrellas`}
        role="img"
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <svg
            key={i}
            aria-hidden="true"
            className="w-4 h-4 text-amber-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Cita */}
      <blockquote className="font-body text-sm text-neutral-600 italic leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

    </article>
  )
}
