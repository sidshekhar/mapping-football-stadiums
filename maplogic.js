function initialise() {
    // create the Leaflet map object and enable fractional zoom to adjust map size granularly.
    myMap = new L.Map('mapid', {
        zoomSnap: 0.1
    });

    // create the labeled tile layer with correct attribution
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    var osmAttrib = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';
    var osm = new L.TileLayer(osmUrl, {
        minZoom: 0.5,
        maxZoom: 20,
        attribution: osmAttrib
    });


    // create the grayscale tile layer with correct attribution
    var grayUrl = 'http://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
    var grayAttrib = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ';
    var gray = new L.TileLayer(grayUrl, {
        minZoom: 0.5,
        maxZoom: 20,
        attribution: grayAttrib
    });


    // create the NASA Earth at Night tile layer with correct attribution
    var NASAGIBS_ViirsEarthAtNight2012 = L.tileLayer('http://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
        attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
        bounds: [
            [-85.0511287776, -179.999999975],
            [85.0511287776, 179.999999975]
        ],
        minZoom: 1,
        maxZoom: 8,
        format: 'jpg',
        time: '',
        tilematrixset: 'GoogleMapsCompatible_Level'
    });



    // set the starting location and zoom of the map
    myMap.setView(new L.LatLng(53.6642, -4.8), 6.2);


    //add different tilelayers to map.
    var baseMaps = {
        "Minimalist": gray,
        "Default": osm,
        "Earth at Night": NASAGIBS_ViirsEarthAtNight2012
    };

    //add tilelayers selection box to map
    myMap.addLayer(osm);



    //information box overlaid on map to show number of stadiums
    var info = L.control();

    info.onAdd = function(myMmap) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        this.update();
        return this._div;
    };

    info.update = function() {
        if (myData.length > 0) {
            this._div.innerHTML = '<h4>Number of Stadiums</h4>' + '<b>' + myData.length + '</b>';
        } else {
            this._div.innerHTML = '<h4>Number of Stadiums</h4>' + '<b>No Stadiums Found</b>';
        }
    };

    info.addTo(myMap);
    L.control.layers(baseMaps).addTo(myMap);


    //custom icon
    var stadiumIcon = L.icon({
        iconUrl: 'Images/stadium.png',
    });

    // the myData array has been imported in a separate <script> include.
    if (myData) {

        //set up counters for different leagues (used for Chart visualization)
        var premierleaguecount = 0;
        var scottishpremiershipcount = 0;
        var eflchampionshipcount = 0;
        var eflleagueonecount = 0;
        var eflleaguetwocount = 0;
        var nationalteamcount = 0;
        var othercount = 0;

        //here we iterate through the array
        for (item in myData) {
            var lat = myData[item].latitude; //marker latitude
            var lon = myData[item].longitude; //marker longitude
            var team = myData[item].team; //stadium team affilication
            var logo = myData[item].logo; //team logo
            var league = myData[item].league; //team's league

            //switch statement to add to league counters based on value of item's team.
            switch (league) {
                case 'Premier League':
                    premierleaguecount++;
                    break;
                case 'Scottish Premiership':
                    scottishpremiershipcount++;
                    break;
                case 'EFL Championship':
                    eflchampionshipcount++;
                    break;
                case 'EFL League One':
                    eflleagueonecount++;
                    break;
                case 'EFL League Two':
                    eflleaguetwocount++;
                    break;
                case 'National':
                    nationalteamcount++;
                    break;
                default:
                    othercount++;
            }

            //marker pop-up content with team logo included.
            var popup_content = (" <div class='w3-container w3-cell'><img src='" + logo + "' alt='Team Logo' align='bottom' style='width:80px;height:80px;'></div><div class='w3-container w3-cell'><b>Stadium Name:</b> " + myData[item].stadium_name +
                "<br><b>Team Name:</b><br> " + team +
                "<br><b>Capacity:</b> " + myData[item].capacity) + "</div>"

            //create and add markers and popups to map.
            var marker = L.marker([lat, lon], {
                icon: stadiumIcon
            }).addTo(myMap);
            marker.bindPopup(popup_content);

        }

        //Code for Chart.JS League Breakdown doughnut chart
        var ctx = document.getElementById("myChart").getContext('2d');
        ctx.canvas.width = 400;
        ctx.canvas.height = 200;
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Premier League", "Scottish Premiership", "EFL Championship", "EFL League One", "EFL League Two", "National Team", "Other"],
                datasets: [{
                    backgroundColor: [
                        "#2ecc71",
                        "#3498db",
                        "#95a5a6",
                        "#9b59b6",
                        "#f1c40f",
                        "#e74c3c",
                        "#34495e"
                    ],
                    data: [premierleaguecount, scottishpremiershipcount, eflchampionshipcount, eflleagueonecount, eflleaguetwocount, nationalteamcount, othercount]
                }]
            },
            options: {
                responsive: false,
                legend: {
                    display: true,
                    position: 'right',
                    labels: {
                        boxWidth: 20
                    }
                }
            }
        });



    }


    //Code for Modal (used to display sources)
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    //Autocomplete functionality through jQuery for Team Search
    $(document).ready(function() {
        var availableTags = [];

        //iterate through allData array which has ALL values from the stadiums table - so search box will always have all stadiums available in autocomplete.
        for (item in allData) {
            var team_name = allData[item].team;
            availableTags.push(team_name)
        }

        $("#searchterm").autocomplete({
            source: availableTags
        });
    });



    //jQuery slider for stadium capacity
    $(function() {
        $("#flat-slider").slider({
            range: true,
            min: 0,
            max: 90000,

            //lowerbounds and upperbounds are set to the value they are given or to default minimum and maximum values.
            values: [($("#lowerbounds").val() || 2000), ($("#upperbounds").val() || 90000)],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0] + " - " + ui.values[1]);
                // when the slider values change, update the hidden fields
                $("#lowerbounds").val(ui.values[0]);
                $("#upperbounds").val(ui.values[1]);
            }
        });
        $("#amount").val($("#flat-slider").slider("values", 0) +
            " - " + $("#flat-slider").slider("values", 1));
    });




    //Pan in to London and back out functionality
    var stateChangingButton = L.easyButton({
        states: [{
            stateName: 'zoom-to-london',
            icon: 'fa-star',
            title: 'zoom to london',
            onClick: function(btn, map) {
                myMap.flyTo([51.39404, -0.23447], 10.100000001);
                btn.state('zoom-to-original'); // change state on click
            }
        }, {
            stateName: 'zoom-to-original',
            icon: 'fa-undo',
            title: 'zoom to original state',
            onClick: function(btn, map) {
                map.flyTo([53.6642, -4.8], 6.2);
                btn.state('zoom-to-london');
            }
        }]
    });

    //add button to map(shown below zoom in and out buttons)
    stateChangingButton.addTo(myMap);




}
