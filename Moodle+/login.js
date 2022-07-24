console.log("Moodle+ successfully loaded!");
const login_element = document.querySelector("form[id= 'login']"); // Fill the selector for the login element in ""
let login_text = login_element.innerText.split(" ");

let answer = "";
if (login_text[5] == 'add')
    answer = Number(login_text[6]) + Number(login_text[8]);
else if(login_text[5] == 'subtract')
    answer = Number(login_text[6]) - Number(login_text[8]);
else if(login_text[6] == 'first')
    answer = Number(login_text[8]);
else if(login_text[6] == 'second')
    answer = Number(login_text[10]);


const captcha_input_element = document.querySelector("input[id= 'valuepkg3']"); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;

// Add your username and password to the file, 
// uncomment the below data to directly login into moodle without inputing anything

// const username_element = document.querySelector("input[id= 'username']");
// username_element.value = "";
// 
// const password_element = document.querySelector("input[id= 'password']");
// password_element.value = "";
// 
// const tick_box = document.querySelector("input[type= 'checkbox']");
// let check = tick_box.checked;
// 
// if(check == false)
    // tick_box.click();
// const button_element = document.querySelector("input[id= 'loginbtn']");
// button_element.click();

