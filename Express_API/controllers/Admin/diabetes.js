const handleGetDiabetesRecord = (req,res,db) => {

    db.query('SELECT * from diabetes ', function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
            res.send(results);
        }
        else{
            res.status(400).json('unable to get diabetes records');
        }
    });
}

const handleDeleteDiabetesRecord = (req,res,db) => {
    const {id} = req.body;

    db.query('DELETE FROM diabetes WHERE id = ? ', [id], function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.affectedRows > 0) {
            res.status(200).json('success');
        }
        else{
            res.status(400).json('unable to delete diabetes record');
        }
    });
}

const handleGetDiabetesCount = (req,res,db) => {
            
                db.query('SELECT COUNT(*) as count FROM diabetes ', function(error, results, fields) {
                    // If there is an issue with the query, output the error
                    if (error) throw error;
                    // If the account exists
                    if (results.length > 0) {
                        res.send(results);
                    }
                    else{
                        res.status(400).json('unable to get diabetes Count');
                    }
                });
}

module.exports = {
    handleGetDiabetesCount: handleGetDiabetesCount,
    handleGetDiabetesRecord:handleGetDiabetesRecord,
    handleDeleteDiabetesRecord:handleDeleteDiabetesRecord
}