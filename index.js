const express = require('express');
const server = express();
// let { PythonShell } = require('python-shell');
const { spawn } = require('child_process');

const port = 4000;

server.use(express.json());

server.post('/', (req, res) => {
    const { names } = req.body;

    // This runs the script
    // PythonShell.run('test.py', options, function (err) {
    //     if (err) throw err;
    //     console.log('finished');
    // })

    let runPy = new Promise(function(success, noSuccess) {

        const pyProg = spawn('python', ['test.py', names]);
    
        pyProg.stdout.on('data', function(data) {
            success(data);
        });
    
        pyProg.stderr.on('data', (data) => {
            noSuccess(data);
        });
    });

    runPy.then(fromRunPy => {
        console.log(fromRunPy.toString());
        res.end(fromRunPy);
    });

})

server.listen(port, () => {
    console.log(`Server is listening on ${port}`)
})