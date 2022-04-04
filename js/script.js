let currentElement = document.getElementsByName("position0-1")[0];  //Variable to keep the track of the current focused element.
let inputCollection = document.getElementsByClassName("letterInput");
for (let input of inputCollection){
    input.addEventListener("keydown", checkPressedKey);
    if (input.getAttribute("name") == "position0-1"){
        input.disabled = false;
    } else {
        input.disabled = true;
    }
}
function checkPressedKey(e){
    let input = e.path[0];
    let position = input.name[8];
    let line = input.name[10];
    let previousElementSameLine = document.getElementsByName("position" + String(Number(position) - 1) + "-" + line)[0];
    let previousElementPreviousLine = document.getElementsByName("position4-" + String(Number(line) - 1))[0];
    if (e.keyCode == 8){        //Backspace.
        /*console.log("backspace pressed");
        console.log(input);
        console.log(previousElementSameLine);*/
        if (input.value == ""){
            if (input.name == "position0-1"){
                e.preventDefault()
            } else if (position != "0"){
                input.disabled = true;
                previousElementSameLine.disabled = false;
                previousElementSameLine.focus();
                previousElementSameLine.value = "";
                previousElementSameLine.classList.remove("black");
                previousElementSameLine.classList.remove("yellow");
                previousElementSameLine.classList.remove("green");
                currentElement = previousElementSameLine;
                matchColorsInBoxsAndButtons();
                sendAnswer();
            } else if (position == "0" && line != "1"){
                input.disabled = true;
                previousElementPreviousLine.disabled = false;
                previousElementPreviousLine.focus();
                previousElementPreviousLine.value = "";
                previousElementPreviousLine.classList.remove("black");
                previousElementPreviousLine.classList.remove("yellow");
                previousElementPreviousLine.classList.remove("green");
                currentElement = previousElementPreviousLine;
                matchColorsInBoxsAndButtons();
                sendAnswer();
            }
        } else if (input.value != ""){
            input.value = "";
            input.classList.remove("black");
            input.classList.remove("yellow");
            input.classList.remove("green");
            matchColorsInBoxsAndButtons();
            sendAnswer();
        }
    } else if (e.keyCode >= 65 && e.keyCode <= 90 || e.keyCode == 192){     //Letters from "a" to "z" (lowercase and uppercase).
        let relatedKeyboardButton = document.getElementById("keyboard_" + e.key.toUpperCase());
        if (input.name != "position4-6"){
            input.value = e.key;
            keepPreviousColor(input, relatedKeyboardButton);
            matchColorsInBoxsAndButtons();
            sendAnswer();
        } else if (input.name == "position4-6" && input.value == ""){
            input.value = e.key;
            keepPreviousColor(input, relatedKeyboardButton);
            matchColorsInBoxsAndButtons();
            sendAnswer();
        } else if (input.name == "position4-6" && input.value != ""){
            e.preventDefault();
        }
        changeToNextElement(e);
    } else if (e.keyCode >= 112 && e.keyCode <= 123){       //From F1 to F12.
        return true
    } else if (e.keyCode == 13){        //Enter.
        return true
    } else {
        e.preventDefault();
    }
}
function keepPreviousColor(input, key){
    if (input.classList.contains("black") || input.classList.contains("black") == false && input.classList.contains("yellow") == false && input.classList.contains("green") == false){
        input.classList.add("black");
        key.classList.add("black");
        key.classList.remove("yellow");
        key.classList.remove("green");
        key.classList.remove("unpressedKey");
    } else if (input.classList.contains("yellow")){
        input.classList.remove("black");
        input.classList.remove("green");
        key.classList.add("yellow");
        key.classList.remove("black");
        key.classList.remove("green");
        key.classList.remove("unpressedKey");
    } else if (input.classList.contains("green")){
        input.classList.remove("black");
        input.classList.remove("yellow");
        key.classList.add("green");
        key.classList.remove("black");
        key.classList.remove("yellow");
        key.classList.remove("unpressedKey");
    }
}
let keys = document.getElementsByClassName("keyButton");
for (let key of keys){
    key.addEventListener("click", keyboardButtons);
}
function keyboardButtons(e){
    switch (this.id){
        case "keyboard_Q":
            currentElement.value = "Q";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_W":
            currentElement.value = "W";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_E":
            currentElement.value = "E";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_R":
            currentElement.value = "R";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_T":
            currentElement.value = "T";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_Y":
            currentElement.value = "Y";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_U":
            currentElement.value = "U";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_I":
            currentElement.value = "I";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_O":
            currentElement.value = "O";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_P":
            currentElement.value = "P";
            currentElement.classList.add("black");       
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_A":
            currentElement.value = "A";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_S":
            currentElement.value = "S";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_D":
            currentElement.value = "D";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_F":
            currentElement.value = "F";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_G":
            currentElement.value = "G";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_H":
            currentElement.value = "H";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_J":
            currentElement.value = "J";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_K":
            currentElement.value = "K";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_L":
            currentElement.value = "L";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_Ñ":
            currentElement.value = "Ñ";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboardEnter":
            console.log("you pressed enter");
            break;
        case "keyboard_Z":
            currentElement.value = "Z";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_X":
            currentElement.value = "X";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_C":
            currentElement.value = "C";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_V":
            currentElement.value = "V";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_B":
            currentElement.value = "B";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_N":
            currentElement.value = "N";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboard_M":
            currentElement.value = "M";
            currentElement.classList.add("black");
            changeToNextElement(e);
            colorizeKeys(this);
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
        case "keyboardBackspace":
            if (currentElement.value == ""){
                changeToPreviousElement();
                currentElement.value = "";
                currentElement.classList.remove("black");
                currentElement.classList.remove("yellow");
                currentElement.classList.remove("green");
            } else if (currentElement.value != ""){
                currentElement.value = "";
                currentElement.classList.remove("black");
                currentElement.classList.remove("yellow");
                currentElement.classList.remove("green");
            }
            matchColorsInBoxsAndButtons();
            sendAnswer();
            break;
    }
}
function changeToNextElement(evt){
    for (let i = 0; i < inputCollection.length; i++){
        if (inputCollection[i].name == currentElement.name){
            if (i == inputCollection.length - 1){
                currentElement = currentElement;
                evt.preventDefault();
                return currentElement;
            } else {
                currentElement.disabled = true;
                currentElement = inputCollection[i + 1];
                currentElement.disabled = false;
                currentElement.focus();
                evt.preventDefault();
                return currentElement;
            }
        }
    }
}
function changeToPreviousElement(){
    for (let i = 0; i < inputCollection.length; i++){
        if (inputCollection[i].name == currentElement.name){
            if (i == 0){
                return currentElement = currentElement;
            } else {
                return currentElement = inputCollection[i - 1];
            }
        }
    }
}
function colorizeKeys(key){
    key.classList.remove("unpressedKey");
    if (key.classList.contains("yellow")){
        return true
    } else if (key.classList.contains("green")){
        return true
    } else if (key.classList.contains("yellow") == false || key.classList.contains("green") == false){
        key.classList.add("black");
    }
}
function matchColorsInBoxsAndButtons(){
    let greenLetters = [],
        yellowLetters = [],
        blackLetters= [];
    for (let input of inputCollection){
        if (input.classList.contains("green") && input.value != ""){
            greenLetters.push(input.value.toUpperCase());
        } else if (input.classList.contains("yellow") && input.value != ""){
            yellowLetters.push(input.value.toUpperCase());
        } else if (input.classList.contains("black") && input.value != ""){
            blackLetters.push(input.value.toUpperCase());
        }
    }
    for (let key of keys){
        key.classList.remove("black");
        key.classList.remove("yellow");
        key.classList.remove("green");
        key.classList.remove("unpressedKey");
    }
    for (let gLetter of greenLetters){
        let button = document.getElementById("keyboard_" + gLetter);
        button.classList.add("green");
    }
    for (let yLetter of yellowLetters){
        let button = document.getElementById("keyboard_" + yLetter);
        if (button.classList.contains("green") == false){
            button.classList.add("yellow");
        }
    }
    for (let bLetter of blackLetters){
        let button = document.getElementById("keyboard_" + bLetter);
        if (button.classList.contains("green") == false && button.classList.contains("yellow") == false){
            button.classList.add("black");
        }
    }
    for (let key of keys){
        if (key.classList.contains("green") == false && key.classList.contains("yellow") == false && key.classList.contains("black") == false){
            key.classList.add("unpressedKey");
        }
    }
}
let inputContainers = document.getElementsByClassName("letterInputContainer");
for (let container of inputContainers){
    container.addEventListener("click", changeColor);
}
function changeColor(){
    let contained = this.firstElementChild;
    if (contained.classList.contains("black") == false && contained.classList.contains("yellow") == false && contained.classList.contains("green") == false){
        contained.classList.add("black");
    } else if (contained.classList.contains("black")){
        contained.classList.add("yellow");
        contained.classList.remove("black");
    } else if (contained.classList.contains("yellow")){
        contained.classList.add("green");
        contained.classList.remove("yellow");
    } else if (contained.classList.contains("green")){
        contained.classList.add("black");
        contained.classList.remove("green");
    }
    matchColorsInBoxsAndButtons();
    sendAnswer();
}
let answer1 = [],
    answer2 = [],
    answer3 = [],
    answer4 = [],
    answer5 = [],
    answer6 = [],
    blackLettersArr = [],
    yellowLettersArr = [],
    greenLettersArr = [];
