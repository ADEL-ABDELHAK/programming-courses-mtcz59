let num1, num2: number;
num1 = parseInt(prompt("ادخل العدد الاول"));
num2 = parseInt(prompt("ادخل العدد الثاني"));
if (num1 * num2 > 0) {
  console.log("العدد موجب");
}
if (num1 * num2 < 0) {
  console.log("العدد سالب");
}
if (num1 * num2 == 0) {
  console.log("العدد معدوم");
}
console.log("النهاية");
