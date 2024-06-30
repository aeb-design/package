import buildConfig from "./rollup.config.js";
import typescript from 'rollup-plugin-typescript2';

const prodPlugins = [
    typescript({
        tsconfig: './tsconfig.json',
    }),
]

export default buildConfig(prodPlugins);