function sendAnswer(){
    let ans1 = [],
        ans2 = [],
        ans3 = [],
        ans4 = [],
        ans5 = [],
        ans6 = [];
    blackLettersArr = [];
    yellowLettersArr = [];
    greenLettersArr = [];
    for (let i = 0; i < inputCollection.length; i++){
        if (i >= 0 && i < 5){
            if (inputCollection[i].value == ""){
                answer1 = [];
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black") == false && inputCollection[i].classList.contains("yellow") == false && inputCollection[i].classList.contains("green") == false){
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"black"};
                ans1.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("yellow")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"yellow"};
                ans1.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("green")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"green"};
                ans1.push(letterObject);
            }
        } else if (i >= 5 && i < 10) {
            if (inputCollection[i].value == ""){
                answer2 = [];
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black") == false && inputCollection[i].classList.contains("yellow") == false && inputCollection[i].classList.contains("green") == false){
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"black"};
                ans2.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("yellow")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"yellow"};
                ans2.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("green")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"green"};
                ans2.push(letterObject);
            }
        } else if (i >= 10 && i < 15) {
            if (inputCollection[i].value == ""){
                answer3 = [];
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black") == false && inputCollection[i].classList.contains("yellow") == false && inputCollection[i].classList.contains("green") == false){
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"black"};
                ans3.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("yellow")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"yellow"};
                ans3.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("green")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"green"};
                ans3.push(letterObject);
            }
        } else if (i >= 15 && i < 20) {
            if (inputCollection[i].value == ""){
                answer4 = [];
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black") == false && inputCollection[i].classList.contains("yellow") == false && inputCollection[i].classList.contains("green") == false){
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"black"};
                ans4.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("yellow")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"yellow"};
                ans4.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("green")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"green"};
                ans4.push(letterObject);
            }
        } else if (i >= 20 && i < 25) {
            if (inputCollection[i].value == ""){
                answer5 = [];
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black") == false && inputCollection[i].classList.contains("yellow") == false && inputCollection[i].classList.contains("green") == false){
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"black"};
                ans5.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("yellow")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"yellow"};
                ans5.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("green")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"green"};
                ans5.push(letterObject);
            }
        } else if (i >= 25 && i < 30) {
            if (inputCollection[i].value == ""){
                answer6 = [];
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black") == false && inputCollection[i].classList.contains("yellow") == false && inputCollection[i].classList.contains("green") == false){
                break
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("black")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"black"};
                ans6.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("yellow")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"yellow"};
                ans6.push(letterObject);
            } else if (inputCollection[i].value != "" && inputCollection[i].classList.contains("green")){
                let letterObject = {letter:inputCollection[i].value.toUpperCase(), position:Number(inputCollection[i].name[8]), color:"green"};
                ans6.push(letterObject);
            }
        }
    }
    if (ans1.length == 5){
        answer1 = ans1;
    }
    if (ans2.length == 5){
        answer2 = ans2;
    }
    if (ans3.length == 5){
        answer3 = ans3;
    }
    if (ans4.length == 5){
        answer4 = ans4;
    }
    if (ans5.length == 5){
        answer5 = ans5;
    }
    if (ans6.length == 5){
        answer6 = ans6;
    }
    separateInColors();
}
function separateInColors(){
    let allAnswers = [answer1, answer2, answer3, answer4, answer5, answer6];
    for (let i = 0; i < allAnswers.length; i++){
        for (let j = 0; j < allAnswers[i].length; j++ ){
            if (allAnswers[i][j].color == "black"){
                blackLettersArr.push(allAnswers[i][j]);
            } else if (allAnswers[i][j].color == "yellow"){
                yellowLettersArr.push(allAnswers[i][j]);
            } else if (allAnswers[i][j].color == "green"){
                greenLettersArr.push(allAnswers[i][j]);
            }
        }
        let deleteableBlackLetters = [];
        for (let blackLetter of blackLettersArr){
            for (let yellowLetter of yellowLettersArr){
                if (blackLetter.letter == yellowLetter.letter){
                    deleteableBlackLetters.push(blackLetter);
                }
            }
            for (let greenLetter of greenLettersArr){
                if (blackLetter.letter == greenLetter.letter){
                    deleteableBlackLetters.push(blackLetter);
                }
            }

        }
        deleteableBlackLetters = deleteableBlackLetters.filter((value, index, arr) => arr.findIndex(t => t.letter === value.letter && t.position === value.position) === index);
        for (let blackLetter of blackLettersArr){
            for (deleteableLetter of deleteableBlackLetters){
                if (blackLetter.letter == deleteableLetter.letter && blackLetter.position == deleteableLetter.position){
                    blackLettersArr.splice(blackLettersArr.indexOf(blackLetter), 1);
                }
            }
        }
        blackLettersArr.sort(function compare(a, b){
            if (a.position < b.position){
                return -1;
            }else if (a.position > b.position){
                return 1;
            } else {
                return 0;
            }
        });
        yellowLettersArr.sort(function compare(a, b){
            if (a.position < b.position){
                return -1;
            }else if (a.position > b.position){
                return 1;
            } else {
                return 0;
            }
        });
        greenLettersArr.sort(function compare(a, b){
            if (a.position < b.position){
                return -1;
            }else if (a.position > b.position){
                return 1;
            } else {
                return 0;
            }
        });
    }
    /*console.log("blackLettersArr: ");
    console.log(blackLettersArr);
    console.log("yellowLettersArr: ");
    console.log(yellowLettersArr);
    console.log("greenLettersArr: ");
    console.log(greenLettersArr);*/
    let possibleAnswers = filterByColor(wordsArray);
    possibleAnswers = possibleAnswers.join(" ");
    let section3 = document.getElementById("section3");
    let section3Answers = document.getElementById("section3").childNodes[3];
    section3Answers.innerHTML = possibleAnswers;
    if (section3Answers.innerHTML.length > 0){
        section3.style.display = "block";
    }
}