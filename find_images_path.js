/*

  Execute in Browswer console
  
 */

// METHOD 1
// imgSrcArr = [];
//
// for (let i = 18; i <= 36; i++) {
//   let img = document.getElementById("aimg_370357" + i);
//
//   if (img != null && img != undefined) {
//     imgSrcArr.push(img.src);
//   }
// }
// console.log(JSON.stringify(imgSrcArr));

// METHOD 2
imgSrcArr = [];
document
  .querySelector(".quote")
  .querySelectorAll("img")
  .forEach(item => {
    imgSrcArr = [...imgSrcArr, item.src];
  });
document
  .querySelector(".showhide")
  .querySelectorAll("img")
  .forEach(item => {
    imgSrcArr = [...imgSrcArr, item.src];
  });
console.log(imgSrcArr);

// METHOD 3
imgSrcArr = [];
document
  .querySelector(".t_f")
  .querySelectorAll("img")
  .forEach(item => {
    imgSrcArr = [...imgSrcArr, item.src];
  });

console.log(JSON.stringify(imgSrcArr));
