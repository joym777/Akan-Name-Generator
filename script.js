//Array of akan names
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
//Stop page refresh while form submits
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    // Input values
    let name = document.querySelector("#username").value;
    let day = parseInt(document.querySelector("#day").value);
    let month = parseInt(document.querySelector("#month").value);
    let year = parseInt(document.querySelector("#year").value);
    let gender = document.querySelector("#user-gender").value;
    // adjusted months (Jan, Feb as 13, 14 of previous year)
    if(month < 3) {
        month += 12;
        year -= 1;
    }
    //Split year into cc and yy
    let cc = Math.floor(year / 100);
    let yy = year % 100;
    let mm = month;
    let dd = day;
    //Formula for the day of the week
    let d = ((cc / 4 - 2 * cc - 1) + ((5 * yy) / 4) + ((26 * (mm + 1)) / 10) + dd) % 7;
    //Ensure positive and day to range 0–6
    let dayOfWeek = Math.floor((d + 7) % 7);
    
    //Akan name selection
    let akanName = "";
    if (gender === "Male") {
        akanName = maleNames[dayOfWeek];
    } else if (gender === "Female") {
        akanName = femaleNames[dayOfWeek];
    }
    // result
    let result = document.getElementById("result");
    if (!result) {
        result = document.createElement("h2");
        result.id = "result";
        document.querySelector(".RHS").appendChild(result);
    }
    result.textContent = `${name}, your Akan name is ${akanName}!`; //result dispay
});

