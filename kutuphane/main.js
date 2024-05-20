console.log("main.js çalıştı");

// OPERATORLER

console.log("toplama: ",44 + 23)
console.log("çıkarma: ",44 - 23)
console.log("çarpma: ",44 * 23)
console.log("bölme: ",44 / 23)
console.log("mod alma: ",44 % 23)

// karşılaştırma

console.log("10 == 10 (bu bir gösterim): ", 10 == 10) // true
console.log("10 == '10' (bu bir gösterim): ", 10 == '10') // sayı ile string(karakter dizisi) true
console.log("10 === '10' (bu bir gösterim): ", 10 === '10') // false

console.log("44 > 23 (bu bir gösterim): ",44 > 23);
console.log("44 < 23 (bu bir gösterim): ",44 < 23);
console.log("46 <= 46 (bu bir gösterim): ",46 <= 46);
console.log("46 >= 46 (bu bir gösterim): ",46 >= 46);

if("adnan")
    console.log("adnan ifadesi kontrolu?");
if("")
    console.log("boş string kontrolu")
if(!"")
    console.log("boş string kontrolu, ünlem ile true hale getirildi.")

if(!(-44 > 23))
    console.log("!(-44 > 23)");
// true ve false ifadelere boolean deniliyor.
if(true)
    console.log("true ekrana yazılacak");

if(false)
    console.log("false ekrana yazılacak");

if(!-44 > 23)
    console.log("!(-44 > 23)");

// fonksiyon tanımlama
function selamVer(){
    console.log("selam....");
}

selamVer();

const merhabaDeyiver = () => {
    console.log("merhaba...");
}

merhabaDeyiver();

const testFonksyion = () => console.log("test fonksiyon çalıştı.");
testFonksyion();

// parametreli fonksiyon tanımlama
function toplama(sayi1, sayi2){
    console.log("Toplam sonucu: ", sayi1 + sayi2);
}


toplama(50, 100) // 150
toplama(50) // NaN
toplama("50","100")
toplama("adnan","kaya")

// veri türleri

//          boolean
const male = true;
const female = false;
//           number
const age = 32
const pi = 3.14159
const zero = 0.0
const negativeNumber = -1453
// string "", '', ``
const name = "adnan"
const operator = "+"
const operator2 = "-"

var globalDegisken = "global değişken değeri"
let localDegisken = "local değişken değeri"

// object

const data = {
    "name": "adnan",
    "surname": "kaya",
    "age": 32,
    "email":"adnankaya@example.com"
}

console.log("object data: ", data);
console.log("object data.email: ", data.email);
console.log("object data.age: ", data.age);

// TODO array ve loop