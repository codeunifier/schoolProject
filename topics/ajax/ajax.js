var loadDoc = function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demoOne").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}

var loadDocJQuery = function () {
    $.ajax({
      type: "GET",
      url: "ajax_info.txt",
      data: {},
      success: function (data) { $("#demoTwo").html(data); },
      dataType: "text"
    });
}

var loadHTML = function () {
  $.ajax({
    type: "GET",
    url: "code.html",
    data: {},
    success: function (data) { $("#demoThree").html(data); },
    dataType: "text"
  });
}