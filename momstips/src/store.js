import { createStore, combineReducers, compose } from 'redux';
import {
  reactReduxFirebase,
  firebaseReducer,
  firestoreReducer
} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
import firebase from 'firebase/app';
import 'firebase/firestore';

// configurar firestore

const firebaseConfig = {
    
};
