# lazySpin

lazySpin is a simple JavaScript library to create loading screens as simple as possible.

## Installation

Include the .js file and .css file from the build folder in the head of the HTML.

```html
<link rel="stylesheet" href="lazySpin.css">
<script src="lazySpin.js"></script>
```

## Usage

Create a new loading screen object

```js
let loadingScreen = new LoadingScreen()
```

Customize the properties

```js
loadingScreen.properties = {
    overlay: 'light',
    color: 'red',
    speed: 'normal'
}  //these are the default value
```

Append the object to HTML element. Should a loading screen is added to a partial container, the container should have its **position set as relative** in CSS.

```js
loadingScreen.addTo(document.body, 'loading1') 
//first parameter being the element, second being the unique ID of the loading screen
```

Start and stop the loading by using these lines

```js
loadingScreen.showLoading('loading1')
loadingScreen.stopLoading('loading1')
```

## Quick Look

[Click on this link to show the library in action](https://lazySpin.xinhong9299.repl.co)

## License

[MIT](https://choosealicense.com/licenses/mit/)