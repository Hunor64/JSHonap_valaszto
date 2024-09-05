"use strict";
let mothLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let selectedMonth = 0

function GenerateMothTables() {
    let mainDiv = document.querySelector(".days")
    mainDiv.innerHTML = ""
  if (document.querySelector(".month").value != "") {
    selectedMonth = document.querySelector(".month").value
    let length = mothLength[selectedMonth]
    for (let index = 1; index < length; index++) {
        let row = document.createElement("div")
        let dayNumber = document.createElement("div")
        dayNumber.innerHTML = index

        let inputField = document.createElement("input")

        row.appendChild(dayNumber)
        row.appendChild(inputField)
        mainDiv.appendChild(row)
    }
  }
}
