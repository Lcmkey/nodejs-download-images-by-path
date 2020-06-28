# Download Images By image path

1. Open inspect mode, Click `Console` menu

2. Execute below script in `console`

```js
let imgSrcArr = [];
document
  .querySelector(".t_f")
  .querySelectorAll("img")
  .forEach(item => {
    imgSrcArr = [...imgSrcArr, item.src];
  });

console.log(JSON.stringify(imgSrcArr));
```

> You can change the "querySelector" value base the html elements

output:

```js
["image.png", "img.jpg"];
```

3. Paste the Output to the variable `data` in `index.js` file as below

```js
const data = ["image.png", "img.jpg"];
```

4. Install node package

```properties
$ make install
```

5. Execute script

```properties
$ make run
```
