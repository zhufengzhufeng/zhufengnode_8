var express = require('./express');
var app = express();


app.listen(8888);

app.use(function (req,res,next) {
    console.log('中间');
    next();
});
app.get('/add/user',function (req,res) {
    res.end('hello');
})