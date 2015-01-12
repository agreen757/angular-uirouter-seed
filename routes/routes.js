//main application routes - put the routes you want server-side here

module.exports = function(app){
    app.put('/getLoginStat', function(req,res){
        console.log('getting login stat');
        res.send({status:req.user})
    })
}