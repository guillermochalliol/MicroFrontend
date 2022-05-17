const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;


module.exports = {
    mode:'development',
    devServer:{
        port:8001,
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin(
            {
              name: 'Auth',
              filename:
                'remoteEntry.js',
              exposes: {
                './App':
                  './src/App',
                './GlobalAuthContext':
                  './src/context/GlobalAuthContext',
                './AuthMenu':
                  './src/components/AuthMenu',
                  './routes':
                  './src/navigation/routes',
              },
              shared: {
                ...deps,
                react: {
                  singleton: true,
                  requiredVersion: deps.react,
                },
                "react-dom": {
                  singleton: true,
                  requiredVersion: deps["react-dom"],
                },
              },
            
            }
          ),
    ],
    module:{
        rules:[
            // Javascript
            {
                test: /\.js?$/,
                
                loader:'babel-loader',
                exclude: /node_modules/,
                options:{
                    presets:[
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                    plugins: [
                      ["@babel/transform-runtime"]
                  ]
                }
            },
            // CSS
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
             }
        ]
    }

}