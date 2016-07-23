let LoginCtrl = function(LoginService, $state){
	let vm = this;

	vm.register = register;
	vm.login = login;
	vm.logout = logout;


	//Check for logged in user
	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			$state.go('root.dash');
		} else {
			$state.go('login');

		}
	})

	function login(user){
		LoginService.login(user);
	}

	function register(user){
		LoginService.register(user);
	}

	function logout(){
		LoginService.logout();
	}


};
LoginCtrl.$inject = ['LoginService', '$state'];

export default LoginCtrl;