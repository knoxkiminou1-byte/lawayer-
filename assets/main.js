document.addEventListener("DOMContentLoaded", () => {
  const revealEls = Array.from(document.querySelectorAll(".rsb-reveal"));

  const onScroll = () => {
    const trigger = window.innerHeight * 0.9;
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < trigger) {
        el.classList.add("rsb-reveal-visible");
      }
    });
  };

  onScroll();
  window.addEventListener("scroll", onScroll);
});
