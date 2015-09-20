# express-routes-autoloader
A simple easy to use asynchronous autoloader, drop-in, configure &amp; BOOM!

In your express project directory.

```sh
$ npm install express-routes-autoloader
```

right after you initialize express in (app|index).js (or whatever's your file with the routes definition)

```js
var autoloader = require('autoloader');
var app = express();
new autoloader('./path/to/routes').load(app);
```

And that's all folks!

What this does? It automatically generates routes for you based on your "routes" directory structure

so for a directory structure like,
```
- routes
    |
    |- website
        |- deeper
            |- wow.js
        |- much.js
        |- very_shibe.js
    |- api
        |- nice.js
```

It'll automatically generates routes to **quickly get you up and running!**
```
/website/deeper/wow
/website/much
/website/very_shibe.js

/api/nice
```

Nice "to have" things:
* Currently it needs to be required and then hooked with the express.js instance, will look into making it like other plugins
* Better autoloading probably
* Haven't encountered different encodings
