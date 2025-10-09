  const lazyVideos = document.querySelectorAll('video.lazy');

  const videoObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const video = entry.target;
        video.src = video.dataset.src;
        video.load();
        observer.unobserve(video);
      }
    });
  });

  lazyVideos.forEach(video => videoObserver.observe(video));

document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll("video");

  function startVideos() {
    videos.forEach(video => {
      if (video.paused) {
        video.play().catch(err => {
          console.log("Autoplay blockiert:", err);
        });
      }
    });

    // Event Listener nur einmal ausführen, dann wieder entfernen
    document.removeEventListener("click", startVideos);
    document.removeEventListener("touchstart", startVideos);
  }

  document.addEventListener("click", startVideos);
  document.addEventListener("touchstart", startVideos);
});