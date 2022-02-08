const { join } = require('path');
const {existsSync} = require('fs')

module.exports = function ({externals, whiteListModes = ['development']}) {
  return {
    name: 'external',

    config(config, { mode }) {
      if (!whiteListModes.includes(mode)) {
        return;
      }

      let { resolve } = config;
      if (!resolve) {
        resolve = {};
        config.resolve = resolve;
      }

      let { alias } = resolve;
      if (!alias || typeof alias !== 'object') {
        alias = [];
        resolve.alias = alias;
      }

      for (const libName of Object.keys(externals)) {
        // check if the lib exists and add it to the alias
        const libPath = join(process.cwd(), externals[libName]);
        const exists = existsSync(libPath);
        if (exists) {
          alias.push({ find: new RegExp(`^${libName}$`), replacement: join(process.cwd(), externals[libName]) });
        }
      }
    },
  };
};