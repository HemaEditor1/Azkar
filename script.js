let switchBtnDay = document.querySelector(".theSwitshBtnDay");
let switchBtnNight = document.querySelector(".theSwitshBtnNight");
let azkarDay = document.querySelector(".Azkar.Day");
let azkarNight = document.querySelector(".Azkar.Night");

let theSpn = document.querySelectorAll("span")[0]; // first Num
let theBtn = document.querySelectorAll("button")[2]; // secnd Num

// -------------------------------------------------------- Numbers Of Azkar

let allButtons = document.getElementsByClassName("smlNum"); // Buttons
let allButtonsArr = [...allButtons];
let allSpans = document.querySelectorAll("span"); // Spans

let lastDayZekr = document.getElementById("last1"); // Last Zekr At Morning
let indexOfLastDayZekr = allButtonsArr.indexOf(lastDayZekr); // Number Of Index

let lastNightZekr = document.getElementById("last2"); // Last Zekr At Night
let indexOfLastNightZekr = allButtonsArr.indexOf(lastNightZekr); // Number Of Index

let allBoxDivs = document.querySelectorAll(".box"); // Boxs

let theHead = document.querySelector(".header"); // Header
let theFoter = document.querySelector(".footer"); // Footer

// Day Azkar
for (let i = 0; i <= indexOfLastDayZekr + 1; i++) {
  let myReadNum = Number(allButtons[i].innerText.split("/")[0].trim()); // رقم القراءة الحالي
  let myFullNum = Number(allButtons[i].innerText.split("/")[1].trim()); // الرقم الكلي

  let getReadNum = window.localStorage.getItem(`Read Zekr ${i + 1}`);
  if (getReadNum) {
    myReadNum = Number(getReadNum);
    allSpans[i].innerText = myReadNum;

    if (myReadNum === myFullNum) {
      allButtonsArr[i].disabled = true;
      allButtonsArr[i].classList.add("deactive");
    }

    // Reset Day Time
    function resetDayTime() {
      let theDateNow = new Date();
      let dayTime = new Date();
      dayTime.setHours(5, 0, 0, 0);
      let nightTime = new Date();
      nightTime.setHours(14, 50, 0, 0);

      if (theDateNow > dayTime && theDateNow < nightTime) {
        // window.localStorage.setItem("Azkar Day", azkarDay);

        // -------------------
        window.localStorage.removeItem("Azkar Night");
        switchBtnNight.classList.add("deactive");
        switchBtnDay.classList.remove("deactive");
        azkarDay.style.display = "";
        azkarNight.style.display = "none";

        theHead.classList.remove("night");
        theFoter.classList.remove("night");

        allBoxDivs.forEach((box) => {
          box.classList.remove("night");
        });
        window.localStorage.setItem("Azkar Day", "اذكار الصباح");
        // -------------------

        window.localStorage.removeItem(`Read Zekr ${i + 1}`);
        window.location.reload();

        console.log("Counter Reset Done👌");
        console.log(`Reset At: ${theDateNow}`);
      }
    }

    // let timeNow = new Date();
  }

  allButtonsArr[i].addEventListener("click", function () {
    if (myReadNum < myFullNum) {
      myReadNum++;
      allSpans[i].innerText = myReadNum; // تحديث رقم القراءة داخل span
    }

    if (myReadNum === myFullNum) {
      allButtonsArr[i].disabled = true;
      allButtonsArr[i].classList.add("deactive");

      if (allButtonsArr[i + 1]) {
        setTimeout(() => {
          allBoxDivs[i + 1].scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        }, 50);
      }
    }

    window.localStorage.setItem(`Read Zekr ${i + 1}`, myReadNum);
  });
  setInterval(resetDayTime, 1000);
}

// --------------------------------------------------------------------------

