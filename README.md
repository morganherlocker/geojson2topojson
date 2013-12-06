geojson2topojson
===========

a node.js module for converting a geojson file to a topojson file

**Installation:**

```bash
npm install geojson2topojson
```

**Use:**

```javascript
var geojson2topojson = require('geojson2topojson')

geojson2topojson('/path/to/in.geojson', '/path/to/out.topojson', function(err){
  if(err) throw err
})
```

**Test**

```bash
cd test
mocha .
```