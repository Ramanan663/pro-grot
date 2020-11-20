//const landen = randomPersonData.map((item) => {

//    return item.name;
//});
//console.log(landen);
/*
function landen() {
    randomPersonData.forEach(function(item, index) {
        document.getElementById("result").innerHTML += "<br>" + item.name;
    });
}

function getFullName(item) {
    var fullname = [item.surname].join(" ");
    return surname, photo;
}

function myFunction() {
    document.getElementById("demo").innerHTML = randomPersonData.map(getFullName);
}
*/
console.log("test");
const list = document.querySelector(".list");
const sort_name_btn = document.querySelector("sort-optiion .sort-name");
//console.log(list);

function displaylist(array = []) {
    list.innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        let item = array[i];
        let item_element = document.createElement("div");
        item_element.classList.add("randomPersonData");

        let title = document.createElement("div");
        title.classList.add("item-title");
        title.innerHTML = item.name;
        //title.innerHTML = item.surname;
        //title.innerHTML = item.photo;

        item_element.appendChild(title);
        list.appendChild(item_element);
    }
}
displaylist(randomPersonData);
///