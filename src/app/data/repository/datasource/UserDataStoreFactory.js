import  inMemoryUserDataStore from './InMemoryUserDataStore';

class UserDataStoreFactory {
	create(){
		return inMemoryUserDataStore;
	}
}
export default UserDataStoreFactory;