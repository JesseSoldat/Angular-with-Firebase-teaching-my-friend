let LoginService = function($state){
	this.register = register;
	this.login = login;
	this.logout = logout;

	function register(user){
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error){
			var errorCode = error.code;
			var errorMessage = error.message;
			console.log(errorCode);
			console.log(errorMessage);
		});
	}

	function login(user){
		firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error){
			console.log((error.code, error.message));
		}).then(function(){
			console.log('logged in');
		})

	}


	function logout(){
		firebase.auth().signOut().then(function(){
			$state.go('login');
		}), function(error){
			console.log(errorMessage);
		}
	}
};

LoginService.$inject = ['$state'];

export default LoginService;