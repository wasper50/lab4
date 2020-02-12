/*
https://randomuser.me/api/portraits/med/men/17.jpg
https://randomuser.me/api/portraits/med/women/17.jpg
*/

function toggleForm() {
    let form = document.getElementById("form");

    if (form.style.display == "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}

function searchArtist() {
    var i, searchInput, filter, list, li, thisCard, thisName;
    searchInput = document.getElementById("search");
    filter = searchInput.value.toLowerCase();
    list = document.getElementById("artists");
    li = list.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        thisCard = li[i].getElementsByClassName("nameDiv")[0];
        thisName = thisCard.innerText.toLowerCase();
        if (thisName.indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}

function loadArtist() {
    let load_list = document.getElementById("artists")
    for(let i = 0; i < localStorage.length; i++){
        let key = localStorage.key(i);
        let localData = JSON.parse(localStorage.getItem(key));
        let createProfile = addInfo(localData);
        load_list.appendChild(createProfile);
    }
}

function add() {
    toggleForm();

    let artists = document.getElementById("artists");

    let name = document.getElementById('name').value;
    let about = document.getElementById('about').value;
    let url = document.getElementById('url').value;

    let info = [name, about, url];
    localStorage.setItem(info[0], JSON.stringify(info));

    newArtist = addInfo(info)

    artists.appendChild(newArtist);

    for (var key in localStorage) {
        console.log(key + ':' + localStorage[key]);
    }
    console.log(localStorage)
}


function addInfo(info) {
    let li = document.createElement("li");
    li.className = "lists";

    let outerDiv = document.createElement("div");
    outerDiv.className = "outerDiv";
    li.appendChild(outerDiv)

    let innerDiv = document.createElement("div");
    innerDiv.className = "innerDiv";
    outerDiv.appendChild(innerDiv);

    let imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    innerDiv.appendChild(imgDiv);
    
    let textDiv = document.createElement("div");
    textDiv.className = "textDiv";
    innerDiv.appendChild(textDiv);
    
    let nameDiv = document.createElement("div");
    nameDiv.className = "nameDiv";
    textDiv.appendChild(nameDiv);
    
    let infoDiv = document.createElement("div");
    infoDiv.className = "infoDiv";
    textDiv.appendChild(infoDiv);

    let imgElement = document.createElement("img");
    imgElement.src = info[2];
    imgDiv.appendChild(imgElement);

    let nameElement = document.createElement("b");
    nameElement.innerText = info[0];
    nameDiv.appendChild(nameElement);

    let infoElement = document.createElement("p");
    infoElement.innerText = info[1];
    infoDiv.appendChild(infoElement);



    let deleteDiv = document.createElement("div");
    deleteDiv.className = "deleteArist";
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.onclick = function() {
        deleteBtn.parentNode.parentNode.parentNode.parentNode.removeChild(outerDiv);
        localStorage.removeItem(nameElement.innerText);

    };

    deleteDiv.appendChild(deleteBtn);
    innerDiv.appendChild(deleteDiv);

    return li;
}

loadArtist();