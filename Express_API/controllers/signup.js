const handleSignup = (req,res,db) => {
    const {name,email,password} = req.body;

    if(!name || !email || !password){
        return res.status(400).json('incorrect register information');
    }
    console.log(name,email,password);
    // const hash = bcrypt.hashSync(password);

    db.query('SELECT * FROM users WHERE email = ?', [email], function(error, results, fields) {
        // If there is an issue with the query, output the error
        if (error) throw error;
        // If the account exists
        if (results.length > 0) {
            res.status(400).json('user already exists');
        }
        else {
            db.query('INSERT INTO users (name,email,password) VALUES (?,?,?)',[name,email,password],
            (error, results, fields) => {

                if (error){res.status(400).json('unable to register')};
    
                if(results.affectedRows >= 1){
                    console.log(results);
                    res.send(results);
                }  
                else{
                    console.log(err);
                    res.status(400).json('unable to register');
                }
            })
        }	
    
    });
}

module.exports = {
    handleSignup:handleSignup
}