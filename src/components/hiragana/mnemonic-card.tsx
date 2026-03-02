import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils/cn'

interface MnemonicCardProps {
  mnemonic: string
  character: string
  romaji: string
  className?: string
}

export function MnemonicCard({ mnemonic, character, romaji, className }: MnemonicCardProps) {
  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle className="text-base">
          Memory Aid for {character} ({romaji})
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm leading-relaxed text-muted-foreground">{mnemonic}</p>
      </CardContent>
    </Card>
  )
}
