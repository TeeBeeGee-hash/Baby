const container = document.querySelector(".container");
const beatingObjects = document.querySelectorAll(".animation-speed");

const hasViewed = localStorage.getItem("viewCount") == 1;

if (hasViewed) {
  document.querySelector(".container").classList.add("hidden");
  document.querySelector(".viewed").classList.remove("hidden");
  document.querySelector(".prompt").classList.add("hidden");
}

let currentMessageIndex = 0;

function setFullScreen() {
  document.body.requestFullscreen();
}

function showNextMessage() {
  setFullScreen();

  const messagePlaceHolder = document.querySelector(".message");
  messagePlaceHolder.innerHTML = htmlMessages[currentMessageIndex];

  if (currentMessageIndex < htmlMessages.length - 1) {
    currentMessageIndex++;
  } else {
    localStorage.setItem("viewCount", 1);
    const clickThroughUrl =
      "whatsapp://send?phone=27685036260&text=Hi good looking, delete this and type your reply here. Love you!";
    window.location.href = clickThroughUrl;
  }

  console.log(beatingObjects);
  beatingObjects.forEach((ob) => {
    ob.classList.add(`animation-speed${currentMessageIndex + 1}`);
  });
}

container.addEventListener("click", () => {
  showNextMessage();
});

//Test
