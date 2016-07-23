import $ from 'jquery';
//Angular
import angular from 'angular';
import 'angular-ui-router';
//Firebase
import firebase from 'firebase';
import angularfire from 'angularfire';

import './app-core/index';
import './app-profile/index';


// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBHIWZ3wS_2zz7IokIb30SvBhWkVW-Lk-s",
    authDomain: "ngattack-47997.firebaseapp.com",
    databaseURL: "https://ngattack-47997.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);


angular
	.module('app', ['app.core', 'app.profile', 'firebase'])

;