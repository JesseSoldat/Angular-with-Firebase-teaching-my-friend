let EditProfileCtrl = function(ProfileService){
	let vm = this;

	vm.addProfile = addProfile;
	vm.editProfile = editProfile;

	let currentUser

	firebase.auth().onAuthStateChanged(function(user){
		if(user) {
			currentUser = ProfileService.getProfile(user);

			vm.user = currentUser;
			console.log(vm.user);

		} else {
			vm.noUser = true;
		}
	})

	function addProfile(user){
		ProfileService.addProfile(user);
	}


	function editProfile(user){
		ProfileService.editProfile(user);
	}
};
EditProfileCtrl.$inject = ['ProfileService'];

export default EditProfileCtrl;