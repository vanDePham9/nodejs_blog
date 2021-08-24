

// var language = [
//     'Javascript',
//     'HTML',
//     'CSS',
//     'NodeJs',
//     'ExpressJs',
//     null,
//     undefined,
//     0,
// ];

// var secondLanguage = [
//     'c++',
//     'c#',
//     'Python',
// ];
// var thirdLanguage = [
// ];

// function User(firstName, lastName, avatar) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.avatar = avatar;

     
// }

// User.prototype.nickName = 'F8';
// User.prototype.getFirstName = function () {
//     return this.firstName;
// }


// var headingNode = document.getElementById('heading');

// console.log({
//     Element: headingNode
// })

// //To String
// //console.log(language.toString());
// //Join - convert array thành string
// //console.log(language.join(', '));

// //Pop - xóa element cuối mảng và trả về phần tử đã xóa >< shift
// //console.log(language.pop());  
// //Push - thêm phần từ cuối mảng >< unshift
// //splice - thêm sửa xóa element trong mảng 

// //console.log(language.splice(1, 0, 'MongoDB'));
// //concat - nối mảng
// //console.log(language.concat(secondLanguage, thirdLanguage));

// //slice - cắt mảng


// //console.log(typeof lastName);

// //Find Index
// //console.log(firstName.search('js'));

// //Cut String
// //console.log(firstName.slice(-10, -3));

// //replace 
// //console.log(firstName.replace(/js/g, 'Javascript')); // /.../g => biểu thức chính quy 

// // convert to upper case
// //console.log(firstName.toLowerCase());

// // convert to lower case

// //trim => quan li du lieu nhap vao cua khach hang : bo di cac khoang space o 2 dau input

// //console.log(firstName.trim());

// //split : cắt string thành array
// // var language = 'HTML, CSS, Javascript';
// // console.log(language.split(''));

// //get a character by index


// //console.log(`Toi la: ${firstName} ${lastName}`);

//FETCH
// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi)
//     .then(function(response) {
//         return response.json()
//     })
//     .then(function(post) {
//         var htmls = post.map(function(post) {
//             return `${post.title}`
//         });
//         document.getElementById('content').innerHTML = htmls;
//     });

var coursesApi = 'http://localhost:3000/courses';


function start() {
    getCourses(renderCourses);
    handleCreateForm();
}

//start();


//Funtions

function getCourses(callback) {
    fetch(coursesApi) 
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}


function renderCourses(courses) {
    var coursesList = document.querySelector('#courses-list');
    var htmls = courses.map(function(course) {
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}</p>
            </li>
        `;
    });
    coursesList.innerHTML = htmls.join('');

}

function handleCreateForm() {
    var createBtn = document.querySelector('#createCourse');
    
    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;
        
    }
}

(function() {
    console.log('Đây là hàm tự gọi');
});

const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this;
    }
  }

console.log(myObject.fullName())