import lang from 'element-plus/lib/locale/lang/fr'
import locale from 'element-plus/lib/locale'
import 'element-plus/packages/theme-chalk/src/base.scss'

export default (app) => {
  locale.use(lang)
  app.config.globalProperties.$ELEMENT = { size: 'large' }
}
