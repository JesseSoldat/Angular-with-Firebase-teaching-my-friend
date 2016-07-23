let ProfileService = function($firebaseArray){


 	this.addProfile = addProfile;
 	this.editProfile = editProfile;

 	function addProfile(data){
 		let user = firebase.auth().currentUser;

 		console.log(user);
 		let ref = firebase.database().ref('users/' + user.uid + '/profile');

 		let userArray = $firebaseArray(ref);

 		userArray.$add({
 			email: user.email,
 			id: user.uid,
 			fName: data.fName

 		});


 		
 	}

 	function editProfile(data){

 	}
};

ProfileService.$inject = ['$firebaseArray'];

export default ProfileService;