    const buttons_modal = document.querySelectorAll(".button-modal");
    const modal = document.querySelector(".modal");
    const toning = document.querySelector(".toning");
    const burger = document.querySelector(".header__button");
    const closed_button = document.querySelector(".modal__button");
    for (let button_modal of buttons_modal) {
      button_modal.addEventListener("click", function(evt) {
        modal.classList.toggle("modal--off");
        modal.classList.toggle("modal--on");
        toning.classList.toggle("toning--off");
        toning.classList.toggle("toning--on");
        burger.classList.toggle("header__button--black");
        burger.classList.toggle("header__button--white");
      });
    }
    window.addEventListener("keydown", function(e) {
      if (e.keyCode === 27) {
        if (modal.classList.contains("modal--on")) {
          e.preventDefault();
          modal.classList.toggle("modal--on");
          modal.classList.toggle("modal--off");
          toning.classList.toggle("toning--on");
          toning.classList.toggle("toning--off");
          burger.classList.toggle("header__button--black");
          burger.classList.toggle("header__button--white");
        }
      }
    });
    closed_button.addEventListener("click", function(evt) {
      modal.classList.toggle("modal--on");
      modal.classList.toggle("modal--off");
      toning.classList.toggle("toning--on");
      toning.classList.toggle("toning--off");
      burger.classList.toggle("header__button--black");
      burger.classList.toggle("header__button--white");
    });
