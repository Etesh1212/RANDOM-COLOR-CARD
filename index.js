const container = document.querySelector(".container");

for (let i = 0; i < 30; i++) {
  const box = document.createElement("div");
  box.classList.add("color-card");
  box.innerHTML = i + 0;
  container.appendChild(box);
}
