import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import heroComponent from './hero.component';

let heroModule = angular.module('hero', [
  uirouter
])

.component('hero', heroComponent)
  
.name;

export default heroModule;
