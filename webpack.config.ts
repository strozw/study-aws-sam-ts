import webpack from 'webpack'
import { sync } from 'glob'
import { resolve } from 'path'
import config from 'config'

const srcPath = resolve(__dirname, './src')
const distPath = resolve(__dirname, './dist')

const entryResolver: webpack.EntryFunc = () => {
  const entries: webpack.Entry = {}
  const targets: string[] = sync(`${srcPath}/handlers/**/*.ts`)
  const keyRule = new RegExp(`${srcPath}/handlers/(.+)\.ts`)

  targets.forEach(target => {
    const key = target.replace(keyRule, '$1')
    entries[key] = target
  })

  return entries
}

const webpackConfig: webpack.Configuration = {
  target: 'node',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      src: srcPath,
    }
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
  },
  plugins: [
    new webpack.DefinePlugin({
      //double stringify because node-config expects this to be a string
      CONFIG: JSON.stringify(config),
    }),
  ]
}

export default webpackConfig
