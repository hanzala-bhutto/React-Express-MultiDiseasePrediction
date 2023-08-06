const {spawn} = require('child_process');
// const {PythonShell} = require('python-shell');

 

const handleInsert = (req,res,db) => {
    const {pregnancies, glucose, bloodPressure, skinThickness, insulin, BMI, dpf,age} = req.body;

    // if(!age){
    //     return res.status(400).json('incorrect cardiac form submission');
    // }

	// Ensure the input fields exists and are not empty
	if (age) {

        db.query('INSERT INTO diabetes (pregnancies, glucose, bloodPressure, skinThickness, insulin, BMI, dpf,age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [pregnancies, glucose, bloodPressure, skinThickness, insulin, BMI, dpf,age], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
            if(results.affectedRows >= 1){
                // console.log(results);

                const python = spawn('python', ['Diabetes.py']);
                data = '';
                python.stdout.on("data", (response) => {
                    // Keep collecting the data from python script
                    data += response;
                });
                
                python.on('exit', function(code, signal) {
                    console.log(data);
                    console.log('Python process is now completed send data as response');

                    id = results.insertId;
                    
                    db.query('SELECT * FROM diabetes WHERE id = ?', [id], function(error, results, fields) {
                        // If there is an issue with the query, output the error
                        if (error) throw error;

                        // If the account exists
                        if (results.length > 0) {
                            console.log(id);
                            res.send(results[0]);
                        }
                        else {
                            res.status(400).json('unable to generate prediction for this user');
                        }
                });
            });

            }  
            else{
                console.log(err);
                res.status(400).json('unable to insert values into db');
            }
        
        });
    }  

}

module.exports = {
    handleInsert:handleInsert
}