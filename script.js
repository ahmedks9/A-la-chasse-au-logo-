// Array of different logo representations (image or text)
const logos = [
  '<img src="logo.png" alt="Logo" style="width:150px;" />', // Image logo
  '<img src="art2.png" alt="Art 2" style="width:150px;" />', // New Art 2
  '<img src="art3.png" alt="Art 3" style="width:150px;" />', // New Art 3
  '<div style="color:blue;">Lyreco</div>', // Stylized Text
];

// Array of different animations to apply to the logo
const animations = ["scale", "rotate", "fade", "move"];

// Function to randomize and assign a logo type
function setRandomLogo() {
  const randomLogo = logos[Math.floor(Math.random() * logos.length)];
  const logoElement = document.getElementById("logo");

  // Set the appropriate logo (image or text)
  logoElement.innerHTML = randomLogo;

  // Apply specific classes based on logo type (ASCII, text, image)
  if (randomLogo === logos[3]) {
    logoElement.classList.add("textLogo");
    logoElement.classList.remove("asciiLogo");
  } else {
    logoElement.classList.remove("textLogo");
    logoElement.classList.add("asciiLogo");
  }

  randomizeColors(logoElement); // Randomize logo color and background
}

// Function to randomize and apply an animation to the logo
function applyRandomAnimation() {
  const randomAnimation =
    animations[Math.floor(Math.random() * animations.length)];
  const logoElement = document.getElementById("logo");
  logoElement.classList.add(randomAnimation); // Apply animation class

  // Remove the animation class after it finishes to allow for next animation
  setTimeout(() => {
    logoElement.classList.remove(randomAnimation);
  }, 1000); // Remove animation after 1s
}

// Function to move the logo randomly and make it disappear temporarily
function animateLogo() {
  const logoElement = document.getElementById("logo");
  logoElement.classList.add("hidden"); // Make logo disappear instantly

  // Wait for 0.5 second (logo disappears) and then move it
  setTimeout(() => {
    logoElement.classList.remove("hidden"); // Make logo visible again

    // Apply a random animation
    applyRandomAnimation();

    // Randomize the position of the logo
    const x = Math.floor(Math.random() * (document.body.scrollWidth - 100)); // Full document width
    const y = Math.floor(Math.random() * (document.body.scrollHeight - 100)); // Full document height

    logoElement.style.left = `${x}px`;
    logoElement.style.top = `${y}px`;

    // Randomize logo content again after it moves
    setRandomLogo();
  }, 500); // 0.5 second delay for disappearing effect
}

// Function to randomly change colors and background of the logo
function randomizeColors(element) {
  const colors = ["blue", "green", "red", "purple", "orange"];
  const backgrounds = [
    "yellow",
    "pink",
    "lightgreen",
    "lightblue",
    "lightgrey",
  ];

  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Apply random color and background to the logo
  element.style.color = randomColor;
  element.style.backgroundColor = randomBackground;
}

// Function to trigger confetti effect on click
function triggerConfetti(event) {
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}

// Initialize the logo with a random logo and animation
setRandomLogo();

// Event listener for click on logo to trigger confetti
document.getElementById("logo").addEventListener("click", triggerConfetti);
