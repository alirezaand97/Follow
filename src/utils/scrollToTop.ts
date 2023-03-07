export const scrollToTop = (top = 0, left = 0) => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
