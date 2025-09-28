// Hàm chờ phần tử xuất hiện
const waitForElement = (selector, callback) => {
  const interval = setInterval(() => {
    const el = document.querySelector(selector);
    if (el) {
      clearInterval(interval); // dừng kiểm tra khi tìm thấy
      callback(el);
    }
  }, 100); // kiểm tra mỗi 100ms
};

waitForElement(".value-slider", (slider) => {
  const btnLeft = document.querySelector(".btn-value-left");
  const btnRight = document.querySelector(".btn-value-right");

  btnLeft.addEventListener("click", () => {
    slider.scrollLeft -= slider.children[1].offsetWidth + 16;
  });

  btnRight.addEventListener("click", () => {
    slider.scrollLeft += slider.children[1].offsetWidth + 16;
  });
});
