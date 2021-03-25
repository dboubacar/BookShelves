import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

//import firebase from 'firebase/app';
import firebase from 'firebase';

//import * as firebase from 'firebase'


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email: string, password: string) {
     return new Promise(
       (resolve, reject) => {
         firebase.auth().createUserWithEmailAndPassword(email, password).then(
           (ok) => {
             resolve(ok);
           },
           (error) => {
             reject(error);
           }
         );
       }
     );
 }

 signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          (ok) => {
            resolve(ok);
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
}
signOutUser() {
    firebase.auth().signOut();
}

}
