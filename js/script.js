const detailSelects = document.querySelectorAll("details");
detailSelects.forEach((item) => {
    item.addEventListener("click", (e) => {
        detailSelects.forEach((detail) => {
            if (detail !== item) {
                detail.removeAttribute("open");
            }
        });
    });
});
