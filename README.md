# CSS Helper Classes Generator

Used to quickly generate CSS layout helper classes. For example it can generate classes for
commonly used margin and padding values.

See [sample-output.styl](sample-output.styl) for a sample output.

## Usage:
1. Edit `grid-values.json` with your grid values.
2. Edit `helpers.json` to include the helper classes you want to generate.
2. Run `node generate.js > output-file.css` to generate the CSS and write it to `output-file.css`.

## Licence
[MIT](LICENCE)
