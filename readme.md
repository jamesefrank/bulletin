# Renew DC Easter Vigil Online Bulletin

This repo hosts [http://vigil.adventdc.org/](http://vigil.adventdc.org/). The index.html file should always be the current bulletin.

## Adding a new year

1. Copy last year to this year (eg: 2017 to 2018)
1. Move `index.html` into last years folder (eg: `mv index.html 2017/index.html`)
1. Update this year's `shell.html` file to link to any trasnlated versions of the bulletin. If you're working on the 2018 bulletin this means updating `2018/shell.html`.
1. Update the files in this years `/sections` folder to match the bullentin. These files must be in acending order by name aligning with the paper bulletin. For 2018, this would be `2018/sections/*`.
1. Run `node build YEAR` to create a new `index.html` file. Keep this in the root directory. For 2018, this command looks like `node build 2018`.
