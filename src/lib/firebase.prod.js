import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  	apiKey: "AIzaSyAyrZezgKOCrv6ar3YFAAa2iruYs4H7mXM",
    authDomain: "netlix-clone-lhsthree.firebaseapp.com",
    databaseURL: "https://netlix-clone-lhsthree.firebaseio.com",
    projectId: "netlix-clone-lhsthree",
    storageBucket: "netlix-clone-lhsthree.appspot.com",
    messagingSenderId: "838534815285",
    appId: "1:838534815285:web:b21ce646390dc1aa865b7c"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };