const inputDOM = document.querySelector("#task");
const addBtnDOM = document.querySelector("#liveToastBtn");
const ulDOM = document.querySelector("#list");
const containerDOM = document.querySelector(".container");
const list = document.querySelectorAll("li");
const removeBtn = document.querySelector("#remove-btn");

const alertdiv = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Hey!</strong> Boş bırakmayınız.
<button type="button" class="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`;

// !!!!!!!!!!!!!!!!!!!!!!!!!

function deleteList(e) {
  if (e.target.classList.contains("bg-success")) {
    e.target.parentElement.remove();
  }
}

function alertDOM() {
  const div = document.createElement("div");
  containerDOM.prepend(div);
  div.innerHTML = alertdiv;
}

addBtnDOM.addEventListener("click", () => {
  if (inputDOM.value.trim() !== "") {
    const liDOM = document.createElement("li");
    liDOM.innerHTML = inputDOM.value;
    ulDOM.appendChild(liDOM);
    inputDOM.value = "";
  } else {
    alertDOM();
  }
});

removeBtn.addEventListener(
  "click",
  list.forEach((item) => {
    if (item.classList.contains("bg-success")) {
      item.parentElement.remove();
    }
  })
);

list.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("bg-success")) {
      item.classList.remove("bg-success");
    } else {
      item.classList.add("bg-success");
    }
  });
});
