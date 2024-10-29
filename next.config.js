/** @type {import('next').NextConfig} */

const path = require("path")
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'utilities', 'styles', "sass")],
    prependData: `
      @import 'abstracts/_index.scss';
    `
  },
  reactStrictMode: true,

  output: 'export',
}

module.exports = nextConfig
