var ajaxRepo = function () {

    return {
        getCompanyData: function (callback) {
            console.log("XML Request at: https://api.spacexdata.com/v2/info");

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.responseText);
                }
            };
            xhttp.open("GET", "https://api.spacexdata.com/v2/info", true);
            xhttp.send();
        },
        getHistoryData: function (callback) {
            console.log("XML Request at: https://api.spacexdata.com/v2/info/history");

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.responseText);
                }
            };

            var today = new Date();
            var prevYear = new Date();

            prevYear.setFullYear(today.getFullYear() - 4);
            today = Math.round((new Date()).getTime() / 1000);
            prevYear = Math.round(prevYear.getTime() / 1000);

            xhttp.open("GET", "https://api.spacexdata.com/v2/info/history?order=desc&start=" + prevYear + "&end=" + today, true);
            xhttp.send();
        },
        getNextLaunchData: function (callback) {
            console.log("XML Request at: https://api.spacexdata.com/v2/launches/next");

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.responseText);
                }
            };
            xhttp.open("GET", "https://api.spacexdata.com/v2/launches/next", true);
            xhttp.send();
        },
        getLastLaunchData: function (callback) {
            console.log("XML Request at: https://api.spacexdata.com/v2/launches/latest");

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.responseText);
                }
            };
            xhttp.open("GET", "https://api.spacexdata.com/v2/launches/latest", true);
            xhttp.send();
        },
        getRocketData: function (rocketId, callback) {
            console.log("XML Request at: https://api.spacexdata.com/v2/rockets/" + rocketId);

            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    callback(this.responseText);
                }
            };
            xhttp.open("GET", "https://api.spacexdata.com/v2/rockets/" + rocketId, true);
            xhttp.send();
        }
    }
}