#!/usr/bin/env tsx
/**
 * Vocabulary Pipeline Orchestrator
 *
 * Runs pipeline steps 1-7 in sequence. Supports --from=N to resume from step N.
 *
 * Usage:
 *   npx tsx scripts/vocab-pipeline/run-pipeline.ts
 *   npx tsx scripts/vocab-pipeline/run-pipeline.ts --from=3
 */

import type { StepResult } from './lib/types'

const steps = [
  { num: 1, name: 'Download sources', file: './01-download-sources' },
  { num: 2, name: 'Parse JMdict', file: './02-parse-jmdict' },
  { num: 3, name: 'Apply frequency rankings', file: './03-apply-frequency' },
  { num: 4, name: 'Apply JLPT levels & select top 3000', file: './04-apply-jlpt' },
  { num: 5, name: 'Match sentences', file: './05-match-sentences' },
  { num: 6, name: 'Quality check', file: './06-quality-check' },
  { num: 7, name: 'Generate seed data', file: './07-generate-seed-data' },
]

async function main() {
  const fromArg = process.argv.find((a) => a.startsWith('--from='))
  const fromStep = fromArg ? parseInt(fromArg.split('=')[1], 10) : 1

  if (fromStep < 1 || fromStep > 7 || isNaN(fromStep)) {
    console.error('Error: --from must be between 1 and 7')
    process.exit(1)
  }

  console.log('='.repeat(60))
  console.log('  Vocabulary Pipeline')
  console.log('='.repeat(60))
  console.log(`Starting from step ${fromStep}\n`)

  const results: StepResult[] = []

  for (const step of steps) {
    if (step.num < fromStep) {
      console.log(`⏭  Step ${step.num}: ${step.name} (skipped)`)
      continue
    }

    console.log(`\n${'─'.repeat(60)}`)
    console.log(`▶  Step ${step.num}: ${step.name}`)
    console.log('─'.repeat(60))

    const start = Date.now()

    try {
      const mod = await import(step.file)
      const result = await mod.default()
      const duration = Date.now() - start

      results.push({
        step: step.num,
        name: step.name,
        duration,
        ...result,
      })

      console.log(`✓  Step ${step.num} completed in ${(duration / 1000).toFixed(1)}s`)
    } catch (error) {
      const duration = Date.now() - start
      console.error(`\n✗  Step ${step.num} failed after ${(duration / 1000).toFixed(1)}s`)
      console.error(error)
      process.exit(1)
    }
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log('  Pipeline Complete')
  console.log('='.repeat(60))
  console.log('\nResults:')
  for (const r of results) {
    const countStr = r.count !== undefined ? ` (${r.count.toLocaleString()} items)` : ''
    console.log(`  Step ${r.step}: ${r.name}${countStr} — ${(r.duration / 1000).toFixed(1)}s`)
  }

  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0)
  console.log(`\nTotal time: ${(totalDuration / 1000).toFixed(1)}s`)
}

main().catch((err) => {
  console.error('Pipeline error:', err)
  process.exit(1)
})
