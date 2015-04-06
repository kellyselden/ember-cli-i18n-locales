import Ember from 'ember';

var matchKey = '/locales/';
var locales = Ember.keys(requirejs.entries).filter(function(module) {
  return module.match(matchKey) && !module.match('/tests/');
}).map(function(module) {
  return module.substr(module.indexOf(matchKey) + matchKey.length);
});

export default function getLocales() {
  return locales;
}
