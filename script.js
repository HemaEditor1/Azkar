let switchBtnDay = document.querySelector(".theSwitshBtnDay");
let switchBtnNight = document.querySelector(".theSwitshBtnNight");
let azkarDay = document.querySelector(".Azkar.Day");
let azkarNight = document.querySelector(".Azkar.Night");

let theSpn = document.querySelectorAll("span")[0]; // first Num
let theBtn = document.querySelectorAll("button")[2]; // secnd Num

let timeNow = new Date();
let dayTime = new Date()
dayTime.setHours(5, 0, 0, 0)

let nightTime = new Date()
nightTime.setHours(14, 0, 0, 0)

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
  }

  allButtonsArr[i].addEventListener("click", function () {
    if (myReadNum < myFullNum) {
      myReadNum++;
      allSpans[i].innerText = myReadNum; // تحديث رقم القراءة داخل span

      // Add Date Value To Local Storage
      // window.localStorage.setItem("Date", timeNow.getDate());
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
  }

  allButtonsArr[n].addEventListener("click", function () {
    if (myReadNum < myFullNum) {
      myReadNum++;
      allSpans[n].innerText = myReadNum; // تحديث رقم القراءة داخل span

      // Add Date Value To Local Storage
      // window.localStorage.setItem("Date", timeNow.getDate());
    }

    if (myReadNum === myFullNum) {
      allButtonsArr[n].disabled = true;
      allButtonsArr[n].classList.add("deactive");

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



// -------------------------------------------------------------------- Day & Night Btn

// Day Button
switchBtnDay.onclick = function () {
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

  // window.localStorage.setItem("Date", timeNow.getDate());
  // console.log(Number(window.localStorage.getItem("Date")));
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

  // window.localStorage.setItem("Date", timeNow.getDate());
  // console.log(Number(window.localStorage.getItem("Date")));
};

// -------------------------------------------------------------------- Day & Night Btn

// Onload Window Default (Azkar Day) After Fajr Time
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

  // Reset Values
  if (window.localStorage.getItem("Date")) {
    if (Number(window.localStorage.getItem("Date")) !== timeNow.getDate()) {
      for (r = 0; r < allButtonsArr.length; r++) {
        window.localStorage.removeItem(`Read Zekr ${r + 1}`);
      }
      window.localStorage.removeItem("Azkar Day");
      window.localStorage.removeItem("Azkar Night");

      // To Set Default Values of Azkar Read
      if (window.localStorage.getItem("Page Is Ready")) {
        console.log("Page Is Ready");
      } else {
        location.reload();
        window.localStorage.setItem("Page Is Ready", "Done");
      }

      setTimeout(() => {
        window.localStorage.removeItem("Page Is Ready");

        // Add Date Value To Local Storage
        window.localStorage.setItem("Date", timeNow.getDate());
      }, 1000);
    } else {
      console.log("Same Date");
    }
  } else {
    // Add Date Value To Local Storage For The First Time
    window.localStorage.setItem("Date", timeNow.getDate());
  }


  // Set TimeZone of Azkar
  if (timeNow.getHours() <= dayTime.getHours || timeNow.getHours() >= nightTime.getHours()) {
    window.localStorage.removeItem("Azkar Day")
    window.localStorage.setItem("Azkar Night", "اذكار المساء")

    if (window.localStorage.getItem("Azkar Is Ready")) {
      console.log("Azkar Night Time")
    } else {
      location.reload()
      window.localStorage.setItem("Azkar Is Ready", "Done")
    }
    setTimeout(() => {
      window.localStorage.removeItem("Azkar Is Ready")
    }, 500);
  } else if (timeNow.getHours() > dayTime.getHours() && timeNow.getHours() < nightTime.getHours()) {
    window.localStorage.removeItem("Azkar Night")
    window.localStorage.setItem("Azkar Day", "اذكار الصباح")
    
    if (window.localStorage.getItem("Azkar Is Ready")) {
      console.log("Azkar Day Time")
    } else {
      location.reload()
      window.localStorage.setItem("Azkar Is Ready", "Done")
    }
    setTimeout(() => {
      window.localStorage.removeItem("Azkar Is Ready")
    }, 500);
  }
};

// ----------------------------------------------------------

// Write Year On Footer
let myFooter = document.querySelector(".footer");
let yearParagraph = document.createElement("h3");

yearParagraph.textContent = `Copyright © ${new Date().getFullYear()}`;
myFooter.appendChild(yearParagraph);

// ----------------------------------------------------------
