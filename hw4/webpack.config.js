var path = require('path');

const isDev = process.env.NODE_ENV === "development";

module.exports = {
    entry: "./src/index.jsx", // входная точка - исходный файл
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
    mode: isDev ? "development" : "production",
    devtool: "source-map",
    module: {
        rules: [    //загрузчик для jsx
            {
                test: /\.jsx?$/, // определяем тип файлов
                exclude: /(node_modules)/, // исключаем из обработки папку node_modules
                loader: "babel-loader", // определяем загрузчик
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"] // используемые плагины
                }
            }
        ]
    }
}