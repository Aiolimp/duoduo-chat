// 导入Vite的类型定义，ConfigEnv用于获取构建环境信息，PluginOption用于定义插件选项
import type { ConfigEnv, PluginOption } from 'vite';
// 导入Node.js的path模块，用于处理文件路径
import path from 'node:path';
// 导入Vue插件，用于处理.vue文件的编译和热更新
import vue from '@vitejs/plugin-vue';
// 导入UnoCSS插件，这是一个原子化CSS引擎，用于快速构建UI
import UnoCSS from 'unocss/vite';
// 导入自动导入插件，用于自动导入API，减少手动import语句
import AutoImport from 'unplugin-auto-import/vite';
// 导入Element Plus组件解析器，用于按需导入Element Plus组件
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// 导入组件自动注册插件，用于自动导入和注册组件
import Components from 'unplugin-vue-components/vite';
// 导入环境变量类型化插件，为环境变量提供TypeScript类型支持
import envTyped from 'vite-plugin-env-typed';
// 导入自定义的SVG图标插件创建函数
import createSvgIcon from './svg-icon';

// 定义项目根目录路径，通过__dirname(当前文件所在目录)向上两级获取项目根目录
const root = path.resolve(__dirname, '../../');

// 定义并导出插件配置函数，接收Vite环境配置作为参数
function plugins({ mode, command }: ConfigEnv): PluginOption[] {
  return [
    // 启用UnoCSS插件，用于原子化CSS
    UnoCSS(),
    // 配置环境变量类型化插件
    envTyped({
      mode, // 当前模式(development/production)
      envDir: root, // 环境变量文件所在目录
      envPrefix: 'VITE_', // 环境变量前缀
      filePath: path.join(root, 'types', 'import_meta.d.ts'), // 生成的类型声明文件路径
    }),
    // 启用Vue插件，处理.vue文件
    vue(),
    // 配置API自动导入插件
    AutoImport({
      imports: ['vue'], // 自动导入Vue的API
      eslintrc: {
        enabled: true, // 生成ESLint配置，避免未导入API的报错
      },
      resolvers: [ElementPlusResolver()], // 使用Element Plus解析器
      dts: path.join(root, 'types', 'auto-imports.d.ts'), // 生成的类型声明文件路径
    }),
    // 配置组件自动注册插件
    Components({
      resolvers: [ElementPlusResolver()], // 使用Element Plus解析器
      dts: path.join(root, 'types', 'components.d.ts'), // 生成的类型声明文件路径
    }),
    // 创建SVG图标插件，根据是否为构建模式传递不同参数
    createSvgIcon(command === 'build'),
  ];
}

export default plugins;
