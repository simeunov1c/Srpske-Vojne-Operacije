const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

document.addEventListener("DOMContentLoaded", function() {
  const video = document.getElementById("intro");
  video.muted = false;
  video.volume = 0.3;
});

const playButtons = document.querySelectorAll("button.play-button");
playButtons.forEach(button => {
	button.addEventListener("click", () => {
		button.classList.toggle("play");
	});
});
document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("intro");
    const playButton = document.querySelector(".play-button");

    playButton.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            playButton.classList.remove("paused");
            playButton.classList.add("playing");
        } else {
            video.pause();
            playButton.classList.remove("playing");
            playButton.classList.add("paused");
        }
    });

    video.addEventListener("ended", function () {
        playButton.classList.remove("playing");
        playButton.classList.add("paused");
    });
});