var express = require('express')
var app = express()
var port = 3002
const userRouter = require('./userRouter')
app.get('/',(req,res)=>{
    res.send('<h1>Helllo World</h1>')
})

app.use('/users', userRouter)


app.listen(port,()=>{
    console.log('server is running..');
})
