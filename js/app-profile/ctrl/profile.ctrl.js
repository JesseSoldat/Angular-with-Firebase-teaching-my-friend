let ProfileCtrl = function($state, ProfileService){

	let vm = this;

	vm.editProfile = editProfile;

	let currentUser;


	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			currentUser = ProfileService.getProfile(user);
			vm.data = currentUser;

			console.log(currentUser);
		}
	})


	function editProfile(){
		$state.go('root.edit-profile')
	}

};
ProfileCtrl.$inject = ['$state', 'ProfileService'];
export default ProfileCtrl;