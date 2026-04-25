/**
 * Fetches pinned GitHub repos via the GraphQL API and writes them to
 * public/pinned-repos.json so Vite bundles the file into dist/.
 *
 * Requires: GITHUB_TOKEN env var (available automatically in GitHub Actions
 * as secrets.GITHUB_TOKEN — no manual secret needed for public profile data).
 *
 * Run locally:
 *   GITHUB_TOKEN=<your_pat> node scripts/fetch-pinned-repos.mjs
 */

import { writeFileSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const token = process.env.GITHUB_TOKEN
if (!token) {
  console.error('Error: GITHUB_TOKEN env var is not set.')
  process.exit(1)
}

const query = `
  query {
    user(login: "vinaysurtani") {
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name
            description
            url
            homepageUrl
            stargazerCount
            forkCount
            primaryLanguage {
              name
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
    }
  }
`

console.log('Fetching pinned repos from GitHub GraphQL API...')

const res = await fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
    'User-Agent': 'portfolio-build-script',
  },
  body: JSON.stringify({ query }),
})

if (!res.ok) {
  console.error(`GraphQL request failed: ${res.status} ${res.statusText}`)
  process.exit(1)
}

const { data, errors } = await res.json()

if (errors) {
  console.error('GraphQL errors:', JSON.stringify(errors, null, 2))
  process.exit(1)
}

const nodes = data?.user?.pinnedItems?.nodes ?? []

if (nodes.length === 0) {
  console.warn('Warning: No pinned repos found. Writing empty array.')
}

const repos = nodes.map(r => ({
  id: r.url,
  name: r.name,
  description: r.description ?? null,
  html_url: r.url,
  homepage: r.homepageUrl ?? null,
  stargazers_count: r.stargazerCount,
  forks_count: r.forkCount,
  language: r.primaryLanguage?.name ?? null,
  topics: r.repositoryTopics.nodes.map(n => n.topic.name),
}))

// Ensure public/ directory exists
const publicDir = resolve(__dirname, '../public')
mkdirSync(publicDir, { recursive: true })

const outPath = resolve(publicDir, 'pinned-repos.json')
writeFileSync(outPath, JSON.stringify(repos, null, 2))

console.log(`Done. Wrote ${repos.length} pinned repo(s) to ${outPath}`)
repos.forEach(r => console.log(`  - ${r.name}`))
