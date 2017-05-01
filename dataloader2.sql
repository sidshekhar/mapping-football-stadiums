-- script to load data into postgres

DROP TABLE IF EXISTS stadiums;
CREATE TABLE stadiums (
	stadium_name text primary key,
	team text,
	logo text,
	capacity int,
	latitude float,
	longitude float,
	league text);
COPY stadiums from  STDIN (FORMAT CSV);
Pittodrie,Aberdeen,https://upload.wikimedia.org/wikipedia/en/d/d4/Aberdeen_FC_logo.svg,22199,57.1593,-2.08872,Scottish Premiership
Crown Ground,Accrington Stanley,https://upload.wikimedia.org/wikipedia/en/6/63/Accstanley.png,5057,53.7654,-2.37106,EFL League Two
Kingsmeadow,"AFC Wimbledon, Kingstonian",https://upload.wikimedia.org/wikipedia/en/1/1c/AFC_Wimbledon.svg,4720,51.4051,-0.281984,EFL League One
New Broomfield,Airdrie United,https://upload.wikimedia.org/wikipedia/en/1/1b/Airdrieonians_FC_logo.png,10172,55.8601,-3.95997,Other 
Cliftonhill,Albion Rovers,https://upload.wikimedia.org/wikipedia/en/d/d9/Albion_Rovers_FC_logo.svg,2496,55.8602,-4.01145,Other 
Recreation Ground,Aldershot Town,https://upload.wikimedia.org/wikipedia/en/1/1e/Aldershot_Crest.png,7100,51.2484,-0.754869,Other 
Recreation Park,Alloa Athletic,https://upload.wikimedia.org/wikipedia/en/c/c3/Alloa_Athletic_FC_logo.png,3412,56.1166,-3.77865,Other 
Galabank,Annan Athletic,https://upload.wikimedia.org/wikipedia/en/3/39/Annan_Athletic_FC_logo.png,2007,54.9948,-3.2612,Other 
Gayfield Park,Arbroath,https://upload.wikimedia.org/wikipedia/en/6/60/Arbroath_FC_logo.svg,5940,56.5523,-2.5914,Other 
Emirates Stadium,Arsenal,http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg,60361,51.5549,-0.108436,Premier League
Villa Park,Aston Villa,https://upload.wikimedia.org/wikipedia/en/1/15/Aston_Villa.svg,42788,52.5092,-1.88508,EFL Championship
Somerset Park,Ayr United,https://upload.wikimedia.org/wikipedia/en/6/6b/Ayr_United_FC-2009_2011_Centenary_Logo.png,10243,55.4697,-4.61996,Other 
Underhill Stadium,Barnet,https://upload.wikimedia.org/wikipedia/en/a/a2/Barnet_FC.svg,5260,51.6464,-0.191789,EFL League Two
Oakwell,Barnsley,https://upload.wikimedia.org/wikipedia/en/c/c9/Barnsley_FC.svg,23009,53.5524,-1.46756,EFL Championship
Shielfield Park,Berwick Rangers,https://upload.wikimedia.org/wikipedia/en/c/ce/BerwickRangersLarge.png,4131,55.76,-2.01599,Other 
St Andrews,Birmingham City,https://upload.wikimedia.org/wikipedia/en/6/68/Birmingham_City_FC_logo.svg,30009,52.4756,-1.86824,EFL Championship
Ewood Park,Blackburn Rovers,https://upload.wikimedia.org/wikipedia/en/0/0f/Blackburn_Rovers.svg,31154,53.7286,-2.48937,EFL Championship
Bloomfield Road,Blackpool,https://upload.wikimedia.org/wikipedia/en/d/df/Blackpool_FC_logo.svg,16220,53.8046,-3.04834,EFL League Two
Macron Stadium,Bolton Wanderers,https://upload.wikimedia.org/wikipedia/en/8/82/Bolton_Wanderers_FC_logo.svg,28723,53.5805,-2.53571,EFL League One
Seward Stadium,Bournemouth,https://upload.wikimedia.org/wikipedia/en/b/bf/AFC_Bournemouth.svg,10700,50.7352,-1.83839,Premier League
Valley Parade,Bradford City,https://upload.wikimedia.org/wikipedia/en/3/32/Bradford_City_AFC.png,25136,53.8042,-1.75902,EFL League One
Glebe Park,Brechin City,https://upload.wikimedia.org/wikipedia/en/0/01/Brechin_City_FC_logo.svg,3960,56.7353,-2.6565,Other 
Griffin Park,Brentford,https://upload.wikimedia.org/wikipedia/en/c/c9/Brentford_FC_logo.svg,12763,51.4882,-0.302621,EFL Championship
Amex Stadium,Brighton and Hove Albion,https://upload.wikimedia.org/wikipedia/en/f/fd/Brighton_%26_Hove_Albion_logo.svg,22374,50.8609,-0.08014,EFL Championship
Ashton Gate,Bristol City,https://upload.wikimedia.org/wikipedia/en/0/00/Bristol_City_FC.svg,21497,51.44,-2.62021,EFL Championship
Memorial Stadium,Bristol Rovers,https://upload.wikimedia.org/wikipedia/en/4/47/Bristol_Rovers_F.C._logo.svg,12011,51.4862,-2.58315,EFL League One
Turf Moor,Burnley,https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png,22546,53.7888,-2.23018,Premier League
Pirelli Stadium,Burton Albion,https://upload.wikimedia.org/wikipedia/en/5/53/Burton_Albion_FC_logo.svg,6912,52.8219,-1.62708,EFL Championship
Gigg Lane,Bury,https://upload.wikimedia.org/wikipedia/en/b/b7/Bury_FC.svg,11840,53.5805,-2.29487,EFL League One
Abbey Stadium,Cambridge United,https://upload.wikimedia.org/wikipedia/en/8/8f/Cambridge_United_FC.svg,10847,52.2128,0.154298,EFL League Two
Cardiff City Stadium,Cardiff City,https://upload.wikimedia.org/wikipedia/en/3/3c/Cardiff_City_crest.svg,26828,51.4729,-3.20413,EFL Championship
Brunton Park,Carlisle United,https://upload.wikimedia.org/wikipedia/en/6/63/Carl_Badge.png,18202,54.8955,-2.91365,EFL League Two
Celtic Park,Celtic,https://upload.wikimedia.org/wikipedia/en/3/35/Celtic_FC.svg,60832,55.8497,-4.20561,Scottish Premiership
The Valley,Charlton Athletic,https://upload.wikimedia.org/wikipedia/en/5/5b/Charlton_Athletic.svg,27111,51.4865,0.036757,EFL League One
Stamford Bridge,Chelsea,http://upload.wikimedia.org/wikipedia/de/5/5c/Chelsea_crest.svg,41837,51.4816,-0.191034,Premier League
Whaddon Road,Cheltenham Town,https://upload.wikimedia.org/wikipedia/en/8/8a/Cheltenham_Town_FC_logo.png,7066,51.9062,-2.06021,EFL League Two
B2net Stadium,Chesterfield,https://upload.wikimedia.org/wikipedia/en/9/94/Chesterfield_FC_crest.svg,10400,53.2535,-1.4272,EFL League One
Broadwood Stadium,Clyde,https://upload.wikimedia.org/wikipedia/en/e/e7/Clyde_FC_logo.png,8029,55.9447,-4.0379,Other 
Weston Homes Community Stadium,Colchester United,https://upload.wikimedia.org/wikipedia/en/4/48/Colchester_United_FC_logo.svg,10084,51.9234,0.897861,EFL League Two
Ricoh Arena,Coventry City,https://upload.wikimedia.org/wikipedia/en/9/94/Coventry_City_FC_logo.svg,32609,52.4481,-1.49563,EFL League One
Central Park,Cowdenbeath,https://upload.wikimedia.org/wikipedia/en/3/33/Cowdenbeath_modern_logo.jpeg,4370,56.1088,-3.34717,Other 
Broadfield Stadium,Crawley Town,https://upload.wikimedia.org/wikipedia/en/8/8b/Crawley_Town_FC_logo.png,5996,51.0996,-0.194579,EFL League Two
Alexandra Stadium,Crewe Alexandra,https://upload.wikimedia.org/wikipedia/en/9/9d/Crewe_Alexandra.svg,10153,53.0875,-2.43569,EFL League Two
Selhurst Park,Crystal Palace,http://upload.wikimedia.org/wikipedia/de/b/bf/Crystal_Palace_F.C._logo_(2013).png,26309,51.3983,-0.085455,Premier League
Victoria Road,Dagenham and Redbridge,https://upload.wikimedia.org/wikipedia/en/1/1a/Dagenham_%26_Redbridge_F.C._New_Logo.png,6078,51.5478,0.159739,Other 
Pride Park,Derby County,https://upload.wikimedia.org/wikipedia/en/4/4a/Derby_County_crest.svg,33597,52.9149,-1.44727,EFL Championship
Keepmoat Stadium,Doncaster Rovers,https://upload.wikimedia.org/wikipedia/en/4/46/Doncaster_Rovers_FC.png,15231,53.5099,-1.11382,EFL League Two
Dumbarton Football Stadium,Dumbarton,https://upload.wikimedia.org/wikipedia/en/6/6d/Dumbarton_FC_logo.svg,2025,55.9384,-4.56162,Other 
Dens Park,Dundee,https://upload.wikimedia.org/wikipedia/commons/1/16/Dundee1617badge.png,11856,56.4747,-2.97352,Scottish Premiership
Tannadice Park,Dundee United,https://upload.wikimedia.org/wikipedia/en/f/f4/DUFCcrest.png,14209,56.4748,-2.96902,Scottish Premiership
East End Park,Dunfermline,https://upload.wikimedia.org/wikipedia/en/a/a0/DAFC_current_logo_2011_onwards_trans.png,11380,56.0756,-3.44196,Other 
Bayview Stadium,East Fife,https://upload.wikimedia.org/wikipedia/en/6/65/East_Fife_FC_logo.svg,2000,56.1889,-2.99914,Other 
Borough Briggs,Elgin City,https://upload.wikimedia.org/wikipedia/en/c/c9/Elgin_City_FC_Badge.png,4927,57.6518,-3.3209,Other 
Wembley,England,https://upload.wikimedia.org/wikipedia/en/3/38/England_crest_2009.svg,90000,51.5559,-0.279543,National
Goodison Park,Everton,http://upload.wikimedia.org/wikipedia/de/f/f9/Everton_FC.svg,40157,53.4387,-2.96619,Premier League
"St James Park, Exeter",Exeter City,https://upload.wikimedia.org/wikipedia/en/7/71/Exeter_City_FC.svg,8541,50.7307,-3.52109,EFL League Two
Falkirk Stadium,Falkirk,https://upload.wikimedia.org/wikipedia/en/5/5d/Falkirk_FC_logo.svg,9200,56.0053,-3.75262,Other 
Highbury Stadium,Fleetwood Town,https://upload.wikimedia.org/wikipedia/en/6/64/Fleetwood_Town_FC.png,5094,53.9165,-3.02484,EFL League One
Station Park,Forfar Athletic,https://upload.wikimedia.org/wikipedia/en/8/8c/Forfar_Athletic_FC_logo.svg,5177,56.6523,-2.88492,Other 
Craven Cottage,Fulham,https://upload.wikimedia.org/wikipedia/en/e/eb/Fulham_FC_%28shield%29.svg,25700,51.4749,-0.221619,EFL Championship
Priestfield Stadium,Gillingham,https://upload.wikimedia.org/wikipedia/en/thumb/5/5e/FC_Gillingham_Logo.svg/788px-FC_Gillingham_Logo.svg.png,11582,51.3844,0.560367,EFL League One
Cappielow Park,Greenock Morton,https://upload.wikimedia.org/wikipedia/en/d/db/Greenock_Morton_FC_logo.svg,19612,55.9414,-4.72719,Other 
New Douglas Park,Hamilton Academical,https://upload.wikimedia.org/wikipedia/en/4/43/Hamilton_Academical_FC_logo.svg,6078,55.7821,-4.058,Scottish Premiership
Victoria Park,Hartlepool United,https://upload.wikimedia.org/wikipedia/en/c/c5/Hartlepool_United_FC.png,7856,54.6891,-1.21274,EFL League Two
Tynecastle,Heart of Midlothian,https://upload.wikimedia.org/wikipedia/en/6/61/Heart_of_Midlothian_FC_logo.svg,17420,55.9388,-3.2325,Scottish Premiership
Edgar Street,Hereford United,https://upload.wikimedia.org/wikipedia/en/7/75/Hereford_United_FC.svg,5300,52.0607,-2.71774,Other 
Easter Road,Hibernian,https://upload.wikimedia.org/wikipedia/en/3/37/Hibernian_FC_logo.svg,20421,55.9616,-3.16521,Scottish Premiership
The Galpharm Stadium,Huddersfield Town,https://upload.wikimedia.org/wikipedia/en/f/f0/HuddersfieldTownCrest.png,24500,53.6543,-1.76837,EFL Championship
KC Stadium,Hull City,http://upload.wikimedia.org/wikipedia/de/a/a9/Hull_City_AFC.svg,25586,53.7465,-0.368009,Premier League
The Caledonian Stadium,Inverness Caledonian Thistle,https://upload.wikimedia.org/wikipedia/en/8/88/Inverness_Caledonian_Thistle.svg,7918,57.4951,-4.21751,Scottish Premiership
Portman Road,Ipswich Town,https://upload.wikimedia.org/wikipedia/en/4/43/Ipswich_Town.svg,30311,52.0544,1.14554,EFL Championship
Rugby Park,Kilmarnock,https://upload.wikimedia.org/wikipedia/en/3/32/KilmarnockLogo.svg,18128,55.6046,-4.50846,Scottish Premiership
Elland Road,Leeds United,https://upload.wikimedia.org/wikipedia/en/0/05/Leeds_United_Logo.png,37697,53.7775,-1.57212,EFL Championship
King Power Stadium,Leicester City,http://upload.wikimedia.org/wikipedia/en/6/63/Leicester02.png,32262,52.6203,-1.14217,Premier League
Brisbane Road,Leyton Orient,https://upload.wikimedia.org/wikipedia/en/f/f1/Leyton_Orient_FC.png,9271,51.5601,-0.012551,EFL League Two
Anfield,Liverpool,http://upload.wikimedia.org/wikipedia/de/0/0a/FC_Liverpool.svg,45522,53.4308,-2.96096,Premier League
Almondvale Stadium,Livingston,https://upload.wikimedia.org/wikipedia/en/f/f8/Livingston_FC_club_badge_new.png,10122,55.8864,-3.52207,Other 
Kenilworth Road,Luton Town,https://upload.wikimedia.org/wikipedia/en/8/8b/LutonTownFC2009.png,10226,51.8842,-0.43155,EFL League Two
Moss Rose,Macclesfield Town,https://upload.wikimedia.org/wikipedia/en/4/40/Macclesfield_Town_FC.svg,6355,53.2427,-2.127,Other 
Etihad Stadium,Manchester City,https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg,47805,53.483,-2.20024,Premier League
Old Trafford,Manchester United,http://upload.wikimedia.org/wikipedia/de/d/da/Manchester_United_FC.svg,75811,53.4631,-2.29139,Premier League
Field Mill,Mansfield Town,https://upload.wikimedia.org/wikipedia/en/7/7d/Mansfield_Town_FC.svg,9186,53.1378,-1.2013,EFL League Two
Riverside,Middlesbrough ,https://upload.wikimedia.org/wikipedia/en/2/2c/Middlesbrough_FC_crest.svg,34988,54.5781,-1.21776,Other 
The Den,Millwall,https://upload.wikimedia.org/wikipedia/en/7/71/Millwall_FC_logo.png,20146,51.4859,-0.050743,EFL League One
Stadiummk,MK Dons,https://upload.wikimedia.org/wikipedia/en/b/bf/MK_Dons.png,22000,52.0096,-0.733507,EFL League One
Links Park,Montrose,https://upload.wikimedia.org/wikipedia/en/9/99/Montrose_FC_logo.png,3292,56.714,-2.45902,Other 
Globe Arena,Morecambe,https://upload.wikimedia.org/wikipedia/en/f/f1/Morecambe_FC_Badge.png,6476,54.0675,-2.84707,EFL League Two
Fir Park,Motherwell,https://upload.wikimedia.org/wikipedia/en/c/c8/Motherwell_FC_crest.svg,13742,55.7804,-3.9803,Scottish Premiership
St James Park,Newcastle United,https://upload.wikimedia.org/wikipedia/en/5/56/Newcastle_United_Logo.svg,52387,54.9756,-1.62179,EFL Championship
Rodney Parade,Newport County,https://upload.wikimedia.org/wikipedia/en/b/b0/Newport_County_crest.png,7850,51.5889,-2.98902,EFL League Two
Sixfields Stadium,Northampton Town,https://upload.wikimedia.org/wikipedia/en/c/ce/Northampton_Town_FC_logo.png,7653,52.2352,-0.933485,EFL League One
Carrow Road,Norwich City,https://upload.wikimedia.org/wikipedia/en/8/8c/Norwich_City.svg,27033,52.6221,1.30912,EFL Championship
The City Ground,Nottingham Forest,https://upload.wikimedia.org/wikipedia/en/d/d2/Nottingham_Forest_logo.svg,30603,52.9399,-1.13258,EFL Championship
Meadow Lane,Notts County,https://upload.wikimedia.org/wikipedia/en/0/05/Notts_County_Logo.png,20229,52.9425,-1.13703,EFL League Two
Boundary Park,Oldham Athletic,https://upload.wikimedia.org/wikipedia/en/2/21/Oldham_Athletic_new_badge.png,10638,53.5551,-2.12847,EFL League One
Kassam Stadium ,Oxford United,https://upload.wikimedia.org/wikipedia/en/3/3e/Oxford_United_FC_logo.svg,12500,51.7164,-1.20775,EFL League One
Firhill,Partick Thistle,https://upload.wikimedia.org/wikipedia/en/5/5c/Partick_Thistle_FC_logo.svg,13079,55.8815,-4.26938,Scottish Premiership
London Road,Peterborough United,https://upload.wikimedia.org/wikipedia/en/d/d4/Peterborough_United.svg,15315,52.5648,-0.240434,EFL League One
Balmoor,Peterhead,https://upload.wikimedia.org/wikipedia/en/1/1b/Peterheadbadge.png,4000,57.5112,-1.79599,Other 
Home Park,Plymouth Argyle,https://upload.wikimedia.org/wikipedia/en/a/a8/Plymouth_Argyle_F.C._logo.svg,16388,50.3882,-4.15076,EFL League Two
Vale Park,Port Vale,https://upload.wikimedia.org/wikipedia/en/5/5f/Port_Vale_logo.svg,19052,53.05,-2.1926,EFL League One
Fratton Park,Portsmouth,https://upload.wikimedia.org/wikipedia/en/3/3c/Portsmouth_FC_crest.svg,21100,50.7964,-1.06389,EFL League Two
Deepdale,Preston North End,https://upload.wikimedia.org/wikipedia/en/2/21/PNE_FC.png,24500,53.772,-2.68832,EFL Championship
Palmerston Park,Queen of the South,https://upload.wikimedia.org/wikipedia/en/b/b6/Queen_of_the_South_FC_logo_New.png,6412,55.0703,-3.6246,Other 
Loftus Road,Queens Park Rangers,https://upload.wikimedia.org/wikipedia/en/3/31/Queens_Park_Rangers_crest.svg,18360,51.5093,-0.232204,EFL Championship
Stark's Park,Raith Rovers,https://upload.wikimedia.org/wikipedia/en/e/e4/Raith_Rovers_F.C._Crest.png,10104,56.0999,-3.16851,Other 
Ibrox,Rangers,https://upload.wikimedia.org/wikipedia/en/4/43/Rangers_FC.svg,51082,55.8529,-4.30962,Scottish Premiership
Madjeski Stadium,Reading,https://upload.wikimedia.org/wikipedia/en/1/11/Reading_FC.svg,24161,51.4222,-0.982777,EFL Championship
Spotland Stadium,Rochdale,https://upload.wikimedia.org/wikipedia/en/d/d5/Rochdale_badge.png,10249,53.6209,-2.17993,EFL League One
"Victoria Park, Dingwall",Ross County,https://upload.wikimedia.org/wikipedia/en/5/57/Ross_County_F.C._logo.png,6310,57.5959,-4.41898,Scottish Premiership
New York Stadiumn,Rotherham United,https://upload.wikimedia.org/wikipedia/en/c/c0/Rotherham_United_FC.svg,12021,53.4281,-1.36172,EFL Championship
Hampden Park,"Scotland, Queen's Park",https://upload.wikimedia.org/wikipedia/en/5/50/Scotland_national_football_team_logo_2014.svg,52500,55.8258,-4.25198,National
Glanford Park,Scunthorpe United,https://upload.wikimedia.org/wikipedia/en/9/95/Scunthorpe_United_FC_logo.svg,9088,53.5867,-0.695244,EFL League One
Bramall Lane,Sheffield United,https://upload.wikimedia.org/wikipedia/en/9/9c/Sheffield_United_FC_logo.svg,32702,53.3703,-1.47083,EFL League One
Hillsborough,Sheffield Wednesday,https://upload.wikimedia.org/wikipedia/en/8/88/Sheffield_Wednesday_badge.svg,39812,53.4115,-1.50075,EFL Championship
New Meadow,Shrewsbury Town,https://upload.wikimedia.org/wikipedia/en/1/1b/Shrewsbury_Town_Badge_2015-.jpg,9875,52.6886,-2.74931,EFL League One
St Mary's Stadium,Southampton,http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg,32689,50.9058,-1.39114,Premier League
Roots Hall,Southend United,https://upload.wikimedia.org/wikipedia/en/7/79/Southend_United.svg,12392,51.5491,0.701572,EFL League One
McDiarmid Park,St Johnstone,https://upload.wikimedia.org/wikipedia/en/f/f5/StJohnstoneFC_crest_new.png,10673,56.4099,-3.47684,Scottish Premiership
St Mirren Park,St Mirren,https://upload.wikimedia.org/wikipedia/en/3/32/St_Mirren_FC_logo.svg,8023,55.8529,-4.42879,Scottish Premiership
Ochilview Park,"Stenhousemuir, East Stirlingshire",https://upload.wikimedia.org/wikipedia/commons/5/56/Stenhousemuir.svg,3776,56.0282,-3.81449,Other 
The Lamex Stadium,Stevenage Borough,https://upload.wikimedia.org/wikipedia/en/4/45/Stevenage_Football_Club.png,6722,51.8898,-0.193664,EFL League Two
Forthbank Stadium,Stirling Albion,https://upload.wikimedia.org/wikipedia/en/4/4f/Stirling_Albion_FC_logo.png,3808,56.1191,-3.91194,Other 
Britannia Stadium,Stoke City,http://upload.wikimedia.org/wikipedia/de/a/a3/Stoke_City.svg,27902,52.9884,-2.17542,Premier League
Stair Park,Stranraer,https://upload.wikimedia.org/wikipedia/en/4/4b/Stranraer_FC_logo.svg,5600,54.9022,-5.01249,Other 
Stadium of Light,Sunderland,http://upload.wikimedia.org/wikipedia/de/6/60/AFC_Sunderland.svg,49000,54.9146,-1.38837,Premier League
Liberty Stadium,Swansea City,http://upload.wikimedia.org/wikipedia/de/a/ab/Swansea_City_Logo.svg,20532,51.6428,-3.93473,Premier League
The County Ground,Swindon Town,https://upload.wikimedia.org/wikipedia/en/a/a3/Swindon_Town_FC.svg,15728,51.5645,-1.77107,EFL League One
Plainmoor,Torquay United,https://upload.wikimedia.org/wikipedia/en/f/f2/Torquay_United_FC.svg,6104,50.4764,-3.52382,Other 
White Hart Lane,Tottenham Hotspur,http://upload.wikimedia.org/wikipedia/de/b/b4/Tottenham_Hotspur.svg,36230,51.6033,-0.065684,Premier League
Prenton Park,Tranmere Rovers,https://upload.wikimedia.org/wikipedia/en/3/30/Tranmere_Rovers_FC_logo.svg,16567,53.3738,-3.03269,Other 
Millennium Stadium,Wales,http://www.faw.cymru/themes/faw/images/global/Crest.svg,74500,51.4782,-3.18281,National
Bescot Stadium,Walsall,https://upload.wikimedia.org/wikipedia/en/e/ef/Walsall_FC.svg,11300,52.5655,-1.99053,EFL League One
Vicarage Road,Watford,https://upload.wikimedia.org/wikipedia/en/e/e2/Watford.svg,17477,51.6498,-0.401569,Premier League
The Hawthorns,West Bromwich Albion,http://upload.wikimedia.org/wikipedia/de/8/8b/West_Bromwich_Albion.svg,26272,52.509,-1.96418,Premier League
Olympic Stadium,West Ham,https://upload.wikimedia.org/wikipedia/en/c/c2/West_Ham_United_FC_logo.svg,60000,51.5383,-0.016587,Other 
DW Stadium,Wigan Athletic,https://upload.wikimedia.org/wikipedia/en/4/43/Wigan_Athletic.svg,25138,53.5477,-2.65415,EFL Championship
Molineux,Wolverhampton Wanderers,https://upload.wikimedia.org/wikipedia/en/f/fc/Wolverhampton_Wanderers.svg,27828,52.5904,-2.13061,EFL Championship
Adams Park,Wycombe Wanderers,https://upload.wikimedia.org/wikipedia/en/f/fb/Wycombe_Wanderers_FC_logo.svg,10284,51.6306,-0.800299,EFL League Two
Huish Park,Yeovil Town,https://upload.wikimedia.org/wikipedia/en/9/9b/Yeovil_Town_FC_logo.svg,9665,50.9503,-2.67383,EFL League Two
Bootham Crescent,York City,https://upload.wikimedia.org/wikipedia/en/7/71/York_City_FC.svg,7872,53.9695,-1.08833,Other 
