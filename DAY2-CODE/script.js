// task1
function task1() {
  var formData = document.getElementById("formId");
  function handleSubmit(e) {
    e.preventDefault();
    var userName = formData.userName.value;
    var userAge = formData.userAge.value;

    if (userName == null || userName == "") {
      alert("name is empty");
      return;
    } else if (userAge <= 18) {
      alert("age is less than or equal to 18");
      return;
    }

    formData.submit();
  }
}
task1();

//   task2
function task2() {
  var divBox = document.getElementById("formDiv");

  divBox.onmouseover = function () {
    divBox.style.backgroundColor = "orange";
  };

  divBox.onmouseout = function () {
    divBox.style.backgroundColor = "rgb(129, 104, 240)";
  };
}
task2();

//   task3
var arr = [1, 2, 3];
function task3() {
  var originalArray = "Task3. original array: " + arr;
  var box2 = document.getElementById("task3");
  box2.innerHTML = originalArray;

  arr.push(10);
  var output = document.getElementById("newArr");
  var newArray = "array after pushing 10 at the end: " + arr;
  output.innerHTML = newArray;
}
task3();

//   task4
function task4() {
  arr.shift();
  var newArray2 = "Task4. array after removing the first element: " + arr;
  var output2 = document.getElementById("task4");
  output2.innerHTML = newArray2;
}
task4();

//   task5
function task5() {
  arr.splice(2, 0, 9);
  var box5 = document.getElementById("task5");
  var output5 = "Task5. adding element 9 at index 2 using splice: " + arr;
  box5.innerHTML = output5;
}
task5();

//   task6
var arr2 = [11, 3, 2, 4, 11, 5, 6, 11];
function task6() {
  document.getElementById("task6").innerHTML = "Task6. original array: " + arr2;

  var arr3 = arr2;
  for (var i = 0; i < arr3.length; i++) {
    if (arr3[i] === 11) {
      arr3[i] = 100;
    }
  }
  var box6 = document.getElementById("task6op");
  var output6 =
    " after replacing all occurences of 11 with 100, array becomes : " + arr3;
  box6.innerHTML = output6;
}
task6();

//   task7
function task7() {
  var box7 = document.getElementById("task7");
  box7.innerHTML = "Task7. Original array is : " + arr2;

  var box7op = document.getElementById("task7op");
  for (var i = 0; i < arr2.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr2[i] < arr2[j]) {
        var temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
    }
  }

  box7op.innerHTML = "Array after sorting: " + arr2;
}
task7();

//   task8
var arr5 = [1, 2, 5, 3, 9];
function task8() {
  var box8 = document.getElementById("task8");
  box8.innerHTML = "Task8. Original array is: " + arr5;
  console.log(arr5);
  var len = arr5.length;

  for (var i = 0; i < len / 2; i++) {
    var temp = arr5[i];
    arr5[i] = arr5[len - i - 1];
    arr5[len - i - 1] = temp;
  }

  var box8op = document.getElementById("task8op");
  box8op.innerHTML = "array after reversing: " + arr5;
}
task8();

//   task9
function task9() {
  var box9 = document.getElementById("task9");
  box9.innerHTML =
    "Task 9. index of 5 in the array: " + arr5 + " is : " + arr5.indexOf(5);
}
task9();

//   task10: table

// function task10() {
//   var tab = document.getElementById("table").getElementsByTagName("tbody")[0];
//   var btn = document.getElementById("addStudent");
//   var studentData = [];
//   btn.onclick = function () {
//     var name = prompt("enter name: ");
//     if (!name) {
//       alert("enter name");
//       return;
//     }

//     var subjects = ["Physics", "Chemistry", "Maths", "CS", "DSA"];
//     var marks = [];
//     for (var i = 0; i < 5; i++) {
//       var mark;
//       while (true) {
//         mark = prompt("Enter marks of " + subjects[i] + " (0-100): ");
//         mark = parseInt(mark);

//         if (!isNaN(mark) && mark >= 0 && mark <= 100) {
//           break;
//         }
//         alert("Invalid input! Please enter an integer between 0 and 100.");
//       }
//       marks.push(mark);
//     }

//     studentData.push({ name: name, marks: marks });

//     var tr = document.createElement("tr");
//     var tdName = document.createElement("td");

//     tdName.textContent = name;
//     tr.appendChild(tdName);

//     for (var j = 0; j < marks.length; j++) {
//       var tdMark = document.createElement("td");
//       tdMark.textContent = marks[j];
//       tr.appendChild(tdMark);
//     }

//     tab.appendChild(tr);
//   };
// }
function task10() {
  var tab = document.getElementById("table").getElementsByTagName("tbody")[0];
  var btn = document.getElementById("addStudent");

  var studentData = JSON.parse(localStorage.getItem("students")) || [];

  function renderTable() {
    tab.innerHTML = "";
    studentData.forEach((student) => {
      var tr = document.createElement("tr");
      tr.innerHTML =
        `<td>${student.name}</td>` +
        student.marks.map((m) => `<td>${m}</td>`).join("") +
        `<td>${student.total}</td><td>${student.avg.toFixed(2)}</td>`;
      tab.appendChild(tr);
    });
  }

  renderTable();

  btn.onclick = function () {
    var name = prompt("Enter name:");
    if (!name) {
      alert("Please enter a name");
      return;
    }

    var subjects = ["Physics", "Chemistry", "Maths", "CS", "DSA"];
    var marks = [];
    var tot = 0;

    for (var i = 0; i < subjects.length; i++) {
      var mark;
      while (true) {
        mark = prompt(`Enter marks of ${subjects[i]} (0-100):`);
        mark = parseInt(mark);
        if (!isNaN(mark) && mark >= 0 && mark <= 100) break;
        alert("Invalid input! Please enter an integer between 0 and 100.");
      }
      marks.push(mark);
      tot += mark;
    }

    var avgValue = tot / subjects.length;

    // Update total and average on the page
    // document.getElementById("total").textContent = tot;
    // document.getElementById("avg").textContent = avgValue.toFixed(2);

    // Store the data
    studentData.push({ name: name, marks: marks, total: tot, avg: avgValue });

    // Add to table
    var tr = document.createElement("tr");
    tr.innerHTML =
      `<td>${name}</td>` +
      marks.map((m) => `<td>${m}</td>`).join("") +
      `<td>${tot}</td><td>${avgValue.toFixed(2)}</td>`;
    tab.appendChild(tr);

    localStorage.setItem("students", JSON.stringify(studentData));

    renderTable();
  };
}

task10();
