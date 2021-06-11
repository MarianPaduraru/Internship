function isNumber(number) {
    return number >= '0' && number <= '9';
}

function isDot(dot) {
    return dot === '.';
}

function isOnlyAlpha(input) {
    for (i = 0; i < input.length; i++) {
        if (!((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 'A' && input[i] <= 'Z')))
            return false;
    }
    return true;
}

function isEmpty(field) {
    return !field.length > 0; // return true if the input is empty 
}

function verifyMovie(movie) {
    if (isEmpty(movie))
        alert("Movie field is empty!");
    return !(isEmpty(movie));

}

function verifyIfDate(date) {
    if (isEmpty(date))
        return false;
    if (isNumber(date[0]) && isNumber(date[1]) && isNumber(date[3]) && isNumber(date[4]) && isNumber(date[6]) && isNumber(date[7]) && isNumber(date[8]) && isNumber(date[9]) && isDot(date[2]) && isDot(date[5]))
        return true;
    else {
        alert("Date is empty or isn not in this format: DD/MM/YYYY ");
        return false;
    }
}

function verifyRating(rating) {
    if (isEmpty(rating)) {
        alert("Rating field is empty!");
        return false;
    }
    if (isNumber(rating[0]) && isDot(rating[1]) && isNumber(rating[2]) && rating.length == 3)
        return true;
    else {
        alert("Rating is not in this format: x.y");
        return false;
    }
}

function verifyGenre(genre) {
    if (isEmpty(genre)) {
        alert("Genre field is empty!");
        return false;
    }
    if (isOnlyAlpha(genre))
        return true;
    else {
        alert("Genre field can only contain alphabetic caracters!");
        return false
    }
}

function verifyForm(movieName, airingDate, genre, rating) {
    return verifyMovie(movieName) && verifyIfDate(airingDate) && verifyGenre(genre) && verifyRating(rating);
}

var tableWasRefreshed = false;
var movieList = [];
var localWasInsertedAlready = false;

function deleteRowInTable(id) { // Removes from the list and from the page the row with the specified id
    movieList.splice(id, 1);
    localStorage.setItem(0, JSON.stringify(movieList)); // Replaces the local storage with the modified list
    refreshTable();
}

function checkIfRowsWereSorted(event){
    var allTableHeaders = document.querySelectorAll("#movieTable th");
    for(var i = 0; i< allTableHeaders.length; i++){ 
        if ((i==0 || i == 2 || i == 4) && (allTableHeaders[i].classList.contains("ascending") || allTableHeaders[i].classList.contains("descending"))){
            sortAlphabetically(event)
            console.log("name,genre,dvd")
        } 
        if (i==1 && (allTableHeaders[i].classList.contains("ascending") || allTableHeaders[i].classList.contains("descending"))){
            sortRowsByDateAired(event);
            console.log("date")
        } 
        if (i==3 && (allTableHeaders[i].classList.contains("ascending") || allTableHeaders[i].classList.contains("descending"))){
            sortRowsByRating(event);
            console.log("rating")
        } 
    }
}

function compareAlphabetically(a,b){
    var allTableHeaders = document.querySelectorAll("#movieTable th");
    var nameA;
    var nameB;      
    for(var i = 0; i< allTableHeaders.length; i++){
        if (i==0 && (allTableHeaders[i].classList.contains("ascending") || allTableHeaders[i].classList.contains("descending"))) {
                 nameA = a.prop1.toLowerCase();
                 nameB = b.prop1.toLowerCase();
            }
        if (i==2 && (allTableHeaders[i].classList.contains("ascending") || allTableHeaders[i].classList.contains("descending"))) {
             nameA = a.prop3.toLowerCase();
             nameB = b.prop3.toLowerCase();
            }
        
        if (i==4 && (allTableHeaders[i].classList.contains("ascending") || allTableHeaders[i].classList.contains("descending"))) {
            nameA = a.prop5
            nameB = b.prop5
       }
    }
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0;
}

function compareDates(date1, date2) {
    date1 = date1.prop2;
    date2 = date2.prop2;
  
    year1  = Number(date1.slice(6, 10)); //index 6->10
    year2  = Number(date2.slice(6, 10));
    month1 = Number(date1.slice(3, 5)); //index 3->5
    month2 = Number(date2.slice(3, 5));
    day1   = Number(date1.slice(0, 2)); //index 0->2
    day2   = Number(date2.slice(0, 2));

    if (year1 < year2) {
        return -1;
    }
    if (year1 > year2) {
        return 1;
    }
    if (year1 == year2) {
        if (month1 < month2) {
            return -1;
        }
        if (month1 > month2) {
            return 1;
        }
        if (month1 == month2) {
            if (day1 < day2) {
                return -1;
            }
            if (day1 > day2) {
                return 1;
            }
            if (day1 == day2) {
                return 0;
            }
        }
    }
}

