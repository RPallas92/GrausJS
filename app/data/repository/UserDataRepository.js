/**
 * The MIT License (MIT)
 * 
 * Copyright (c) 2016 Ricardo Pallas
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */

import daggy from 'daggy';
import Task from "data.task";


const UserDataRepository = daggy.tagged('dataStoreFactory', 'userEntityDataMapper');

//UserDataRepository :: Task (List<User>)
GetUserList.prototype.users = function() {
	//we always get users from the cloud
	const userDataStore = this.userDataStoreFactory.createCloudDataStore();
	return userDataStore.userEntityList().map(this.userEntityMapper.transform);
}

//UserDataRepository :: Task (User)
GetUserList.prototype.user = function(userId) {
	const userDataStore = this.userDataStoreFactory.create(userId);
	return userDataStore.userEntityDetails(userId).map(this.userEntityMapper.transform);
}

module.exports = {
	UserDataRepository: UserDataRepository
}