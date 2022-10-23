import _Icon from "./src/icon.vue";
import { withInstall } from "@qiubw-vui-test/utils/install";

const Icon = withInstall(_Icon); // 生成带有 install 方法的组件

export default Icon; // 导出组件
export type { IconProps } from "./src/icon"; // 导出组件 props 的类型

// 这里为了给 volar 用的，具体可以看 https://marketplace.visualstudio.com/items?itemName=Vue.volar
declare module "vue" {
    export interface GlobalComponents {
        ZIcon: typeof Icon;
    }
}