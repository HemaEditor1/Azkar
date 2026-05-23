let switchBtnDay = document.querySelector(".theSwitshBtnDay");
let switchBtnNight = document.querySelector(".theSwitshBtnNight");
let azkarDay = document.querySelector(".Azkar.Day");
let azkarNight = document.querySelector(".Azkar.Night");

let timeNow = new Date();
let timings;

// ==============================================

// let dayTime = new Date();
// dayTime.setHours(5, 0, 0, 0);

// let nightTime = new Date();
// nightTime.setHours(16, 30, 0, 0);

// Azkar Last Page
let moreZekr = document.getElementsByClassName("moreAzkar");
let moreZekrArr = [...moreZekr];
let textForMoreAzkar = document.querySelector(".knowMoreAzkar");
let index = timeNow.getDate() % moreZekrArr.length;
let moreAzkarLastPage = `هل تعرف <a href="${moreZekrArr[index].href}">${moreZekrArr[index].innerHTML}</a> ؟`;

// ----------------------------------------------------------

// -------------------------------------------------------- Numbers Of Azkar

let allButtons = document.getElementsByClassName("smlNum"); // Buttons
let allButtonsArr = [...allButtons];
let allSpans = document.querySelectorAll("span"); // Spans
let allSpansArr = [...allSpans];
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
      allSpansArr[i].classList.add("deactive");
    }
  }

  allButtonsArr[i].addEventListener("click", function () {
    if (myReadNum < myFullNum) {
      myReadNum++;
      allSpans[i].innerText = myReadNum; // تحديث رقم القراءة داخل span
    }

    if (myReadNum === myFullNum) {
      allButtonsArr[i].disabled = true;
      allButtonsArr[i].classList.add("deactive");
      allSpansArr[i].classList.add("deactive");

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
      allSpansArr[n].classList.add("deactive");
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
      allSpansArr[n].classList.add("deactive");

      window.localStorage.setItem("Date", timeNow.getDate());

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
}

// -------------------------------------------------------------------- Day & Night Functions

let downBtn = document.querySelector(".downBtn");
let upBtn = document.querySelector(".upBtn");
let linksMoreZekr = document.querySelector(".linksMoreZekr");
let whiteBoard = document.querySelector(".whiteBoard");

function closeWhiteBoard() {
  whiteBoard.classList.add("close");
}

function dayAzkar() {
  downBtn.classList.remove("night");
  upBtn.classList.remove("night");
  linksMoreZekr.classList.remove("night");
  downBtn.classList.add("day");
  upBtn.classList.add("day");
  linksMoreZekr.classList.add("day");
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

  menuElements.classList.remove("night");
}

function nightAzkar() {
  downBtn.classList.remove("day");
  upBtn.classList.remove("day");
  linksMoreZekr.classList.remove("day");
  downBtn.classList.add("night");
  upBtn.classList.add("night");
  linksMoreZekr.classList.add("night");
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

  menuElements.classList.add("night");
}

// -------------------------------------------------------------------- Day & Night Btn

// Day Button
switchBtnDay.onclick = function () {
  dayAzkar();
};

// Night Button
switchBtnNight.onclick = function () {
  nightAzkar();
};

// -------------------------------------------------------------------- Onload Window

// Onload Window Default (Azkar Day) After Fajr Time
window.onload = function () {
  fetch(
    `https://api.aladhan.com/v1/timingsByCity/${timeNow.getDate()}-${timeNow.getMonth() + 1}-${timeNow.getFullYear()}?city=cairo&country=egypt&method=8`,
  )
    .then((response) => response.json())
    .then((data) => {
      timings = data.data.timings;

      startApp();
    })
    .catch((error) => {
      console.log("Error:", error);
    });
};

// ============================================

function startApp() {
  // ============================================
  // Time Values

  let fajrTime = timings.Fajr.replace(":", "").padStart(4, "0");

  let asrTime = timings.Asr.replace(":", "").padStart(4, "0");

  console.log(fajrTime);
  console.log(asrTime);

  let timeNowIs = (
    `${timeNow.getHours()}` + `${timeNow.getMinutes()}`
  ).padStart(4, "0");

  console.log(timeNowIs);
  // ============================================

  // Reset All Azkar Counters
  if (
    Number(window.localStorage.getItem("Date")) !== timeNow.getDate() &&
    Number(timeNowIs) >= Number(fajrTime)
  ) {
    for (r = 0; r < allButtonsArr.length; r++) {
      window.localStorage.removeItem(`Read Zekr ${r + 1}`);
    }
    window.localStorage.removeItem("Azkar Day");
    window.localStorage.removeItem("Azkar Night");

    // ============================================
    // Save New Date
    window.localStorage.setItem("Date", timeNow.getDate());

    // ============================================
    // Reload One Time
    if (!window.localStorage.getItem("Reload")) {
      window.localStorage.setItem("Reload", "Done");

      location.reload();
    }
  } else {
    // نفس اليوم
    // شيل علامة الريلود

    window.localStorage.removeItem("Reload");
  }

  // ============================================
  // Auto Detect Azkar

  if (
    Number(timeNowIs) >= Number(asrTime) ||
    Number(timeNowIs) < Number(fajrTime)
  ) {
    nightAzkar();
  } else {
    dayAzkar();
  }

  // ============================================
  // Show Link

  textForMoreAzkar.innerHTML = moreAzkarLastPage;

  // ============================================
  // Close Loading
  closeWhiteBoard();
}

// -------------------------------------------------------------------- Onload Window

// Write Year On Footer
let myFooter = document.querySelector(".footer");
let yearParagraph = document.createElement("h3");

yearParagraph.textContent = `Copyright © ${new Date().getFullYear()}`;
myFooter.appendChild(yearParagraph);

// ----------------------------------------------------------

// Zekr Info
let infoBtn = document.querySelectorAll(".infoBtn");
let sourceHidden = document.querySelectorAll(".sourceHidden");
let doneBtn = document.querySelectorAll(".doneBtn");

for (let g = 0; g < infoBtn.length; g++) {
  infoBtn[g].onclick = function () {
    infoBtn[g].classList.add("deactive");
    sourceHidden[g].classList.add("active");

    setTimeout(() => {
      doneBtn[g].classList.remove("deactive");
    }, 300);
  };

  doneBtn[g].onclick = function () {
    infoBtn[g].classList.remove("deactive");
    sourceHidden[g].classList.remove("active");
    doneBtn[g].classList.add("deactive");
  };

  // Close Info When Clicked On Anywhere On Site
  window.addEventListener("click", (e) => {
    if (e.target !== doneBtn[g] && e.target !== infoBtn[g]) {
      infoBtn[g].classList.remove("deactive");
      sourceHidden[g].classList.remove("active");
      doneBtn[g].classList.add("deactive");
    }
  });
}

// -------------------------------------------------------------------------- MENU FUNCTIONS
// Menu Functions

// Open Menu Elements
function openMenuElements() {
  menuElements.classList.add("show");
  menuElementsBtn.classList.add("close");
  menuElementsBtnX.classList.add("show");
}

// Close Menu Elements
function closeMenuElements() {
  menuElements.classList.remove("show");
  menuElementsBtn.classList.remove("close");
  menuElementsBtnX.classList.remove("show");
}

// Open Info Elements
function openInfoMenu() {
  infoElements.classList.add("show");
  infoElementsBtn.classList.add("close");
  infoElementsBtnX.classList.add("show");
}

// Close Info Elements
function closeInfoMenu() {
  infoElements.classList.remove("show");
  infoElementsBtn.classList.remove("close");
  infoElementsBtnX.classList.remove("show");
}

// Add Black Mate
function addBlack() {
  blackMate.classList.remove("close");
}

// Close Black Mate
function closeBlack() {
  blackMate.classList.add("close");
}

// -------------------------------------------------------------------------- MENU FUNCTIONS

// Right Menu
let menuElementsBtn = document.querySelector(".menuElementsBtn"); // زر القائمة
let menuElements = document.querySelector(".menuElements"); // القائمة
let menuElementsBtnX = document.querySelector(".menuElementsBtnX");

// Left Menu
let infoElementsBtn = document.querySelector(".infoElementsBtn");
let infoElementsBtnX = document.querySelector(".infoElementsBtnX");
let infoElements = document.querySelector(".infoElements");

let blackMate = document.querySelector(".blackMate");

menuElementsBtn.addEventListener("click", () => {
  // Close Info Menu
  if (infoElements.classList.contains("show")) {
    closeInfoMenu();
  }

  // Open Elements Menu
  openMenuElements();
  addBlack();
});

// Close Elements Menu By X Btn
menuElementsBtnX.addEventListener("click", () => {
  closeMenuElements();
  closeBlack();
});

infoElementsBtn.addEventListener("click", () => {
  // Close Elements Menu
  if (menuElements.classList.contains("show")) {
    closeMenuElements();
  }

  // Open Info Menu
  openInfoMenu();
  addBlack();
});

// Close Info Menu By X Btn
infoElementsBtnX.addEventListener("click", () => {
  closeInfoMenu();
  closeBlack();
});

// Close Info Menu If Click Out This Menu
window.addEventListener("click", (e) => {
  if (infoElements.classList.contains("show")) {
    if (
      !infoElements.contains(e.target) &&
      !infoElementsBtn.contains(e.target)
    ) {
      closeInfoMenu();
      closeBlack();
    }
  }
});

// Close Elements Menu If Click Out This Menu
window.addEventListener("click", (el) => {
  if (menuElements.classList.contains("show")) {
    if (
      !menuElements.contains(el.target) &&
      !menuElementsBtn.contains(el.target)
    ) {
      closeMenuElements();
      closeBlack();
    }
  }

  if (linksMoreZekr.classList.contains("active")) {
    if (
      !theHead.contains(el.target) &&
      !downBtn.contains(el.target) &&
      !upBtn.contains(el.target)
    ) {
      downBtn.classList.remove("deactive");
      linksMoreZekr.classList.remove("active");
      upBtn.classList.remove("active");
    }
  }
});

// Close If Scroll
window.addEventListener("scroll", () => {
  if (window.scrollY >= 400) {
    if (menuElements.classList.contains("show")) {
      closeMenuElements();
      closeBlack();
    }
  }

  if (window.scrollY >= 500) {
    if (infoElements.classList.contains("show")) {
      closeInfoMenu();
      closeBlack();
    }
  }
});

// ------------------------------------

// --------------------- Alert
let getLink = document.querySelector(".getLink");
let alertMsg = document.querySelector(".alert");

getLink.addEventListener("click", (e) => {
  e.preventDefault();
  let siteLink = window.location.href;

  navigator.clipboard.writeText(siteLink); // Copy Site Link

  alertMsg.classList.remove("close");
  setTimeout(() => {
    alertMsg.classList.add("close");
  }, 5000);
});
// --------------------- Alert

downBtn.addEventListener("click", () => {
  downBtn.classList.add("deactive");
  linksMoreZekr.classList.add("active");
  upBtn.classList.add("active");
});

upBtn.addEventListener("click", () => {
  downBtn.classList.remove("deactive");
  linksMoreZekr.classList.remove("active");
  upBtn.classList.remove("active");
});

// ----------------------------------------------------
