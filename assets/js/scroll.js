  gsap.registerPlugin(ScrollTrigger);

  function adjustFeatureHeights() {
    const img = document.getElementById("stickyImage");
    const features = document.querySelectorAll(".feature");

    if (!img.complete) {
      img.onload = adjustFeatureHeights;
      return;
    }

    const imgHeight = img.offsetHeight;
    const halfHeight = imgHeight / 2;

    features.forEach((feature, index) => {
      feature.style.height = halfHeight + "px";
      if (index === 0) {
        feature.style.marginTop = "0px";
      }
    });
  }

  window.addEventListener("load", adjustFeatureHeights);
  window.addEventListener("resize", adjustFeatureHeights);

  const stickyImg = document.querySelector("#stickyImage");
  const stickyOffset = 80; // Tailwind top-20 (~80px)

  gsap.utils.toArray(".feature").forEach((block) => {
    gsap.to(block, {
      scrollTrigger: {
        trigger: block,
        start: () => `top+=${stickyOffset} bottom-=${stickyImg.offsetHeight}px`,
        end: () => `bottom top`,
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out"
    });
  });