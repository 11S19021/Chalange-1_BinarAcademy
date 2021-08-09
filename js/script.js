let pilihanPlayer = document.querySelectorAll("#players div");
let pilihanComp = document.querySelectorAll("#computers div");
let vs = document.getElementById("textVS");
let divHasil = document.getElementById("divHasil");
let textHasil = document.getElementById("textHasil");
let btnReset = document.getElementById("refresh");
let imgReset = document.getElementById("img-restart");

class Game {
  constructor(isStart, valueUser, valueComp) {
    this.isStart = isStart;
    this.valueUser = valueUser;
    this.valueComp = valueComp;
    this.result = "";
  }

  gameStart() {
    this.pilihanUser();
  }

  randomValue() {
    return Math.floor(Math.random() * 3);
  }

  pilihanUser() {
    pilihanPlayer.forEach((player, index) => {
      player.addEventListener("click", () => {
        if (!this.isStart) {
          this.valueUser = index;
          this.valueComp = this.randomValue();

          this.stylingUserComp();

          this.checkHasil(this.valueUser, this.valueComp);

          this.stylingResult();
          this.reset();
          this.isStart = true;
        } else {
          alert("Reset Dahulu !");
        }
      });
    });
  }

  stylingUserComp() {
    pilihanPlayer[this.valueUser].classList.add("bg-gray");
    pilihanComp[this.valueComp].classList.add("bg-gray");
  }

  checkHasil(valueUser, valueComp) {
    let result = "";
    if (valueUser === valueComp) {
      result = "imbang";
    } else {
      if (valueUser === 0) {
        result = valueComp === 1 ? "kalah" : "menang";
      } else if (valueUser === 1) {
        result = valueComp === 2 ? "kalah" : "menang";
      } else if (valueUser === 2) {
        result = valueComp === 0 ? "kalah" : "menang";
      }
    }

    this.result = result;
  }

  stylingResult() {
    if (this.result === "imbang") {
      vs.classList.add("hidden");
      divHasil.classList.add("bg-dark-green");
      divHasil.classList.remove("hidden");
      textHasil.innerHTML = "Draw";
    } else if (this.result === "menang") {
      vs.classList.add("hidden");
      divHasil.classList.add("bg-light-green");
      divHasil.classList.remove("hidden");
      textHasil.innerHTML = "Player 1 Wins";
    } else {
      vs.classList.add("hidden");
      divHasil.classList.add("bg-light-green");
      divHasil.classList.remove("hidden");
      textHasil.innerHTML = "Player 1 Lose";
    }
  }

  reset() {
    btnReset.addEventListener("click", () => {
      vs.classList.remove("hidden");
      divHasil.classList.add("hidden");
      pilihanPlayer[this.valueUser].classList.remove("bg-gray");
      pilihanComp[this.valueComp].classList.remove("bg-gray");
      this.valueComp = this.randomValue();
      this.isStart = false;

      imgReset.classList.add("transform");
      imgReset.classList.add("transition");
      imgReset.classList.add("duration-100");

      if (imgReset.classList.contains("rotate-180")) {
        imgReset.classList.remove("rotate-180");
      } else {
        imgReset.classList.add("rotate-180");
      }
    });
  }
}

let game = new Game(false, 0, 0);
game.gameStart();
