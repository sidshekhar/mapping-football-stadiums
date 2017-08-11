var allData = [
   {
      id: 1,
      stadium_name: 'Pittodrie',
      team: 'Aberdeen',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Aberdeen_FC_logo.svg',
      capacity: 22199,
      latitude: 57.1593,
      longitude: -2.08872,
      league: 'Scottish Premiership'
   },
   {
      id: 2,
      stadium_name: 'Crown Ground',
      team: 'Accrington Stanley',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/63/Accstanley.png',
      capacity: 5057,
      latitude: 53.7654,
      longitude: -2.37106,
      league: 'EFL League Two'
   },
   {
      id: 3,
      stadium_name: 'Kingsmeadow',
      team: 'AFC Wimbledon, Kingstonian',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/AFC_Wimbledon.svg',
      capacity: 4720,
      latitude: 51.4051,
      longitude: -0.281984,
      league: 'EFL League One'
   },
   {
      id: 4,
      stadium_name: 'New Broomfield',
      team: 'Airdrie United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Airdrieonians_FC_logo.png',
      capacity: 10172,
      latitude: 55.8601,
      longitude: -3.95997,
      league: 'Other '
   },
   {
      id: 5,
      stadium_name: 'Cliftonhill',
      team: 'Albion Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Albion_Rovers_FC_logo.svg',
      capacity: 2496,
      latitude: 55.8602,
      longitude: -4.01145,
      league: 'Other '
   },
   {
      id: 6,
      stadium_name: 'Recreation Ground',
      team: 'Aldershot Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Aldershot_Crest.png',
      capacity: 7100,
      latitude: 51.2484,
      longitude: -0.754869,
      league: 'Other '
   },
   {
      id: 7,
      stadium_name: 'Recreation Park',
      team: 'Alloa Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Alloa_Athletic_FC_logo.png',
      capacity: 3412,
      latitude: 56.1166,
      longitude: -3.77865,
      league: 'Other '
   },
   {
      id: 8,
      stadium_name: 'Galabank',
      team: 'Annan Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/39/Annan_Athletic_FC_logo.png',
      capacity: 2007,
      latitude: 54.9948,
      longitude: -3.2612,
      league: 'Other '
   },
   {
      id: 9,
      stadium_name: 'Gayfield Park',
      team: 'Arbroath',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/60/Arbroath_FC_logo.svg',
      capacity: 5940,
      latitude: 56.5523,
      longitude: -2.5914,
      league: 'Other '
   },
   {
      id: 10,
      stadium_name: 'Emirates Stadium',
      team: 'Arsenal',
      logo: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      capacity: 60361,
      latitude: 51.5549,
      longitude: -0.108436,
      league: 'Premier League'
   },
   {
      id: 11,
      stadium_name: 'Villa Park',
      team: 'Aston Villa',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/15/Aston_Villa.svg',
      capacity: 42788,
      latitude: 52.5092,
      longitude: -1.88508,
      league: 'EFL Championship'
   },
   {
      id: 12,
      stadium_name: 'Somerset Park',
      team: 'Ayr United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Ayr_United_FC-2009_2011_Centenary_Logo.png',
      capacity: 10243,
      latitude: 55.4697,
      longitude: -4.61996,
      league: 'Other '
   },
   {
      id: 13,
      stadium_name: 'Underhill Stadium',
      team: 'Barnet',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Barnet_FC.svg',
      capacity: 5260,
      latitude: 51.6464,
      longitude: -0.191789,
      league: 'EFL League Two'
   },
   {
      id: 14,
      stadium_name: 'Oakwell',
      team: 'Barnsley',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Barnsley_FC.svg',
      capacity: 23009,
      latitude: 53.5524,
      longitude: -1.46756,
      league: 'EFL Championship'
   },
   {
      id: 15,
      stadium_name: 'Shielfield Park',
      team: 'Berwick Rangers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/BerwickRangersLarge.png',
      capacity: 4131,
      latitude: 55.76,
      longitude: -2.01599,
      league: 'Other '
   },
   {
      id: 16,
      stadium_name: 'St Andrews',
      team: 'Birmingham City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/68/Birmingham_City_FC_logo.svg',
      capacity: 30009,
      latitude: 52.4756,
      longitude: -1.86824,
      league: 'EFL Championship'
   },
   {
      id: 17,
      stadium_name: 'Ewood Park',
      team: 'Blackburn Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Blackburn_Rovers.svg',
      capacity: 31154,
      latitude: 53.7286,
      longitude: -2.48937,
      league: 'EFL Championship'
   },
   {
      id: 18,
      stadium_name: 'Bloomfield Road',
      team: 'Blackpool',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Blackpool_FC_logo.svg',
      capacity: 16220,
      latitude: 53.8046,
      longitude: -3.04834,
      league: 'EFL League Two'
   },
   {
      id: 19,
      stadium_name: 'Macron Stadium',
      team: 'Bolton Wanderers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/82/Bolton_Wanderers_FC_logo.svg',
      capacity: 28723,
      latitude: 53.5805,
      longitude: -2.53571,
      league: 'EFL League One'
   },
   {
      id: 20,
      stadium_name: 'Seward Stadium',
      team: 'Bournemouth',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/AFC_Bournemouth.svg',
      capacity: 10700,
      latitude: 50.7352,
      longitude: -1.83839,
      league: 'Premier League'
   },
   {
      id: 21,
      stadium_name: 'Valley Parade',
      team: 'Bradford City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/Bradford_City_AFC.png',
      capacity: 25136,
      latitude: 53.8042,
      longitude: -1.75902,
      league: 'EFL League One'
   },
   {
      id: 22,
      stadium_name: 'Glebe Park',
      team: 'Brechin City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Brechin_City_FC_logo.svg',
      capacity: 3960,
      latitude: 56.7353,
      longitude: -2.6565,
      league: 'Other '
   },
   {
      id: 23,
      stadium_name: 'Griffin Park',
      team: 'Brentford',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Brentford_FC_logo.svg',
      capacity: 12763,
      latitude: 51.4882,
      longitude: -0.302621,
      league: 'EFL Championship'
   },
   {
      id: 24,
      stadium_name: 'Amex Stadium',
      team: 'Brighton and Hove Albion',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg',
      capacity: 22374,
      latitude: 50.8609,
      longitude: -0.08014,
      league: 'EFL Championship'
   },
   {
      id: 25,
      stadium_name: 'Ashton Gate',
      team: 'Bristol City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/00/Bristol_City_FC.svg',
      capacity: 21497,
      latitude: 51.44,
      longitude: -2.62021,
      league: 'EFL Championship'
   },
   {
      id: 26,
      stadium_name: 'Memorial Stadium',
      team: 'Bristol Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/Bristol_Rovers_F.C._logo.svg',
      capacity: 12011,
      latitude: 51.4862,
      longitude: -2.58315,
      league: 'EFL League One'
   },
   {
      id: 27,
      stadium_name: 'Turf Moor',
      team: 'Burnley',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png',
      capacity: 22546,
      latitude: 53.7888,
      longitude: -2.23018,
      league: 'Premier League'
   },
   {
      id: 28,
      stadium_name: 'Pirelli Stadium',
      team: 'Burton Albion',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Burton_Albion_FC_logo.svg',
      capacity: 6912,
      latitude: 52.8219,
      longitude: -1.62708,
      league: 'EFL Championship'
   },
   {
      id: 29,
      stadium_name: 'Gigg Lane',
      team: 'Bury',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Bury_FC.svg',
      capacity: 11840,
      latitude: 53.5805,
      longitude: -2.29487,
      league: 'EFL League One'
   },
   {
      id: 30,
      stadium_name: 'Abbey Stadium',
      team: 'Cambridge United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Cambridge_United_FC.svg',
      capacity: 10847,
      latitude: 52.2128,
      longitude: 0.154298,
      league: 'EFL League Two'
   },
   {
      id: 31,
      stadium_name: 'Cardiff City Stadium',
      team: 'Cardiff City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg',
      capacity: 26828,
      latitude: 51.4729,
      longitude: -3.20413,
      league: 'EFL Championship'
   },
   {
      id: 32,
      stadium_name: 'Brunton Park',
      team: 'Carlisle United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/63/Carl_Badge.png',
      capacity: 18202,
      latitude: 54.8955,
      longitude: -2.91365,
      league: 'EFL League Two'
   },
   {
      id: 33,
      stadium_name: 'Celtic Park',
      team: 'Celtic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg',
      capacity: 60832,
      latitude: 55.8497,
      longitude: -4.20561,
      league: 'Scottish Premiership'
   },
   {
      id: 34,
      stadium_name: 'The Valley',
      team: 'Charlton Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Charlton_Athletic.svg',
      capacity: 27111,
      latitude: 51.4865,
      longitude: 0.036757,
      league: 'EFL League One'
   },
   {
      id: 35,
      stadium_name: 'Stamford Bridge',
      team: 'Chelsea',
      logo: 'http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg',
      capacity: 41837,
      latitude: 51.4816,
      longitude: -0.191034,
      league: 'Premier League'
   },
   {
      id: 36,
      stadium_name: 'Whaddon Road',
      team: 'Cheltenham Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Cheltenham_Town_FC_logo.png',
      capacity: 7066,
      latitude: 51.9062,
      longitude: -2.06021,
      league: 'EFL League Two'
   },
   {
      id: 37,
      stadium_name: 'B2net Stadium',
      team: 'Chesterfield',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/Chesterfield_FC_crest.svg',
      capacity: 10400,
      latitude: 53.2535,
      longitude: -1.4272,
      league: 'EFL League One'
   },
   {
      id: 38,
      stadium_name: 'Broadwood Stadium',
      team: 'Clyde',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Clyde_FC_logo.png',
      capacity: 8029,
      latitude: 55.9447,
      longitude: -4.0379,
      league: 'Other '
   },
   {
      id: 39,
      stadium_name: 'Weston Homes Community Stadium',
      team: 'Colchester United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/48/Colchester_United_FC_logo.svg',
      capacity: 10084,
      latitude: 51.9234,
      longitude: 0.897861,
      league: 'EFL League Two'
   },
   {
      id: 40,
      stadium_name: 'Ricoh Arena',
      team: 'Coventry City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/Coventry_City_FC_logo.svg',
      capacity: 32609,
      latitude: 52.4481,
      longitude: -1.49563,
      league: 'EFL League One'
   },
   {
      id: 41,
      stadium_name: 'Central Park',
      team: 'Cowdenbeath',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/33/Cowdenbeath_modern_logo.jpeg',
      capacity: 4370,
      latitude: 56.1088,
      longitude: -3.34717,
      league: 'Other '
   },
   {
      id: 42,
      stadium_name: 'Broadfield Stadium',
      team: 'Crawley Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Crawley_Town_FC_logo.png',
      capacity: 5996,
      latitude: 51.0996,
      longitude: -0.194579,
      league: 'EFL League Two'
   },
   {
      id: 43,
      stadium_name: 'Alexandra Stadium',
      team: 'Crewe Alexandra',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Crewe_Alexandra.svg',
      capacity: 10153,
      latitude: 53.0875,
      longitude: -2.43569,
      league: 'EFL League Two'
   },
   {
      id: 44,
      stadium_name: 'Selhurst Park',
      team: 'Crystal Palace',
      logo: 'http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png',
      capacity: 26309,
      latitude: 51.3983,
      longitude: -0.085455,
      league: 'Premier League'
   },
   {
      id: 45,
      stadium_name: 'Victoria Road',
      team: 'Dagenham and Redbridge',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Dagenham_%26_Redbridge_F.C._New_Logo.png',
      capacity: 6078,
      latitude: 51.5478,
      longitude: 0.159739,
      league: 'Other '
   },
   {
      id: 46,
      stadium_name: 'Pride Park',
      team: 'Derby County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Derby_County_crest.svg',
      capacity: 33597,
      latitude: 52.9149,
      longitude: -1.44727,
      league: 'EFL Championship'
   },
   {
      id: 47,
      stadium_name: 'Keepmoat Stadium',
      team: 'Doncaster Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/46/Doncaster_Rovers_FC.png',
      capacity: 15231,
      latitude: 53.5099,
      longitude: -1.11382,
      league: 'EFL League Two'
   },
   {
      id: 48,
      stadium_name: 'Dumbarton Football Stadium',
      team: 'Dumbarton',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Dumbarton_FC_logo.svg',
      capacity: 2025,
      latitude: 55.9384,
      longitude: -4.56162,
      league: 'Other '
   },
   {
      id: 49,
      stadium_name: 'Dens Park',
      team: 'Dundee',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Dundee1617badge.png',
      capacity: 11856,
      latitude: 56.4747,
      longitude: -2.97352,
      league: 'Scottish Premiership'
   },
   {
      id: 50,
      stadium_name: 'Tannadice Park',
      team: 'Dundee United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/DUFCcrest.png',
      capacity: 14209,
      latitude: 56.4748,
      longitude: -2.96902,
      league: 'Scottish Premiership'
   },
   {
      id: 51,
      stadium_name: 'East End Park',
      team: 'Dunfermline',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a0/DAFC_current_logo_2011_onwards_trans.png',
      capacity: 11380,
      latitude: 56.0756,
      longitude: -3.44196,
      league: 'Other '
   },
   {
      id: 52,
      stadium_name: 'Bayview Stadium',
      team: 'East Fife',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/65/East_Fife_FC_logo.svg',
      capacity: 2000,
      latitude: 56.1889,
      longitude: -2.99914,
      league: 'Other '
   },
   {
      id: 53,
      stadium_name: 'Borough Briggs',
      team: 'Elgin City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Elgin_City_FC_Badge.png',
      capacity: 4927,
      latitude: 57.6518,
      longitude: -3.3209,
      league: 'Other '
   },
   {
      id: 54,
      stadium_name: 'Wembley',
      team: 'England',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/38/England_crest_2009.svg',
      capacity: 90000,
      latitude: 51.5559,
      longitude: -0.279543,
      league: 'National'
   },
   {
      id: 55,
      stadium_name: 'Goodison Park',
      team: 'Everton',
      logo: 'http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg',
      capacity: 40157,
      latitude: 53.4387,
      longitude: -2.96619,
      league: 'Premier League'
   },
   {
      id: 56,
      stadium_name: 'St James Park, Exeter',
      team: 'Exeter City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/Exeter_City_FC.svg',
      capacity: 8541,
      latitude: 50.7307,
      longitude: -3.52109,
      league: 'EFL League Two'
   },
   {
      id: 57,
      stadium_name: 'Falkirk Stadium',
      team: 'Falkirk',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Falkirk_FC_logo.svg',
      capacity: 9200,
      latitude: 56.0053,
      longitude: -3.75262,
      league: 'Other '
   },
   {
      id: 58,
      stadium_name: 'Highbury Stadium',
      team: 'Fleetwood Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/64/Fleetwood_Town_FC.png',
      capacity: 5094,
      latitude: 53.9165,
      longitude: -3.02484,
      league: 'EFL League One'
   },
   {
      id: 59,
      stadium_name: 'Station Park',
      team: 'Forfar Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Forfar_Athletic_FC_logo.svg',
      capacity: 5177,
      latitude: 56.6523,
      longitude: -2.88492,
      league: 'Other '
   },
   {
      id: 60,
      stadium_name: 'Craven Cottage',
      team: 'Fulham',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg',
      capacity: 25700,
      latitude: 51.4749,
      longitude: -0.221619,
      league: 'EFL Championship'
   },
   {
      id: 61,
      stadium_name: 'Priestfield Stadium',
      team: 'Gillingham',
      logo:
         'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/FC_Gillingham_Logo.svg/788px-FC_Gillingham_Logo.svg.png',
      capacity: 11582,
      latitude: 51.3844,
      longitude: 0.560367,
      league: 'EFL League One'
   },
   {
      id: 62,
      stadium_name: 'Cappielow Park',
      team: 'Greenock Morton',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/db/Greenock_Morton_FC_logo.svg',
      capacity: 19612,
      latitude: 55.9414,
      longitude: -4.72719,
      league: 'Other '
   },
   {
      id: 63,
      stadium_name: 'New Douglas Park',
      team: 'Hamilton Academical',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Hamilton_Academical_FC_logo.svg',
      capacity: 6078,
      latitude: 55.7821,
      longitude: -4.058,
      league: 'Scottish Premiership'
   },
   {
      id: 64,
      stadium_name: 'Victoria Park',
      team: 'Hartlepool United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Hartlepool_United_FC.png',
      capacity: 7856,
      latitude: 54.6891,
      longitude: -1.21274,
      league: 'EFL League Two'
   },
   {
      id: 65,
      stadium_name: 'Tynecastle',
      team: 'Heart of Midlothian',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/61/Heart_of_Midlothian_FC_logo.svg',
      capacity: 17420,
      latitude: 55.9388,
      longitude: -3.2325,
      league: 'Scottish Premiership'
   },
   {
      id: 66,
      stadium_name: 'Edgar Street',
      team: 'Hereford United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/75/Hereford_United_FC.svg',
      capacity: 5300,
      latitude: 52.0607,
      longitude: -2.71774,
      league: 'Other '
   },
   {
      id: 67,
      stadium_name: 'Easter Road',
      team: 'Hibernian',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/37/Hibernian_FC_logo.svg',
      capacity: 20421,
      latitude: 55.9616,
      longitude: -3.16521,
      league: 'Scottish Premiership'
   },
   {
      id: 68,
      stadium_name: 'The Galpharm Stadium',
      team: 'Huddersfield Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f0/HuddersfieldTownCrest.png',
      capacity: 24500,
      latitude: 53.6543,
      longitude: -1.76837,
      league: 'EFL Championship'
   },
   {
      id: 69,
      stadium_name: 'KC Stadium',
      team: 'Hull City',
      logo: 'http://upload.wikimedia.org/wikipedia/de/a/a9/Hull_City_AFC.svg',
      capacity: 25586,
      latitude: 53.7465,
      longitude: -0.368009,
      league: 'Premier League'
   },
   {
      id: 70,
      stadium_name: 'The Caledonian Stadium',
      team: 'Inverness Caledonian Thistle',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/88/Inverness_Caledonian_Thistle.svg',
      capacity: 7918,
      latitude: 57.4951,
      longitude: -4.21751,
      league: 'Scottish Premiership'
   },
   {
      id: 71,
      stadium_name: 'Portman Road',
      team: 'Ipswich Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg',
      capacity: 30311,
      latitude: 52.0544,
      longitude: 1.14554,
      league: 'EFL Championship'
   },
   {
      id: 72,
      stadium_name: 'Rugby Park',
      team: 'Kilmarnock',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/KilmarnockLogo.svg',
      capacity: 18128,
      latitude: 55.6046,
      longitude: -4.50846,
      league: 'Scottish Premiership'
   },
   {
      id: 73,
      stadium_name: 'Elland Road',
      team: 'Leeds United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/05/Leeds_United_Logo.png',
      capacity: 37697,
      latitude: 53.7775,
      longitude: -1.57212,
      league: 'EFL Championship'
   },
   {
      id: 74,
      stadium_name: 'King Power Stadium',
      team: 'Leicester City',
      logo: 'http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png',
      capacity: 32262,
      latitude: 52.6203,
      longitude: -1.14217,
      league: 'Premier League'
   },
   {
      id: 75,
      stadium_name: 'Brisbane Road',
      team: 'Leyton Orient',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Leyton_Orient_FC.png',
      capacity: 9271,
      latitude: 51.5601,
      longitude: -0.012551,
      league: 'EFL League Two'
   },
   {
      id: 76,
      stadium_name: 'Anfield',
      team: 'Liverpool',
      logo: 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg',
      capacity: 45522,
      latitude: 53.4308,
      longitude: -2.96096,
      league: 'Premier League'
   },
   {
      id: 77,
      stadium_name: 'Almondvale Stadium',
      team: 'Livingston',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Livingston_FC_club_badge_new.png',
      capacity: 10122,
      latitude: 55.8864,
      longitude: -3.52207,
      league: 'Other '
   },
   {
      id: 78,
      stadium_name: 'Kenilworth Road',
      team: 'Luton Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/LutonTownFC2009.png',
      capacity: 10226,
      latitude: 51.8842,
      longitude: -0.43155,
      league: 'EFL League Two'
   },
   {
      id: 79,
      stadium_name: 'Moss Rose',
      team: 'Macclesfield Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/40/Macclesfield_Town_FC.svg',
      capacity: 6355,
      latitude: 53.2427,
      longitude: -2.127,
      league: 'Other '
   },
   {
      id: 80,
      stadium_name: 'Etihad Stadium',
      team: 'Manchester City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      capacity: 47805,
      latitude: 53.483,
      longitude: -2.20024,
      league: 'Premier League'
   },
   {
      id: 81,
      stadium_name: 'Old Trafford',
      team: 'Manchester United',
      logo: 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
      capacity: 75811,
      latitude: 53.4631,
      longitude: -2.29139,
      league: 'Premier League'
   },
   {
      id: 82,
      stadium_name: 'Field Mill',
      team: 'Mansfield Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Mansfield_Town_FC.svg',
      capacity: 9186,
      latitude: 53.1378,
      longitude: -1.2013,
      league: 'EFL League Two'
   },
   {
      id: 83,
      stadium_name: 'Riverside',
      team: 'Middlesbrough ',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg',
      capacity: 34988,
      latitude: 54.5781,
      longitude: -1.21776,
      league: 'Other '
   },
   {
      id: 84,
      stadium_name: 'The Den',
      team: 'Millwall',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/Millwall_FC_logo.png',
      capacity: 20146,
      latitude: 51.4859,
      longitude: -0.050743,
      league: 'EFL League One'
   },
   {
      id: 85,
      stadium_name: 'Stadiummk',
      team: 'MK Dons',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/MK_Dons.png',
      capacity: 22000,
      latitude: 52.0096,
      longitude: -0.733507,
      league: 'EFL League One'
   },
   {
      id: 86,
      stadium_name: 'Links Park',
      team: 'Montrose',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/99/Montrose_FC_logo.png',
      capacity: 3292,
      latitude: 56.714,
      longitude: -2.45902,
      league: 'Other '
   },
   {
      id: 87,
      stadium_name: 'Globe Arena',
      team: 'Morecambe',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Morecambe_FC_Badge.png',
      capacity: 6476,
      latitude: 54.0675,
      longitude: -2.84707,
      league: 'EFL League Two'
   },
   {
      id: 88,
      stadium_name: 'Fir Park',
      team: 'Motherwell',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Motherwell_FC_crest.svg',
      capacity: 13742,
      latitude: 55.7804,
      longitude: -3.9803,
      league: 'Scottish Premiership'
   },
   {
      id: 89,
      stadium_name: 'St James Park',
      team: 'Newcastle United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg',
      capacity: 52387,
      latitude: 54.9756,
      longitude: -1.62179,
      league: 'EFL Championship'
   },
   {
      id: 90,
      stadium_name: 'Rodney Parade',
      team: 'Newport County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Newport_County_crest.png',
      capacity: 7850,
      latitude: 51.5889,
      longitude: -2.98902,
      league: 'EFL League Two'
   },
   {
      id: 91,
      stadium_name: 'Sixfields Stadium',
      team: 'Northampton Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Northampton_Town_FC_logo.png',
      capacity: 7653,
      latitude: 52.2352,
      longitude: -0.933485,
      league: 'EFL League One'
   },
   {
      id: 92,
      stadium_name: 'Carrow Road',
      team: 'Norwich City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Norwich_City.svg',
      capacity: 27033,
      latitude: 52.6221,
      longitude: 1.30912,
      league: 'EFL Championship'
   },
   {
      id: 93,
      stadium_name: 'The City Ground',
      team: 'Nottingham Forest',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Nottingham_Forest_logo.svg',
      capacity: 30603,
      latitude: 52.9399,
      longitude: -1.13258,
      league: 'EFL Championship'
   },
   {
      id: 94,
      stadium_name: 'Meadow Lane',
      team: 'Notts County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/05/Notts_County_Logo.png',
      capacity: 20229,
      latitude: 52.9425,
      longitude: -1.13703,
      league: 'EFL League Two'
   },
   {
      id: 95,
      stadium_name: 'Boundary Park',
      team: 'Oldham Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Oldham_Athletic_new_badge.png',
      capacity: 10638,
      latitude: 53.5551,
      longitude: -2.12847,
      league: 'EFL League One'
   },
   {
      id: 96,
      stadium_name: 'Kassam Stadium ',
      team: 'Oxford United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Oxford_United_FC_logo.svg',
      capacity: 12500,
      latitude: 51.7164,
      longitude: -1.20775,
      league: 'EFL League One'
   },
   {
      id: 97,
      stadium_name: 'Firhill',
      team: 'Partick Thistle',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Partick_Thistle_FC_logo.svg',
      capacity: 13079,
      latitude: 55.8815,
      longitude: -4.26938,
      league: 'Scottish Premiership'
   },
   {
      id: 98,
      stadium_name: 'London Road',
      team: 'Peterborough United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Peterborough_United.svg',
      capacity: 15315,
      latitude: 52.5648,
      longitude: -0.240434,
      league: 'EFL League One'
   },
   {
      id: 99,
      stadium_name: 'Balmoor',
      team: 'Peterhead',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Peterheadbadge.png',
      capacity: 4000,
      latitude: 57.5112,
      longitude: -1.79599,
      league: 'Other '
   },
   {
      id: 100,
      stadium_name: 'Home Park',
      team: 'Plymouth Argyle',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Plymouth_Argyle_F.C._logo.svg',
      capacity: 16388,
      latitude: 50.3882,
      longitude: -4.15076,
      league: 'EFL League Two'
   },
   {
      id: 101,
      stadium_name: 'Vale Park',
      team: 'Port Vale',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Port_Vale_logo.svg',
      capacity: 19052,
      latitude: 53.05,
      longitude: -2.1926,
      league: 'EFL League One'
   },
   {
      id: 102,
      stadium_name: 'Fratton Park',
      team: 'Portsmouth',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Portsmouth_FC_crest.svg',
      capacity: 21100,
      latitude: 50.7964,
      longitude: -1.06389,
      league: 'EFL League Two'
   },
   {
      id: 103,
      stadium_name: 'Deepdale',
      team: 'Preston North End',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/PNE_FC.png',
      capacity: 24500,
      latitude: 53.772,
      longitude: -2.68832,
      league: 'EFL Championship'
   },
   {
      id: 104,
      stadium_name: 'Palmerston Park',
      team: 'Queen of the South',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Queen_of_the_South_FC_logo_New.png',
      capacity: 6412,
      latitude: 55.0703,
      longitude: -3.6246,
      league: 'Other '
   },
   {
      id: 105,
      stadium_name: 'Loftus Road',
      team: 'Queens Park Rangers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/31/Queens_Park_Rangers_crest.svg',
      capacity: 18360,
      latitude: 51.5093,
      longitude: -0.232204,
      league: 'EFL Championship'
   },
   {
      id: 106,
      stadium_name: "Stark's Park",
      team: 'Raith Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Raith_Rovers_F.C._Crest.png',
      capacity: 10104,
      latitude: 56.0999,
      longitude: -3.16851,
      league: 'Other '
   },
   {
      id: 107,
      stadium_name: 'Ibrox',
      team: 'Rangers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Rangers_FC.svg',
      capacity: 51082,
      latitude: 55.8529,
      longitude: -4.30962,
      league: 'Scottish Premiership'
   },
   {
      id: 108,
      stadium_name: 'Madjeski Stadium',
      team: 'Reading',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/11/Reading_FC.svg',
      capacity: 24161,
      latitude: 51.4222,
      longitude: -0.982777,
      league: 'EFL Championship'
   },
   {
      id: 109,
      stadium_name: 'Spotland Stadium',
      team: 'Rochdale',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Rochdale_badge.png',
      capacity: 10249,
      latitude: 53.6209,
      longitude: -2.17993,
      league: 'EFL League One'
   },
   {
      id: 110,
      stadium_name: 'Victoria Park, Dingwall',
      team: 'Ross County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/57/Ross_County_F.C._logo.png',
      capacity: 6310,
      latitude: 57.5959,
      longitude: -4.41898,
      league: 'Scottish Premiership'
   },
   {
      id: 111,
      stadium_name: 'New York Stadiumn',
      team: 'Rotherham United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Rotherham_United_FC.svg',
      capacity: 12021,
      latitude: 53.4281,
      longitude: -1.36172,
      league: 'EFL Championship'
   },
   {
      id: 112,
      stadium_name: 'Hampden Park',
      team: "Scotland, Queen's Park",
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/50/Scotland_national_football_team_logo_2014.svg',
      capacity: 52500,
      latitude: 55.8258,
      longitude: -4.25198,
      league: 'National'
   },
   {
      id: 113,
      stadium_name: 'Glanford Park',
      team: 'Scunthorpe United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/95/Scunthorpe_United_FC_logo.svg',
      capacity: 9088,
      latitude: 53.5867,
      longitude: -0.695244,
      league: 'EFL League One'
   },
   {
      id: 114,
      stadium_name: 'Bramall Lane',
      team: 'Sheffield United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg',
      capacity: 32702,
      latitude: 53.3703,
      longitude: -1.47083,
      league: 'EFL League One'
   },
   {
      id: 115,
      stadium_name: 'Hillsborough',
      team: 'Sheffield Wednesday',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/88/Sheffield_Wednesday_badge.svg',
      capacity: 39812,
      latitude: 53.4115,
      longitude: -1.50075,
      league: 'EFL Championship'
   },
   {
      id: 116,
      stadium_name: 'New Meadow',
      team: 'Shrewsbury Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Shrewsbury_Town_Badge_2015-.jpg',
      capacity: 9875,
      latitude: 52.6886,
      longitude: -2.74931,
      league: 'EFL League One'
   },
   {
      id: 117,
      stadium_name: "St Mary's Stadium",
      team: 'Southampton',
      logo: 'http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg',
      capacity: 32689,
      latitude: 50.9058,
      longitude: -1.39114,
      league: 'Premier League'
   },
   {
      id: 118,
      stadium_name: 'Roots Hall',
      team: 'Southend United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/Southend_United.svg',
      capacity: 12392,
      latitude: 51.5491,
      longitude: 0.701572,
      league: 'EFL League One'
   },
   {
      id: 119,
      stadium_name: 'McDiarmid Park',
      team: 'St Johnstone',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/StJohnstoneFC_crest_new.png',
      capacity: 10673,
      latitude: 56.4099,
      longitude: -3.47684,
      league: 'Scottish Premiership'
   },
   {
      id: 120,
      stadium_name: 'St Mirren Park',
      team: 'St Mirren',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/St_Mirren_FC_logo.svg',
      capacity: 8023,
      latitude: 55.8529,
      longitude: -4.42879,
      league: 'Scottish Premiership'
   },
   {
      id: 121,
      stadium_name: 'Ochilview Park',
      team: 'Stenhousemuir, East Stirlingshire',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Stenhousemuir.svg',
      capacity: 3776,
      latitude: 56.0282,
      longitude: -3.81449,
      league: 'Other '
   },
   {
      id: 122,
      stadium_name: 'The Lamex Stadium',
      team: 'Stevenage Borough',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Stevenage_Football_Club.png',
      capacity: 6722,
      latitude: 51.8898,
      longitude: -0.193664,
      league: 'EFL League Two'
   },
   {
      id: 123,
      stadium_name: 'Forthbank Stadium',
      team: 'Stirling Albion',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Stirling_Albion_FC_logo.png',
      capacity: 3808,
      latitude: 56.1191,
      longitude: -3.91194,
      league: 'Other '
   },
   {
      id: 124,
      stadium_name: 'Britannia Stadium',
      team: 'Stoke City',
      logo: 'http://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg',
      capacity: 27902,
      latitude: 52.9884,
      longitude: -2.17542,
      league: 'Premier League'
   },
   {
      id: 125,
      stadium_name: 'Stair Park',
      team: 'Stranraer',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Stranraer_FC_logo.svg',
      capacity: 5600,
      latitude: 54.9022,
      longitude: -5.01249,
      league: 'Other '
   },
   {
      id: 126,
      stadium_name: 'Stadium of Light',
      team: 'Sunderland',
      logo: 'http://upload.wikimedia.org/wikipedia/de/6/60/AFC_Sunderland.svg',
      capacity: 49000,
      latitude: 54.9146,
      longitude: -1.38837,
      league: 'Premier League'
   },
   {
      id: 127,
      stadium_name: 'Liberty Stadium',
      team: 'Swansea City',
      logo: 'http://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg',
      capacity: 20532,
      latitude: 51.6428,
      longitude: -3.93473,
      league: 'Premier League'
   },
   {
      id: 128,
      stadium_name: 'The County Ground',
      team: 'Swindon Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Swindon_Town_FC.svg',
      capacity: 15728,
      latitude: 51.5645,
      longitude: -1.77107,
      league: 'EFL League One'
   },
   {
      id: 129,
      stadium_name: 'Plainmoor',
      team: 'Torquay United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Torquay_United_FC.svg',
      capacity: 6104,
      latitude: 50.4764,
      longitude: -3.52382,
      league: 'Other '
   },
   {
      id: 130,
      stadium_name: 'White Hart Lane',
      team: 'Tottenham Hotspur',
      logo: 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg',
      capacity: 36230,
      latitude: 51.6033,
      longitude: -0.065684,
      league: 'Premier League'
   },
   {
      id: 131,
      stadium_name: 'Prenton Park',
      team: 'Tranmere Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Tranmere_Rovers_FC_logo.svg',
      capacity: 16567,
      latitude: 53.3738,
      longitude: -3.03269,
      league: 'Other '
   },
   {
      id: 132,
      stadium_name: 'Millennium Stadium',
      team: 'Wales',
      logo: 'http://www.faw.cymru/themes/faw/images/global/Crest.svg',
      capacity: 74500,
      latitude: 51.4782,
      longitude: -3.18281,
      league: 'National'
   },
   {
      id: 133,
      stadium_name: 'Bescot Stadium',
      team: 'Walsall',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Walsall_FC.svg',
      capacity: 11300,
      latitude: 52.5655,
      longitude: -1.99053,
      league: 'EFL League One'
   },
   {
      id: 134,
      stadium_name: 'Vicarage Road',
      team: 'Watford',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg',
      capacity: 17477,
      latitude: 51.6498,
      longitude: -0.401569,
      league: 'Premier League'
   },
   {
      id: 135,
      stadium_name: 'The Hawthorns',
      team: 'West Bromwich Albion',
      logo: 'http://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg',
      capacity: 26272,
      latitude: 52.509,
      longitude: -1.96418,
      league: 'Premier League'
   },
   {
      id: 136,
      stadium_name: 'Olympic Stadium',
      team: 'West Ham',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg',
      capacity: 60000,
      latitude: 51.5383,
      longitude: -0.016587,
      league: 'Other '
   },
   {
      id: 137,
      stadium_name: 'DW Stadium',
      team: 'Wigan Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Wigan_Athletic.svg',
      capacity: 25138,
      latitude: 53.5477,
      longitude: -2.65415,
      league: 'EFL Championship'
   },
   {
      id: 138,
      stadium_name: 'Molineux',
      team: 'Wolverhampton Wanderers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg',
      capacity: 27828,
      latitude: 52.5904,
      longitude: -2.13061,
      league: 'EFL Championship'
   },
   {
      id: 139,
      stadium_name: 'Adams Park',
      team: 'Wycombe Wanderers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Wycombe_Wanderers_FC_logo.svg',
      capacity: 10284,
      latitude: 51.6306,
      longitude: -0.800299,
      league: 'EFL League Two'
   },
   {
      id: 140,
      stadium_name: 'Huish Park',
      team: 'Yeovil Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yeovil_Town_FC_logo.svg',
      capacity: 9665,
      latitude: 50.9503,
      longitude: -2.67383,
      league: 'EFL League Two'
   },
   {
      id: 141,
      stadium_name: 'Bootham Crescent',
      team: 'York City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/York_City_FC.svg',
      capacity: 7872,
      latitude: 53.9695,
      longitude: -1.08833,
      league: 'Other '
   }
];

