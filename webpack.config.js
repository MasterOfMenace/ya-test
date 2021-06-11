const path = require("path");
const miniCss = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: path.join(__dirname, "src", "index.tsx"),
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [miniCss.loader, "css-loader"],
      },
      {
        test: /\.(s*)css$/,
        use: [miniCss.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
        exclude: "/node_modules/",
      },
    ],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    open: false,
    publicPath: "/",
    port: 8000,
  },
  plugins: [
    new miniCss({
      filename: "style.css",
    }),
  ],
  devtool: "source-map",
};
