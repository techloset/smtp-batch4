import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';

import {db} from '../config/Firebase';

const fetchUser = createAsyncThunk('users/fetchUser', async navigation => {
  try {
    const user = auth().currentUser;

    if (!user) {
      navigation.navigate('Login');
      return;
    }
    console.log('user', user);
    let snapshot = await db
      .collection('users')
      .where('userId', '==', user?.uid || '')
      .get();
    let data = {};
    snapshot.forEach(item => {
      data = {docId: item.id, ...item.data()};
    });

    return data;
  } catch (error) {
    navigation.navigate('Login');
    console.log(error);
  }
});

const doLogin = createAsyncThunk('users/doLogin', async user => {
  try {
    let userResponse = await auth().signInWithEmailAndPassword(
      user.email,
      user.password,
    );
    console.log('userResponse', userResponse);
    let snapshot = await db
      .collection('users')
      .where('userId', '==', userResponse?.user?.uid || '')
      .get();
    let data = {};
    snapshot.forEach(item => {
      data = {docId: item.id, ...item.data()};
    });

    return data;
  } catch (error) {
    console.log(error);
  }
});

const doLogout = createAsyncThunk('users/doLogout', async user => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
});

const doSignUp = createAsyncThunk('users/doSignUp', async (user, {}) => {
  try {

  //  const reference = storage().ref(user.file.name);
  //  const pathToFile = `${user.imagePath}`;
  //     await reference.putFile(pathToFile);
  //     const url = await reference.getDownloadURL();


    console.log('user data in action', user);
    let userResponse = await auth().createUserWithEmailAndPassword(
      user.email,
      user.password,
    );
    console.log('userResponse', userResponse?.user?.uid);
    let dataSaveToDb = {
      email: user.email,
      firstName: user.firstName,
      age: user.age,
      // profilePic: url || '' ,
      userId: userResponse?.user?.uid || '',
    };
    console.log('dataSaveToDb', dataSaveToDb);
    const success = await db.collection('users').add(dataSaveToDb);
    console.log('userResponse success', success);

    // setLoading(false)
    return user;
  } catch (error) {
    console.log('error', error);
  }
});

const authSlicer = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    isUserLoggedIn: false,
    token: null,
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(doLogin.fulfilled, (state, action) => {
        console.log('do login action', action);

        state.user = action.payload;
        state.isUserLoggedIn = true;
      })
      .addCase(doSignUp.fulfilled, (state, action) => {
        console.log('do sign up action', action);
        state.user = action.payload;
        state.isUserLoggedIn = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        console.log('do sign up action', action);
        if (action?.payload?.userId) {
          state.user = action.payload;
          state.isUserLoggedIn = true;
        }
      })

      .addCase(doLogout.fulfilled, (state, action) => {
        state.user = null;
        state.isUserLoggedIn = false;
      });
  },
});

export {doLogin, doSignUp, fetchUser, doLogout};

export default authSlicer;

// let tasks = [
//   {user: 1, title: 'fdh fgh fgh', desc: 'dfhgh dfh dfh s'},
//   {user: 2, title: 'work', desc: 'details'},
// ];

// let users = [
//   {user: 2, firstName: 'ali', age: 234},
//   {user: 1, firstName: 'sdf', age: 234},
// ];

// let result = [
//   {
//     user: 1,
//     userData: { firstName: 'sdf', age: 234},
//     title: 'fdh fgh fgh',
//     desc: 'dfhgh dfh dfh s',
//   },
//   {
//     user: 2,
//     userData:  {firstName: 'ali', age: 234},
//     title: 'work',
//     desc: 'details',
//   },
// ];
