import { Plugin } from 'vite'

export interface Externals {
  [propName: string]: any
}

export default function createPlugin(externals?: Externals): Plugin