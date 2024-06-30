import fs from 'fs';



function buildConfig(plugins) {
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
                plugins: plugins
            });
        }
    });

    return rollupConfigArray;
}

export default buildConfig;