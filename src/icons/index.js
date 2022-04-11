import SvgIcon from '../components/SvgIcon'// svg component

const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach(item => svgRequired(item))

export default (vue) => {
  vue.component('svg-icon', SvgIcon)
}
