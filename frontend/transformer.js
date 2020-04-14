const tsImportPluginProvider = require('ts-import-plugin')

const tsImportPlugin = tsImportPluginProvider({
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: 'css',
})

module.exports = () => ({ before: [tsImportPlugin] })
