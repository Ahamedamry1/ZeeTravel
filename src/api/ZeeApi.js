// Import the functions you need from the SDKs you need
import firebase from "firebase";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEi7U0TkhCy-8U5BrPD1k5K0_rbMecw0c",
  authDomain: "zeetravelapp-405bd.firebaseapp.com",
  projectId: "zeetravelapp-405bd",
  storageBucket: "zeetravelapp-405bd.appspot.com",
  messagingSenderId: "134886838308",
  appId: "1:134886838308:web:74bbb81fa790e530abc8b1",
  measurementId: "G-W4D9V2MGYR"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);



export function addTrip(trip) {
  trip.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  console.log(trip);
  firebase.firestore()
    .collection('Trip')
    .add(trip)
    .then((snapshot) => {
      trip.id = snapshot.id;
      snapshot.set(trip);
    }).then((result) =>console.log(result) )
    .catch((error) => console.log(error));
}

export function addHost(host) {
  host.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  console.log(host);
  firebase.firestore()
    .collection('host')
    .add(host)
    .then((snapshot) => {
      host.id = snapshot.id;
      snapshot.set(host);
    }).then((result) =>console.log(result) )
    .catch((error) => console.log(error));
}

export async function getTrips(tripRetreived) {

  const tripList = [];

  const snapshot = await firebase.firestore()
    .collection('Trip')
    .orderBy('createdAt')
    .get()

  snapshot.forEach((doc) => {
    const tripItem = doc.data();
    tripItem.id = doc.id;
    tripList.push(tripItem);
  });

  tripRetreived(tripList);
}

export function updateTrip(trip) {
  trip.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
  console.log("Updating food in firebase");

  firebase.firestore()
    .collection('Trip')
    .doc(trip.id).set(trip)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

export function deleteTrip(trip, deleteComplete) {
  console.log(trip);

  firebase.firestore()
    .collection('Trip')
    .doc(food.id).delete()
    .then(() => deleteComplete())
    .catch((error) => console.log(error));
}
