
class dataBase<T> {
    data:Array<T>= []

    saveData(val: T){
        this.data.push(val)
    }
    getAllData() {
        return [...this.data]
    }
}

const strData = new dataBase<string>();
strData.saveData("Marge")
strData.saveData("Homer")
const results = strData.getAllData();
console.log(results)

const numbData = new dataBase<number>()
numbData.saveData(10)

console.log(numbData.getAllData())

const objData = new dataBase<object>()
objData.saveData({name : 'toto',id:1})

 console.log(objData.getAllData())