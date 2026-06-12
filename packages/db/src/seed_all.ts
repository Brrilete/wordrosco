import { execSync } from 'child_process'

const levels = ['seed_a2', 'seed_b1', 'seed_b2', 'seed_c1', 'seed_c2']

for (const level of levels) {
  console.log(`\n🔄 Running ${level}...`)
  execSync(`tsx src/${level}.ts`, { stdio: 'inherit' })
}

console.log('\n✅ All levels seeded')