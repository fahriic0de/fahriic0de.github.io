const phrases = [
  "Cyber Security Enthusiast",
  "Penetration Testing Student",
  "Web Security Researcher",
  "Ethical Hacking Learner"
];

const typing = document.getElementById("typing");
let pi = 0, ci = 0, deleting = false;

function typeLoop(){
  const word = phrases[pi];
  typing.textContent = word.slice(0, ci);
  if(!deleting && ci < word.length){ ci++; setTimeout(typeLoop, 68); }
  else if(!deleting){ deleting = true; setTimeout(typeLoop, 1400); }
  else if(ci > 0){ ci--; setTimeout(typeLoop, 30); }
  else { deleting = false; pi = (pi + 1) % phrases.length; setTimeout(typeLoop, 300); }
}
typeLoop();

const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const themeSymbol = document.getElementById("themeSymbol");
const themeLabel = document.getElementById("themeLabel");

function applyTheme(theme){
  root.dataset.theme = theme;
  localStorage.setItem("fahri-theme", theme);
  themeSymbol.textContent = theme === "dark" ? "☼" : "☾";
  themeLabel.textContent = theme === "dark" ? "Light" : "Dark";
}
applyTheme(localStorage.getItem("fahri-theme") || "dark");

themeBtn.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "block" ? "none" : "block";
});
mobileMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => mobileMenu.style.display = "none"));

document.querySelectorAll(".stack-tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".stack-tab").forEach(x => x.classList.remove("active"));
    document.querySelectorAll(".stack-panel").forEach(x => x.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
