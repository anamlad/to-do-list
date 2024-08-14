const dugmence = document.getElementById("dugmence");
const input = document.getElementById("todo");
const druga = document.getElementById("druga");

function funkcija2(tekst) {
  if (tekst.style.backgroundColor === "rgb(5, 71, 42)") {
    tekst.style.backgroundColor = "#889cb8";
  } else {
    tekst.style.backgroundColor = "#05472a";
  }
}

function funkcija3(tekst) {
  tekst.style.display = "none";
}
function funkcija() {
  const tekst = document.createElement("div");
  const user = input.value;
  tekst.textContent = user;
  const button = document.createElement("button");
  button.textContent = "x";
  tekst.className = "tekst";
  tekst.appendChild(button);
  druga.appendChild(tekst);
  tekst.addEventListener("click", () => funkcija2(tekst));
  button.addEventListener("click", () => funkcija3(tekst));
}

dugmence.addEventListener("click", funkcija);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    funkcija();
  }
});
