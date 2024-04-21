// 1. Berilgan code'ni switch da yozing:
//   let a = +prompt('a?', '');

//   if (a == 0) {
//     alert( 0 );
//   }
//   if (a == 1) {
//     alert( 1 );
//   }

//   if (a == 2 || a == 3) {
//     alert( '2,3' );
//   }


                    // let a = +prompt('a?', '');

                    // switch (a){
                    //     case 0:
                    //     alert(0);
                    //     break
                    //     case 1:
                    //     alert(1);
                    //     break
                    //     case 2:
                    //     case 3:
                    //     alert("2,3")
                    //     break;
                    //     default:
                    //     alert("noto'g'ri qiymat kiritildi")
                    // }


// 2. Agar bool rost bo'lsa, "ha" ni, aks holda "yo'q" ni qaytarish uchun ternary operator(?) dan foydalanadigan funktsiyani yozing:

// yeah_nope(true) ➞ "ha"
// yeah_nope(false) ➞ "yo'q"



                    // function  sum (bool){
                    //     return bool ? "ha" :"yoq"
                    // }
                    // console.log(sum(true));
                    // console.log(sum(false));






// 3. Argument sifatida raqamni oladigan va juft sonlar uchun “juft”, toq sonlar uchun “toq” qaytaradigan funksiya yarating:

// isEvenOrOdd(3) ➞ "toq"
// isEvenOrOdd(146) ➞ "juft"
// isEvenOrOdd(19) ➞ "toq"



                    // function counter (number){
                    //     return number % 2 === 0 ? "juft" :"toq"
                    // }

                    // console.log(counter(3));
                    // console.log(counter(146));
                    // console.log(counter(19));





// 4. Raqamni yagona argument sifatida qabul qiladigan va u noldan kichik yoki teng bo'lsa, true, aks holda false'ni qaytaradigan funksiya yarating:

// lessThanOrEqualToZero(5) ➞ false
// lessThanOrEqualToZero(0) ➞ true
// lessThanOrEqualToZero(-2) ➞ true


                    // function sum (a){
                    //     return a <= 0 ? true : false
                    // }
                    // console.log(sum(5));
                    // console.log(sum(0));
                    // console.log(sum(-2));


// 5. Quyidagi code'da xatolik bor. JavaScript-ni o'rganayotgan talaba yangi funktsiya yaratmoqchi edi. Uning kodi o'tkazilgan string nomini "Edabit" sozi bilan birlashtirishi va uni result deb nomlangan o'zgaruvchida saqlashi kerak. Bu kodni tuzatish uchun unga yordamingiz kerak:

// nameString("Mubashir") ➞ "MubashirEdabit"
// nameString("Matt") ➞ "MattEdabit"
// nameString("javaScript") ➞ "javaScriptEdabit"

// code: 
// function nameString(name){
// 	var b == "Edabit"
// 	var result == name + b
//   return result
// }


                    // function nameString(name){
                    //     let b = "Edabit"
                    //     let result = name + b
                    // return result
                    // }
                    // console.log (nameString("Mubashir"));
                    // console.log (nameString("Matt"));
                    // console.log (nameString("javascript"));

// 6. Siz basketbol o'yini uchun ochkolarni hisoblayapsiz, 2 ochkolik(1-parametir) va 3(2-parametir) ochkolik to'plar miqdorini hisobga olib, jamoa uchun yakuniy ochkolarni toping va bu qiymatni qaytaring:

// points(1, 1) ➞ 5
// points(7, 5) ➞ 29
// points(38, 8) ➞ 100



                    // function points (param1, param2){
                    //     return (param1*2)+(param2*3)
                    // }
                    // console.log(points(1,1));
                    // console.log(points(7,5));
                    // console.log(points(38,8));

// 7. Ikkita raqam berilgan bo'lsa, ikkala raqamning yig'indisi 100 dan kichik bo'lsa, true qiymatini qaytaring. Aks holda, false'ni qaytaring


                    // function counter (a,b){
                    //     return a+b < 100 ? true : false
                    // }
                    // console.log(counter(22,70));
                    // console.log(counter(50,70));
                    // console.log(counter(1,1));

// 8. Mubashir berilgan ikkita raqamni almashtirmoqchi! Bu to'g'ri qiymatlarni qaytarmaydi. Uni tuzatishga yordam bera olasizmi?



// Aslida qaytarishi kerak:
// swap(100, 200) ➞ [200, 100]
// swap(44, 33) ➞ [33, 44]
// swap(21, 12) ➞ [12, 21]

// code: (shu code'dagi xatolikni tuzating)
// function swap(a, b) {
// 	b = a
// 	a = b
// 	return [a, b]
// }

// a = 100;
// b = 200;
// a, b = swap(a, b)
// console.log(a, b) // "200, 100" ni chop etish kerak, lekin funksiya "100, 100" ni chop etyapdi


                    // function swap(a, b) {
                    //     let temp = b;
                    //     b = a;
                    //     a = temp;
                    //     return [a, b];
                    // }

                    // let a = 100;
                    // let b = 200;
                    // [a, b] = swap(a, b);
                    // console.log(a, b); // "200, 100" 

// 9. 1-son 2-songa teng boʻlganda true qaytaruvchi funksiya yarating; aks holda false qaytaring:

// isSameNum(4, 8) ➞ false
// isSameNum(2, 2) ➞  true
// isSameNum(2, "2") ➞ false


///////////////1-xolatda faqat qiymatlarni solishtirgan xolati////////////
                    // function isSameNum (a,b){
                    //     return a == b ? true : false
                    // }
                    // console.log(isSameNum(4,8));
                    // console.log(isSameNum(2,2));
                    // console.log(isSameNum(2,'2'));


                    /////////////////2-xolatda turini ham tekshirgan xolati
                    // function isSameNum (a,b){
                    //     return a === b ? true : false
                    //  }
                    //  console.log(isSameNum(4,8));
                    //  console.log(isSameNum(2,2));
                    //  console.log(isSameNum(2,'2'));

// 10. Ikkita butun sonni (soat, daqiqa) oladigan, ularni soniyalarga aylantiruvchi va qo‘shuvchi funksiya yozing:

// convert(1, 3) ➞ 3780
// convert(2, 0) ➞ 7200
// convert(0, 0) ➞ 0




                    // function counter(hours, minutes){
                    
                    //     return nam = (hours * 3600) + (minutes *60);
                        
                    // }
                    // console.log(counter(1,3)) ;
                    // console.log(counter(2,0)) ;
                    // console.log(counter(0,0)) ;


// 11. Funksiya parametri faqat 7 ga teng bo'lganda true qaytarishi lozim. Code'da xatolik bor. Uni to'g'irlang:

// code:
// function isSeven(x) {
// 	return x="7"?false:true:false;
// }

                    // function isSeven(x) {
                    //         return x == 7 ? true : false;
                    //     }
                    // console.log(isSeven(7));
                    // console.log(isSeven(9));