var myData = [
   {
      id: 1,
      stadium_name: 'Pittodrie',
      team: 'Aberdeen',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Aberdeen_FC_logo.svg',
      capacity: 22199,
      latitude: 57.1593,
      longitude: -2.08872,
      league: 'Scottish Premiership'
   },
   {
      id: 2,
      stadium_name: 'Crown Ground',
      team: 'Accrington Stanley',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/63/Accstanley.png',
      capacity: 5057,
      latitude: 53.7654,
      longitude: -2.37106,
      league: 'EFL League Two'
   },
   {
      id: 3,
      stadium_name: 'Kingsmeadow',
      team: 'AFC Wimbledon, Kingstonian',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1c/AFC_Wimbledon.svg',
      capacity: 4720,
      latitude: 51.4051,
      longitude: -0.281984,
      league: 'EFL League One'
   },
   {
      id: 4,
      stadium_name: 'New Broomfield',
      team: 'Airdrie United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Airdrieonians_FC_logo.png',
      capacity: 10172,
      latitude: 55.8601,
      longitude: -3.95997,
      league: 'Other '
   },
   {
      id: 5,
      stadium_name: 'Cliftonhill',
      team: 'Albion Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Albion_Rovers_FC_logo.svg',
      capacity: 2496,
      latitude: 55.8602,
      longitude: -4.01145,
      league: 'Other '
   },
   {
      id: 6,
      stadium_name: 'Recreation Ground',
      team: 'Aldershot Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1e/Aldershot_Crest.png',
      capacity: 7100,
      latitude: 51.2484,
      longitude: -0.754869,
      league: 'Other '
   },
   {
      id: 7,
      stadium_name: 'Recreation Park',
      team: 'Alloa Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c3/Alloa_Athletic_FC_logo.png',
      capacity: 3412,
      latitude: 56.1166,
      longitude: -3.77865,
      league: 'Other '
   },
   {
      id: 8,
      stadium_name: 'Galabank',
      team: 'Annan Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/39/Annan_Athletic_FC_logo.png',
      capacity: 2007,
      latitude: 54.9948,
      longitude: -3.2612,
      league: 'Other '
   },
   {
      id: 9,
      stadium_name: 'Gayfield Park',
      team: 'Arbroath',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/60/Arbroath_FC_logo.svg',
      capacity: 5940,
      latitude: 56.5523,
      longitude: -2.5914,
      league: 'Other '
   },
   {
      id: 10,
      stadium_name: 'Emirates Stadium',
      team: 'Arsenal',
      logo: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
      capacity: 60361,
      latitude: 51.5549,
      longitude: -0.108436,
      league: 'Premier League'
   },
   {
      id: 11,
      stadium_name: 'Villa Park',
      team: 'Aston Villa',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/15/Aston_Villa.svg',
      capacity: 42788,
      latitude: 52.5092,
      longitude: -1.88508,
      league: 'EFL Championship'
   },
   {
      id: 12,
      stadium_name: 'Somerset Park',
      team: 'Ayr United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/6b/Ayr_United_FC-2009_2011_Centenary_Logo.png',
      capacity: 10243,
      latitude: 55.4697,
      longitude: -4.61996,
      league: 'Other '
   },
   {
      id: 13,
      stadium_name: 'Underhill Stadium',
      team: 'Barnet',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a2/Barnet_FC.svg',
      capacity: 5260,
      latitude: 51.6464,
      longitude: -0.191789,
      league: 'EFL League Two'
   },
   {
      id: 14,
      stadium_name: 'Oakwell',
      team: 'Barnsley',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Barnsley_FC.svg',
      capacity: 23009,
      latitude: 53.5524,
      longitude: -1.46756,
      league: 'EFL Championship'
   },
   {
      id: 15,
      stadium_name: 'Shielfield Park',
      team: 'Berwick Rangers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/BerwickRangersLarge.png',
      capacity: 4131,
      latitude: 55.76,
      longitude: -2.01599,
      league: 'Other '
   },
   {
      id: 16,
      stadium_name: 'St Andrews',
      team: 'Birmingham City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/68/Birmingham_City_FC_logo.svg',
      capacity: 30009,
      latitude: 52.4756,
      longitude: -1.86824,
      league: 'EFL Championship'
   },
   {
      id: 17,
      stadium_name: 'Ewood Park',
      team: 'Blackburn Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Blackburn_Rovers.svg',
      capacity: 31154,
      latitude: 53.7286,
      longitude: -2.48937,
      league: 'EFL Championship'
   },
   {
      id: 18,
      stadium_name: 'Bloomfield Road',
      team: 'Blackpool',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Blackpool_FC_logo.svg',
      capacity: 16220,
      latitude: 53.8046,
      longitude: -3.04834,
      league: 'EFL League Two'
   },
   {
      id: 19,
      stadium_name: 'Macron Stadium',
      team: 'Bolton Wanderers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/82/Bolton_Wanderers_FC_logo.svg',
      capacity: 28723,
      latitude: 53.5805,
      longitude: -2.53571,
      league: 'EFL League One'
   },
   {
      id: 20,
      stadium_name: 'Seward Stadium',
      team: 'Bournemouth',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/AFC_Bournemouth.svg',
      capacity: 10700,
      latitude: 50.7352,
      longitude: -1.83839,
      league: 'Premier League'
   },
   {
      id: 21,
      stadium_name: 'Valley Parade',
      team: 'Bradford City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/Bradford_City_AFC.png',
      capacity: 25136,
      latitude: 53.8042,
      longitude: -1.75902,
      league: 'EFL League One'
   },
   {
      id: 22,
      stadium_name: 'Glebe Park',
      team: 'Brechin City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/01/Brechin_City_FC_logo.svg',
      capacity: 3960,
      latitude: 56.7353,
      longitude: -2.6565,
      league: 'Other '
   },
   {
      id: 23,
      stadium_name: 'Griffin Park',
      team: 'Brentford',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Brentford_FC_logo.svg',
      capacity: 12763,
      latitude: 51.4882,
      longitude: -0.302621,
      league: 'EFL Championship'
   },
   {
      id: 24,
      stadium_name: 'Amex Stadium',
      team: 'Brighton and Hove Albion',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg',
      capacity: 22374,
      latitude: 50.8609,
      longitude: -0.08014,
      league: 'EFL Championship'
   },
   {
      id: 25,
      stadium_name: 'Ashton Gate',
      team: 'Bristol City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/00/Bristol_City_FC.svg',
      capacity: 21497,
      latitude: 51.44,
      longitude: -2.62021,
      league: 'EFL Championship'
   },
   {
      id: 26,
      stadium_name: 'Memorial Stadium',
      team: 'Bristol Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/Bristol_Rovers_F.C._logo.svg',
      capacity: 12011,
      latitude: 51.4862,
      longitude: -2.58315,
      league: 'EFL League One'
   },
   {
      id: 27,
      stadium_name: 'Turf Moor',
      team: 'Burnley',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png',
      capacity: 22546,
      latitude: 53.7888,
      longitude: -2.23018,
      league: 'Premier League'
   },
   {
      id: 28,
      stadium_name: 'Pirelli Stadium',
      team: 'Burton Albion',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/53/Burton_Albion_FC_logo.svg',
      capacity: 6912,
      latitude: 52.8219,
      longitude: -1.62708,
      league: 'EFL Championship'
   },
   {
      id: 29,
      stadium_name: 'Gigg Lane',
      team: 'Bury',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b7/Bury_FC.svg',
      capacity: 11840,
      latitude: 53.5805,
      longitude: -2.29487,
      league: 'EFL League One'
   },
   {
      id: 30,
      stadium_name: 'Abbey Stadium',
      team: 'Cambridge United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8f/Cambridge_United_FC.svg',
      capacity: 10847,
      latitude: 52.2128,
      longitude: 0.154298,
      league: 'EFL League Two'
   },
   {
      id: 31,
      stadium_name: 'Cardiff City Stadium',
      team: 'Cardiff City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg',
      capacity: 26828,
      latitude: 51.4729,
      longitude: -3.20413,
      league: 'EFL Championship'
   },
   {
      id: 32,
      stadium_name: 'Brunton Park',
      team: 'Carlisle United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/63/Carl_Badge.png',
      capacity: 18202,
      latitude: 54.8955,
      longitude: -2.91365,
      league: 'EFL League Two'
   },
   {
      id: 33,
      stadium_name: 'Celtic Park',
      team: 'Celtic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg',
      capacity: 60832,
      latitude: 55.8497,
      longitude: -4.20561,
      league: 'Scottish Premiership'
   },
   {
      id: 34,
      stadium_name: 'The Valley',
      team: 'Charlton Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5b/Charlton_Athletic.svg',
      capacity: 27111,
      latitude: 51.4865,
      longitude: 0.036757,
      league: 'EFL League One'
   },
   {
      id: 35,
      stadium_name: 'Stamford Bridge',
      team: 'Chelsea',
      logo: 'http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg',
      capacity: 41837,
      latitude: 51.4816,
      longitude: -0.191034,
      league: 'Premier League'
   },
   {
      id: 36,
      stadium_name: 'Whaddon Road',
      team: 'Cheltenham Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Cheltenham_Town_FC_logo.png',
      capacity: 7066,
      latitude: 51.9062,
      longitude: -2.06021,
      league: 'EFL League Two'
   },
   {
      id: 37,
      stadium_name: 'B2net Stadium',
      team: 'Chesterfield',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/Chesterfield_FC_crest.svg',
      capacity: 10400,
      latitude: 53.2535,
      longitude: -1.4272,
      league: 'EFL League One'
   },
   {
      id: 38,
      stadium_name: 'Broadwood Stadium',
      team: 'Clyde',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/e7/Clyde_FC_logo.png',
      capacity: 8029,
      latitude: 55.9447,
      longitude: -4.0379,
      league: 'Other '
   },
   {
      id: 39,
      stadium_name: 'Weston Homes Community Stadium',
      team: 'Colchester United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/48/Colchester_United_FC_logo.svg',
      capacity: 10084,
      latitude: 51.9234,
      longitude: 0.897861,
      league: 'EFL League Two'
   },
   {
      id: 40,
      stadium_name: 'Ricoh Arena',
      team: 'Coventry City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/94/Coventry_City_FC_logo.svg',
      capacity: 32609,
      latitude: 52.4481,
      longitude: -1.49563,
      league: 'EFL League One'
   },
   {
      id: 41,
      stadium_name: 'Central Park',
      team: 'Cowdenbeath',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/33/Cowdenbeath_modern_logo.jpeg',
      capacity: 4370,
      latitude: 56.1088,
      longitude: -3.34717,
      league: 'Other '
   },
   {
      id: 42,
      stadium_name: 'Broadfield Stadium',
      team: 'Crawley Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Crawley_Town_FC_logo.png',
      capacity: 5996,
      latitude: 51.0996,
      longitude: -0.194579,
      league: 'EFL League Two'
   },
   {
      id: 43,
      stadium_name: 'Alexandra Stadium',
      team: 'Crewe Alexandra',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/9d/Crewe_Alexandra.svg',
      capacity: 10153,
      latitude: 53.0875,
      longitude: -2.43569,
      league: 'EFL League Two'
   },
   {
      id: 44,
      stadium_name: 'Selhurst Park',
      team: 'Crystal Palace',
      logo: 'http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png',
      capacity: 26309,
      latitude: 51.3983,
      longitude: -0.085455,
      league: 'Premier League'
   },
   {
      id: 45,
      stadium_name: 'Victoria Road',
      team: 'Dagenham and Redbridge',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1a/Dagenham_%26_Redbridge_F.C._New_Logo.png',
      capacity: 6078,
      latitude: 51.5478,
      longitude: 0.159739,
      league: 'Other '
   },
   {
      id: 46,
      stadium_name: 'Pride Park',
      team: 'Derby County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/4a/Derby_County_crest.svg',
      capacity: 33597,
      latitude: 52.9149,
      longitude: -1.44727,
      league: 'EFL Championship'
   },
   {
      id: 47,
      stadium_name: 'Keepmoat Stadium',
      team: 'Doncaster Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/46/Doncaster_Rovers_FC.png',
      capacity: 15231,
      latitude: 53.5099,
      longitude: -1.11382,
      league: 'EFL League Two'
   },
   {
      id: 48,
      stadium_name: 'Dumbarton Football Stadium',
      team: 'Dumbarton',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/6d/Dumbarton_FC_logo.svg',
      capacity: 2025,
      latitude: 55.9384,
      longitude: -4.56162,
      league: 'Other '
   },
   {
      id: 49,
      stadium_name: 'Dens Park',
      team: 'Dundee',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Dundee1617badge.png',
      capacity: 11856,
      latitude: 56.4747,
      longitude: -2.97352,
      league: 'Scottish Premiership'
   },
   {
      id: 50,
      stadium_name: 'Tannadice Park',
      team: 'Dundee United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f4/DUFCcrest.png',
      capacity: 14209,
      latitude: 56.4748,
      longitude: -2.96902,
      league: 'Scottish Premiership'
   },
   {
      id: 51,
      stadium_name: 'East End Park',
      team: 'Dunfermline',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a0/DAFC_current_logo_2011_onwards_trans.png',
      capacity: 11380,
      latitude: 56.0756,
      longitude: -3.44196,
      league: 'Other '
   },
   {
      id: 52,
      stadium_name: 'Bayview Stadium',
      team: 'East Fife',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/65/East_Fife_FC_logo.svg',
      capacity: 2000,
      latitude: 56.1889,
      longitude: -2.99914,
      league: 'Other '
   },
   {
      id: 53,
      stadium_name: 'Borough Briggs',
      team: 'Elgin City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c9/Elgin_City_FC_Badge.png',
      capacity: 4927,
      latitude: 57.6518,
      longitude: -3.3209,
      league: 'Other '
   },
   {
      id: 54,
      stadium_name: 'Wembley',
      team: 'England',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/38/England_crest_2009.svg',
      capacity: 90000,
      latitude: 51.5559,
      longitude: -0.279543,
      league: 'National'
   },
   {
      id: 55,
      stadium_name: 'Goodison Park',
      team: 'Everton',
      logo: 'http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg',
      capacity: 40157,
      latitude: 53.4387,
      longitude: -2.96619,
      league: 'Premier League'
   },
   {
      id: 56,
      stadium_name: 'St James Park, Exeter',
      team: 'Exeter City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/Exeter_City_FC.svg',
      capacity: 8541,
      latitude: 50.7307,
      longitude: -3.52109,
      league: 'EFL League Two'
   },
   {
      id: 57,
      stadium_name: 'Falkirk Stadium',
      team: 'Falkirk',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Falkirk_FC_logo.svg',
      capacity: 9200,
      latitude: 56.0053,
      longitude: -3.75262,
      league: 'Other '
   },
   {
      id: 58,
      stadium_name: 'Highbury Stadium',
      team: 'Fleetwood Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/64/Fleetwood_Town_FC.png',
      capacity: 5094,
      latitude: 53.9165,
      longitude: -3.02484,
      league: 'EFL League One'
   },
   {
      id: 59,
      stadium_name: 'Station Park',
      team: 'Forfar Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Forfar_Athletic_FC_logo.svg',
      capacity: 5177,
      latitude: 56.6523,
      longitude: -2.88492,
      league: 'Other '
   },
   {
      id: 60,
      stadium_name: 'Craven Cottage',
      team: 'Fulham',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg',
      capacity: 25700,
      latitude: 51.4749,
      longitude: -0.221619,
      league: 'EFL Championship'
   },
   {
      id: 61,
      stadium_name: 'Priestfield Stadium',
      team: 'Gillingham',
      logo:
         'https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/FC_Gillingham_Logo.svg/788px-FC_Gillingham_Logo.svg.png',
      capacity: 11582,
      latitude: 51.3844,
      longitude: 0.560367,
      league: 'EFL League One'
   },
   {
      id: 62,
      stadium_name: 'Cappielow Park',
      team: 'Greenock Morton',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/db/Greenock_Morton_FC_logo.svg',
      capacity: 19612,
      latitude: 55.9414,
      longitude: -4.72719,
      league: 'Other '
   },
   {
      id: 63,
      stadium_name: 'New Douglas Park',
      team: 'Hamilton Academical',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Hamilton_Academical_FC_logo.svg',
      capacity: 6078,
      latitude: 55.7821,
      longitude: -4.058,
      league: 'Scottish Premiership'
   },
   {
      id: 64,
      stadium_name: 'Victoria Park',
      team: 'Hartlepool United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c5/Hartlepool_United_FC.png',
      capacity: 7856,
      latitude: 54.6891,
      longitude: -1.21274,
      league: 'EFL League Two'
   },
   {
      id: 65,
      stadium_name: 'Tynecastle',
      team: 'Heart of Midlothian',
      logo: 'https://upload.wikimedia.org/wikipedia/en/6/61/Heart_of_Midlothian_FC_logo.svg',
      capacity: 17420,
      latitude: 55.9388,
      longitude: -3.2325,
      league: 'Scottish Premiership'
   },
   {
      id: 66,
      stadium_name: 'Edgar Street',
      team: 'Hereford United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/75/Hereford_United_FC.svg',
      capacity: 5300,
      latitude: 52.0607,
      longitude: -2.71774,
      league: 'Other '
   },
   {
      id: 67,
      stadium_name: 'Easter Road',
      team: 'Hibernian',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/37/Hibernian_FC_logo.svg',
      capacity: 20421,
      latitude: 55.9616,
      longitude: -3.16521,
      league: 'Scottish Premiership'
   },
   {
      id: 68,
      stadium_name: 'The Galpharm Stadium',
      team: 'Huddersfield Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f0/HuddersfieldTownCrest.png',
      capacity: 24500,
      latitude: 53.6543,
      longitude: -1.76837,
      league: 'EFL Championship'
   },
   {
      id: 69,
      stadium_name: 'KC Stadium',
      team: 'Hull City',
      logo: 'http://upload.wikimedia.org/wikipedia/de/a/a9/Hull_City_AFC.svg',
      capacity: 25586,
      latitude: 53.7465,
      longitude: -0.368009,
      league: 'Premier League'
   },
   {
      id: 70,
      stadium_name: 'The Caledonian Stadium',
      team: 'Inverness Caledonian Thistle',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/88/Inverness_Caledonian_Thistle.svg',
      capacity: 7918,
      latitude: 57.4951,
      longitude: -4.21751,
      league: 'Scottish Premiership'
   },
   {
      id: 71,
      stadium_name: 'Portman Road',
      team: 'Ipswich Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg',
      capacity: 30311,
      latitude: 52.0544,
      longitude: 1.14554,
      league: 'EFL Championship'
   },
   {
      id: 72,
      stadium_name: 'Rugby Park',
      team: 'Kilmarnock',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/KilmarnockLogo.svg',
      capacity: 18128,
      latitude: 55.6046,
      longitude: -4.50846,
      league: 'Scottish Premiership'
   },
   {
      id: 73,
      stadium_name: 'Elland Road',
      team: 'Leeds United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/05/Leeds_United_Logo.png',
      capacity: 37697,
      latitude: 53.7775,
      longitude: -1.57212,
      league: 'EFL Championship'
   },
   {
      id: 74,
      stadium_name: 'King Power Stadium',
      team: 'Leicester City',
      logo: 'http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png',
      capacity: 32262,
      latitude: 52.6203,
      longitude: -1.14217,
      league: 'Premier League'
   },
   {
      id: 75,
      stadium_name: 'Brisbane Road',
      team: 'Leyton Orient',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Leyton_Orient_FC.png',
      capacity: 9271,
      latitude: 51.5601,
      longitude: -0.012551,
      league: 'EFL League Two'
   },
   {
      id: 76,
      stadium_name: 'Anfield',
      team: 'Liverpool',
      logo: 'http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg',
      capacity: 45522,
      latitude: 53.4308,
      longitude: -2.96096,
      league: 'Premier League'
   },
   {
      id: 77,
      stadium_name: 'Almondvale Stadium',
      team: 'Livingston',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f8/Livingston_FC_club_badge_new.png',
      capacity: 10122,
      latitude: 55.8864,
      longitude: -3.52207,
      league: 'Other '
   },
   {
      id: 78,
      stadium_name: 'Kenilworth Road',
      team: 'Luton Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8b/LutonTownFC2009.png',
      capacity: 10226,
      latitude: 51.8842,
      longitude: -0.43155,
      league: 'EFL League Two'
   },
   {
      id: 79,
      stadium_name: 'Moss Rose',
      team: 'Macclesfield Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/40/Macclesfield_Town_FC.svg',
      capacity: 6355,
      latitude: 53.2427,
      longitude: -2.127,
      league: 'Other '
   },
   {
      id: 80,
      stadium_name: 'Etihad Stadium',
      team: 'Manchester City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      capacity: 47805,
      latitude: 53.483,
      longitude: -2.20024,
      league: 'Premier League'
   },
   {
      id: 81,
      stadium_name: 'Old Trafford',
      team: 'Manchester United',
      logo: 'http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg',
      capacity: 75811,
      latitude: 53.4631,
      longitude: -2.29139,
      league: 'Premier League'
   },
   {
      id: 82,
      stadium_name: 'Field Mill',
      team: 'Mansfield Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/7d/Mansfield_Town_FC.svg',
      capacity: 9186,
      latitude: 53.1378,
      longitude: -1.2013,
      league: 'EFL League Two'
   },
   {
      id: 83,
      stadium_name: 'Riverside',
      team: 'Middlesbrough ',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg',
      capacity: 34988,
      latitude: 54.5781,
      longitude: -1.21776,
      league: 'Other '
   },
   {
      id: 84,
      stadium_name: 'The Den',
      team: 'Millwall',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/Millwall_FC_logo.png',
      capacity: 20146,
      latitude: 51.4859,
      longitude: -0.050743,
      league: 'EFL League One'
   },
   {
      id: 85,
      stadium_name: 'Stadiummk',
      team: 'MK Dons',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/bf/MK_Dons.png',
      capacity: 22000,
      latitude: 52.0096,
      longitude: -0.733507,
      league: 'EFL League One'
   },
   {
      id: 86,
      stadium_name: 'Links Park',
      team: 'Montrose',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/99/Montrose_FC_logo.png',
      capacity: 3292,
      latitude: 56.714,
      longitude: -2.45902,
      league: 'Other '
   },
   {
      id: 87,
      stadium_name: 'Globe Arena',
      team: 'Morecambe',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f1/Morecambe_FC_Badge.png',
      capacity: 6476,
      latitude: 54.0675,
      longitude: -2.84707,
      league: 'EFL League Two'
   },
   {
      id: 88,
      stadium_name: 'Fir Park',
      team: 'Motherwell',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Motherwell_FC_crest.svg',
      capacity: 13742,
      latitude: 55.7804,
      longitude: -3.9803,
      league: 'Scottish Premiership'
   },
   {
      id: 89,
      stadium_name: 'St James Park',
      team: 'Newcastle United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg',
      capacity: 52387,
      latitude: 54.9756,
      longitude: -1.62179,
      league: 'EFL Championship'
   },
   {
      id: 90,
      stadium_name: 'Rodney Parade',
      team: 'Newport County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b0/Newport_County_crest.png',
      capacity: 7850,
      latitude: 51.5889,
      longitude: -2.98902,
      league: 'EFL League Two'
   },
   {
      id: 91,
      stadium_name: 'Sixfields Stadium',
      team: 'Northampton Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Northampton_Town_FC_logo.png',
      capacity: 7653,
      latitude: 52.2352,
      longitude: -0.933485,
      league: 'EFL League One'
   },
   {
      id: 92,
      stadium_name: 'Carrow Road',
      team: 'Norwich City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/8c/Norwich_City.svg',
      capacity: 27033,
      latitude: 52.6221,
      longitude: 1.30912,
      league: 'EFL Championship'
   },
   {
      id: 93,
      stadium_name: 'The City Ground',
      team: 'Nottingham Forest',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d2/Nottingham_Forest_logo.svg',
      capacity: 30603,
      latitude: 52.9399,
      longitude: -1.13258,
      league: 'EFL Championship'
   },
   {
      id: 94,
      stadium_name: 'Meadow Lane',
      team: 'Notts County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/0/05/Notts_County_Logo.png',
      capacity: 20229,
      latitude: 52.9425,
      longitude: -1.13703,
      league: 'EFL League Two'
   },
   {
      id: 95,
      stadium_name: 'Boundary Park',
      team: 'Oldham Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/Oldham_Athletic_new_badge.png',
      capacity: 10638,
      latitude: 53.5551,
      longitude: -2.12847,
      league: 'EFL League One'
   },
   {
      id: 96,
      stadium_name: 'Kassam Stadium ',
      team: 'Oxford United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/3e/Oxford_United_FC_logo.svg',
      capacity: 12500,
      latitude: 51.7164,
      longitude: -1.20775,
      league: 'EFL League One'
   },
   {
      id: 97,
      stadium_name: 'Firhill',
      team: 'Partick Thistle',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Partick_Thistle_FC_logo.svg',
      capacity: 13079,
      latitude: 55.8815,
      longitude: -4.26938,
      league: 'Scottish Premiership'
   },
   {
      id: 98,
      stadium_name: 'London Road',
      team: 'Peterborough United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d4/Peterborough_United.svg',
      capacity: 15315,
      latitude: 52.5648,
      longitude: -0.240434,
      league: 'EFL League One'
   },
   {
      id: 99,
      stadium_name: 'Balmoor',
      team: 'Peterhead',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Peterheadbadge.png',
      capacity: 4000,
      latitude: 57.5112,
      longitude: -1.79599,
      league: 'Other '
   },
   {
      id: 100,
      stadium_name: 'Home Park',
      team: 'Plymouth Argyle',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a8/Plymouth_Argyle_F.C._logo.svg',
      capacity: 16388,
      latitude: 50.3882,
      longitude: -4.15076,
      league: 'EFL League Two'
   },
   {
      id: 101,
      stadium_name: 'Vale Park',
      team: 'Port Vale',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Port_Vale_logo.svg',
      capacity: 19052,
      latitude: 53.05,
      longitude: -2.1926,
      league: 'EFL League One'
   },
   {
      id: 102,
      stadium_name: 'Fratton Park',
      team: 'Portsmouth',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/3c/Portsmouth_FC_crest.svg',
      capacity: 21100,
      latitude: 50.7964,
      longitude: -1.06389,
      league: 'EFL League Two'
   },
   {
      id: 103,
      stadium_name: 'Deepdale',
      team: 'Preston North End',
      logo: 'https://upload.wikimedia.org/wikipedia/en/2/21/PNE_FC.png',
      capacity: 24500,
      latitude: 53.772,
      longitude: -2.68832,
      league: 'EFL Championship'
   },
   {
      id: 104,
      stadium_name: 'Palmerston Park',
      team: 'Queen of the South',
      logo: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Queen_of_the_South_FC_logo_New.png',
      capacity: 6412,
      latitude: 55.0703,
      longitude: -3.6246,
      league: 'Other '
   },
   {
      id: 105,
      stadium_name: 'Loftus Road',
      team: 'Queens Park Rangers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/31/Queens_Park_Rangers_crest.svg',
      capacity: 18360,
      latitude: 51.5093,
      longitude: -0.232204,
      league: 'EFL Championship'
   },
   {
      id: 106,
      stadium_name: "Stark's Park",
      team: 'Raith Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Raith_Rovers_F.C._Crest.png',
      capacity: 10104,
      latitude: 56.0999,
      longitude: -3.16851,
      league: 'Other '
   },
   {
      id: 107,
      stadium_name: 'Ibrox',
      team: 'Rangers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Rangers_FC.svg',
      capacity: 51082,
      latitude: 55.8529,
      longitude: -4.30962,
      league: 'Scottish Premiership'
   },
   {
      id: 108,
      stadium_name: 'Madjeski Stadium',
      team: 'Reading',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/11/Reading_FC.svg',
      capacity: 24161,
      latitude: 51.4222,
      longitude: -0.982777,
      league: 'EFL Championship'
   },
   {
      id: 109,
      stadium_name: 'Spotland Stadium',
      team: 'Rochdale',
      logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Rochdale_badge.png',
      capacity: 10249,
      latitude: 53.6209,
      longitude: -2.17993,
      league: 'EFL League One'
   },
   {
      id: 110,
      stadium_name: 'Victoria Park, Dingwall',
      team: 'Ross County',
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/57/Ross_County_F.C._logo.png',
      capacity: 6310,
      latitude: 57.5959,
      longitude: -4.41898,
      league: 'Scottish Premiership'
   },
   {
      id: 111,
      stadium_name: 'New York Stadiumn',
      team: 'Rotherham United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Rotherham_United_FC.svg',
      capacity: 12021,
      latitude: 53.4281,
      longitude: -1.36172,
      league: 'EFL Championship'
   },
   {
      id: 112,
      stadium_name: 'Hampden Park',
      team: "Scotland, Queen's Park",
      logo: 'https://upload.wikimedia.org/wikipedia/en/5/50/Scotland_national_football_team_logo_2014.svg',
      capacity: 52500,
      latitude: 55.8258,
      longitude: -4.25198,
      league: 'National'
   },
   {
      id: 113,
      stadium_name: 'Glanford Park',
      team: 'Scunthorpe United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/95/Scunthorpe_United_FC_logo.svg',
      capacity: 9088,
      latitude: 53.5867,
      longitude: -0.695244,
      league: 'EFL League One'
   },
   {
      id: 114,
      stadium_name: 'Bramall Lane',
      team: 'Sheffield United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg',
      capacity: 32702,
      latitude: 53.3703,
      longitude: -1.47083,
      league: 'EFL League One'
   },
   {
      id: 115,
      stadium_name: 'Hillsborough',
      team: 'Sheffield Wednesday',
      logo: 'https://upload.wikimedia.org/wikipedia/en/8/88/Sheffield_Wednesday_badge.svg',
      capacity: 39812,
      latitude: 53.4115,
      longitude: -1.50075,
      league: 'EFL Championship'
   },
   {
      id: 116,
      stadium_name: 'New Meadow',
      team: 'Shrewsbury Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Shrewsbury_Town_Badge_2015-.jpg',
      capacity: 9875,
      latitude: 52.6886,
      longitude: -2.74931,
      league: 'EFL League One'
   },
   {
      id: 117,
      stadium_name: "St Mary's Stadium",
      team: 'Southampton',
      logo: 'http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg',
      capacity: 32689,
      latitude: 50.9058,
      longitude: -1.39114,
      league: 'Premier League'
   },
   {
      id: 118,
      stadium_name: 'Roots Hall',
      team: 'Southend United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/79/Southend_United.svg',
      capacity: 12392,
      latitude: 51.5491,
      longitude: 0.701572,
      league: 'EFL League One'
   },
   {
      id: 119,
      stadium_name: 'McDiarmid Park',
      team: 'St Johnstone',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f5/StJohnstoneFC_crest_new.png',
      capacity: 10673,
      latitude: 56.4099,
      longitude: -3.47684,
      league: 'Scottish Premiership'
   },
   {
      id: 120,
      stadium_name: 'St Mirren Park',
      team: 'St Mirren',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/32/St_Mirren_FC_logo.svg',
      capacity: 8023,
      latitude: 55.8529,
      longitude: -4.42879,
      league: 'Scottish Premiership'
   },
   {
      id: 121,
      stadium_name: 'Ochilview Park',
      team: 'Stenhousemuir, East Stirlingshire',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/56/Stenhousemuir.svg',
      capacity: 3776,
      latitude: 56.0282,
      longitude: -3.81449,
      league: 'Other '
   },
   {
      id: 122,
      stadium_name: 'The Lamex Stadium',
      team: 'Stevenage Borough',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/45/Stevenage_Football_Club.png',
      capacity: 6722,
      latitude: 51.8898,
      longitude: -0.193664,
      league: 'EFL League Two'
   },
   {
      id: 123,
      stadium_name: 'Forthbank Stadium',
      team: 'Stirling Albion',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/4f/Stirling_Albion_FC_logo.png',
      capacity: 3808,
      latitude: 56.1191,
      longitude: -3.91194,
      league: 'Other '
   },
   {
      id: 124,
      stadium_name: 'Britannia Stadium',
      team: 'Stoke City',
      logo: 'http://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg',
      capacity: 27902,
      latitude: 52.9884,
      longitude: -2.17542,
      league: 'Premier League'
   },
   {
      id: 125,
      stadium_name: 'Stair Park',
      team: 'Stranraer',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/4b/Stranraer_FC_logo.svg',
      capacity: 5600,
      latitude: 54.9022,
      longitude: -5.01249,
      league: 'Other '
   },
   {
      id: 126,
      stadium_name: 'Stadium of Light',
      team: 'Sunderland',
      logo: 'http://upload.wikimedia.org/wikipedia/de/6/60/AFC_Sunderland.svg',
      capacity: 49000,
      latitude: 54.9146,
      longitude: -1.38837,
      league: 'Premier League'
   },
   {
      id: 127,
      stadium_name: 'Liberty Stadium',
      team: 'Swansea City',
      logo: 'http://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg',
      capacity: 20532,
      latitude: 51.6428,
      longitude: -3.93473,
      league: 'Premier League'
   },
   {
      id: 128,
      stadium_name: 'The County Ground',
      team: 'Swindon Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Swindon_Town_FC.svg',
      capacity: 15728,
      latitude: 51.5645,
      longitude: -1.77107,
      league: 'EFL League One'
   },
   {
      id: 129,
      stadium_name: 'Plainmoor',
      team: 'Torquay United',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Torquay_United_FC.svg',
      capacity: 6104,
      latitude: 50.4764,
      longitude: -3.52382,
      league: 'Other '
   },
   {
      id: 130,
      stadium_name: 'White Hart Lane',
      team: 'Tottenham Hotspur',
      logo: 'http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg',
      capacity: 36230,
      latitude: 51.6033,
      longitude: -0.065684,
      league: 'Premier League'
   },
   {
      id: 131,
      stadium_name: 'Prenton Park',
      team: 'Tranmere Rovers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Tranmere_Rovers_FC_logo.svg',
      capacity: 16567,
      latitude: 53.3738,
      longitude: -3.03269,
      league: 'Other '
   },
   {
      id: 132,
      stadium_name: 'Millennium Stadium',
      team: 'Wales',
      logo: 'http://www.faw.cymru/themes/faw/images/global/Crest.svg',
      capacity: 74500,
      latitude: 51.4782,
      longitude: -3.18281,
      league: 'National'
   },
   {
      id: 133,
      stadium_name: 'Bescot Stadium',
      team: 'Walsall',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/ef/Walsall_FC.svg',
      capacity: 11300,
      latitude: 52.5655,
      longitude: -1.99053,
      league: 'EFL League One'
   },
   {
      id: 134,
      stadium_name: 'Vicarage Road',
      team: 'Watford',
      logo: 'https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg',
      capacity: 17477,
      latitude: 51.6498,
      longitude: -0.401569,
      league: 'Premier League'
   },
   {
      id: 135,
      stadium_name: 'The Hawthorns',
      team: 'West Bromwich Albion',
      logo: 'http://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg',
      capacity: 26272,
      latitude: 52.509,
      longitude: -1.96418,
      league: 'Premier League'
   },
   {
      id: 136,
      stadium_name: 'Olympic Stadium',
      team: 'West Ham',
      logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg',
      capacity: 60000,
      latitude: 51.5383,
      longitude: -0.016587,
      league: 'Other '
   },
   {
      id: 137,
      stadium_name: 'DW Stadium',
      team: 'Wigan Athletic',
      logo: 'https://upload.wikimedia.org/wikipedia/en/4/43/Wigan_Athletic.svg',
      capacity: 25138,
      latitude: 53.5477,
      longitude: -2.65415,
      league: 'EFL Championship'
   },
   {
      id: 138,
      stadium_name: 'Molineux',
      team: 'Wolverhampton Wanderers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg',
      capacity: 27828,
      latitude: 52.5904,
      longitude: -2.13061,
      league: 'EFL Championship'
   },
   {
      id: 139,
      stadium_name: 'Adams Park',
      team: 'Wycombe Wanderers',
      logo: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Wycombe_Wanderers_FC_logo.svg',
      capacity: 10284,
      latitude: 51.6306,
      longitude: -0.800299,
      league: 'EFL League Two'
   },
   {
      id: 140,
      stadium_name: 'Huish Park',
      team: 'Yeovil Town',
      logo: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Yeovil_Town_FC_logo.svg',
      capacity: 9665,
      latitude: 50.9503,
      longitude: -2.67383,
      league: 'EFL League Two'
   },
   {
      id: 141,
      stadium_name: 'Bootham Crescent',
      team: 'York City',
      logo: 'https://upload.wikimedia.org/wikipedia/en/7/71/York_City_FC.svg',
      capacity: 7872,
      latitude: 53.9695,
      longitude: -1.08833,
      league: 'Other '
   }
];