// Night Azkar
for (let n = 0; n <= indexOfLastNightZekr; n++) {
  let myReadNum = Number(allButtons[n].innerText.split("/")[0].trim()); // رقم القراءة الحالي
  let myFullNum = Number(allButtons[n].innerText.split("/")[1].trim()); // الرقم الكلي

  let getReadNum = window.localStorage.getItem(`Read Zekr ${n + 1}`);
  if (getReadNum) {
    myReadNum = Number(getReadNum);
    allSpans[n].innerText = myReadNum;

    if (myReadNum === myFullNum) {
      allButtonsArr[n].disabled = true;
      allButtonsArr[n].classList.add("deactive");
    }

    // Reset Night Time
    function resetNightTime() {
      let theDateNow = new Date();
      let dayTime = new Date();
      dayTime.setHours(5, 0, 0, 0);
      let nightTime = new Date();
      nightTime.setHours(14, 50, 0, 0);

      if (theDateNow > nightTime || theDateNow < dayTime) {
        // window.localStorage.setItem("Azkar Night");

        // -------------
        window.localStorage.removeItem("Azkar Day");
        switchBtnDay.classList.add("deactive");
        switchBtnNight.classList.remove("deactive");
        azkarDay.style.display = "none";
        azkarNight.style.display = "";

        theHead.classList.add("night");
        theFoter.classList.add("night");

        allBoxDivs.forEach((box) => {
          box.classList.add("night");
        });
        window.localStorage.setItem("Azkar Night", "اذكار المساء");
        // -------------

        window.localStorage.removeItem(`Read Zekr ${n + 1}`);
        window.location.reload();

        console.log("Counter Reset Done👌");
        console.log(`Reset At: ${theDateNow}`);
      }
    }
  }

  allButtonsArr[n].addEventListener("click", function () {
    if (myReadNum < myFullNum) {
      myReadNum++;
      allSpans[n].innerText = myReadNum; // تحديث رقم القراءة داخل span
    }

    if (myReadNum === myFullNum) {
      allButtonsArr[n].disabled = true;
      allButtonsArr[n].classList.add("deactive");

      if (allButtonsArr[n + 1]) {
        setTimeout(() => {
          allBoxDivs[n + 1].scrollIntoView({
            block: "center",
            behavior: "smooth",
          });
        }, 50);
      }
    }

    window.localStorage.setItem(`Read Zekr ${n + 1}`, myReadNum);
  });

  setInterval(resetNightTime, 1000);
}

// -------------------------------------------------------- Numbers Of Azkar

// -------------------------------------------------------------------- Day & Night Btn

// Day Button
switchBtnDay.onclick = function () {
  // switchBtnDay.style.backgroundColor = "rgb(14, 152, 14)";
  // switchBtnNight.style.backgroundColor = "green";

  switchBtnNight.classList.add("deactive");
  switchBtnDay.classList.remove("deactive");
  azkarDay.style.display = "";
  azkarNight.style.display = "none";

  theHead.classList.remove("night");
  theFoter.classList.remove("night");

  allBoxDivs.forEach((box) => {
    box.classList.remove("night");
  });

  window.localStorage.setItem("Azkar Day", "اذكار الصباح");
  window.localStorage.removeItem("Azkar Night");
};

// Night Button
switchBtnNight.onclick = function () {
  switchBtnDay.classList.add("deactive");
  switchBtnNight.classList.remove("deactive");
  azkarDay.style.display = "none";
  azkarNight.style.display = "";

  theHead.classList.add("night");
  theFoter.classList.add("night");

  allBoxDivs.forEach((box) => {
    box.classList.add("night");
  });

  window.localStorage.setItem("Azkar Night", "اذكار المساء");
  window.localStorage.removeItem("Azkar Day");
};

// -------------------------------------------------------------------- Day & Night Btn

// Reaload Window Default (Azkar Day) After Fajr Time
window.onload = function () {
  azkarDay.style.display = "";
  azkarNight.style.display = "none";

  if (window.localStorage.getItem("Azkar Day")) {
    switchBtnNight.classList.add("deactive");
    switchBtnDay.classList.remove("deactive");
    azkarDay.style.display = "";
    azkarNight.style.display = "none";

    theHead.classList.remove("night");
    theFoter.classList.remove("night");

    allBoxDivs.forEach((box) => {
      box.classList.remove("night");
    });
  }

  if (window.localStorage.getItem("Azkar Night")) {
    switchBtnDay.classList.add("deactive");
    switchBtnNight.classList.remove("deactive");
    azkarDay.style.display = "none";
    azkarNight.style.display = "";

    theHead.classList.add("night");
    theFoter.classList.add("night");

    allBoxDivs.forEach((box) => {
      box.classList.add("night");
    });
  }
};

// ----------------------------------------------------------

// Write Year On Footer
let myFooter = document.querySelector(".footer");
let yearParagraph = document.createElement("h3");

yearParagraph.textContent = `Copyright © ${new Date().getFullYear()}`;
myFooter.appendChild(yearParagraph);

// ----------------------------------------------------------
