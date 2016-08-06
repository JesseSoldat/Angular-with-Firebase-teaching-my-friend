let ProfileService = function($firebaseArray, $state){

	this.getProfile = getProfile;
 	this.addProfile = addProfile;
 	this.editProfile = editProfile;

 	function getProfile(user) {
 		let ref = firebase.database().ref('users/' + user.uid + '/profile');
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
 		// console.log(data);
 		let user = firebase.auth().currentUser;
 		console.log(user);
 		let ref = firebase.database().ref('users/' + user.uid + '/profile');

 		let array = $firebaseArray(ref);
 		let _$id = data.$id;
 		console.log(_$id);

 		setTimeout(function(){
 			let item = array.$getRecord(_$id)
 			console.log(item);

 			item.fName = data.fName;
 			array.$save(item).then(function(){
 				$state.go('root.profile');
 			});
 		}, 500);


 	}
};

ProfileService.$inject = ['$firebaseArray', '$state'];

export default ProfileService;