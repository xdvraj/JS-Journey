// iteration means looping 
const courses = [ 'javascript', 'react', 'node'];

// 1st method 
for ( let course of courses)
console.log(course);

// 2nd method
courses.forEach(function (course) {
    console.log(course);
})

// 3rd method using arrow function
courses.forEach((course) => console.log(course));

// with index
courses.forEach(function (course, index) {
    console.log(index, course);
})