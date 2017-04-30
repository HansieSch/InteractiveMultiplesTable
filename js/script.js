var list = document.querySelector("ol");

for (var i = 1; i <= document.querySelector("input[name='limit']").value; i++) {
    list.appendChild(createElement("li", i.toString()));
}

document.querySelector("input[name='limit']").onchange = refreshList;
document.querySelector("input[name='limit']").onkeyup = refreshList;

// Removes the list currently in DOM and replaces it with a new one.
// Used in event handler on input element.
function refreshList(e) {
    var newl = newList("ol", "ol");

    for (var i = 1; i <= e.srcElement.value; i++) {
        newl.appendChild(createElement("li", i.toString()));
    }
}

// Creates an html element with the text passed in.
function createElement(tagName, text) {
    var el = document.createElement(tagName);
    var textNode = document.createTextNode(text);
    el.appendChild(textNode);
    return el;
}

// Selects a list according to a CSS selector passed in, removes 
// the elements that matches the selector and appends either an 
// ol/ul element to the parent node.
// selector - CSS selector.
// listToCreate - String either "ul" or "ol"
// returns the new list element.
function newList(selector, listToCreate) {
    var oldList = document.querySelector(selector);
    var parent = oldList.parentNode;
    oldList.remove();

    var newList = document.createElement(listToCreate);
    parent.appendChild(newList);

    return newList;
}

document.querySelector("form").onsubmit = function (e) {
    e.preventDefault();
};