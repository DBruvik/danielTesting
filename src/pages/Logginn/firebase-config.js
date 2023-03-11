import { initializeApp } from "firebase/app";
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

  apiKey: "AIzaSyDumpJQGKovAYQlnWWgizT5dwt3eIsDH7c",

  authDomain: "skognespadel.firebaseapp.com",

  projectId: "skognespadel",

  storageBucket: "skognespadel.appspot.com",

  messagingSenderId: "750430930376",

  appId: "1:750430930376:web:1849870f80301e64992cfd"

};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


