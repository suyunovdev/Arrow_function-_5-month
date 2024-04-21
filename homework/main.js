1. Faqat raqamlardan iborat array'ni oladigan funksiya yarating va birinchi elementni qaytaring:

  getFirstValue([1, 2, 3]) ➞ 1

  getFirstValue([80, 5, 100]) ➞ 80

  getFirstValue([-500, 0, 50]) ➞ -500


2. Ikki argumentni qabul qiladigan, va ushbu ikkita argumentni o'z ichiga olgan arrayni qaytaradigan funksiya yarating:

  makePair(1, 2) ➞ [1, 2]

  makePair(51, 21) ➞ [51, 21]

  makePair(512124, 215) ➞ [512124, 215]


3. Quyidagi funksiyani 2 ta argument qabul qiladi, array va son. 2-argument, son, 1-argument, arraydan nechta elementni ochirib tashlashni bergilaydi: Misol uchun:

  drop([1, 2, 3], 1) ➞ [2, 3]

  drop([1, 2, 3], 2) ➞ [3]

  drop([1, 2, 3], 5) ➞ []

  drop([1, 2, 3], 0) ➞ [1, 2, 3]


4. Array'ni teskari aylantirish funksiyasini yozing:
  reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

  reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

  reverse([]) ➞ []


5. Quyidagi funksiya array qabul qiladi va uni elementlarini qiymatini 1ta oshiradi:
  incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

  incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]

  incrementItems([-1, -2, -3, -4]) ➞ [0, -1, -2, -3]

  Lekin funksiyada xatolik bor. Xatolikni toping:

  function incrementItems(arr) {
    for (let i = 0; i < array.length; i++)
      arr[i] === arr[i] + 1
    return array
  }


6. Arrayni qabul qiladigan va arraydagi oxirgi elementni qaytaradigan funksiya yarating:

  getLastItem([1, 2, 3]) ➞ 3

  getLastItem(["cat", "dog", "duck"]) ➞ "duck"

  getLastItem([true, false, true]) ➞ true


7. Arrayi oladigan va uni stringa aylantirib qaytaradigan funksiya yarating:

  arrayToString([1, 2, 3, 4, 5, 6]) ➞ "123456"

  arrayToString(["a", "b", "c", "d", "e", "f"]) ➞ "abcdef"

  arrayToString([1, 2, 3, "a", "s", "dAAAA"]) ➞ "123asdAAAA"


8. 2 ta arrayni boglaydigan (concat) funksiya yarating:
  concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]

  concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]

  concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]


9. Argument sifatida array va stringni oladigan va stringni arrayni ichidagi joylashgan indeksini qaytaruvchi funksiya yarating:
  findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

  findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

  findIndex(["a", "g", "y", "d"], "d") ➞ 3

  findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0


10. Sonlardan iborat array qabul qiladigan va uni ichidagi qiymatlarni(sonlarni) bir-biriga qoshadigan va natijani qaytaradigan funksiya yarating:
  sumArray([1, 2, 3, 4, 5]) ➞ 15

  sumArray([-1, 0, 1]) ➞ 0

  sumArray([0, 4, 8, 12]) ➞ 24


