import { Component } from '@angular/core';
//import * as firebase from 'firebase';
//import firebase from 'firebase/app';
import firebase from 'firebase';
//import * as firebase from 'firebase'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(){
    var firebaseConfig = {
      apiKey: "your apiKey ",
      authDomain: "your authDomain",
      projectId: "your projectId ",
      storageBucket: "your storageBucket",
      messagingSenderId: "your messagingSenderId ",
      appId: "yourappId"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
}
}
