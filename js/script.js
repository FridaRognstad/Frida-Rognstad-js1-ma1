const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//question 1
const cat = {
    complain: function () {
        console.log("Meow!");
    }
}

cat.complain();

//question 2
const heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//question 3
heading.style.fontSize = "2em"