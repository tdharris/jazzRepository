var path = require('path');

module.exports = {
  hapikachu: {
    basePath: '/../views/assets/',
    assets: {
      js: [
        'http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js',
        'lib/bootstrap/dist/js/bootstrap.min.js'
      ]
      // css: [
      //   {
      //     type: 'less', path:  '/less/',
      //     file: 'style.less'
      //   }
      // ]
    }
  }
};