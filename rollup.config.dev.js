import typescript from 'rollup-plugin-typescript2';
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import buildConfig from './rollup.config.js';

const devPlugins = [
    typescript({
        tsconfig: './tsconfig.json',
    }),
    livereload(),
    serve({
        open: true,
        port: 8082,
        contentBase: ''
    })
]

export default buildConfig(devPlugins)