const dayInput = document.getElementById("dayInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");

const dayOutput = document.getElementById("dayOutput");
const monthOutput = document.getElementById("monthOutput");
const yearOutput = document.getElementById("yearOutput");

const errorDay = document.querySelector(".errorDay");
const errorMonth = document.querySelector(".errorMonth");
const errorYear = document.querySelector(".errorYear");

const submitBtn = document.querySelector(".submit");

let now = new Date();

let isValid = false;

dayInput.addEventListener("input", (e) => {
  let day = +dayInput.value
  if (day < 1 || day > 31) {
    errorDay.textContent = "Must be a valid date";
    document.getElementById("dayInput").classList.add("border-primaryR")
    document.querySelector(".labelDay").classList.add("text-primaryR")
    return
  } else {
    isValid = true;
    document.querySelector(".labelDay").classList.remove("text-primaryR")
    document.getElementById("dayInput").classList.remove("border-primaryR")
    errorDay.textContent = ""
  }
})

monthInput.addEventListener("input", (e) => {
  let month = +monthInput.value
  if (month < 1 || month > 12) {
    errorMonth.textContent = "Must be a valid date";
    document.getElementById("monthInput").classList.add("border-primaryR")
    document.querySelector(".labelMonth").classList.add("text-primaryR")
    return
  } else {
    isValid = true;
    document.querySelector(".labelMonth").classList.remove("text-primaryR")
    document.getElementById("monthInput").classList.remove("border-primaryR")
    errorMonth.textContent = ""
  }
})

yearInput.addEventListener("input", (e) => {
  let year = +yearInput.value
  if (year < 1900 || year > now.getFullYear()) {
    errorYear.textContent = "Must be a valid date";
    document.getElementById("yearInput").classList.add("border-primaryR")
    document.querySelector(".labelYear").classList.add("text-primaryR")
    return
  } else {
    isValid = true;
    document.querySelector(".labelYear").classList.remove("text-primaryR")
    document.getElementById("yearInput").classList.remove("border-primaryR")
    errorYear.textContent = ""
  }
})


submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (isValid) {
    let day = +dayInput.value
    let month = +monthInput.value
    let year = +yearInput.value
  
    let inputDate = new Date(year, month - 1, day);
  
    let difference = new Date(now.getTime() - inputDate.getTime())
  
    let differenceYears = difference.getFullYear() - 1970;
    let differenceMonths = difference.getMonth();
    let differenceDays = difference.getDate();
  
    yearOutput.innerHTML = differenceYears;
    monthOutput.innerHTML = differenceMonths;
    dayOutput.innerHTML = differenceDays;
  }
})
