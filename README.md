# rollup-plugin-tampermonkey-append-meta

append meta to user script of tampermonkey.

#### usage

1. install

+ npm

```shell
npm i -D rollup-plugin-tampermonkey-append-meta
```

+ pnpm

```shell
pnpm i -D rollup-plugin-tampermonkey-append-meta
```
2. import

```js
import appendMetaPlugin from 'rollup-plugin-tampermonkey-append-meta';

rollupOptions: {
      plugins: [appendMetaPlugin()]
}
```

3. create meta file into the entry folder
e.g. :
if entry file path is `src/index.js`
then meta file path is `src/tampermonkey`

4. wirte meta file of [tampermonkey](https://www.tampermonkey.net/faq.php)

```text
// ==UserScript==
// @name         
// @namespace    
// @version      
// @description  
// @author       
// @match        
// @icon         
// @grant        
// @run-at       
// ...
// ==/UserScript==
```

5. build

+ npm

```
npm run build
```

+ pnpm

```
pnpm run build
```