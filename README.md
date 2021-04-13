# HTML toggle-element
A javascript library that implements a toggleable-element class with an onstatechange function called whenever the toggle state changes.

### Installation & Usage:
* Clone the repository or download the repository as zip.
* Copy the `toggleElement.js` file to a directory that you can navigate from your html file.
* Insert the following code ***right before closing your `body` tag***:\
`<script src="/path/to/the/toggleElement.js"></script>` (replace `/path/to/the/` with the path to your `toggleElement.js` file)
* Usage:
```HTML
<!--HTML-->
<body>
  <toggleable-element id="exampleToggle">Click Me</toggleable-element>
  
<!--Remember to put the script tag after you finish using the custom elements-->
  <script src="toggleElement.js"></script>
</body>
``` 
```CSS
/*CSS*/
#exampleToggle{
  background: blue;
}
#exampleToggle[state="on"]{
  background: red;
}
```
```JS
//Javascript
document.getElementById("exampleToggle").onstatechange = ()=>{
  console.log(document.getElementById("exampleToggle").state)
}
```
* If you can't see the toggleable-element, make sure you followed the steps correctly and make sure your toggleable-element has something in it or has a set size (this element behaves like a div by default)

## You can use and modify my code as much as you want!
### Though i would appreciate if you credited me :)
