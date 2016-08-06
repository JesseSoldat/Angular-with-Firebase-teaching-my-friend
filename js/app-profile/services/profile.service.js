let ProfileService = function($firebaseArray){

	this.getProfile = getProfile;
 	this.addProfile = addProfile;
 	this.editProfile = editProfile;

 	function getProfile(user) {
 		let ref = firebase.database().ref('users/' + user.uid);
 		let array = $firebaseArray(ref);

 		return array;
 	}

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
 		console.log(data);
 		let user = firebase.auth().currentUser;
 		console.log(user);
 		let ref = firebase.database().ref('users/' + user.uid );

 		let array = $firebaseArray(ref);

 		setTimeout(function(){
 			let item = array.$getRecord(data.$id)
 			console.log(item);
 		}, 500);


 	}
};

ProfileService.$inject = ['$firebaseArray'];

export default ProfileService;