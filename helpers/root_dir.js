const path = require('path');

const rootDir = () => {
   return path.dirname(require.main.filename);
}

module.exports = rootDir;