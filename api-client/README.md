## Antes de hacer react build


npm i --save-dev babel-cli 
npm i --save-dev babel-preset-es2015

then => mkdir dist en raiz api-client

then => in package.json en scripts : 
    main: "dist/index.js" en vez de src/index
    creo "build" : "npx babel src/index.js --out-file dist/index.js --presets=es2015"
npm run build







