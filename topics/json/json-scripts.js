function listAttacks(jsonObj) {
    console.log(jsonObj);
    console.log(jsonObj[0].ClassName);
}

function loadDNDFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("dndFile").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "class-sample.json", true);
    xhttp.send();
}

function loadSimpleExampleFile() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("simpleExample").innerHTML = this.responseText;
        listAttacks(JSON.parse(this.responseText));
      }
    };
    xhttp.open("GET", "simple-example.json", true);
    xhttp.send();
}

function loadFiles() {
    loadDNDFile();
    loadSimpleExampleFile();
}

