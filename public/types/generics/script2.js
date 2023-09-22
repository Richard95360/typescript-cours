"use strict";
class dataBase {
    data = [];
    saveData(val) {
        this.data.push(val);
    }
    getAllData() {
        return [...this.data];
    }
}
const strData = new dataBase();
strData.saveData("Marge");
strData.saveData("Homer");
const results = strData.getAllData();
console.log(results);
const numbData = new dataBase();
numbData.saveData(10);
console.log(numbData.getAllData());
const objData = new dataBase();
objData.saveData({ name: 'toto', id: 1 });
console.log(objData.getAllData());
