import typescript from 'rollup-plugin-typescript';
import scss from 'rollup-plugin-scss'
import * as PIXI from 'pixi.js'
export default {
    input: 'src/main.ts',
    output: {
        format: 'umd',
        file: 'bundle.js',
        name: 'test',
        globals: [PIXI]
    },
    plugins: [
        typescript({
            tsconfig: __dirname + '/tsconfig.json',
        }),
        scss(),
        commonjs({
            namedExports: {
                // Gotcha: You need to
                // explicitly name the exports
                // because commonjs plugin is
                // not smart enough to work 
                // with pixi.js Browserify v4 builds
                'pixi.js': [
                    'VERSION',
                    'Application',
                    'Graphics'
                ]
            }
        }),

    ],
};
