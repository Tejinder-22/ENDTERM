function Func() {

    var counrty = document.getElementById("country").value;
    var from = document.getElementById("sdate").value;
    var to = document.getElementById("edate").value;
    var xhttp1 = new XMLHttpRequest();
    var url = "https://api.covid19api.com/country/"+counrty + "?from=" + from + "T00:00:00Z&to=" + to + "T00:00:00Z";
    
    
    xhttp1.open("GET", url, true);       //fetch

    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var countCases = 0;
            var countDeaths = 0;
            var countActives = 0;
            for (var i = 0; i < list.length; i++) {
                countCases = countCases + list[i].Confirmed;
                countActives = countActives + list[i].Active;
                countDeaths = countDeaths + list[i].Deaths;
            }
            createData(countCases, countActives, countDeaths);

        }
    };

    xhttp1.send();       //sending

}

function createData(countCases, countActives, countDeaths) {

    var parent = document.getElementById("area");
    var divParent = document.createElement("div");

    var confCases = document.createElement("p");
    var conftext = document.createTextNode("Confirmed cases : ");
    confCases.appendChild(conftext);

    var spancount = document.createElement("span");
    var spancountext = document.createTextNode(countCases);

    spancount.appendChild(spancountext);
    confCases.appendChild(spancount);

    divParent.appendChild(confCases);

    var activecases = document.createElement("p");
    var activetext = document.createTextNode("Active cases : ");
    activecases.appendChild(activetext);

    var spanactive = document.createElement("span");
    var spanactivetext = document.createTextNode(countActives);

    spanactive.appendChild(spanactivetext);
    activecases.appendChild(spanactive);

    divParent.appendChild(activecases);



    var deathcases = document.createElement("p");
    var deathtext = document.createTextNode("Death cases : ");
    deathcases.appendChild(deathtext);

    var sdeathcases= document.createElement("span");
    var sdctext = document.createTextNode(countDeaths);

    sdeathcases.appendChild(sdctext);
    deathcases.appendChild(sdeathcases);

    divParent.appendChild(deathcases);


    divParent.setAttribute("class", "main_div");
    parent.appendChild(divParent);
}