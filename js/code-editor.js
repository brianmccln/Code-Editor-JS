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

const btn = document.querySelector('button');
btn.addEventListener('click', changeColors);

function changeColors() {
  h1.style.color = "gold";
  h1.style.backgroundColor = "purple";
  h2.style.color = "forestgreen";
  h2.style.textTransform = "uppercase";
}

<h1>Hello World</h1>
<h2>HTML-CSS-JS Code Editor</h2>
<p>How do you like this HTML-CSS-JS Code Editor, coded entirely in HTML, CSS and Vanilla JS with no libraries.
</p>
<button>Click Me</button>

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
    padding: 5px 10px;
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
}

*/