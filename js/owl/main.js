$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

const filme = document.querySelectorAll(".box-filme");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const caixaFilme = document.querySelector(".caixa-filme");
const caixa = document.getElementById("caixa-filme");

for (let i = 0; i < filme.length; i++) {
  filme[i].addEventListener("dblclick", function () {
    /*console.log("clicou");*/

    if (filme[i].id == "flash") {
      caixaFilme.style.backgroundImage = "url(../img/flash-wallpaper.jpg)";
      caixaFilme.style.color = "white";
      caixaFilme.querySelector(".title").textContent = "The Flash";
    } else if (filme[i].id == "vikings") {
      caixaFilme.style.backgroundImage = "url(../img/vikings-wallpaper.jpg)";
      caixaFilme.style.color = "white";
      caixaFilme.querySelector(".title").textContent = "Vikings";
    } else if (filme[i].id == "mk") {
      caixaFilme.style.backgroundImage = "url(../img/mk-wallpaper.jpg)";
      caixaFilme.style.color = "white";
      caixaFilme.querySelector(".title").textContent =
        "Mortal Kombat - O filme";
    }

    caixaFilme.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", function () {
  caixaFilme.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  caixaFilme.classList.add("hidden");
  overlay.classList.add("hidden");
});
