function isNumber(number) {
    return number >= '0' && number <= '9';
}

function isDot(dot) {
    return dot === '.'
}

function isOnlyAlpha(input) {
    for (i = 0; i < input.length; i++) {
        if (!((input[i] >= 'a' && input[i] <= 'z') || (input[i] >= 'A' && input[i] <= 'Z')))
            return false
    }
    return true;
}

function isEmpty(field) {
    return !field.length > 0 /* return true if the input is empty */
}

function verifyMovie(movie) {
    if (isEmpty(movie))
        alert("Movie field is empty!")
    return !(isEmpty(movie))

}

function verifyIfDate(date) {
    if (isEmpty(date))
        return false
    if (isNumber(date[0]) && isNumber(date[1]) && isNumber(date[3]) && isNumber(date[4]) && isNumber(date[6]) && isNumber(date[7]) && isNumber(date[8]) && isNumber(date[9]) && isDot(date[2]) && isDot(date[5]))
        return true;
    else {
        alert("Date is empty or isn not in this format: DD/MM/YYYY ")
        return false;
    }
}

function verifyRating(rating) {
    if (isEmpty(rating)) {
        alert("Rating field is empty!")
        return false
    }
    if (isNumber(rating[0]) && isDot(rating[1]) && isNumber(rating[2]) && rating.length == 3)
        return true
    else {
        alert("Rating is not in this format: x.y")
        return false
    }
}

function verifyGenre(genre) {
    if (isEmpty(genre)) {
        alert("Genre field is empty!")
        return false
    }
    if (isOnlyAlpha(genre))
        return true
    else {
        alert("Genre field can only contain alphabetic caracters!")
        return false
    }
}

function verifyForm(movieName, airingDate, genre, rating) {
    return verifyMovie(movieName) && verifyIfDate(airingDate) && verifyGenre(genre) && verifyRating(rating)
}

var tableWasRefreshed = false;
var movieList = [];
var localWasInsertedAlready = false;

function deleteRowInTable(event,id)
{
    event.preventDefault();
    table = document.getElementById('movieTable');
    table.deleteRow(id);
}

function addRow(movieName, airingDate, genre, rating, dvd) {
    if (dvd == true)
        dvdValue = "Yes"
    else
        dvdValue = "No"
    var row = document.getElementById('movieTable').insertRow(-1)
    idValue = document.getElementById('movieTable').rows.length-1;
    row.id = idValue;

    var deleteButton = document.createElement('input');
    deleteButton.type = "button";
    deleteButton.className = "deleteButton";
    deleteButton.value = "Delete";
    deleteButton.id = idValue;
    deleteButton.onclick = "deleteRow(event,idValue)";
    
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
        refreshTable()
    }
}

function refreshTable() {   // 1. se sterge tabelul. 2. Se recreaza tabelul, bazat pe datele din movieList (cu for)
    deleteTable();
    for (var i = 0; i < movieList.length; i++)
        addRow(movieList[i].prop1, movieList[i].prop2, movieList[i].prop3, movieList[i].prop4, movieList[i].prop5)
}

function insertMovie(movieName, airingDate, genre, rating, dvd) {   /// insertMovie -> adaugare+refresh
    var newMovie = {
        prop1: movieName, prop2: airingDate, prop3: genre, prop4: rating, prop5: dvd
    };
    movieList.push(newMovie);
    refreshTable();
    var movieListJSON = JSON.stringify(movieList);
    if (localStorage.length > 0) {
        localStoredMovies = localStorage.getItem(0)
        localStorage.setItem(0, movieListJSON);
    }
}

function addRowFromList(movieName, airingDate, genre, rating, dvd) {
    var newMovie = {
        prop1: movieName, prop2: airingDate, prop3: genre, prop4: rating, prop5: dvd
    };
    movieList.push(newMovie)
    addRow(newMovie.prop1, newMovie.prop2, newMovie.prop3, newMovie.prop4, newMovie.prop5)
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
    }
}

window.onload = insertLocalStorage;
