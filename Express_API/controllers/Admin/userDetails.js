const handleGetUser = (req,res,db) => {

    db.query('SELECT name,email FROM users ', function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
            res.send(results);
        }
        else{
            res.status(400).json('unable to get users');
        }
    });
}

const handleDeleteUser = (req,res,db) => {
    const {email} = req.body;

    db.query('DELETE FROM users WHERE email = ? ', [email], function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.affectedRows > 0) {
            res.status(200).json('success');
        }
        else{
            res.status(400).json('unable to delete user');
        }
    });
}

const handleGetUserCount = (req,res,db) => {
    
        db.query('SELECT COUNT(*) as count FROM users ', function(error, results, fields) {
            // If there is an issue with the query, output the error
            if (error) throw error;
            // If the account exists
            if (results.length > 0) {
                res.send(results);
            }
            else{
                res.status(400).json('unable to get user Count');
            }
        });
}

module.exports = {
    handleGetUser:handleGetUser,
    handleDeleteUser:handleDeleteUser,
    handleGetUserCount:handleGetUserCount
}