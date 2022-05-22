"use strict";
var _a, _b;
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var exercicio2_1 = require("./exercicio2");
var exercicio3_1 = require("./exercicio3");
var months = Object.values(exercicio2_1["default"]);
var seasons = Object.values(exercicio3_1["default"]);
var monthChoice = readline_sync_1["default"].keyInSelect(months, 'Pick a month');
var southSeasons = (_a = {},
    _a[exercicio3_1["default"].Fall] = [exercicio2_1["default"].MARCO, exercicio2_1["default"].ABRIL, exercicio2_1["default"].MAIO, exercicio2_1["default"].JUNHO],
    _a[exercicio3_1["default"].Winter] = [exercicio2_1["default"].JUNHO, exercicio2_1["default"].JULHO, exercicio2_1["default"].AGOSTO, exercicio2_1["default"].SETEMBRO],
    _a[exercicio3_1["default"].Spring] = [exercicio2_1["default"].SETEMBRO, exercicio2_1["default"].OUTUBRO, exercicio2_1["default"].NOVEMBRO, exercicio2_1["default"].DEZEMBRO],
    _a[exercicio3_1["default"].Summer] = [exercicio2_1["default"].DEZEMBRO, exercicio2_1["default"].JANEIRO, exercicio2_1["default"].FEVEREIRO, exercicio2_1["default"].MARCO],
    _a);
var northSeasons = (_b = {},
    _b[exercicio3_1["default"].Spring] = southSeasons[exercicio3_1["default"].Fall],
    _b[exercicio3_1["default"].Summer] = southSeasons[exercicio3_1["default"].Winter],
    _b[exercicio3_1["default"].Fall] = southSeasons[exercicio3_1["default"].Spring],
    _b[exercicio3_1["default"].Winter] = southSeasons[exercicio3_1["default"].Summer],
    _b);
var hemispheres = {
    "Norte": northSeasons,
    "Sul": southSeasons
};
var choiceHemisphere = readline_sync_1["default"].keyInSelect(Object.keys(hemispheres), "Escolha um hemisfério");
var month = Object.values(exercicio2_1["default"])[monthChoice];
var hemisphere = Object.keys(hemispheres)[choiceHemisphere];
console.log("M\u00EAs: \n".concat(month));
console.log("Hemisf\u00E9rio: \n".concat(hemisphere));
console.log("Esta\u00E7\u00F5es:");
var chosenHemisphereSeasons = Object.values(hemispheres)[choiceHemisphere];
Object.entries(chosenHemisphereSeasons).map(function (entry) {
    var seasons = entry[0];
    var months = entry[1];
    if (months.includes(month))
        console.log(seasons);
});
