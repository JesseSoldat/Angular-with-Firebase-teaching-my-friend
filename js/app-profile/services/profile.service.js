let ProfileService = function(){
 
 	this.editProfile = editProfile;

 	function editProfile(user){
 		console.log(user);
 	}
};

ProfileService.$inject = [];

export default ProfileService;