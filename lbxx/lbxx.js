// script.js
document.addEventListener("DOMContentLoaded", () => {
    const imageElement = document.getElementById("galleryImage");
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");

    // 图片列表
    const images = [
        "images/shinchan1.jpg",
        "images/shinchan2.jpg",
        "images/shinchan3.jpg",
        "images/shinchan4.jpg",
        "images/shinchan5.jpg"
    ];

    let currentIndex = 0;

    // 更新图片
    function updateImage(index) {
        if (index >= 0 && index < images.length) {
            imageElement.src = images[index];
            currentIndex = index;
        }
    }

    // 上一张
    prevButton.addEventListener("click", () => {
        const newIndex = currentIndex - 1;
        updateImage(newIndex);
    });

    // 下一张
    nextButton.addEventListener("click", () => {
        const newIndex = currentIndex + 1;
        updateImage(newIndex);
    });
});