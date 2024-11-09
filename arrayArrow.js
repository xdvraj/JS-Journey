const courses = [
    { id: 1, name: "JS" , price: 1000 , launched: "april"},
    { id: 2, name: "REACT", price: 5000 , launched: "june" },
    { id: 3, name: "NODE", price: 8000 , launched: "may"},
    { id: 4, name: "ANGULAR", price: 6000 , launched: "june"},
    { id: 5, name: "EXPRESS", price: 8000 , launched: "july"},
    { id: 3, name: "VUE", price: 8000 , launched: "april"},
];

console.log(courses.find(course => course.name === "REACT")) ;