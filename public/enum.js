"use strict";
var Level;
(function (Level) {
    Level[Level["ADMIN"] = 0] = "ADMIN";
    Level[Level["MODERATOR"] = 1] = "MODERATOR";
    Level[Level["SUPPORT"] = 2] = "SUPPORT";
    Level[Level["USER_READ_ONLY"] = 3] = "USER_READ_ONLY";
})(Level || (Level = {}));
const user = {
    pseudo: 'Batman',
    level: Level.SUPPORT
};
if (user.level === Level.SUPPORT)
    console.log(`Bienvenue ${user.pseudo} Vous travailler au service support
  votre level est ${user.level}`);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 6] = "Blue";
})(Color || (Color = {}));
let colorName = Color[6];
let c = Color.Green;
console.log(colorName);
