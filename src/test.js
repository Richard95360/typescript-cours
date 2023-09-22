//name space
/// <reference path="PersonInterface.ts" />
var App;
(function (App) {
    var person = new App.PersonM("Homer", 60);
    console.log(person);
})(App || (App = {}));
