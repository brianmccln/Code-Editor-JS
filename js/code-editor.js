const htmlTA = document.getElementById('html-code');
const cssTA = document.getElementById('css-code');
const jsTA = document.getElementById('js-code');

const runBtn = document.getElementById('run');
runBtn.addEventListener('click', runCode);

const output = document.getElementById('output');

function runCode() {
    const render = output.contentDocument.body;
    render.innerHTML = htmlTA.value;
    render.innerHTML += `<style>${cssTA.value}</script>`;
    output.contentWindow.eval(jsTA.value);
}

/*

h1 = document.querySelector('h1');
h2 = document.querySelector('h2');
p = document.querySelector('p');
body = document.querySelector('body');

const btn = document.querySelector('button');
btn.addEventListener('click', changeColors);

function changeColors() {
  body.style.padding = "20px 50px";
  body.style.backgroundColor = "#ccc";
  h1.style.color = "gold";
  h1.style.backgroundColor = "purple";
  h2.style.color = "blue";
  h2.style.fontStyle = "italic";
  h2.style.textTransform = "uppercase";
  p.style.fontFamily = 'monospace';
  p.style.fontSize = "21px";
  p.style.lineHeight = "2rem";
  p.style.fontWeight = "bold";
}

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
button:hover {
 backgroundColor: "green";
}

<h1>Hello World</h1>
<h2>HTML-CSS-JS Code Editor</h2>
<p>How do you like this HTML-CSS-JS Code Editor, coded entirely in HTML, CSS and Vanilla JS with no libraries.
</p>
<button>Click Me</button>

*/