// var axios = Axios.create({
//   withCredentials: true,
// });

const STORAGE_KEY_LOGGEDIN = 'loggedinUser';

export const userService = {
  login,
  logout,
  signup,
  getLoggedinUser,
  getEmptyUser,
};

async function login(credentials) {
  try {
    // Simulate an API call to authenticate the user
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find((u) => u.username === credentials.username && u.password === credentials.password);
    if (!user) throw new Error('Invalid credentials');

    // Set the logged-in user in LocalStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    return user;
  } catch (err) {
    console.log('userservice-front-error', err);
    throw err;
  }
}

function signup(userInfo) {
  try {
    // Simulate an API call to create a new user
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = { id: Date.now(), ...userInfo };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    // Set the logged-in user in LocalStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    return user;
  } catch (err) {
    console.log('userservice-front-error', err);
    throw err;
  }
}

function logout() {
  try {
    // Remove the logged-in user from LocalStorage
    localStorage.removeItem('loggedInUser');
    return Promise.resolve();
  } catch (err) {
    console.log('userservice-front-error', err);
    throw err;
  }
}

// async function login(credentials) {
//   try {
//     const user = await httpService.post(`auth/login`, credentials);
//     _setLoggedinUser(user);
//     return user;
//   } catch (err) {
//     console.log('userserivce-front-eror', err);
//   }
// }

// async function signup(userInfo) {
//   try {
//     const user = await httpService.post(`auth/signup`, userInfo);
//     _setLoggedinUser(user);
//     return user;
//   } catch (err) {
//     console.log('userserivce-front-eror', err);
//   }
// }

// function logout() {
//   sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, null);
//   return httpService.post(`auth/logout`);
//   // return Promise.resolve()
// }

function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN));
}

function _setLoggedinUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN, JSON.stringify(user));
}

function getEmptyUser() {
  return {
    username: '',
    password: '',
    fullname: '',
  };
}
