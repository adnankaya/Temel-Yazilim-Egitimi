const sayilar = [32, 30, 21, 44, 23, 55, 66, 11, 12];

console.log(sayilar);

console.log("sayilar dizisinin ilk elemani sayilar[0] : ", sayilar[0]);
console.log("sayilar dizisinin ilk elemani sayilar[1] : ", sayilar[1]);
console.log("sayilar dizisinin ilk elemani sayilar[2] : ", sayilar[2]);

console.log(sayilar.length);

// loop : döngü
console.log("for döngüsü başlangıç");
// for (let sayac = 0; sayac < sayilar.length; sayac++) {
//   console.log(sayilar[sayac]);
// }
console.log("for döngüsü bitiş");

const vatandaslar = [
  {
    tc: 123,
    isim: "adnan",
    yas: 32,
  },
  {
    tc: 456,
    isim: "abdullah",
    yas: 30,
  },
  {
    tc: 789,
    isim: "muhammed abdullah",
    yas: 21,
  },
];

for (let index = 0; index < vatandaslar.length; index++) {
  const element = vatandaslar[index];
  console.log(index, ". Vatandaş : ", element.isim);
}
/*****************************************************************/
const meyveler = [
    { isim: "elma", fiyat: 25 },
    { isim: "karpuz", fiyat: 20 },
    { isim: "çilek", fiyat: 65 },
    { isim: "kavun", fiyat: 45 },
];

// id'si meyveler olan ul elementine eriş
const meyveler_ul = document.getElementById("meyveler");
var elements_li = "";
for (let index = 0; index < meyveler.length; index++) {
    const meyve = meyveler[index];
    const meyveElement = "<li>" + meyve.isim + " | " + meyve.fiyat + "</li>";
    elements_li = elements_li + meyveElement;
}
// id'si meyveler olan ul elementi içerisine elements_li'yi yerleştir.
meyveler_ul.innerHTML = elements_li;



/*****************************************************************/




console.log("---- meyveleri göster -----");
console.log(meyveler[3]); //  { isim: "kavun", fiyat: 45 },
console.log(meyveler[4]); // undefined
console.log(meyveler[5]); // undefined
console.log(meyveler[-1]); // undefined

console.log("---- meyveleri map ile göster -----");
meyveler.map((meyve) => {
    console.log(meyve);
});


console.log("---- meyveleri forEach ile göster -----");
meyveler.forEach(meyve => {
    console.log(meyve);
});