function sortRowsByDateAired(event) {
    var clickedHeaderElement = event.target;
    updateArrows(clickedHeaderElement);
    if(clickedHeaderElement.classList.contains("ascending")){
        movieList.sort(compareDates);   
    }
    else{
        movieList.sort(compareDates).reverse();
    }
    refreshTable();
}

function sortAlphabetically(event) {
    var clickedHeaderElement = event.target;
    updateArrows(clickedHeaderElement);
    if(clickedHeaderElement.classList.contains("ascending")){
        movieList.sort(compareAlphabetically);   
    }
    else{
        movieList.sort(compareAlphabetically).reverse();
    }
    refreshTable();
}

function compareStringNumbers(Number1, Number2) {
    Number1 = Number(Number1.prop4);
    Number2 = Number(Number2.prop4);    
    if (Number1 > Number2) {
        return -1;
    }
    if (Number2 < Number1) {
        return 1;
    }
    return 0;
}

function updateArrows(clickedHeader){
    var allTableHeaders =  document.querySelectorAll("#movieTable th");
    for(var i = 0; i < allTableHeaders.length; i ++){
        if (allTableHeaders[i] !== clickedHeader) {
            allTableHeaders[i].classList.remove("ascending");  
            allTableHeaders[i].classList.remove("descending");  
        }
    }
    if (clickedHeader.classList.length == 0 || clickedHeader.classList.contains("ascending")){
        clickedHeader.classList.remove("ascending")
        clickedHeader.classList.add("descending");
    }
    else{
        clickedHeader.classList.remove("descending")
        clickedHeader.classList.add("ascending");
    }
}

function sortRowsByRating(event) {
    var clickedHeaderElement = event.target;
    updateArrows(clickedHeaderElement);
    if(clickedHeaderElement.classList.contains("ascending")){
        movieList.sort(compareStringNumbers);   
    }
    else{
        movieList.sort(compareStringNumbers).reverse();
    }
    refreshTable();
}

function sortRowsByDVD(event) {
    var clickedHeaderElement = event.target;
    updateArrows(clickedHeaderElement);
    if(clickedHeaderElement.classList.contains("ascending")){
        movieList.sort(compareAlphabetically);   
    }
    else{
        movieList.sort(compareAlphabetically).reverse();
    }
    refreshTable();
}

function addRow(movieName, airingDate, genre, rating, dvd) {
    if (dvd == true)
        dvdValue = "Yes";
    else
        dvdValue = "No";
    var row = document.getElementById('movieTable').insertRow(-1);
    var idValue = document.getElementById('movieTable').rows.length -2;

    var deleteButton = document.createElement('input');
    deleteButton.onclick = (function (idValue) { return function () { deleteRowInTable(idValue); } })(idValue);
    deleteButton.type = "button";
    deleteButton.value = "Delete";

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = movieName;
    cell2.innerHTML = airingDate;
    cell3.innerHTML = genre;
    cell4.innerHTML = rating;
    cell5.innerHTML = dvdValue;
    cell6.appendChild(deleteButton);
}

function deleteTable() {
    var table = document.getElementById('movieTable');
    while (table.rows.length != 1)
        table.deleteRow(1);
}

function insertLocalStorage() {
    if (localStorage.length != 0) {
        movieList = JSON.parse(localStorage.getItem(0));
    }
    refreshTable();
}

function refreshTable() {   // 1. se sterge tabelul. 2. Se recreaza tabelul, bazat pe datele din movieList
    deleteTable();
    for (var i = 0; i < movieList.length; i++)
        addRow(movieList[i].prop1, movieList[i].prop2, movieList[i].prop3, movieList[i].prop4, movieList[i].prop5, movieList.id);
}

function insertMovie(movieName, airingDate, genre, rating, dvd) {   /// insertMovie -> adaugare+refresh ->adauga in lista
    var newMovie = {
        prop1: movieName, prop2: airingDate, prop3: genre, prop4: rating, prop5: dvd,
    };
    movieList.push(newMovie);
    refreshTable();
    var movieListJSON = JSON.stringify(movieList);
    localStorage.setItem(0, movieListJSON); /// Updates local storage
}

function myFunction(event) {
    event.preventDefault();
    var movieName = document.getElementById('movieName').value;
    var airingDate = document.getElementById('movieAiringDate').value;
    var genre = document.getElementById('movieGenre').value;
    var rating = document.getElementById('movieRating').value;
    var dvd = document.getElementById('movieDVD').checked;

    if (verifyForm(movieName, airingDate, genre, rating)) {
        insertLocalStorage();
        insertMovie(movieName, airingDate, genre, rating, dvd);
        checkIfRowsWereSorted(event);
    }
}

window.onload = insertLocalStorage;
