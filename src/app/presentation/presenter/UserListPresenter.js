import GetUserList from '../../domain/interactor/GetUserList';

class UserListPresenter {
	constructor(view) {
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
		this.view = view;
		//this.interactor = 
	}

  /*
  * Called by the view when its loaded/mounted
  */
  resume() {
  	console.log("UserListPresenter - resume")

  	//Retrieve the user list 
  }

  /*
  * Called by the view when its unloaded/unmounted
  */
  pause() {
  	console.log("UserListPresenter - pause")
  }



  filterUsers(term){
  	console.log("UserListPresenter - filter users: ", term)
  }

}



export default UserListPresenter;