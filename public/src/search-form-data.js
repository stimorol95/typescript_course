export function searchHandler() {
    const form = document.querySelector(".searchForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const city = document.querySelector("#city");
        const checkInDate = document.querySelector("#check-in-date");
        const checkOutDate = document.querySelector("#check-out-date");
        const maxPrice = document.querySelector("#max-price");
        const fullData = {
            city: city.value,
            checkInDate: checkInDate.value,
            checkOutDate: checkOutDate.value,
            maxPrice: maxPrice.value,
        };
        executeSearch(fullData);
    });
}
function executeSearch(data) {
    console.log(data);
}
