let EditProfileCtrl = function(ProfileService){
	let vm = this;

	vm.addProfile = addProfile;
	vm.editProfile = editProfile;

	function addProfile(user){
		ProfileService.addProfile(user);
	}


	function editProfile(user){
		ProfileService.editProfile(user);
	}
};
EditProfileCtrl.$inject = ['ProfileService'];

export default EditProfileCtrl;