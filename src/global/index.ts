import { App } from 'vue'
import { Loading, Toast, Button, Card } from 'vant'
import SvgIcon from '@/components/SvgIcon/index.vue' //全局svg组件

const components = [Loading, Toast, Button, SvgIcon, Card]

export default function (app: App): void {
    for (const component of components) {
        app.component(component.name, component)
    }
}
