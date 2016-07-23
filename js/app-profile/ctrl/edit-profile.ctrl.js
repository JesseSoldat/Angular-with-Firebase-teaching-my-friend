let EditProfileCtrl = function(ProfileService){
	let vm = this;
	vm.editProfile = editProfile;

	function editProfile(user){
		ProfileService.editProfile(user);
	}
};
EditProfileCtrl.$inject = ['ProfileService'];

export default EditProfileCtrl;