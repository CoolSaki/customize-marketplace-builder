import * as locales from './modules/translation/languages'
import flatten from 'flat'
import { setCurrentLocale } from 'unicial-dapps/dist/modules/translation/utils'
import { TextDecoder, TextEncoder } from 'util'
;(global as any).TextDecoder = TextDecoder
;(global as any).TextEncoder = TextEncoder

setCurrentLocale('en', flatten(locales.en))
