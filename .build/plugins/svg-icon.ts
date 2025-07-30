import path from 'node:path';
// 导入vite-plugin-svg-icons插件中的createSvgIconsPlugin函数，这是处理SVG图标的核心功能
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
// 定义项目根目录路径
const root = path.resolve(__dirname, '../../');

// 导出一个函数，接收一个布尔参数isBuild，表示当前是否为构建模式
export default function createSvgIcon(isBuild: boolean) {
  return createSvgIconsPlugin({
    iconDirs: [
      path.join(root, 'src/assets/icons/svg'),
      path.join(root, 'src/assets/icons/Buildings'),
      path.join(root, 'src/assets/icons/Business'),
      path.join(root, 'src/assets/icons/Device'),
      path.join(root, 'src/assets/icons/Document'),
      path.join(root, 'src/assets/icons/Others'),
      path.join(root, 'src/assets/icons/System'),
      path.join(root, 'src/assets/icons/User'),
    ],
    // 定义生成的symbol ID格式，这里使用'icon-[dir]-[name]'格式
    // [dir]会被替换为图标所在目录名，[name]会被替换为图标文件名
    symbolId: 'icon-[dir]-[name]',
    // 配置SVGO选项，用于优化SVG文件
    // 当isBuild为true（生产构建模式）时启用SVGO优化
    svgoOptions: isBuild,
  });
}
