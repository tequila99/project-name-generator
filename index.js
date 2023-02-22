const nouns = require('./nouns.js')
const adjectives = require('./adjectives.js')

const defaultOptions = {
  number: false,
  words: 2,
  alliterative: false,
  capitalize: false
}

const getAliiterativeMatches = (a, letter) => a.filter(el => el.indexOf(letter.toLowerCase()) === 0)

const sample = a => a[Math.floor(Math.random() * a.length - 1)]
const random = () => Math.floor(Math.random() * 9999) + 1

const getRawProjName = opts => {
  const raw = []
  const capitalize = s => {
    return opts.capitalize ? s.at(0).toUpperCase() + s.slice(1).toLowerCase() : s
  }
  for (let i = 0; i < opts.words - 1; i++) {
    if (opts.alliterative && raw.length) {
      raw.push(capitalize(sample(getAliiterativeMatches(adjectives, raw[0].at(0)))))
    } else {
      raw.push(capitalize(sample(adjectives)))
    }
  }
  raw.push(
    opts.alliterative 
      ? capitalize(sample(getAliiterativeMatches(nouns, raw[0].at(0))))
      : capitalize(sample(nouns))
  )

  if (opts.number) raw.push(random())

  return raw
}

const generate = (options = {}) => {
  const opts = Object.assign(defaultOptions, options)
  const raw = getRawProjName(opts)
  return {
    raw,
    dashed: raw.join('-'),
    spaced: raw.join(' ')
  }
}

module.exports = generate
generate.generate = generate
