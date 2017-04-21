const os   = require('os')
const path = require('path')
const pkg  = require(path.resolve(process.env.PWD, 'package.json'))

module.exports = {
  javascripts: {
    extensions: ['js', 'jsx'],
    hot: {
      reload: true,
      noInfo: false,
      quiet: true,
      react: false
    },
    babelLoader: {
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    babel: {
      presets: [["es2015", { "modules": false }], 'stage-1']
    }
  },

  stylesheets: {
    sass: {
      includePaths: [
        "./node_modules"
      ]
    },
    extensions: ["sass", "scss", "css"]
  },

  html: {
    dataFile: "data/global.json",
    nunjucksRender: {
      envOptions: {
        watch: false
      }
    },
    htmlmin: {
      collapseWhitespace: true
    },
    excludeFolders: ["layouts", "shared", "macros", "data"],
    extensions: ["html", "njk", "json"]
  },

  images: {
    extensions: ["jpg", "png", "svg", "gif"]
  },

  fonts: {
    extensions: ["woff2", "woff", "eot", "ttf", "svg"]
  },

  ghPages: {
    branch: "gh-pages",
    cacheDir: path.join(os.tmpdir(), pkg.name)
  },

  svgSprite: {
    svgstore: {}
  },

  production: {
    rev: true
  }
}
