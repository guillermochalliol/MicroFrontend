const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const deps = require("./package.json").dependencies;

module.exports = {
    mode:'development',
    devServer:{
        port:8000,
        open:true,
        historyApiFallback: true,
    },
   plugins: [
    new ModuleFederationPlugin(
      {
        name: 'Main',
        filename:
          'remoteEntry.js',
        remotes: {
          Auth:'Auth@http://localhost:8001/remoteEntry.js',
          Resources: 'Resources@http://localhost:8002/remoteEntry.js'
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
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
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
