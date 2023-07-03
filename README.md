# Sense css module server

coc.nvim extension for [sense css module](https://github.com/solidjs-sense/vite-plugin-sense-css-module)

![2023-07-03 12 09 55](https://github.com/solidjs-sense/coc-sense-css-module/assets/5492542/c67f6645-8a26-4726-b6f2-9eb7b98306a2)

## Features

- [x] class name autocomplete
- [x] hover document
- [x] goto definition

# Install

```vim
:CocInstall coc-sense-css-module
```

Or use [sense-css-module-server](https://github.com/solidjs-sense/sense-css-module-server)

# Configuration

- `sense-css-module.enable`: Enable coc-sense-css-module extension, default: `false`
- `sense-css-module.global-style-files`: Global style files, default: `[]`

Example:

```json
{
  "sense-css-module.enable": true,
  "sense-css-module.global-style-files": ["./src/styles/global.css"]
}
```
