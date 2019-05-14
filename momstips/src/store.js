import { createStore, combineReducers, compose } from 'redux';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/auth'; // habilitando toda la Auth de Firebase en la App
import 'firebase/firestore';

// Boilerplate neceasario para integrar firestore en el proyecto
// configurar firestore

const firebaseConfig = {
  apiKey: 'AIzaSyC_kIAzpY9J6U1o-dvUmuxdngCwofp2DsU',
  authDomain: 'moms-tips.firebaseapp.com',
  databaseURL: 'https://moms-tips.firebaseio.com',
  projectId: 'moms-tips',
  storageBucket: 'moms-tips.appspot.com',
  messagingSenderId: '903574016930',
  appId: '1:903574016930:web:04caa8b7dfd87fb7'
};

// inicializar firebase
firebase.initializeApp(firebaseConfig);

// configuracion de react-redux
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // habilitamos para usar firestore
};

// creamos el potenciador enhacer con compose de redux y firestore

const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase)
)(createStore);

// Creando los reducers (firebase, firestore)

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

// Creando el state inicial
const initialState = {}; // igual a un objeto vacio, luego lo vamos llenando con firesbase

// Creando store
// compose el potenciador viene siendo una funcion que toma otras funciones
const store = createStoreWithFirebase(
  rootReducer,
  initialState,
  compose(
    reactReduxFirebase(firebase),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    //(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) || compose
  )
);
export default store;
