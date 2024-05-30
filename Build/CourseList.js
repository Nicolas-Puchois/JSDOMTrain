function addlist() {
  let list = document.getElementById("courseList");
  let course = document.createElement("li");
  let text = document.createTextNode(document.getElementById("list").value);

    if (document.getElementById("list").value == "") {
        return false;
    }
    course.appendChild(text);
    list.appendChild(course);

}
