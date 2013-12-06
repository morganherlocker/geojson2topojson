var topojson = require('topojson'),
    fs = require('fs')

module.exports = function(inPath, outPath, done){
  fs.readFile(inPath, function(err, content){
    var geojson = JSON.parse(content)
    var topology = topojson.topology({geojson: geojson})
    fs.writeFile(outPath, JSON.stringify(topology), function(err){
      done(null)
    })
  })
}