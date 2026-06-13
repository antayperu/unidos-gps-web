type Step = {
  title: string
  description: string
}

type StepperItemProps = {
  step: Step
  index: number
  isLast: boolean
}

export default function StepperItem({ step, index, isLast }: StepperItemProps) {
  return (
    <div className="flex items-start gap-4 pb-8 last:pb-0 lg:flex-col lg:items-center lg:pb-0 lg:gap-0 lg:text-center">

      {/* Circle + mobile vertical connector */}
      <div className="flex flex-col items-center flex-shrink-0 lg:mb-6">
        <div className="w-10 h-10 rounded-full bg-brand-emergency flex items-center justify-center relative z-10 flex-shrink-0">
          <span className="font-heading font-extrabold text-white text-base leading-none">
            {index + 1}
          </span>
        </div>
        {!isLast && (
          <div
            className="w-0.5 flex-1 min-h-6 bg-brand-primary-500 mt-2 lg:hidden"
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div className="pt-1 lg:pt-0">
        <h3 className="font-heading text-base font-bold text-white mb-2">
          {step.title}
        </h3>
        <p className="font-body text-sm text-white/70 leading-relaxed">
          {step.description}
        </p>
      </div>

    </div>
  )
}
