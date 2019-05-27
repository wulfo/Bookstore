
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
            getBooks();
        console.log(allBooks);
        


        })
        .catch(function (error) {
            console.log(error)
        });

}




//var allBooks = data.books;


function getBooks () {
    console.log(allBooks);
    var flipBox = document.getElementById("flipBox");
    
    
    for (i=0; i < allBooks.length; i++) {
        
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
        button.innerHTML = "More Info";
        
        anchor.append(button);
    
        
        
        
        //Add elements
        
        front.appendChild(coverImage);
        flipper.append(front, back);
        flipContainer.append(flipper)
        
        flipBox.append(flipContainer);
        
    }
}
getBooks()


//$("[data-fancybox]").fancybox({
//
//});

//function searchBox() {
//    var input = document.getElementById("myInput");
//    var filter = input.value.toUpperCase();
//    console.log(filter);
//    
//    for(i = 0; i < allBooks[i].length; i++) {
//        a = allBooks[i].getElementsByTagName("a")[0];
//        txtValue = a.textContent || a.innerText;
//        console.log(a);
//        
//        if (txtValue.toUpperCase().indexOf(filter) > -1) {
//            allBooks[i].style.display = "";
//        } else {
//            allBooks[i].style.display = "none";
//        }
//    }
//}
//searchBox()


//function searchBox() {
//  // Declare variables
//  var input, filter, ul, li, a, i, txtValue;
//  input = document.getElementById('myInput');
//  filter = input.value.toUpperCase();
//  
//    
//    console.log(filter);
//
//  // Loop through all list items, and hide those who don't match the search query
//  for (i = 0; i < allBooks[i].length; i++) {
//    a = allBooks[i].getElementsByTagName("a")[0];
//    txtValue = a.textContent || a.innerText;
//    if (txtValue.toUpperCase().indexOf(filter) > -1) {
//      li[i].style.display = "";
//    } else {
//      li[i].style.display = "none";
//    }
//  }
//}
//searchBox()