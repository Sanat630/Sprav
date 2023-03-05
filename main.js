const searchValue = document.getElementById('search-value')

const form = document.getElementById("search--form")


form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(searchValue.value);
    
  });
