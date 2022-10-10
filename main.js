import './style.css'
import lottiePlayer from "lottie-web-light";

lottiePlayer.loadAnimation({
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: '/heart.json',
  container: document.querySelector("#app")
});
