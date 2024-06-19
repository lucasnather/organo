import 'styled-components'
import { defaulTheme } from '../themes/default-theme'

type ThemeType = typeof defaulTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
  }