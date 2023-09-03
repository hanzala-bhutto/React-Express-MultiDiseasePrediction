const handleSignin = (req,res,db) => {
    const {email,password} = req.body;

    if(!email || !password){
        return res.status(400).json('incorrect login information');
    }


	// Ensure the input fields exists and are not empty
	if (email && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM admin WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
                // console.log(results[0].email);
                res.send(results[0]);
            }
            else {
				res.status(400).json('incorrect login information');
			}	
        
        });
    // .catch(err => res.status(400).json('unable to register'));
    }  

}

module.exports = {
    handleSignin:handleSignin
}