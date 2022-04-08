const express = require('express');
const app = express();
var multer = require('multer')
var cors = require('cors');
// var spawn = require('spawn');
// var spawn = require('child_process').spawn;
const port = 4565;
const bodyParser= require('body-parser')

// const process = spawn('python', ['./extra/python.py', public]);
// process.stdout.on('data', (data) => {

//     test = data.toString();
//   });
//   process.stderr.on('data', (data) => {

//     console.log('err results: %j', data.toString('utf8'))
//   });
//   process.stdout.on('end', function(){
//     console.log('Test Data', test);
//   });

// let {Pythonshell} = require('python-shell');
// const { PythonShell } = require('python-shell');

// PythonShell.run("extra/python.py", null, function(err, results){
//     console.log(results)
//     console.log("python script finished")
// })
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.get('/',(req,res)=>{
    res.send('welcome node');
})
app.get('/call', (req, res) => {
    console.log("Pythonm aoi")
 
    var dataToSend;
    // spawn new child process to call the python script
    const python = spawn('python', ['./extra/python.py']);
    // collect data from script
    python.stdout.on('data', function (data) {
     console.log('Pipe data from python script ...');
     dataToSend = data.toString();
    });
    // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
    // send data to browser
    res.send(dataToSend)
    });
    
   })
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public/')
  },
  filename: function (req, file, cb) {
      console.log(file)
    cb(null, "_" +Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage,}).single('myFile')


app.post('/upload',  (req, res)=> {

    console.log(req.body.file) 
    
    // return res.status(200).send(req.file)
    upload(req, res, function (err) {   
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.body.file)

    })

});


app.listen(port,()=>{
    console.log('Server Running on PORT :',port)
})