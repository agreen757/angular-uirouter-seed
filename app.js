'use strict'

var express = require('express');

// Setup server
var app = express();
app.set('appPath', 'public');
app.set('view engine', 'jade');
app.use(express.static('public'));
var server = require('http').createServer(app);

app.get('*', function(req,res){
    res.render('index')
})

/*app.get('/public/app/main/:name', function (req, res)
 { var name = req.params.name;
   res.render('partials/' + name);
});*/

// Start server
server.listen(process.env.PORT, function () {
  console.log('Express server listening on %d, in %s mode');
});
