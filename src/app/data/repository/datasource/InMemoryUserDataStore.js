import R from 'ramda';

class GetUserList {

	constructor(){
		this.users = [
		{
			id: 1,
			name: "Ricardo Pallas",
			"image": "https://pbs.twimg.com/profile_images/477200866941087744/XrN09nWB.jpeg"
		},
		{
			id: 2,
			name: "Jorge Aznar",
			"image": "https://pbs.twimg.com/profile_images/727845681218629633/lC95DuwW.jpg"
		}

		]
	}


	users(){
		return this.users;
	}

	user(id){
		return R.find(R.propEq('id', id))(this.users); //=> {a: 2}

	}

}



export default UserListPresenter;
