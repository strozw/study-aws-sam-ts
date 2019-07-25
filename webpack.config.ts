import Webpack from 'webpack'
import path from 'path'
import { sync } from 'glob'

const srcPath = path.resolve(__dirname, './src')
const distPath = path.resolve(__dirname, './dist')

const entryResolver: Webpack.EntryFunc = () => {
  const entries: Webpack.Entry = {}
  const targets: string[] = sync(`${srcPath}/handlers/**/*.ts`)
  const keyRule = new RegExp(`${srcPath}/handlers/(.+)\.ts`)

  targets.forEach(target => {
    const key = target.replace(keyRule, '$1')
    entries[key] = target
  })

  return entries
}

const config: Webpack.Configuration = {
  target: 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.js']
  },
  entry: entryResolver,
  output: {
    filename: '[name].js',
    path: distPath,
    library: '[name]',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: 'ts-loader'
      }
    ]
  }
}

export default config
