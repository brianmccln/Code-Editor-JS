const htmlBox = document.getElementById('html-code');
const cssBox = document.getElementById('css-code');
const jsBox = document.getElementById('js-code');

const runBtn = document.getElementById('run');
runBtn.addEventListener('click', runCode);

const iframe = document.querySelector('iframe');

function runCode() {
    const output = iframe.contentDocument.body;
    output.innerHTML = `${htmlBox.value}<style>${cssBox.value}</script>`;
    iframe.contentWindow.eval(jsBox.value);
}

const idoc = document.getElementsByTagName("iframe")[0].contentWindow.document;
window.open(idoc.getElementById("idOfImageInTheIframe").src, "download_win");

/*
Code for pasting into Code Editor:

// JS
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');
const bod = document.querySelector('body');

const btn = document.querySelector('button');
btn.addEventListener('click', changeColors);

function changeColors() {
  bod.style.padding = "20px 50px";
  bod.style.backgroundColor = "#ccc";
  h1.style.color = "gold";
  h1.style.backgroundColor = "purple";
  h2.style.color = "blue";
  h2.style.fontStyle = "italic";
  h2.style.textTransform = "uppercase";
  p.style.fontFamily = 'monospace';
  p.style.fontSize = "21px";
  p.style.lineHeight = "2rem";
  p.style.fontWeight = "bold";
  btn.style.letterSpacing = "15px";
}

// random h1 color on any key press
document.addEventListener('keydown', () => document.querySelector('h1').style.color = "#" + Math.floor(Math.random()*16777216).toString(16));

// CSS
body {
  background-color: tan;
  margin: 0;
  padding: 25px 15px 0;
  font-family: sans-serif;
  line-height: 1.4rem;
  font-size: 16px;
} 
h1 {
    background-color: orange;
    color: #fff;
    margin: 0;
    padding: 15px;
}
p {
  line-height: 1.4rem;
}
button {
  padding: 5px 10px;
  width: 200px;
  display: block;
  font-weight: bold;
  margin: 0 auto;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 15px;
}

// HTML
<h1>Hello World</h1>
<h2>HTML-CSS-JS Code Editor</h2>
<p>How do you like this HTML-CSS-JS Code Editor, coded entirely in HTML, CSS and Vanilla JS with no libraries.
</p>
<button>Click Me</button>

*/