/** @type {import('next').NextConfig} */

const path = require("path")
const createNextIntlPlugin = require("next-intl/plugin")

const nextConfig = {

  sassOptions: {
    includePaths: [path.join(__dirname, 'utilities', 'styles', "sass")],
    prependData: `
      @import 'abstracts/_index.scss';
    `
  },
  reactStrictMode: true,

  //output: 'export',
}

const withNextIntl = createNextIntlPlugin();
module.exports = withNextIntl(nextConfig);
