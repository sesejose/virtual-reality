const overlay = document.querySelector("nav .overlay");
const nav_list = document.querySelectorAll("nav ol li");

console.log(nav_list);
console.log(overlay);
nav_list.forEach((list) => {
  list.addEventListener("mouseover", () => {
    let position = list.getBoundingClientRect();
    overlay.classList.add("active");
    overlay.style.left = position.x + "px";
    overlay.style.top = position.y + "px";
    overlay.style.height = position.height + "px";
    overlay.style.width = position.width + "px";
  });
  list.addEventListener("mouseout", () => {
    overlay.classList.remove("active");
    console.log("Done!");
  });
});

function openmenumobile() {
  var x = document.getElementById("mainmenu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
