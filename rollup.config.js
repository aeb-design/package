import typescript from 'rollup-plugin-typescript2';
import fs from 'fs';

// 同步构建配置数组
function buildConfig() {
    const rollupConfigArray = [];
    const dir = fs.readdirSync('./package/src/components');

    dir.forEach((item) => {
        const path = `./package/src/components/${item}`;
        const indexPath = `${path}/index.ts`;
        if (fs.existsSync(indexPath)) {
            rollupConfigArray.push({
                input: indexPath,
                output: {
                    file: `./libs/${item}/index.js`,
                    format: 'umd',
                    name: item,
                },
                plugins: [
                    typescript({
                        tsconfig: './tsconfig.json',
                    })
                ]
            });
        }
    });

    return rollupConfigArray;
}

// 导出配置数组
export default buildConfig();