const acordions = document.querySelectorAll(".acordion-show");

acordions.forEach((acordionShow) => {
  acordionShow.addEventListener("click", () => {
    const acordion = acordionShow.parentElement.parentElement;

    if (acordion.classList.contains("active")) {
      return;
    } else {
      acordions.forEach((acordionItem) => {
        acordionItem.parentElement.parentElement.classList.remove("active");
        acordionItem.parentElement.parentElement
          .querySelector(".paragrafh")
          .classList.add("hide");
        acordionItem.querySelector(".arrow").classList.remove("rotate")
      });
      acordion.classList.add("active");
      acordion.querySelector(".paragrafh").classList.remove("hide");
      acordion.querySelector(".arrow").classList.add("rotate");
    }
  });
});
