import alias from '@rollup/plugin-alias'
import image from '@rollup/plugin-image'


const plugins = [
  alias({
    entries: [
      { 
        find: /^(img\/.+)/, 
        replacement: '../$1'
      }
    ]
  }),
  image()
]


const config = [
  {
    input: 'src/image-resource.js', 
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'default'
    },
    plugins
  },
  {
    input: 'src/image-resource.js', 
    output: {
      file: 'dist/index.es.js',
      format: 'es'
    },
    plugins
  }
]


export { config as default }
// vi: se ts=2 sw=2 et:
