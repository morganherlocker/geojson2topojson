var geojson2topojson = require('../index.js'),
    should = require('should')

describe('geojson2topojson', function(){
  it('should take a geojson file and output a topojson file', function(done){
    geojson2topojson(__dirname+'/in.geojson', __dirname+'/out.topojson', function(err){
      if(err) throw err
      done()
    })
  })
})