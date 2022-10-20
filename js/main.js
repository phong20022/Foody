function onSearch(value) {
  if (value == "bún đậu" || value == "bun dau") {
    window.location.href = "/chitietsanpham.html";
  }
  if (value == "cafe"  || value == "Cafe") {
    window.location.href = "/sanpham2.html";
  }
  if (value == "trà sữa" || value == "tra sua") {
    window.location.href = "/sanpham3.html";
  }
}

const inputSearch = document.querySelector("#search__banbe");

inputSearch.addEventListener("keyup", (e) => {
  const value = e.target.value;
  if (e.code == "Enter") {
    onSearch(value);
  }
});

const btnSearch = document.querySelector("#btn-search");
console.log(btnSearch);
btnSearch.addEventListener("click", () => {
  const value = inputSearch.value;
  console.log(inputSearch.value);
  onSearch(value);
});
