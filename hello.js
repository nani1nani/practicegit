const a = document.getElementById("root");
const b = document.createElement("h1");
b.innerHTML = "hello";
a.appendChild(b);
const button = document.createElement("button");
button.innerHTML = "click";
a.appendChild(button);

const box = document.createElement("div");

a.appendChild(box);
box.classList.add("custom-box");

button.addEventListener("click", (e) => {
  // Step 3: Set inline styles
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = "blue";
  box.style.margin = "10px";
});
const apple = "hello";
