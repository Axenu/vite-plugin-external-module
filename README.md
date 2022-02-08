# vite-plugin-external-module

import relative packages into your dev your vite application while developing.

## Usage:

Add as a plugin as:
```
createExternalDependencies({
  externals: {
    'my-lib': '../my-lib'
  },
})
```
This will override the same dependency in your package.json in dev.

You can whitelist vite modes for which it should use the local package instead of the package.json
```
createExternalDependencies({
  externals: {
    'my-lib': '../my-lib'
  },
  whiteListModes: [
    'development',
    'dev-stage',
  ],
})
```
