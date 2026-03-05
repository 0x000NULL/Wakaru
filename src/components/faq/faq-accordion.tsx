import type { FaqCategory } from '@/lib/constants/faq-data'

export function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="space-y-10">
      {categories.map((category) => (
        <div key={category.id}>
          <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
          <div className="mt-4 space-y-2">
            {category.items.map((item) => (
              <details
                key={item.question}
                className="group rounded-lg border border-border [&[open]>summary]:border-b"
              >
                <summary className="flex cursor-pointer items-center justify-between px-5 py-4 text-sm font-medium text-foreground list-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <div className="px-5 py-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
