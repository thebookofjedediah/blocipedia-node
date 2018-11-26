module.exports = {
	fakeIt(app){
    	let name, id, email;
    	function middleware(req,res,next){
      		name = req.body.name || name;
      		id = req.body.userId || id;
      		email = req.body.email || email;
      
      		if(id && id != 0){
        		req.user = {
          			"id": id,
          			"email": email,
          			"name": name
        		};
      		} else if(id == 0) {
        		delete req.user;
      		}

      		if( next ){ next() }
    	}

    	function route(req,res){
      		res.redirect("/")
    	}
    
    	app.use(middleware)
    	app.get("/auth/fake", route)
 	}
}