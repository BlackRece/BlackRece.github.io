document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.getElementById("video");
    const imageElement = document.getElementById("fallbackImage");

    videoElement.addEventListener("load", function () {
        imageElement.style.display = "none";
    });

    videoElement.addEventListener("error", function () {
        imageElement.style.display = "block";
    });
});
