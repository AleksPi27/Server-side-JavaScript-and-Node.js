const users = require('./users')
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = () => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (users) {
            resolve(users);
        } else {
            reject('Users not found');
        }
    }))

}
//Define a function to create a new user and return a promise
const createUser = (user) => {
    return new Promise((resolve, reject) => setTimeout(() => {
        if (user) {
            users.push(user);
            resolve(user);
        } else {
            reject('User passed is empty');
        }
    }))
}
// Define a function to get a user by id and return a promise
const getAUserByID = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const desiredUser = users.find(user => user.id === id);
            if (desiredUser) {
                resolve(desiredUser);
            } else {
                reject('User not found');
            }
        })
    })
}
// Define an async function that calls the createUser and getAllUsers function using await 
// and returns all users
const displayUsers = async (user) => {
    const createdUser = await createUser(user);
    if (createdUser) {
        const allUsers = await getAllUsers();
        return allUsers;
    } else {
        throw new Error('New user was not added to the list of users');
    }
}
//Define a async function to display a specific user by Id
// return the user 
const displayAUser = async (id) => {
    const user = await getAUserByID(id);
    return user;
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}