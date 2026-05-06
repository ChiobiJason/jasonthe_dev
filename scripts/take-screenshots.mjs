import fs from 'node:fs/promises'
import path from 'node:path'
import { chromium } from 'playwright'

const outDir = path.resolve('public', 'screenshots')

/** @type {{ id: string, url: string, fullPage?: boolean }[]} */
const targets = [
  { id: 'a2cs-fashion-show-2026', url: 'https://a2-cs-fashion-show-2026.vercel.app/' },
  { id: 'augustana-futsal-winter-2026', url: 'https://augustana-futsal-winter-2026-tourna.vercel.app/' },
  { id: 'asa-inventory-frontend', url: 'https://inventory-app-frontend-lilac.vercel.app/' },
  { id: 'asa-policy-frontend', url: 'https://policy-app-frontend-five.vercel.app/' },
  { id: 'tindog', url: 'https://chiobijason.github.io/TinDog/' },
  { id: 'mfm-gh-teens', url: 'https://chiobijason.github.io/Mfm-Gh-Teens/' },
  { id: 'nft-site', url: 'https://chiobijason.github.io/NFT-Site/' },
  { id: 'password-generator', url: 'https://chiobijason.github.io/Password-Generator' },
  { id: 'unit-converter', url: 'https://chiobijason.github.io/Unit-Converter/' },
  { id: 'blackjack-game', url: 'https://chiobijason.github.io/Blackjack-Game/' },
  { id: 'basketball-scoreboard', url: 'https://chiobijason.github.io/BasketBall-Scoreboard/' },
  { id: 'passenger-counter', url: 'https://passenger-counter-app-jason.netlify.app/' },
  { id: 'tabletop-games-club', url: 'https://chiobijason.github.io/TableTop-Games-Club/' },
  { id: 'hometown', url: 'https://chiobijason.github.io/Hometown/' },
  { id: 'ekin', url: 'https://chiobijason.github.io/Ekin/' },
  // Backends: capture Swagger UI
  { id: 'asa-inventory-backend-docs', url: 'https://inventory-app-backend-yftf.onrender.com/docs', fullPage: true },
  { id: 'asa-policy-backend-docs', url: 'https://policy-app-backend.onrender.com/docs', fullPage: true },
]

async function main() {
  await fs.mkdir(outDir, { recursive: true })

  const browser = await chromium.launch()
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    deviceScaleFactor: 2,
  })

  for (const t of targets) {
    const page = await context.newPage()
    const outPath = path.join(outDir, `${t.id}.png`)
    try {
      await page.goto(t.url, { waitUntil: 'networkidle', timeout: 60_000 })
      await page.waitForTimeout(1_000)
      await page.screenshot({ path: outPath, fullPage: Boolean(t.fullPage) })
      // eslint-disable-next-line no-console
      console.log('saved', outPath)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('failed', t.id, t.url, String(e).slice(0, 200))
    } finally {
      await page.close()
    }
  }

  await context.close()
  await browser.close()
}

main()

