const phrases = [
  "Cyber Security Enthusiast",
  "Penetration Testing Student",
  "Web Security Researcher",
  "Ethical Hacking Learner"
];

const target = document.getElementById("typing");
let phrase = 0, char = 0, deleting = false;

function type() {
  const current = phrases[phrase];
  target.textContent = current.slice(0, char);

  if (!deleting && char < current.length) {
    char++;
    setTimeout(type, 75);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1500);
  } else if (char > 0) {
    char--;
    setTimeout(type, 35);
  } else {
    deleting = false;
    phrase = (phrase + 1) % phrases.length;
    setTimeout(type, 350);
  }
}
type();
