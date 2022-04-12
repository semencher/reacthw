var path = require('path');

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: "./src/index.tsx", // входная точка - исходный файл
    output: {
        path: path.resolve(__dirname, './public'), // путь к каталогу выходных файлов - папка public
        publicPath: '/public/',
        filename: "bundle.js" // название создаваемого файла
    },
    devServer: {
        historyApiFallback: true,
        port: 3000,
        open: true
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    mode: isDev ? "development" : "production",
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.(js|jsx|tsx|ts)$/,
            exclude: /node_modules/,
            use: [
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    "@babel/preset-env",
                    "@babel/preset-react",
                    "@babel/preset-typescript",
                  ],
                },
              },
            ],
          },
          {
            test: /\.sass$/,
            use: [
              {
                loader: "style-resources-loader",
                options: {
                  patterns: []
                },
              },
              { loader: "style-loader" },
              { loader: "css-loader", options: { modules: true } },
              { loader: "sass-loader" }
            ],
          }    
        ]
    }
}