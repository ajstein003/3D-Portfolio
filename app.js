const canvas = document.querySelector(".canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const frameCount = 179;

const currentFrame = (index) => `./best-ball/${(index + 1).toString()}.jpg`;

const images = [];
let ball = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  console.log(currentFrame(i));
  images.push(img);
}

gsap.to(ball, {
  frame: frameCount - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.5,
    pin: "canvas",
    end: "250%",
  },
  onUpdate: render,
});

gsap.fromTo(".ball-text",
  {
    opacity: 0,
    x: -100, // move text to the left of its original position
  },
  {
    opacity: 1,
    x: 0, // move text back to its original position
    duration: 1, // adjust duration as needed
    scrollTrigger: {
      scrub: 1,
      start: "4%",
      end: "6%",
    },
    onComplete: () => {
      gsap.to(".ball-text", { opacity: 0 });
    },
  }
);

gsap.fromTo(".second-text",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      scrub: 1,
      start: "6%", // adjust start and end positions as needed
      end: "7.5%",
    },
    onComplete: () => {
      gsap.to(".second-text", { opacity: 0 });
    },
  }
);

gsap.fromTo(".third-text",
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      scrub: 1,
      start: "17.5%", // adjust start and end positions as needed
      end: "22%",
    },
    onComplete: () => {
      gsap.to(".third-text", { opacity: 0 });
    },
  }
);

gsap.fromTo(".fourth-text",
  {
    opacity: 0,
    x: 100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      scrub: 1,
      start: "18.4%", // adjust start and end positions as needed
      end: "23%",
    },
    onComplete: () => {
      gsap.to(".fourth-text", { opacity: 0 });
    },
  }
);


gsap.fromTo(".contacts-text",
  {
    opacity: 0,
    x: -100, // move text to the left of its original position
  },
  {
    opacity: 1,
    x: 0, // move text back to its original position
    duration: 1, // adjust duration as needed
    scrollTrigger: {
      scrub: 1,
      start: "25%",
      end: "28%",
    },
    onComplete: () => {
      gsap.to(".contacts-text", { opacity: 0 });
    },
  }
);

gsap.fromTo(".sixth-text",
  {
    opacity: 0,
    x: -100,
  },
  {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      scrub: 1,
      start: "24%", // adjust start and end positions as needed
      end: "28%",
    },
    onComplete: () => {
      gsap.to(".sixth-text", { opacity: 0 });
    },
  }
);


gsap.fromTo(".seventh-text",
  {
    opacity: 0,
    x: -100, // move text to the left of its original position
  },
  {
    opacity: 1,
    x: 0, // move text back to its original position
    duration: 1, // adjust duration as needed
    scrollTrigger: {
      scrub: 1,
      start: "37%",
      end: "46%",
    },
    onComplete: () => {
      gsap.to(".seventh-text", { opacity: 0 });
    },
  }
);

gsap.fromTo(".eight-text",
  {
    opacity: 0,
    x: -100, // move text to the left of its original position
  },
  {
    opacity: 1,
    x: 0, // move text back to its original position
    duration: 1, // adjust duration as needed
    scrollTrigger: {
      scrub: 1,
      start: "40%",
      end: "50%",
    },
    onComplete: () => {
      gsap.to(".eight-text", { opacity: 0 });
    },
  }
);


images[0].onload = render;

function render() {
  context.canvas.width = images[0].width;
  context.canvas.height = images[0].height;

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[ball.frame], 0, 0);
}
