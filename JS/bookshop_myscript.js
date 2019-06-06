var url = "https://api.myjson.com/bins/udbm5";
var allBooks = [];

window.onload = function () {
    fetch(url, {
            method: "GET",


        })
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            allBooks = data.books;
            getBooks(allBooks);
            console.log(allBooks)
            //            searchBox(allBooks);

//            let elements = document.querySelectorAll('span.bookTitle');
//            document.getElementById('myInput').addEventListener('input', () => {
//                searchBox(elements);
//            });
        callElements() // created funtion outside fetch function.
        })
        .catch(function (error) {
            console.log(error)
        });

}




//var allBooks = data.books; //


function getBooks(allBooks) {
    console.log(allBooks);
    var flipBox = document.getElementById("flipBox");


    for (i = 0; i < allBooks.length; i++) {

        //create flip elements

        var flipContainer = document.createElement("div");
        flipContainer.setAttribute("class", "flipContainer")

        var flipper = document.createElement("div");
        flipper.setAttribute("class", "flipper");

        var front = document.createElement("div");
        front.setAttribute("class", "front");

        var back = document.createElement("div");
        back.setAttribute("class", "back");


        var coverImage = document.createElement("img");
        coverImage.setAttribute("src", allBooks[i].portada);
        coverImage.setAttribute("alt", allBooks[i].titulo);

        //add title

        var title = allBooks[i].titulo;
        var bookTitle = document.createElement("span");
        bookTitle.setAttribute("class", "bookTitle");
        bookTitle.innerHTML = title;
        var titleContainer = document.createElement("div");
        titleContainer.setAttribute("class", "titleContainer");

        //add title to div and then to back
        titleContainer.append(bookTitle);
        back.append(titleContainer);

        // add description

        var bookDescription = allBooks[i].descripcion;
        var text = document.createElement("div");
        text.setAttribute("class", "text");
        text.innerHTML = bookDescription;
        back.append(text);


        // add more-info button . First container for a-tag, then A-tag, then button

        var anchorContainer = document.createElement("div");
        anchorContainer.setAttribute("class", "anchorContainer")
        back.append(anchorContainer);

        var anchor = document.createElement("a");
        anchor.setAttribute("id", "anchor");
        anchor.setAttribute("href", allBooks[i].detalle);
        anchor.setAttribute("data-fancybox", "images");
        anchorContainer.append(anchor);




        var button = document.createElement("button");
        button.setAttribute("class", "button");
        button.setAttribute("id", "backButton")
        button.innerHTML = "More Info";

        anchor.append(button);




        //Add elements

        front.appendChild(coverImage);
        flipper.append(front, back);
        flipContainer.append(flipper) 

        flipBox.append(flipContainer);

    }
}


function callElements () {
     let elements = document.querySelectorAll('span.bookTitle');
            document.getElementById('myInput').addEventListener('input', () => {
                searchBox(elements);
            })
    
}





function searchBox(elements) {
    var input, filter, titleContainer, title, a, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    console.log(filter);
    applyInput(filter, elements);
}

var applyInput = function (filter, elements) {
//    console.log('1')
    let cards = document.getElementsByClassName("flipContainer")
    //    console.log(cards)
    for (var i = 0; i < elements.length; i++) {
//        console.log(2)
        var bookName = elements[i].textContent
        //        console.log(bookName)
        if (bookName.toUpperCase().indexOf(filter) > -1) {
            //            console.log(elements[i])
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        }
    }
}
