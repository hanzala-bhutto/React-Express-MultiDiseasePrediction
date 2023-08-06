const handleGetHeartRecord = (req,res,db) => {

    db.query('SELECT * from heart ', function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
            res.send(results);
        }
        else{
            res.status(400).json('unable to get heart records');
        }
    });
}

const handleDeleteHeartRecord = (req,res,db) => {
    const {id} = req.body;

    db.query('DELETE FROM heart WHERE id = ? ', [id], function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.affectedRows > 0) {
            res.status(200).json('success');
        }
        else{
            res.status(400).json('unable to delete heart record');
        }
    });
}

const handleGetHeartCount = (req,res,db) => {
        
            db.query('SELECT COUNT(*) as count FROM heart ', function(error, results, fields) {
                // If there is an issue with the query, output the error
                if (error) throw error;
                // If the account exists
                if (results.length > 0) {
                    res.send(results);
                }
                else{
                    res.status(400).json('unable to get heart Count');
                }
            });
}

module.exports = {
    handleGetHeartCount:handleGetHeartCount,
    handleGetHeartRecord:handleGetHeartRecord,
    handleDeleteHeartRecord:handleDeleteHeartRecord
}