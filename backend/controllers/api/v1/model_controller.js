const { spawn } = require('child_process');
module.exports.metric = function (req, res) {
    try {

        // we can calculate model metrics from ai model
        const metric = [
            {
                precision: 14.5,
                accuracy: 4.5,
                recall: 5.0,
            }
        ]

        return res.status(200).json({
            success: true,
            metric
        });


    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}



module.exports.perdictions = function (req, res) {
    try {

        // here you can run the python script for ai model

        var dataToSend;
        // spawn new child process to call the python script
        const python = spawn('python', ['script1.py']);
        // collect data from script
        python.stdout.on('data', function (data) {
            console.log('Pipe data from python script ...');
            dataToSend = data.toString();
        });
        // in close event we are sure that stream from child process is closed
        python.on('close', (code) => {
            console.log(`child process close all stdio with code ${code}`);
            // send data to browser
            return res.status(200).json({
                success : true,
                data : dataToSend,
            })
        });


        return res.status(200).json({
            success: true,

        });


    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        })
    }
}