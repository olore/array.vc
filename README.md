# array-vue

> Source for http://array.vc

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## deploying for test / next
1. Change `assetsPublicPath` in config/index.js from `/` to `/next` under `build:` section
2. Run `npm run build`
3. FTP files up to /next dir
4. Open http://array.vc/next in browser

## deploying for reals
1. Make sure `assetsPublicPath` in config/index.js is `/` under `build:` section
2. Run `npm run build`
3. FTP files up to / dir
4. Open http://array.vc/ in browser
