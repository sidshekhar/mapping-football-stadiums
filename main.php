<!DOCTYPE html>
<html>

<head>
    <title>Football Stadiums in the UK</title>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="initial-scale=1,width=device-width">
	<link rel="shortcut icon" href="favicon-futbol-o.ico">
	<script src ="https://use.fontawesome.com/e286d068cb.js"></script>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" type="text/css" href="stadiummap.css">
    <link href='//fonts.googleapis.com/css?family=Marvel' rel='stylesheet'>
    <link href='//fonts.googleapis.com/css?family=PT%20Sans%20Narrow' rel='stylesheet'>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
	<link rel="stylesheet" href="https://unpkg.com/leaflet-easybutton@2.0.0/src/easy-button.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.5.0/introjs.min.css" />
    <?php include( "./mapdata.php"); ?>
</head>


<body onload=initialise()>
	
	<header class="w3-container w3-row">
    <h1>Visualizing Football Stadiums in the U.K</h1>
	</header>

	
    <div id="mapid" class="w3-container w3-cell" data-step="1" data-intro="The goal of this page is to allow you to visually explore the location of football stadiums in the U.K. Click on stadium markers for more information on each stadium. For additional context, select a different background from the tiled box in the top right corner (under the Number of Stadiums counter). An especially interesting backdrop is the 'Earth at Night' view that shows the juxtaposition of crowded urban areas (well lit) against the density of stadiums located there." data-position="right"></div>


	 <div class="w3-container w3-cell">

    <div class="filter w3-card" data-step="7" data-intro="Finally, have a look at the data sources behind this map and other resources relevant to this area if you would like to explore further.">
        <!--Explanatory intro.js Tour functionality trigger button-->
        <h2>About this Map</h2>
        <button class="btn-class" onclick="javascript:introJs().setOption('showProgress', true).start();">Take the tour</button>


        <!-- Trigger/Open The Modal within which sources are stored -->
        <button id="myBtn" class="btn-class">View Sources</button>

        <!-- The Modal -->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">

                <div class="modal-header">
                    <span class="close">&times;</span>
                    <h2>List of Sources and Related Work</h2>
                </div>

                <div class="modal-body">

                    <h4>Data and Image Sources</h4>
                    <ul>
                        <li><a href="https://www.doogal.co.uk/FootballStadiums.php"> Primary Stadium Data </a>
                        </li>
                        <li><a href="https://en.wikipedia.org/wiki/List_of_football_stadiums_in_England"> Additional Stadium Data </a>
                        </li>
						<li><a href="http://www.bbc.co.uk/sport/football/tables"> League Data </a>
                        </li>
                        <li>Stadium Icons made by <a href="http://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                        </li>
                        <li>Search Icon made by <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
                        </li>
						<li> <a href = "http://images.adsttc.com/media/images/5012/520e/28ba/0d1b/4c00/0045/large_jpg/stringio.jpg?1414481878">Additional Image Credit</a>
						</li>
                    </ul>

                    <h4>Additional Resources/Related Work</h4>
                    <ul>
                        <li><a href="https://www.theguardian.com/football/2010/jan/13/stadiums-capacity-town-population-knowledge">Which stadiums have a capacity greater than their location's populations?</a>
                        </li>
                        <li><a href="http://www.stadiumguide.com/city-guides/london-football-guide/">The London Football Stadium Guide </a>
                        </li>
                        <li><a href="http://torontoist.com/2016/04/ranking-all-30-major-league-baseball-stadiums-by-walkability/">Ranking MLB Stadiums by walkability</a>
                        </li>
                        <li><a href="http://brillianttrains.com/football-stadiums/">Travel Time Isochron Maps To London Football Stadiums</a>
                        </li>
                    </ul>
                </div>

                <div class="modal-footer">
                    <p>Page Last Updated: April 28, 2017</p>
                </div>
            </div>
        </div>
		
		 <button class="btn-class" onclick="window.location.href='./interpretation.html'">Data Insights</button>
    </div>
	
	
	<!--This is a an input form to search by team name. -->
    <div class="filter w3-card" data-step="2" data-intro='Search for stadiums by team. Type anything, including just a single letter or partial terms like "city" for example to get any and all stadiums that host teams with names containing your search query.'>
        <?php // the form should re-load the same page. 
		echo "<form action='".$_SERVER[ 'SCRIPT_NAME']. "' method='post'>"; ?>

        <h2>Search By Team</h2>
        <label for="searchterm">
            <input id="searchterm" type="search" name=teamsearch placeholder="Ex: Arsenal" autocomplete="on" class="search">
        </label>
        <input type="submit" value='Search' class="btn-class">
        </form>
    </div>


	<!--Slider to filter stadiums by capacity. Form request is POST so user cannot inject or mess with SQL through the URL.-->
    <div class="filter w3-card" data-step="3" data-intro="Drag each end of the slider and click 'Filter' to granularly filter by stadium capacity.">
        <h2>Filter by Stadium Capacity</h2>
        <?php echo "<form action='".$_SERVER[ 'SCRIPT_NAME']. "' method='post'>"; ?>
		<!--Hidden input fields to set the lower and upper ranges of the slider to send to the database.-->
		<input type="hidden" name="lowerbounds" id="lowerbounds" value="<?php echo $_POST['lowerbounds']; ?>"/>
		<input type="hidden" name="upperbounds" id="upperbounds" value="<?php echo $_POST['upperbounds']; ?>"/>
	<p>
	  <label for="amount">Capacity Range:</label>
	  <input type="text" id="amount" readonly >
	</p>
		<img src="Images/stadium-large.png" alt="Small Stadium" height="22" width="28"><div class="flat-slider" id="flat-slider"></div><img src="Images/stadium-large.png" alt="Small Stadium" height="52" width="58">
		<br>
        <br>
        <input type=submit value='Filter' class="btn-class">
        </form>
    </div>

	
		<!--Chart to show percentage breakdown of markers currently on the map by professional football leagues -->
	<div class="filter w3-card" data-step="4" data-intro="Have a look at the percentage of stadiums displayed that are in each of the professional leagues in the U.K. Filter or search on this page to see this chart dynamically adjust to reflect the stadiums displayed on the map." data-position="top">
	<h2>Breakdown by league</h2>
	<canvas id="myChart"></canvas>
	 </div>
	
	
	<!--This is a toggle switch to only show teams that are in the Premier League -->
    <div class="filter w3-card">
        <h2> Team Toggle</h2> Flip the switches to <i>only</i> see stadiums that host Premier League or National Teams.
        <br>
        <br>
		<?php echo "<form action='".$_SERVER[ 'SCRIPT_NAME']. "' method='post'>"; ?>
        <!-- Rounded switch, with the toggle kept checked if submitted-->
		<div class="w3-container w3-cell">
        <label class="switch" data-step="5" data-intro="Simple toggle for those who want to quickly see the stadiums that house England's top flight - The Premier League." data-position="right">
            <input type="checkbox" name=premierleague value="Yes" <?php if(isset($_POST[ 'premierleague'])) echo "checked='checked'"; ?> >
            <span class="slider round"></span>
        </label>
		</div>
        <div class="w3-container w3-cell">
        <input type="submit" value="Premier League Only" class="btn-class">
		</div>
        </form>
		
		<br>
	

        <!--This is a similar toggle switch to show only national teams. -->
        <?php echo "<form action='".$_SERVER[ 'SCRIPT_NAME']. "' method='post'>"; ?>
		<div class="w3-container w3-cell">
        <label class="switch" data-step="6" data-intro="Yet another toggle you can switch on if you only want to see stadiums that host national teams." data-position="right">
            <input type="checkbox" name=nationalteams value="Yes" <?php if(isset($_POST[ 'nationalteams'])) echo "checked='checked'"; ?> >
            <span class="slider round"></span>
        </label>
		</div>
		<div class="w3-container w3-cell">
        <input type="submit" value="National Teams only" class="btn-class">
		</div>
        </form>
    </div>
	
	</div>
	
	<!--All external and internal javascript libraries and scripts used in the page. -->
    <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/intro.js/2.5.0/intro.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script src="https://unpkg.com/leaflet-easybutton@2.0.0/src/easy-button.js"></script>
    <script src="./maplogic.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

</body>

</html>