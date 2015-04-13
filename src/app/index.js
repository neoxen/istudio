'use strict';

var iStudioApp = angular.module('istudio', ['ngAnimate', 'ngCookies', 'ngTouch',
  'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap']);

iStudioApp.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .state('contact.profile', {
        url: '/profile',
        templateUrl: 'app/contact/contact-profile.html'
      })

      // url will be /contact/interests
      .state('contact.interests', {
        url: '/interests',
        templateUrl: 'app/contact/contact-interests.html'
      })

      // url will be /contact/payment
      .state('contact.payment', {
        url: '/payment',
        templateUrl: 'app/contact/contact-payment.html'
      })
    ;

    $urlRouterProvider.otherwise('/');
  })
;
