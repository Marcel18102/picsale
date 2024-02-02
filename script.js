document.addEventListener("DOMContentLoaded", function() {
    const imageUrls = [
        "_b07c734f-8775-4727-b587-8052f91fe9f3.jpeg",
        "_74a5f80f-6f70-4820-9153-6920bccf8a13.jpeg",
        "_84b192ee-3fd3-4e2e-9cc0-070455f72c7f.jpeg",
        "_ad2bb2d2-3bbb-4bf6-a100-8ac1e203948e.jpeg",
        "_dffa1910-abf1-40a7-a711-f3f2c450995c.jpeg",
        "_f57d3f63-c89b-4378-be8d-72ed098f38c8.jpeg"
        // Add more image URLs as needed
    ];

    const interval = 3000;

    const previewBoxes = document.querySelectorAll(".preview-box img");
    let currentIndex = 0;

    function changeImage() {
        currentIndex = (currentIndex + 1) % imageUrls.length;
        const nextImageUrl = imageUrls[currentIndex];

        // Update all preview boxes
        previewBoxes.forEach(box => {
            box.setAttribute("src", nextImageUrl);
        });
    }

    setInterval(changeImage, interval);
});
