document.addEventListener("DOMContentLoaded", () => {
  const videoElements = document.querySelectorAll(
    ".product__image-video"
  ) as NodeListOf<HTMLVideoElement>;

  videoElements.forEach((video) => {
    video.autoplay = true;
    video.load();
  });
});
