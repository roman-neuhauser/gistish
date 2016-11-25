#!/usr/bin/env node

const cfgdir = process.env.HOME + '/.config/gistish'

const fs    = require('fs')
const https = require('https')

let readfile = (pathname) =>
  fs.readFileSync(pathname, { encoding: 'utf8' })

let configstring = (varname) =>
  firstline(readfile(cfgdir + '/' + varname))

let firstline = (str) =>
  str.substring(0, str.indexOf('\n'))

let complain = (msg, exc = 1) => {
  process.stderr.write(msg + '\n')
  process.exit(exc)
}

const args = process.argv.slice(2)

if (args.length == 0) {
  complain('usage: gistish FILE...')
}

let files = {}

args.forEach((fn) => files[fn] = { content: readfile(fn) })

let input = {
  files: files
}

let USER, PASS

try {
  USER = configstring('USER')
  PASS = configstring('PASS')
} catch (e) {
  complain(e.toString())
}

const opts = {
  hostname: 'api.github.com'
, path: '/gists'
, method: 'POST'
, auth: USER + ':' + PASS
, headers: {
    'User-Agent': 'gistish'
  }
}

req = https.request(opts, (res) => {
  let data = ''
  res.on('data', (chunk) => data += chunk)
  res.on('end', () => {
    process.stdout.write(JSON.parse(data).html_url + '\n')
  })
})

req.on('error', (e) => complain(e.toString()))

req.write(JSON.stringify(input))

req.end()
