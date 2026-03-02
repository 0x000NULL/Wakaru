import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils/cn'
import type { HiraganaRule } from '@/types/kana'

interface RuleCardProps {
  rule: HiraganaRule
  className?: string
}

export function RuleCard({ rule, className }: RuleCardProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{rule.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm leading-relaxed text-muted-foreground">{rule.description}</p>

        <div className="space-y-3">
          {rule.examples.map((example, i) => (
            <div
              key={i}
              className="rounded-md border border-border bg-muted/30 px-4 py-3"
            >
              <p className="text-base font-medium">{example.japanese}</p>
              <p className="text-sm text-muted-foreground">{example.romaji}</p>
              <p className="text-sm text-muted-foreground">{example.meaning}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
                {example.explanation}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
