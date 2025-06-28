window.addEventListener("load", () => {
  console.log('The backColor script is loaded');

  const images = document.querySelectorAll(".myImg");
  const boxes = document.querySelectorAll(".colorDisplay");
  const colorThief = new ColorThief();

  images.forEach((img, index) => {
    if (img.complete) {
      const color = colorThief.getColor(img);
      applyColor(color, boxes[index]);
    } else {
      img.addEventListener("load", function () {
        const color = colorThief.getColor(img);
        applyColor(color, boxes[index]);
      });
    }
  });

  function applyColor([r, g, b], element) {
    const hex = rgbToRgba(r, g, b);
    element.style.backgroundColor = hex;
  }

  function rgbToRgba(r, g, b) {
    return `rgba(${r}, ${g}, ${b}, ${0.7})`;
  }
});
