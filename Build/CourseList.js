function addlist(){

    let list = document.getElementById("courseList");
    let course = document.createElement("li");
    let text = document.createTextNode(document.getElementById("list").value);
    course.appendChild(text);
    list.appendChild(course);
}