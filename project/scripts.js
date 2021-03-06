var _ajax = new ajaxRepo();

function getOnLoadFunction() {
    _ajax.getCompanyData(function (data) {
        if (data) {
            var compData = JSON.parse(data);

            var html = `
                <div id="founder">Founder: ${compData.founder}</div>
                <div id="foundDate">Founded in: ${compData.founded}</div>
                <div id="summary">${compData.summary}</div>
            `;

            document.getElementById("detailsContainer").innerHTML = html;
        } else {
            console.log("ERROR: Company data returned null");
        }
    });

    _ajax.getHistoryData(function (data) {
        if (data) {
            var histData = JSON.parse(data);

            histData.forEach(function (item) {
                var html = `
                    <div class="hist-item">
                        <button class="accordion">
                            <div class="hist-item-header">
                                <div class="hist-item-title">${item.title}</div>
                                ${item.flight_number ? `<div class="hist-flight-num">${item.flight_number}</div>` : ``}
                            </div>
                        </button>
                        <div class="panel">
                            <div class="hist-item-content">
                                <div class="hist-item-date">${new Date(item.event_date_utc).toDateString()}</div>
                                <div class="hist-item-details">${item.details}</div>
                            </div>
                            <div class="hist-item-footer">
                                <div class="hist-link link-article"><a href="${item.links.article}">Article</a></div>
                                <div class="hist-link link-reddit"><a href="${item.links.reddit}">Reddit</a></div>
                                <div class="hist-link link-wiki"><a href="${item.links.wikipedia}">Wikipedia</a></div>
                            </div>
                        </div>
                    </div>
                `;

                document.getElementById("historyList").innerHTML += html;
            });

            var elms = document.getElementsByClassName("accordion");
            
            for (var i = 0; i < elms.length; i++) {
                elms[i].addEventListener("click", function () {
                    if (!this.classList.contains("active")) {
                        var activeElms = document.getElementsByClassName("active");
                    
                        //deactivate other panels
                        if (activeElms.length > 0) {
                            for (var j = 0; j < activeElms.length; j++) {
                                activeElms[j].classList.toggle("active");
                            }
                        }
                    }

                    this.classList.toggle("active");
                });
            }
        } else {
            console.log("ERROR: History data returned null");
        }
    });

    _ajax.getNextLaunchData(function (data) {
        if (data) {
            var launchData = JSON.parse(data);
            var html = `
                <div id="nxtLaunchDate" class="hidden-data">${launchData.launch_date_utc}</div>
                <div id="nxtLaunch">NEXT LAUNCH:</div>
                <div id="nxtLaunchTitle">${launchData.mission_name}</div>
                <div id="nxtLaunchCountdown"></div>
                <div id="nxtLaunchRocket" name="${launchData.rocket.rocket_id}">Rocket: ${launchData.rocket.rocket_name}</div>
            `;

            document.getElementById("nextLaunchContents").innerHTML = html;

            //animate the data
            setTimeout(function () {
                document.getElementById('nextLaunchContents').classList.add("trans-in");
            }, 1000);
        } else {
            console.log("ERROR: Launch data returned null");
        }
    });

    _ajax.getLastLaunchData(function (data) {
        if (data) {
            var launchData = JSON.parse(data);

            var links = getLastLaunchLinks(launchData.links);

            var html = `
                <div id="lastLaunchDate" class="hidden-data">${launchData.launch_date_utc}</div>
                <div id="lastLaunch">LAST LAUNCH: ${launchData.mission_name}</div>
                <div id="lastLaunchContent">
                    <div id="lastLaunchPatch">
                        <img src="${launchData.links.mission_patch_small}"/>
                    </div>
                    <div id="lastLaunchDetails">
                        ${links.map(link => `<div class="last-launch-link"><a href="${link.url}">${link.name}</a></div>`).join("")}
                    </div>
                    <div id="lastLaunchVideo">
                        <iframe src="${getConvertedLink(launchData.links.video_link)}" frameborder="0" allowfullscreen></iframe>
                    </div>
                </div>
            `;

            document.getElementById("lastLaunchContainer").innerHTML = html;
        } else {
            console.log("ERROR: Last launch data returned null");
        }
    });
}

function getConvertedLink(watchLink) {
    var split = watchLink.split("watch?v=");
    return split[0] + "embed/" + split[1];
}

function getLastLaunchLinks(links) {
    var returnValue = [];
    
    for (var key in links) {
        //just in case
        if (links.hasOwnProperty(key)) {
            //filter out the null values
            if (links[key] != null) {
                //filter out the mission patch and video
                if (!key.includes("patch") && key != "video_link") {
                    // if (!links[key].split('.com')[1].includes('.')) {
                        var name = key.replace('_', ' ');
                        name = name.charAt(0).toUpperCase() + name.substr(1);

                        returnValue.push({
                            name: name,
                            url: links[key]
                        });
                    // }
                }
            }
        }
    }

    return returnValue;
}

function onRocketButtonClick() {
    var transitionEnd = whichTransitionEvent();

    //time for some callback hell

    document.getElementById("loadingMessage").addEventListener(transitionEnd, function () {
        if (document.getElementById("rocketContents").firstChild) {
            this.style.display = "none";

            //show the data
            document.getElementById("rocketContents").classList.remove("fade-out");
            document.getElementById("rocketContents").classList.add("fade-in");
        } else {
            var rocketId = document.getElementById("nxtLaunchRocket").getAttribute("name");

            _ajax.getRocketData(rocketId, function (rData) {
                var rocketData = JSON.parse(rData);

                console.log(rocketData);
    
                var rocketHtml = `
                    <div id="rocketName">${rocketData.name}</div>
                    <div id="rocketDesc">${rocketData.description}</div>
                    <div id="rocketDiam">Diameter: ${rocketData.diameter.feet}ft (${rocketData.diameter.meters}m)</div>
                    <div id="rocketHeight">Height: ${rocketData.height.feet}ft (${rocketData.height.meters}m)</div>
                    <div id="rocketMass">Mass: ${rocketData.mass.lb}lb (${rocketData.mass.kg}kg)</div>
                `;
    
                document.getElementById("rocketContents").innerHTML = rocketHtml;
                
                //hide the loading message
                document.getElementById("loadingMessage").classList.remove("fade-in");
                document.getElementById("loadingMessage").classList.add("fade-out");
            });
        }
    }, false);
    document.getElementById("rocketButtonContainer").addEventListener(transitionEnd, function () {
        this.style.display = "none";

        //show the loading message
        document.getElementById("loadingMessage").classList.remove("fade-out");
        document.getElementById("loadingMessage").classList.add("fade-in");
    }, false);
    
    //trigger it all

    //hide the button
    document.getElementById("rocketButtonContainer").classList.remove("fade-in");
    document.getElementById("rocketButtonContainer").classList.add("fade-out");
}

function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
        }
    }
}