const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');


module.exports = {
    mode:'development',
    devServer:{
        port:8002,
        historyApiFallback: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin(
            {
              name: 'StudentResources',
              filename:
                'remoteEntry.js',
              exposes: {
                './App':
                  './src/App',
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
                options:{
                    presets:[
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ]
                }
            },
            //SVGs
            {
                test: /\.svg$/,
                use: [
                  {
                    loader: 'svg-url-loader',
                    options: {
                      limit: 10000,
                    },
                  },
                ],
            },
            // CSS
            {
                test: /\.(s(a|c)ss)$/,
                use: ['style-loader','css-loader', 'sass-loader']
             }
        ]
    }

}