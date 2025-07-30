// 导入 antfu 的 ESLint 配置预设
// antfu 是一个流行的 ESLint 配置，提供了现代化的代码规范
import antfu from "@antfu/eslint-config";

// 导出 ESLint 配置
// 使用 antfu 作为基础配置，并在此基础上进行自定义
export default antfu({
  // Vue 相关配置
  vue: {
    // Vue 文件中的块顺序规则
    "vue/block-order": [
      "error", // 错误级别：违反规则会报错
      {
        // 定义 Vue 文件中各个块的顺序
        // 推荐顺序：script -> template -> style
        order: ["script", "template", "style"],
      },
    ],
  },
  
  // 启用 TypeScript 支持
  // 这会自动包含 TypeScript 相关的 ESLint 规则
  typescript: true,
  
  // 代码风格配置
  stylistic: {
    indent: 2,        // 缩进使用 2 个空格
    semi: true,       // 语句末尾必须使用分号
    quotes: "single", // 使用单引号而不是双引号
  },
  
  // 自定义规则覆盖
  rules: {
    // 关闭 new-cap 规则
    // new-cap 通常要求构造函数首字母大写，这里关闭了这个限制
    "new-cap": ["off", { newIsCap: true, capIsNew: false }],
    
    // 允许使用 console 语句
    // 默认情况下 ESLint 会警告 console 的使用，这里关闭了警告
    "no-console": "off",
  },
  
  // 忽略的文件和目录
  // 这些路径下的文件不会被 ESLint 检查
  ignores: [
    "**/dist/**",           // 构建输出目录
    "**/node_modules/**",   // 依赖包目录
    "**/build/**",          // 构建目录
    "**/lib/**",            // 库文件目录
    "**/es/**",             // ES 模块目录
    "**/types/**",          // 类型定义目录
    "**/public/**",         // 公共资源目录
    "**/vite.config.ts",    // Vite 配置文件
    "**/eslint.config.js",  // ESLint 配置文件本身
    "./*.cjs",              // CommonJS 文件
    "./*.js",               // JavaScript 文件
    "./package.json",       // 包配置文件
  ],
});
