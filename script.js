var question = document.querySelector(".question");
var options = document.querySelector(".options");
var nextQuestion = document.querySelector(".nextQuestion");
var restartQuiz = document.querySelector(".restartQuiz");
var feedback = document.querySelector(".feedback");
var result = document.querySelector(".result");
var resultPopup = document.querySelector(".result-popup");
var finalScore = document.querySelector(".final-score");
var finalPercentage = document.querySelector(".final-percentage");
var performanceMessage = document.querySelector(".performance-message");
var closeResult = document.querySelector(".closeResult");
var questionProgress = document.querySelector(".question-progress");
var progressBar = document.querySelector(".progress-bar");
var quizTimer = document.querySelector(".quiz-timer");
var backToCategories = document.querySelector(".back-to-categories");


  var questions = [
    
    {
      question: "Which country has the most natural lakes in the world?",
      options: [
        "china",
         "canada",
          "russia", 
          "united state of america"
        ],
      answer: "canada",
      category: "geography"
    },

    {
  id: "geography_0001",
  question: "What is the capital city of Nigeria?",
  options: ["Lagos", "Kano", "Abuja", "Ibadan"],
  answer: "Abuja",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0002",
  question: "Which is the largest continent by land area?",
  options: ["Africa", "Asia", "Europe", "South America"],
  answer: "Asia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0003",
  question: "Which is the smallest continent by land area in the common seven-continent model?",
  options: ["Europe", "Antarctica", "Australia", "South America"],
  answer: "Australia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0004",
  question: "What is the largest ocean on Earth?",
  options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  answer: "Pacific Ocean",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0005",
  question: "Which is the world's largest hot desert?",
  options: ["Gobi Desert", "Sahara Desert", "Kalahari Desert", "Atacama Desert"],
  answer: "Sahara Desert",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0006",
  question: "Mount Everest is located in which mountain range?",
  options: ["Andes", "Alps", "Himalayas", "Rocky Mountains"],
  answer: "Himalayas",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0007",
  question: "Which major river flows through Egypt?",
  options: ["Nile", "Danube", "Thames", "Rhine"],
  answer: "Nile",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0008",
  question: "Which European country is often described as being shaped like a boot?",
  options: ["Spain", "Italy", "Greece", "Portugal"],
  answer: "Italy",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0009",
  question: "What is the capital city of France?",
  options: ["Lyon", "Marseille", "Paris", "Nice"],
  answer: "Paris",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0010",
  question: "The Amazon rainforest is mainly located on which continent?",
  options: ["Africa", "Asia", "South America", "North America"],
  answer: "South America",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0011",
  question: "Which country is home to the Great Barrier Reef?",
  options: ["Australia", "India", "Mexico", "South Africa"],
  answer: "Australia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0012",
  question: "The famous pyramids of Giza are located in which country?",
  options: ["Sudan", "Egypt", "Jordan", "Morocco"],
  answer: "Egypt",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0013",
  question: "What is the capital of Kenya?",
  options: ["Mombasa", "Kampala", "Nairobi", "Dodoma"],
  answer: "Nairobi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0014",
  question: "What is the capital city of Japan?",
  options: ["Kyoto", "Osaka", "Tokyo", "Nagoya"],
  answer: "Tokyo",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0015",
  question: "What is the capital city of Canada?",
  options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  answer: "Ottawa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0016",
  question: "Which country lies on the western side of the Iberian Peninsula alongside Spain?",
  options: ["France", "Portugal", "Italy", "Belgium"],
  answer: "Portugal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0017",
  question: "Which sea lies between southern Europe and northern Africa?",
  options: ["Caribbean Sea", "Mediterranean Sea", "Baltic Sea", "Arabian Sea"],
  answer: "Mediterranean Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0018",
  question: "What is the capital of the United States?",
  options: ["New York City", "Los Angeles", "Washington, D.C.", "Chicago"],
  answer: "Washington, D.C.",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0019",
  question: "What is the capital city of South Korea?",
  options: ["Busan", "Seoul", "Incheon", "Daegu"],
  answer: "Seoul",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0020",
  question: "Which of these countries is landlocked?",
  options: ["Portugal", "Switzerland", "Nigeria", "Japan"],
  answer: "Switzerland",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0021",
  question: "Which country occupies most of the eastern part of the Korean Peninsula's northern neighbour?",
  options: ["North Korea", "Mongolia", "Thailand", "Vietnam"],
  answer: "North Korea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0022",
  question: "Which imaginary line divides Earth into the Northern and Southern Hemispheres?",
  options: ["Prime Meridian", "Equator", "Tropic of Cancer", "International Date Line"],
  answer: "Equator",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0023",
  question: "What is the name of the line at 0 degrees longitude?",
  options: ["Equator", "Prime Meridian", "Tropic of Capricorn", "Arctic Circle"],
  answer: "Prime Meridian",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0024",
  question: "Lines of latitude run in which general direction on a map?",
  options: ["North to south", "East to west", "Northeast to southwest only", "Vertically from pole to pole"],
  answer: "East to west",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0025",
  question: "Lines of longitude meet at which two points on Earth?",
  options: ["The Equator", "The North and South Poles", "The Tropics", "The international borders"],
  answer: "The North and South Poles",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0026",
  question: "What is the purpose of a map legend or key?",
  options: ["To show the map's publication date only", "To explain symbols used on the map", "To calculate the weather", "To measure a mountain's age"],
  answer: "To explain symbols used on the map",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0027",
  question: "Which map feature helps a reader identify north, south, east, and west?",
  options: ["Scale bar", "Compass rose", "Map legend", "Contour interval"],
  answer: "Compass rose",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0028",
  question: "What does a map scale help you determine?",
  options: ["The real-world distance represented on the map", "The age of a city", "The population of every village", "The temperature at every location"],
  answer: "The real-world distance represented on the map",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0029",
  question: "What is a delta commonly formed by?",
  options: ["A river depositing sediment near its mouth", "A glacier melting on a mountain peak", "A volcano erupting underwater only", "Wind removing every grain of sand"],
  answer: "A river depositing sediment near its mouth",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0030",
  question: "What is a valley?",
  options: ["A high, flat area of land", "A low area between hills or mountains", "A deep ocean trench", "A narrow strip of desert sand"],
  answer: "A low area between hills or mountains",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0031",
  question: "What is a plateau?",
  options: ["A broad area of relatively level high ground", "A narrow river channel", "A low coastal swamp", "A deep valley below sea level"],
  answer: "A broad area of relatively level high ground",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0032",
  question: "What is a peninsula?",
  options: ["Land surrounded by water on three sides", "Land completely surrounded by water", "A river formed by rainfall", "A mountain covered in snow"],
  answer: "Land surrounded by water on three sides",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0033",
  question: "What is an archipelago?",
  options: ["A chain or group of islands", "A type of mountain", "A desert oasis", "A river mouth"],
  answer: "A chain or group of islands",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0034",
  question: "What is an island?",
  options: ["A piece of land surrounded by water", "A piece of land surrounded only by mountains", "A flat desert without rivers", "A river running through a valley"],
  answer: "A piece of land surrounded by water",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0035",
  question: "What is a mountain?",
  options: ["A naturally elevated area of land", "A man-made lake", "A section of the ocean floor only", "A flat area below sea level"],
  answer: "A naturally elevated area of land",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0036",
  question: "What is a volcano?",
  options: ["An opening through which magma, ash, or gases can escape", "A river that flows underground", "A mountain made entirely of ice", "A hole formed only by wind"],
  answer: "An opening through which magma, ash, or gases can escape",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0037",
  question: "What is a common cause of earthquakes?",
  options: ["Movement along faults in Earth's crust", "The daily rise of ocean tides only", "Clouds moving across a continent", "The changing colours of forests"],
  answer: "Movement along faults in Earth's crust",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0038",
  question: "What is a savanna?",
  options: ["A tropical or subtropical grassland with scattered trees", "A permanently frozen polar desert only", "A deep-water ocean trench", "A dense forest found only in cold regions"],
  answer: "A tropical or subtropical grassland with scattered trees",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0039",
  question: "Which environment is commonly associated with permanently frozen ground called permafrost?",
  options: ["Tundra", "Tropical rainforest", "Savanna", "Mediterranean shrubland"],
  answer: "Tundra",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0040",
  question: "Which climate is generally associated with hot, dry summers and mild, wetter winters?",
  options: ["Mediterranean climate", "Polar climate", "Humid continental climate", "Tropical rainforest climate"],
  answer: "Mediterranean climate",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0041",
  question: "Which country is famous for its fjords and dramatic coastal scenery?",
  options: ["Norway", "Egypt", "Bolivia", "Saudi Arabia"],
  answer: "Norway",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0042",
  question: "Which is the world's largest island, excluding continents?",
  options: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
  answer: "Greenland",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0043",
  question: "Which river flows through London?",
  options: ["Seine", "Thames", "Tiber", "Danube"],
  answer: "Thames",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0044",
  question: "Which river flows through Paris?",
  options: ["Rhine", "Seine", "Thames", "Volga"],
  answer: "Seine",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0045",
  question: "Which mountain range includes Mont Blanc, one of Europe's best-known high peaks?",
  options: ["Alps", "Andes", "Atlas Mountains", "Appalachian Mountains"],
  answer: "Alps",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0046",
  question: "Which continent contains the Andes mountain range?",
  options: ["Asia", "Africa", "South America", "Europe"],
  answer: "South America",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0047",
  question: "Which country is located in both Europe and Asia and has Istanbul as its largest city?",
  options: ["Greece", "Turkey", "Austria", "Hungary"],
  answer: "Turkey",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0048",
  question: "Which country is directly south of the United States and shares a long land border with it?",
  options: ["Mexico", "Brazil", "Argentina", "Chile"],
  answer: "Mexico",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0049",
  question: "Which country is located at the southern tip of Africa?",
  options: ["Kenya", "Nigeria", "South Africa", "Ethiopia"],
  answer: "South Africa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0050",
  question: "What is the name for the long-term average pattern of weather in a region?",
  options: ["Climate", "Forecast", "Seasonal storm", "Daily temperature"],
  answer: "Climate",
  category: "geography",
  difficulty: 50
},

{
  id: "geography_0051",
  question: "What is the capital of Australia?",
  options: ["Sydney", "Melbourne", "Canberra", "Perth"],
  answer: "Canberra",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0052",
  question: "What is the capital of New Zealand?",
  options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
  answer: "Wellington",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0053",
  question: "What is the capital of India?",
  options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
  answer: "New Delhi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0054",
  question: "What is the capital of China?",
  options: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
  answer: "Beijing",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0055",
  question: "What is the capital of Thailand?",
  options: ["Phuket", "Chiang Mai", "Bangkok", "Pattaya"],
  answer: "Bangkok",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0056",
  question: "What is the capital of Malaysia?",
  options: ["Penang", "Kuala Lumpur", "Johor Bahru", "Kuching"],
  answer: "Kuala Lumpur",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0057",
  question: "What is the capital city of Singapore?",
  options: ["Singapore", "Jurong", "Sentosa", "Woodlands"],
  answer: "Singapore",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0058",
  question: "What is the capital of Vietnam?",
  options: ["Ho Chi Minh City", "Da Nang", "Hanoi", "Hue"],
  answer: "Hanoi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0059",
  question: "What is the capital of Pakistan?",
  options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
  answer: "Islamabad",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0060",
  question: "What is the capital of Bangladesh?",
  options: ["Chittagong", "Dhaka", "Khulna", "Rajshahi"],
  answer: "Dhaka",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0061",
  question: "What is the capital of Nepal?",
  options: ["Pokhara", "Kathmandu", "Lalitpur", "Biratnagar"],
  answer: "Kathmandu",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0062",
  question: "What is the capital of Bhutan?",
  options: ["Paro", "Thimphu", "Punakha", "Phuntsholing"],
  answer: "Thimphu",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0063",
  question: "What is the capital of Afghanistan?",
  options: ["Kandahar", "Herat", "Kabul", "Mazar-i-Sharif"],
  answer: "Kabul",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0064",
  question: "What is the capital of Iraq?",
  options: ["Basra", "Baghdad", "Mosul", "Erbil"],
  answer: "Baghdad",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0065",
  question: "What is the capital of Iran?",
  options: ["Isfahan", "Shiraz", "Tehran", "Tabriz"],
  answer: "Tehran",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0066",
  question: "What is the capital of Saudi Arabia?",
  options: ["Jeddah", "Mecca", "Riyadh", "Medina"],
  answer: "Riyadh",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0067",
  question: "What is the capital of the United Arab Emirates?",
  options: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  answer: "Abu Dhabi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0068",
  question: "What is the capital of Oman?",
  options: ["Salalah", "Muscat", "Sohar", "Nizwa"],
  answer: "Muscat",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0069",
  question: "What is the capital of the Maldives?",
  options: ["Malé", "Addu City", "Fuvahmulah", "Hulhumalé"],
  answer: "Malé",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0070",
  question: "What is the capital of Brunei?",
  options: ["Bandar Seri Begawan", "Kuala Belait", "Tutong", "Seria"],
  answer: "Bandar Seri Begawan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0071",
  question: "What is the capital of Timor-Leste?",
  options: ["Baucau", "Dili", "Suai", "Maliana"],
  answer: "Dili",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0072",
  question: "What is the capital of Laos?",
  options: ["Luang Prabang", "Pakse", "Vientiane", "Savannakhet"],
  answer: "Vientiane",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0073",
  question: "What is the capital of Cambodia?",
  options: ["Siem Reap", "Phnom Penh", "Battambang", "Sihanoukville"],
  answer: "Phnom Penh",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0074",
  question: "What is the capital of Myanmar?",
  options: ["Yangon", "Mandalay", "Naypyidaw", "Bago"],
  answer: "Naypyidaw",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0075",
  question: "What is the capital of Mongolia?",
  options: ["Erdenet", "Darkhan", "Ulaanbaatar", "Choibalsan"],
  answer: "Ulaanbaatar",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0076",
  question: "What is the capital of Kazakhstan?",
  options: ["Almaty", "Astana", "Shymkent", "Aktobe"],
  answer: "Astana",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0077",
  question: "What is the capital of Uzbekistan?",
  options: ["Samarkand", "Bukhara", "Tashkent", "Khiva"],
  answer: "Tashkent",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0078",
  question: "What is the capital of Turkmenistan?",
  options: ["Ashgabat", "Mary", "Turkmenabat", "Balkanabat"],
  answer: "Ashgabat",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0079",
  question: "What is the capital of Kyrgyzstan?",
  options: ["Osh", "Bishkek", "Karakol", "Naryn"],
  answer: "Bishkek",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0080",
  question: "What is the capital of Tajikistan?",
  options: ["Khujand", "Dushanbe", "Kulob", "Bokhtar"],
  answer: "Dushanbe",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0081",
  question: "What is the capital of Qatar?",
  options: ["Doha", "Al Wakrah", "Lusail", "Al Khor"],
  answer: "Doha",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0082",
  question: "What is the capital of Bahrain?",
  options: ["Manama", "Muharraq", "Riffa", "Hamad Town"],
  answer: "Manama",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0083",
  question: "What is the capital of Kuwait?",
  options: ["Hawalli", "Kuwait City", "Salmiya", "Jahra"],
  answer: "Kuwait City",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0084",
  question: "What is the capital of Jordan?",
  options: ["Aqaba", "Irbid", "Amman", "Zarqa"],
  answer: "Amman",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0085",
  question: "What is the capital of Lebanon?",
  options: ["Tripoli", "Beirut", "Sidon", "Tyre"],
  answer: "Beirut",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0086",
  question: "What is the capital of Syria?",
  options: ["Aleppo", "Homs", "Damascus", "Latakia"],
  answer: "Damascus",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0087",
  question: "What is the capital of Georgia, the country in the Caucasus?",
  options: ["Batumi", "Tbilisi", "Kutaisi", "Rustavi"],
  answer: "Tbilisi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0088",
  question: "What is the capital of Russia?",
  options: ["Saint Petersburg", "Moscow", "Kazan", "Novosibirsk"],
  answer: "Moscow",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0089",
  question: "What is the capital of Ukraine?",
  options: ["Odesa", "Lviv", "Kyiv", "Kharkiv"],
  answer: "Kyiv",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0090",
  question: "What is the capital of Poland?",
  options: ["Kraków", "Warsaw", "Gdańsk", "Wrocław"],
  answer: "Warsaw",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0091",
  question: "What is the capital of Czechia?",
  options: ["Brno", "Prague", "Ostrava", "Plzeň"],
  answer: "Prague",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0092",
  question: "What is the capital of Slovakia?",
  options: ["Košice", "Bratislava", "Nitra", "Žilina"],
  answer: "Bratislava",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0093",
  question: "What is the capital of Hungary?",
  options: ["Debrecen", "Budapest", "Szeged", "Pécs"],
  answer: "Budapest",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0094",
  question: "What is the capital of Romania?",
  options: ["Cluj-Napoca", "Bucharest", "Timișoara", "Iași"],
  answer: "Bucharest",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0095",
  question: "What is the capital of Bulgaria?",
  options: ["Plovdiv", "Sofia", "Varna", "Burgas"],
  answer: "Sofia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0096",
  question: "What is the capital of Serbia?",
  options: ["Novi Sad", "Niš", "Belgrade", "Kragujevac"],
  answer: "Belgrade",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0097",
  question: "What is the capital of Croatia?",
  options: ["Split", "Zagreb", "Rijeka", "Dubrovnik"],
  answer: "Zagreb",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0098",
  question: "What is the capital of Slovenia?",
  options: ["Maribor", "Ljubljana", "Celje", "Koper"],
  answer: "Ljubljana",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0099",
  question: "What is the capital of Bosnia and Herzegovina?",
  options: ["Mostar", "Sarajevo", "Banja Luka", "Tuzla"],
  answer: "Sarajevo",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0100",
  question: "What is the capital of Montenegro?",
  options: ["Budva", "Podgorica", "Kotor", "Nikšić"],
  answer: "Podgorica",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0101",
  question: "What is the capital of North Macedonia?",
  options: ["Ohrid", "Skopje", "Bitola", "Tetovo"],
  answer: "Skopje",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0102",
  question: "What is the capital of Albania?",
  options: ["Tirana", "Durrës", "Vlorë", "Shkodër"],
  answer: "Tirana",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0103",
  question: "What is the capital of Greece?",
  options: ["Thessaloniki", "Athens", "Patras", "Heraklion"],
  answer: "Athens",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0104",
  question: "What is the capital of Ireland?",
  options: ["Cork", "Galway", "Dublin", "Limerick"],
  answer: "Dublin",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0105",
  question: "What is the capital of the United Kingdom?",
  options: ["Manchester", "London", "Birmingham", "Liverpool"],
  answer: "London",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0106",
  question: "What is the capital of Spain?",
  options: ["Barcelona", "Seville", "Madrid", "Valencia"],
  answer: "Madrid",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0107",
  question: "What is the capital of Sweden?",
  options: ["Gothenburg", "Stockholm", "Malmö", "Uppsala"],
  answer: "Stockholm",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0108",
  question: "What is the capital of Finland?",
  options: ["Turku", "Helsinki", "Tampere", "Oulu"],
  answer: "Helsinki",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0109",
  question: "What is the capital of Denmark?",
  options: ["Aarhus", "Odense", "Copenhagen", "Aalborg"],
  answer: "Copenhagen",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0110",
  question: "What is the capital of Iceland?",
  options: ["Akureyri", "Reykjavík", "Keflavík", "Selfoss"],
  answer: "Reykjavík",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0111",
  question: "What is the capital of Estonia?",
  options: ["Tartu", "Tallinn", "Narva", "Pärnu"],
  answer: "Tallinn",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0112",
  question: "What is the capital of Latvia?",
  options: ["Liepāja", "Riga", "Daugavpils", "Jūrmala"],
  answer: "Riga",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0113",
  question: "What is the capital of Lithuania?",
  options: ["Kaunas", "Klaipėda", "Vilnius", "Šiauliai"],
  answer: "Vilnius",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0114",
  question: "What is the capital of Belarus?",
  options: ["Brest", "Minsk", "Gomel", "Vitebsk"],
  answer: "Minsk",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0115",
  question: "What is the capital of Moldova?",
  options: ["Bălți", "Chișinău", "Tiraspol", "Cahul"],
  answer: "Chișinău",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0116",
  question: "What is the capital of Luxembourg?",
  options: ["Esch-sur-Alzette", "Luxembourg City", "Differdange", "Ettelbruck"],
  answer: "Luxembourg City",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0117",
  question: "What is the capital of Malta?",
  options: ["Mdina", "Valletta", "Sliema", "Birkirkara"],
  answer: "Valletta",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0118",
  question: "What is the capital of the Netherlands?",
  options: ["Rotterdam", "The Hague", "Amsterdam", "Utrecht"],
  answer: "Amsterdam",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0119",
  question: "What is the capital of Belgium?",
  options: ["Antwerp", "Bruges", "Brussels", "Ghent"],
  answer: "Brussels",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0120",
  question: "What is the capital of Austria?",
  options: ["Salzburg", "Vienna", "Graz", "Innsbruck"],
  answer: "Vienna",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0121",
  question: "What is the capital of Germany?",
  options: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
  answer: "Berlin",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0122",
  question: "What is the capital of Andorra?",
  options: ["Andorra la Vella", "Escaldes-Engordany", "Encamp", "Ordino"],
  answer: "Andorra la Vella",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0123",
  question: "Which country has Monaco as its capital and only city-state?",
  options: ["France", "Monaco", "Malta", "San Marino"],
  answer: "Monaco",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0124",
  question: "What is the capital of Liechtenstein?",
  options: ["Vaduz", "Schaan", "Balzers", "Triesen"],
  answer: "Vaduz",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0125",
  question: "What is the capital of San Marino?",
  options: ["Borgo Maggiore", "San Marino", "Serravalle", "Domagnano"],
  answer: "San Marino",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0126",
  question: "Which city is the capital of the Dominican Republic?",
  options: ["Santiago de los Caballeros", "Santo Domingo", "Punta Cana", "La Romana"],
  answer: "Santo Domingo",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0127",
  question: "What is the capital of Jamaica?",
  options: ["Montego Bay", "Kingston", "Negril", "Ocho Rios"],
  answer: "Kingston",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0128",
  question: "What is the capital of Cuba?",
  options: ["Santiago de Cuba", "Havana", "Camagüey", "Holguín"],
  answer: "Havana",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0129",
  question: "What is the capital of Haiti?",
  options: ["Cap-Haïtien", "Port-au-Prince", "Les Cayes", "Jacmel"],
  answer: "Port-au-Prince",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0130",
  question: "What is the capital of The Bahamas?",
  options: ["Freeport", "Nassau", "Marsh Harbour", "George Town"],
  answer: "Nassau",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0131",
  question: "What is the capital of Barbados?",
  options: ["Bridgetown", "Holetown", "Oistins", "Speightstown"],
  answer: "Bridgetown",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0132",
  question: "What is the capital of Saint Lucia?",
  options: ["Castries", "Soufrière", "Vieux Fort", "Gros Islet"],
  answer: "Castries",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0133",
  question: "What is the capital of Saint Vincent and the Grenadines?",
  options: ["Kingstown", "Georgetown", "Calliaqua", "Layou"],
  answer: "Kingstown",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0134",
  question: "What is the capital of Grenada?",
  options: ["St. George's", "Gouyave", "Grenville", "Sauteurs"],
  answer: "St. George's",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0135",
  question: "What is the capital of Trinidad and Tobago?",
  options: ["San Fernando", "Port of Spain", "Arima", "Chaguanas"],
  answer: "Port of Spain",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0136",
  question: "What is the capital of Guyana?",
  options: ["Linden", "Georgetown", "New Amsterdam", "Bartica"],
  answer: "Georgetown",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0137",
  question: "What is the capital of Suriname?",
  options: ["Paramaribo", "Nieuw Nickerie", "Lelydorp", "Moengo"],
  answer: "Paramaribo",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0138",
  question: "What is the capital of Venezuela?",
  options: ["Maracaibo", "Caracas", "Valencia", "Barquisimeto"],
  answer: "Caracas",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0139",
  question: "What is the capital of Colombia?",
  options: ["Medellín", "Cali", "Bogotá", "Cartagena"],
  answer: "Bogotá",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0140",
  question: "What is the capital of Ecuador?",
  options: ["Guayaquil", "Quito", "Cuenca", "Manta"],
  answer: "Quito",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0141",
  question: "What is the capital of Peru?",
  options: ["Cusco", "Lima", "Arequipa", "Trujillo"],
  answer: "Lima",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0142",
  question: "What is the capital of Chile?",
  options: ["Valparaíso", "Santiago", "Concepción", "Antofagasta"],
  answer: "Santiago",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0143",
  question: "What is the capital of Argentina?",
  options: ["Córdoba", "Buenos Aires", "Rosario", "Mendoza"],
  answer: "Buenos Aires",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0144",
  question: "What is the capital of Uruguay?",
  options: ["Montevideo", "Salto", "Punta del Este", "Paysandú"],
  answer: "Montevideo",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0145",
  question: "What is the capital of Paraguay?",
  options: ["Ciudad del Este", "Asunción", "Encarnación", "Luque"],
  answer: "Asunción",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0146",
  question: "What is the capital of Brazil?",
  options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
  answer: "Brasília",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0147",
  question: "What is the capital of Mexico?",
  options: ["Guadalajara", "Mexico City", "Monterrey", "Cancún"],
  answer: "Mexico City",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0148",
  question: "What is the capital of Guatemala?",
  options: ["Antigua Guatemala", "Guatemala City", "Quetzaltenango", "Escuintla"],
  answer: "Guatemala City",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0149",
  question: "What is the capital of Honduras?",
  options: ["San Pedro Sula", "Tegucigalpa", "La Ceiba", "Comayagua"],
  answer: "Tegucigalpa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0150",
  question: "What is the capital of El Salvador?",
  options: ["Santa Ana", "San Salvador", "San Miguel", "Sonsonate"],
  answer: "San Salvador",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0151",
  question: "Which river is the longest in Europe?",
  options: ["Danube", "Volga", "Rhine", "Dnieper"],
  answer: "Volga",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0152",
  question: "Which major river flows through Budapest?",
  options: ["Danube", "Rhine", "Po", "Seine"],
  answer: "Danube",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0153",
  question: "Which river flows through Rome?",
  options: ["Po", "Tiber", "Arno", "Adige"],
  answer: "Tiber",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0154",
  question: "Which river flows through the city of Prague?",
  options: ["Vltava", "Rhine", "Danube", "Oder"],
  answer: "Vltava",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0155",
  question: "Which river is the longest in Asia?",
  options: ["Mekong", "Yangtze", "Ganges", "Indus"],
  answer: "Yangtze",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0156",
  question: "Which river is known as the Huang He?",
  options: ["Yangtze River", "Yellow River", "Mekong River", "Amur River"],
  answer: "Yellow River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0157",
  question: "Which major river flows through Bangladesh and is called the Padma in its lower course?",
  options: ["Ganges", "Indus", "Irrawaddy", "Salween"],
  answer: "Ganges",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0158",
  question: "Which river flows through Baghdad?",
  options: ["Euphrates", "Tigris", "Jordan", "Orontes"],
  answer: "Tigris",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0159",
  question: "Which river flows through Vienna, Bratislava, Budapest, and Belgrade?",
  options: ["Rhine", "Danube", "Elbe", "Vistula"],
  answer: "Danube",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0160",
  question: "Which river forms part of the border between the United States and Mexico?",
  options: ["Rio Grande", "Colorado River", "Missouri River", "Columbia River"],
  answer: "Rio Grande",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0161",
  question: "Which river flows through the Grand Canyon?",
  options: ["Colorado River", "Mississippi River", "Snake River", "Rio Grande"],
  answer: "Colorado River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0162",
  question: "Which river is the main river of the Mississippi River system?",
  options: ["Mississippi River", "Ohio River", "Arkansas River", "Tennessee River"],
  answer: "Mississippi River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0163",
  question: "Which river flows through New Orleans before reaching the Gulf of Mexico?",
  options: ["Mississippi", "Hudson", "Potomac", "St. Lawrence"],
  answer: "Mississippi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0164",
  question: "Which river flows through the city of Montreal's region before reaching the Atlantic Ocean?",
  options: ["St. Lawrence River", "Mackenzie River", "Fraser River", "Saskatchewan River"],
  answer: "St. Lawrence River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0165",
  question: "Which river is the longest in South America?",
  options: ["Paraná", "Amazon", "Orinoco", "São Francisco"],
  answer: "Amazon",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0166",
  question: "Which river forms part of the border between Paraguay and Argentina?",
  options: ["Paraná River", "Orinoco River", "Magdalena River", "Essequibo River"],
  answer: "Paraná River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0167",
  question: "Which river is an important waterway in Venezuela and Colombia?",
  options: ["Orinoco", "Paraná", "Lena", "Murray"],
  answer: "Orinoco",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0168",
  question: "Which river flows through Moscow's wider river basin and eventually into the Caspian Sea?",
  options: ["Volga", "Dnieper", "Don", "Neva"],
  answer: "Volga",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0169",
  question: "Which river flows through Dresden and Hamburg?",
  options: ["Elbe", "Rhine", "Oder", "Main"],
  answer: "Elbe",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0170",
  question: "Which river is the longest in France?",
  options: ["Loire", "Rhône", "Garonne", "Seine"],
  answer: "Loire",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0171",
  question: "Which river flows through Florence, Italy?",
  options: ["Arno", "Po", "Tiber", "Adige"],
  answer: "Arno",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0172",
  question: "Which river flows through Warsaw?",
  options: ["Vistula", "Oder", "Elbe", "Dniester"],
  answer: "Vistula",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0173",
  question: "Which river flows through Kyiv?",
  options: ["Dnieper", "Vistula", "Danube", "Don"],
  answer: "Dnieper",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0174",
  question: "Which river flows through the city of Belgrade?",
  options: ["Danube", "Tiber", "Seine", "Thames"],
  answer: "Danube",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0175",
  question: "Which river flows through Bangkok?",
  options: ["Chao Phraya", "Mekong", "Irrawaddy", "Red River"],
  answer: "Chao Phraya",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0176",
  question: "Which river forms a major part of the border between Thailand and Laos?",
  options: ["Mekong", "Salween", "Chao Phraya", "Red River"],
  answer: "Mekong",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0177",
  question: "Which river flows through Yangon in Myanmar?",
  options: ["Yangon River", "Yangtze River", "Ganges River", "Mekong River"],
  answer: "Yangon River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0178",
  question: "Which river is an important source of water for much of northern India?",
  options: ["Ganges", "Jordan", "Tigris", "Volga"],
  answer: "Ganges",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0179",
  question: "Which river flows through Pakistan and gives the country its name?",
  options: ["Indus", "Ganges", "Brahmaputra", "Mekong"],
  answer: "Indus",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0180",
  question: "Which river is the main river of Myanmar?",
  options: ["Irrawaddy", "Mekong", "Ganges", "Yangtze"],
  answer: "Irrawaddy",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0181",
  question: "Which lake is the deepest freshwater lake in the world?",
  options: ["Lake Superior", "Lake Baikal", "Lake Victoria", "Lake Erie"],
  answer: "Lake Baikal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0182",
  question: "Which Great Lake is the largest by surface area?",
  options: ["Lake Erie", "Lake Superior", "Lake Ontario", "Lake Huron"],
  answer: "Lake Superior",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0183",
  question: "Which lake is the largest in Africa by surface area?",
  options: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Chad"],
  answer: "Lake Victoria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0184",
  question: "Which lake is the second deepest freshwater lake in the world?",
  options: ["Lake Tanganyika", "Lake Victoria", "Lake Ladoga", "Lake Erie"],
  answer: "Lake Tanganyika",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0185",
  question: "Which lake lies between Peru and Bolivia?",
  options: ["Lake Titicaca", "Lake Poopó", "Lake Nicaragua", "Lake Maracaibo"],
  answer: "Lake Titicaca",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0186",
  question: "Which large body of water lies between Europe and Asia and is the world's largest inland body of water?",
  options: ["Caspian Sea", "Aral Sea", "Black Sea", "Red Sea"],
  answer: "Caspian Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0187",
  question: "Which lake borders Tanzania, Uganda, and Kenya?",
  options: ["Lake Victoria", "Lake Chad", "Lake Tanganyika", "Lake Malawi"],
  answer: "Lake Victoria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0188",
  question: "Which lake lies along the border of Tanzania and the Democratic Republic of the Congo?",
  options: ["Lake Tanganyika", "Lake Victoria", "Lake Chad", "Lake Turkana"],
  answer: "Lake Tanganyika",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0189",
  question: "Which Great Lake lies entirely within the United States?",
  options: ["Lake Superior", "Lake Michigan", "Lake Huron", "Lake Ontario"],
  answer: "Lake Michigan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0190",
  question: "Which large lake in Central America lies mainly within Nicaragua?",
  options: ["Lake Nicaragua", "Lake Chapala", "Lake Atitlán", "Lake Maracaibo"],
  answer: "Lake Nicaragua",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0191",
  question: "Which lake is famous for its unusually high salinity and lies on the border between Jordan and Israel and the West Bank?",
  options: ["Dead Sea", "Sea of Galilee", "Lake Van", "Lake Urmia"],
  answer: "Dead Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0192",
  question: "Which sea connects to the Atlantic Ocean through the Strait of Gibraltar?",
  options: ["Mediterranean Sea", "Red Sea", "Baltic Sea", "Black Sea"],
  answer: "Mediterranean Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0193",
  question: "Which sea lies between Saudi Arabia and northeastern Africa?",
  options: ["Red Sea", "Black Sea", "Baltic Sea", "Arabian Sea"],
  answer: "Red Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0194",
  question: "Which body of water lies between the Arabian Peninsula and India?",
  options: ["Arabian Sea", "Baltic Sea", "Caribbean Sea", "North Sea"],
  answer: "Arabian Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0195",
  question: "Which gulf separates Iran from the Arabian Peninsula?",
  options: ["Persian Gulf", "Gulf of Mexico", "Gulf of Guinea", "Gulf of Bothnia"],
  answer: "Persian Gulf",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0196",
  question: "Which strait connects the Mediterranean Sea with the Atlantic Ocean?",
  options: ["Strait of Gibraltar", "Strait of Hormuz", "Bering Strait", "Strait of Malacca"],
  answer: "Strait of Gibraltar",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0197",
  question: "Which strait separates Alaska from Russia?",
  options: ["Bering Strait", "Strait of Gibraltar", "Strait of Malacca", "Strait of Dover"],
  answer: "Bering Strait",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0198",
  question: "Which strait connects the Persian Gulf to the Gulf of Oman?",
  options: ["Strait of Hormuz", "Bosphorus", "Bering Strait", "Strait of Gibraltar"],
  answer: "Strait of Hormuz",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0199",
  question: "Which strait separates the Malay Peninsula from Sumatra?",
  options: ["Strait of Malacca", "Taiwan Strait", "Bering Strait", "Strait of Dover"],
  answer: "Strait of Malacca",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0200",
  question: "Which canal connects the Mediterranean Sea to the Red Sea?",
  options: ["Panama Canal", "Suez Canal", "Kiel Canal", "Corinth Canal"],
  answer: "Suez Canal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0201",
  question: "Which canal connects the Atlantic and Pacific oceans through Central America?",
  options: ["Suez Canal", "Panama Canal", "Kiel Canal", "Corinth Canal"],
  answer: "Panama Canal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0202",
  question: "Which mountain is the highest in Africa?",
  options: ["Mount Kenya", "Mount Kilimanjaro", "Mount Stanley", "Mount Toubkal"],
  answer: "Mount Kilimanjaro",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0203",
  question: "Which mountain is the highest in North America?",
  options: ["Mount Logan", "Denali", "Mount Rainier", "Mount Whitney"],
  answer: "Denali",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0204",
  question: "Which mountain is the highest in South America?",
  options: ["Aconcagua", "Ojos del Salado", "Huascarán", "Chimborazo"],
  answer: "Aconcagua",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0205",
  question: "Which mountain is the highest in Japan?",
  options: ["Mount Fuji", "Mount Kita", "Mount Aso", "Mount Haku"],
  answer: "Mount Fuji",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0206",
  question: "Which mountain is the highest in the Alps?",
  options: ["Matterhorn", "Mont Blanc", "Eiger", "Grossglockner"],
  answer: "Mont Blanc",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0207",
  question: "Which mountain range forms much of the natural border between France and Spain?",
  options: ["Pyrenees", "Alps", "Carpathians", "Apennines"],
  answer: "Pyrenees",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0208",
  question: "Which mountain range runs along western South America?",
  options: ["Andes", "Rocky Mountains", "Himalayas", "Atlas Mountains"],
  answer: "Andes",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0209",
  question: "Which mountain range runs through western North America?",
  options: ["Rocky Mountains", "Alps", "Urals", "Drakensberg"],
  answer: "Rocky Mountains",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0210",
  question: "Which mountain range is found in eastern North America?",
  options: ["Appalachian Mountains", "Andes", "Atlas Mountains", "Himalayas"],
  answer: "Appalachian Mountains",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0211",
  question: "Which mountain range includes Mount Elbrus, commonly considered Europe's highest peak?",
  options: ["Caucasus Mountains", "Alps", "Pyrenees", "Carpathians"],
  answer: "Caucasus Mountains",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0212",
  question: "Which mountain range is commonly used as part of the boundary between Europe and Asia?",
  options: ["Ural Mountains", "Alps", "Appalachians", "Atlas Mountains"],
  answer: "Ural Mountains",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0213",
  question: "Which mountain range stretches across northwestern Africa?",
  options: ["Atlas Mountains", "Drakensberg", "Alps", "Himalayas"],
  answer: "Atlas Mountains",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0214",
  question: "Which mountain range is found along eastern Australia?",
  options: ["Great Dividing Range", "Rocky Mountains", "Alps", "Andes"],
  answer: "Great Dividing Range",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0215",
  question: "Which mountain is the highest in mainland Australia?",
  options: ["Mount Kosciuszko", "Mount Townsend", "Mount Bogong", "Mount Ossa"],
  answer: "Mount Kosciuszko",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0216",
  question: "Which mountain is the highest in Canada?",
  options: ["Mount Logan", "Mount Saint Elias", "Mount Robson", "Mount Fairweather"],
  answer: "Mount Logan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0217",
  question: "Which mountain is the highest in the contiguous United States?",
  options: ["Mount Whitney", "Mount Elbert", "Mount Rainier", "Mount Shasta"],
  answer: "Mount Whitney",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0218",
  question: "Which mountain is the highest on the island of Borneo?",
  options: ["Mount Kinabalu", "Mount Apo", "Mount Merapi", "Mount Rinjani"],
  answer: "Mount Kinabalu",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0219",
  question: "Which mountain is a famous active volcano on Sicily?",
  options: ["Mount Etna", "Mount Vesuvius", "Stromboli", "Mount Olympus"],
  answer: "Mount Etna",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0220",
  question: "Which volcano famously erupted near Pompeii in 79 CE?",
  options: ["Mount Vesuvius", "Mount Etna", "Krakatoa", "Mount Fuji"],
  answer: "Mount Vesuvius",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0221",
  question: "Which Indonesian volcanic island erupted catastrophically in 1883?",
  options: ["Krakatoa", "Bali", "Java", "Sumatra"],
  answer: "Krakatoa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0222",
  question: "Which Hawaiian volcano is one of the world's largest active shield volcanoes?",
  options: ["Mauna Loa", "Mount Fuji", "Mount Elbrus", "Mount Kenya"],
  answer: "Mauna Loa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0223",
  question: "Which oceanic region contains the Ring of Fire?",
  options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
  answer: "Pacific Ocean",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0224",
  question: "What is the name of the supercontinent that existed before the continents drifted apart?",
  options: ["Pangaea", "Gondwana only", "Laurasia only", "Atlantis"],
  answer: "Pangaea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0225",
  question: "What is the process called when one tectonic plate moves beneath another?",
  options: ["Subduction", "Evaporation", "Condensation", "Deposition"],
  answer: "Subduction",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0226",
  question: "What type of plate boundary is formed when two tectonic plates move apart?",
  options: ["Divergent boundary", "Convergent boundary", "Transform boundary", "Collision zone only"],
  answer: "Divergent boundary",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0227",
  question: "What type of plate boundary occurs when two plates slide past each other?",
  options: ["Transform boundary", "Divergent boundary", "Convergent boundary", "Subduction boundary only"],
  answer: "Transform boundary",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0228",
  question: "Which instrument measures earthquake magnitude and ground motion?",
  options: ["Seismograph", "Thermometer", "Barometer", "Anemometer"],
  answer: "Seismograph",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0229",
  question: "What is molten rock beneath Earth's surface called?",
  options: ["Magma", "Lava", "Ash", "Basalt"],
  answer: "Magma",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0230",
  question: "What is molten rock called after it reaches Earth's surface?",
  options: ["Magma", "Lava", "Granite", "Quartz"],
  answer: "Lava",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0231",
  question: "What is the process of breaking rock into smaller pieces without necessarily moving it called?",
  options: ["Weathering", "Erosion", "Deposition", "Compaction"],
  answer: "Weathering",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0232",
  question: "What is the movement of weathered rock and soil by water, wind, or ice called?",
  options: ["Erosion", "Condensation", "Crystallization", "Evaporation"],
  answer: "Erosion",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0233",
  question: "What is the settling of transported sediment called?",
  options: ["Deposition", "Subduction", "Weathering", "Sublimation"],
  answer: "Deposition",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0234",
  question: "Which type of rock forms when molten rock cools and solidifies?",
  options: ["Igneous rock", "Sedimentary rock", "Metamorphic rock", "Organic soil"],
  answer: "Igneous rock",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0235",
  question: "Which type of rock commonly forms from layers of accumulated sediment?",
  options: ["Sedimentary rock", "Igneous rock", "Metamorphic rock", "Volcanic glass only"],
  answer: "Sedimentary rock",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0236",
  question: "Which type of rock forms when existing rock is changed by heat and pressure?",
  options: ["Metamorphic rock", "Sedimentary rock", "Igneous rock", "Unconsolidated sand only"],
  answer: "Metamorphic rock",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0237",
  question: "Which rock type includes granite?",
  options: ["Igneous", "Sedimentary", "Metamorphic", "Organic"],
  answer: "Igneous",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0238",
  question: "Which rock type includes limestone?",
  options: ["Sedimentary", "Igneous", "Metamorphic", "Volcanic glass"],
  answer: "Sedimentary",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0239",
  question: "Which rock type includes marble?",
  options: ["Metamorphic", "Igneous", "Sedimentary", "Pyroclastic only"],
  answer: "Metamorphic",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0240",
  question: "What is the point on Earth's surface directly above the focus of an earthquake called?",
  options: ["Epicentre", "Fault line", "Crater", "Mantle"],
  answer: "Epicentre",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0241",
  question: "Which natural event can generate a tsunami when it suddenly displaces a large volume of seawater?",
  options: ["Undersea earthquake", "Ordinary sea breeze", "Light rainfall", "Daily evaporation"],
  answer: "Undersea earthquake",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0242",
  question: "Which type of cloud is commonly associated with thunderstorms?",
  options: ["Cumulonimbus", "Cirrus", "Stratus", "Altostratus only"],
  answer: "Cumulonimbus",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0243",
  question: "What is the boundary between two different air masses called?",
  options: ["Front", "Ridge", "Delta", "Watershed"],
  answer: "Front",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0244",
  question: "Which instrument measures atmospheric pressure?",
  options: ["Barometer", "Anemometer", "Rain gauge", "Hygrometer"],
  answer: "Barometer",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0245",
  question: "Which instrument measures wind speed?",
  options: ["Anemometer", "Barometer", "Thermometer", "Compass"],
  answer: "Anemometer",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0246",
  question: "Which instrument measures relative humidity?",
  options: ["Hygrometer", "Seismograph", "Altimeter", "Ammeter"],
  answer: "Hygrometer",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0247",
  question: "Which instrument measures rainfall?",
  options: ["Rain gauge", "Barometer", "Compass", "Thermometer"],
  answer: "Rain gauge",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0248",
  question: "What is the boundary between Earth's crust and mantle called?",
  options: ["Mohorovičić discontinuity", "Equator", "Prime Meridian", "Tropic of Cancer"],
  answer: "Mohorovičić discontinuity",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0249",
  question: "Which part of Earth lies directly beneath the crust?",
  options: ["Mantle", "Inner core", "Outer core", "Atmosphere"],
  answer: "Mantle",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0250",
  question: "Which layer of Earth is mainly liquid iron and nickel?",
  options: ["Outer core", "Crust", "Upper mantle", "Inner core"],
  answer: "Outer core",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0251",
  question: "Which country is the largest in Africa by land area?",
  options: ["Sudan", "Algeria", "Democratic Republic of the Congo", "Libya"],
  answer: "Algeria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0252",
  question: "Which country is the most populous in Africa?",
  options: ["Egypt", "Nigeria", "Ethiopia", "South Africa"],
  answer: "Nigeria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0253",
  question: "Which African country is completely surrounded by South Africa?",
  options: ["Lesotho", "Eswatini", "Botswana", "Namibia"],
  answer: "Lesotho",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0254",
  question: "Which two countries border Lesotho?",
  options: ["South Africa only", "South Africa and Eswatini", "South Africa and Botswana", "South Africa and Mozambique"],
  answer: "South Africa only",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0255",
  question: "Which country is known for the Okavango Delta?",
  options: ["Botswana", "Tunisia", "Morocco", "Eritrea"],
  answer: "Botswana",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0256",
  question: "Which country contains most of the Namib Desert?",
  options: ["Namibia", "Kenya", "Ghana", "Uganda"],
  answer: "Namibia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0257",
  question: "Which country is home to the ancient rock-hewn churches of Lalibela?",
  options: ["Ethiopia", "Egypt", "Senegal", "Angola"],
  answer: "Ethiopia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0258",
  question: "Which sea borders Egypt to the east?",
  options: ["Red Sea", "Black Sea", "Baltic Sea", "Arabian Sea"],
  answer: "Red Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0259",
  question: "Which African country has the city of Marrakech?",
  options: ["Morocco", "Algeria", "Tunisia", "Libya"],
  answer: "Morocco",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0260",
  question: "Which country contains the ancient city of Carthage?",
  options: ["Tunisia", "Egypt", "Morocco", "Libya"],
  answer: "Tunisia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0261",
  question: "Which country contains the city of Alexandria on the Mediterranean coast?",
  options: ["Egypt", "Libya", "Algeria", "Sudan"],
  answer: "Egypt",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0262",
  question: "Which African country has the historic city of Timbuktu?",
  options: ["Mali", "Niger", "Chad", "Gabon"],
  answer: "Mali",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0263",
  question: "Which country is home to the ancient city of Aksum?",
  options: ["Ethiopia", "Ghana", "Namibia", "Morocco"],
  answer: "Ethiopia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0264",
  question: "Which African country is famous for the rock formations of the Drakensberg region?",
  options: ["South Africa", "Egypt", "Mauritania", "Libya"],
  answer: "South Africa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0265",
  question: "Which African island country lies off the southeastern coast of the mainland?",
  options: ["Madagascar", "Cape Verde", "São Tomé and Príncipe", "Mauritania"],
  answer: "Madagascar",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0266",
  question: "Which African island country lies in the Indian Ocean east of Madagascar?",
  options: ["Mauritius", "Cape Verde", "Guinea-Bissau", "Sierra Leone"],
  answer: "Mauritius",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0267",
  question: "Which island nation is an archipelago in the Indian Ocean northeast of Madagascar?",
  options: ["Seychelles", "Cape Verde", "Comoros", "Equatorial Guinea"],
  answer: "Seychelles",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0268",
  question: "Which African country consists of a mainland region and islands including Bioko?",
  options: ["Equatorial Guinea", "Gambia", "Togo", "Benin"],
  answer: "Equatorial Guinea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0269",
  question: "Which country is located on the Gulf of Guinea and includes the islands of São Tomé and Príncipe?",
  options: ["São Tomé and Príncipe", "Seychelles", "Mauritius", "Lesotho"],
  answer: "São Tomé and Príncipe",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0270",
  question: "Which country is the smallest mainland country in Africa by land area?",
  options: ["The Gambia", "Togo", "Gabon", "Senegal"],
  answer: "The Gambia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0271",
  question: "Which country almost completely surrounds The Gambia?",
  options: ["Senegal", "Guinea", "Mali", "Mauritania"],
  answer: "Senegal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0272",
  question: "Which African country is home to Lake Malawi?",
  options: ["Malawi", "Liberia", "Morocco", "Algeria"],
  answer: "Malawi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0273",
  question: "Which country shares Victoria Falls with Zambia?",
  options: ["Zimbabwe", "Botswana", "Angola", "Namibia"],
  answer: "Zimbabwe",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0274",
  question: "Which river forms Victoria Falls?",
  options: ["Zambezi River", "Congo River", "Niger River", "Limpopo River"],
  answer: "Zambezi River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0275",
  question: "Which African river empties into the Gulf of Guinea?",
  options: ["Niger River", "Orange River", "Zambezi River", "Limpopo River"],
  answer: "Niger River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0276",
  question: "Which river forms part of the boundary between Zambia and Zimbabwe?",
  options: ["Zambezi River", "Senegal River", "Ogooué River", "Orange River"],
  answer: "Zambezi River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0277",
  question: "Which river runs through central Africa and is known for its large tropical rainforest basin?",
  options: ["Congo River", "Limpopo River", "Orange River", "Senegal River"],
  answer: "Congo River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0278",
  question: "Which country is home to the Congo Basin rainforest?",
  options: ["Democratic Republic of the Congo", "Libya", "Tunisia", "Lesotho"],
  answer: "Democratic Republic of the Congo",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0279",
  question: "Which lake lies between Zambia, Tanzania, and Mozambique?",
  options: ["Lake Malawi", "Lake Victoria", "Lake Chad", "Lake Albert"],
  answer: "Lake Malawi",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0280",
  question: "Which country contains the Danakil Depression?",
  options: ["Ethiopia", "Ghana", "Morocco", "Gabon"],
  answer: "Ethiopia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0281",
  question: "Which African country is known for the ancient city of Fez?",
  options: ["Morocco", "Egypt", "Namibia", "Nigeria"],
  answer: "Morocco",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0282",
  question: "Which country contains the historic city of Zanzibar City?",
  options: ["Tanzania", "Kenya", "Somalia", "Mozambique"],
  answer: "Tanzania",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0283",
  question: "Which African country has the city of Luanda as its capital?",
  options: ["Angola", "Mozambique", "Zambia", "Zimbabwe"],
  answer: "Angola",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0284",
  question: "Which African country has Maputo as its capital?",
  options: ["Mozambique", "Angola", "Tanzania", "Malawi"],
  answer: "Mozambique",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0285",
  question: "Which country contains the ancient rock churches of Petra's African counterpart, Lalibela?",
  options: ["Ethiopia", "Sudan", "Cameroon", "Botswana"],
  answer: "Ethiopia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0286",
  question: "Which African country is famous for the Serengeti National Park?",
  options: ["Tanzania", "Ghana", "Algeria", "Senegal"],
  answer: "Tanzania",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0287",
  question: "Which country contains Kruger National Park?",
  options: ["South Africa", "Uganda", "Chad", "Morocco"],
  answer: "South Africa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0288",
  question: "Which country is home to the Maasai Mara wildlife reserve?",
  options: ["Kenya", "Botswana", "Gabon", "Eritrea"],
  answer: "Kenya",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0289",
  question: "Which country contains Bwindi Impenetrable National Park, famous for mountain gorillas?",
  options: ["Uganda", "Senegal", "Libya", "Mauritania"],
  answer: "Uganda",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0290",
  question: "Which country is home to the ancient city of Carthage?",
  options: ["Tunisia", "Nigeria", "Kenya", "Namibia"],
  answer: "Tunisia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0291",
  question: "Which country contains the city of Casablanca?",
  options: ["Morocco", "Algeria", "Egypt", "Libya"],
  answer: "Morocco",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0292",
  question: "Which country contains the city of Dakar?",
  options: ["Senegal", "Mali", "Burkina Faso", "Niger"],
  answer: "Senegal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0293",
  question: "Which country has Accra as its capital?",
  options: ["Ghana", "Togo", "Benin", "Côte d'Ivoire"],
  answer: "Ghana",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0294",
  question: "Which country has Lomé as its capital?",
  options: ["Togo", "Ghana", "Benin", "Liberia"],
  answer: "Togo",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0295",
  question: "Which country has Porto-Novo as its official capital?",
  options: ["Benin", "Togo", "Ghana", "Niger"],
  answer: "Benin",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0296",
  question: "Which country has Yamoussoukro as its official capital?",
  options: ["Côte d'Ivoire", "Liberia", "Guinea", "Sierra Leone"],
  answer: "Côte d'Ivoire",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0297",
  question: "Which country has Conakry as its capital?",
  options: ["Guinea", "Guinea-Bissau", "Gambia", "Sierra Leone"],
  answer: "Guinea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0298",
  question: "Which country has Freetown as its capital?",
  options: ["Sierra Leone", "Liberia", "Gambia", "Guinea"],
  answer: "Sierra Leone",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0299",
  question: "Which country has Monrovia as its capital?",
  options: ["Liberia", "Ghana", "Guinea", "Senegal"],
  answer: "Liberia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0300",
  question: "Which country has Bamako as its capital?",
  options: ["Mali", "Niger", "Chad", "Burkina Faso"],
  answer: "Mali",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0301",
  question: "Which country is home to the Taklamakan Desert?",
  options: ["China", "India", "Iran", "Japan"],
  answer: "China",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0302",
  question: "Which desert stretches across parts of Mongolia and northern China?",
  options: ["Gobi Desert", "Arabian Desert", "Atacama Desert", "Kalahari Desert"],
  answer: "Gobi Desert",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0303",
  question: "Which country contains the Tibetan Plateau?",
  options: ["China", "Thailand", "Malaysia", "Cambodia"],
  answer: "China",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0304",
  question: "Which country contains the island of Bali?",
  options: ["Indonesia", "Malaysia", "Philippines", "Thailand"],
  answer: "Indonesia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0305",
  question: "Which three countries share the island of Borneo?",
  options: ["Indonesia, Malaysia, and Brunei", "Indonesia, Singapore, and Thailand", "Malaysia, Vietnam, and Cambodia", "Philippines, Indonesia, and Timor-Leste"],
  answer: "Indonesia, Malaysia, and Brunei",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0306",
  question: "Which country contains the city of Kyoto?",
  options: ["Japan", "South Korea", "China", "Vietnam"],
  answer: "Japan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0307",
  question: "Which country contains the city of Osaka?",
  options: ["Japan", "China", "Thailand", "India"],
  answer: "Japan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0308",
  question: "Which country contains the city of Busan?",
  options: ["South Korea", "North Korea", "Japan", "China"],
  answer: "South Korea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0309",
  question: "Which country contains the Great Wall?",
  options: ["China", "India", "Mongolia", "Japan"],
  answer: "China",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0310",
  question: "Which country is home to the ancient city of Angkor?",
  options: ["Cambodia", "Laos", "Myanmar", "Vietnam"],
  answer: "Cambodia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0311",
  question: "Which country contains the historic city of Bagan?",
  options: ["Myanmar", "Thailand", "Nepal", "Bangladesh"],
  answer: "Myanmar",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0312",
  question: "Which country is home to Borobudur, a famous Buddhist temple complex?",
  options: ["Indonesia", "Cambodia", "India", "Sri Lanka"],
  answer: "Indonesia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0313",
  question: "Which country is home to the Taj Mahal?",
  options: ["India", "Pakistan", "Bangladesh", "Nepal"],
  answer: "India",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0314",
  question: "Which country is home to the ancient city of Petra's Asian neighbour, Jerash?",
  options: ["Jordan", "Iran", "India", "Thailand"],
  answer: "Jordan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0315",
  question: "Which country contains the city of Mecca?",
  options: ["Saudi Arabia", "Iran", "Iraq", "Oman"],
  answer: "Saudi Arabia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0316",
  question: "Which country contains the city of Medina?",
  options: ["Saudi Arabia", "Jordan", "Qatar", "Yemen"],
  answer: "Saudi Arabia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0317",
  question: "Which country is home to the ancient city of Persepolis?",
  options: ["Iran", "Iraq", "Turkey", "Syria"],
  answer: "Iran",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0318",
  question: "Which country contains the historic city of Isfahan?",
  options: ["Iran", "Afghanistan", "Pakistan", "Uzbekistan"],
  answer: "Iran",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0319",
  question: "Which country contains the city of Samarkand?",
  options: ["Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Turkmenistan"],
  answer: "Uzbekistan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0320",
  question: "Which country contains the ancient trading city of Bukhara?",
  options: ["Uzbekistan", "Tajikistan", "Pakistan", "Iran"],
  answer: "Uzbekistan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0321",
  question: "Which country is home to the city of Lahore?",
  options: ["Pakistan", "India", "Afghanistan", "Bangladesh"],
  answer: "Pakistan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0322",
  question: "Which country contains the Sundarbans mangrove forest alongside Bangladesh?",
  options: ["India", "Nepal", "Bhutan", "Pakistan"],
  answer: "India",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0323",
  question: "Which country contains the city of Chittagong, also known as Chattogram?",
  options: ["Bangladesh", "India", "Sri Lanka", "Myanmar"],
  answer: "Bangladesh",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0324",
  question: "Which island country lies immediately south of India?",
  options: ["Sri Lanka", "Maldives", "Mauritius", "Seychelles"],
  answer: "Sri Lanka",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0325",
  question: "Which country contains the city of Kandy?",
  options: ["Sri Lanka", "India", "Nepal", "Thailand"],
  answer: "Sri Lanka",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0326",
  question: "Which country contains Mount Kinabalu?",
  options: ["Malaysia", "Indonesia", "Japan", "Nepal"],
  answer: "Malaysia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0327",
  question: "Which country contains the ancient city of Ayutthaya?",
  options: ["Thailand", "Cambodia", "Vietnam", "Laos"],
  answer: "Thailand",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0328",
  question: "Which country is home to the Mekong Delta?",
  options: ["Vietnam", "Japan", "South Korea", "Mongolia"],
  answer: "Vietnam",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0329",
  question: "Which country contains the city of Mandalay?",
  options: ["Myanmar", "Nepal", "Cambodia", "Brunei"],
  answer: "Myanmar",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0330",
  question: "Which country contains the historic city of Luang Prabang?",
  options: ["Laos", "Thailand", "Vietnam", "Malaysia"],
  answer: "Laos",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0331",
  question: "Which country is known for the island of Jeju?",
  options: ["South Korea", "Japan", "China", "Philippines"],
  answer: "South Korea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0332",
  question: "Which country contains the city of Cebu?",
  options: ["Philippines", "Indonesia", "Malaysia", "Vietnam"],
  answer: "Philippines",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0333",
  question: "Which country is home to the island of Mindanao?",
  options: ["Philippines", "Japan", "Taiwan", "Brunei"],
  answer: "Philippines",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0334",
  question: "Which sea lies between the Korean Peninsula and Japan?",
  options: ["Sea of Japan", "Arabian Sea", "Red Sea", "Baltic Sea"],
  answer: "Sea of Japan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0335",
  question: "Which sea lies east of Vietnam and south of China?",
  options: ["South China Sea", "Mediterranean Sea", "Baltic Sea", "Caribbean Sea"],
  answer: "South China Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0336",
  question: "Which body of water lies between India and the Arabian Peninsula?",
  options: ["Arabian Sea", "Sea of Okhotsk", "Bering Sea", "North Sea"],
  answer: "Arabian Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0337",
  question: "Which country is home to the ancient city of Hampi?",
  options: ["India", "China", "Pakistan", "Nepal"],
  answer: "India",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0338",
  question: "Which country contains Mount Ararat?",
  options: ["Turkey", "Iran", "Jordan", "Iraq"],
  answer: "Turkey",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0339",
  question: "Which country contains the city of Baku?",
  options: ["Azerbaijan", "Armenia", "Georgia", "Kazakhstan"],
  answer: "Azerbaijan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0340",
  question: "Which country contains the city of Yerevan?",
  options: ["Armenia", "Azerbaijan", "Georgia", "Turkey"],
  answer: "Armenia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0341",
  question: "Which country contains the city of Batumi on the Black Sea?",
  options: ["Georgia", "Armenia", "Azerbaijan", "Iran"],
  answer: "Georgia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0342",
  question: "Which country has the city of Jeddah on its Red Sea coast?",
  options: ["Saudi Arabia", "Jordan", "Egypt", "Sudan"],
  answer: "Saudi Arabia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0343",
  question: "Which country contains the port city of Aden?",
  options: ["Yemen", "Oman", "Qatar", "Bahrain"],
  answer: "Yemen",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0344",
  question: "Which country contains the ancient city of Aleppo?",
  options: ["Syria", "Lebanon", "Jordan", "Iraq"],
  answer: "Syria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0345",
  question: "Which country contains the city of Basra?",
  options: ["Iraq", "Iran", "Saudi Arabia", "Jordan"],
  answer: "Iraq",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0346",
  question: "Which country is home to the ancient city of Hoi An?",
  options: ["Vietnam", "Cambodia", "Laos", "Thailand"],
  answer: "Vietnam",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0347",
  question: "Which country contains the historic city of Varanasi?",
  options: ["India", "Nepal", "Pakistan", "Bangladesh"],
  answer: "India",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0348",
  question: "Which country is home to the city of Pokhara?",
  options: ["Nepal", "Bhutan", "India", "Pakistan"],
  answer: "Nepal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0349",
  question: "Which country contains the city of Thimphu?",
  options: ["Bhutan", "Nepal", "Laos", "Myanmar"],
  answer: "Bhutan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0350",
  question: "Which large island country lies east of the Philippines and south of Japan?",
  options: ["Taiwan", "Sri Lanka", "Madagascar", "Iceland"],
  answer: "Taiwan",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0351",
  question: "Which river forms much of the border between the United States and Mexico?",
  options: ["Rio Grande", "Colorado River", "Missouri River", "Columbia River"],
  answer: "Rio Grande",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0352",
  question: "Which country contains the city of Guadalajara?",
  options: ["Mexico", "Colombia", "Peru", "Chile"],
  answer: "Mexico",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0353",
  question: "Which country contains the city of Medellín?",
  options: ["Colombia", "Ecuador", "Venezuela", "Bolivia"],
  answer: "Colombia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0354",
  question: "Which country contains the city of Cusco?",
  options: ["Peru", "Chile", "Argentina", "Ecuador"],
  answer: "Peru",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0355",
  question: "Which country contains the city of Valparaíso?",
  options: ["Chile", "Uruguay", "Paraguay", "Brazil"],
  answer: "Chile",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0356",
  question: "Which country contains the city of Córdoba, a major city northwest of Buenos Aires?",
  options: ["Argentina", "Uruguay", "Chile", "Peru"],
  answer: "Argentina",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0357",
  question: "Which country contains the city of Salvador, a historic coastal city?",
  options: ["Brazil", "Argentina", "Colombia", "Peru"],
  answer: "Brazil",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0358",
  question: "Which country contains the city of Cartagena on the Caribbean coast?",
  options: ["Colombia", "Venezuela", "Mexico", "Panama"],
  answer: "Colombia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0359",
  question: "Which country contains the city of Maracaibo?",
  options: ["Venezuela", "Colombia", "Ecuador", "Chile"],
  answer: "Venezuela",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0360",
  question: "Which country contains Lake Maracaibo?",
  options: ["Venezuela", "Argentina", "Peru", "Bolivia"],
  answer: "Venezuela",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0361",
  question: "Which country contains the city of Manaus in the Amazon region?",
  options: ["Brazil", "Peru", "Colombia", "Bolivia"],
  answer: "Brazil",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0362",
  question: "Which country contains the city of Belém near the mouth of the Amazon River?",
  options: ["Brazil", "Venezuela", "Ecuador", "Guyana"],
  answer: "Brazil",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0363",
  question: "Which river forms part of the border between Argentina and Uruguay?",
  options: ["Uruguay River", "Orinoco River", "Amazon River", "Mackenzie River"],
  answer: "Uruguay River",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0364",
  question: "Which country contains the Atacama Desert?",
  options: ["Chile", "Brazil", "Uruguay", "Guyana"],
  answer: "Chile",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0365",
  question: "Which country contains Salar de Uyuni, a vast salt flat?",
  options: ["Bolivia", "Peru", "Chile", "Argentina"],
  answer: "Bolivia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0366",
  question: "Which country contains Angel Falls, one of the world's highest uninterrupted waterfalls?",
  options: ["Venezuela", "Brazil", "Colombia", "Guyana"],
  answer: "Venezuela",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0367",
  question: "Which country is home to the Galápagos Islands?",
  options: ["Ecuador", "Peru", "Chile", "Colombia"],
  answer: "Ecuador",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0368",
  question: "Which country contains the city of Guayaquil?",
  options: ["Ecuador", "Argentina", "Paraguay", "Uruguay"],
  answer: "Ecuador",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0369",
  question: "Which country contains the city of Rosario?",
  options: ["Argentina", "Chile", "Peru", "Brazil"],
  answer: "Argentina",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0370",
  question: "Which country contains the Iguazú Falls on its border with Brazil?",
  options: ["Argentina", "Colombia", "Ecuador", "Guyana"],
  answer: "Argentina",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0371",
  question: "Which country contains the city of Punta del Este?",
  options: ["Uruguay", "Paraguay", "Bolivia", "Peru"],
  answer: "Uruguay",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0372",
  question: "Which country contains the city of Ciudad del Este?",
  options: ["Paraguay", "Uruguay", "Argentina", "Chile"],
  answer: "Paraguay",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0373",
  question: "Which country is home to the city of Manaus?",
  options: ["Brazil", "Colombia", "Peru", "Venezuela"],
  answer: "Brazil",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0374",
  question: "Which country contains the world's highest navigable lake commonly identified as Lake Titicaca?",
  options: ["Peru and Bolivia", "Argentina and Chile", "Brazil and Paraguay", "Colombia and Venezuela"],
  answer: "Peru and Bolivia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0375",
  question: "Which country contains the city of Arequipa?",
  options: ["Peru", "Ecuador", "Chile", "Colombia"],
  answer: "Peru",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0376",
  question: "Which Caribbean island is shared by Haiti and the Dominican Republic?",
  options: ["Hispaniola", "Jamaica", "Cuba", "Puerto Rico"],
  answer: "Hispaniola",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0377",
  question: "Which Caribbean country occupies the western part of Hispaniola?",
  options: ["Haiti", "Cuba", "Jamaica", "Barbados"],
  answer: "Haiti",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0378",
  question: "Which Caribbean island is home to Kingston?",
  options: ["Jamaica", "Cuba", "Barbados", "Trinidad"],
  answer: "Jamaica",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0379",
  question: "Which country contains the city of San José?",
  options: ["Costa Rica", "Panama", "Honduras", "El Salvador"],
  answer: "Costa Rica",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0380",
  question: "Which country contains the Panama Canal?",
  options: ["Panama", "Costa Rica", "Colombia", "Nicaragua"],
  answer: "Panama",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0381",
  question: "Which Central American country has Managua as its capital?",
  options: ["Nicaragua", "Honduras", "Guatemala", "Belize"],
  answer: "Nicaragua",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0382",
  question: "Which Central American country has Belize City as its largest city?",
  options: ["Belize", "Guatemala", "Honduras", "Panama"],
  answer: "Belize",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0383",
  question: "Which country contains the ancient Maya city of Tikal?",
  options: ["Guatemala", "Mexico", "Belize", "Honduras"],
  answer: "Guatemala",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0384",
  question: "Which country contains the ancient Maya city of Chichén Itzá?",
  options: ["Mexico", "Guatemala", "Belize", "Honduras"],
  answer: "Mexico",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0385",
  question: "Which state in the United States is famous for the Grand Canyon?",
  options: ["Arizona", "Nevada", "Colorado", "Utah"],
  answer: "Arizona",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0386",
  question: "Which US state is home to Yellowstone National Park?",
  options: ["Wyoming", "Florida", "Alabama", "New Jersey"],
  answer: "Wyoming",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0387",
  question: "Which US state is famous for the city of Las Vegas?",
  options: ["Nevada", "Arizona", "Utah", "California"],
  answer: "Nevada",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0388",
  question: "Which US state is home to the city of Miami?",
  options: ["Florida", "Texas", "Georgia", "Alabama"],
  answer: "Florida",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0389",
  question: "Which US state contains the city of Seattle?",
  options: ["Washington", "Oregon", "California", "Idaho"],
  answer: "Washington",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0390",
  question: "Which US state contains the city of New Orleans?",
  options: ["Louisiana", "Mississippi", "Alabama", "Arkansas"],
  answer: "Louisiana",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0391",
  question: "Which country contains the city of Toronto?",
  options: ["Canada", "United States", "Australia", "United Kingdom"],
  answer: "Canada",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0392",
  question: "Which Canadian province contains the city of Vancouver?",
  options: ["British Columbia", "Alberta", "Ontario", "Quebec"],
  answer: "British Columbia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0393",
  question: "Which Canadian province contains the city of Quebec City?",
  options: ["Quebec", "Ontario", "Manitoba", "Alberta"],
  answer: "Quebec",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0394",
  question: "Which Canadian province contains the city of Calgary?",
  options: ["Alberta", "Ontario", "British Columbia", "Nova Scotia"],
  answer: "Alberta",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0395",
  question: "Which country contains the city of Halifax in its Atlantic provinces?",
  options: ["Canada", "United States", "Iceland", "Ireland"],
  answer: "Canada",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0396",
  question: "Which ocean borders the eastern coast of the United States?",
  options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
  answer: "Atlantic Ocean",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0397",
  question: "Which ocean borders the western coast of the United States?",
  options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Southern Ocean"],
  answer: "Pacific Ocean",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0398",
  question: "Which country contains the city of Anchorage?",
  options: ["United States", "Canada", "Russia", "Norway"],
  answer: "United States",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0399",
  question: "Which country contains the city of Ottawa?",
  options: ["Canada", "United States", "Australia", "New Zealand"],
  answer: "Canada",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0400",
  question: "Which of these countries is an island nation in the Caribbean?",
  options: ["Jamaica", "Paraguay", "Bolivia", "Mongolia"],
  answer: "Jamaica",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0401",
  question: "Which country is home to the Great Barrier Reef?",
  options: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
  answer: "Australia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0402",
  question: "Which is the largest country in Oceania by land area?",
  options: ["Australia", "Papua New Guinea", "New Zealand", "Fiji"],
  answer: "Australia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0403",
  question: "Which island country lies southeast of Australia?",
  options: ["New Zealand", "Sri Lanka", "Iceland", "Madagascar"],
  answer: "New Zealand",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0404",
  question: "Which ocean surrounds many of the islands of Polynesia?",
  options: ["Pacific Ocean", "Atlantic Ocean", "Arctic Ocean", "Southern Ocean"],
  answer: "Pacific Ocean",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0405",
  question: "Which island country is home to the city of Suva?",
  options: ["Fiji", "Samoa", "Tonga", "Vanuatu"],
  answer: "Fiji",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0406",
  question: "Which island country has Apia as its capital?",
  options: ["Samoa", "Fiji", "Tonga", "Vanuatu"],
  answer: "Samoa",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0407",
  question: "Which Pacific island country has Nuku'alofa as its capital?",
  options: ["Tonga", "Fiji", "Samoa", "Palau"],
  answer: "Tonga",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0408",
  question: "Which Pacific island country has Port Vila as its capital?",
  options: ["Vanuatu", "Fiji", "Samoa", "Kiribati"],
  answer: "Vanuatu",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0409",
  question: "Which Pacific island country has Honiara as its capital?",
  options: ["Solomon Islands", "Fiji", "Tonga", "Samoa"],
  answer: "Solomon Islands",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0410",
  question: "Which Pacific island country has Palikir as its capital?",
  options: ["Federated States of Micronesia", "Palau", "Kiribati", "Nauru"],
  answer: "Federated States of Micronesia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0411",
  question: "Which Pacific island nation has Ngerulmud as its capital?",
  options: ["Palau", "Nauru", "Tuvalu", "Marshall Islands"],
  answer: "Palau",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0412",
  question: "Which Pacific island nation has Majuro as its capital?",
  options: ["Marshall Islands", "Tuvalu", "Nauru", "Kiribati"],
  answer: "Marshall Islands",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0413",
  question: "Which Pacific country has Funafuti as its capital?",
  options: ["Tuvalu", "Palau", "Fiji", "Tonga"],
  answer: "Tuvalu",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0414",
  question: "Which Pacific country has Yaren as its government seat, though it has no officially designated capital?",
  options: ["Nauru", "Tuvalu", "Palau", "Samoa"],
  answer: "Nauru",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0415",
  question: "Which country contains the city of Port Moresby?",
  options: ["Papua New Guinea", "Fiji", "Australia", "Solomon Islands"],
  answer: "Papua New Guinea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0416",
  question: "Which mountain is the highest in Papua New Guinea?",
  options: ["Mount Wilhelm", "Mount Giluwe", "Mount Hagen", "Mount Tavurvur"],
  answer: "Mount Wilhelm",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0417",
  question: "Which country contains the city of Darwin?",
  options: ["Australia", "New Zealand", "Papua New Guinea", "Fiji"],
  answer: "Australia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0418",
  question: "Which Australian state contains the city of Melbourne?",
  options: ["Victoria", "Queensland", "Tasmania", "Western Australia"],
  answer: "Victoria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0419",
  question: "Which Australian state contains the city of Brisbane?",
  options: ["Queensland", "Victoria", "New South Wales", "Tasmania"],
  answer: "Queensland",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0420",
  question: "Which Australian state contains the city of Perth?",
  options: ["Western Australia", "South Australia", "Queensland", "Victoria"],
  answer: "Western Australia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0421",
  question: "Which island lies south of mainland Australia and forms an Australian state?",
  options: ["Tasmania", "Java", "Borneo", "Honshu"],
  answer: "Tasmania",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0422",
  question: "Which sea lies between Australia and New Zealand?",
  options: ["Tasman Sea", "Coral Sea", "Arafura Sea", "Bering Sea"],
  answer: "Tasman Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0423",
  question: "Which sea lies between northeastern Australia and Papua New Guinea?",
  options: ["Coral Sea", "Tasman Sea", "Arabian Sea", "Baltic Sea"],
  answer: "Coral Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0424",
  question: "Which country contains the city of Christchurch?",
  options: ["New Zealand", "Australia", "Fiji", "Samoa"],
  answer: "New Zealand",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0425",
  question: "Which island is the largest in New Zealand?",
  options: ["South Island", "Stewart Island", "North Island", "Great Barrier Island"],
  answer: "South Island",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0426",
  question: "Which European country is famous for the fjords around Bergen?",
  options: ["Norway", "Portugal", "Hungary", "Austria"],
  answer: "Norway",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0427",
  question: "Which sea lies between Sweden and the Baltic states?",
  options: ["Baltic Sea", "Black Sea", "Red Sea", "Caribbean Sea"],
  answer: "Baltic Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0428",
  question: "Which country contains the city of Porto?",
  options: ["Portugal", "Spain", "Italy", "Greece"],
  answer: "Portugal",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0429",
  question: "Which European country contains the city of Seville?",
  options: ["Spain", "Italy", "France", "Portugal"],
  answer: "Spain",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0430",
  question: "Which country contains the city of Lyon?",
  options: ["France", "Belgium", "Switzerland", "Germany"],
  answer: "France",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0431",
  question: "Which country contains the city of Naples?",
  options: ["Italy", "Spain", "Greece", "Croatia"],
  answer: "Italy",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0432",
  question: "Which country contains the city of Hamburg?",
  options: ["Germany", "Austria", "Poland", "Denmark"],
  answer: "Germany",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0433",
  question: "Which country contains the city of Kraków?",
  options: ["Poland", "Czechia", "Slovakia", "Hungary"],
  answer: "Poland",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0434",
  question: "Which country contains the city of Dubrovnik?",
  options: ["Croatia", "Greece", "Albania", "Montenegro"],
  answer: "Croatia",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0435",
  question: "Which country contains the city of Thessaloniki?",
  options: ["Greece", "Turkey", "Bulgaria", "Serbia"],
  answer: "Greece",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0436",
  question: "Which country contains the city of Antalya on its Mediterranean coast?",
  options: ["Turkey", "Greece", "Cyprus", "Lebanon"],
  answer: "Turkey",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0437",
  question: "Which country contains the city of Kraków, a historic cultural centre?",
  options: ["Poland", "Austria", "Ukraine", "Romania"],
  answer: "Poland",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0438",
  question: "Which European country contains the island of Corsica?",
  options: ["France", "Italy", "Spain", "Greece"],
  answer: "France",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0439",
  question: "Which country contains the island of Sardinia?",
  options: ["Italy", "France", "Spain", "Malta"],
  answer: "Italy",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0440",
  question: "Which country contains the island of Crete?",
  options: ["Greece", "Italy", "Cyprus", "Croatia"],
  answer: "Greece",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0441",
  question: "Which sea lies between Italy and the Balkan Peninsula?",
  options: ["Adriatic Sea", "Baltic Sea", "North Sea", "Red Sea"],
  answer: "Adriatic Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0442",
  question: "Which sea lies north of Turkey and south of Ukraine?",
  options: ["Black Sea", "Baltic Sea", "North Sea", "Caspian Sea"],
  answer: "Black Sea",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0443",
  question: "Which country contains the city of Innsbruck?",
  options: ["Austria", "Switzerland", "Germany", "Slovenia"],
  answer: "Austria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0444",
  question: "Which country contains the city of Geneva?",
  options: ["Switzerland", "France", "Austria", "Germany"],
  answer: "Switzerland",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0445",
  question: "Which country contains the city of Basel?",
  options: ["Switzerland", "Germany", "France", "Belgium"],
  answer: "Switzerland",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0446",
  question: "Which country contains the city of Bruges?",
  options: ["Belgium", "Netherlands", "Luxembourg", "France"],
  answer: "Belgium",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0447",
  question: "Which country contains the city of Rotterdam?",
  options: ["Netherlands", "Belgium", "Denmark", "Germany"],
  answer: "Netherlands",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0448",
  question: "Which country contains the city of Salzburg?",
  options: ["Austria", "Germany", "Switzerland", "Czechia"],
  answer: "Austria",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0449",
  question: "Which country contains the city of Seville, famous for its historic architecture?",
  options: ["Spain", "Portugal", "France", "Italy"],
  answer: "Spain",
  category: "geography",
  difficulty: 50
},
{
  id: "geography_0450",
  question: "Which European country is famous for the historic city of Dubrovnik on the Adriatic coast?",
  options: ["Croatia", "Greece", "Albania", "Slovenia"],
  answer: "Croatia",
  category: "geography",
  difficulty: 50
},

    {

      question: "which country has won the fifa men's world cup 5 times?",
      options:[
        "nigeria",
        "spain",
        "brazil",
        "france"     
      ],
      answer:"brazil",
      category: "football"
    },

    {
  id: "football_0001",
  question: "Which three national teams participated in the inaugural Africa Cup of Nations in 1957?",
  options: ["Egypt, Sudan and Ethiopia", "Egypt, Ghana and Nigeria", "Sudan, Morocco and Tunisia", "Ethiopia, Ghana and Cameroon"],
  answer: "Egypt, Sudan and Ethiopia",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0002",
  question: "What unusual event decided the 1974 AFCON title after Zaire and Zambia drew 2–2 after extra time?",
  options: ["A replay two days later", "A coin toss", "A sudden-death penalty", "A shared championship"],
  answer: "A replay two days later",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0003",
  question: "Who scored a record nine goals for Zaire at the 1974 AFCON tournament?",
  options: ["Samuel M'Fuila", "Pierre Ndaye Mulamba", "Jean-Michel M'Bono", "Mwepu Ilunga"],
  answer: "Pierre Ndaye Mulamba",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0004",
  question: "Which country won the 1982 AFCON final after a 1–1 draw and a 7–6 penalty shootout?",
  options: ["Libya", "Cameroon", "Ghana", "Algeria"],
  answer: "Ghana",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0005",
  question: "What was the penalty shootout score when Côte d'Ivoire beat Ghana in the 1992 AFCON final?",
  options: ["9–8", "10–9", "11–10", "8–7"],
  answer: "11–10",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0006",
  question: "Who scored both goals for South Africa in the 2–0 victory over Tunisia in the 1996 AFCON final?",
  options: ["Benni McCarthy", "Mark Williams", "Phil Masinga", "Shaun Bartlett"],
  answer: "Mark Williams",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0007",
  question: "In which city was the 2000 AFCON final played, where Cameroon defeated Nigeria on penalties?",
  options: ["Abuja", "Accra", "Lagos", "Yaoundé"],
  answer: "Lagos",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0008",
  question: "Who scored the penalty that gave Cameroon a 1–0 victory over Nigeria in the 1988 AFCON final?",
  options: ["Roger Milla", "Emmanuel Kundé", "Rene N'Djeya", "François Omam-Biyik"],
  answer: "Emmanuel Kundé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0009",
  question: "Which goalkeeper scored the decisive penalty for Côte d'Ivoire in the 2015 AFCON final?",
  options: ["Sylvain Gbohouo", "Boubacar Barry", "Vincent Enyeama", "Kossi Agassa"],
  answer: "Boubacar Barry",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0010",
  question: "Who scored Cameroon's late winning goal in the 2017 AFCON final against Egypt?",
  options: ["Christian Bassogog", "Vincent Aboubakar", "Benjamin Moukandjo", "Nicolas Nkoulou"],
  answer: "Vincent Aboubakar",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0011",
  question: "Who finished as the top scorer at the 2019 AFCON in Egypt with five goals?",
  options: ["Riyad Mahrez", "Sadio Mané", "Odion Ighalo", "Mohamed Salah"],
  answer: "Odion Ighalo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0012",
  question: "Which country did Senegal defeat on penalties to win its first AFCON title in 2022?",
  options: ["Cameroon", "Nigeria", "Egypt", "Morocco"],
  answer: "Egypt",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0013",
  question: "Who scored the winning goal for Côte d'Ivoire against Nigeria in the 2023 AFCON final?",
  options: ["Franck Kessié", "Sébastien Haller", "Max-Alain Gradel", "Wilfried Zaha"],
  answer: "Sébastien Haller",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0014",
  question: "Which nation held the AFCON record of seven titles after the 2023 tournament?",
  options: ["Cameroon", "Ghana", "Egypt", "Nigeria"],
  answer: "Egypt",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0015",
  question: "What was unusual about the way the 1976 AFCON champion was determined?",
  options: ["The final was abandoned", "The winner emerged from a final round-robin group", "Two nations shared the trophy", "The final was decided by a replay"],
  answer: "The winner emerged from a final round-robin group",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0016",
  question: "What name is commonly given to Uruguay's 2–1 victory over Brazil at the Maracanã in 1950?",
  options: ["The Miracle of Bern", "The Maracanazo", "The Battle of Santiago", "The Miracle of Belo Horizonte"],
  answer: "The Maracanazo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0017",
  question: "Who scored the winning goal for West Germany in the 1954 World Cup final against Hungary?",
  options: ["Max Morlock", "Helmut Rahn", "Fritz Walter", "Ottmar Walter"],
  answer: "Helmut Rahn",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0018",
  question: "Which stadium hosted the 1966 FIFA Men's World Cup final?",
  options: ["Hampden Park", "Wembley Stadium", "Old Trafford", "Goodison Park"],
  answer: "Wembley Stadium",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0019",
  question: "Which trophy was permanently awarded to Brazil after its third men's World Cup title in 1970?",
  options: ["The FIFA World Cup Trophy", "The Jules Rimet Trophy", "The Coupe des Nations", "The Confederations Cup"],
  answer: "The Jules Rimet Trophy",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0020",
  question: "Which stadium hosted the 1978 FIFA Men's World Cup final in Buenos Aires?",
  options: ["La Bombonera", "Estadio Monumental", "Estadio José Amalfitani", "Estadio Mario Kempes"],
  answer: "Estadio Monumental",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0021",
  question: "Which Italian striker won the Golden Boot with six goals at the 1982 World Cup?",
  options: ["Roberto Bettega", "Paolo Rossi", "Marco Tardelli", "Antonio Cabrini"],
  answer: "Paolo Rossi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0022",
  question: "At which stadium did Diego Maradona score his famous 'Goal of the Century' against England in 1986?",
  options: ["Estadio Jalisco", "Estadio Azteca", "Estadio Olímpico Universitario", "Estadio Cuauhtémoc"],
  answer: "Estadio Azteca",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0023",
  question: "Which Italian player won both the Golden Boot and Golden Ball at the 1990 World Cup?",
  options: ["Roberto Baggio", "Salvatore Schillaci", "Gianluca Vialli", "Franco Baresi"],
  answer: "Salvatore Schillaci",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0024",
  question: "Which Italy player missed the decisive penalty in the shootout of the 1994 World Cup final?",
  options: ["Franco Baresi", "Daniele Massaro", "Roberto Baggio", "Alessandro Costacurta"],
  answer: "Roberto Baggio",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0025",
  question: "Which stadium hosted the 1998 World Cup final, in which France beat Brazil 3–0?",
  options: ["Parc des Princes", "Stade Vélodrome", "Stade de France", "Stade Gerland"],
  answer: "Stade de France",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0026",
  question: "Which two countries co-hosted the 2002 FIFA Men's World Cup?",
  options: ["China and Japan", "Japan and South Korea", "South Korea and China", "Japan and Australia"],
  answer: "Japan and South Korea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0027",
  question: "Which player was sent off in the 2006 World Cup final after headbutting Marco Materazzi?",
  options: ["Fabien Barthez", "Zinédine Zidane", "Patrick Vieira", "Lilian Thuram"],
  answer: "Zinédine Zidane",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0028",
  question: "Who won the Golden Boot with six goals at the 2014 World Cup in Brazil?",
  options: ["Thomas Müller", "Neymar", "James Rodríguez", "Lionel Messi"],
  answer: "James Rodríguez",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0029",
  question: "Who won the Golden Boot with six goals at the 2018 World Cup in Russia?",
  options: ["Antoine Griezmann", "Kylian Mbappé", "Harry Kane", "Romelu Lukaku"],
  answer: "Harry Kane",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0030",
  question: "How many teams competed in the expanded 2026 FIFA Men's World Cup?",
  options: ["32", "40", "48", "64"],
  answer: "48",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0031",
  question: "Which club did Celtic defeat to win the 1967 European Cup final?",
  options: ["Ajax", "Inter Milan", "Benfica", "Real Madrid"],
  answer: "Inter Milan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0032",
  question: "Who scored Feyenoord's extra-time winner against Celtic in the 1970 European Cup final?",
  options: ["Wim Jansen", "Ove Kindvall", "Rinus Israël", "Franz Hasil"],
  answer: "Ove Kindvall",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0033",
  question: "How did PSV Eindhoven win the 1988 European Cup final against Benfica after 120 minutes?",
  options: ["They scored a golden goal", "They won 6–5 on penalties", "They won a replay", "They won through the away-goals rule"],
  answer: "They won 6–5 on penalties",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0034",
  question: "Which goalkeeper saved all four Barcelona penalties in Steaua București's 1986 European Cup final shootout victory?",
  options: ["Silviu Lung", "Helmut Duckadam", "Bogdan Stelea", "Gheorghe Popescu"],
  answer: "Helmut Duckadam",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0035",
  question: "Who scored Barcelona's extra-time free-kick winner against Sampdoria in the 1992 European Cup final?",
  options: ["Michael Laudrup", "Hristo Stoichkov", "Ronald Koeman", "Pep Guardiola"],
  answer: "Ronald Koeman",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0036",
  question: "Who scored Marseille's winning goal in the 1993 Champions League final against AC Milan?",
  options: ["Alen Bokšić", "Didier Deschamps", "Basile Boli", "Rudi Völler"],
  answer: "Basile Boli",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0037",
  question: "Who managed AC Milan when they defeated Barcelona 4–0 in the 1994 Champions League final?",
  options: ["Arrigo Sacchi", "Fabio Capello", "Carlo Ancelotti", "Alberto Zaccheroni"],
  answer: "Fabio Capello",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0038",
  question: "Which stadium hosted Real Madrid's 2–1 victory over Bayer Leverkusen in the 2002 Champions League final?",
  options: ["Wembley Stadium", "Hampden Park", "Old Trafford", "San Siro"],
  answer: "Hampden Park",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0039",
  question: "Which stadium hosted the all-Italian Champions League final between AC Milan and Juventus in 2003?",
  options: ["Stamford Bridge", "Old Trafford", "Olympiastadion Berlin", "Estádio da Luz"],
  answer: "Old Trafford",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0040",
  question: "In which German city was the 2004 Champions League final between Porto and Monaco played?",
  options: ["Berlin", "Gelsenkirchen", "Munich", "Dortmund"],
  answer: "Gelsenkirchen",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0041",
  question: "Which Arsenal goalkeeper was sent off in the 2006 Champions League final against Barcelona?",
  options: ["David Seaman", "Jens Lehmann", "Manuel Almunia", "Vito Mannone"],
  answer: "Jens Lehmann",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0042",
  question: "At which stadium was the 2008 Champions League final between Manchester United and Chelsea played?",
  options: ["Luzhniki Stadium", "Olimpico di Roma", "Stade de France", "Wembley Stadium"],
  answer: "Luzhniki Stadium",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0043",
  question: "Who scored Barcelona's second goal in their 3–1 victory over Manchester United in the 2011 Champions League final?",
  options: ["David Villa", "Pedro", "Lionel Messi", "Xavi"],
  answer: "Lionel Messi",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0044",
  question: "Who scored Barcelona's opening goal against Juventus in the 2015 Champions League final?",
  options: ["Luis Suárez", "Neymar", "Ivan Rakitić", "Andrés Iniesta"],
  answer: "Ivan Rakitić",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0045",
  question: "Who scored Liverpool's second goal late in their 2–0 victory over Tottenham in the 2019 Champions League final?",
  options: ["Mohamed Salah", "Divock Origi", "Sadio Mané", "Roberto Firmino"],
  answer: "Divock Origi",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0046",
  question: "Who scored Bayern Munich's winning goal against Paris Saint-Germain in the 2020 Champions League final?",
  options: ["Thomas Müller", "Robert Lewandowski", "Kingsley Coman", "Serge Gnabry"],
  answer: "Kingsley Coman",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0047",
  question: "Who scored Chelsea's winning goal against Manchester City in the 2021 Champions League final?",
  options: ["Christian Pulisic", "Mason Mount", "Kai Havertz", "Timo Werner"],
  answer: "Kai Havertz",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0048",
  question: "Who scored Real Madrid's winning goal against Liverpool in the 2022 Champions League final?",
  options: ["Karim Benzema", "Federico Valverde", "Vinícius Júnior", "Rodrygo"],
  answer: "Vinícius Júnior",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0049",
  question: "Who scored the opening goal in Real Madrid's 2–0 victory over Borussia Dortmund in the 2024 Champions League final?",
  options: ["Jude Bellingham", "Dani Carvajal", "Federico Valverde", "Toni Kroos"],
  answer: "Dani Carvajal",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0050",
  question: "What was the score when Paris Saint-Germain defeated Inter Milan in the 2025 Champions League final?",
  options: ["3–0", "4–1", "5–0", "4–0"],
  answer: "5–0",
  category: "football",
  difficulty: 85.5
},


{
  id: "football_0051",
  question: "Which season was the first in the English Premier League?",
  options: ["1990–91", "1991–92", "1992–93", "1993–94"],
  answer: "1992–93",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0052",
  question: "Who scored the first goal in Premier League history?",
  options: ["Eric Cantona", "Brian Deane", "Alan Shearer", "Teddy Sheringham"],
  answer: "Brian Deane",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0053",
  question: "Which club scored 106 goals in the 2017–18 Premier League season?",
  options: ["Liverpool", "Chelsea", "Manchester City", "Arsenal"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0054",
  question: "Which two teams played in the Premier League's record 7–4 match in September 2007?",
  options: ["Portsmouth and Reading", "Chelsea and Tottenham", "Arsenal and Newcastle United", "Liverpool and Manchester City"],
  answer: "Portsmouth and Reading",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0055",
  question: "Which match produced the Premier League's record 5–5 draw in May 2013?",
  options: ["West Bromwich Albion vs Manchester United", "Arsenal vs Liverpool", "Everton vs Chelsea", "Tottenham Hotspur vs Manchester City"],
  answer: "West Bromwich Albion vs Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0056",
  question: "Which club won the 2017–18 Premier League title by a record 19-point margin?",
  options: ["Liverpool", "Manchester United", "Chelsea", "Manchester City"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0057",
  question: "Which club won four consecutive Premier League titles from 2020–21 through 2023–24?",
  options: ["Arsenal", "Liverpool", "Manchester City", "Manchester United"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0058",
  question: "Which club recorded just one win in the 2007–08 Premier League season?",
  options: ["Derby County", "Sunderland", "Birmingham City", "Reading"],
  answer: "Derby County",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0059",
  question: "How many points did Manchester United earn when winning the 1996–97 Premier League title?",
  options: ["72", "75", "78", "81"],
  answer: "75",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0060",
  question: "Who scored the fastest goal in Premier League history, after approximately 7.69 seconds?",
  options: ["Sadio Mané", "Shane Long", "Alan Shearer", "Christian Eriksen"],
  answer: "Shane Long",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0061",
  question: "Who holds the all-time Premier League scoring record with 260 goals?",
  options: ["Wayne Rooney", "Harry Kane", "Alan Shearer", "Sergio Agüero"],
  answer: "Alan Shearer",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0062",
  question: "Which former Manchester United player holds the Premier League record for career assists with 162?",
  options: ["David Beckham", "Ryan Giggs", "Paul Scholes", "Wayne Rooney"],
  answer: "Ryan Giggs",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0063",
  question: "Which goalkeeper holds the Premier League career record for clean sheets with 202?",
  options: ["David Seaman", "Edwin van der Sar", "Petr Čech", "Peter Schmeichel"],
  answer: "Petr Čech",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0064",
  question: "Which forward scored a Premier League hat-trick in just 2 minutes and 56 seconds in 2015?",
  options: ["Harry Kane", "Sadio Mané", "Luis Suárez", "Robin van Persie"],
  answer: "Sadio Mané",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0065",
  question: "Which striker scored five goals for Manchester United against Ipswich Town in March 1995?",
  options: ["Andy Cole", "Dwight Yorke", "Ruud van Nistelrooy", "Ole Gunnar Solskjær"],
  answer: "Andy Cole",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0066",
  question: "Which Leicester City striker scored in 11 consecutive Premier League matches in 2015?",
  options: ["Jamie Vardy", "Riyad Mahrez", "Shinji Okazaki", "Leonardo Ulloa"],
  answer: "Jamie Vardy",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0067",
  question: "Which goalkeeper made 310 consecutive Premier League appearances between 2004 and 2012?",
  options: ["David James", "Brad Friedel", "Tim Howard", "Mark Schwarzer"],
  answer: "Brad Friedel",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0068",
  question: "Who holds the record for the most Premier League managerial wins, with 410?",
  options: ["Arsène Wenger", "José Mourinho", "Sir Alex Ferguson", "Pep Guardiola"],
  answer: "Sir Alex Ferguson",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0069",
  question: "Who became the oldest goalscorer in Premier League history at 40 years and 268 days?",
  options: ["Gordon Strachan", "Teddy Sheringham", "Ryan Giggs", "Gary Speed"],
  answer: "Teddy Sheringham",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0070",
  question: "In the 2011–12 Premier League title race, what was Manchester City's goal-difference advantage over Manchester United?",
  options: ["+4", "+6", "+8", "+10"],
  answer: "+8",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0071",
  question: "Which two substitutes scored Manchester United's stoppage-time goals in the 1999 Champions League final?",
  options: ["David Beckham and Ryan Giggs", "Teddy Sheringham and Ole Gunnar Solskjær", "Andy Cole and Dwight Yorke", "Paul Scholes and Roy Keane"],
  answer: "Teddy Sheringham and Ole Gunnar Solskjær",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0072",
  question: "Which club overturned a 3–0 half-time deficit against AC Milan in the 2005 Champions League final?",
  options: ["Chelsea", "Liverpool", "Arsenal", "Manchester United"],
  answer: "Liverpool",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0073",
  question: "Who equalised for Chelsea against Bayern Munich in the 2012 Champions League final and later scored the winning penalty?",
  options: ["Frank Lampard", "Juan Mata", "Didier Drogba", "Fernando Torres"],
  answer: "Didier Drogba",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0074",
  question: "Which club defeated Atlético Madrid 4–1 after extra time in the 2014 Champions League final to win its tenth European Cup?",
  options: ["Barcelona", "Bayern Munich", "Real Madrid", "AC Milan"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0075",
  question: "Who scored both goals for Inter Milan in their 2–0 Champions League final victory over Bayern Munich in 2010?",
  options: ["Samuel Eto'o", "Diego Milito", "Wesley Sneijder", "Maicon"],
  answer: "Diego Milito",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0076",
  question: "Who scored the winning goal for Bayern Munich against Borussia Dortmund in the 2013 Champions League final?",
  options: ["Franck Ribéry", "Mario Mandžukić", "Arjen Robben", "Thomas Müller"],
  answer: "Arjen Robben",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0077",
  question: "Which team did José Mourinho's Porto defeat 3–0 in the 2004 Champions League final?",
  options: ["Monaco", "Deportivo La Coruña", "Chelsea", "Valencia"],
  answer: "Monaco",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0078",
  question: "Who scored Liverpool's two goals in the 2019 Champions League final against Tottenham Hotspur?",
  options: ["Mohamed Salah and Divock Origi", "Sadio Mané and Roberto Firmino", "James Milner and Xherdan Shaqiri", "Roberto Firmino and Virgil van Dijk"],
  answer: "Mohamed Salah and Divock Origi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0079",
  question: "Who scored the only goal in Chelsea's 2021 Champions League final victory over Manchester City?",
  options: ["Mason Mount", "Christian Pulisic", "Kai Havertz", "Timo Werner"],
  answer: "Kai Havertz",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0080",
  question: "Who scored the only goal in Real Madrid's 2022 Champions League final victory over Liverpool?",
  options: ["Karim Benzema", "Federico Valverde", "Vinícius Júnior", "Rodrygo"],
  answer: "Vinícius Júnior",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0081",
  question: "Who scored the only goal when Aston Villa defeated Bayern Munich in the 1982 European Cup final?",
  options: ["Gary Shaw", "Peter Withe", "Tony Morley", "Gordon Cowans"],
  answer: "Peter Withe",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0082",
  question: "Which German club did Liverpool defeat 3–1 to win the European Cup in 1977?",
  options: ["Bayern Munich", "Hamburger SV", "Borussia Mönchengladbach", "Eintracht Frankfurt"],
  answer: "Borussia Mönchengladbach",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0083",
  question: "Which French club did Real Madrid defeat in the 1956 European Cup final?",
  options: ["Reims", "Saint-Étienne", "Marseille", "Lyon"],
  answer: "Reims",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0084",
  question: "Which club won the 1991 European Cup final after defeating Marseille in a penalty shootout?",
  options: ["Steaua București", "Red Star Belgrade", "AC Milan", "Benfica"],
  answer: "Red Star Belgrade",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0085",
  question: "Which player scored Greece's winning goal against Portugal in the Euro 2004 final?",
  options: ["Angelos Charisteas", "Theodoros Zagorakis", "Giorgos Karagounis", "Zisis Vryzas"],
  answer: "Angelos Charisteas",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0086",
  question: "Who scored Portugal's winning goal in extra time of the Euro 2016 final against France?",
  options: ["Cristiano Ronaldo", "Nani", "Éder", "Ricardo Quaresma"],
  answer: "Éder",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0087",
  question: "Who scored the golden goal that gave France victory over Italy in the Euro 2000 final?",
  options: ["Zinedine Zidane", "Thierry Henry", "David Trezeguet", "Sylvain Wiltord"],
  answer: "David Trezeguet",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0088",
  question: "Which country won the 2015 Copa América after defeating Argentina on penalties in the final?",
  options: ["Uruguay", "Chile", "Brazil", "Colombia"],
  answer: "Chile",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0089",
  question: "Who scored Argentina's winning goal against Brazil in the 2021 Copa América final?",
  options: ["Lionel Messi", "Ángel Di María", "Lautaro Martínez", "Rodrigo De Paul"],
  answer: "Ángel Di María",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0090",
  question: "Who scored Japan's winning goal against Australia in the 2011 AFC Asian Cup final?",
  options: ["Keisuke Honda", "Shinji Okazaki", "Tadanari Lee", "Yasuhito Endō"],
  answer: "Tadanari Lee",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0091",
  question: "Which country won the 2007 AFC Asian Cup by defeating Saudi Arabia 1–0 in the final?",
  options: ["Iraq", "Japan", "South Korea", "Iran"],
  answer: "Iraq",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0092",
  question: "Which player scored twice with headers in France's 3–0 victory over Brazil in the 1998 World Cup final?",
  options: ["Thierry Henry", "Zinedine Zidane", "Youri Djorkaeff", "Emmanuel Petit"],
  answer: "Zinedine Zidane",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0093",
  question: "Which player was sent off in the 2006 World Cup final between Italy and France?",
  options: ["Fabien Barthez", "Marco Materazzi", "Zinedine Zidane", "Patrick Vieira"],
  answer: "Zinedine Zidane",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0094",
  question: "Against which national team did Diego Maradona score both the 'Hand of God' goal and the 'Goal of the Century' in 1986?",
  options: ["West Germany", "Italy", "England", "Belgium"],
  answer: "England",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0095",
  question: "Which Italian player missed the decisive penalty in the 1994 World Cup final shootout against Brazil?",
  options: ["Franco Baresi", "Daniele Massaro", "Roberto Baggio", "Demetrio Albertini"],
  answer: "Roberto Baggio",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0096",
  question: "Who scored Spain's winning goal against the Netherlands in the 2010 World Cup final?",
  options: ["David Villa", "Xavi", "Andrés Iniesta", "Fernando Torres"],
  answer: "Andrés Iniesta",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0097",
  question: "Which country defeated Brazil 7–1 in the 2014 World Cup semi-final?",
  options: ["Argentina", "Germany", "Netherlands", "Spain"],
  answer: "Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0098",
  question: "Which two countries contested the 2018 World Cup final, won 4–2 by France?",
  options: ["France and Belgium", "Croatia and England", "France and Croatia", "Brazil and France"],
  answer: "France and Croatia",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0099",
  question: "Which country defeated France on penalties in the 2022 World Cup final after a 3–3 draw?",
  options: ["Croatia", "Argentina", "Morocco", "Brazil"],
  answer: "Argentina",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0100",
  question: "Which African country stunned defending champions Argentina with a 1–0 victory in the opening match of the 1990 World Cup?",
  options: ["Nigeria", "Cameroon", "Senegal", "Ghana"],
  answer: "Cameroon",
  category: "football",
  difficulty: 85.5
},

{
  id: "football_0101",
  question: "Who became the all-time leading scorer in men's FIFA World Cup history after the 2026 tournament?",
  options: ["Lionel Messi", "Kylian Mbappé", "Miroslav Klose", "Ronaldo Nazário"],
  answer: "Kylian Mbappé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0102",
  question: "How many goals did Kylian Mbappé score across men's World Cup tournaments through 2026?",
  options: ["18", "20", "22", "24"],
  answer: "22",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0103",
  question: "How many men's World Cup goals had Lionel Messi scored through the 2026 tournament?",
  options: ["16", "18", "21", "22"],
  answer: "21",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0104",
  question: "Who scored 13 goals at the 1958 World Cup, a record for a single men's tournament?",
  options: ["Pelé", "Just Fontaine", "Gerd Müller", "Eusébio"],
  answer: "Just Fontaine",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0105",
  question: "Which country became the first to host the men's World Cup three times, including in 2026?",
  options: ["Brazil", "Germany", "Mexico", "Italy"],
  answer: "Mexico",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0106",
  question: "Which country won the 2026 men's FIFA World Cup?",
  options: ["France", "Spain", "Argentina", "England"],
  answer: "Spain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0107",
  question: "Who won the Golden Boot at the 2026 men's World Cup?",
  options: ["Lionel Messi", "Harry Kane", "Kylian Mbappé", "Erling Haaland"],
  answer: "Kylian Mbappé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0108",
  question: "Who scored the fastest goal in men's World Cup history, against South Korea in 2002?",
  options: ["Hakan Şükür", "Miroslav Klose", "Ronaldo Nazário", "Michael Owen"],
  answer: "Hakan Şükür",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0109",
  question: "Who is officially credited with the first hat-trick in men's World Cup history?",
  options: ["Guillermo Stábile", "Bert Patenaude", "Oldřich Nejedlý", "Leônidas"],
  answer: "Bert Patenaude",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0110",
  question: "Which two countries played in the highest-scoring match in men's World Cup history, an 8–3 game in 1954?",
  options: ["Brazil and Sweden", "Austria and Switzerland", "Hungary and West Germany", "Uruguay and Bolivia"],
  answer: "Austria and Switzerland",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0111",
  question: "Which Brazilian player is the only man to have won three FIFA World Cups as a player?",
  options: ["Garrincha", "Pelé", "Cafu", "Ronaldo Nazário"],
  answer: "Pelé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0112",
  question: "Which team scored a record 27 goals during the 1954 men's World Cup?",
  options: ["Hungary", "Brazil", "West Germany", "Austria"],
  answer: "Hungary",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0113",
  question: "Which goalkeeper set the men's World Cup record for consecutive minutes without conceding in 1990 before it was surpassed in 2026?",
  options: ["Gianluigi Buffon", "Walter Zenga", "Claudio Taffarel", "Peter Shilton"],
  answer: "Walter Zenga",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0114",
  question: "Which country became the first to win three consecutive men's World Cups, from 1958 through 1970?",
  options: ["Italy", "Brazil", "West Germany", "Argentina"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0115",
  question: "Which country hosted the first men's World Cup in 1930?",
  options: ["Argentina", "Italy", "Uruguay", "France"],
  answer: "Uruguay",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0116",
  question: "Which nation hosted the first men's World Cup tournament staged in Africa?",
  options: ["Morocco", "South Africa", "Egypt", "Nigeria"],
  answer: "South Africa",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0117",
  question: "Which two Asian countries jointly hosted the 2002 men's World Cup?",
  options: ["China and Japan", "Japan and South Korea", "South Korea and China", "Japan and Thailand"],
  answer: "Japan and South Korea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0118",
  question: "Which country became the first African nation to reach the men's World Cup quarter-finals?",
  options: ["Nigeria", "Senegal", "Cameroon", "Ghana"],
  answer: "Cameroon",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0119",
  question: "Which country was the first Asian men's team to reach a World Cup semi-final?",
  options: ["Japan", "South Korea", "Saudi Arabia", "Iran"],
  answer: "South Korea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0120",
  question: "Which award recognizes the best goalkeeper at the men's World Cup?",
  options: ["Golden Boot", "Golden Glove", "Golden Ball", "Fair Play Award"],
  answer: "Golden Glove",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0121",
  question: "Which country won the men's World Cup in 1954 after defeating the heavily favoured Hungarian team?",
  options: ["Austria", "West Germany", "Brazil", "England"],
  answer: "West Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0122",
  question: "Which nation won the 1982 men's World Cup after Paolo Rossi emerged as the tournament's top scorer?",
  options: ["Italy", "Brazil", "Argentina", "West Germany"],
  answer: "Italy",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0123",
  question: "Which country won the first men's World Cup held with 32 participating teams in 1998?",
  options: ["Brazil", "France", "Germany", "Croatia"],
  answer: "France",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0124",
  question: "Which country hosted the 1994 men's World Cup?",
  options: ["Mexico", "United States", "Canada", "Spain"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0125",
  question: "Which nation won the men's World Cup in 1962?",
  options: ["Czechoslovakia", "Brazil", "Chile", "Hungary"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0126",
  question: "Which country won the UEFA European Championship in 1960?",
  options: ["Spain", "Soviet Union", "Yugoslavia", "Italy"],
  answer: "Soviet Union",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0127",
  question: "Which country won the UEFA European Championship in 1964?",
  options: ["Spain", "Portugal", "Hungary", "Soviet Union"],
  answer: "Spain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0128",
  question: "Which nation won its first European Championship title in 1968?",
  options: ["Italy", "England", "France", "West Germany"],
  answer: "Italy",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0129",
  question: "Which country won the European Championship in 1972?",
  options: ["Netherlands", "West Germany", "Belgium", "Italy"],
  answer: "West Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0130",
  question: "Which nation won the European Championship in 1976 after a famous chipped penalty by Antonín Panenka?",
  options: ["West Germany", "Czechoslovakia", "Netherlands", "Yugoslavia"],
  answer: "Czechoslovakia",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0131",
  question: "Which country won the European Championship in 1980?",
  options: ["Belgium", "West Germany", "Italy", "France"],
  answer: "West Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0132",
  question: "Which country won Euro 1984 with Michel Platini as its captain and leading scorer?",
  options: ["France", "Spain", "Portugal", "Denmark"],
  answer: "France",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0133",
  question: "Which country won Euro 1988, with Marco van Basten scoring a famous volley in the final?",
  options: ["West Germany", "Netherlands", "Italy", "Soviet Union"],
  answer: "Netherlands",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0134",
  question: "Which nation won Euro 1992 after entering the tournament as a late replacement for Yugoslavia?",
  options: ["Sweden", "Denmark", "Germany", "Norway"],
  answer: "Denmark",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0135",
  question: "Which country won Euro 1996, with Andreas Köpke playing in goal?",
  options: ["Germany", "Czech Republic", "England", "France"],
  answer: "Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0136",
  question: "Which nation became the first to win three consecutive European Championship titles by triumphing in 2008, 2012, and 2024?",
  options: ["Germany", "France", "Spain", "Italy"],
  answer: "Spain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0137",
  question: "Which country hosted Euro 1996?",
  options: ["France", "England", "Germany", "Belgium"],
  answer: "England",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0138",
  question: "Which country hosted Euro 2008 jointly with Switzerland?",
  options: ["Austria", "Germany", "France", "Italy"],
  answer: "Austria",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0139",
  question: "Which country hosted Euro 2012 jointly with Poland?",
  options: ["Ukraine", "Russia", "Hungary", "Romania"],
  answer: "Ukraine",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0140",
  question: "Which nation hosted Euro 2024?",
  options: ["France", "Germany", "Italy", "Spain"],
  answer: "Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0141",
  question: "Which country won the 2019 Copa América?",
  options: ["Argentina", "Brazil", "Chile", "Uruguay"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0142",
  question: "Which country won the Copa América in 2024?",
  options: ["Colombia", "Brazil", "Argentina", "Uruguay"],
  answer: "Argentina",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0143",
  question: "Which nation won the inaugural CONCACAF Gold Cup in 1991?",
  options: ["Mexico", "United States", "Costa Rica", "Honduras"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0144",
  question: "Which country won the 2023 CONCACAF Gold Cup?",
  options: ["Mexico", "Panama", "United States", "Canada"],
  answer: "Mexico",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0145",
  question: "Which country hosted the 2019 AFC Asian Cup?",
  options: ["Qatar", "United Arab Emirates", "Japan", "Saudi Arabia"],
  answer: "United Arab Emirates",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0146",
  question: "Which nation won the 2019 AFC Asian Cup?",
  options: ["Japan", "Qatar", "South Korea", "Australia"],
  answer: "Qatar",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0147",
  question: "Which country won the 2023 AFC Asian Cup, played in early 2024?",
  options: ["Jordan", "Qatar", "Japan", "Iran"],
  answer: "Qatar",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0148",
  question: "Which nation won the 2019 Africa Cup of Nations?",
  options: ["Senegal", "Algeria", "Egypt", "Nigeria"],
  answer: "Algeria",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0149",
  question: "Which country hosted the 2019 Africa Cup of Nations?",
  options: ["Morocco", "Egypt", "Cameroon", "Algeria"],
  answer: "Egypt",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0150",
  question: "Which national team won the 2023 Africa Cup of Nations, held in early 2024?",
  options: ["Nigeria", "Côte d'Ivoire", "Senegal", "South Africa"],
  answer: "Côte d'Ivoire",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0151",
  question: "Which country hosted the 2023 Africa Cup of Nations?",
  options: ["Guinea", "Côte d'Ivoire", "Ghana", "Egypt"],
  answer: "Côte d'Ivoire",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0152",
  question: "Which nation won the Africa Cup of Nations in 2017?",
  options: ["Egypt", "Cameroon", "Ghana", "Senegal"],
  answer: "Cameroon",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0153",
  question: "Which team won the Africa Cup of Nations in 2013?",
  options: ["Nigeria", "Burkina Faso", "Mali", "Ghana"],
  answer: "Nigeria",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0154",
  question: "Which country won the Africa Cup of Nations in 2012?",
  options: ["Zambia", "Ghana", "Côte d'Ivoire", "Mali"],
  answer: "Zambia",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0155",
  question: "Which nation won AFCON 2006?",
  options: ["Cameroon", "Egypt", "Nigeria", "Senegal"],
  answer: "Egypt",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0156",
  question: "Which country won the Africa Cup of Nations in 2004?",
  options: ["Morocco", "Tunisia", "Egypt", "Nigeria"],
  answer: "Tunisia",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0157",
  question: "Which team won the 2000 Africa Cup of Nations?",
  options: ["Cameroon", "Nigeria", "South Africa", "Egypt"],
  answer: "Cameroon",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0158",
  question: "Which African nation won its first AFCON title in 1996?",
  options: ["South Africa", "Zambia", "Côte d'Ivoire", "Tunisia"],
  answer: "South Africa",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0159",
  question: "Which country won AFCON in 1998?",
  options: ["Morocco", "Egypt", "Burkina Faso", "South Africa"],
  answer: "Egypt",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0160",
  question: "Which nation won AFCON in 1992?",
  options: ["Côte d'Ivoire", "Ghana", "Nigeria", "Cameroon"],
  answer: "Côte d'Ivoire",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0161",
  question: "Which country hosted the 2022 FIFA World Cup?",
  options: ["Saudi Arabia", "Qatar", "United Arab Emirates", "Bahrain"],
  answer: "Qatar",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0162",
  question: "Which national team won the men's Olympic football gold medal in 1996?",
  options: ["Brazil", "Argentina", "Nigeria", "Spain"],
  answer: "Nigeria",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0163",
  question: "Which country won men's Olympic football gold in 2000?",
  options: ["Cameroon", "Nigeria", "Brazil", "Chile"],
  answer: "Cameroon",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0164",
  question: "Which country won men's Olympic football gold in 2008?",
  options: ["Argentina", "Nigeria", "Brazil", "Italy"],
  answer: "Argentina",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0165",
  question: "Which nation won men's Olympic football gold at the 2020 Tokyo Games, held in 2021?",
  options: ["Brazil", "Spain", "Mexico", "Japan"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0166",
  question: "Which national team won the inaugural UEFA Nations League in 2019?",
  options: ["Netherlands", "Portugal", "England", "France"],
  answer: "Portugal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0167",
  question: "Which nation won the 2022–23 UEFA Nations League?",
  options: ["Croatia", "Spain", "Italy", "Netherlands"],
  answer: "Spain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0168",
  question: "Which country won the 2024–25 UEFA Nations League?",
  options: ["Portugal", "Spain", "France", "Germany"],
  answer: "Portugal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0169",
  question: "Which country won the inaugural FIFA Confederations Cup in 1992, when the competition was called the King Fahd Cup?",
  options: ["Argentina", "Saudi Arabia", "Brazil", "Denmark"],
  answer: "Argentina",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0170",
  question: "Which country won the 2009 FIFA Confederations Cup?",
  options: ["United States", "Spain", "Brazil", "Italy"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0171",
  question: "Which national team won the 2017 FIFA Confederations Cup?",
  options: ["Germany", "Chile", "Portugal", "Mexico"],
  answer: "Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0172",
  question: "Which country won the 2018 FIFA World Cup's third-place match?",
  options: ["Belgium", "England", "Croatia", "France"],
  answer: "Belgium",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0173",
  question: "Which country was the first to win the men's World Cup outside its own continent?",
  options: ["Brazil", "Argentina", "Italy", "Germany"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0174",
  question: "Which national team won the 2016 Copa América Centenario?",
  options: ["Chile", "Argentina", "United States", "Colombia"],
  answer: "Chile",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0175",
  question: "Which country won the women's FIFA World Cup in 1991?",
  options: ["Norway", "United States", "China", "Germany"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0176",
  question: "Which nation won the women's FIFA World Cup in 1995?",
  options: ["Sweden", "Germany", "Norway", "United States"],
  answer: "Norway",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0177",
  question: "Which country hosted and won the women's FIFA World Cup in 1999?",
  options: ["China", "United States", "Norway", "Brazil"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0178",
  question: "Which country won the women's FIFA World Cup in both 2003 and 2007?",
  options: ["Brazil", "Germany", "United States", "Japan"],
  answer: "Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0179",
  question: "Which country won the women's FIFA World Cup in 2011?",
  options: ["Japan", "United States", "France", "Sweden"],
  answer: "Japan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0180",
  question: "Which country won the women's FIFA World Cup in 2015?",
  options: ["Japan", "United States", "Germany", "England"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0181",
  question: "Which country won the women's FIFA World Cup in 2019?",
  options: ["Netherlands", "United States", "Sweden", "Germany"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0182",
  question: "Which country won the women's FIFA World Cup in 2023?",
  options: ["England", "Spain", "Australia", "Sweden"],
  answer: "Spain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0183",
  question: "Which country hosted the women's FIFA World Cup in 2023 alongside New Zealand?",
  options: ["Australia", "Canada", "Japan", "France"],
  answer: "Australia",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0184",
  question: "Which Japanese player scored the winning penalty in the 2011 women's World Cup final shootout?",
  options: ["Aya Miyama", "Saki Kumagai", "Homare Sawa", "Shinji Ono"],
  answer: "Saki Kumagai",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0185",
  question: "Which country won the first Olympic women's football gold medal in 1996?",
  options: ["Norway", "United States", "Germany", "Brazil"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0186",
  question: "Which country won women's Olympic football gold at the 2024 Paris Games?",
  options: ["Brazil", "United States", "Spain", "Germany"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0187",
  question: "Which country won the 2022 Women's Africa Cup of Nations?",
  options: ["Morocco", "Nigeria", "South Africa", "Zambia"],
  answer: "South Africa",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0188",
  question: "Which nation won the 2018 Women's Africa Cup of Nations?",
  options: ["Ghana", "Nigeria", "Cameroon", "Equatorial Guinea"],
  answer: "Nigeria",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0189",
  question: "Which country won the 2022 Women's UEFA European Championship?",
  options: ["Germany", "Spain", "England", "Sweden"],
  answer: "England",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0190",
  question: "Which country won the 2024 Women's Olympic football tournament?",
  options: ["Brazil", "United States", "Spain", "France"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0191",
  question: "Which club won the first edition of the European Cup in 1956?",
  options: ["Real Madrid", "AC Milan", "Benfica", "Stade de Reims"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0192",
  question: "Which club has won the most European Cup and Champions League titles through 2026?",
  options: ["AC Milan", "Real Madrid", "Bayern Munich", "Liverpool"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0193",
  question: "How many European Cup and Champions League titles had Real Madrid won through the 2025–26 season?",
  options: ["12", "13", "15", "16"],
  answer: "15",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0194",
  question: "Which club won the first Champions League final after the competition adopted its new name in 1993?",
  options: ["AC Milan", "Marseille", "Barcelona", "Ajax"],
  answer: "Marseille",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0195",
  question: "Which club won the European Cup in 1967, becoming the first British team to claim the trophy?",
  options: ["Liverpool", "Celtic", "Manchester United", "Leeds United"],
  answer: "Celtic",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0196",
  question: "Which club won back-to-back European Cups in 1974, 1975, and 1976?",
  options: ["Ajax", "Bayern Munich", "Liverpool", "Real Madrid"],
  answer: "Bayern Munich",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0197",
  question: "Which Dutch club won three consecutive European Cups from 1971 through 1973?",
  options: ["PSV Eindhoven", "Feyenoord", "Ajax", "Twente"],
  answer: "Ajax",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0198",
  question: "Which club won the European Cup in 1987 by defeating Bayern Munich in the final?",
  options: ["Porto", "Benfica", "PSV Eindhoven", "Steaua București"],
  answer: "Porto",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0199",
  question: "Which club won the 1995 Champions League final with a goal from Patrick Kluivert?",
  options: ["Ajax", "Juventus", "AC Milan", "Borussia Dortmund"],
  answer: "Ajax",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0200",
  question: "Which club won its first Champions League title in 1997?",
  options: ["Bayer Leverkusen", "Borussia Dortmund", "Valencia", "Arsenal"],
  answer: "Borussia Dortmund",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0201",
  question: "Which club won the 2003 Champions League final against Juventus on penalties?",
  options: ["AC Milan", "Inter Milan", "Real Madrid", "Manchester United"],
  answer: "AC Milan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0202",
  question: "Which club won the 2007 Champions League final in Athens?",
  options: ["Liverpool", "AC Milan", "Chelsea", "Barcelona"],
  answer: "AC Milan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0203",
  question: "Which club won the 2008 Champions League final in Moscow?",
  options: ["Chelsea", "Manchester United", "Barcelona", "Arsenal"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0204",
  question: "Which club won the Champions League in 2009, completing a treble under Pep Guardiola?",
  options: ["Real Madrid", "Barcelona", "Inter Milan", "Manchester United"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0205",
  question: "Which club won the Champions League in 2015 to complete a treble under Luis Enrique?",
  options: ["Bayern Munich", "Barcelona", "Juventus", "Paris Saint-Germain"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0206",
  question: "Which club won the 2017 Champions League final in Cardiff?",
  options: ["Juventus", "Real Madrid", "Atlético Madrid", "Monaco"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0207",
  question: "Which club became the first French team to win the Champions League in 1993?",
  options: ["Monaco", "Marseille", "Lyon", "Paris Saint-Germain"],
  answer: "Marseille",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0208",
  question: "Which club won the 1989 European Cup final by beating Steaua București 4–0?",
  options: ["AC Milan", "Barcelona", "Liverpool", "Benfica"],
  answer: "AC Milan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0209",
  question: "Which manager led Nottingham Forest to European Cup titles in 1979 and 1980?",
  options: ["Don Revie", "Brian Clough", "Bob Paisley", "Matt Busby"],
  answer: "Brian Clough",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0210",
  question: "Which club became the first English team to win the European Cup, in 1968?",
  options: ["Liverpool", "Manchester United", "Nottingham Forest", "Aston Villa"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0211",
  question: "Which club won the UEFA Europa League in 2019?",
  options: ["Arsenal", "Chelsea", "Valencia", "Sevilla"],
  answer: "Chelsea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0212",
  question: "Which club won the UEFA Europa League in 2020?",
  options: ["Inter Milan", "Manchester United", "Sevilla", "Roma"],
  answer: "Sevilla",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0213",
  question: "Which club won the UEFA Europa League in 2021?",
  options: ["Villarreal", "Manchester United", "Arsenal", "Napoli"],
  answer: "Villarreal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0214",
  question: "Which club won the UEFA Europa League in 2022?",
  options: ["Eintracht Frankfurt", "Rangers", "Roma", "West Ham United"],
  answer: "Eintracht Frankfurt",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0215",
  question: "Which club won the UEFA Europa League in 2023?",
  options: ["Roma", "Sevilla", "Bayer Leverkusen", "Juventus"],
  answer: "Sevilla",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0216",
  question: "Which club won the UEFA Europa League in 2024?",
  options: ["Atalanta", "Bayer Leverkusen", "Liverpool", "Marseille"],
  answer: "Atalanta",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0217",
  question: "Which club won the UEFA Europa League in 2025?",
  options: ["Tottenham Hotspur", "Manchester United", "Athletic Club", "Roma"],
  answer: "Tottenham Hotspur",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0218",
  question: "Which club won the UEFA Conference League in its inaugural 2021–22 season?",
  options: ["Roma", "Feyenoord", "West Ham United", "Fiorentina"],
  answer: "Roma",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0219",
  question: "Which club won the UEFA Conference League in 2023?",
  options: ["Fiorentina", "West Ham United", "Roma", "Basel"],
  answer: "West Ham United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0220",
  question: "Which club won the UEFA Conference League in 2024?",
  options: ["Olympiacos", "Fiorentina", "Club Brugge", "Aston Villa"],
  answer: "Olympiacos",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0221",
  question: "Which club won the UEFA Super Cup in 2023?",
  options: ["Manchester City", "Sevilla", "Real Madrid", "Bayern Munich"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0222",
  question: "Which club won the 2023 FIFA Club World Cup?",
  options: ["Fluminense", "Manchester City", "Al Ahly", "Real Madrid"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0223",
  question: "Which South American club won the 2022 Copa Libertadores?",
  options: ["Flamengo", "Palmeiras", "Boca Juniors", "River Plate"],
  answer: "Flamengo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0224",
  question: "Which club won the 2023 Copa Libertadores?",
  options: ["Fluminense", "Boca Juniors", "Flamengo", "Palmeiras"],
  answer: "Fluminense",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0225",
  question: "Which club won the 2024 Copa Libertadores?",
  options: ["Botafogo", "Atlético Mineiro", "River Plate", "Peñarol"],
  answer: "Botafogo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0226",
  question: "Which Egyptian club is one of the most successful teams in African Champions League history?",
  options: ["Zamalek", "Al Ahly", "Esperance", "TP Mazembe"],
  answer: "Al Ahly",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0227",
  question: "Which club won the CAF Champions League in 2023?",
  options: ["Wydad Casablanca", "Al Ahly", "Mamelodi Sundowns", "Esperance"],
  answer: "Al Ahly",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0228",
  question: "Which club won the CAF Champions League in 2024?",
  options: ["Al Ahly", "Espérance de Tunis", "Mamelodi Sundowns", "Raja Casablanca"],
  answer: "Al Ahly",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0229",
  question: "Which club won the CAF Champions League in 2016?",
  options: ["Mamelodi Sundowns", "Zamalek", "Al Ahly", "Wydad Casablanca"],
  answer: "Mamelodi Sundowns",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0230",
  question: "Which Moroccan club won the CAF Champions League in 2022?",
  options: ["Wydad Casablanca", "Raja Casablanca", "FAR Rabat", "FUS Rabat"],
  answer: "Wydad Casablanca",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0231",
  question: "Which club won the AFC Champions League in 2021?",
  options: ["Al Hilal", "Urawa Red Diamonds", "Al Sadd", "Persepolis"],
  answer: "Al Hilal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0232",
  question: "Which Japanese club won the AFC Champions League in 2022?",
  options: ["Kashima Antlers", "Urawa Red Diamonds", "Yokohama F. Marinos", "Gamba Osaka"],
  answer: "Urawa Red Diamonds",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0233",
  question: "Which Saudi Arabian club won the AFC Champions League in 2023–24?",
  options: ["Al Hilal", "Al Nassr", "Al Ittihad", "Al Ahli"],
  answer: "Al Ain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0234",
  question: "Which club won the first FIFA Club World Cup in 2000?",
  options: ["Real Madrid", "Corinthians", "Manchester United", "Vasco da Gama"],
  answer: "Corinthians",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0235",
  question: "Which club won the 2006 FIFA Club World Cup?",
  options: ["Barcelona", "Internacional", "AC Milan", "São Paulo"],
  answer: "Internacional",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0236",
  question: "Which club won the 2012 FIFA Club World Cup after beating Chelsea?",
  options: ["Corinthians", "Santos", "Monterrey", "Al Ahly"],
  answer: "Corinthians",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0237",
  question: "Which club won the 2016 FIFA Club World Cup?",
  options: ["Real Madrid", "Kashima Antlers", "Barcelona", "Atlético Nacional"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0238",
  question: "Which club won the 2018 FIFA Club World Cup?",
  options: ["Al Ain", "Real Madrid", "River Plate", "Kashima Antlers"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0239",
  question: "Which team defeated Real Madrid in the 2023 FIFA Club World Cup final?",
  options: ["Al Hilal", "Flamengo", "Al Ahly", "The final was won by Real Madrid"],
  answer: "The final was won by Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0240",
  question: "Which club became the first Japanese team to win the AFC Champions League in 2007?",
  options: ["Urawa Red Diamonds", "Yokohama F. Marinos", "Júbilo Iwata", "Kashima Antlers"],
  answer: "Urawa Red Diamonds",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0241",
  question: "Which English club won the first UEFA Cup in 1972?",
  options: ["Liverpool", "Tottenham Hotspur", "Leeds United", "Arsenal"],
  answer: "Tottenham Hotspur",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0242",
  question: "Which club won the Intercontinental Cup in 2004?",
  options: ["Porto", "Once Caldas", "Boca Juniors", "Real Madrid"],
  answer: "Porto",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0243",
  question: "Which club won the 2010 UEFA Europa League final in Hamburg?",
  options: ["Atlético Madrid", "Fulham", "Liverpool", "Hamburger SV"],
  answer: "Atlético Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0244",
  question: "Which club defeated Arsenal in the 2019 Europa League final?",
  options: ["Chelsea", "Sevilla", "Villarreal", "Valencia"],
  answer: "Chelsea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0245",
  question: "Which club won the UEFA Cup in 2001 under coach Gérard Houllier?",
  options: ["Liverpool", "Valencia", "Roma", "Porto"],
  answer: "Liverpool",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0246",
  question: "Which club defeated Athletic Bilbao in the 2012 Europa League final?",
  options: ["Atlético Madrid", "Chelsea", "Fulham", "Benfica"],
  answer: "Atlético Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0247",
  question: "Which club won the UEFA Cup in 2005?",
  options: ["CSKA Moscow", "Sporting CP", "Parma", "Sevilla"],
  answer: "CSKA Moscow",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0248",
  question: "Which club won the first UEFA Conference League final in 2022?",
  options: ["Roma", "Feyenoord", "Leicester City", "Marseille"],
  answer: "Roma",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0249",
  question: "Which club won the 2023 UEFA Super Cup?",
  options: ["Manchester City", "Sevilla", "Real Madrid", "Inter Milan"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0250",
  question: "Which club won the UEFA Cup Winners' Cup in 1999, the competition's final season?",
  options: ["Lazio", "Barcelona", "Chelsea", "Arsenal"],
  answer: "Lazio",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0251",
  question: "Which club won the first Premier League season in 1992–93?",
  options: ["Arsenal", "Manchester United", "Blackburn Rovers", "Liverpool"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0252",
  question: "Which club became the first Premier League team to complete a season unbeaten, in 2003–04?",
  options: ["Chelsea", "Arsenal", "Manchester United", "Liverpool"],
  answer: "Arsenal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0253",
  question: "Which club won the Premier League title in 1994–95?",
  options: ["Blackburn Rovers", "Manchester United", "Newcastle United", "Arsenal"],
  answer: "Blackburn Rovers",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0254",
  question: "Which club won its first Premier League title in 2015–16 in a famous underdog triumph?",
  options: ["Tottenham Hotspur", "Leicester City", "West Ham United", "Southampton"],
  answer: "Leicester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0255",
  question: "Which club won the Bundesliga title in 2010–11 and 2011–12 under Jürgen Klopp?",
  options: ["Bayern Munich", "Borussia Dortmund", "Schalke 04", "Bayer Leverkusen"],
  answer: "Borussia Dortmund",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0256",
  question: "Which club won the Bundesliga in 2023–24, ending Bayern Munich's 11-season title run?",
  options: ["Bayer Leverkusen", "Borussia Dortmund", "RB Leipzig", "Stuttgart"],
  answer: "Bayer Leverkusen",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0257",
  question: "Which club won the Bundesliga title in 2008–09 under Felix Magath?",
  options: ["Wolfsburg", "Bayern Munich", "Werder Bremen", "Hamburger SV"],
  answer: "Wolfsburg",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0258",
  question: "Which club won the first Bundesliga season in 1963–64?",
  options: ["Borussia Dortmund", "Werder Bremen", "Cologne", "Bayern Munich"],
  answer: "Cologne",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0259",
  question: "Which club won La Liga in 2001–02 under coach Vicente del Bosque?",
  options: ["Valencia", "Real Madrid", "Barcelona", "Deportivo La Coruña"],
  answer: "Valencia",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0260",
  question: "Which club won La Liga in 2013–14 under Diego Simeone?",
  options: ["Real Madrid", "Barcelona", "Atlético Madrid", "Sevilla"],
  answer: "Atlético Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0261",
  question: "Which Spanish club is nicknamed Los Blancos?",
  options: ["Barcelona", "Real Madrid", "Atlético Madrid", "Valencia"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0262",
  question: "Which club plays its home matches at Camp Nou?",
  options: ["Real Madrid", "Barcelona", "Valencia", "Espanyol"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0263",
  question: "Which Italian club won Serie A in 2000–01, ending a long wait for a league title?",
  options: ["Roma", "Lazio", "Inter Milan", "AC Milan"],
  answer: "Roma",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0264",
  question: "Which club won Serie A in 2010–11 under Massimiliano Allegri?",
  options: ["Inter Milan", "Juventus", "AC Milan", "Napoli"],
  answer: "AC Milan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0265",
  question: "Which club won Serie A in 2022–23, securing its first league title since 1990?",
  options: ["Roma", "Napoli", "Lazio", "Inter Milan"],
  answer: "Napoli",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0266",
  question: "Which Italian club is traditionally known as the Old Lady?",
  options: ["AC Milan", "Juventus", "Roma", "Fiorentina"],
  answer: "Juventus",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0267",
  question: "Which French club won Ligue 1 in 2011–12, ending Montpellier's title-winning season the following year?",
  options: ["Paris Saint-Germain", "Montpellier", "Lille", "Lyon"],
  answer: "Montpellier",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0268",
  question: "Which French club won Ligue 1 in 2016–17 under Leonardo Jardim?",
  options: ["Paris Saint-Germain", "Monaco", "Lyon", "Marseille"],
  answer: "Monaco",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0269",
  question: "Which club won the Eredivisie in 2018–19?",
  options: ["PSV Eindhoven", "Ajax", "Feyenoord", "AZ Alkmaar"],
  answer: "Ajax",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0270",
  question: "Which Dutch club is based in Rotterdam?",
  options: ["Ajax", "PSV Eindhoven", "Feyenoord", "AZ Alkmaar"],
  answer: "Feyenoord",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0271",
  question: "Which Portuguese club won the Primeira Liga in 2010–11 under André Villas-Boas?",
  options: ["Benfica", "Porto", "Sporting CP", "Braga"],
  answer: "Porto",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0272",
  question: "Which club won the Portuguese league title in 2020–21 under Rúben Amorim?",
  options: ["Porto", "Benfica", "Sporting CP", "Braga"],
  answer: "Sporting CP",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0273",
  question: "Which club won the Scottish Premiership in 2020–21, ending Celtic's nine-title streak?",
  options: ["Aberdeen", "Rangers", "Hearts", "Hibernian"],
  answer: "Rangers",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0274",
  question: "Which club won the Turkish Süper Lig in 2022–23?",
  options: ["Fenerbahçe", "Beşiktaş", "Galatasaray", "Trabzonspor"],
  answer: "Galatasaray",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0275",
  question: "Which Brazilian club won the 2022 Campeonato Brasileiro Série A?",
  options: ["Palmeiras", "Flamengo", "Corinthians", "Fluminense"],
  answer: "Palmeiras",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0276",
  question: "Which club won the FA Cup in 2013, its first major trophy since 1955?",
  options: ["Wigan Athletic", "Manchester City", "Everton", "Hull City"],
  answer: "Wigan Athletic",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0277",
  question: "Which club won the FA Cup in 2014 with an extra-time goal from Aaron Ramsey?",
  options: ["Chelsea", "Arsenal", "Hull City", "Liverpool"],
  answer: "Arsenal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0278",
  question: "Which club won the FA Cup in 2016?",
  options: ["Manchester United", "Arsenal", "Crystal Palace", "Chelsea"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0279",
  question: "Which club won the FA Cup in 2021?",
  options: ["Chelsea", "Leicester City", "Manchester City", "Southampton"],
  answer: "Leicester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0280",
  question: "Which club won the FA Cup in 2023?",
  options: ["Manchester United", "Manchester City", "Arsenal", "Brighton"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0281",
  question: "Which club won the FA Cup in 2024?",
  options: ["Manchester City", "Manchester United", "Chelsea", "Liverpool"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0282",
  question: "Which club won the League Cup in 2012 after beating Cardiff City on penalties?",
  options: ["Liverpool", "Chelsea", "Arsenal", "Manchester City"],
  answer: "Liverpool",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0283",
  question: "Which club won the English League Cup in 2017?",
  options: ["Arsenal", "Manchester United", "Southampton", "Chelsea"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0284",
  question: "Which club won the Spanish Copa del Rey in 2021?",
  options: ["Athletic Bilbao", "Barcelona", "Real Sociedad", "Real Madrid"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0285",
  question: "Which club won the Copa del Rey in 2023?",
  options: ["Real Madrid", "Barcelona", "Real Sociedad", "Atlético Madrid"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0286",
  question: "Which club won the Copa del Rey in 2024?",
  options: ["Athletic Bilbao", "Mallorca", "Barcelona", "Real Madrid"],
  answer: "Athletic Bilbao",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0287",
  question: "Which club won the Coppa Italia in 2023?",
  options: ["Inter Milan", "Juventus", "Fiorentina", "AC Milan"],
  answer: "Inter Milan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0288",
  question: "Which club won the Coppa Italia in 2024?",
  options: ["Atalanta", "Juventus", "Inter Milan", "Roma"],
  answer: "Juventus",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0289",
  question: "Which club won the DFB-Pokal in 2023?",
  options: ["RB Leipzig", "Eintracht Frankfurt", "Bayern Munich", "Borussia Dortmund"],
  answer: "RB Leipzig",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0290",
  question: "Which club won the DFB-Pokal in 2024?",
  options: ["Bayer Leverkusen", "Kaiserslautern", "Bayern Munich", "Stuttgart"],
  answer: "Bayer Leverkusen",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0291",
  question: "Which club won the Coupe de France in 2023?",
  options: ["Nantes", "Toulouse", "Paris Saint-Germain", "Marseille"],
  answer: "Toulouse",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0292",
  question: "Which club won the Coupe de France in 2024?",
  options: ["Olympique Lyonnais", "Paris Saint-Germain", "Monaco", "Nice"],
  answer: "Paris Saint-Germain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0293",
  question: "Which club won the Copa do Brasil in 2023?",
  options: ["Flamengo", "São Paulo", "Corinthians", "Grêmio"],
  answer: "São Paulo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0294",
  question: "Which club won the Copa do Brasil in 2022?",
  options: ["Flamengo", "Corinthians", "Atlético Mineiro", "Palmeiras"],
  answer: "Flamengo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0295",
  question: "Which club won the Copa del Rey in 2020, in a final played in April 2021?",
  options: ["Real Sociedad", "Athletic Bilbao", "Barcelona", "Valencia"],
  answer: "Real Sociedad",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0296",
  question: "Which club won the FA Cup in 2018?",
  options: ["Manchester United", "Chelsea", "Tottenham Hotspur", "Arsenal"],
  answer: "Chelsea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0297",
  question: "Which club won the FA Cup in 2019?",
  options: ["Watford", "Manchester City", "Crystal Palace", "Liverpool"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0298",
  question: "Which club won the FA Cup in 2020?",
  options: ["Arsenal", "Chelsea", "Manchester United", "Wolves"],
  answer: "Arsenal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0299",
  question: "Which club won the FA Cup in 2022?",
  options: ["Liverpool", "Chelsea", "West Ham United", "Manchester City"],
  answer: "Liverpool",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0300",
  question: "Which club won the English League Cup in 2023?",
  options: ["Newcastle United", "Manchester United", "Southampton", "Brighton"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0301",
  question: "Which player is known as the Brazilian phenomenon and won the Ballon d'Or in 1997 and 2002?",
  options: ["Ronaldinho", "Ronaldo Nazário", "Rivaldo", "Romário"],
  answer: "Ronaldo Nazário",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0302",
  question: "Which Brazilian midfielder won the 1999 Ballon d'Or?",
  options: ["Rivaldo", "Ronaldo Nazário", "Ronaldinho", "Kaká"],
  answer: "Rivaldo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0303",
  question: "Which Brazilian won the Ballon d'Or in 2005?",
  options: ["Kaká", "Ronaldinho", "Rivaldo", "Roberto Carlos"],
  answer: "Ronaldinho",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0304",
  question: "Which Brazilian midfielder won the Ballon d'Or in 2007?",
  options: ["Kaká", "Ronaldinho", "Ronaldo Nazário", "Juninho Pernambucano"],
  answer: "Kaká",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0305",
  question: "Which player won the men's Ballon d'Or in 2018?",
  options: ["Cristiano Ronaldo", "Luka Modrić", "Lionel Messi", "Antoine Griezmann"],
  answer: "Luka Modrić",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0306",
  question: "Which player won the men's Ballon d'Or in 2021?",
  options: ["Robert Lewandowski", "Lionel Messi", "Jorginho", "Karim Benzema"],
  answer: "Lionel Messi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0307",
  question: "Which player won the men's Ballon d'Or in 2022?",
  options: ["Sadio Mané", "Karim Benzema", "Kevin De Bruyne", "Kylian Mbappé"],
  answer: "Karim Benzema",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0308",
  question: "Which player won the men's Ballon d'Or in 2023?",
  options: ["Erling Haaland", "Lionel Messi", "Kylian Mbappé", "Kevin De Bruyne"],
  answer: "Lionel Messi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0309",
  question: "Which player won the men's Ballon d'Or in 2024?",
  options: ["Vinícius Júnior", "Rodri", "Jude Bellingham", "Lamine Yamal"],
  answer: "Rodri",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0310",
  question: "Which player won the men's Ballon d'Or in 2025?",
  options: ["Ousmane Dembélé", "Lamine Yamal", "Mohamed Salah", "Kylian Mbappé"],
  answer: "Ousmane Dembélé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0311",
  question: "Who won the men's FIFA Best Player award in 2023?",
  options: ["Erling Haaland", "Lionel Messi", "Kylian Mbappé", "Kevin De Bruyne"],
  answer: "Lionel Messi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0312",
  question: "Which player won the Golden Ball at the 2014 men's World Cup?",
  options: ["Thomas Müller", "Lionel Messi", "James Rodríguez", "Manuel Neuer"],
  answer: "Lionel Messi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0313",
  question: "Which player won the Golden Ball at the 2018 men's World Cup?",
  options: ["Antoine Griezmann", "Luka Modrić", "Eden Hazard", "Harry Kane"],
  answer: "Luka Modrić",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0314",
  question: "Which player won the Golden Ball at the 2022 men's World Cup?",
  options: ["Kylian Mbappé", "Lionel Messi", "Emiliano Martínez", "Luka Modrić"],
  answer: "Lionel Messi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0315",
  question: "Which player won the Golden Ball at the 2026 men's World Cup?",
  options: ["Lamine Yamal", "Rodri", "Kylian Mbappé", "Harry Kane"],
  answer: "Kylian Mbappé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0316",
  question: "Which Spanish midfielder won the Golden Ball at the 2010 World Cup?",
  options: ["Andrés Iniesta", "Xavi", "David Villa", "Sergio Busquets"],
  answer: "Diego Forlán",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0317",
  question: "Which goalkeeper won the Golden Glove at the 2014 men's World Cup?",
  options: ["Manuel Neuer", "Tim Howard", "Sergio Romero", "Keylor Navas"],
  answer: "Manuel Neuer",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0318",
  question: "Which goalkeeper won the Golden Glove at the 2018 men's World Cup?",
  options: ["Thibaut Courtois", "Hugo Lloris", "Jordan Pickford", "Kasper Schmeichel"],
  answer: "Thibaut Courtois",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0319",
  question: "Which goalkeeper won the Golden Glove at the 2022 men's World Cup?",
  options: ["Yassine Bounou", "Emiliano Martínez", "Dominik Livaković", "Hugo Lloris"],
  answer: "Emiliano Martínez",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0320",
  question: "Which player won the Golden Boot at the 2018 men's World Cup?",
  options: ["Romelu Lukaku", "Antoine Griezmann", "Harry Kane", "Kylian Mbappé"],
  answer: "Harry Kane",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0321",
  question: "Which player won the Golden Boot at the 2022 men's World Cup?",
  options: ["Lionel Messi", "Kylian Mbappé", "Olivier Giroud", "Julián Álvarez"],
  answer: "Kylian Mbappé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0322",
  question: "Which player scored the fastest hat-trick in Premier League history in 2015?",
  options: ["Sadio Mané", "Robbie Fowler", "Jermain Defoe", "Sergio Agüero"],
  answer: "Sadio Mané",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0323",
  question: "Which player scored five goals in a Champions League match against RB Leipzig in 2023?",
  options: ["Erling Haaland", "Kylian Mbappé", "Mohamed Salah", "Harry Kane"],
  answer: "Erling Haaland",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0324",
  question: "Which player scored five goals for Barcelona against Bayer Leverkusen in the Champions League in 2012?",
  options: ["Lionel Messi", "Neymar", "Luis Suárez", "Samuel Eto'o"],
  answer: "Lionel Messi",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0325",
  question: "Which player scored four goals for Liverpool against Arsenal in a Premier League match in 2014?",
  options: ["Luis Suárez", "Daniel Sturridge", "Raheem Sterling", "Steven Gerrard"],
  answer: "Raheem Sterling",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0326",
  question: "Which manager led Leicester City to the Premier League title in 2015–16?",
  options: ["Claudio Ranieri", "Brendan Rodgers", "Nigel Pearson", "Martin O'Neill"],
  answer: "Claudio Ranieri",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0327",
  question: "Which manager guided Greece to victory at Euro 2004?",
  options: ["Otto Rehhagel", "Fernando Santos", "José Mourinho", "Guus Hiddink"],
  answer: "Otto Rehhagel",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0328",
  question: "Which manager won the treble with Manchester United in the 1998–99 season?",
  options: ["José Mourinho", "Sir Alex Ferguson", "Arsène Wenger", "Carlo Ancelotti"],
  answer: "Sir Alex Ferguson",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0329",
  question: "Which manager won the Champions League with Porto in 2004?",
  options: ["Rafael Benítez", "José Mourinho", "Ottmar Hitzfeld", "Vicente del Bosque"],
  answer: "José Mourinho",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0330",
  question: "Which manager led Spain to the 2010 World Cup title?",
  options: ["Luis Aragonés", "Vicente del Bosque", "Julen Lopetegui", "Luis Enrique"],
  answer: "Vicente del Bosque",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0331",
  question: "Which manager led Argentina to the 2022 World Cup title?",
  options: ["Jorge Sampaoli", "Lionel Scaloni", "Diego Simeone", "Marcelo Bielsa"],
  answer: "Lionel Scaloni",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0332",
  question: "Which manager led Italy to victory at Euro 2020?",
  options: ["Roberto Mancini", "Antonio Conte", "Marcello Lippi", "Luciano Spalletti"],
  answer: "Roberto Mancini",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0333",
  question: "Which manager led Chelsea to its first Champions League title in 2012?",
  options: ["André Villas-Boas", "Roberto Di Matteo", "Rafael Benítez", "José Mourinho"],
  answer: "Roberto Di Matteo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0334",
  question: "Which manager led Bayern Munich to the treble in 2012–13?",
  options: ["Jupp Heynckes", "Pep Guardiola", "Felix Magath", "Louis van Gaal"],
  answer: "Jupp Heynckes",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0335",
  question: "Which manager won the Champions League with Barcelona in 2009 and 2011?",
  options: ["Frank Rijkaard", "Pep Guardiola", "Luis Enrique", "Carles Rexach"],
  answer: "Pep Guardiola",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0336",
  question: "Which manager led Liverpool to its Champions League title in 2019?",
  options: ["Brendan Rodgers", "Jürgen Klopp", "Rafael Benítez", "Kenny Dalglish"],
  answer: "Jürgen Klopp",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0337",
  question: "Which manager won the Champions League with Real Madrid in 2014?",
  options: ["José Mourinho", "Carlo Ancelotti", "Zinedine Zidane", "Rafael Benítez"],
  answer: "Carlo Ancelotti",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0338",
  question: "Which manager led Inter Milan to a treble in the 2009–10 season?",
  options: ["Roberto Mancini", "José Mourinho", "Rafael Benítez", "Antonio Conte"],
  answer: "José Mourinho",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0339",
  question: "Which manager led Manchester City to its first Champions League title in 2023?",
  options: ["Roberto Mancini", "Manuel Pellegrini", "Pep Guardiola", "Roberto De Zerbi"],
  answer: "Pep Guardiola",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0340",
  question: "Which manager led Arsenal's famous unbeaten league season in 2003–04?",
  options: ["George Graham", "Arsène Wenger", "Unai Emery", "Mikel Arteta"],
  answer: "Arsène Wenger",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0341",
  question: "Which club won the inaugural UEFA Women's Champions League under its modern name in 2002?",
  options: ["Frankfurt", "Lyon", "Arsenal", "Umeå"],
  answer: "Umeå",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0342",
  question: "Which club won the UEFA Women's Champions League in 2022?",
  options: ["Barcelona", "Lyon", "Chelsea", "Wolfsburg"],
  answer: "Lyon",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0343",
  question: "Which club won the UEFA Women's Champions League in 2023?",
  options: ["Barcelona", "Chelsea", "Lyon", "Arsenal"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0344",
  question: "Which club won the UEFA Women's Champions League in 2024?",
  options: ["Barcelona", "Lyon", "Chelsea", "Bayern Munich"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0345",
  question: "Which club won the UEFA Women's Champions League in 2025?",
  options: ["Barcelona", "Arsenal", "Chelsea", "Lyon"],
  answer: "Arsenal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0346",
  question: "Which national team won the inaugural FIFA Women's World Cup in 1991?",
  options: ["United States", "Norway", "Germany", "China"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0347",
  question: "Which country won the women's World Cup in 2011 after defeating the United States on penalties?",
  options: ["Japan", "Germany", "Norway", "Brazil"],
  answer: "Japan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0348",
  question: "Which player won the Golden Ball at the 2019 Women's World Cup?",
  options: ["Megan Rapinoe", "Alex Morgan", "Lucy Bronze", "Rose Lavelle"],
  answer: "Megan Rapinoe",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0349",
  question: "Which player won the Golden Boot at the 2019 Women's World Cup?",
  options: ["Alex Morgan", "Megan Rapinoe", "Sam Kerr", "Ellen White"],
  answer: "Megan Rapinoe",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0350",
  question: "Which Spanish player scored the winning goal in the 2023 Women's World Cup final?",
  options: ["Aitana Bonmatí", "Olga Carmona", "Salma Paralluelo", "Alexia Putellas"],
  answer: "Olga Carmona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0351",
  question: "Which country won the 2019 Women's World Cup final?",
  options: ["Netherlands", "United States", "Sweden", "England"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0352",
  question: "Which country won the first Women's Olympic football tournament in 1996?",
  options: ["United States", "Norway", "Brazil", "Germany"],
  answer: "United States",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0353",
  question: "Which player is nicknamed the Queen of Football and is widely regarded as a pioneer of women's football in Brazil?",
  options: ["Marta", "Formiga", "Cristiane", "Debinha"],
  answer: "Marta",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0354",
  question: "Which American forward was captain of the United States women's team that won the 2015 World Cup?",
  options: ["Abby Wambach", "Carli Lloyd", "Alex Morgan", "Hope Solo"],
  answer: "Carli Lloyd",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0355",
  question: "Which player scored a hat-trick in the 2015 Women's World Cup final?",
  options: ["Carli Lloyd", "Alex Morgan", "Megan Rapinoe", "Abby Wambach"],
  answer: "Carli Lloyd",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0356",
  question: "Which nation won the 2018 Asian Games men's football gold medal?",
  options: ["Japan", "South Korea", "Vietnam", "Iran"],
  answer: "South Korea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0357",
  question: "Which national team won the 2018 AFC Women's Asian Cup?",
  options: ["Australia", "Japan", "China", "South Korea"],
  answer: "Japan",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0358",
  question: "Which country won the 2022 AFC Women's Asian Cup?",
  options: ["Japan", "China", "Australia", "South Korea"],
  answer: "China",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0359",
  question: "Which country won the 2023 FIFA U-20 World Cup?",
  options: ["Uruguay", "Italy", "Brazil", "England"],
  answer: "Uruguay",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0360",
  question: "Which country won the 2019 FIFA U-20 World Cup?",
  options: ["Ukraine", "South Korea", "Italy", "Ecuador"],
  answer: "Ukraine",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0361",
  question: "Which country won the 2023 FIFA U-17 World Cup?",
  options: ["France", "Germany", "Brazil", "Argentina"],
  answer: "Germany",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0362",
  question: "Which country won the 2019 FIFA U-17 World Cup?",
  options: ["Mexico", "Brazil", "France", "Spain"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0363",
  question: "Which national team won the 2015 FIFA Women's U-20 World Cup?",
  options: ["United States", "Germany", "Japan", "North Korea"],
  answer: "North Korea",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0364",
  question: "Which country won the 2022 FIFA Women's U-20 World Cup?",
  options: ["Spain", "Japan", "Brazil", "Netherlands"],
  answer: "Spain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0365",
  question: "Which player scored the fastest hat-trick in men's World Cup history, completing it in 18 minutes in 1982?",
  options: ["László Kiss", "Gary Lineker", "Gerd Müller", "Paolo Rossi"],
  answer: "László Kiss",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0366",
  question: "Which goalkeeper is famous for saving two penalties in the 2006 World Cup quarter-final shootout between Portugal and England?",
  options: ["Ricardo", "Rui Patrício", "Vítor Baía", "Beto"],
  answer: "Ricardo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0367",
  question: "Which player won the Golden Boot at the 2006 men's World Cup?",
  options: ["Miroslav Klose", "Thierry Henry", "Ronaldo Nazário", "Zinedine Zidane"],
  answer: "Miroslav Klose",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0368",
  question: "Which player won the Golden Boot at the 2010 men's World Cup?",
  options: ["Diego Forlán", "Thomas Müller", "David Villa", "Wesley Sneijder"],
  answer: "Thomas Müller",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0369",
  question: "Which player won the Golden Boot at the 2014 men's World Cup?",
  options: ["Thomas Müller", "James Rodríguez", "Lionel Messi", "Neymar"],
  answer: "James Rodríguez",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0370",
  question: "Which player won the Golden Boot at the 2026 men's World Cup?",
  options: ["Harry Kane", "Lionel Messi", "Kylian Mbappé", "Erling Haaland"],
  answer: "Kylian Mbappé",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0371",
  question: "Which club won the first edition of the UEFA Champions League under its new branding in 1992–93?",
  options: ["Marseille", "AC Milan", "Barcelona", "Ajax"],
  answer: "Marseille",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0372",
  question: "Which club won the Intercontinental Cup in 1981 by defeating Liverpool?",
  options: ["Flamengo", "Peñarol", "Nacional", "Santos"],
  answer: "Flamengo",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0373",
  question: "Which club won the Copa Libertadores in 2021?",
  options: ["Palmeiras", "Flamengo", "Boca Juniors", "River Plate"],
  answer: "Palmeiras",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0374",
  question: "Which Brazilian club won the Copa Libertadores in 2020, in a final played in January 2021?",
  options: ["Palmeiras", "Santos", "Flamengo", "Internacional"],
  answer: "Palmeiras",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0375",
  question: "Which Argentine club won the Copa Libertadores in 2018 after defeating River Plate in the final?",
  options: ["Boca Juniors", "River Plate", "San Lorenzo", "Independiente"],
  answer: "River Plate",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0376",
  question: "Which player won the Golden Ball at the 1998 World Cup?",
  options: ["Ronaldo Nazário", "Zinedine Zidane", "Davor Šuker", "Michael Owen"],
  answer: "Ronaldo Nazário",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0377",
  question: "Which player won the Golden Ball at the 2002 World Cup?",
  options: ["Ronaldo Nazário", "Oliver Kahn", "Rivaldo", "Ronaldinho"],
  answer: "Oliver Kahn",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0378",
  question: "Which player won the Golden Ball at the 2006 World Cup?",
  options: ["Fabio Cannavaro", "Zinedine Zidane", "Andrea Pirlo", "Miroslav Klose"],
  answer: "Zinedine Zidane",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0379",
  question: "Which country won the men's Olympic football gold medal in 2016?",
  options: ["Germany", "Brazil", "Argentina", "Nigeria"],
  answer: "Brazil",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0380",
  question: "Which country won the men's Olympic football gold medal in 2024?",
  options: ["France", "Spain", "Brazil", "Argentina"],
  answer: "Spain",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0381",
  question: "Which country won the 2016 AFC Champions League?",
  options: ["Jeonbuk Hyundai Motors", "Al Ain", "Urawa Red Diamonds", "Guangzhou Evergrande"],
  answer: "Jeonbuk Hyundai Motors",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0382",
  question: "Which club won the AFC Champions League in 2019?",
  options: ["Al Hilal", "Urawa Red Diamonds", "Al Sadd", "Kashima Antlers"],
  answer: "Al Hilal",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0383",
  question: "Which club won the AFC Champions League in 2020?",
  options: ["Ulsan Hyundai", "Persepolis", "Al Hilal", "Al Sadd"],
  answer: "Ulsan Hyundai",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0384",
  question: "Which club won the CAF Champions League in 2019?",
  options: ["Espérance de Tunis", "Wydad Casablanca", "Al Ahly", "TP Mazembe"],
  answer: "Espérance de Tunis",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0385",
  question: "Which club won the CAF Champions League in 2021?",
  options: ["Al Ahly", "Kaizer Chiefs", "Wydad Casablanca", "Zamalek"],
  answer: "Al Ahly",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0386",
  question: "Which club won the CAF Champions League in 2022?",
  options: ["Wydad Casablanca", "Al Ahly", "Esperance", "Raja Casablanca"],
  answer: "Wydad Casablanca",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0387",
  question: "Which club won the UEFA Europa League in 2018?",
  options: ["Atlético Madrid", "Marseille", "Arsenal", "Chelsea"],
  answer: "Atlético Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0388",
  question: "Which club won the UEFA Europa League in 2017?",
  options: ["Ajax", "Manchester United", "Celta Vigo", "Lyon"],
  answer: "Manchester United",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0389",
  question: "Which club won the UEFA Europa League in 2016?",
  options: ["Sevilla", "Liverpool", "Villarreal", "Shakhtar Donetsk"],
  answer: "Sevilla",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0390",
  question: "Which club won the UEFA Europa League in 2015?",
  options: ["Dnipro", "Sevilla", "Fiorentina", "Napoli"],
  answer: "Sevilla",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0391",
  question: "Which club won the UEFA Champions League in 2001?",
  options: ["Bayern Munich", "Valencia", "Real Madrid", "Leeds United"],
  answer: "Bayern Munich",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0392",
  question: "Which club won the Champions League in 2002 with a famous volley from Zinedine Zidane?",
  options: ["Bayer Leverkusen", "Real Madrid", "Manchester United", "Juventus"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0393",
  question: "Which club won the Champions League in 2006?",
  options: ["Barcelona", "Arsenal", "AC Milan", "Liverpool"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0394",
  question: "Which club won the Champions League in 2011?",
  options: ["Manchester United", "Barcelona", "Real Madrid", "Chelsea"],
  answer: "Barcelona",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0395",
  question: "Which club won the Champions League in 2016?",
  options: ["Atlético Madrid", "Real Madrid", "Juventus", "Bayern Munich"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0396",
  question: "Which club won the Champions League in 2018?",
  options: ["Liverpool", "Real Madrid", "Bayern Munich", "Juventus"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0397",
  question: "Which club won the Champions League in 2020?",
  options: ["Paris Saint-Germain", "Bayern Munich", "RB Leipzig", "Manchester City"],
  answer: "Bayern Munich",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0398",
  question: "Which club won the Champions League in 2023?",
  options: ["Inter Milan", "Manchester City", "Real Madrid", "AC Milan"],
  answer: "Manchester City",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0399",
  question: "Which club won the Champions League in 2024?",
  options: ["Borussia Dortmund", "Real Madrid", "Bayern Munich", "Paris Saint-Germain"],
  answer: "Real Madrid",
  category: "football",
  difficulty: 85.5
},
{
  id: "football_0400",
  question: "Which club won the Champions League in 2026?",
  options: ["Paris Saint-Germain", "Real Madrid", "Arsenal", "Bayern Munich"],
  answer: "Paris Saint-Germain",
  category: "football",
  difficulty: 85.5
},



    {
      question: "Which planet is known as the Red Planet?",
      options: [
        "Earth",
         "Mars",
         "Venus",
          "Jupiter"
      ],
      answer: "Mars",
      category: "general-knowledge"
    },

    {
      question : "Which language runs directly in a web browser to make pages interactive?",
      options :[
        "JavaScript",
         "Python",
          "C++",
           "Java"
      ],
      answer: "JavaScript",
       category: "general-knowledge"
    },

    {
      question : "What is the result of 2 + 3 in JavaScript?",
      options :[
        "23",
         "5",
          "6",
           "1"
      ],
      answer: "5",
       category: "general-knowledge"
    },

    {
  id: "general_knowledge_0001",
  question: "What is the largest ocean on Earth?",
  options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  answer: "Pacific Ocean",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0002",
  question: "What is the capital city of France?",
  options: ["Madrid", "Paris", "Rome", "Lisbon"],
  answer: "Paris",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0003",
  question: "Which planet is the largest in our solar system?",
  options: ["Earth", "Saturn", "Jupiter", "Neptune"],
  answer: "Jupiter",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0004",
  question: "What is the chemical formula for water?",
  options: ["CO2", "H2O", "O2", "NaCl"],
  answer: "H2O",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0005",
  question: "Which organ pumps blood around the human body?",
  options: ["Lungs", "Liver", "Heart", "Kidneys"],
  answer: "Heart",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0006",
  question: "Which gas do plants absorb from the atmosphere during photosynthesis?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  answer: "Carbon dioxide",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0007",
  question: "What is the hardest naturally occurring mineral?",
  options: ["Quartz", "Diamond", "Gold", "Iron"],
  answer: "Diamond",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0008",
  question: "How many sides does a hexagon have?",
  options: ["Five", "Six", "Seven", "Eight"],
  answer: "Six",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0009",
  question: "Which animal is the largest mammal in the world?",
  options: ["African elephant", "Blue whale", "Giraffe", "Hippopotamus"],
  answer: "Blue whale",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0010",
  question: "What is the currency of Japan?",
  options: ["Won", "Yuan", "Yen", "Ringgit"],
  answer: "Yen",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0011",
  question: "Which country has Ottawa as its capital?",
  options: ["Australia", "Canada", "New Zealand", "Ireland"],
  answer: "Canada",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0012",
  question: "What is the main language spoken in Brazil?",
  options: ["Spanish", "Portuguese", "French", "Italian"],
  answer: "Portuguese",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0013",
  question: "Which instrument is used to measure temperature?",
  options: ["Barometer", "Thermometer", "Speedometer", "Altimeter"],
  answer: "Thermometer",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0014",
  question: "How many continents are commonly recognized on Earth?",
  options: ["Five", "Six", "Seven", "Eight"],
  answer: "Seven",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0015",
  question: "Which is the smallest prime number?",
  options: ["0", "1", "2", "3"],
  answer: "2",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0016",
  question: "Which metal is liquid at normal room temperature?",
  options: ["Copper", "Mercury", "Aluminium", "Silver"],
  answer: "Mercury",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0017",
  question: "Which part of a plant usually absorbs water from the soil?",
  options: ["Flowers", "Leaves", "Roots", "Fruits"],
  answer: "Roots",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0018",
  question: "What is the name of Earth's natural satellite?",
  options: ["Europa", "The Moon", "Titan", "Phobos"],
  answer: "The Moon",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0019",
  question: "Which gas makes up most of Earth's atmosphere?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  answer: "Nitrogen",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0020",
  question: "Which of these animals is an amphibian?",
  options: ["Frog", "Lizard", "Eagle", "Rabbit"],
  answer: "Frog",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0021",
  question: "Which bird is known for being unable to fly and for living in Antarctica?",
  options: ["Eagle", "Penguin", "Falcon", "Ostrich"],
  answer: "Penguin",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0022",
  question: "What is the process by which plants make food using sunlight called?",
  options: ["Respiration", "Photosynthesis", "Fermentation", "Digestion"],
  answer: "Photosynthesis",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0023",
  question: "Which vitamin can the human body produce when skin is exposed to sunlight?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  answer: "Vitamin D",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0024",
  question: "Which sense organ is mainly responsible for hearing?",
  options: ["Eyes", "Ears", "Nose", "Tongue"],
  answer: "Ears",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0025",
  question: "Which blood cells help the body fight infections?",
  options: ["Red blood cells", "White blood cells", "Platelets", "Plasma cells only"],
  answer: "White blood cells",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0026",
  question: "What is the freezing point of pure water at standard atmospheric pressure?",
  options: ["0°C", "10°C", "32°C", "100°C"],
  answer: "0°C",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0027",
  question: "Which force keeps planets in orbit around the Sun?",
  options: ["Magnetism", "Gravity", "Friction", "Electricity"],
  answer: "Gravity",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0028",
  question: "What is the unit of electrical current?",
  options: ["Volt", "Watt", "Ampere", "Ohm"],
  answer: "Ampere",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0029",
  question: "Which instrument is used to observe distant objects in space?",
  options: ["Microscope", "Telescope", "Periscope", "Stethoscope"],
  answer: "Telescope",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0030",
  question: "What is the center of an atom called?",
  options: ["Electron", "Nucleus", "Molecule", "Neutron cloud"],
  answer: "Nucleus",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0031",
  question: "Which organization is responsible for coordinating international public health efforts within the United Nations system?",
  options: ["World Health Organization", "World Trade Organization", "UNICEF", "International Court of Justice"],
  answer: "World Health Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0032",
  question: "Where is the headquarters of the United Nations located?",
  options: ["London", "New York City", "Geneva", "Paris"],
  answer: "New York City",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0033",
  question: "Which ocean lies between Africa and Australia?",
  options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
  answer: "Indian Ocean",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0034",
  question: "Which is the smallest country in the world by land area?",
  options: ["Monaco", "Maldives", "Vatican City", "San Marino"],
  answer: "Vatican City",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0035",
  question: "Which country is famous for the ancient city of Petra?",
  options: ["Jordan", "Egypt", "Greece", "Turkey"],
  answer: "Jordan",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0036",
  question: "Which continent contains the Amazon rainforest?",
  options: ["Africa", "South America", "Asia", "Europe"],
  answer: "South America",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0037",
  question: "Which country uses the pound sterling as its currency?",
  options: ["United Kingdom", "Japan", "India", "South Africa"],
  answer: "United Kingdom",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0038",
  question: "What is the capital of South Korea?",
  options: ["Busan", "Seoul", "Pyongyang", "Tokyo"],
  answer: "Seoul",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0039",
  question: "Which country is home to the Great Barrier Reef?",
  options: ["Australia", "Mexico", "Indonesia", "South Africa"],
  answer: "Australia",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0040",
  question: "Which is the largest hot desert in the world?",
  options: ["Gobi Desert", "Sahara Desert", "Kalahari Desert", "Atacama Desert"],
  answer: "Sahara Desert",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0041",
  question: "Which sport is played at Wimbledon?",
  options: ["Golf", "Tennis", "Cricket", "Rugby"],
  answer: "Tennis",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0042",
  question: "How many rings appear on the Olympic symbol?",
  options: ["Four", "Five", "Six", "Seven"],
  answer: "Five",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0043",
  question: "Which musical instrument typically has 88 keys on a standard modern full-size model?",
  options: ["Violin", "Flute", "Piano", "Trumpet"],
  answer: "Piano",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0044",
  question: "How many strings does a standard modern violin have?",
  options: ["Four", "Five", "Six", "Seven"],
  answer: "Four",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0045",
  question: "Which device is commonly used to enter text into a computer?",
  options: ["Monitor", "Keyboard", "Speaker", "Projector"],
  answer: "Keyboard",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0046",
  question: "What does the abbreviation CPU stand for?",
  options: ["Central Processing Unit", "Computer Power Utility", "Central Program Upload", "Control Processing User"],
  answer: "Central Processing Unit",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0047",
  question: "Who is widely credited with inventing the World Wide Web?",
  options: ["Bill Gates", "Tim Berners-Lee", "Steve Jobs", "Mark Zuckerberg"],
  answer: "Tim Berners-Lee",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0048",
  question: "Which type of software is primarily used to browse websites?",
  options: ["Web browser", "Spreadsheet", "Text editor", "Media player"],
  answer: "Web browser",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0049",
  question: "Which of these is a renewable source of energy?",
  options: ["Coal", "Natural gas", "Solar power", "Petroleum"],
  answer: "Solar power",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0050",
  question: "Which direction does the Sun appear to rise from on Earth?",
  options: ["North", "South", "East", "West"],
  answer: "East",
  category: "general-knowledge",
  difficulty: 50
},


{
  id: "general_knowledge_0051",
  question: "What is the largest organ of the human body?",
  options: ["Heart", "Liver", "Skin", "Lungs"],
  answer: "Skin",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0052",
  question: "What is the smallest bone in the human body?",
  options: ["Stapes", "Femur", "Radius", "Patella"],
  answer: "Stapes",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0053",
  question: "How many bones are typically found in an adult human skeleton?",
  options: ["186", "206", "226", "246"],
  answer: "206",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0054",
  question: "Which blood group is commonly known as the universal red blood cell donor?",
  options: ["AB positive", "A positive", "O negative", "B negative"],
  answer: "O negative",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0055",
  question: "How many planets are in our solar system?",
  options: ["Seven", "Eight", "Nine", "Ten"],
  answer: "Eight",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0056",
  question: "Which planet is closest to the Sun?",
  options: ["Venus", "Earth", "Mercury", "Mars"],
  answer: "Mercury",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0057",
  question: "Which planet is known for having the highest average surface temperature?",
  options: ["Mercury", "Venus", "Mars", "Jupiter"],
  answer: "Venus",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0058",
  question: "Which planet is famous for its prominent ring system?",
  options: ["Mars", "Venus", "Saturn", "Mercury"],
  answer: "Saturn",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0059",
  question: "What is the name of our galaxy?",
  options: ["Andromeda", "Milky Way", "Sombrero", "Whirlpool"],
  answer: "Milky Way",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0060",
  question: "What type of celestial object is the Sun?",
  options: ["Planet", "Star", "Comet", "Asteroid"],
  answer: "Star",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0061",
  question: "Approximately how fast does light travel in a vacuum?",
  options: ["30,000 km/s", "150,000 km/s", "300,000 km/s", "500,000 km/s"],
  answer: "300,000 km/s",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0062",
  question: "What is the approximate boiling point of pure water at sea level?",
  options: ["50°C", "75°C", "100°C", "150°C"],
  answer: "100°C",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0063",
  question: "What is the pH value of a neutral solution at room temperature?",
  options: ["0", "5", "7", "14"],
  answer: "7",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0064",
  question: "Which element has the chemical symbol H?",
  options: ["Helium", "Hydrogen", "Hafnium", "Mercury"],
  answer: "Hydrogen",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0065",
  question: "Which element has the chemical symbol Na?",
  options: ["Nitrogen", "Sodium", "Neon", "Nickel"],
  answer: "Sodium",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0066",
  question: "Which element has the chemical symbol Au?",
  options: ["Silver", "Gold", "Aluminium", "Argon"],
  answer: "Gold",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0067",
  question: "Which element has the chemical symbol Fe?",
  options: ["Fluorine", "Iron", "Francium", "Lead"],
  answer: "Iron",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0068",
  question: "What does DNA stand for?",
  options: ["Deoxyribonucleic acid", "Dynamic nitrogen acid", "Double nucleic atom", "Deoxygenated natural acid"],
  answer: "Deoxyribonucleic acid",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0069",
  question: "Which scientist developed the theory of natural selection?",
  options: ["Isaac Newton", "Charles Darwin", "Albert Einstein", "Louis Pasteur"],
  answer: "Charles Darwin",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0070",
  question: "What is the longest bone in the human body?",
  options: ["Tibia", "Femur", "Humerus", "Fibula"],
  answer: "Femur",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0071",
  question: "Which part is the largest region of the human brain?",
  options: ["Cerebellum", "Cerebrum", "Brainstem", "Medulla"],
  answer: "Cerebrum",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0072",
  question: "Which organs are primarily responsible for gas exchange in humans?",
  options: ["Kidneys", "Lungs", "Stomach", "Liver"],
  answer: "Lungs",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0073",
  question: "Which protein in red blood cells carries oxygen?",
  options: ["Insulin", "Haemoglobin", "Keratin", "Collagen"],
  answer: "Haemoglobin",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0074",
  question: "Which type of blood vessel carries blood away from the heart?",
  options: ["Veins", "Arteries", "Capillaries", "Lymph vessels"],
  answer: "Arteries",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0075",
  question: "Which gland produces insulin?",
  options: ["Thyroid", "Pancreas", "Adrenal gland", "Pituitary gland"],
  answer: "Pancreas",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0076",
  question: "Which vitamin is particularly important for normal blood clotting?",
  options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  answer: "Vitamin K",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0077",
  question: "Which vitamin is commonly associated with the prevention of scurvy?",
  options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  answer: "Vitamin C",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0078",
  question: "What is the change of liquid water into water vapour called?",
  options: ["Condensation", "Evaporation", "Freezing", "Melting"],
  answer: "Evaporation",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0079",
  question: "Which process forms clouds when water vapour cools?",
  options: ["Evaporation", "Condensation", "Sublimation", "Combustion"],
  answer: "Condensation",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0080",
  question: "Why can sound not travel through a perfect vacuum?",
  options: ["It needs a material medium", "It needs sunlight", "It needs gravity", "It travels only through liquids"],
  answer: "It needs a material medium",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0081",
  question: "What is the scientific study of insects called?",
  options: ["Botany", "Entomology", "Geology", "Astronomy"],
  answer: "Entomology",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0082",
  question: "What is the scientific study of plants called?",
  options: ["Zoology", "Botany", "Ecology", "Anatomy"],
  answer: "Botany",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0083",
  question: "What is the scientific study of animals called?",
  options: ["Zoology", "Botany", "Meteorology", "Geography"],
  answer: "Zoology",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0084",
  question: "Which is the tallest living land animal?",
  options: ["Elephant", "Giraffe", "Ostrich", "Camel"],
  answer: "Giraffe",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0085",
  question: "Which animal is the fastest land mammal?",
  options: ["Lion", "Cheetah", "Leopard", "Horse"],
  answer: "Cheetah",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0086",
  question: "Which is the largest living land animal?",
  options: ["Giraffe", "African elephant", "Rhinoceros", "Hippopotamus"],
  answer: "African elephant",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0087",
  question: "Which mammal is capable of true powered flight?",
  options: ["Flying squirrel", "Bat", "Sugar glider", "Colugo"],
  answer: "Bat",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0088",
  question: "What is a group of lions commonly called?",
  options: ["Pack", "Pride", "Herd", "Colony"],
  answer: "Pride",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0089",
  question: "What is a young kangaroo called?",
  options: ["Cub", "Joey", "Calf", "Foal"],
  answer: "Joey",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0090",
  question: "How many hearts does an octopus have?",
  options: ["One", "Two", "Three", "Four"],
  answer: "Three",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0091",
  question: "Dolphins belong to which animal group?",
  options: ["Fish", "Mammals", "Reptiles", "Amphibians"],
  answer: "Mammals",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0092",
  question: "Which animal is famous for its black-and-white stripes?",
  options: ["Zebra", "Leopard", "Giraffe", "Hyena"],
  answer: "Zebra",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0093",
  question: "Which group of animals do snakes belong to?",
  options: ["Amphibians", "Reptiles", "Mammals", "Birds"],
  answer: "Reptiles",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0094",
  question: "How many players from one team are normally on the court in basketball?",
  options: ["Four", "Five", "Six", "Seven"],
  answer: "Five",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0095",
  question: "Which surface is traditionally used for the main Wimbledon tennis championships?",
  options: ["Clay", "Grass", "Hard court", "Carpet"],
  answer: "Grass",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0096",
  question: "What is the object hit by players in badminton called?",
  options: ["Puck", "Shuttlecock", "Racquetball", "Balloon"],
  answer: "Shuttlecock",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0097",
  question: "What is the usual shape of a rugby ball?",
  options: ["Perfectly round", "Oval", "Square", "Flat"],
  answer: "Oval",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0098",
  question: "How many stumps are there at each end of a standard cricket pitch?",
  options: ["Two", "Three", "Four", "Five"],
  answer: "Three",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0099",
  question: "How long is a standard marathon race?",
  options: ["21.1 km", "30 km", "42.195 km", "50 km"],
  answer: "42.195 km",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0100",
  question: "What is the chess term for a situation in which a player's king cannot escape attack?",
  options: ["Checkmate", "Stalemate", "Castling", "Promotion"],
  answer: "Checkmate",
  category: "general-knowledge",
  difficulty: 50
},


{
  id: "general_knowledge_0101",
  question: "Which scientist developed the three laws of motion?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  answer: "Isaac Newton",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0102",
  question: "What is the approximate value of pi to two decimal places?",
  options: ["3.12", "3.14", "3.16", "3.18"],
  answer: "3.14",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0103",
  question: "Which scientist is famous for the theory of relativity?",
  options: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Louis Pasteur"],
  answer: "Albert Einstein",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0104",
  question: "What is the square root of 144?",
  options: ["10", "11", "12", "14"],
  answer: "12",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0105",
  question: "How many degrees are in a right angle?",
  options: ["45", "60", "90", "180"],
  answer: "90",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0106",
  question: "What is the name of the longest side of a right-angled triangle?",
  options: ["Base", "Hypotenuse", "Median", "Altitude"],
  answer: "Hypotenuse",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0107",
  question: "What is 15 multiplied by 12?",
  options: ["160", "170", "180", "190"],
  answer: "180",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0108",
  question: "Which number is the Roman numeral X?",
  options: ["5", "10", "50", "100"],
  answer: "10",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0109",
  question: "How many sides does an octagon have?",
  options: ["Six", "Seven", "Eight", "Nine"],
  answer: "Eight",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0110",
  question: "What is the value of 7 squared?",
  options: ["14", "21", "42", "49"],
  answer: "49",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0111",
  question: "Which scientist discovered penicillin?",
  options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Edward Jenner"],
  answer: "Alexander Fleming",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0112",
  question: "Which scientist is known for developing the first widely recognized vaccine against smallpox?",
  options: ["Edward Jenner", "Robert Koch", "Gregor Mendel", "Alexander Fleming"],
  answer: "Edward Jenner",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0113",
  question: "Which scientist is known for discovering radioactivity in uranium salts?",
  options: ["Marie Curie", "Henri Becquerel", "Isaac Newton", "James Watt"],
  answer: "Henri Becquerel",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0114",
  question: "Which scientist is widely associated with the discovery of the structure of DNA using X-ray diffraction images?",
  options: ["Rosalind Franklin", "Jane Goodall", "Ada Lovelace", "Rachel Carson"],
  answer: "Rosalind Franklin",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0115",
  question: "What is the basic unit of life?",
  options: ["Atom", "Cell", "Tissue", "Organ"],
  answer: "Cell",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0116",
  question: "Which part of a cell contains most of its genetic material?",
  options: ["Nucleus", "Cell membrane", "Cytoplasm", "Ribosome"],
  answer: "Nucleus",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0117",
  question: "Which blood cells are primarily responsible for transporting oxygen?",
  options: ["White blood cells", "Red blood cells", "Platelets", "Stem cells"],
  answer: "Red blood cells",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0118",
  question: "What is the largest internal organ in the human body?",
  options: ["Heart", "Liver", "Stomach", "Lungs"],
  answer: "Liver",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0119",
  question: "Which organ filters waste from the blood to produce urine?",
  options: ["Kidneys", "Lungs", "Pancreas", "Stomach"],
  answer: "Kidneys",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0120",
  question: "Which part of the eye controls the amount of light entering it?",
  options: ["Retina", "Iris", "Cornea", "Optic nerve"],
  answer: "Iris",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0121",
  question: "Which nutrient is the body's main immediate source of energy?",
  options: ["Carbohydrates", "Vitamins", "Minerals", "Water"],
  answer: "Carbohydrates",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0122",
  question: "Which mineral is essential for strong bones and teeth?",
  options: ["Calcium", "Sodium", "Iodine", "Chlorine"],
  answer: "Calcium",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0123",
  question: "Which disease is caused by a deficiency of vitamin C?",
  options: ["Rickets", "Scurvy", "Beriberi", "Night blindness"],
  answer: "Scurvy",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0124",
  question: "Which disease is commonly associated with vitamin D deficiency in children?",
  options: ["Rickets", "Scurvy", "Malaria", "Anaemia"],
  answer: "Rickets",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0125",
  question: "Which part of the human body contains the smallest bones?",
  options: ["Fingers", "Middle ear", "Spine", "Feet"],
  answer: "Middle ear",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0126",
  question: "What is the normal number of chromosomes in most human body cells?",
  options: ["23", "44", "46", "48"],
  answer: "46",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0127",
  question: "Which organ produces bile?",
  options: ["Liver", "Stomach", "Kidney", "Heart"],
  answer: "Liver",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0128",
  question: "Which gas do humans mainly breathe in to support cellular respiration?",
  options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
  answer: "Oxygen",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0129",
  question: "What is the largest part of the human brain?",
  options: ["Cerebrum", "Cerebellum", "Brainstem", "Medulla"],
  answer: "Cerebrum",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0130",
  question: "Which part of the human body connects muscles to bones?",
  options: ["Ligaments", "Tendons", "Cartilage", "Nerves"],
  answer: "Tendons",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0131",
  question: "Which animal is the largest species of shark?",
  options: ["Great white shark", "Whale shark", "Tiger shark", "Hammerhead shark"],
  answer: "Whale shark",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0132",
  question: "Which animal is known for changing its colour to blend into its surroundings?",
  options: ["Chameleon", "Kangaroo", "Elephant", "Penguin"],
  answer: "Chameleon",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0133",
  question: "Which mammal lays eggs?",
  options: ["Platypus", "Dolphin", "Kangaroo", "Bat"],
  answer: "Platypus",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0134",
  question: "What is the fastest bird in a dive?",
  options: ["Peregrine falcon", "Eagle", "Ostrich", "Albatross"],
  answer: "Peregrine falcon",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0135",
  question: "Which animal is famous for building dams?",
  options: ["Beaver", "Otter", "Badger", "Mole"],
  answer: "Beaver",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0136",
  question: "Which animal has a pouch for carrying its young?",
  options: ["Kangaroo", "Elephant", "Zebra", "Tiger"],
  answer: "Kangaroo",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0137",
  question: "What is the largest living species of penguin?",
  options: ["Emperor penguin", "King penguin", "Adélie penguin", "Little penguin"],
  answer: "Emperor penguin",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0138",
  question: "Which animal is known to have three hearts?",
  options: ["Octopus", "Shark", "Dolphin", "Crocodile"],
  answer: "Octopus",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0139",
  question: "Which animal is famous for its long neck and spotted coat?",
  options: ["Giraffe", "Zebra", "Leopard", "Camel"],
  answer: "Giraffe",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0140",
  question: "Which insect produces honey?",
  options: ["Honeybee", "Ant", "Mosquito", "Butterfly"],
  answer: "Honeybee",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0141",
  question: "Which animal is commonly known as man's best friend?",
  options: ["Dog", "Cat", "Horse", "Rabbit"],
  answer: "Dog",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0142",
  question: "Which animal is the largest living land carnivore?",
  options: ["Polar bear", "Lion", "Tiger", "Wolf"],
  answer: "Polar bear",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0143",
  question: "Which animal is known for having a very long tongue used to catch ants and termites?",
  options: ["Anteater", "Cheetah", "Deer", "Hippo"],
  answer: "Anteater",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0144",
  question: "What is a baby goat called?",
  options: ["Kid", "Calf", "Lamb", "Foal"],
  answer: "Kid",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0145",
  question: "What is a baby horse called?",
  options: ["Foal", "Cub", "Kid", "Chick"],
  answer: "Foal",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0146",
  question: "What is a group of wolves commonly called?",
  options: ["Pack", "Pride", "Flock", "School"],
  answer: "Pack",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0147",
  question: "Which bird is the largest living bird by height?",
  options: ["Ostrich", "Emu", "Eagle", "Swan"],
  answer: "Ostrich",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0148",
  question: "Which animal is known for its black-and-white fur and eating bamboo?",
  options: ["Giant panda", "Polar bear", "Koala", "Raccoon"],
  answer: "Giant panda",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0149",
  question: "Which animal uses echolocation to navigate and find food?",
  options: ["Bat", "Elephant", "Giraffe", "Horse"],
  answer: "Bat",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0150",
  question: "Which sea creature has eight arms?",
  options: ["Octopus", "Squid", "Starfish", "Jellyfish"],
  answer: "Octopus",
  category: "general-knowledge",
  difficulty: 50
},



{
  id: "general_knowledge_0151",
  question: "Who wrote the play Romeo and Juliet?",
  options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
  answer: "William Shakespeare",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0152",
  question: "Who wrote the novel Things Fall Apart?",
  options: ["Chinua Achebe", "Wole Soyinka", "Chimamanda Ngozi Adichie", "Buchi Emecheta"],
  answer: "Chinua Achebe",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0153",
  question: "Who wrote the Harry Potter book series?",
  options: ["J. K. Rowling", "Suzanne Collins", "Stephenie Meyer", "J. R. R. Tolkien"],
  answer: "J. K. Rowling",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0154",
  question: "Who wrote the novel The Old Man and the Sea?",
  options: ["Ernest Hemingway", "George Orwell", "F. Scott Fitzgerald", "John Steinbeck"],
  answer: "Ernest Hemingway",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0155",
  question: "Who wrote Animal Farm?",
  options: ["George Orwell", "Aldous Huxley", "Charles Dickens", "Leo Tolstoy"],
  answer: "George Orwell",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0156",
  question: "Who wrote Pride and Prejudice?",
  options: ["Jane Austen", "Emily Brontë", "Mary Shelley", "Virginia Woolf"],
  answer: "Jane Austen",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0157",
  question: "Who wrote The Great Gatsby?",
  options: ["F. Scott Fitzgerald", "Ernest Hemingway", "Mark Twain", "John Steinbeck"],
  answer: "F. Scott Fitzgerald",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0158",
  question: "Which fictional detective was created by Arthur Conan Doyle?",
  options: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Philip Marlowe"],
  answer: "Sherlock Holmes",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0159",
  question: "Who wrote the novel Frankenstein?",
  options: ["Mary Shelley", "Jane Austen", "Charlotte Brontë", "Agatha Christie"],
  answer: "Mary Shelley",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0160",
  question: "Who wrote The Adventures of Tom Sawyer?",
  options: ["Mark Twain", "Charles Dickens", "H. G. Wells", "Jules Verne"],
  answer: "Mark Twain",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0161",
  question: "Who wrote the African novel Half of a Yellow Sun?",
  options: ["Chimamanda Ngozi Adichie", "Chinua Achebe", "Buchi Emecheta", "Flora Nwapa"],
  answer: "Chimamanda Ngozi Adichie",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0162",
  question: "Which Nigerian author wrote The Joys of Motherhood?",
  options: ["Buchi Emecheta", "Chimamanda Ngozi Adichie", "Ama Ata Aidoo", "Flora Nwapa"],
  answer: "Buchi Emecheta",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0163",
  question: "Which Nigerian writer won the Nobel Prize in Literature in 1986?",
  options: ["Wole Soyinka", "Chinua Achebe", "J. P. Clark", "Chimamanda Ngozi Adichie"],
  answer: "Wole Soyinka",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0164",
  question: "Who wrote the poem The Raven?",
  options: ["Edgar Allan Poe", "Robert Frost", "William Blake", "Walt Whitman"],
  answer: "Edgar Allan Poe",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0165",
  question: "Which author wrote the novel The Hobbit?",
  options: ["J. R. R. Tolkien", "C. S. Lewis", "J. K. Rowling", "George R. R. Martin"],
  answer: "J. R. R. Tolkien",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0166",
  question: "Who wrote the Chronicles of Narnia?",
  options: ["C. S. Lewis", "J. R. R. Tolkien", "Philip Pullman", "Roald Dahl"],
  answer: "C. S. Lewis",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0167",
  question: "Who wrote the novel Don Quixote?",
  options: ["Miguel de Cervantes", "Gabriel García Márquez", "Victor Hugo", "Pablo Neruda"],
  answer: "Miguel de Cervantes",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0168",
  question: "Which author created the character James Bond?",
  options: ["Ian Fleming", "John le Carré", "Agatha Christie", "Dan Brown"],
  answer: "Ian Fleming",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0169",
  question: "Who wrote the novel The Alchemist?",
  options: ["Paulo Coelho", "Haruki Murakami", "Khaled Hosseini", "Salman Rushdie"],
  answer: "Paulo Coelho",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0170",
  question: "Who wrote the novel Things Fall Apart?",
  options: ["Chinua Achebe", "Wole Soyinka", "Ngũgĩ wa Thiong'o", "Ben Okri"],
  answer: "Chinua Achebe",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0171",
  question: "Who painted the Mona Lisa?",
  options: ["Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh", "Claude Monet"],
  answer: "Leonardo da Vinci",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0172",
  question: "Who painted The Starry Night?",
  options: ["Vincent van Gogh", "Pablo Picasso", "Salvador Dalí", "Michelangelo"],
  answer: "Vincent van Gogh",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0173",
  question: "Who painted the ceiling of the Sistine Chapel?",
  options: ["Michelangelo", "Raphael", "Donatello", "Leonardo da Vinci"],
  answer: "Michelangelo",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0174",
  question: "Which artist painted Guernica?",
  options: ["Pablo Picasso", "Claude Monet", "Rembrandt", "Edvard Munch"],
  answer: "Pablo Picasso",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0175",
  question: "Which art movement is strongly associated with Claude Monet?",
  options: ["Impressionism", "Cubism", "Surrealism", "Pop art"],
  answer: "Impressionism",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0176",
  question: "Which famous sculpture was created by Auguste Rodin?",
  options: ["The Thinker", "David", "Venus de Milo", "The Pietà"],
  answer: "The Thinker",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0177",
  question: "Which painter is associated with the painting The Persistence of Memory?",
  options: ["Salvador Dalí", "Vincent van Gogh", "Andy Warhol", "Henri Matisse"],
  answer: "Salvador Dalí",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0178",
  question: "Which Dutch painter is famous for Girl with a Pearl Earring?",
  options: ["Johannes Vermeer", "Rembrandt", "Pieter Bruegel", "Vincent van Gogh"],
  answer: "Johannes Vermeer",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0179",
  question: "Which art movement is associated with Pablo Picasso and Georges Braque?",
  options: ["Cubism", "Baroque", "Realism", "Romanticism"],
  answer: "Cubism",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0180",
  question: "Which artist is famous for the Campbell's Soup Cans artwork?",
  options: ["Andy Warhol", "Banksy", "Jackson Pollock", "Georgia O'Keeffe"],
  answer: "Andy Warhol",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0181",
  question: "Which instrument belongs to the woodwind family?",
  options: ["Flute", "Trumpet", "Trombone", "Tuba"],
  answer: "Flute",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0182",
  question: "Which instrument belongs to the brass family?",
  options: ["Trumpet", "Violin", "Flute", "Cello"],
  answer: "Trumpet",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0183",
  question: "Which instrument is played with a bow?",
  options: ["Violin", "Drum", "Flute", "Trumpet"],
  answer: "Violin",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0184",
  question: "Which musical symbol indicates a period of silence?",
  options: ["Rest", "Clef", "Sharp", "Flat"],
  answer: "Rest",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0185",
  question: "How many notes are in a standard major scale?",
  options: ["Five", "Six", "Seven", "Eight"],
  answer: "Seven",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0186",
  question: "Which term describes the speed of a piece of music?",
  options: ["Tempo", "Pitch", "Harmony", "Timbre"],
  answer: "Tempo",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0187",
  question: "Which composer wrote the famous Moonlight Sonata?",
  options: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Mozart", "Frédéric Chopin"],
  answer: "Ludwig van Beethoven",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0188",
  question: "Which composer wrote The Four Seasons?",
  options: ["Antonio Vivaldi", "Mozart", "Beethoven", "Joseph Haydn"],
  answer: "Antonio Vivaldi",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0189",
  question: "Which composer wrote the opera The Magic Flute?",
  options: ["Wolfgang Amadeus Mozart", "Giuseppe Verdi", "Richard Wagner", "George Frideric Handel"],
  answer: "Wolfgang Amadeus Mozart",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0190",
  question: "Which instrument is strongly associated with jazz music?",
  options: ["Saxophone", "Bagpipes", "Oboe", "Harp"],
  answer: "Saxophone",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0191",
  question: "Which country is commonly credited as the birthplace of reggae music?",
  options: ["Jamaica", "Cuba", "Brazil", "Nigeria"],
  answer: "Jamaica",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0192",
  question: "Which musical style developed in Argentina and Uruguay?",
  options: ["Tango", "Reggae", "Flamenco", "Samba"],
  answer: "Tango",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0193",
  question: "Which country is especially associated with the musical and dance style flamenco?",
  options: ["Spain", "Italy", "Greece", "Portugal"],
  answer: "Spain",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0194",
  question: "Which dance originated in Brazil?",
  options: ["Samba", "Tango", "Waltz", "Flamenco"],
  answer: "Samba",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0195",
  question: "Which traditional Japanese string instrument has three strings?",
  options: ["Shamisen", "Koto", "Biwa", "Shakuhachi"],
  answer: "Shamisen",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0196",
  question: "What is the traditional Scottish instrument made up of several pipes and a bag called?",
  options: ["Bagpipes", "Harp", "Accordion", "Clarinet"],
  answer: "Bagpipes",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0197",
  question: "Which instrument is commonly used to keep time in an orchestra?",
  options: ["Metronome", "Microphone", "Amplifier", "Tuner only"],
  answer: "Metronome",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0198",
  question: "Which musical term means gradually getting louder?",
  options: ["Crescendo", "Diminuendo", "Adagio", "Staccato"],
  answer: "Crescendo",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0199",
  question: "Which term describes a series of musical notes played one after another?",
  options: ["Melody", "Harmony", "Rhythm", "Silence"],
  answer: "Melody",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0200",
  question: "Which musical term describes the combination of different notes played together?",
  options: ["Harmony", "Tempo", "Solo", "Rest"],
  answer: "Harmony",
  category: "general-knowledge",
  difficulty: 50
},



{
  id: "general_knowledge_0201",
  question: "What does HTML stand for?",
  options: ["HyperText Markup Language", "High Transfer Machine Language", "Hyperlink Text Management Language", "Home Tool Markup Language"],
  answer: "HyperText Markup Language",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0202",
  question: "What does CSS stand for in web development?",
  options: ["Cascading Style Sheets", "Computer Style System", "Creative Script Software", "Central Styling Source"],
  answer: "Cascading Style Sheets",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0203",
  question: "Which programming language is commonly used to add interactivity to web pages?",
  options: ["JavaScript", "HTML", "SQL", "XML"],
  answer: "JavaScript",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0204",
  question: "What does URL stand for?",
  options: ["Uniform Resource Locator", "Universal Record Link", "United Routing Language", "User Reference List"],
  answer: "Uniform Resource Locator",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0205",
  question: "Which company developed the Windows operating system?",
  options: ["Microsoft", "Apple", "Google", "IBM"],
  answer: "Microsoft",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0206",
  question: "Which company developed the Android operating system?",
  options: ["Google", "Microsoft", "Apple", "Nokia"],
  answer: "Google",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0207",
  question: "Which company created the iPhone?",
  options: ["Apple", "Samsung", "Huawei", "Google"],
  answer: "Apple",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0208",
  question: "What is the main function of a computer's operating system?",
  options: ["Manage hardware and software resources", "Print documents only", "Increase screen brightness only", "Create internet connections only"],
  answer: "Manage hardware and software resources",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0209",
  question: "Which component is often described as the brain of a computer?",
  options: ["CPU", "Monitor", "Keyboard", "Printer"],
  answer: "CPU",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0210",
  question: "What does RAM stand for?",
  options: ["Random Access Memory", "Read All Memory", "Rapid Application Module", "Remote Access Machine"],
  answer: "Random Access Memory",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0211",
  question: "Which type of memory loses its contents when power is switched off?",
  options: ["RAM", "ROM", "DVD", "Flash storage"],
  answer: "RAM",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0212",
  question: "Which device is used to connect a computer to a network?",
  options: ["Network adapter", "Speaker", "Projector", "Scanner"],
  answer: "Network adapter",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0213",
  question: "What does Wi-Fi allow devices to do?",
  options: ["Connect to a network wirelessly", "Print without ink", "Increase battery size", "Repair damaged files automatically"],
  answer: "Connect to a network wirelessly",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0214",
  question: "Which device distributes data between devices on a local network?",
  options: ["Router", "Microphone", "Webcam", "Keyboard"],
  answer: "Router",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0215",
  question: "Which of these is a search engine?",
  options: ["Google", "Microsoft Word", "Adobe Photoshop", "VLC"],
  answer: "Google",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0216",
  question: "Which company owns the video platform YouTube?",
  options: ["Google", "Meta", "Amazon", "Netflix"],
  answer: "Google",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0217",
  question: "Which company owns the social media platform Instagram?",
  options: ["Meta", "Microsoft", "Apple", "Netflix"],
  answer: "Meta",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0218",
  question: "What does PDF stand for?",
  options: ["Portable Document Format", "Personal Data File", "Printed Document Form", "Public Digital Folder"],
  answer: "Portable Document Format",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0219",
  question: "Which file extension is commonly used for JavaScript files?",
  options: [".js", ".html", ".css", ".py"],
  answer: ".js",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0220",
  question: "Which file extension is commonly used for CSS files?",
  options: [".css", ".js", ".jpg", ".mp3"],
  answer: ".css",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0221",
  question: "Which device converts printed documents into digital images?",
  options: ["Scanner", "Speaker", "Monitor", "Router"],
  answer: "Scanner",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0222",
  question: "Which technology is commonly used to identify objects through radio waves and tags?",
  options: ["RFID", "HDMI", "USB", "GPS only"],
  answer: "RFID",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0223",
  question: "What does GPS stand for?",
  options: ["Global Positioning System", "General Positioning Service", "Global Printing System", "Geographic Processing Software"],
  answer: "Global Positioning System",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0224",
  question: "Which technology uses satellites to help determine a receiver's location?",
  options: ["GPS", "Bluetooth", "USB", "NFC"],
  answer: "GPS",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0225",
  question: "What is the name of the first widely recognized programmable electronic general-purpose computer?",
  options: ["ENIAC", "Apple II", "IBM PC", "Commodore 64"],
  answer: "ENIAC",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0226",
  question: "Who is widely recognized as the first computer programmer?",
  options: ["Ada Lovelace", "Grace Hopper", "Alan Turing", "Charles Babbage"],
  answer: "Ada Lovelace",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0227",
  question: "Which mathematician is often called the father of computer science?",
  options: ["Alan Turing", "Isaac Newton", "Euclid", "Pythagoras"],
  answer: "Alan Turing",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0228",
  question: "What is the term for harmful software designed to damage or disrupt computers?",
  options: ["Malware", "Freeware", "Firmware", "Shareware"],
  answer: "Malware",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0229",
  question: "Which practice helps protect an online account from unauthorized access?",
  options: ["Using strong unique passwords", "Sharing passwords publicly", "Using the same password everywhere", "Turning off all security settings"],
  answer: "Using strong unique passwords",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0230",
  question: "What does AI stand for?",
  options: ["Artificial Intelligence", "Automatic Internet", "Advanced Information", "Applied Interface"],
  answer: "Artificial Intelligence",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0231",
  question: "Which device displays visual output from a computer?",
  options: ["Monitor", "Mouse", "Microphone", "Scanner"],
  answer: "Monitor",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0232",
  question: "Which device is commonly used to move a pointer on a computer screen?",
  options: ["Mouse", "Printer", "Speaker", "Flash drive"],
  answer: "Mouse",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0233",
  question: "What does USB stand for?",
  options: ["Universal Serial Bus", "United System Board", "Universal Storage Block", "User Service Base"],
  answer: "Universal Serial Bus",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0234",
  question: "Which company developed the PlayStation brand?",
  options: ["Sony", "Microsoft", "Nintendo", "Sega"],
  answer: "Sony",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0235",
  question: "Which company developed the Xbox gaming console?",
  options: ["Microsoft", "Sony", "Nintendo", "Apple"],
  answer: "Microsoft",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0236",
  question: "Which company is known for developing the Nintendo Switch?",
  options: ["Nintendo", "Sega", "Sony", "Microsoft"],
  answer: "Nintendo",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0237",
  question: "What does the abbreviation WWW stand for?",
  options: ["World Wide Web", "Wide World Wire", "Web World Window", "World Web Work"],
  answer: "World Wide Web",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0238",
  question: "Which application is primarily used for creating spreadsheets?",
  options: ["Microsoft Excel", "Microsoft Paint", "VLC Media Player", "Notepad"],
  answer: "Microsoft Excel",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0239",
  question: "Which application is commonly used to create slide presentations?",
  options: ["Microsoft PowerPoint", "Microsoft Access", "Notepad", "Calculator"],
  answer: "Microsoft PowerPoint",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0240",
  question: "What is the process of converting readable information into a coded form called?",
  options: ["Encryption", "Formatting", "Printing", "Compression only"],
  answer: "Encryption",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0241",
  question: "Which company manufactures the Galaxy series of smartphones?",
  options: ["Samsung", "Apple", "Google", "Huawei"],
  answer: "Samsung",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0242",
  question: "Which technology allows nearby devices to exchange data over short distances without cables?",
  options: ["Bluetooth", "Ethernet", "HDMI", "VGA"],
  answer: "Bluetooth",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0243",
  question: "Which of these is an example of cloud storage?",
  options: ["Google Drive", "A paper notebook", "A traditional wall clock", "A calculator"],
  answer: "Google Drive",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0244",
  question: "Which system uses binary digits to represent computer data?",
  options: ["Base 2", "Base 5", "Base 8", "Base 12"],
  answer: "Base 2",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0245",
  question: "What are the two digits used in the binary number system?",
  options: ["0 and 1", "1 and 2", "2 and 3", "0 and 9"],
  answer: "0 and 1",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0246",
  question: "Which part of a computer temporarily stores data currently being used by programs?",
  options: ["RAM", "DVD drive", "Printer", "Monitor"],
  answer: "RAM",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0247",
  question: "What does a firewall help protect a computer network against?",
  options: ["Unauthorized network access", "Power outages", "Broken screens", "Dust accumulation"],
  answer: "Unauthorized network access",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0248",
  question: "Which technology allows a user to make voice or video calls over the internet?",
  options: ["VoIP", "VGA", "NFC", "OCR"],
  answer: "VoIP",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0249",
  question: "What does CAPTCHA help websites distinguish?",
  options: ["Human users from automated programs", "Old computers from new ones", "Printers from scanners", "Photos from videos"],
  answer: "Human users from automated programs",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0250",
  question: "Which technology is used to recognize faces or fingerprints as a way of identifying people?",
  options: ["Biometrics", "Geology", "Meteorology", "Typography"],
  answer: "Biometrics",
  category: "general-knowledge",
  difficulty: 50
},



{
  id: "general_knowledge_0251",
  question: "Which country is famous for inventing sushi in its modern forms?",
  options: ["Japan", "China", "Thailand", "South Korea"],
  answer: "Japan",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0252",
  question: "Which country is the origin of pizza as a modern dish?",
  options: ["Italy", "France", "Greece", "Spain"],
  answer: "Italy",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0253",
  question: "Which country is especially associated with tacos?",
  options: ["Mexico", "Brazil", "Portugal", "Argentina"],
  answer: "Mexico",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0254",
  question: "Which country is known for the dish paella?",
  options: ["Spain", "Italy", "Germany", "France"],
  answer: "Spain",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0255",
  question: "Which ingredient gives traditional guacamole its main base?",
  options: ["Avocado", "Tomato", "Potato", "Cucumber"],
  answer: "Avocado",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0256",
  question: "Which spice is made from the dried stigmas of a crocus flower?",
  options: ["Saffron", "Cinnamon", "Paprika", "Ginger"],
  answer: "Saffron",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0257",
  question: "Which fruit is dried to produce raisins?",
  options: ["Grapes", "Plums", "Apples", "Dates"],
  answer: "Grapes",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0258",
  question: "Which nut is used to make traditional marzipan?",
  options: ["Almond", "Peanut", "Cashew", "Walnut"],
  answer: "Almond",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0259",
  question: "Which country is especially known for producing Parmesan cheese?",
  options: ["Italy", "Canada", "Japan", "Nigeria"],
  answer: "Italy",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0260",
  question: "Which plant is commonly used to make traditional green tea?",
  options: ["Camellia sinensis", "Mint", "Rosemary", "Lavender"],
  answer: "Camellia sinensis",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0261",
  question: "Which grain is commonly used to make couscous?",
  options: ["Wheat semolina", "Rice flour", "Corn starch", "Oat flour"],
  answer: "Wheat semolina",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0262",
  question: "Which country is the origin of the popular dish kimchi?",
  options: ["South Korea", "Japan", "Thailand", "India"],
  answer: "South Korea",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0263",
  question: "What is the main ingredient of hummus?",
  options: ["Chickpeas", "Rice", "Potatoes", "Lentils"],
  answer: "Chickpeas",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0264",
  question: "Which country is widely associated with croissants?",
  options: ["France", "Germany", "Italy", "Sweden"],
  answer: "France",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0265",
  question: "Which fruit is the main ingredient in traditional apple pie?",
  options: ["Apple", "Pear", "Peach", "Mango"],
  answer: "Apple",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0266",
  question: "Which ingredient is mainly used to make tofu?",
  options: ["Soybeans", "Corn", "Potatoes", "Wheat"],
  answer: "Soybeans",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0267",
  question: "What is the name of the fermented dairy product commonly used in Indian cooking?",
  options: ["Yogurt", "Margarine", "Cream cheese", "Buttercream"],
  answer: "Yogurt",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0268",
  question: "Which country is particularly famous for the dish fish and chips?",
  options: ["United Kingdom", "Brazil", "India", "Egypt"],
  answer: "United Kingdom",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0269",
  question: "What is the main ingredient in traditional miso paste?",
  options: ["Soybeans", "Tomatoes", "Chickpeas", "Potatoes"],
  answer: "Soybeans",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0270",
  question: "Which fruit is often called the king of fruits in parts of Southeast Asia?",
  options: ["Durian", "Pineapple", "Papaya", "Watermelon"],
  answer: "Durian",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0271",
  question: "Which beverage is traditionally made by fermenting grapes?",
  options: ["Wine", "Coffee", "Tea", "Lemonade"],
  answer: "Wine",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0272",
  question: "Which country is especially associated with the dish moussaka?",
  options: ["Greece", "Japan", "Mexico", "Canada"],
  answer: "Greece",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0273",
  question: "Which fruit is the main ingredient in traditional orange juice?",
  options: ["Orange", "Lemon", "Grapefruit", "Tangerine"],
  answer: "Orange",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0274",
  question: "Which type of pasta is shaped like small rice grains?",
  options: ["Orzo", "Penne", "Fusilli", "Tagliatelle"],
  answer: "Orzo",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0275",
  question: "Which vegetable is the main base of traditional sauerkraut?",
  options: ["Cabbage", "Carrot", "Spinach", "Cucumber"],
  answer: "Cabbage",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0276",
  question: "Which country is famous for producing maple syrup?",
  options: ["Canada", "Egypt", "Japan", "Nigeria"],
  answer: "Canada",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0277",
  question: "Which country is especially associated with the dish pad Thai?",
  options: ["Thailand", "Vietnam", "China", "Japan"],
  answer: "Thailand",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0278",
  question: "What is the main ingredient in traditional falafel?",
  options: ["Chickpeas or fava beans", "Fish", "Pork", "Wheat noodles"],
  answer: "Chickpeas or fava beans",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0279",
  question: "Which fruit is dried to produce prunes?",
  options: ["Plums", "Grapes", "Bananas", "Peaches"],
  answer: "Plums",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0280",
  question: "Which cooking method involves cooking food in hot oil?",
  options: ["Frying", "Steaming", "Poaching", "Grilling only"],
  answer: "Frying",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0281",
  question: "Which sport uses a shuttlecock?",
  options: ["Badminton", "Tennis", "Squash", "Table tennis"],
  answer: "Badminton",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0282",
  question: "Which country hosted the first modern Olympic Games in 1896?",
  options: ["Greece", "France", "United Kingdom", "Italy"],
  answer: "Greece",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0283",
  question: "How many players are on a standard volleyball team on the court at one time?",
  options: ["Five", "Six", "Seven", "Eight"],
  answer: "Six",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0284",
  question: "Which sport is associated with the term 'home run'?",
  options: ["Baseball", "Basketball", "Rugby", "Tennis"],
  answer: "Baseball",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0285",
  question: "Which sport uses the terms birdie and eagle?",
  options: ["Golf", "Cricket", "Football", "Swimming"],
  answer: "Golf",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0286",
  question: "How many points is a successful free throw worth in basketball?",
  options: ["One", "Two", "Three", "Four"],
  answer: "One",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0287",
  question: "Which sport is played in the Super Bowl?",
  options: ["American football", "Rugby union", "Baseball", "Ice hockey"],
  answer: "American football",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0288",
  question: "What is the maximum number of points a player can score with one dart in standard darts?",
  options: ["20", "40", "50", "60"],
  answer: "60",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0289",
  question: "Which sport uses a pommel horse?",
  options: ["Gymnastics", "Wrestling", "Swimming", "Cycling"],
  answer: "Gymnastics",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0290",
  question: "Which sport is associated with the Tour de France?",
  options: ["Cycling", "Running", "Horse racing", "Sailing"],
  answer: "Cycling",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0291",
  question: "How many holes are normally played in a full round of golf?",
  options: ["9", "12", "18", "24"],
  answer: "18",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0292",
  question: "Which sport uses a puck?",
  options: ["Ice hockey", "Football", "Basketball", "Cricket"],
  answer: "Ice hockey",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0293",
  question: "Which swimming stroke is also called the front crawl?",
  options: ["Freestyle", "Backstroke", "Butterfly", "Breaststroke"],
  answer: "Freestyle",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0294",
  question: "Which country is associated with the martial art judo?",
  options: ["Japan", "Brazil", "China", "South Korea"],
  answer: "Japan",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0295",
  question: "Which country is associated with the martial art taekwondo?",
  options: ["South Korea", "Japan", "Thailand", "Vietnam"],
  answer: "South Korea",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0296",
  question: "Which sport includes a pommel horse and uneven bars?",
  options: ["Artistic gymnastics", "Athletics", "Fencing", "Rowing"],
  answer: "Artistic gymnastics",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0297",
  question: "In tennis, what does the score of love mean?",
  options: ["Zero", "One", "Fifteen", "Forty"],
  answer: "Zero",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0298",
  question: "Which country is strongly associated with the sport of sumo wrestling?",
  options: ["Japan", "India", "Mexico", "Canada"],
  answer: "Japan",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0299",
  question: "Which sport is played at the Ryder Cup?",
  options: ["Golf", "Tennis", "Cricket", "Rugby"],
  answer: "Golf",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0300",
  question: "Which race is widely known as the most famous endurance event in Formula One?",
  options: ["Monaco Grand Prix", "British Grand Prix", "Italian Grand Prix", "Canadian Grand Prix"],
  answer: "Monaco Grand Prix",
  category: "general-knowledge",
  difficulty: 50
},


{
  id: "general_knowledge_0301",
  question: "Which organization awards the Nobel Peace Prize?",
  options: ["Norwegian Nobel Committee", "United Nations", "European Parliament", "International Olympic Committee"],
  answer: "Norwegian Nobel Committee",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0302",
  question: "Which Nobel Prize category was not part of Alfred Nobel's original five categories?",
  options: ["Economics", "Physics", "Chemistry", "Literature"],
  answer: "Economics",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0303",
  question: "Which city hosts the annual Cannes Film Festival?",
  options: ["Cannes", "Paris", "Nice", "Lyon"],
  answer: "Cannes",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0304",
  question: "Which country hosts the annual Eurovision Song Contest when it wins, subject to the contest's hosting rules?",
  options: ["The previous winning country", "The United Kingdom every year", "France every year", "Sweden every year"],
  answer: "The previous winning country",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0305",
  question: "What is the highest award given at the Academy Awards for best film?",
  options: ["Best Picture", "Best Costume Design", "Best Sound", "Best Editing"],
  answer: "Best Picture",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0306",
  question: "Which film won the Academy Award for Best Picture in 1998?",
  options: ["Titanic", "Good Will Hunting", "Saving Private Ryan", "The Truman Show"],
  answer: "Titanic",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0307",
  question: "Which film franchise features the fictional wizard Harry Potter?",
  options: ["Harry Potter", "The Lord of the Rings", "The Hunger Games", "Twilight"],
  answer: "Harry Potter",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0308",
  question: "Which fictional city is home to Batman?",
  options: ["Gotham City", "Metropolis", "Star City", "Central City"],
  answer: "Gotham City",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0309",
  question: "Which fictional city is associated with Superman?",
  options: ["Metropolis", "Gotham City", "Wakanda", "Asgard"],
  answer: "Metropolis",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0310",
  question: "Which company created the animated character Mickey Mouse?",
  options: ["Walt Disney Studios", "Pixar", "DreamWorks", "Warner Bros."],
  answer: "Walt Disney Studios",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0311",
  question: "What is the name of the cowboy in the Toy Story films?",
  options: ["Woody", "Buzz Lightyear", "Rex", "Slinky"],
  answer: "Woody",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0312",
  question: "Which animated film features the song Let It Go?",
  options: ["Frozen", "Moana", "Tangled", "Encanto"],
  answer: "Frozen",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0313",
  question: "Which actor played Jack in the 1997 film Titanic?",
  options: ["Leonardo DiCaprio", "Brad Pitt", "Matt Damon", "Tom Cruise"],
  answer: "Leonardo DiCaprio",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0314",
  question: "Which actor played Iron Man in the Marvel Cinematic Universe?",
  options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
  answer: "Robert Downey Jr.",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0315",
  question: "Which actress played Hermione Granger in the Harry Potter films?",
  options: ["Emma Watson", "Emma Stone", "Keira Knightley", "Natalie Portman"],
  answer: "Emma Watson",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0316",
  question: "Which actor played Captain Jack Sparrow in Pirates of the Caribbean?",
  options: ["Johnny Depp", "Orlando Bloom", "Brad Pitt", "Tom Hanks"],
  answer: "Johnny Depp",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0317",
  question: "Which actor played the character Wolverine in the X-Men film series?",
  options: ["Hugh Jackman", "Ryan Reynolds", "Chris Evans", "Christian Bale"],
  answer: "Hugh Jackman",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0318",
  question: "Which actress played Katniss Everdeen in The Hunger Games films?",
  options: ["Jennifer Lawrence", "Scarlett Johansson", "Anne Hathaway", "Shailene Woodley"],
  answer: "Jennifer Lawrence",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0319",
  question: "Which movie features the line 'I'll be back' spoken by Arnold Schwarzenegger?",
  options: ["The Terminator", "Predator", "Commando", "Total Recall"],
  answer: "The Terminator",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0320",
  question: "Which actor played the title character in the 2008 film Iron Man?",
  options: ["Robert Downey Jr.", "Chris Evans", "Tom Hiddleston", "Benedict Cumberbatch"],
  answer: "Robert Downey Jr.",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0321",
  question: "Which actor played Harry Potter in the film series?",
  options: ["Daniel Radcliffe", "Rupert Grint", "Tom Felton", "Matthew Lewis"],
  answer: "Daniel Radcliffe",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0322",
  question: "Which actor played Thor in the Marvel Cinematic Universe?",
  options: ["Chris Hemsworth", "Chris Evans", "Chris Pratt", "Tom Holland"],
  answer: "Chris Hemsworth",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0323",
  question: "Which actor played Black Panther in the 2018 film?",
  options: ["Chadwick Boseman", "Michael B. Jordan", "Idris Elba", "Anthony Mackie"],
  answer: "Chadwick Boseman",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0324",
  question: "Which streaming service released the series Stranger Things?",
  options: ["Netflix", "Disney+", "Amazon Prime Video", "Apple TV+"],
  answer: "Netflix",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0325",
  question: "Which fictional family is at the centre of the television series The Simpsons?",
  options: ["The Simpson family", "The Griffin family", "The Belcher family", "The Bundy family"],
  answer: "The Simpson family",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0326",
  question: "Which television series features the fictional continent of Westeros?",
  options: ["Game of Thrones", "The Witcher", "Vikings", "The Last Kingdom"],
  answer: "Game of Thrones",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0327",
  question: "What is the name of the coffee shop in the television series Friends?",
  options: ["Central Perk", "Monk's Café", "Luke's Diner", "MacLaren's Pub"],
  answer: "Central Perk",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0328",
  question: "Which fictional detective lives at 221B Baker Street?",
  options: ["Sherlock Holmes", "Hercule Poirot", "Miss Marple", "Inspector Morse"],
  answer: "Sherlock Holmes",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0329",
  question: "Which fictional character is known as the boy who never grew up?",
  options: ["Peter Pan", "Pinocchio", "Tarzan", "Robin Hood"],
  answer: "Peter Pan",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0330",
  question: "Which film features the fictional African nation of Wakanda?",
  options: ["Black Panther", "Iron Man", "Doctor Strange", "Thor"],
  answer: "Black Panther",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0331",
  question: "Which instrument is used to measure atmospheric temperature?",
  options: ["Thermometer", "Barometer", "Altimeter", "Hygrometer"],
  answer: "Thermometer",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0332",
  question: "Which instrument is used to determine the direction of the wind?",
  options: ["Wind vane", "Rain gauge", "Seismograph", "Thermometer"],
  answer: "Wind vane",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0333",
  question: "What is the name of the boundary where Earth's atmosphere meets outer space at approximately 100 kilometres altitude?",
  options: ["Kármán line", "Equator", "Prime Meridian", "Tropic of Capricorn"],
  answer: "Kármán line",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0334",
  question: "Which layer of the atmosphere contains most of the ozone layer?",
  options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
  answer: "Stratosphere",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0335",
  question: "Which layer of the atmosphere is where most everyday weather occurs?",
  options: ["Troposphere", "Stratosphere", "Mesosphere", "Exosphere"],
  answer: "Troposphere",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0336",
  question: "What is the name of the process by which liquid water turns into ice?",
  options: ["Freezing", "Melting", "Evaporation", "Condensation"],
  answer: "Freezing",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0337",
  question: "What is the change from solid directly to gas called?",
  options: ["Sublimation", "Condensation", "Freezing", "Melting"],
  answer: "Sublimation",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0338",
  question: "Which gas is the main greenhouse gas emitted by human activities?",
  options: ["Carbon dioxide", "Helium", "Neon", "Argon"],
  answer: "Carbon dioxide",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0339",
  question: "What is the name for a long period of unusually low rainfall?",
  options: ["Drought", "Monsoon", "Blizzard", "Tsunami"],
  answer: "Drought",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0340",
  question: "Which natural disaster is measured using the moment magnitude scale?",
  options: ["Earthquake", "Hurricane", "Flood", "Drought"],
  answer: "Earthquake",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0341",
  question: "What is a sudden, large movement of water caused by an underwater disturbance called?",
  options: ["Tsunami", "Tornado", "Cyclone", "Avalanche"],
  answer: "Tsunami",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0342",
  question: "Which natural disaster involves a rapidly rotating column of air extending from a storm cloud?",
  options: ["Tornado", "Earthquake", "Landslide", "Tsunami"],
  answer: "Tornado",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0343",
  question: "Which scale is commonly used to measure the intensity of hurricanes based on wind speed?",
  options: ["Saffir-Simpson scale", "Richter scale", "Beaufort scale only", "Mercalli scale"],
  answer: "Saffir-Simpson scale",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0344",
  question: "What is the name of molten rock that reaches Earth's surface?",
  options: ["Lava", "Magma", "Granite", "Basalt"],
  answer: "Lava",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0345",
  question: "Which of the following is a renewable energy source?",
  options: ["Wind power", "Coal", "Petroleum", "Natural gas"],
  answer: "Wind power",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0346",
  question: "Which energy source uses heat from inside the Earth?",
  options: ["Geothermal energy", "Solar energy", "Wind energy", "Tidal energy"],
  answer: "Geothermal energy",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0347",
  question: "Which energy source uses moving water to generate electricity?",
  options: ["Hydroelectric power", "Geothermal power", "Nuclear power", "Solar power"],
  answer: "Hydroelectric power",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0348",
  question: "Which natural resource is refined to produce petrol and diesel?",
  options: ["Crude oil", "Iron ore", "Limestone", "Timber"],
  answer: "Crude oil",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0349",
  question: "Which gas is commonly used in many fire extinguishers for electrical fires?",
  options: ["Carbon dioxide", "Oxygen", "Hydrogen", "Nitrogen dioxide"],
  answer: "Carbon dioxide",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0350",
  question: "Which environmental term describes the variety of living organisms in an area?",
  options: ["Biodiversity", "Pollution", "Deforestation", "Desertification"],
  answer: "Biodiversity",
  category: "general-knowledge",
  difficulty: 50
},


{
  id: "general_knowledge_0351",
  question: "Which international organization is responsible for setting many global civil aviation standards?",
  options: ["International Civil Aviation Organization", "World Health Organization", "World Trade Organization", "International Labour Organization"],
  answer: "International Civil Aviation Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0352",
  question: "Which organization is responsible for international rules and coordination in maritime shipping?",
  options: ["International Maritime Organization", "UNICEF", "UNESCO", "World Bank"],
  answer: "International Maritime Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0353",
  question: "Where is the headquarters of the World Health Organization?",
  options: ["Geneva", "New York", "London", "Paris"],
  answer: "Geneva",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0354",
  question: "Where is the headquarters of UNESCO?",
  options: ["Paris", "Geneva", "Rome", "Vienna"],
  answer: "Paris",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0355",
  question: "Where is the headquarters of the African Union?",
  options: ["Addis Ababa", "Nairobi", "Lagos", "Accra"],
  answer: "Addis Ababa",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0356",
  question: "Which international organization uses the initials UNICEF?",
  options: ["United Nations Children's Fund", "United Nations Climate Fund", "United Nations Cultural Forum", "Universal Nations Council"],
  answer: "United Nations Children's Fund",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0357",
  question: "Which organization is best known for protecting refugees worldwide?",
  options: ["UNHCR", "FIFA", "WTO", "OPEC"],
  answer: "UNHCR",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0358",
  question: "What does OPEC stand for?",
  options: ["Organization of the Petroleum Exporting Countries", "Oil Producers Economic Council", "Organization for Petroleum and Energy Control", "Overseas Petroleum Export Council"],
  answer: "Organization of the Petroleum Exporting Countries",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0359",
  question: "Which international financial institution provides development loans and assistance to countries?",
  options: ["World Bank", "FIFA", "UNESCO", "Interpol"],
  answer: "World Bank",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0360",
  question: "Which organization is responsible for international trade rules between countries?",
  options: ["World Trade Organization", "World Health Organization", "United Nations Children's Fund", "International Olympic Committee"],
  answer: "World Trade Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0361",
  question: "What does the abbreviation GDP stand for?",
  options: ["Gross Domestic Product", "General Development Plan", "Global Domestic Production", "Gross Development Programme"],
  answer: "Gross Domestic Product",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0362",
  question: "What is inflation?",
  options: ["A general rise in prices over time", "A general fall in population", "An increase in rainfall", "A decrease in national borders"],
  answer: "A general rise in prices over time",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0363",
  question: "Which institution is primarily responsible for monetary policy in Nigeria?",
  options: ["Central Bank of Nigeria", "Nigerian National Assembly", "Federal Road Safety Corps", "Nigerian Ports Authority"],
  answer: "Central Bank of Nigeria",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0364",
  question: "Which international court is based in The Hague and settles legal disputes between states?",
  options: ["International Court of Justice", "International Criminal Court", "European Court of Human Rights", "Supreme Court of the United States"],
  answer: "International Court of Justice",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0365",
  question: "Which organization coordinates international police cooperation?",
  options: ["Interpol", "UNESCO", "FIFA", "OPEC"],
  answer: "Interpol",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0366",
  question: "Which international organization is especially associated with labour standards?",
  options: ["International Labour Organization", "International Maritime Organization", "World Tourism Organization", "World Meteorological Organization"],
  answer: "International Labour Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0367",
  question: "Which organization awards the Nobel Prize in Physics?",
  options: ["Royal Swedish Academy of Sciences", "Norwegian Nobel Committee", "International Olympic Committee", "European Parliament"],
  answer: "Royal Swedish Academy of Sciences",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0368",
  question: "Which organization governs international association football?",
  options: ["FIFA", "UEFA", "CAF", "FIBA"],
  answer: "FIFA",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0369",
  question: "Which organization governs football in Europe?",
  options: ["UEFA", "FIFA", "CAF", "CONMEBOL"],
  answer: "UEFA",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0370",
  question: "Which organization governs football in Africa?",
  options: ["CAF", "UEFA", "AFC", "CONCACAF"],
  answer: "CAF",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0371",
  question: "Which organization governs basketball internationally?",
  options: ["FIBA", "FIFA", "ICC", "World Rugby"],
  answer: "FIBA",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0372",
  question: "Which international body governs the sport of cricket?",
  options: ["International Cricket Council", "FIFA", "World Athletics", "International Tennis Federation"],
  answer: "International Cricket Council",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0373",
  question: "Which international body governs the sport of rugby union?",
  options: ["World Rugby", "FIBA", "FIFA", "International Cricket Council"],
  answer: "World Rugby",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0374",
  question: "Which international organization coordinates the Olympic Games?",
  options: ["International Olympic Committee", "FIFA", "World Athletics", "United Nations"],
  answer: "International Olympic Committee",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0375",
  question: "What does NATO stand for?",
  options: ["North Atlantic Treaty Organization", "National Alliance for Trade Operations", "Northern Asian Treaty Office", "North American Transport Organization"],
  answer: "North Atlantic Treaty Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0376",
  question: "Which regional organization uses the abbreviation ASEAN?",
  options: ["Association of Southeast Asian Nations", "African Society of European Allied Nations", "American States Economic Alliance", "Asian Security and Energy Network"],
  answer: "Association of Southeast Asian Nations",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0377",
  question: "Which organization represents countries in the Arab world?",
  options: ["Arab League", "European Union", "African Union", "ASEAN"],
  answer: "Arab League",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0378",
  question: "Which organization uses a blue flag with a yellow map of Europe as its former commonly recognized symbol?",
  options: ["European Union", "African Union", "NATO", "Arab League"],
  answer: "European Union",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0379",
  question: "Which United Nations agency focuses on education, science, and culture?",
  options: ["UNESCO", "UNICEF", "UNHCR", "WHO"],
  answer: "UNESCO",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0380",
  question: "Which UN agency focuses on food and agriculture?",
  options: ["Food and Agriculture Organization", "World Health Organization", "International Labour Organization", "UNESCO"],
  answer: "Food and Agriculture Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0381",
  question: "Which international agency publishes many global weather and climate monitoring standards?",
  options: ["World Meteorological Organization", "World Trade Organization", "Interpol", "UNICEF"],
  answer: "World Meteorological Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0382",
  question: "Which organization is responsible for coordinating international civil nuclear energy cooperation?",
  options: ["International Atomic Energy Agency", "International Monetary Fund", "World Bank", "International Labour Organization"],
  answer: "International Atomic Energy Agency",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0383",
  question: "Which organization provides a major international platform for setting standards for telecommunications?",
  options: ["International Telecommunication Union", "FIFA", "OPEC", "International Court of Justice"],
  answer: "International Telecommunication Union",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0384",
  question: "What does IMF stand for?",
  options: ["International Monetary Fund", "International Market Federation", "Integrated Monetary Forum", "International Management Foundation"],
  answer: "International Monetary Fund",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0385",
  question: "Which organization manages the global system of intellectual property treaties?",
  options: ["World Intellectual Property Organization", "World Health Organization", "World Tourism Organization", "International Maritime Organization"],
  answer: "World Intellectual Property Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0386",
  question: "Which global organization works to protect cultural heritage sites?",
  options: ["UNESCO", "FIFA", "OPEC", "Interpol"],
  answer: "UNESCO",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0387",
  question: "Which institution is based in New York and is one of the principal organs of the United Nations?",
  options: ["United Nations Headquarters", "World Bank Headquarters", "African Union Headquarters", "European Central Bank"],
  answer: "United Nations Headquarters",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0388",
  question: "Which organization is responsible for coordinating global responses to public health emergencies?",
  options: ["World Health Organization", "World Trade Organization", "FIFA", "OPEC"],
  answer: "World Health Organization",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0389",
  question: "Which organization is associated with international development and poverty reduction through grants and loans?",
  options: ["World Bank Group", "FIFA", "Interpol", "World Rugby"],
  answer: "World Bank Group",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0390",
  question: "Which organization is responsible for managing international postal cooperation?",
  options: ["Universal Postal Union", "International Labour Organization", "World Bank", "Interpol"],
  answer: "Universal Postal Union",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0391",
  question: "Which animal is the symbol of the World Wildlife Fund?",
  options: ["Giant panda", "Lion", "Elephant", "Polar bear"],
  answer: "Giant panda",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0392",
  question: "Which international organization is popularly known by the acronym WWF and focuses on nature conservation?",
  options: ["World Wide Fund for Nature", "World Water Federation", "Wildlife Workers Forum", "World Weather Foundation"],
  answer: "World Wide Fund for Nature",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0393",
  question: "Which organization is known for publishing the Red List of Threatened Species?",
  options: ["International Union for Conservation of Nature", "World Trade Organization", "FIFA", "International Monetary Fund"],
  answer: "International Union for Conservation of Nature",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0394",
  question: "Which organization manages the World Heritage List?",
  options: ["UNESCO", "WHO", "UNICEF", "OPEC"],
  answer: "UNESCO",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0395",
  question: "Which organization gives the annual Nobel Peace Prize?",
  options: ["Norwegian Nobel Committee", "Royal Swedish Academy of Sciences", "European Union", "United Nations Security Council"],
  answer: "Norwegian Nobel Committee",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0396",
  question: "Which organization administers the international football rules known as the Laws of the Game?",
  options: ["International Football Association Board", "FIFA alone", "UEFA", "CAF"],
  answer: "International Football Association Board",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0397",
  question: "Which organization is responsible for the annual Grammy Awards?",
  options: ["Recording Academy", "Academy of Motion Picture Arts and Sciences", "Hollywood Foreign Press Association", "International Olympic Committee"],
  answer: "Recording Academy",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0398",
  question: "Which organization presents the Academy Awards?",
  options: ["Academy of Motion Picture Arts and Sciences", "Recording Academy", "UNESCO", "International Film Federation"],
  answer: "Academy of Motion Picture Arts and Sciences",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0399",
  question: "Which organization presents the Pulitzer Prizes?",
  options: ["Columbia University", "Harvard University", "Oxford University", "United Nations"],
  answer: "Columbia University",
  category: "general-knowledge",
  difficulty: 50
},
{
  id: "general_knowledge_0400",
  question: "Which organization awards the Booker Prize?",
  options: ["The Booker Prize Foundation", "UNESCO", "The Nobel Foundation", "The Royal Society"],
  answer: "The Booker Prize Foundation",
  category: "general-knowledge",
  difficulty: 50
},



    {
  question: "In which year did World War II end?",
  options: ["1943", "1944", "1945", "1946"],
  answer: "1945",
  category: "history"
},

{
  id: "history_0001",
  question: "In which year did Nigeria gain independence from Britain?",
  options: ["1957", "1960", "1963", "1966"],
  answer: "1960",
  category: "history",
  difficulty: 50
},
{
  id: "history_0002",
  question: "Who was Nigeria's first Prime Minister?",
  options: ["Nnamdi Azikiwe", "Olusegun Obasanjo", "Abubakar Tafawa Balewa", "Yakubu Gowon"],
  answer: "Abubakar Tafawa Balewa",
  category: "history",
  difficulty: 50
},
{
  id: "history_0003",
  question: "Who became Nigeria's first President when the country became a republic in 1963?",
  options: ["Nnamdi Azikiwe", "Tafawa Balewa", "Murtala Mohammed", "Shehu Shagari"],
  answer: "Nnamdi Azikiwe",
  category: "history",
  difficulty: 50
},
{
  id: "history_0004",
  question: "Which country ruled Nigeria before its independence in 1960?",
  options: ["France", "Portugal", "Britain", "Germany"],
  answer: "Britain",
  category: "history",
  difficulty: 50
},
{
  id: "history_0005",
  question: "In which year did the Nigerian Civil War begin?",
  options: ["1960", "1963", "1967", "1975"],
  answer: "1967",
  category: "history",
  difficulty: 50
},
{
  id: "history_0006",
  question: "Which Nigerian region attempted to break away and form the Republic of Biafra?",
  options: ["Northern Region", "Western Region", "Eastern Region", "Mid-Western Region"],
  answer: "Eastern Region",
  category: "history",
  difficulty: 50
},
{
  id: "history_0007",
  question: "Who led Nigeria as Head of State during most of the Civil War?",
  options: ["Yakubu Gowon", "Murtala Mohammed", "Ibrahim Babangida", "Muhammadu Buhari"],
  answer: "Yakubu Gowon",
  category: "history",
  difficulty: 50
},
{
  id: "history_0008",
  question: "In which year did the Nigerian Civil War end?",
  options: ["1968", "1969", "1970", "1975"],
  answer: "1970",
  category: "history",
  difficulty: 50
},
{
  id: "history_0009",
  question: "Who was the first president of Ghana after independence?",
  options: ["Jerry Rawlings", "Kwame Nkrumah", "Kofi Annan", "John Kufuor"],
  answer: "Kwame Nkrumah",
  category: "history",
  difficulty: 50
},
{
  id: "history_0010",
  question: "In which year did Ghana gain independence?",
  options: ["1957", "1960", "1963", "1970"],
  answer: "1957",
  category: "history",
  difficulty: 50
},
{
  id: "history_0011",
  question: "Who became South Africa's first Black president in 1994?",
  options: ["Desmond Tutu", "Thabo Mbeki", "Nelson Mandela", "Jacob Zuma"],
  answer: "Nelson Mandela",
  category: "history",
  difficulty: 50
},
{
  id: "history_0012",
  question: "What was apartheid in South Africa?",
  options: ["A farming system", "A system of racial segregation", "A trade agreement", "A military alliance"],
  answer: "A system of racial segregation",
  category: "history",
  difficulty: 50
},
{
  id: "history_0013",
  question: "Which famous Nigerian nationalist was known as Zik of Africa?",
  options: ["Nnamdi Azikiwe", "Obafemi Awolowo", "Ahmadu Bello", "Herbert Macaulay"],
  answer: "Nnamdi Azikiwe",
  category: "history",
  difficulty: 50
},
{
  id: "history_0014",
  question: "Who is widely regarded as one of the founding fathers of Nigerian nationalism?",
  options: ["Herbert Macaulay", "Yakubu Gowon", "Sani Abacha", "Ibrahim Babangida"],
  answer: "Herbert Macaulay",
  category: "history",
  difficulty: 50
},
{
  id: "history_0015",
  question: "In which year did Nigeria become a republic?",
  options: ["1960", "1963", "1966", "1979"],
  answer: "1963",
  category: "history",
  difficulty: 50
},
{
  id: "history_0016",
  question: "Who was the first President of the United States?",
  options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
  answer: "George Washington",
  category: "history",
  difficulty: 50
},
{
  id: "history_0017",
  question: "In which year did the United States declare independence?",
  options: ["1492", "1776", "1789", "1865"],
  answer: "1776",
  category: "history",
  difficulty: 50
},
{
  id: "history_0018",
  question: "Which country did the United States fight to gain independence from?",
  options: ["France", "Spain", "Britain", "Portugal"],
  answer: "Britain",
  category: "history",
  difficulty: 50
},
{
  id: "history_0019",
  question: "In which year did the French Revolution begin?",
  options: ["1688", "1776", "1789", "1815"],
  answer: "1789",
  category: "history",
  difficulty: 50
},
{
  id: "history_0020",
  question: "Which famous prison was stormed during the French Revolution in 1789?",
  options: ["The Bastille", "The Tower of London", "Alcatraz", "The Bastion of Paris"],
  answer: "The Bastille",
  category: "history",
  difficulty: 50
},
{
  id: "history_0021",
  question: "Who was the British Prime Minister during much of the Second World War?",
  options: ["Tony Blair", "Winston Churchill", "Margaret Thatcher", "Neville Chamberlain"],
  answer: "Winston Churchill",
  category: "history",
  difficulty: 50
},
{
  id: "history_0022",
  question: "Which country invaded Poland in September 1939, helping trigger the Second World War in Europe?",
  options: ["Germany", "Spain", "Sweden", "Canada"],
  answer: "Germany",
  category: "history",
  difficulty: 50
},
{
  id: "history_0023",
  question: "Between which years did the First World War take place?",
  options: ["1900–1905", "1914–1918", "1929–1933", "1939–1945"],
  answer: "1914–1918",
  category: "history",
  difficulty: 50
},
{
  id: "history_0024",
  question: "Between which years did the Second World War take place?",
  options: ["1914–1918", "1920–1925", "1939–1945", "1947–1953"],
  answer: "1939–1945",
  category: "history",
  difficulty: 50
},
{
  id: "history_0025",
  question: "Which country attacked Pearl Harbor in 1941?",
  options: ["Germany", "Japan", "Italy", "Russia"],
  answer: "Japan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0026",
  question: "Which organization was founded in 1945 to promote international peace and cooperation?",
  options: ["African Union", "United Nations", "European Union", "NATO"],
  answer: "United Nations",
  category: "history",
  difficulty: 50
},
{
  id: "history_0027",
  question: "Which wall separated parts of Berlin during the Cold War?",
  options: ["Great Wall", "Berlin Wall", "Hadrian's Wall", "Western Wall"],
  answer: "Berlin Wall",
  category: "history",
  difficulty: 50
},
{
  id: "history_0028",
  question: "In which year did the Berlin Wall begin to fall?",
  options: ["1961", "1975", "1989", "1999"],
  answer: "1989",
  category: "history",
  difficulty: 50
},
{
  id: "history_0029",
  question: "Which two superpowers were the main rivals during the Cold War?",
  options: ["Britain and France", "United States and Soviet Union", "China and Japan", "Spain and Portugal"],
  answer: "United States and Soviet Union",
  category: "history",
  difficulty: 50
},
{
  id: "history_0030",
  question: "Who was the first human to walk on the Moon?",
  options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"],
  answer: "Neil Armstrong",
  category: "history",
  difficulty: 50
},
{
  id: "history_0031",
  question: "In which year did humans first land on the Moon?",
  options: ["1957", "1961", "1969", "1975"],
  answer: "1969",
  category: "history",
  difficulty: 50
},
{
  id: "history_0032",
  question: "Which famous ship sank in the North Atlantic in 1912?",
  options: ["Mayflower", "Titanic", "Santa Maria", "Endeavour"],
  answer: "Titanic",
  category: "history",
  difficulty: 50
},
{
  id: "history_0033",
  question: "Which ancient civilization built the pyramids at Giza?",
  options: ["Romans", "Ancient Egyptians", "Vikings", "Persians"],
  answer: "Ancient Egyptians",
  category: "history",
  difficulty: 50
},
{
  id: "history_0034",
  question: "Who was the famous queen of ancient Egypt associated with Julius Caesar and Mark Antony?",
  options: ["Queen Victoria", "Cleopatra", "Queen Elizabeth I", "Nefertiti"],
  answer: "Cleopatra",
  category: "history",
  difficulty: 50
},
{
  id: "history_0035",
  question: "Which ancient civilization built the Colosseum in Rome?",
  options: ["Greeks", "Romans", "Mayans", "Aztecs"],
  answer: "Romans",
  category: "history",
  difficulty: 50
},
{
  id: "history_0036",
  question: "Which ancient Greek city-state is famous for developing an early form of democracy?",
  options: ["Athens", "Sparta", "Troy", "Corinth"],
  answer: "Athens",
  category: "history",
  difficulty: 50
},
{
  id: "history_0037",
  question: "Which ancient civilization built the Great Wall in China over many centuries?",
  options: ["Roman civilization", "Chinese dynasties", "Ancient Egyptians", "Viking kingdoms"],
  answer: "Chinese dynasties",
  category: "history",
  difficulty: 50
},
{
  id: "history_0038",
  question: "Which invention helped books become more widely available in Europe during the fifteenth century?",
  options: ["Steam engine", "Movable-type printing press", "Telephone", "Television"],
  answer: "Movable-type printing press",
  category: "history",
  difficulty: 50
},
{
  id: "history_0039",
  question: "Which country is most closely associated with the beginning of the Renaissance?",
  options: ["Italy", "Norway", "Russia", "Canada"],
  answer: "Italy",
  category: "history",
  difficulty: 50
},
{
  id: "history_0040",
  question: "Who is famous for beginning the Protestant Reformation in sixteenth-century Europe?",
  options: ["Martin Luther", "Christopher Columbus", "Isaac Newton", "Napoleon Bonaparte"],
  answer: "Martin Luther",
  category: "history",
  difficulty: 50
},
{
  id: "history_0041",
  question: "Who was the famous leader of India's independence movement known for promoting nonviolent resistance?",
  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Subhas Chandra Bose"],
  answer: "Mahatma Gandhi",
  category: "history",
  difficulty: 50
},
{
  id: "history_0042",
  question: "In which year did India gain independence from British rule?",
  options: ["1939", "1945", "1947", "1952"],
  answer: "1947",
  category: "history",
  difficulty: 50
},
{
  id: "history_0043",
  question: "Who became the first Prime Minister of independent India?",
  options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel"],
  answer: "Jawaharlal Nehru",
  category: "history",
  difficulty: 50
},
{
  id: "history_0044",
  question: "Which famous South African leader spent 27 years in prison before his release in 1990?",
  options: ["Nelson Mandela", "Desmond Tutu", "Thabo Mbeki", "Oliver Tambo"],
  answer: "Nelson Mandela",
  category: "history",
  difficulty: 50
},
{
  id: "history_0045",
  question: "Which African country is famous for defeating an Italian invasion at the Battle of Adwa in 1896?",
  options: ["Ethiopia", "Ghana", "Senegal", "Uganda"],
  answer: "Ethiopia",
  category: "history",
  difficulty: 50
},
{
  id: "history_0046",
  question: "Who led the famous nonviolent civil rights movement in the United States during the 1950s and 1960s?",
  options: ["Martin Luther King Jr.", "Malcolm X", "George Washington", "Franklin D. Roosevelt"],
  answer: "Martin Luther King Jr.",
  category: "history",
  difficulty: 50
},
{
  id: "history_0047",
  question: "Who was the British monarch during most of the First World War?",
  options: ["Queen Victoria", "King George V", "King George VI", "Queen Elizabeth II"],
  answer: "King George V",
  category: "history",
  difficulty: 50
},
{
  id: "history_0048",
  question: "Which famous explorer is commonly credited with reaching the Americas in 1492 during a Spanish-sponsored voyage?",
  options: ["Christopher Columbus", "Marco Polo", "Ferdinand Magellan", "James Cook"],
  answer: "Christopher Columbus",
  category: "history",
  difficulty: 50
},
{
  id: "history_0049",
  question: "Who was the French military leader who became emperor in 1804?",
  options: ["Louis XVI", "Napoleon Bonaparte", "Charles de Gaulle", "King Louis XIV"],
  answer: "Napoleon Bonaparte",
  category: "history",
  difficulty: 50
},
{
  id: "history_0050",
  question: "Which international event began in 1914 following the assassination of Archduke Franz Ferdinand?",
  options: ["The First World War", "The Second World War", "The Cold War", "The French Revolution"],
  answer: "The First World War",
  category: "history",
  difficulty: 50
},


{
  id: "history_0051",
  question: "Who was the first woman to travel into space?",
  options: ["Sally Ride", "Valentina Tereshkova", "Mae Jemison", "Kalpana Chawla"],
  answer: "Valentina Tereshkova",
  category: "history",
  difficulty: 50
},
{
  id: "history_0052",
  question: "Who was the first human to travel into outer space?",
  options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "John Glenn"],
  answer: "Yuri Gagarin",
  category: "history",
  difficulty: 50
},
{
  id: "history_0053",
  question: "Which brothers are credited with the first successful powered airplane flight in 1903?",
  options: ["Wright brothers", "Grimm brothers", "Marx brothers", "Lumière brothers"],
  answer: "Wright brothers",
  category: "history",
  difficulty: 50
},
{
  id: "history_0054",
  question: "Who discovered the tomb of Tutankhamun in 1922?",
  options: ["Howard Carter", "Charles Darwin", "David Livingstone", "Howard Florey"],
  answer: "Howard Carter",
  category: "history",
  difficulty: 50
},
{
  id: "history_0055",
  question: "In which year did the Titanic sink?",
  options: ["1905", "1912", "1918", "1925"],
  answer: "1912",
  category: "history",
  difficulty: 50
},
{
  id: "history_0056",
  question: "In which year did the Great Fire of London occur?",
  options: ["1605", "1666", "1707", "1750"],
  answer: "1666",
  category: "history",
  difficulty: 50
},
{
  id: "history_0057",
  question: "Who became the first ruler of independent Haiti?",
  options: ["Jean-Jacques Dessalines", "Toussaint Louverture", "Henri Christophe", "François Duvalier"],
  answer: "Jean-Jacques Dessalines",
  category: "history",
  difficulty: 50
},
{
  id: "history_0058",
  question: "In which year was the Kingdom of Italy proclaimed?",
  options: ["1848", "1861", "1871", "1901"],
  answer: "1861",
  category: "history",
  difficulty: 50
},
{
  id: "history_0059",
  question: "Who became the first German Emperor after German unification in 1871?",
  options: ["Wilhelm I", "Adolf Hitler", "Frederick II", "Otto von Bismarck"],
  answer: "Wilhelm I",
  category: "history",
  difficulty: 50
},
{
  id: "history_0060",
  question: "Who became Britain's first female Prime Minister in 1979?",
  options: ["Theresa May", "Margaret Thatcher", "Queen Elizabeth II", "Angela Merkel"],
  answer: "Margaret Thatcher",
  category: "history",
  difficulty: 50
},
{
  id: "history_0061",
  question: "Who was India's first female Prime Minister?",
  options: ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sarojini Naidu"],
  answer: "Indira Gandhi",
  category: "history",
  difficulty: 50
},
{
  id: "history_0062",
  question: "Who became the first African American president of the United States?",
  options: ["Barack Obama", "Martin Luther King Jr.", "Colin Powell", "Jesse Jackson"],
  answer: "Barack Obama",
  category: "history",
  difficulty: 50
},
{
  id: "history_0063",
  question: "Who was the first woman to win a Nobel Prize?",
  options: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Jane Addams"],
  answer: "Marie Curie",
  category: "history",
  difficulty: 50
},
{
  id: "history_0064",
  question: "Which South African election in 1994 ended the country's system of apartheid-era political exclusion?",
  options: ["The first fully inclusive democratic election", "A national referendum in 1960", "The 1976 student election", "The 1984 parliamentary election"],
  answer: "The first fully inclusive democratic election",
  category: "history",
  difficulty: 50
},
{
  id: "history_0065",
  question: "In which year was the first transcontinental railroad in the United States completed?",
  options: ["1849", "1869", "1889", "1909"],
  answer: "1869",
  category: "history",
  difficulty: 50
},
{
  id: "history_0066",
  question: "Which international organization was created after the First World War to encourage cooperation and prevent future wars?",
  options: ["League of Nations", "United Nations", "African Union", "European Union"],
  answer: "League of Nations",
  category: "history",
  difficulty: 50
},
{
  id: "history_0067",
  question: "In which year did the Vietnam War end with the fall of Saigon?",
  options: ["1965", "1970", "1975", "1980"],
  answer: "1975",
  category: "history",
  difficulty: 50
},
{
  id: "history_0068",
  question: "In which year did the Soviet Union officially dissolve?",
  options: ["1985", "1989", "1991", "1995"],
  answer: "1991",
  category: "history",
  difficulty: 50
},
{
  id: "history_0069",
  question: "Where were the first modern Olympic Games held in 1896?",
  options: ["Paris", "Athens", "London", "Rome"],
  answer: "Athens",
  category: "history",
  difficulty: 50
},
{
  id: "history_0070",
  question: "Which country hosted the first FIFA World Cup in 1930?",
  options: ["Brazil", "Uruguay", "Italy", "France"],
  answer: "Uruguay",
  category: "history",
  difficulty: 50
},
{
  id: "history_0071",
  question: "In which year did the Wright brothers make their famous first powered flight?",
  options: ["1890", "1903", "1912", "1920"],
  answer: "1903",
  category: "history",
  difficulty: 50
},
{
  id: "history_0072",
  question: "Who developed the first widely used successful polio vaccine?",
  options: ["Jonas Salk", "Alexander Fleming", "Edward Jenner", "Louis Pasteur"],
  answer: "Jonas Salk",
  category: "history",
  difficulty: 50
},
{
  id: "history_0073",
  question: "Which ancient Chinese invention helped spread information and books more widely?",
  options: ["Paper", "Steam engine", "Telephone", "Electric light"],
  answer: "Paper",
  category: "history",
  difficulty: 50
},
{
  id: "history_0074",
  question: "In which year did the American Civil War begin?",
  options: ["1776", "1812", "1861", "1898"],
  answer: "1861",
  category: "history",
  difficulty: 50
},
{
  id: "history_0075",
  question: "In which year was Abraham Lincoln assassinated?",
  options: ["1861", "1865", "1877", "1881"],
  answer: "1865",
  category: "history",
  difficulty: 50
},
{
  id: "history_0076",
  question: "Who co-authored The Communist Manifesto with Friedrich Engels?",
  options: ["Karl Marx", "Vladimir Lenin", "Leon Trotsky", "Joseph Stalin"],
  answer: "Karl Marx",
  category: "history",
  difficulty: 50
},
{
  id: "history_0077",
  question: "Who was the first emperor of a unified China?",
  options: ["Qin Shi Huang", "Kublai Khan", "Sun Yat-sen", "Emperor Wu"],
  answer: "Qin Shi Huang",
  category: "history",
  difficulty: 50
},
{
  id: "history_0078",
  question: "Which French queen was executed during the French Revolution?",
  options: ["Marie Antoinette", "Joan of Arc", "Eleanor of Aquitaine", "Catherine de' Medici"],
  answer: "Marie Antoinette",
  category: "history",
  difficulty: 50
},
{
  id: "history_0079",
  question: "Who was the first European to reach the summit of Mount Everest alongside Tenzing Norgay?",
  options: ["Edmund Hillary", "George Mallory", "Reinhold Messner", "Robert Scott"],
  answer: "Edmund Hillary",
  category: "history",
  difficulty: 50
},
{
  id: "history_0080",
  question: "Who completed the first circumnavigation of the world after Ferdinand Magellan was killed?",
  options: ["Juan Sebastián Elcano", "Christopher Columbus", "Vasco da Gama", "James Cook"],
  answer: "Juan Sebastián Elcano",
  category: "history",
  difficulty: 50
},
{
  id: "history_0081",
  question: "Which country was the starting point of the Industrial Revolution?",
  options: ["Britain", "Russia", "Brazil", "Japan"],
  answer: "Britain",
  category: "history",
  difficulty: 50
},
{
  id: "history_0082",
  question: "Who was the first woman to become Prime Minister of India?",
  options: ["Indira Gandhi", "Benazir Bhutto", "Sirimavo Bandaranaike", "Golda Meir"],
  answer: "Indira Gandhi",
  category: "history",
  difficulty: 50
},
{
  id: "history_0083",
  question: "In which year was Nelson Mandela released from prison?",
  options: ["1985", "1987", "1990", "1994"],
  answer: "1990",
  category: "history",
  difficulty: 50
},
{
  id: "history_0084",
  question: "In which year did Kenya gain independence from Britain?",
  options: ["1957", "1960", "1963", "1970"],
  answer: "1963",
  category: "history",
  difficulty: 50
},
{
  id: "history_0085",
  question: "In which year did Algeria gain independence from France?",
  options: ["1954", "1960", "1962", "1975"],
  answer: "1962",
  category: "history",
  difficulty: 50
},
{
  id: "history_0086",
  question: "In which year did the genocide against the Tutsi take place in Rwanda?",
  options: ["1984", "1990", "1994", "2000"],
  answer: "1994",
  category: "history",
  difficulty: 50
},
{
  id: "history_0087",
  question: "Which Soviet satellite became the first artificial satellite in orbit in 1957?",
  options: ["Sputnik 1", "Vostok 1", "Luna 2", "Soyuz 1"],
  answer: "Sputnik 1",
  category: "history",
  difficulty: 50
},
{
  id: "history_0088",
  question: "Which Soviet cosmonaut became the first woman in space in 1963?",
  options: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Yelena Kondakova"],
  answer: "Valentina Tereshkova",
  category: "history",
  difficulty: 50
},
{
  id: "history_0089",
  question: "Who was the first woman to travel into space?",
  options: ["Valentina Tereshkova", "Sally Ride", "Svetlana Savitskaya", "Peggy Whitson"],
  answer: "Valentina Tereshkova",
  category: "history",
  difficulty: 50
},
{
  id: "history_0090",
  question: "Which explorer is associated with the first recorded expedition to reach the South Pole in 1911?",
  options: ["Roald Amundsen", "Robert Falcon Scott", "Ernest Shackleton", "James Cook"],
  answer: "Roald Amundsen",
  category: "history",
  difficulty: 50
},
{
  id: "history_0091",
  question: "Who was the nurse known as the Lady with the Lamp during the Crimean War?",
  options: ["Florence Nightingale", "Clara Barton", "Mary Seacole", "Elizabeth Fry"],
  answer: "Florence Nightingale",
  category: "history",
  difficulty: 50
},
{
  id: "history_0092",
  question: "Which English king was famous for having six wives?",
  options: ["Henry VIII", "Henry V", "Richard III", "Edward VI"],
  answer: "Henry VIII",
  category: "history",
  difficulty: 50
},
{
  id: "history_0093",
  question: "Which American civil rights leader delivered the 'I Have a Dream' speech in 1963?",
  options: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "John F. Kennedy"],
  answer: "Martin Luther King Jr.",
  category: "history",
  difficulty: 50
},
{
  id: "history_0094",
  question: "Which woman became famous for refusing to give up her seat on a bus in Montgomery, Alabama, in 1955?",
  options: ["Rosa Parks", "Harriet Tubman", "Maya Angelou", "Coretta Scott King"],
  answer: "Rosa Parks",
  category: "history",
  difficulty: 50
},
{
  id: "history_0095",
  question: "Which British monarch reigned during the Victorian era?",
  options: ["Queen Victoria", "Queen Elizabeth I", "Queen Anne", "Queen Mary I"],
  answer: "Queen Victoria",
  category: "history",
  difficulty: 50
},
{
  id: "history_0096",
  question: "Which empire built the ancient city of Machu Picchu?",
  options: ["Inca Empire", "Roman Empire", "Ottoman Empire", "Mali Empire"],
  answer: "Inca Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0097",
  question: "Which civilization built the city of Tenochtitlan, where modern Mexico City developed?",
  options: ["Aztecs", "Mayans", "Incas", "Olmecs"],
  answer: "Aztecs",
  category: "history",
  difficulty: 50
},
{
  id: "history_0098",
  question: "Which ancient city was buried by the eruption of Mount Vesuvius in 79 CE?",
  options: ["Pompeii", "Athens", "Carthage", "Alexandria"],
  answer: "Pompeii",
  category: "history",
  difficulty: 50
},
{
  id: "history_0099",
  question: "Who was the French military leader who became emperor in 1804?",
  options: ["Napoleon Bonaparte", "Louis XVI", "Charles de Gaulle", "Louis XIV"],
  answer: "Napoleon Bonaparte",
  category: "history",
  difficulty: 50
},
{
  id: "history_0100",
  question: "Which South African leader became president after the 1994 democratic election?",
  options: ["Nelson Mandela", "Thabo Mbeki", "F. W. de Klerk", "Jacob Zuma"],
  answer: "Nelson Mandela",
  category: "history",
  difficulty: 50
},


{
  id: "history_0101",
  question: "In which year were the Northern and Southern Protectorates of Nigeria amalgamated?",
  options: ["1900", "1914", "1922", "1960"],
  answer: "1914",
  category: "history",
  difficulty: 50
},
{
  id: "history_0102",
  question: "Who is credited with giving Nigeria its name?",
  options: ["Flora Shaw", "Mary Slessor", "Queen Victoria", "Margaret Thatcher"],
  answer: "Flora Shaw",
  category: "history",
  difficulty: 50
},
{
  id: "history_0103",
  question: "Who designed Nigeria's national flag?",
  options: ["Herbert Macaulay", "Taiwo Akinkunmi", "Nnamdi Azikiwe", "Obafemi Awolowo"],
  answer: "Taiwo Akinkunmi",
  category: "history",
  difficulty: 50
},
{
  id: "history_0104",
  question: "In which year did Abuja officially become Nigeria's capital?",
  options: ["1976", "1983", "1991", "1999"],
  answer: "1991",
  category: "history",
  difficulty: 50
},
{
  id: "history_0105",
  question: "In which year was the Nigerian naira introduced?",
  options: ["1960", "1963", "1973", "1980"],
  answer: "1973",
  category: "history",
  difficulty: 50
},
{
  id: "history_0106",
  question: "In which year was crude oil discovered in commercial quantities at Oloibiri in Nigeria?",
  options: ["1945", "1956", "1960", "1970"],
  answer: "1956",
  category: "history",
  difficulty: 50
},
{
  id: "history_0107",
  question: "Which Nigerian town is famous for the discovery of commercial crude oil?",
  options: ["Oloibiri", "Abeokuta", "Katsina", "Ilorin"],
  answer: "Oloibiri",
  category: "history",
  difficulty: 50
},
{
  id: "history_0108",
  question: "What major political event occurred in Nigeria on 15 January 1966?",
  options: ["A military coup", "A presidential election", "The declaration of independence", "The introduction of the naira"],
  answer: "A military coup",
  category: "history",
  difficulty: 50
},
{
  id: "history_0109",
  question: "Which army officer became widely associated with the January 1966 coup in Nigeria?",
  options: ["Chukwuma Kaduna Nzeogwu", "Murtala Mohammed", "Yakubu Gowon", "Olusegun Obasanjo"],
  answer: "Chukwuma Kaduna Nzeogwu",
  category: "history",
  difficulty: 50
},
{
  id: "history_0110",
  question: "Who became Nigeria's Head of State after Yakubu Gowon was removed in 1975?",
  options: ["Murtala Mohammed", "Olusegun Obasanjo", "Shehu Shagari", "Ibrahim Babangida"],
  answer: "Murtala Mohammed",
  category: "history",
  difficulty: 50
},
{
  id: "history_0111",
  question: "In which year was Head of State Murtala Mohammed assassinated?",
  options: ["1967", "1970", "1976", "1979"],
  answer: "1976",
  category: "history",
  difficulty: 50
},
{
  id: "history_0112",
  question: "Who succeeded Murtala Mohammed as Nigeria's Head of State?",
  options: ["Olusegun Obasanjo", "Shehu Shagari", "Ibrahim Babangida", "Muhammadu Buhari"],
  answer: "Olusegun Obasanjo",
  category: "history",
  difficulty: 50
},
{
  id: "history_0113",
  question: "Who won Nigeria's 1979 presidential election?",
  options: ["Shehu Shagari", "Nnamdi Azikiwe", "Obafemi Awolowo", "MKO Abiola"],
  answer: "Shehu Shagari",
  category: "history",
  difficulty: 50
},
{
  id: "history_0114",
  question: "Which Nigerian republic began in 1979?",
  options: ["First Republic", "Second Republic", "Third Republic", "Fourth Republic"],
  answer: "Second Republic",
  category: "history",
  difficulty: 50
},
{
  id: "history_0115",
  question: "Which military leader came to power in Nigeria after the December 1983 coup?",
  options: ["Muhammadu Buhari", "Ibrahim Babangida", "Sani Abacha", "Abdulsalami Abubakar"],
  answer: "Muhammadu Buhari",
  category: "history",
  difficulty: 50
},
{
  id: "history_0116",
  question: "Which military leader took power in Nigeria in 1985?",
  options: ["Ibrahim Babangida", "Yakubu Gowon", "Murtala Mohammed", "Sani Abacha"],
  answer: "Ibrahim Babangida",
  category: "history",
  difficulty: 50
},
{
  id: "history_0117",
  question: "Who was the widely recognized winner of Nigeria's annulled 12 June 1993 presidential election?",
  options: ["MKO Abiola", "Shehu Shagari", "Goodluck Jonathan", "Nnamdi Azikiwe"],
  answer: "MKO Abiola",
  category: "history",
  difficulty: 50
},
{
  id: "history_0118",
  question: "Who became Nigeria's President after the return to civilian rule in 1999?",
  options: ["Olusegun Obasanjo", "Umaru Musa Yar'Adua", "Goodluck Jonathan", "Muhammadu Buhari"],
  answer: "Olusegun Obasanjo",
  category: "history",
  difficulty: 50
},
{
  id: "history_0119",
  question: "In which year was Nigeria's National Youth Service Corps established?",
  options: ["1960", "1967", "1973", "1985"],
  answer: "1973",
  category: "history",
  difficulty: 50
},
{
  id: "history_0120",
  question: "Which Nigerian national institution is responsible for preserving historical records and documents?",
  options: ["National Archives of Nigeria", "Central Bank of Nigeria", "Nigerian Railway Corporation", "Federal Road Safety Corps"],
  answer: "National Archives of Nigeria",
  category: "history",
  difficulty: 50
},
{
  id: "history_0121",
  question: "In which year was the Organization of African Unity founded?",
  options: ["1957", "1960", "1963", "1975"],
  answer: "1963",
  category: "history",
  difficulty: 50
},
{
  id: "history_0122",
  question: "Which organization replaced the Organization of African Unity in 2002?",
  options: ["African Union", "ECOWAS", "United Nations", "Arab League"],
  answer: "African Union",
  category: "history",
  difficulty: 50
},
{
  id: "history_0123",
  question: "Who was the first President of independent Kenya?",
  options: ["Jomo Kenyatta", "Daniel arap Moi", "Mwai Kibaki", "Uhuru Kenyatta"],
  answer: "Jomo Kenyatta",
  category: "history",
  difficulty: 50
},
{
  id: "history_0124",
  question: "Who was the first President of Tanzania?",
  options: ["Julius Nyerere", "Samora Machel", "Kenneth Kaunda", "Jomo Kenyatta"],
  answer: "Julius Nyerere",
  category: "history",
  difficulty: 50
},
{
  id: "history_0125",
  question: "Who became the first Prime Minister of the Democratic Republic of the Congo after independence in 1960?",
  options: ["Patrice Lumumba", "Mobutu Sese Seko", "Laurent Kabila", "Joseph Kasa-Vubu"],
  answer: "Patrice Lumumba",
  category: "history",
  difficulty: 50
},
{
  id: "history_0126",
  question: "Which African leader became President of Burkina Faso in 1983?",
  options: ["Thomas Sankara", "Jerry Rawlings", "Julius Nyerere", "Samora Machel"],
  answer: "Thomas Sankara",
  category: "history",
  difficulty: 50
},
{
  id: "history_0127",
  question: "Which country was formerly known as Upper Volta?",
  options: ["Burkina Faso", "Benin", "Niger", "Togo"],
  answer: "Burkina Faso",
  category: "history",
  difficulty: 50
},
{
  id: "history_0128",
  question: "Who was the first Prime Minister of independent Zimbabwe?",
  options: ["Robert Mugabe", "Joshua Nkomo", "Ian Smith", "Canaan Banana"],
  answer: "Robert Mugabe",
  category: "history",
  difficulty: 50
},
{
  id: "history_0129",
  question: "In which year did Mozambique gain independence from Portugal?",
  options: ["1960", "1965", "1975", "1980"],
  answer: "1975",
  category: "history",
  difficulty: 50
},
{
  id: "history_0130",
  question: "In which year did Angola gain independence from Portugal?",
  options: ["1963", "1975", "1980", "1990"],
  answer: "1975",
  category: "history",
  difficulty: 50
},
{
  id: "history_0131",
  question: "In which year did Namibia gain independence?",
  options: ["1975", "1980", "1990", "1994"],
  answer: "1990",
  category: "history",
  difficulty: 50
},
{
  id: "history_0132",
  question: "In which year did Eritrea become independent from Ethiopia?",
  options: ["1980", "1985", "1993", "2000"],
  answer: "1993",
  category: "history",
  difficulty: 50
},
{
  id: "history_0133",
  question: "Which organization was established in South Africa in 1912 to fight racial discrimination?",
  options: ["African National Congress", "African Union", "Pan-African Parliament", "SADC"],
  answer: "African National Congress",
  category: "history",
  difficulty: 50
},
{
  id: "history_0134",
  question: "What happened at Sharpeville in South Africa in 1960?",
  options: ["A massacre during a protest", "The country's first democratic election", "The end of apartheid", "The signing of a peace treaty"],
  answer: "A massacre during a protest",
  category: "history",
  difficulty: 50
},
{
  id: "history_0135",
  question: "Which country became independent in 1847 after being established as a settlement for formerly enslaved people from America?",
  options: ["Liberia", "Ghana", "Kenya", "Ethiopia"],
  answer: "Liberia",
  category: "history",
  difficulty: 50
},
{
  id: "history_0136",
  question: "Which African kingdom was famous for the wealth of Mansa Musa?",
  options: ["Mali Empire", "Zulu Kingdom", "Benin Kingdom", "Ashanti Empire"],
  answer: "Mali Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0137",
  question: "Which famous trading and learning city was an important centre of the Mali Empire?",
  options: ["Timbuktu", "Lagos", "Cape Town", "Nairobi"],
  answer: "Timbuktu",
  category: "history",
  difficulty: 50
},
{
  id: "history_0138",
  question: "Which ancient African kingdom was known for the stone structures of Great Zimbabwe?",
  options: ["Kingdom of Zimbabwe", "Mali Empire", "Kingdom of Kush", "Songhai Empire"],
  answer: "Kingdom of Zimbabwe",
  category: "history",
  difficulty: 50
},
{
  id: "history_0139",
  question: "Which country was ruled by King Haile Selassie before the 1974 revolution?",
  options: ["Ethiopia", "Somalia", "Sudan", "Libya"],
  answer: "Ethiopia",
  category: "history",
  difficulty: 50
},
{
  id: "history_0140",
  question: "Which African queen is remembered for resisting Roman expansion into Nubia?",
  options: ["Amanirenas", "Cleopatra", "Nefertiti", "Makeda"],
  answer: "Amanirenas",
  category: "history",
  difficulty: 50
},
{
  id: "history_0141",
  question: "Which African country became independent from France in 1958 after rejecting membership in the French Community?",
  options: ["Guinea", "Senegal", "Mali", "Niger"],
  answer: "Guinea",
  category: "history",
  difficulty: 50
},
{
  id: "history_0142",
  question: "Who was the first President of Guinea after independence?",
  options: ["Ahmed Sékou Touré", "Léopold Senghor", "Modibo Keïta", "Thomas Sankara"],
  answer: "Ahmed Sékou Touré",
  category: "history",
  difficulty: 50
},
{
  id: "history_0143",
  question: "Which country gained independence from France in 1960 and later elected Léopold Sédar Senghor as its first president?",
  options: ["Senegal", "Togo", "Benin", "Niger"],
  answer: "Senegal",
  category: "history",
  difficulty: 50
},
{
  id: "history_0144",
  question: "Which African kingdom was famous for its powerful army and resistance to British forces in the nineteenth century?",
  options: ["Ashanti Empire", "Mali Empire", "Kingdom of Rwanda", "Buganda Kingdom"],
  answer: "Ashanti Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0145",
  question: "Which West African empire was ruled by Askia Muhammad?",
  options: ["Songhai Empire", "Mali Empire", "Benin Empire", "Oyo Empire"],
  answer: "Songhai Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0146",
  question: "Which ancient African kingdom was centred around present-day southern Nigeria?",
  options: ["Kingdom of Benin", "Mali Empire", "Kingdom of Kush", "Aksumite Empire"],
  answer: "Kingdom of Benin",
  category: "history",
  difficulty: 50
},
{
  id: "history_0147",
  question: "Which ancient Nigerian city was famous for its bronze and brass artworks?",
  options: ["Benin City", "Jos", "Kano", "Makurdi"],
  answer: "Benin City",
  category: "history",
  difficulty: 50
},
{
  id: "history_0148",
  question: "Which Nigerian kingdom was ruled by the famous Oba Ewuare the Great?",
  options: ["Benin Kingdom", "Oyo Empire", "Nri Kingdom", "Kanem-Bornu"],
  answer: "Benin Kingdom",
  category: "history",
  difficulty: 50
},
{
  id: "history_0149",
  question: "Which empire was centred around the city of Oyo in present-day southwestern Nigeria?",
  options: ["Oyo Empire", "Mali Empire", "Songhai Empire", "Zulu Kingdom"],
  answer: "Oyo Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0150",
  question: "Which traditional Nigerian institution is associated with the title Alaafin?",
  options: ["Oyo Empire", "Benin Kingdom", "Sokoto Caliphate", "Kanem-Bornu"],
  answer: "Oyo Empire",
  category: "history",
  difficulty: 50
},


{
  id: "history_0151",
  question: "Who is widely credited with inventing the practical telephone?",
  options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"],
  answer: "Alexander Graham Bell",
  category: "history",
  difficulty: 50
},
{
  id: "history_0152",
  question: "Who developed a commercially practical incandescent light bulb?",
  options: ["Thomas Edison", "Charles Darwin", "Louis Pasteur", "James Cook"],
  answer: "Thomas Edison",
  category: "history",
  difficulty: 50
},
{
  id: "history_0153",
  question: "Which inventor is famous for improving the steam engine?",
  options: ["James Watt", "Henry Ford", "Alexander Graham Bell", "Samuel Morse"],
  answer: "James Watt",
  category: "history",
  difficulty: 50
},
{
  id: "history_0154",
  question: "Who invented the phonograph?",
  options: ["Thomas Edison", "Nikola Tesla", "Guglielmo Marconi", "Alexander Graham Bell"],
  answer: "Thomas Edison",
  category: "history",
  difficulty: 50
},
{
  id: "history_0155",
  question: "Who invented the spinning jenny, an important machine in textile production?",
  options: ["James Hargreaves", "James Watt", "Henry Bessemer", "George Stephenson"],
  answer: "James Hargreaves",
  category: "history",
  difficulty: 50
},
{
  id: "history_0156",
  question: "Who invented the cotton gin in the United States?",
  options: ["Eli Whitney", "Thomas Edison", "Samuel Morse", "Robert Fulton"],
  answer: "Eli Whitney",
  category: "history",
  difficulty: 50
},
{
  id: "history_0157",
  question: "Who developed the Braille writing system?",
  options: ["Louis Braille", "Louis Pasteur", "Alexander Fleming", "Charles Babbage"],
  answer: "Louis Braille",
  category: "history",
  difficulty: 50
},
{
  id: "history_0158",
  question: "Who invented the electric telegraph system and developed Morse code?",
  options: ["Samuel Morse", "Alexander Graham Bell", "Thomas Edison", "James Watt"],
  answer: "Samuel Morse",
  category: "history",
  difficulty: 50
},
{
  id: "history_0159",
  question: "Who is associated with developing the Rocket locomotive?",
  options: ["George Stephenson", "Henry Ford", "Karl Benz", "James Watt"],
  answer: "George Stephenson",
  category: "history",
  difficulty: 50
},
{
  id: "history_0160",
  question: "Who invented dynamite?",
  options: ["Alfred Nobel", "Louis Braille", "Samuel Morse", "Alexander Fleming"],
  answer: "Alfred Nobel",
  category: "history",
  difficulty: 50
},
{
  id: "history_0161",
  question: "Who discovered penicillin in 1928?",
  options: ["Alexander Fleming", "Edward Jenner", "Robert Koch", "Louis Pasteur"],
  answer: "Alexander Fleming",
  category: "history",
  difficulty: 50
},
{
  id: "history_0162",
  question: "Who discovered X-rays?",
  options: ["Wilhelm Röntgen", "Albert Einstein", "Marie Curie", "Ernest Rutherford"],
  answer: "Wilhelm Röntgen",
  category: "history",
  difficulty: 50
},
{
  id: "history_0163",
  question: "Who developed the periodic table in its early widely recognized form?",
  options: ["Dmitri Mendeleev", "Isaac Newton", "Niels Bohr", "Antoine Lavoisier"],
  answer: "Dmitri Mendeleev",
  category: "history",
  difficulty: 50
},
{
  id: "history_0164",
  question: "Which English mathematician is often called the father of the computer?",
  options: ["Charles Babbage", "Alan Turing", "Isaac Newton", "Michael Faraday"],
  answer: "Charles Babbage",
  category: "history",
  difficulty: 50
},
{
  id: "history_0165",
  question: "Who wrote an algorithm for Charles Babbage's proposed Analytical Engine?",
  options: ["Ada Lovelace", "Grace Hopper", "Marie Curie", "Rosalind Franklin"],
  answer: "Ada Lovelace",
  category: "history",
  difficulty: 50
},
{
  id: "history_0166",
  question: "Which British mathematician helped break the German Enigma code during World War II?",
  options: ["Alan Turing", "Charles Babbage", "Isaac Newton", "James Clerk Maxwell"],
  answer: "Alan Turing",
  category: "history",
  difficulty: 50
},
{
  id: "history_0167",
  question: "Who invented the World Wide Web?",
  options: ["Tim Berners-Lee", "Bill Gates", "Steve Jobs", "Mark Zuckerberg"],
  answer: "Tim Berners-Lee",
  category: "history",
  difficulty: 50
},
{
  id: "history_0168",
  question: "Which French scientist developed pasteurization?",
  options: ["Louis Pasteur", "Alexander Fleming", "Isaac Newton", "Antoine Lavoisier"],
  answer: "Louis Pasteur",
  category: "history",
  difficulty: 50
},
{
  id: "history_0169",
  question: "Who discovered the tuberculosis bacterium in 1882?",
  options: ["Robert Koch", "Alexander Fleming", "Louis Pasteur", "Edward Jenner"],
  answer: "Robert Koch",
  category: "history",
  difficulty: 50
},
{
  id: "history_0170",
  question: "Who performed the first successful human heart transplant in 1967?",
  options: ["Christiaan Barnard", "Christian Doppler", "Robert Koch", "William Harvey"],
  answer: "Christiaan Barnard",
  category: "history",
  difficulty: 50
},
{
  id: "history_0171",
  question: "What was the name of the first baby born through successful in-vitro fertilization?",
  options: ["Louise Brown", "Dolly Parton", "Anne Frank", "Marie Curie"],
  answer: "Louise Brown",
  category: "history",
  difficulty: 50
},
{
  id: "history_0172",
  question: "Who was the first woman to fly solo across the Atlantic Ocean?",
  options: ["Amelia Earhart", "Bessie Coleman", "Harriet Quimby", "Valentina Tereshkova"],
  answer: "Amelia Earhart",
  category: "history",
  difficulty: 50
},
{
  id: "history_0173",
  question: "Who invented the first successful practical automobile powered by an internal combustion engine?",
  options: ["Karl Benz", "Henry Ford", "James Watt", "Gottlieb Daimler"],
  answer: "Karl Benz",
  category: "history",
  difficulty: 50
},
{
  id: "history_0174",
  question: "Which entrepreneur popularized mass production of automobiles using the moving assembly line?",
  options: ["Henry Ford", "Karl Benz", "Thomas Edison", "Andrew Carnegie"],
  answer: "Henry Ford",
  category: "history",
  difficulty: 50
},
{
  id: "history_0175",
  question: "Who is associated with the invention of the modern pneumatic tyre?",
  options: ["John Boyd Dunlop", "Henry Ford", "Karl Benz", "Alexander Fleming"],
  answer: "John Boyd Dunlop",
  category: "history",
  difficulty: 50
},
{
  id: "history_0176",
  question: "Who developed the first successful commercial escalator?",
  options: ["Jesse W. Reno", "Thomas Edison", "Samuel Morse", "George Stephenson"],
  answer: "Jesse W. Reno",
  category: "history",
  difficulty: 50
},
{
  id: "history_0177",
  question: "Who patented the first practical electric traffic signal?",
  options: ["Garrett Morgan", "Eli Whitney", "George Washington Carver", "Benjamin Franklin"],
  answer: "Garrett Morgan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0178",
  question: "Who invented vulcanized rubber?",
  options: ["Charles Goodyear", "John Dunlop", "Henry Ford", "Samuel Colt"],
  answer: "Charles Goodyear",
  category: "history",
  difficulty: 50
},
{
  id: "history_0179",
  question: "Who founded the Kodak company and helped popularize photography for ordinary people?",
  options: ["George Eastman", "Thomas Edison", "Louis Daguerre", "Alexander Bell"],
  answer: "George Eastman",
  category: "history",
  difficulty: 50
},
{
  id: "history_0180",
  question: "Who is credited with inventing the microwave oven?",
  options: ["Percy Spencer", "James Watt", "Nikola Tesla", "John Logie Baird"],
  answer: "Percy Spencer",
  category: "history",
  difficulty: 50
},
{
  id: "history_0181",
  question: "Who introduced the first widely used commercial automated teller machine in 1967?",
  options: ["John Shepherd-Barron", "Steve Jobs", "Bill Gates", "Henry Ford"],
  answer: "John Shepherd-Barron",
  category: "history",
  difficulty: 50
},
{
  id: "history_0182",
  question: "Who made the first handheld mobile telephone call in 1973?",
  options: ["Martin Cooper", "Tim Berners-Lee", "Alexander Bell", "Steve Wozniak"],
  answer: "Martin Cooper",
  category: "history",
  difficulty: 50
},
{
  id: "history_0183",
  question: "Who helped invent the computer mouse?",
  options: ["Douglas Engelbart", "Charles Babbage", "Alan Turing", "Bill Gates"],
  answer: "Douglas Engelbart",
  category: "history",
  difficulty: 50
},
{
  id: "history_0184",
  question: "Who is credited with the invention of the revolver commonly associated with his surname?",
  options: ["Samuel Colt", "Eli Whitney", "Benjamin Franklin", "Thomas Edison"],
  answer: "Samuel Colt",
  category: "history",
  difficulty: 50
},
{
  id: "history_0185",
  question: "Who invented the lightning rod?",
  options: ["Benjamin Franklin", "Isaac Newton", "Nikola Tesla", "Michael Faraday"],
  answer: "Benjamin Franklin",
  category: "history",
  difficulty: 50
},
{
  id: "history_0186",
  question: "Who discovered electromagnetic induction?",
  options: ["Michael Faraday", "Thomas Edison", "Louis Pasteur", "Charles Darwin"],
  answer: "Michael Faraday",
  category: "history",
  difficulty: 50
},
{
  id: "history_0187",
  question: "Which scientist is associated with the laws of planetary motion?",
  options: ["Johannes Kepler", "Isaac Newton", "Galileo Galilei", "Charles Darwin"],
  answer: "Johannes Kepler",
  category: "history",
  difficulty: 50
},
{
  id: "history_0188",
  question: "Which astronomer proposed the heliocentric model that placed the Sun at the centre of the planetary system?",
  options: ["Nicolaus Copernicus", "Ptolemy", "Tycho Brahe", "Aristotle"],
  answer: "Nicolaus Copernicus",
  category: "history",
  difficulty: 50
},
{
  id: "history_0189",
  question: "Which scientist used a telescope to make important observations of Jupiter's moons?",
  options: ["Galileo Galilei", "Charles Darwin", "Louis Pasteur", "James Watt"],
  answer: "Galileo Galilei",
  category: "history",
  difficulty: 50
},
{
  id: "history_0190",
  question: "Which scientist formulated the laws of electromagnetic induction and electrolysis?",
  options: ["Michael Faraday", "Gregor Mendel", "Antoine Lavoisier", "Robert Hooke"],
  answer: "Michael Faraday",
  category: "history",
  difficulty: 50
},
{
  id: "history_0191",
  question: "Who is known for discovering the laws of inheritance through pea plant experiments?",
  options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alexander Fleming"],
  answer: "Gregor Mendel",
  category: "history",
  difficulty: 50
},
{
  id: "history_0192",
  question: "Which scientist is often called the father of modern chemistry?",
  options: ["Antoine Lavoisier", "Isaac Newton", "Albert Einstein", "Charles Babbage"],
  answer: "Antoine Lavoisier",
  category: "history",
  difficulty: 50
},
{
  id: "history_0193",
  question: "Who discovered the electron?",
  options: ["J. J. Thomson", "Ernest Rutherford", "Niels Bohr", "James Chadwick"],
  answer: "J. J. Thomson",
  category: "history",
  difficulty: 50
},
{
  id: "history_0194",
  question: "Who discovered the neutron?",
  options: ["James Chadwick", "J. J. Thomson", "Niels Bohr", "Max Planck"],
  answer: "James Chadwick",
  category: "history",
  difficulty: 50
},
{
  id: "history_0195",
  question: "Which scientist is famous for the equation E = mc²?",
  options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
  answer: "Albert Einstein",
  category: "history",
  difficulty: 50
},
{
  id: "history_0196",
  question: "Who developed the first successful vaccine against rabies?",
  options: ["Louis Pasteur", "Alexander Fleming", "Edward Jenner", "Robert Koch"],
  answer: "Louis Pasteur",
  category: "history",
  difficulty: 50
},
{
  id: "history_0197",
  question: "Which scientist is famous for studying chimpanzees in Tanzania?",
  options: ["Jane Goodall", "Marie Curie", "Rosalind Franklin", "Florence Nightingale"],
  answer: "Jane Goodall",
  category: "history",
  difficulty: 50
},
{
  id: "history_0198",
  question: "Who was the first African woman to win the Nobel Peace Prize?",
  options: ["Wangari Maathai", "Ellen Johnson Sirleaf", "Leymah Gbowee", "Miriam Makeba"],
  answer: "Wangari Maathai",
  category: "history",
  difficulty: 50
},
{
  id: "history_0199",
  question: "Which South African scientist helped develop the first heart transplant operation?",
  options: ["Christiaan Barnard", "Robert Koch", "Louis Pasteur", "Albert Einstein"],
  answer: "Christiaan Barnard",
  category: "history",
  difficulty: 50
},
{
  id: "history_0200",
  question: "Which woman was the first person to win Nobel Prizes in two different scientific fields?",
  options: ["Marie Curie", "Dorothy Hodgkin", "Rosalind Franklin", "Ada Lovelace"],
  answer: "Marie Curie",
  category: "history",
  difficulty: 50
},


{
  id: "history_0201",
  question: "Which famous protest in Boston took place in 1773 against British taxation?",
  options: ["Boston Tea Party", "Boston Massacre", "Stamp Act Protest", "Tea Act Congress"],
  answer: "Boston Tea Party",
  category: "history",
  difficulty: 50
},
{
  id: "history_0202",
  question: "In which year was the United States Constitution signed?",
  options: ["1776", "1787", "1791", "1801"],
  answer: "1787",
  category: "history",
  difficulty: 50
},
{
  id: "history_0203",
  question: "Which amendment to the United States Constitution abolished slavery?",
  options: ["13th Amendment", "15th Amendment", "19th Amendment", "1st Amendment"],
  answer: "13th Amendment",
  category: "history",
  difficulty: 50
},
{
  id: "history_0204",
  question: "Which document announced the emancipation of enslaved people in Confederate states during the American Civil War?",
  options: ["Emancipation Proclamation", "Declaration of Independence", "Magna Carta", "Bill of Rights"],
  answer: "Emancipation Proclamation",
  category: "history",
  difficulty: 50
},
{
  id: "history_0205",
  question: "In which year was the Emancipation Proclamation issued?",
  options: ["1861", "1863", "1865", "1870"],
  answer: "1863",
  category: "history",
  difficulty: 50
},
{
  id: "history_0206",
  question: "Which amendment gave women the right to vote throughout the United States?",
  options: ["15th Amendment", "19th Amendment", "13th Amendment", "21st Amendment"],
  answer: "19th Amendment",
  category: "history",
  difficulty: 50
},
{
  id: "history_0207",
  question: "In which year was the 19th Amendment ratified?",
  options: ["1865", "1890", "1920", "1945"],
  answer: "1920",
  category: "history",
  difficulty: 50
},
{
  id: "history_0208",
  question: "Which American president was assassinated in Dallas in 1963?",
  options: ["John F. Kennedy", "Richard Nixon", "Franklin D. Roosevelt", "Dwight Eisenhower"],
  answer: "John F. Kennedy",
  category: "history",
  difficulty: 50
},
{
  id: "history_0209",
  question: "Which American civil rights leader was assassinated in Memphis in 1968?",
  options: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "John Lewis"],
  answer: "Martin Luther King Jr.",
  category: "history",
  difficulty: 50
},
{
  id: "history_0210",
  question: "Which American civil rights leader was assassinated in New York City in 1965?",
  options: ["Malcolm X", "Martin Luther King Jr.", "Frederick Douglass", "Jesse Jackson"],
  answer: "Malcolm X",
  category: "history",
  difficulty: 50
},
{
  id: "history_0211",
  question: "Which law signed in the United States in 1964 prohibited discrimination in many public places and workplaces?",
  options: ["Civil Rights Act", "Homestead Act", "Sherman Act", "Patriot Act"],
  answer: "Civil Rights Act",
  category: "history",
  difficulty: 50
},
{
  id: "history_0212",
  question: "Which American president signed the Civil Rights Act of 1964?",
  options: ["Lyndon B. Johnson", "John F. Kennedy", "Richard Nixon", "Dwight Eisenhower"],
  answer: "Lyndon B. Johnson",
  category: "history",
  difficulty: 50
},
{
  id: "history_0213",
  question: "Which American president resigned from office in 1974?",
  options: ["Richard Nixon", "Gerald Ford", "Jimmy Carter", "Ronald Reagan"],
  answer: "Richard Nixon",
  category: "history",
  difficulty: 50
},
{
  id: "history_0214",
  question: "Which political scandal led to President Richard Nixon's resignation?",
  options: ["Watergate scandal", "Iran-Contra affair", "Teapot Dome scandal", "Pentagon Papers"],
  answer: "Watergate scandal",
  category: "history",
  difficulty: 50
},
{
  id: "history_0215",
  question: "Which country experienced a communist revolution led by Fidel Castro in 1959?",
  options: ["Cuba", "Mexico", "Chile", "Argentina"],
  answer: "Cuba",
  category: "history",
  difficulty: 50
},
{
  id: "history_0216",
  question: "Who became the central leader of Cuba after the 1959 revolution?",
  options: ["Fidel Castro", "Che Guevara", "Fulgencio Batista", "Hugo Chávez"],
  answer: "Fidel Castro",
  category: "history",
  difficulty: 50
},
{
  id: "history_0217",
  question: "Which Latin American revolutionary was known by the nickname Che?",
  options: ["Ernesto Guevara", "Simón Bolívar", "Fidel Castro", "Salvador Allende"],
  answer: "Ernesto Guevara",
  category: "history",
  difficulty: 50
},
{
  id: "history_0218",
  question: "Which country experienced the Iranian Revolution in 1979?",
  options: ["Iran", "Iraq", "Afghanistan", "Pakistan"],
  answer: "Iran",
  category: "history",
  difficulty: 50
},
{
  id: "history_0219",
  question: "Which Iranian monarch was overthrown during the 1979 revolution?",
  options: ["Mohammad Reza Pahlavi", "Reza Shah", "Faisal I", "King Farouk"],
  answer: "Mohammad Reza Pahlavi",
  category: "history",
  difficulty: 50
},
{
  id: "history_0220",
  question: "Who led the communist victory in China in 1949?",
  options: ["Mao Zedong", "Sun Yat-sen", "Deng Xiaoping", "Chiang Kai-shek"],
  answer: "Mao Zedong",
  category: "history",
  difficulty: 50
},
{
  id: "history_0221",
  question: "Which country was established as the People's Republic in 1949?",
  options: ["China", "Japan", "Vietnam", "South Korea"],
  answer: "China",
  category: "history",
  difficulty: 50
},
{
  id: "history_0222",
  question: "Which Chinese leader introduced major economic reforms beginning in the late 1970s?",
  options: ["Deng Xiaoping", "Mao Zedong", "Sun Yat-sen", "Zhou Enlai"],
  answer: "Deng Xiaoping",
  category: "history",
  difficulty: 50
},
{
  id: "history_0223",
  question: "Which Chinese dynasty was overthrown by the 1911 Revolution?",
  options: ["Qing dynasty", "Ming dynasty", "Tang dynasty", "Han dynasty"],
  answer: "Qing dynasty",
  category: "history",
  difficulty: 50
},
{
  id: "history_0224",
  question: "Who was the first president of the Republic of China after the 1911 Revolution?",
  options: ["Sun Yat-sen", "Mao Zedong", "Deng Xiaoping", "Chiang Kai-shek"],
  answer: "Sun Yat-sen",
  category: "history",
  difficulty: 50
},
{
  id: "history_0225",
  question: "Which country was divided into North and South after World War II?",
  options: ["Korea", "Vietnam", "Germany", "Yemen"],
  answer: "Korea",
  category: "history",
  difficulty: 50
},
{
  id: "history_0226",
  question: "Which country was divided into two states after World War II and reunited in 1990?",
  options: ["Germany", "Italy", "Poland", "Austria"],
  answer: "Germany",
  category: "history",
  difficulty: 50
},
{
  id: "history_0227",
  question: "In which year was the North Atlantic Treaty Organization founded?",
  options: ["1945", "1949", "1955", "1961"],
  answer: "1949",
  category: "history",
  difficulty: 50
},
{
  id: "history_0228",
  question: "Which military alliance was founded by the Soviet Union and Eastern European countries in 1955?",
  options: ["Warsaw Pact", "NATO", "European Union", "League of Nations"],
  answer: "Warsaw Pact",
  category: "history",
  difficulty: 50
},
{
  id: "history_0229",
  question: "Which country launched the first artificial satellite, Sputnik 1?",
  options: ["Soviet Union", "United States", "China", "United Kingdom"],
  answer: "Soviet Union",
  category: "history",
  difficulty: 50
},
{
  id: "history_0230",
  question: "Which event in 1968 involved a Soviet-led invasion of Czechoslovakia?",
  options: ["Prague Spring", "Hungarian Revolution", "Velvet Revolution", "Orange Revolution"],
  answer: "Prague Spring",
  category: "history",
  difficulty: 50
},
{
  id: "history_0231",
  question: "Which country withdrew from the European Union in 2020?",
  options: ["United Kingdom", "France", "Germany", "Italy"],
  answer: "United Kingdom",
  category: "history",
  difficulty: 50
},
{
  id: "history_0232",
  question: "What is the name commonly given to the United Kingdom's withdrawal from the European Union?",
  options: ["Brexit", "Grexit", "Frexit", "Nexit"],
  answer: "Brexit",
  category: "history",
  difficulty: 50
},
{
  id: "history_0233",
  question: "Which country was the starting point of the Arab Spring protests in 2010?",
  options: ["Tunisia", "Egypt", "Libya", "Syria"],
  answer: "Tunisia",
  category: "history",
  difficulty: 50
},
{
  id: "history_0234",
  question: "Which Egyptian president resigned during the 2011 Egyptian Revolution?",
  options: ["Hosni Mubarak", "Gamal Abdel Nasser", "Anwar Sadat", "Mohamed Morsi"],
  answer: "Hosni Mubarak",
  category: "history",
  difficulty: 50
},
{
  id: "history_0235",
  question: "Which South American country experienced a military coup against President Salvador Allende in 1973?",
  options: ["Chile", "Peru", "Brazil", "Colombia"],
  answer: "Chile",
  category: "history",
  difficulty: 50
},
{
  id: "history_0236",
  question: "Who became Chile's military ruler after the 1973 coup?",
  options: ["Augusto Pinochet", "Salvador Allende", "Fidel Castro", "Juan Perón"],
  answer: "Augusto Pinochet",
  category: "history",
  difficulty: 50
},
{
  id: "history_0237",
  question: "Which country experienced a revolution that overthrew the monarchy in 1974?",
  options: ["Portugal", "Spain", "France", "Italy"],
  answer: "Portugal",
  category: "history",
  difficulty: 50
},
{
  id: "history_0238",
  question: "What was the 1974 Portuguese revolution commonly called?",
  options: ["Carnation Revolution", "Velvet Revolution", "Orange Revolution", "Rose Revolution"],
  answer: "Carnation Revolution",
  category: "history",
  difficulty: 50
},
{
  id: "history_0239",
  question: "Which country experienced the Velvet Revolution in 1989?",
  options: ["Czechoslovakia", "Romania", "Poland", "Hungary"],
  answer: "Czechoslovakia",
  category: "history",
  difficulty: 50
},
{
  id: "history_0240",
  question: "Which major European country experienced the Romanian Revolution in 1989?",
  options: ["Romania", "Bulgaria", "Hungary", "Austria"],
  answer: "Romania",
  category: "history",
  difficulty: 50
},
{
  id: "history_0241",
  question: "Which German city was divided by a wall during the Cold War?",
  options: ["Berlin", "Munich", "Hamburg", "Bonn"],
  answer: "Berlin",
  category: "history",
  difficulty: 50
},
{
  id: "history_0242",
  question: "Which US president delivered the famous 'Tear down this wall!' speech in Berlin in 1987?",
  options: ["Ronald Reagan", "Richard Nixon", "Jimmy Carter", "George H. W. Bush"],
  answer: "Ronald Reagan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0243",
  question: "Which political movement helped end communist rule in Poland during the 1980s?",
  options: ["Solidarity", "Apartheid", "Ba'athism", "Fascism"],
  answer: "Solidarity",
  category: "history",
  difficulty: 50
},
{
  id: "history_0244",
  question: "Who was the leader of the Soviet Union when it dissolved in 1991?",
  options: ["Mikhail Gorbachev", "Joseph Stalin", "Vladimir Lenin", "Nikita Khrushchev"],
  answer: "Mikhail Gorbachev",
  category: "history",
  difficulty: 50
},
{
  id: "history_0245",
  question: "Which country experienced the Tiananmen Square protests in 1989?",
  options: ["China", "Japan", "Vietnam", "Thailand"],
  answer: "China",
  category: "history",
  difficulty: 50
},
{
  id: "history_0246",
  question: "Which region was transferred from British to Chinese sovereignty in 1997?",
  options: ["Hong Kong", "Macau", "Taiwan", "Hainan"],
  answer: "Hong Kong",
  category: "history",
  difficulty: 50
},
{
  id: "history_0247",
  question: "Which European country transferred Macau to China in 1999?",
  options: ["Portugal", "Spain", "France", "Britain"],
  answer: "Portugal",
  category: "history",
  difficulty: 50
},
{
  id: "history_0248",
  question: "Which country was invaded by Iraq in 1990, leading to the Gulf War?",
  options: ["Kuwait", "Saudi Arabia", "Iran", "Jordan"],
  answer: "Kuwait",
  category: "history",
  difficulty: 50
},
{
  id: "history_0249",
  question: "Which country led the 1991 coalition that expelled Iraqi forces from Kuwait?",
  options: ["United States", "France", "Russia", "China"],
  answer: "United States",
  category: "history",
  difficulty: 50
},
{
  id: "history_0250",
  question: "Which country experienced the September 11 terrorist attacks in 2001?",
  options: ["United States", "United Kingdom", "France", "Canada"],
  answer: "United States",
  category: "history",
  difficulty: 50
},


{
  id: "history_0251",
  question: "Who founded the Mongol Empire?",
  options: ["Genghis Khan", "Kublai Khan", "Attila the Hun", "Tamerlane"],
  answer: "Genghis Khan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0252",
  question: "Which ancient trade route connected China with parts of Europe and the Middle East?",
  options: ["Silk Road", "Spice Route", "Amber Road", "Royal Road"],
  answer: "Silk Road",
  category: "history",
  difficulty: 50
},
{
  id: "history_0253",
  question: "Which ancient people were famous traders and sailors from the eastern Mediterranean?",
  options: ["Phoenicians", "Vikings", "Mongols", "Huns"],
  answer: "Phoenicians",
  category: "history",
  difficulty: 50
},
{
  id: "history_0254",
  question: "Which ancient civilization developed in Central America and is famous for its calendar and writing system?",
  options: ["Maya", "Inca", "Roman", "Persian"],
  answer: "Maya",
  category: "history",
  difficulty: 50
},
{
  id: "history_0255",
  question: "Which civilization built an extensive road network through the Andes?",
  options: ["Inca", "Maya", "Aztec", "Phoenician"],
  answer: "Inca",
  category: "history",
  difficulty: 50
},
{
  id: "history_0256",
  question: "Which ancient people held the original Olympic Games at Olympia?",
  options: ["Greeks", "Romans", "Persians", "Egyptians"],
  answer: "Greeks",
  category: "history",
  difficulty: 50
},
{
  id: "history_0257",
  question: "What was the main governing body of the Roman Republic called?",
  options: ["Senate", "Parliament of London", "House of Lords", "Royal Council"],
  answer: "Senate",
  category: "history",
  difficulty: 50
},
{
  id: "history_0258",
  question: "What name is commonly given to the eastern continuation of the Roman Empire?",
  options: ["Byzantine Empire", "Mongol Empire", "Ottoman Empire", "Persian Empire"],
  answer: "Byzantine Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0259",
  question: "Which emperor ordered the construction of a famous wall across northern Britain?",
  options: ["Hadrian", "Nero", "Augustus", "Trajan"],
  answer: "Hadrian",
  category: "history",
  difficulty: 50
},
{
  id: "history_0260",
  question: "Which Scandinavian people were famous for their voyages and raids during the Middle Ages?",
  options: ["Vikings", "Aztecs", "Mughals", "Phoenicians"],
  answer: "Vikings",
  category: "history",
  difficulty: 50
},
{
  id: "history_0261",
  question: "Which type of ship was commonly used by Viking explorers?",
  options: ["Longship", "Galleon", "Steamship", "Submarine"],
  answer: "Longship",
  category: "history",
  difficulty: 50
},
{
  id: "history_0262",
  question: "Which Japanese warrior class served military rulers and regional lords?",
  options: ["Samurai", "Knights Templar", "Janissaries", "Spartans"],
  answer: "Samurai",
  category: "history",
  difficulty: 50
},
{
  id: "history_0263",
  question: "What was the title of Japan's powerful military ruler?",
  options: ["Shogun", "Pharaoh", "Kaiser", "Sultan"],
  answer: "Shogun",
  category: "history",
  difficulty: 50
},
{
  id: "history_0264",
  question: "What was the traditional Japanese sword associated with samurai called?",
  options: ["Katana", "Rapier", "Sabre", "Gladius"],
  answer: "Katana",
  category: "history",
  difficulty: 50
},
{
  id: "history_0265",
  question: "Which Japanese city was formerly known as Edo?",
  options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
  answer: "Tokyo",
  category: "history",
  difficulty: 50
},
{
  id: "history_0266",
  question: "Who ordered the construction of the Taj Mahal?",
  options: ["Shah Jahan", "Akbar", "Aurangzeb", "Babur"],
  answer: "Shah Jahan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0267",
  question: "For whom was the Taj Mahal built?",
  options: ["Mumtaz Mahal", "Nur Jahan", "Jodha Bai", "Razia Sultana"],
  answer: "Mumtaz Mahal",
  category: "history",
  difficulty: 50
},
{
  id: "history_0268",
  question: "Which empire ruled much of northern India before the British established colonial rule?",
  options: ["Mughal Empire", "Roman Empire", "Mali Empire", "Byzantine Empire"],
  answer: "Mughal Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0269",
  question: "Which Mughal emperor is often remembered for promoting religious tolerance?",
  options: ["Akbar", "Aurangzeb", "Babur", "Bahadur Shah II"],
  answer: "Akbar",
  category: "history",
  difficulty: 50
},
{
  id: "history_0270",
  question: "Which European country established a major maritime empire through exploration and trade along Africa and Asia?",
  options: ["Portugal", "Switzerland", "Austria", "Poland"],
  answer: "Portugal",
  category: "history",
  difficulty: 50
},
{
  id: "history_0271",
  question: "Which explorer sailed around the southern tip of Africa and reached India by sea in 1498?",
  options: ["Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan", "James Cook"],
  answer: "Vasco da Gama",
  category: "history",
  difficulty: 50
},
{
  id: "history_0272",
  question: "Which explorer reached the Pacific Ocean from the Atlantic by sailing around South America?",
  options: ["Ferdinand Magellan", "Marco Polo", "Vasco da Gama", "Francis Drake"],
  answer: "Ferdinand Magellan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0273",
  question: "Which explorer travelled extensively through Asia and later became famous through accounts of his journeys?",
  options: ["Marco Polo", "James Cook", "Hernán Cortés", "Roald Amundsen"],
  answer: "Marco Polo",
  category: "history",
  difficulty: 50
},
{
  id: "history_0274",
  question: "Which Spanish conquistador led the expedition that defeated the Aztec Empire?",
  options: ["Hernán Cortés", "Francisco Pizarro", "Vasco Núñez de Balboa", "Juan Ponce de León"],
  answer: "Hernán Cortés",
  category: "history",
  difficulty: 50
},
{
  id: "history_0275",
  question: "Which Spanish conquistador led the conquest of the Inca Empire?",
  options: ["Francisco Pizarro", "Hernán Cortés", "Ferdinand Magellan", "Hernando de Soto"],
  answer: "Francisco Pizarro",
  category: "history",
  difficulty: 50
},
{
  id: "history_0276",
  question: "Which city was the capital of the Aztec Empire?",
  options: ["Tenochtitlan", "Cusco", "Tikal", "Teotihuacan"],
  answer: "Tenochtitlan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0277",
  question: "Which ancient city is famous for the pyramid known as El Castillo?",
  options: ["Chichén Itzá", "Rome", "Athens", "Babylon"],
  answer: "Chichén Itzá",
  category: "history",
  difficulty: 50
},
{
  id: "history_0278",
  question: "Which empire had its capital at Cusco in the Andes?",
  options: ["Inca Empire", "Mali Empire", "Ottoman Empire", "British Empire"],
  answer: "Inca Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0279",
  question: "Which ancient civilization built the city of Petra?",
  options: ["Nabataeans", "Romans", "Vikings", "Mongols"],
  answer: "Nabataeans",
  category: "history",
  difficulty: 50
},
{
  id: "history_0280",
  question: "Which empire built the famous Hagia Sophia as a Christian cathedral in Constantinople?",
  options: ["Byzantine Empire", "Mali Empire", "Mongol Empire", "Mughal Empire"],
  answer: "Byzantine Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0281",
  question: "Which city was the capital of the Byzantine Empire?",
  options: ["Constantinople", "Rome", "Athens", "Alexandria"],
  answer: "Constantinople",
  category: "history",
  difficulty: 50
},
{
  id: "history_0282",
  question: "Which Byzantine emperor is famous for compiling Roman laws into a major legal collection?",
  options: ["Justinian I", "Constantine I", "Theodosius I", "Heraclius"],
  answer: "Justinian I",
  category: "history",
  difficulty: 50
},
{
  id: "history_0283",
  question: "Which empire was ruled from Istanbul after the Ottoman conquest?",
  options: ["Ottoman Empire", "Mali Empire", "Mongol Empire", "Inca Empire"],
  answer: "Ottoman Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0284",
  question: "Which Ottoman ruler was popularly known as Suleiman the Magnificent?",
  options: ["Suleiman I", "Mehmed II", "Osman I", "Selim III"],
  answer: "Suleiman I",
  category: "history",
  difficulty: 50
},
{
  id: "history_0285",
  question: "Which empire was ruled by the famous leader Genghis Khan?",
  options: ["Mongol Empire", "Roman Empire", "British Empire", "Persian Empire"],
  answer: "Mongol Empire",
  category: "history",
  difficulty: 50
},
{
  id: "history_0286",
  question: "Which Mongol ruler founded the Yuan dynasty in China?",
  options: ["Kublai Khan", "Genghis Khan", "Tamerlane", "Attila the Hun"],
  answer: "Kublai Khan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0287",
  question: "Which English document limited the powers of King John in 1215?",
  options: ["Magna Carta", "Bill of Rights", "Declaration of Independence", "Act of Union"],
  answer: "Magna Carta",
  category: "history",
  difficulty: 50
},
{
  id: "history_0288",
  question: "Which medieval religious military order was originally associated with protecting Christian pilgrims?",
  options: ["Knights Templar", "Samurai", "Janissaries", "Vikings"],
  answer: "Knights Templar",
  category: "history",
  difficulty: 50
},
{
  id: "history_0289",
  question: "Which historical period followed the Middle Ages in Europe?",
  options: ["Renaissance", "Stone Age", "Bronze Age", "Neolithic Age"],
  answer: "Renaissance",
  category: "history",
  difficulty: 50
},
{
  id: "history_0290",
  question: "Which Italian city is strongly associated with the early Renaissance?",
  options: ["Florence", "Berlin", "London", "Moscow"],
  answer: "Florence",
  category: "history",
  difficulty: 50
},
{
  id: "history_0291",
  question: "Which English king established the Church of England as part of his break with Rome?",
  options: ["Henry VIII", "Henry VII", "Richard III", "Edward I"],
  answer: "Henry VIII",
  category: "history",
  difficulty: 50
},
{
  id: "history_0292",
  question: "Which European explorer reached the Cape of Good Hope in 1488?",
  options: ["Bartolomeu Dias", "Vasco da Gama", "Christopher Columbus", "Ferdinand Magellan"],
  answer: "Bartolomeu Dias",
  category: "history",
  difficulty: 50
},
{
  id: "history_0293",
  question: "Which explorer was the first European to reach India by sea around the Cape of Good Hope?",
  options: ["Vasco da Gama", "Bartolomeu Dias", "Christopher Columbus", "James Cook"],
  answer: "Vasco da Gama",
  category: "history",
  difficulty: 50
},
{
  id: "history_0294",
  question: "Which European country sponsored Christopher Columbus's 1492 voyage?",
  options: ["Spain", "Portugal", "France", "England"],
  answer: "Spain",
  category: "history",
  difficulty: 50
},
{
  id: "history_0295",
  question: "Which English settlement founded in 1607 became the first permanent English settlement in North America?",
  options: ["Jamestown", "Plymouth", "Boston", "New York"],
  answer: "Jamestown",
  category: "history",
  difficulty: 50
},
{
  id: "history_0296",
  question: "Which event in 1692 is associated with accusations of witchcraft in Massachusetts?",
  options: ["Salem witch trials", "Boston Tea Party", "American Revolution", "French Revolution"],
  answer: "Salem witch trials",
  category: "history",
  difficulty: 50
},
{
  id: "history_0297",
  question: "Which country purchased Louisiana from France in 1803?",
  options: ["United States", "Canada", "Mexico", "Brazil"],
  answer: "United States",
  category: "history",
  difficulty: 50
},
{
  id: "history_0298",
  question: "Which American president authorized the Louisiana Purchase?",
  options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
  answer: "Thomas Jefferson",
  category: "history",
  difficulty: 50
},
{
  id: "history_0299",
  question: "Which Caribbean country became independent from France in 1804?",
  options: ["Haiti", "Jamaica", "Cuba", "Barbados"],
  answer: "Haiti",
  category: "history",
  difficulty: 50
},
{
  id: "history_0300",
  question: "Which country became independent from Spain in 1821?",
  options: ["Mexico", "Canada", "Brazil", "Haiti"],
  answer: "Mexico",
  category: "history",
  difficulty: 50
},


{
  id: "history_0301",
  question: "In which year did Canada become a confederation?",
  options: ["1848", "1867", "1885", "1901"],
  answer: "1867",
  category: "history",
  difficulty: 50
},
{
  id: "history_0302",
  question: "Which US state became famous for the gold rush that began in 1848?",
  options: ["California", "Texas", "Florida", "Alaska"],
  answer: "California",
  category: "history",
  difficulty: 50
},
{
  id: "history_0303",
  question: "Which war in 1898 involved the United States and Spain?",
  options: ["Spanish-American War", "American Civil War", "War of 1812", "Mexican-American War"],
  answer: "Spanish-American War",
  category: "history",
  difficulty: 50
},
{
  id: "history_0304",
  question: "In which year did the Panama Canal officially open?",
  options: ["1898", "1905", "1914", "1929"],
  answer: "1914",
  category: "history",
  difficulty: 50
},
{
  id: "history_0305",
  question: "On which date is Armistice Day commemorated in many countries?",
  options: ["11 November", "1 September", "6 June", "25 December"],
  answer: "11 November",
  category: "history",
  difficulty: 50
},
{
  id: "history_0306",
  question: "Which global pandemic killed millions of people around the world in 1918–1919?",
  options: ["Spanish flu", "Black Death", "Cholera pandemic of 1854", "COVID-19"],
  answer: "Spanish flu",
  category: "history",
  difficulty: 50
},
{
  id: "history_0307",
  question: "Which country was divided into East and West after World War II?",
  options: ["Germany", "Spain", "Portugal", "Sweden"],
  answer: "Germany",
  category: "history",
  difficulty: 50
},
{
  id: "history_0308",
  question: "Which battle in 1940 was fought mainly in the skies over Britain?",
  options: ["Battle of Britain", "Battle of the Bulge", "Battle of Midway", "Battle of El Alamein"],
  answer: "Battle of Britain",
  category: "history",
  difficulty: 50
},
{
  id: "history_0309",
  question: "Which major World War II battle took place in the Soviet city of Stalingrad?",
  options: ["Battle of Stalingrad", "Battle of Waterloo", "Battle of Trafalgar", "Battle of Hastings"],
  answer: "Battle of Stalingrad",
  category: "history",
  difficulty: 50
},
{
  id: "history_0310",
  question: "Which Japanese city was the second target of an atomic bomb in August 1945?",
  options: ["Nagasaki", "Tokyo", "Osaka", "Kyoto"],
  answer: "Nagasaki",
  category: "history",
  difficulty: 50
},
{
  id: "history_0311",
  question: "Which declaration adopted by the United Nations in 1948 describes fundamental human rights?",
  options: ["Universal Declaration of Human Rights", "Declaration of Independence", "Magna Carta", "Atlantic Charter"],
  answer: "Universal Declaration of Human Rights",
  category: "history",
  difficulty: 50
},
{
  id: "history_0312",
  question: "In which year was the state of Israel established?",
  options: ["1939", "1945", "1948", "1956"],
  answer: "1948",
  category: "history",
  difficulty: 50
},
{
  id: "history_0313",
  question: "Which country became independent from Pakistan in 1971?",
  options: ["Bangladesh", "Nepal", "Sri Lanka", "Bhutan"],
  answer: "Bangladesh",
  category: "history",
  difficulty: 50
},
{
  id: "history_0314",
  question: "Who became the first president of Bangladesh after its independence?",
  options: ["Sheikh Mujibur Rahman", "Ziaur Rahman", "Hussain Muhammad Ershad", "Khaleda Zia"],
  answer: "Sheikh Mujibur Rahman",
  category: "history",
  difficulty: 50
},
{
  id: "history_0315",
  question: "Which canal crisis in 1956 involved Egypt, Britain, France, and Israel?",
  options: ["Suez Crisis", "Panama Crisis", "Berlin Crisis", "Cuban Missile Crisis"],
  answer: "Suez Crisis",
  category: "history",
  difficulty: 50
},
{
  id: "history_0316",
  question: "Which city was supplied by air during the Berlin Blockade of 1948–1949?",
  options: ["West Berlin", "East Berlin", "Hamburg", "Munich"],
  answer: "West Berlin",
  category: "history",
  difficulty: 50
},
{
  id: "history_0317",
  question: "Which Chinese campaign beginning in 1958 aimed to rapidly transform the country's economy?",
  options: ["Great Leap Forward", "Cultural Revolution", "Long March", "Hundred Flowers Campaign"],
  answer: "Great Leap Forward",
  category: "history",
  difficulty: 50
},
{
  id: "history_0318",
  question: "Which major political movement did Mao Zedong launch in China in 1966?",
  options: ["Cultural Revolution", "Meiji Restoration", "Industrial Revolution", "French Revolution"],
  answer: "Cultural Revolution",
  category: "history",
  difficulty: 50
},
{
  id: "history_0319",
  question: "Who led the Khmer Rouge regime in Cambodia?",
  options: ["Pol Pot", "Ho Chi Minh", "Mao Zedong", "Sukarno"],
  answer: "Pol Pot",
  category: "history",
  difficulty: 50
},
{
  id: "history_0320",
  question: "Which country experienced a devastating genocide under the Khmer Rouge during the 1970s?",
  options: ["Cambodia", "Thailand", "Malaysia", "Singapore"],
  answer: "Cambodia",
  category: "history",
  difficulty: 50
},
{
  id: "history_0321",
  question: "Which military alliance was formed in 1955 by the Soviet Union and several Eastern European states?",
  options: ["Warsaw Pact", "NATO", "European Union", "League of Nations"],
  answer: "Warsaw Pact",
  category: "history",
  difficulty: 50
},
{
  id: "history_0322",
  question: "Which country became the first in the Middle East to grant women the right to vote in national elections in 1956?",
  options: ["Iran", "Egypt", "Jordan", "Saudi Arabia"],
  answer: "Iran",
  category: "history",
  difficulty: 50
},
{
  id: "history_0323",
  question: "Which country was the first in the world to grant women parliamentary voting rights in national elections?",
  options: ["New Zealand", "United Kingdom", "United States", "France"],
  answer: "New Zealand",
  category: "history",
  difficulty: 50
},
{
  id: "history_0324",
  question: "In which year did New Zealand grant women the right to vote in parliamentary elections?",
  options: ["1867", "1883", "1893", "1918"],
  answer: "1893",
  category: "history",
  difficulty: 50
},
{
  id: "history_0325",
  question: "Which American astronaut became the first person to orbit Earth in 1962?",
  options: ["John Glenn", "Neil Armstrong", "Buzz Aldrin", "Alan Shepard"],
  answer: "John Glenn",
  category: "history",
  difficulty: 50
},
{
  id: "history_0326",
  question: "Which space mission carried the first humans to orbit the Moon in 1968?",
  options: ["Apollo 8", "Apollo 11", "Apollo 13", "Gemini 7"],
  answer: "Apollo 8",
  category: "history",
  difficulty: 50
},
{
  id: "history_0327",
  question: "Which American space mission suffered an oxygen tank explosion in 1970?",
  options: ["Apollo 13", "Apollo 8", "Apollo 11", "Gemini 4"],
  answer: "Apollo 13",
  category: "history",
  difficulty: 50
},
{
  id: "history_0328",
  question: "Which American space shuttle broke apart shortly after launch in 1986?",
  options: ["Challenger", "Discovery", "Atlantis", "Endeavour"],
  answer: "Challenger",
  category: "history",
  difficulty: 50
},
{
  id: "history_0329",
  question: "Which nuclear power plant suffered a major accident in Ukraine in 1986?",
  options: ["Chernobyl", "Fukushima", "Three Mile Island", "Sellafield"],
  answer: "Chernobyl",
  category: "history",
  difficulty: 50
},
{
  id: "history_0330",
  question: "In which country did the Fukushima nuclear disaster occur in 2011?",
  options: ["Japan", "China", "South Korea", "Russia"],
  answer: "Japan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0331",
  question: "Which American city was the centre of the 1969 Stonewall uprising?",
  options: ["New York City", "Los Angeles", "Chicago", "Boston"],
  answer: "New York City",
  category: "history",
  difficulty: 50
},
{
  id: "history_0332",
  question: "Which agreement helped bring an end to much of the conflict in Northern Ireland in 1998?",
  options: ["Good Friday Agreement", "Treaty of Versailles", "Camp David Accords", "Treaty of Rome"],
  answer: "Good Friday Agreement",
  category: "history",
  difficulty: 50
},
{
  id: "history_0333",
  question: "Which two countries signed the Good Friday Agreement in 1998?",
  options: ["United Kingdom and Ireland", "France and Germany", "Spain and Portugal", "United States and Canada"],
  answer: "United Kingdom and Ireland",
  category: "history",
  difficulty: 50
},
{
  id: "history_0334",
  question: "Which world leader was killed in an assassination in 1963 while visiting Dallas?",
  options: ["John F. Kennedy", "Robert Kennedy", "Martin Luther King Jr.", "Richard Nixon"],
  answer: "John F. Kennedy",
  category: "history",
  difficulty: 50
},
{
  id: "history_0335",
  question: "Which American president visited China in 1972 in a major diplomatic breakthrough?",
  options: ["Richard Nixon", "Jimmy Carter", "Ronald Reagan", "John F. Kennedy"],
  answer: "Richard Nixon",
  category: "history",
  difficulty: 50
},
{
  id: "history_0336",
  question: "Which South American leader was overthrown in a military coup in 1973?",
  options: ["Salvador Allende", "Simón Bolívar", "Juan Perón", "Fidel Castro"],
  answer: "Salvador Allende",
  category: "history",
  difficulty: 50
},
{
  id: "history_0337",
  question: "Which country experienced a major democratic transition after the Carnation Revolution of 1974?",
  options: ["Portugal", "Spain", "Greece", "Italy"],
  answer: "Portugal",
  category: "history",
  difficulty: 50
},
{
  id: "history_0338",
  question: "Which country's monarchy was overthrown by a revolution in 1979?",
  options: ["Iran", "Jordan", "Morocco", "Saudi Arabia"],
  answer: "Iran",
  category: "history",
  difficulty: 50
},
{
  id: "history_0339",
  question: "Which country became independent in 1991 following the breakup of Yugoslavia?",
  options: ["Slovenia", "Portugal", "Austria", "Norway"],
  answer: "Slovenia",
  category: "history",
  difficulty: 50
},
{
  id: "history_0340",
  question: "Which country became independent in 1991 following the collapse of the Soviet Union?",
  options: ["Ukraine", "Germany", "Austria", "Poland"],
  answer: "Ukraine",
  category: "history",
  difficulty: 50
},
{
  id: "history_0341",
  question: "Which event in 2004 caused a devastating tsunami across countries bordering the Indian Ocean?",
  options: ["Indian Ocean earthquake", "Hurricane Katrina", "Haitian earthquake", "Tōhoku earthquake"],
  answer: "Indian Ocean earthquake",
  category: "history",
  difficulty: 50
},
{
  id: "history_0342",
  question: "Which city was severely damaged by Hurricane Katrina in 2005?",
  options: ["New Orleans", "New York", "Los Angeles", "Seattle"],
  answer: "New Orleans",
  category: "history",
  difficulty: 50
},
{
  id: "history_0343",
  question: "Which country hosted the 2008 Summer Olympics?",
  options: ["China", "Greece", "Brazil", "Australia"],
  answer: "China",
  category: "history",
  difficulty: 50
},
{
  id: "history_0344",
  question: "Which city hosted the 2012 Summer Olympics?",
  options: ["London", "Beijing", "Rio de Janeiro", "Tokyo"],
  answer: "London",
  category: "history",
  difficulty: 50
},
{
  id: "history_0345",
  question: "Which city hosted the 2016 Summer Olympics?",
  options: ["Rio de Janeiro", "London", "Paris", "Sydney"],
  answer: "Rio de Janeiro",
  category: "history",
  difficulty: 50
},
{
  id: "history_0346",
  question: "Which city hosted the 2020 Summer Olympics, held in 2021?",
  options: ["Tokyo", "Paris", "Beijing", "Seoul"],
  answer: "Tokyo",
  category: "history",
  difficulty: 50
},
{
  id: "history_0347",
  question: "Which city hosted the 2024 Summer Olympics?",
  options: ["Paris", "Los Angeles", "London", "Rome"],
  answer: "Paris",
  category: "history",
  difficulty: 50
},
{
  id: "history_0348",
  question: "Which country hosted the 2010 FIFA World Cup?",
  options: ["South Africa", "Brazil", "Germany", "Japan"],
  answer: "South Africa",
  category: "history",
  difficulty: 50
},
{
  id: "history_0349",
  question: "Which country hosted the 2014 FIFA World Cup?",
  options: ["Brazil", "Russia", "South Africa", "France"],
  answer: "Brazil",
  category: "history",
  difficulty: 50
},
{
  id: "history_0350",
  question: "Which country hosted the 2018 FIFA World Cup?",
  options: ["Russia", "Germany", "Qatar", "Brazil"],
  answer: "Russia",
  category: "history",
  difficulty: 50
},


{
  id: "history_0351",
  question: "Who was the first woman to become Prime Minister of any country?",
  options: ["Sirimavo Bandaranaike", "Indira Gandhi", "Margaret Thatcher", "Golda Meir"],
  answer: "Sirimavo Bandaranaike",
  category: "history",
  difficulty: 50
},
{
  id: "history_0352",
  question: "Which country did Sirimavo Bandaranaike lead as Prime Minister?",
  options: ["Sri Lanka", "India", "Pakistan", "Bangladesh"],
  answer: "Sri Lanka",
  category: "history",
  difficulty: 50
},
{
  id: "history_0353",
  question: "Who became Liberia's first elected female president in 2006?",
  options: ["Ellen Johnson Sirleaf", "Leymah Gbowee", "Wangari Maathai", "Ellen Kuzwayo"],
  answer: "Ellen Johnson Sirleaf",
  category: "history",
  difficulty: 50
},
{
  id: "history_0354",
  question: "Which German politician became the country's first female Chancellor in 2005?",
  options: ["Angela Merkel", "Ursula von der Leyen", "Margaret Thatcher", "Hillary Clinton"],
  answer: "Angela Merkel",
  category: "history",
  difficulty: 50
},
{
  id: "history_0355",
  question: "Which British monarch was crowned in 1953 and reigned until 2022?",
  options: ["Queen Elizabeth II", "Queen Victoria", "Queen Mary II", "Queen Anne"],
  answer: "Queen Elizabeth II",
  category: "history",
  difficulty: 50
},
{
  id: "history_0356",
  question: "In which year did Queen Elizabeth II become monarch?",
  options: ["1945", "1952", "1957", "1963"],
  answer: "1952",
  category: "history",
  difficulty: 50
},
{
  id: "history_0357",
  question: "Which British princess died in a car crash in Paris in 1997?",
  options: ["Princess Diana", "Princess Anne", "Princess Margaret", "Princess Charlotte"],
  answer: "Princess Diana",
  category: "history",
  difficulty: 50
},
{
  id: "history_0358",
  question: "Which religious leader founded the Missionaries of Charity?",
  options: ["Mother Teresa", "Florence Nightingale", "Rosa Parks", "Jane Goodall"],
  answer: "Mother Teresa",
  category: "history",
  difficulty: 50
},
{
  id: "history_0359",
  question: "Which Indian poet became the first non-European to win the Nobel Prize in Literature?",
  options: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Sarojini Naidu"],
  answer: "Rabindranath Tagore",
  category: "history",
  difficulty: 50
},
{
  id: "history_0360",
  question: "In which year did Rabindranath Tagore win the Nobel Prize in Literature?",
  options: ["1905", "1913", "1920", "1930"],
  answer: "1913",
  category: "history",
  difficulty: 50
},
{
  id: "history_0361",
  question: "Which African leader received the Nobel Peace Prize in 1960 for his work against apartheid?",
  options: ["Albert Luthuli", "Nelson Mandela", "Desmond Tutu", "Thabo Mbeki"],
  answer: "Albert Luthuli",
  category: "history",
  difficulty: 50
},
{
  id: "history_0362",
  question: "In which year did Nelson Mandela and F. W. de Klerk jointly receive the Nobel Peace Prize?",
  options: ["1989", "1990", "1993", "1996"],
  answer: "1993",
  category: "history",
  difficulty: 50
},
{
  id: "history_0363",
  question: "Which American civil rights leader received the Nobel Peace Prize in 1964?",
  options: ["Martin Luther King Jr.", "Malcolm X", "Rosa Parks", "John Lewis"],
  answer: "Martin Luther King Jr.",
  category: "history",
  difficulty: 50
},
{
  id: "history_0364",
  question: "Which Nobel Prize did Mother Teresa receive in 1979?",
  options: ["Peace", "Literature", "Physics", "Chemistry"],
  answer: "Peace",
  category: "history",
  difficulty: 50
},
{
  id: "history_0365",
  question: "Which American woman became the first African American woman to travel into space in 1992?",
  options: ["Mae Jemison", "Sally Ride", "Katherine Johnson", "Valentina Tereshkova"],
  answer: "Mae Jemison",
  category: "history",
  difficulty: 50
},
{
  id: "history_0366",
  question: "Which mathematician's calculations helped NASA's early human spaceflight missions?",
  options: ["Katherine Johnson", "Ada Lovelace", "Marie Curie", "Rosalind Franklin"],
  answer: "Katherine Johnson",
  category: "history",
  difficulty: 50
},
{
  id: "history_0367",
  question: "Which African American woman became a leading figure in the Underground Railroad?",
  options: ["Harriet Tubman", "Rosa Parks", "Maya Angelou", "Coretta Scott King"],
  answer: "Harriet Tubman",
  category: "history",
  difficulty: 50
},
{
  id: "history_0368",
  question: "Which American writer became the first African American woman to win the Nobel Prize in Literature?",
  options: ["Toni Morrison", "Maya Angelou", "Alice Walker", "Zora Neale Hurston"],
  answer: "Toni Morrison",
  category: "history",
  difficulty: 50
},
{
  id: "history_0369",
  question: "Which country was the first to introduce a national system of old-age pensions in 1889 under Otto von Bismarck?",
  options: ["Germany", "France", "Britain", "Italy"],
  answer: "Germany",
  category: "history",
  difficulty: 50
},
{
  id: "history_0370",
  question: "Which American president signed the Social Security Act in 1935?",
  options: ["Franklin D. Roosevelt", "Herbert Hoover", "Harry Truman", "Dwight Eisenhower"],
  answer: "Franklin D. Roosevelt",
  category: "history",
  difficulty: 50
},
{
  id: "history_0371",
  question: "Which event in 1929 is associated with the beginning of the Great Depression?",
  options: ["Wall Street stock market crash", "Boston Tea Party", "Watergate scandal", "Suez Crisis"],
  answer: "Wall Street stock market crash",
  category: "history",
  difficulty: 50
},
{
  id: "history_0372",
  question: "Which American president introduced the New Deal in response to the Great Depression?",
  options: ["Franklin D. Roosevelt", "Abraham Lincoln", "John F. Kennedy", "Ronald Reagan"],
  answer: "Franklin D. Roosevelt",
  category: "history",
  difficulty: 50
},
{
  id: "history_0373",
  question: "Which global financial crisis began in 2008?",
  options: ["Global financial crisis", "Oil crisis of 1973", "Great Depression of 1929", "Asian financial crisis of 1997"],
  answer: "Global financial crisis",
  category: "history",
  difficulty: 50
},
{
  id: "history_0374",
  question: "Which country experienced a financial crisis that began with a collapse of its property and banking sector in 2008?",
  options: ["Iceland", "Brazil", "Australia", "Japan"],
  answer: "Iceland",
  category: "history",
  difficulty: 50
},
{
  id: "history_0375",
  question: "What agreement was adopted at the 2015 United Nations climate conference in France?",
  options: ["Paris Agreement", "Kyoto Protocol", "Montreal Protocol", "Geneva Convention"],
  answer: "Paris Agreement",
  category: "history",
  difficulty: 50
},
{
  id: "history_0376",
  question: "In which year was the Paris Climate Agreement adopted?",
  options: ["2005", "2010", "2015", "2020"],
  answer: "2015",
  category: "history",
  difficulty: 50
},
{
  id: "history_0377",
  question: "Which global health emergency was declared a pandemic by the World Health Organization in March 2020?",
  options: ["COVID-19", "Ebola", "SARS", "Zika"],
  answer: "COVID-19",
  category: "history",
  difficulty: 50
},
{
  id: "history_0378",
  question: "Which virus causes COVID-19?",
  options: ["SARS-CoV-2", "HIV", "Ebola virus", "Influenza A only"],
  answer: "SARS-CoV-2",
  category: "history",
  difficulty: 50
},
{
  id: "history_0379",
  question: "Which major world event caused many countries to close borders and restrict travel in 2020?",
  options: ["COVID-19 pandemic", "World War I", "Suez Crisis", "Great Depression"],
  answer: "COVID-19 pandemic",
  category: "history",
  difficulty: 50
},
{
  id: "history_0380",
  question: "Which country hosted the first Expo world's fair in 1851?",
  options: ["United Kingdom", "France", "United States", "Germany"],
  answer: "United Kingdom",
  category: "history",
  difficulty: 50
},
{
  id: "history_0381",
  question: "In which city was the Great Exhibition of 1851 held?",
  options: ["London", "Paris", "New York", "Berlin"],
  answer: "London",
  category: "history",
  difficulty: 50
},
{
  id: "history_0382",
  question: "Which famous building was constructed for the Great Exhibition of 1851 in London?",
  options: ["Crystal Palace", "Eiffel Tower", "Big Ben", "Tower Bridge"],
  answer: "Crystal Palace",
  category: "history",
  difficulty: 50
},
{
  id: "history_0383",
  question: "Which country hosted the 1889 World's Fair, where the Eiffel Tower was introduced?",
  options: ["France", "Germany", "Italy", "Spain"],
  answer: "France",
  category: "history",
  difficulty: 50
},
{
  id: "history_0384",
  question: "Which city is home to the Eiffel Tower?",
  options: ["Paris", "Rome", "Madrid", "Brussels"],
  answer: "Paris",
  category: "history",
  difficulty: 50
},
{
  id: "history_0385",
  question: "Which famous structure in New York was dedicated in 1886 as a symbol of friendship between France and the United States?",
  options: ["Statue of Liberty", "Empire State Building", "Brooklyn Bridge", "Lincoln Memorial"],
  answer: "Statue of Liberty",
  category: "history",
  difficulty: 50
},
{
  id: "history_0386",
  question: "Which country gave the Statue of Liberty to the United States?",
  options: ["France", "Britain", "Spain", "Italy"],
  answer: "France",
  category: "history",
  difficulty: 50
},
{
  id: "history_0387",
  question: "Which American president dedicated the Lincoln Memorial in 1922?",
  options: ["Warren G. Harding", "Woodrow Wilson", "Calvin Coolidge", "Franklin D. Roosevelt"],
  answer: "Warren G. Harding",
  category: "history",
  difficulty: 50
},
{
  id: "history_0388",
  question: "Which ancient structure was rediscovered by Hiram Bingham in 1911 and is located in Peru?",
  options: ["Machu Picchu", "Petra", "Tikal", "Angkor Wat"],
  answer: "Machu Picchu",
  category: "history",
  difficulty: 50
},
{
  id: "history_0389",
  question: "Which ancient Egyptian queen's tomb was discovered by archaeologists in the Valley of the Kings in 1922?",
  options: ["Nefertiti", "Tutankhamun", "Cleopatra", "Hatshepsut"],
  answer: "Tutankhamun",
  category: "history",
  difficulty: 50
},
{
  id: "history_0390",
  question: "Which ancient monument was rediscovered by archaeologists in the early twentieth century in present-day Iraq?",
  options: ["City of Ur", "Machu Picchu", "Petra", "Angkor Wat"],
  answer: "City of Ur",
  category: "history",
  difficulty: 50
},
{
  id: "history_0391",
  question: "Which city was famously divided into four occupation zones after World War II?",
  options: ["Berlin", "Rome", "Madrid", "Lisbon"],
  answer: "Berlin",
  category: "history",
  difficulty: 50
},
{
  id: "history_0392",
  question: "Which country hosted the first European Games in 2015?",
  options: ["Azerbaijan", "France", "Italy", "Germany"],
  answer: "Azerbaijan",
  category: "history",
  difficulty: 50
},
{
  id: "history_0393",
  question: "Which city hosted the first Asian Games in 1951?",
  options: ["New Delhi", "Tokyo", "Jakarta", "Bangkok"],
  answer: "New Delhi",
  category: "history",
  difficulty: 50
},
{
  id: "history_0394",
  question: "Which city hosted the first African Games in 1965?",
  options: ["Brazzaville", "Lagos", "Cairo", "Accra"],
  answer: "Brazzaville",
  category: "history",
  difficulty: 50
},
{
  id: "history_0395",
  question: "Which country hosted the first FIFA Women's World Cup in 1991?",
  options: ["China", "United States", "Sweden", "Germany"],
  answer: "China",
  category: "history",
  difficulty: 50
},
{
  id: "history_0396",
  question: "Which city hosted the first Commonwealth Games in 1930?",
  options: ["Hamilton", "London", "Sydney", "Delhi"],
  answer: "Hamilton",
  category: "history",
  difficulty: 50
},
{
  id: "history_0397",
  question: "Which country hosted the first Rugby World Cup in 1987 alongside Australia?",
  options: ["New Zealand", "South Africa", "England", "France"],
  answer: "New Zealand",
  category: "history",
  difficulty: 50
},
{
  id: "history_0398",
  question: "Which country hosted the first Cricket World Cup in 1975?",
  options: ["England", "Australia", "India", "West Indies"],
  answer: "England",
  category: "history",
  difficulty: 50
},
{
  id: "history_0399",
  question: "Which city hosted the first modern FIFA World Cup final in 1930?",
  options: ["Montevideo", "Buenos Aires", "Paris", "Rome"],
  answer: "Montevideo",
  category: "history",
  difficulty: 50
},
{
  id: "history_0400",
  question: "Which country hosted the first World Athletics Championships in 1983?",
  options: ["Finland", "United States", "Germany", "Japan"],
  answer: "Finland",
  category: "history",
  difficulty: 50
},


{
  question: "Which instrument has keys, pedals, and strings?",
  options: ["Guitar", "Piano", "Flute", "Drums"],
  answer: "Piano",
  category: "music"
},


{
  id: "music_0001",
  question: "Which Nigerian artist released the hit song 'African Queen'?",
  options: ["Wizkid", "2Baba", "Davido", "Flavour"],
  answer: "2Baba",
  category: "music",
  difficulty: 50
},
{
  id: "music_0002",
  question: "Which Nigerian musician is famous for pioneering the Afrobeat genre?",
  options: ["Fela Kuti", "Wizkid", "Olamide", "Patoranking"],
  answer: "Fela Kuti",
  category: "music",
  difficulty: 50
},
{
  id: "music_0003",
  question: "Which Nigerian singer collaborated with Tems on the hit song 'Essence'?",
  options: ["Burna Boy", "Davido", "Wizkid", "Rema"],
  answer: "Wizkid",
  category: "music",
  difficulty: 50
},
{
  id: "music_0004",
  question: "Who released the hit song 'Last Last'?",
  options: ["Davido", "Burna Boy", "Asake", "Omah Lay"],
  answer: "Burna Boy",
  category: "music",
  difficulty: 50
},
{
  id: "music_0005",
  question: "Which Nigerian singer released the international hit song 'Fall'?",
  options: ["Kizz Daniel", "Davido", "Rema", "Fireboy DML"],
  answer: "Davido",
  category: "music",
  difficulty: 50
},
{
  id: "music_0006",
  question: "Which Nigerian singer released 'Somebody's Son' featuring Brandy?",
  options: ["Simi", "Yemi Alade", "Tiwa Savage", "Tems"],
  answer: "Tiwa Savage",
  category: "music",
  difficulty: 50
},
{
  id: "music_0007",
  question: "Which Nigerian singer became widely known internationally for the song 'Johnny'?",
  options: ["Yemi Alade", "Tiwa Savage", "Simi", "Chidinma"],
  answer: "Yemi Alade",
  category: "music",
  difficulty: 50
},
{
  id: "music_0008",
  question: "Which Nigerian artist released the original song 'Calm Down'?",
  options: ["Rema", "Asake", "CKay", "BNXN"],
  answer: "Rema",
  category: "music",
  difficulty: 50
},
{
  id: "music_0009",
  question: "Who released the hit song 'Rush'?",
  options: ["Tems", "Ayra Starr", "Tyla", "Simi"],
  answer: "Ayra Starr",
  category: "music",
  difficulty: 50
},
{
  id: "music_0010",
  question: "Which Nigerian artist released the song 'Peru'?",
  options: ["Omah Lay", "Fireboy DML", "Rema", "Kizz Daniel"],
  answer: "Fireboy DML",
  category: "music",
  difficulty: 50
},
{
  id: "music_0011",
  question: "Who released the popular song 'Soso'?",
  options: ["Omah Lay", "Asake", "Davido", "Joeboy"],
  answer: "Omah Lay",
  category: "music",
  difficulty: 50
},
{
  id: "music_0012",
  question: "Which Nigerian singer is known for the song 'Nwa Baby (Ashawo Remix)'?",
  options: ["Flavour", "P-Square", "Runtown", "Mr Eazi"],
  answer: "Flavour",
  category: "music",
  difficulty: 50
},
{
  id: "music_0013",
  question: "Which Ghanaian rapper featured on Patoranking's song 'No Kissing Baby'?",
  options: ["Stonebwoy", "Sarkodie", "Shatta Wale", "Black Sherif"],
  answer: "Sarkodie",
  category: "music",
  difficulty: 50
},
{
  id: "music_0014",
  question: "Which South African singer released the global hit song 'Water'?",
  options: ["Sho Madjozi", "Tyla", "Nomcebo Zikode", "Miriam Makeba"],
  answer: "Tyla",
  category: "music",
  difficulty: 50
},
{
  id: "music_0015",
  question: "Which Nigerian singer released the song 'Free Mind'?",
  options: ["Ayra Starr", "Tems", "Tiwa Savage", "Yemi Alade"],
  answer: "Tems",
  category: "music",
  difficulty: 50
},
{
  id: "music_0016",
  question: "Which Nigerian artist is known for the international hit 'Love Nwantiti'?",
  options: ["CKay", "Wizkid", "Rema", "Fireboy DML"],
  answer: "CKay",
  category: "music",
  difficulty: 50
},
{
  id: "music_0017",
  question: "Which Nigerian artist released the hit song 'Lonely at the Top'?",
  options: ["Olamide", "Asake", "Davido", "Burna Boy"],
  answer: "Asake",
  category: "music",
  difficulty: 50
},
{
  id: "music_0018",
  question: "Which Ghanaian artist released the hit song 'Kwaku the Traveller'?",
  options: ["Sarkodie", "Black Sherif", "Stonebwoy", "King Promise"],
  answer: "Black Sherif",
  category: "music",
  difficulty: 50
},
{
  id: "music_0019",
  question: "Which Ghanaian rapper released the song 'Adonai' featuring Castro?",
  options: ["Sarkodie", "Shatta Wale", "Kweku Flick", "Kwesi Arthur"],
  answer: "Sarkodie",
  category: "music",
  difficulty: 50
},
{
  id: "music_0020",
  question: "Which Nigerian rapper released the song 'Wo!!'?",
  options: ["Phyno", "Olamide", "MI Abaga", "Ice Prince"],
  answer: "Olamide",
  category: "music",
  difficulty: 50
},
{
  id: "music_0021",
  question: "Which artist is widely known by the nickname 'King of Pop'?",
  options: ["Elvis Presley", "Michael Jackson", "Prince", "Stevie Wonder"],
  answer: "Michael Jackson",
  category: "music",
  difficulty: 50
},
{
  id: "music_0022",
  question: "Which singer was the lead vocalist of the rock band Queen?",
  options: ["Freddie Mercury", "Mick Jagger", "David Bowie", "Elton John"],
  answer: "Freddie Mercury",
  category: "music",
  difficulty: 50
},
{
  id: "music_0023",
  question: "Before her solo career, Beyoncé was a member of which girl group?",
  options: ["TLC", "Destiny's Child", "The Pussycat Dolls", "Spice Girls"],
  answer: "Destiny's Child",
  category: "music",
  difficulty: 50
},
{
  id: "music_0024",
  question: "Which singer released the song 'Love Story' in 2008?",
  options: ["Taylor Swift", "Katy Perry", "Miley Cyrus", "Selena Gomez"],
  answer: "Taylor Swift",
  category: "music",
  difficulty: 50
},
{
  id: "music_0025",
  question: "Which British singer released the hit song 'Hello' in 2015?",
  options: ["Dua Lipa", "Adele", "Jessie J", "Leona Lewis"],
  answer: "Adele",
  category: "music",
  difficulty: 50
},
{
  id: "music_0026",
  question: "Which singer released the hit song 'Umbrella' featuring Jay-Z?",
  options: ["Beyoncé", "Rihanna", "Alicia Keys", "Jennifer Lopez"],
  answer: "Rihanna",
  category: "music",
  difficulty: 50
},
{
  id: "music_0027",
  question: "Who released the song 'Shape of You' in 2017?",
  options: ["Sam Smith", "Ed Sheeran", "Shawn Mendes", "Justin Timberlake"],
  answer: "Ed Sheeran",
  category: "music",
  difficulty: 50
},
{
  id: "music_0028",
  question: "Which Canadian rapper released the hit song 'God's Plan'?",
  options: ["Drake", "The Weeknd", "Justin Bieber", "Shawn Mendes"],
  answer: "Drake",
  category: "music",
  difficulty: 50
},
{
  id: "music_0029",
  question: "What is the real name of the rapper Eminem?",
  options: ["Marshall Bruce Mathers III", "Curtis James Jackson III", "Calvin Cordozar Broadus Jr.", "Shawn Corey Carter"],
  answer: "Marshall Bruce Mathers III",
  category: "music",
  difficulty: 50
},
{
  id: "music_0030",
  question: "Which Jamaican singer is famous for reggae songs such as 'Three Little Birds'?",
  options: ["Bob Marley", "Sean Paul", "Shaggy", "Jimmy Cliff"],
  answer: "Bob Marley",
  category: "music",
  difficulty: 50
},
{
  id: "music_0031",
  question: "Which Colombian singer recorded the hit song 'Hips Don't Lie' with Wyclef Jean?",
  options: ["Shakira", "Karol G", "Jennifer Lopez", "Rosalía"],
  answer: "Shakira",
  category: "music",
  difficulty: 50
},
{
  id: "music_0032",
  question: "Which American singer released the hit song 'Poker Face'?",
  options: ["Lady Gaga", "Madonna", "Katy Perry", "Britney Spears"],
  answer: "Lady Gaga",
  category: "music",
  difficulty: 50
},
{
  id: "music_0033",
  question: "Who released the song 'Just the Way You Are' in 2010?",
  options: ["Bruno Mars", "Justin Bieber", "Jason Derulo", "Ne-Yo"],
  answer: "Bruno Mars",
  category: "music",
  difficulty: 50
},
{
  id: "music_0034",
  question: "Which Canadian singer released the hit song 'Blinding Lights'?",
  options: ["Drake", "The Weeknd", "Justin Bieber", "Michael Bublé"],
  answer: "The Weeknd",
  category: "music",
  difficulty: 50
},
{
  id: "music_0035",
  question: "Which American singer released the song '7 rings'?",
  options: ["Ariana Grande", "Selena Gomez", "Demi Lovato", "Miley Cyrus"],
  answer: "Ariana Grande",
  category: "music",
  difficulty: 50
},
{
  id: "music_0036",
  question: "Which Canadian singer released the hit song 'Sorry' in 2015?",
  options: ["Shawn Mendes", "Drake", "Justin Bieber", "The Weeknd"],
  answer: "Justin Bieber",
  category: "music",
  difficulty: 50
},
{
  id: "music_0037",
  question: "Who performed the famous 1992 recording of 'I Will Always Love You' for The Bodyguard soundtrack?",
  options: ["Dolly Parton", "Whitney Houston", "Celine Dion", "Mariah Carey"],
  answer: "Whitney Houston",
  category: "music",
  difficulty: 50
},
{
  id: "music_0038",
  question: "Which British musician released the song 'Rocket Man'?",
  options: ["Elton John", "Paul McCartney", "George Michael", "David Bowie"],
  answer: "Elton John",
  category: "music",
  difficulty: 50
},
{
  id: "music_0039",
  question: "Which artist released the song and album 'Purple Rain'?",
  options: ["Prince", "Michael Jackson", "Stevie Wonder", "Lionel Richie"],
  answer: "Prince",
  category: "music",
  difficulty: 50
},
{
  id: "music_0040",
  question: "Which legendary singer recorded the song 'Jailhouse Rock'?",
  options: ["Chuck Berry", "Elvis Presley", "Little Richard", "Jerry Lee Lewis"],
  answer: "Elvis Presley",
  category: "music",
  difficulty: 50
},
{
  id: "music_0041",
  question: "Which British band released the famous song 'Hey Jude'?",
  options: ["The Rolling Stones", "The Beatles", "Queen", "The Who"],
  answer: "The Beatles",
  category: "music",
  difficulty: 50
},
{
  id: "music_0042",
  question: "Which British band released the song 'Viva la Vida'?",
  options: ["Coldplay", "Oasis", "Radiohead", "Arctic Monkeys"],
  answer: "Coldplay",
  category: "music",
  difficulty: 50
},
{
  id: "music_0043",
  question: "Which American rock band released 'Smells Like Teen Spirit'?",
  options: ["Nirvana", "Metallica", "Green Day", "Linkin Park"],
  answer: "Nirvana",
  category: "music",
  difficulty: 50
},
{
  id: "music_0044",
  question: "Bono is best known as the lead singer of which band?",
  options: ["U2", "Queen", "Coldplay", "Oasis"],
  answer: "U2",
  category: "music",
  difficulty: 50
},
{
  id: "music_0045",
  question: "BTS is a music group from which country?",
  options: ["Japan", "South Korea", "China", "Thailand"],
  answer: "South Korea",
  category: "music",
  difficulty: 50
},
{
  id: "music_0046",
  question: "Which South Korean artist became globally famous for the song 'Gangnam Style'?",
  options: ["Psy", "G-Dragon", "Rain", "Jay Park"],
  answer: "Psy",
  category: "music",
  difficulty: 50
},
{
  id: "music_0047",
  question: "Which Canadian singer performed 'My Heart Will Go On' from the film Titanic?",
  options: ["Celine Dion", "Alanis Morissette", "Shania Twain", "Avril Lavigne"],
  answer: "Celine Dion",
  category: "music",
  difficulty: 50
},
{
  id: "music_0048",
  question: "Which two artists performed the global hit song 'Despacito'?",
  options: ["Luis Fonsi and Daddy Yankee", "Enrique Iglesias and Ricky Martin", "Maluma and J Balvin", "Shakira and Juanes"],
  answer: "Luis Fonsi and Daddy Yankee",
  category: "music",
  difficulty: 50
},
{
  id: "music_0049",
  question: "Who originally wrote and recorded the country song 'I Will Always Love You'?",
  options: ["Dolly Parton", "Taylor Swift", "Reba McEntire", "Shania Twain"],
  answer: "Dolly Parton",
  category: "music",
  difficulty: 50
},
{
  id: "music_0050",
  question: "Which Swedish pop group released the hit song 'Dancing Queen'?",
  options: ["Roxette", "ABBA", "Ace of Base", "A-ha"],
  answer: "ABBA",
  category: "music",
  difficulty: 50
},


{
  id: "music_0051",
  question: "What is Wizkid's real name?",
  options: ["Ayodeji Ibrahim Balogun", "David Adedeji Adeleke", "Damini Ebunoluwa Ogulu", "Oluwatobiloba Daniel Anidugbe"],
  answer: "Ayodeji Ibrahim Balogun",
  category: "music",
  difficulty: 50
},
{
  id: "music_0052",
  question: "What is Davido's full name?",
  options: ["David Adedeji Adeleke", "Ayodeji Ibrahim Balogun", "Damini Ogulu", "Chibuzor Azubuike"],
  answer: "David Adedeji Adeleke",
  category: "music",
  difficulty: 50
},
{
  id: "music_0053",
  question: "What is Burna Boy's real name?",
  options: ["Damini Ebunoluwa Ogulu", "David Adeleke", "Michael Collins Ajereh", "Ahmed Ololade"],
  answer: "Damini Ebunoluwa Ogulu",
  category: "music",
  difficulty: 50
},
{
  id: "music_0054",
  question: "What is Rema's real first and last name?",
  options: ["Divine Ikubor", "Olamide Adedeji", "Temilade Openiyi", "John Ighodaro"],
  answer: "Divine Ikubor",
  category: "music",
  difficulty: 50
},
{
  id: "music_0055",
  question: "What is Tems' full name?",
  options: ["Temilade Openiyi", "Oyinkansola Aderibigbe", "Simisola Kosoko", "Teniola Apata"],
  answer: "Temilade Openiyi",
  category: "music",
  difficulty: 50
},
{
  id: "music_0056",
  question: "What is Ayra Starr's real name?",
  options: ["Oyinkansola Sarah Aderibigbe", "Temilade Openiyi", "Teniola Apata", "Chidinma Ekile"],
  answer: "Oyinkansola Sarah Aderibigbe",
  category: "music",
  difficulty: 50
},
{
  id: "music_0057",
  question: "What is Olamide's surname?",
  options: ["Adedeji", "Okoli", "Adeleke", "Idibia"],
  answer: "Adedeji",
  category: "music",
  difficulty: 50
},
{
  id: "music_0058",
  question: "What is Asake's real first name?",
  options: ["Ahmed", "Olamide", "David", "Ayodeji"],
  answer: "Ahmed",
  category: "music",
  difficulty: 50
},
{
  id: "music_0059",
  question: "What is Kizz Daniel's birth name?",
  options: ["Oluwatobiloba Daniel Anidugbe", "Oluwatosin Ajibade", "Chinedu Okoli", "John Ighodaro"],
  answer: "Oluwatobiloba Daniel Anidugbe",
  category: "music",
  difficulty: 50
},
{
  id: "music_0060",
  question: "What is Mr Eazi's real name?",
  options: ["Oluwatosin Ajibade", "Olamide Adedeji", "Daniel Anidugbe", "Innocent Idibia"],
  answer: "Oluwatosin Ajibade",
  category: "music",
  difficulty: 50
},
{
  id: "music_0061",
  question: "What is Phyno's real name?",
  options: ["Chibuzor Nelson Azubuike", "Chinedu Okoli", "Michael Collins Ajereh", "Ahmed Ololade"],
  answer: "Chibuzor Nelson Azubuike",
  category: "music",
  difficulty: 50
},
{
  id: "music_0062",
  question: "What is Flavour's real name?",
  options: ["Chinedu Okoli", "Chibuzor Azubuike", "John Ighodaro", "Olamide Adedeji"],
  answer: "Chinedu Okoli",
  category: "music",
  difficulty: 50
},
{
  id: "music_0063",
  question: "Which brothers make up the Nigerian music duo P-Square?",
  options: ["Peter and Paul Okoye", "Wizkid and Banky W", "Dbanj and Don Jazzy", "Bruno and John Okoye"],
  answer: "Peter and Paul Okoye",
  category: "music",
  difficulty: 50
},
{
  id: "music_0064",
  question: "What is D'banj's real name?",
  options: ["Oladapo Daniel Oyebanjo", "Michael Collins Ajereh", "Oluwatosin Ajibade", "David Adeleke"],
  answer: "Oladapo Daniel Oyebanjo",
  category: "music",
  difficulty: 50
},
{
  id: "music_0065",
  question: "What is Don Jazzy's real name?",
  options: ["Michael Collins Ajereh", "Oladapo Oyebanjo", "Ayodeji Balogun", "Chinedu Okoli"],
  answer: "Michael Collins Ajereh",
  category: "music",
  difficulty: 50
},
{
  id: "music_0066",
  question: "What is 2Baba's birth name?",
  options: ["Innocent Ujah Idibia", "David Adedeji Adeleke", "Damini Ogulu", "Olamide Adedeji"],
  answer: "Innocent Ujah Idibia",
  category: "music",
  difficulty: 50
},
{
  id: "music_0067",
  question: "What is Teni's full first name?",
  options: ["Teniola", "Temilade", "Simisola", "Oyinkansola"],
  answer: "Teniola",
  category: "music",
  difficulty: 50
},
{
  id: "music_0068",
  question: "What is Simi's full first name?",
  options: ["Simisola", "Simiola", "Temisola", "Teniola"],
  answer: "Simisola",
  category: "music",
  difficulty: 50
},
{
  id: "music_0069",
  question: "What is Johnny Drille's real name?",
  options: ["John Ighodaro", "John Okafor", "Joseph Ighodaro", "James Ighodaro"],
  answer: "John Ighodaro",
  category: "music",
  difficulty: 50
},
{
  id: "music_0070",
  question: "Which Nigerian singer is popularly known as DMW's leader?",
  options: ["Davido", "Wizkid", "Burna Boy", "Rema"],
  answer: "Davido",
  category: "music",
  difficulty: 50
},
{
  id: "music_0071",
  question: "Which Wizkid album was released in 2020?",
  options: ["Made in Lagos", "Sounds from the Other Side", "Ayo", "Superstar"],
  answer: "Made in Lagos",
  category: "music",
  difficulty: 50
},
{
  id: "music_0072",
  question: "Which Burna Boy album was released in 2019?",
  options: ["African Giant", "Twice as Tall", "Love, Damini", "I Told Them..."],
  answer: "African Giant",
  category: "music",
  difficulty: 50
},
{
  id: "music_0073",
  question: "Which Rema album was released in 2022?",
  options: ["Rave & Roses", "Rema", "HEIS", "Rave"],
  answer: "Rave & Roses",
  category: "music",
  difficulty: 50
},
{
  id: "music_0074",
  question: "Which Davido album was released in 2023?",
  options: ["Timeless", "A Good Time", "Omo Baba Olowo", "A Better Time"],
  answer: "Timeless",
  category: "music",
  difficulty: 50
},
{
  id: "music_0075",
  question: "Which Tiwa Savage album was released in 2020?",
  options: ["Celia", "R.E.D", "Once Upon a Time", "Water & Garri"],
  answer: "Celia",
  category: "music",
  difficulty: 50
},
{
  id: "music_0076",
  question: "Which Ayra Starr album was released in 2021?",
  options: ["19 & Dangerous", "The Year I Turned 21", "Celestial Being", "Water & Garri"],
  answer: "19 & Dangerous",
  category: "music",
  difficulty: 50
},
{
  id: "music_0077",
  question: "Which Fireboy DML album was released in 2020?",
  options: ["Apollo", "Laughter, Tears & Goosebumps", "Playboy", "Adedamola"],
  answer: "Apollo",
  category: "music",
  difficulty: 50
},
{
  id: "music_0078",
  question: "Which Olamide album was released in 2013?",
  options: ["Baddest Guy Ever Liveth", "Carpe Diem", "UY Scuti", "Lagos Nawa"],
  answer: "Baddest Guy Ever Liveth",
  category: "music",
  difficulty: 50
},
{
  id: "music_0079",
  question: "Which Asake album was released in 2022?",
  options: ["Mr Money With The Vibe", "Work of Art", "Lungu Boy", "Ololade Asake"],
  answer: "Mr Money With The Vibe",
  category: "music",
  difficulty: 50
},
{
  id: "music_0080",
  question: "Which Yemi Alade album was released in 2014?",
  options: ["King of Queens", "Mama Africa", "Woman of Steel", "Empress"],
  answer: "King of Queens",
  category: "music",
  difficulty: 50
},
{
  id: "music_0081",
  question: "Which Korean music genre became internationally popular through groups such as BTS and BLACKPINK?",
  options: ["K-pop", "J-pop", "Afrobeats", "Reggae"],
  answer: "K-pop",
  category: "music",
  difficulty: 50
},
{
  id: "music_0082",
  question: "What is the real name of DJ and producer Calvin Harris?",
  options: ["Adam Richard Wiles", "Calvin James Harris", "Adam John Harris", "David Wiles"],
  answer: "Adam Richard Wiles",
  category: "music",
  difficulty: 50
},
{
  id: "music_0083",
  question: "What is The Weeknd's real name?",
  options: ["Abel Tesfaye", "Jordan Carter", "Austin Post", "Donald Glover"],
  answer: "Abel Tesfaye",
  category: "music",
  difficulty: 50
},
{
  id: "music_0084",
  question: "What is Lady Gaga's birth name?",
  options: ["Stefani Germanotta", "Robyn Fenty", "Ariana Grande", "Katheryn Hudson"],
  answer: "Stefani Germanotta",
  category: "music",
  difficulty: 50
},
{
  id: "music_0085",
  question: "What is Bruno Mars' birth name?",
  options: ["Peter Gene Hernandez", "Peter Michael Mars", "Bruno Peter Hernandez", "Philip Lawrence"],
  answer: "Peter Gene Hernandez",
  category: "music",
  difficulty: 50
},
{
  id: "music_0086",
  question: "In which English town was Ed Sheeran born?",
  options: ["Halifax", "Manchester", "Liverpool", "Birmingham"],
  answer: "Halifax",
  category: "music",
  difficulty: 50
},
{
  id: "music_0087",
  question: "What is Adele's full name?",
  options: ["Adele Laurie Blue Adkins", "Adele Marie Brown", "Adele Louise Smith", "Adele Jane White"],
  answer: "Adele Laurie Blue Adkins",
  category: "music",
  difficulty: 50
},
{
  id: "music_0088",
  question: "In which Caribbean country was Rihanna born?",
  options: ["Barbados", "Jamaica", "Trinidad and Tobago", "Bahamas"],
  answer: "Barbados",
  category: "music",
  difficulty: 50
},
{
  id: "music_0089",
  question: "In which Colombian city was Shakira born?",
  options: ["Bogotá", "Medellín", "Barranquilla", "Cali"],
  answer: "Barranquilla",
  category: "music",
  difficulty: 50
},
{
  id: "music_0090",
  question: "What is Snoop Dogg's birth name?",
  options: ["Calvin Cordozar Broadus Jr.", "Curtis James Jackson III", "Shawn Corey Carter", "Marshall Bruce Mathers III"],
  answer: "Calvin Cordozar Broadus Jr.",
  category: "music",
  difficulty: 50
},
{
  id: "music_0091",
  question: "What is Jay-Z's real name?",
  options: ["Shawn Corey Carter", "Curtis Jackson", "Calvin Broadus", "Kendrick Duckworth"],
  answer: "Shawn Corey Carter",
  category: "music",
  difficulty: 50
},
{
  id: "music_0092",
  question: "What is the real name of rapper 50 Cent?",
  options: ["Curtis James Jackson III", "Shawn Carter", "Calvin Broadus", "Marshall Mathers"],
  answer: "Curtis James Jackson III",
  category: "music",
  difficulty: 50
},
{
  id: "music_0093",
  question: "What does the stage name Eminem come from?",
  options: ["The pronunciation of his initials M and M", "His childhood street name", "His favourite football team", "His father's surname"],
  answer: "The pronunciation of his initials M and M",
  category: "music",
  difficulty: 50
},
{
  id: "music_0094",
  question: "What is Post Malone's birth name?",
  options: ["Austin Richard Post", "Austin Malone Smith", "Post Austin Williams", "Richard Austin Malone"],
  answer: "Austin Richard Post",
  category: "music",
  difficulty: 50
},
{
  id: "music_0095",
  question: "What is Doja Cat's birth name?",
  options: ["Amala Ratna Zandile Dlamini", "Amara Jade Williams", "Dlamini Amala Smith", "Ratna Amala Jones"],
  answer: "Amala Ratna Zandile Dlamini",
  category: "music",
  difficulty: 50
},
{
  id: "music_0096",
  question: "Which member of Billie Eilish's family frequently co-writes and produces her music?",
  options: ["Her brother Finneas", "Her uncle Brian", "Her cousin James", "Her father Patrick"],
  answer: "Her brother Finneas",
  category: "music",
  difficulty: 50
},
{
  id: "music_0097",
  question: "Which American singer released the album SOUR in 2021?",
  options: ["Olivia Rodrigo", "Billie Eilish", "Sabrina Carpenter", "Tate McRae"],
  answer: "Olivia Rodrigo",
  category: "music",
  difficulty: 50
},
{
  id: "music_0098",
  question: "Which boy band did Harry Styles belong to before beginning his solo career?",
  options: ["One Direction", "Westlife", "The Wanted", "Take That"],
  answer: "One Direction",
  category: "music",
  difficulty: 50
},
{
  id: "music_0099",
  question: "Which boy band was Zayn Malik a member of?",
  options: ["One Direction", "Backstreet Boys", "NSYNC", "Blue"],
  answer: "One Direction",
  category: "music",
  difficulty: 50
},
{
  id: "music_0100",
  question: "What does the original Korean name Bangtan Sonyeondan, used by BTS, mean in English?",
  options: ["Bulletproof Boy Scouts", "Beautiful Young Singers", "Brave Korean Stars", "Beyond The Stage"],
  answer: "Bulletproof Boy Scouts",
  category: "music",
  difficulty: 50
},

{
  id: "music_0101",
  category: "music",
  difficulty: 50,
  question: "In which German city was composer Ludwig van Beethoven born?",
  options: ["Berlin", "Bonn", "Hamburg", "Munich"],
  answer: "Bonn"
},
{
  id: "music_0102",
  category: "music",
  difficulty: 50,
  question: "Which composer wrote the famous violin concertos known as The Four Seasons?",
  options: ["Johann Sebastian Bach", "Antonio Vivaldi", "Wolfgang Amadeus Mozart", "Frédéric Chopin"],
  answer: "Antonio Vivaldi"
},
{
  id: "music_0103",
  category: "music",
  difficulty: 50,
  question: "Who composed the Moonlight Sonata?",
  options: ["Ludwig van Beethoven", "Franz Schubert", "Claude Debussy", "Joseph Haydn"],
  answer: "Ludwig van Beethoven"
},
{
  id: "music_0104",
  category: "music",
  difficulty: 50,
  question: "Who composed the ballet music for The Nutcracker?",
  options: ["Pyotr Ilyich Tchaikovsky", "Igor Stravinsky", "Sergei Rachmaninoff", "Richard Wagner"],
  answer: "Pyotr Ilyich Tchaikovsky"
},
{
  id: "music_0105",
  category: "music",
  difficulty: 50,
  question: "Which composer wrote the ballet Swan Lake?",
  options: ["Frédéric Chopin", "Pyotr Ilyich Tchaikovsky", "George Frideric Handel", "Gustav Mahler"],
  answer: "Pyotr Ilyich Tchaikovsky"
},
{
  id: "music_0106",
  category: "music",
  difficulty: 50,
  question: "Who composed Eine kleine Nachtmusik?",
  options: ["Wolfgang Amadeus Mozart", "Johann Strauss II", "Antonio Vivaldi", "Felix Mendelssohn"],
  answer: "Wolfgang Amadeus Mozart"
},
{
  id: "music_0107",
  category: "music",
  difficulty: 50,
  question: "Which composer died before completing his Requiem in 1791?",
  options: ["Joseph Haydn", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Johann Sebastian Bach"],
  answer: "Wolfgang Amadeus Mozart"
},
{
  id: "music_0108",
  category: "music",
  difficulty: 50,
  question: "Who composed the Brandenburg Concertos?",
  options: ["George Frideric Handel", "Johann Sebastian Bach", "Antonio Vivaldi", "Joseph Haydn"],
  answer: "Johann Sebastian Bach"
},
{
  id: "music_0109",
  category: "music",
  difficulty: 50,
  question: "Which composer created the oratorio Messiah?",
  options: ["George Frideric Handel", "Henry Purcell", "Felix Mendelssohn", "Franz Schubert"],
  answer: "George Frideric Handel"
},
{
  id: "music_0110",
  category: "music",
  difficulty: 50,
  question: "Who composed the orchestral piece Boléro?",
  options: ["Maurice Ravel", "Claude Debussy", "Camille Saint-Saëns", "Erik Satie"],
  answer: "Maurice Ravel"
},
{
  id: "music_0111",
  category: "music",
  difficulty: 50,
  question: "Which French composer wrote the opera Carmen?",
  options: ["Jules Massenet", "Georges Bizet", "Charles Gounod", "Hector Berlioz"],
  answer: "Georges Bizet"
},
{
  id: "music_0112",
  category: "music",
  difficulty: 50,
  question: "Which composer is associated with the opera cycle The Ring of the Nibelung?",
  options: ["Giuseppe Verdi", "Richard Wagner", "Giacomo Puccini", "Richard Strauss"],
  answer: "Richard Wagner"
},
{
  id: "music_0113",
  category: "music",
  difficulty: 50,
  question: "Who composed the piano piece Clair de Lune?",
  options: ["Claude Debussy", "Maurice Ravel", "Frédéric Chopin", "Robert Schumann"],
  answer: "Claude Debussy"
},
{
  id: "music_0114",
  category: "music",
  difficulty: 50,
  question: "Which Italian composer wrote the opera La Traviata?",
  options: ["Gioachino Rossini", "Giuseppe Verdi", "Giacomo Puccini", "Gaetano Donizetti"],
  answer: "Giuseppe Verdi"
},
{
  id: "music_0115",
  category: "music",
  difficulty: 50,
  question: "Who composed the comic opera The Barber of Seville?",
  options: ["Gioachino Rossini", "Giuseppe Verdi", "Richard Wagner", "Georges Bizet"],
  answer: "Gioachino Rossini"
},
{
  id: "music_0116",
  category: "music",
  difficulty: 50,
  question: "The famous orchestral piece Ride of the Valkyries comes from a work by which composer?",
  options: ["Richard Wagner", "Johannes Brahms", "Gustav Holst", "Edvard Grieg"],
  answer: "Richard Wagner"
},
{
  id: "music_0117",
  category: "music",
  difficulty: 50,
  question: "The Hallelujah Chorus is part of which famous oratorio?",
  options: ["Messiah", "The Creation", "Elijah", "Judas Maccabaeus"],
  answer: "Messiah"
},
{
  id: "music_0118",
  category: "music",
  difficulty: 50,
  question: "Who composed the well-known Canon in D?",
  options: ["Johann Pachelbel", "Johann Sebastian Bach", "Antonio Vivaldi", "George Frideric Handel"],
  answer: "Johann Pachelbel"
},
{
  id: "music_0119",
  category: "music",
  difficulty: 50,
  question: "Which French composer wrote the piano pieces called Gymnopédies?",
  options: ["Erik Satie", "Claude Debussy", "Maurice Ravel", "Gabriel Fauré"],
  answer: "Erik Satie"
},
{
  id: "music_0120",
  category: "music",
  difficulty: 50,
  question: "Who composed Rhapsody in Blue?",
  options: ["George Gershwin", "Leonard Bernstein", "Aaron Copland", "Scott Joplin"],
  answer: "George Gershwin"
},
{
  id: "music_0121",
  category: "music",
  difficulty: 50,
  question: "Which composer wrote the orchestral suite The Planets?",
  options: ["Gustav Holst", "Edward Elgar", "Ralph Vaughan Williams", "Benjamin Britten"],
  answer: "Gustav Holst"
},
{
  id: "music_0122",
  category: "music",
  difficulty: 50,
  question: "Who composed the famous opera The Magic Flute?",
  options: ["Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Christoph Willibald Gluck", "Joseph Haydn"],
  answer: "Wolfgang Amadeus Mozart"
},
{
  id: "music_0123",
  category: "music",
  difficulty: 50,
  question: "Which composer wrote the symphony known as the New World Symphony?",
  options: ["Antonín Dvořák", "Gustav Mahler", "Franz Liszt", "Hector Berlioz"],
  answer: "Antonín Dvořák"
},
{
  id: "music_0124",
  category: "music",
  difficulty: 50,
  question: "Who composed the opera Madama Butterfly?",
  options: ["Giacomo Puccini", "Giuseppe Verdi", "Gioachino Rossini", "Georges Bizet"],
  answer: "Giacomo Puccini"
},
{
  id: "music_0125",
  category: "music",
  difficulty: 50,
  question: "Which composer wrote the piano piece Für Elise?",
  options: ["Ludwig van Beethoven", "Wolfgang Amadeus Mozart", "Frédéric Chopin", "Franz Liszt"],
  answer: "Ludwig van Beethoven"
},
{
  id: "music_0126",
  category: "music",
  difficulty: 50,
  question: "Which instrument family does the violin belong to?",
  options: ["String", "Brass", "Woodwind", "Percussion"],
  answer: "String"
},
{
  id: "music_0127",
  category: "music",
  difficulty: 50,
  question: "How many strings does a standard modern violin have?",
  options: ["Four", "Five", "Six", "Seven"],
  answer: "Four"
},
{
  id: "music_0128",
  category: "music",
  difficulty: 50,
  question: "Which instrument is usually played with a bow and is larger than a violin?",
  options: ["Viola", "Piccolo", "Clarinet", "Trumpet"],
  answer: "Viola"
},
{
  id: "music_0129",
  category: "music",
  difficulty: 50,
  question: "Which instrument is the largest and lowest-pitched member of the standard violin family?",
  options: ["Double bass", "Violin", "Viola", "Cello"],
  answer: "Double bass"
},
{
  id: "music_0130",
  category: "music",
  difficulty: 50,
  question: "Which brass instrument is commonly associated with a slide?",
  options: ["Trombone", "Trumpet", "French horn", "Tuba"],
  answer: "Trombone"
},
{
  id: "music_0131",
  category: "music",
  difficulty: 50,
  question: "Which instrument is played by blowing air across a hole rather than through a mouthpiece?",
  options: ["Flute", "Oboe", "Bassoon", "Clarinet"],
  answer: "Flute"
},
{
  id: "music_0132",
  category: "music",
  difficulty: 50,
  question: "Which woodwind instrument uses a double reed?",
  options: ["Oboe", "Flute", "Clarinet", "Saxophone"],
  answer: "Oboe"
},
{
  id: "music_0133",
  category: "music",
  difficulty: 50,
  question: "Which instrument is known for its deep, low brass sound?",
  options: ["Tuba", "Piccolo", "Trumpet", "Flute"],
  answer: "Tuba"
},
{
  id: "music_0134",
  category: "music",
  difficulty: 50,
  question: "Which percussion instrument is commonly played with two sticks and has a deep, resonant sound?",
  options: ["Bass drum", "Triangle", "Tambourine", "Castanets"],
  answer: "Bass drum"
},
{
  id: "music_0135",
  category: "music",
  difficulty: 50,
  question: "Which keyboard instrument produces sound when hammers strike strings?",
  options: ["Piano", "Organ", "Synthesizer", "Accordion"],
  answer: "Piano"
},
{
  id: "music_0136",
  category: "music",
  difficulty: 50,
  question: "Which instrument typically has 88 keys on a full-size modern model?",
  options: ["Piano", "Harpsichord", "Xylophone", "Accordion"],
  answer: "Piano"
},
{
  id: "music_0137",
  category: "music",
  difficulty: 50,
  question: "Which instrument is commonly played using a bow and has four strings tuned in fifths?",
  options: ["Cello", "Harp", "Banjo", "Guitar"],
  answer: "Cello"
},
{
  id: "music_0138",
  category: "music",
  difficulty: 50,
  question: "Which instrument is traditionally associated with Scottish folk music and is played using a bag of air?",
  options: ["Bagpipes", "Accordion", "Harmonica", "Recorder"],
  answer: "Bagpipes"
},
{
  id: "music_0139",
  category: "music",
  difficulty: 50,
  question: "Which instrument is played by plucking strings and is often associated with flamenco music?",
  options: ["Classical guitar", "Trombone", "Oboe", "Timpani"],
  answer: "Classical guitar"
},
{
  id: "music_0140",
  category: "music",
  difficulty: 50,
  question: "Which instrument is commonly used to play melodies in jazz and has a single-reed mouthpiece?",
  options: ["Saxophone", "Tuba", "Timpani", "Harp"],
  answer: "Saxophone"
},
{
  id: "music_0141",
  category: "music",
  difficulty: 50,
  question: "Which instrument is played by pressing keys while squeezing bellows?",
  options: ["Accordion", "Piano", "Electric guitar", "Marimba"],
  answer: "Accordion"
},
{
  id: "music_0142",
  category: "music",
  difficulty: 50,
  question: "Which percussion instrument consists of metal bars arranged by pitch?",
  options: ["Glockenspiel", "Snare drum", "Cymbals", "Maracas"],
  answer: "Glockenspiel"
},
{
  id: "music_0143",
  category: "music",
  difficulty: 50,
  question: "Which instrument is a small flute that plays very high notes?",
  options: ["Piccolo", "Bassoon", "Tuba", "Cello"],
  answer: "Piccolo"
},
{
  id: "music_0144",
  category: "music",
  difficulty: 50,
  question: "Which instrument is commonly used to keep the beat in a rock band?",
  options: ["Drum kit", "Oboe", "Harp", "French horn"],
  answer: "Drum kit"
},
{
  id: "music_0145",
  category: "music",
  difficulty: 50,
  question: "Which instrument has a long neck and is commonly associated with bluegrass music?",
  options: ["Banjo", "Cello", "Flute", "Trombone"],
  answer: "Banjo"
},
{
  id: "music_0146",
  category: "music",
  difficulty: 50,
  question: "What is the name of the small hand-held percussion instrument filled with beads or seeds?",
  options: ["Maraca", "Timpani", "Bass drum", "Oboe"],
  answer: "Maraca"
},
{
  id: "music_0147",
  category: "music",
  difficulty: 50,
  question: "Which instrument is traditionally played by striking wooden bars with mallets?",
  options: ["Xylophone", "Trumpet", "Clarinet", "Violin"],
  answer: "Xylophone"
},
{
  id: "music_0148",
  category: "music",
  difficulty: 50,
  question: "Which instrument is played by blowing across a row of small holes and is often used in blues music?",
  options: ["Harmonica", "Bassoon", "Tuba", "Viola"],
  answer: "Harmonica"
},
{
  id: "music_0149",
  category: "music",
  difficulty: 50,
  question: "Which instrument is played with two hands and has strings stretched vertically inside a large frame?",
  options: ["Harp", "Trumpet", "Snare drum", "Clarinet"],
  answer: "Harp"
},
{
  id: "music_0150",
  category: "music",
  difficulty: 50,
  question: "Which instrument is a standard member of the drum kit and is usually played with a foot pedal?",
  options: ["Bass drum", "Triangle", "Tambourine", "Castanets"],
  answer: "Bass drum"
},


{
  id: "music_0151",
  category: "music",
  difficulty: 50,
  question: "What does tempo describe in a piece of music?",
  options: ["The speed of the music", "The loudness of the music", "The number of instruments", "The length of the lyrics"],
  answer: "The speed of the music"
},
{
  id: "music_0152",
  category: "music",
  difficulty: 50,
  question: "What does the musical direction allegro usually mean?",
  options: ["Fast and lively", "Slow and gentle", "Very quiet", "Without a steady beat"],
  answer: "Fast and lively"
},
{
  id: "music_0153",
  category: "music",
  difficulty: 50,
  question: "What does the musical direction adagio usually indicate?",
  options: ["A slow tempo", "A very fast tempo", "A loud performance", "A sudden pause"],
  answer: "A slow tempo"
},
{
  id: "music_0154",
  category: "music",
  difficulty: 50,
  question: "In musical notation, what does fortissimo mean?",
  options: ["Very loudly", "Very softly", "Moderately slowly", "Gradually faster"],
  answer: "Very loudly"
},
{
  id: "music_0155",
  category: "music",
  difficulty: 50,
  question: "Which musical term indicates that a passage should be played softly?",
  options: ["Piano", "Forte", "Allegro", "Prestissimo"],
  answer: "Piano"
},
{
  id: "music_0156",
  category: "music",
  difficulty: 50,
  question: "What does crescendo mean in music?",
  options: ["Gradually getting louder", "Gradually getting slower", "Suddenly stopping", "Repeating a melody"],
  answer: "Gradually getting louder"
},
{
  id: "music_0157",
  category: "music",
  difficulty: 50,
  question: "What does diminuendo instruct a musician to do?",
  options: ["Gradually get softer", "Gradually get louder", "Play each note sharply", "Increase the tempo"],
  answer: "Gradually get softer"
},
{
  id: "music_0158",
  category: "music",
  difficulty: 50,
  question: "What does staccato mean when playing musical notes?",
  options: ["Short and detached", "Smoothly connected", "Extremely loud", "Gradually slowing down"],
  answer: "Short and detached"
},
{
  id: "music_0159",
  category: "music",
  difficulty: 50,
  question: "What does legato mean in musical performance?",
  options: ["Smoothly connected notes", "Short and separated notes", "Very loud notes", "A sudden change of key"],
  answer: "Smoothly connected notes"
},
{
  id: "music_0160",
  category: "music",
  difficulty: 50,
  question: "What is an ostinato in music?",
  options: ["A repeated musical pattern", "A type of singing voice", "A sudden change in volume", "A written list of instruments"],
  answer: "A repeated musical pattern"
},
{
  id: "music_0161",
  category: "music",
  difficulty: 50,
  question: "What is a melody?",
  options: ["A sequence of notes forming a musical tune", "A group of musicians on stage", "The speed of a song", "The equipment used to record music"],
  answer: "A sequence of notes forming a musical tune"
},
{
  id: "music_0162",
  category: "music",
  difficulty: 50,
  question: "What is harmony in music?",
  options: ["Notes sounding together to support a musical texture", "The speed at which a song is played", "A single drumbeat repeated throughout", "The words written for a song"],
  answer: "Notes sounding together to support a musical texture"
},
{
  id: "music_0163",
  category: "music",
  difficulty: 50,
  question: "Which musical element organizes sounds into patterns of beats and durations?",
  options: ["Rhythm", "Timbre", "Pitch", "Lyrics"],
  answer: "Rhythm"
},
{
  id: "music_0164",
  category: "music",
  difficulty: 50,
  question: "What is a bar, also called a measure, in written music?",
  options: ["A section containing a specified number of beats", "A symbol showing how loud to play", "A type of string instrument", "The final note of a song"],
  answer: "A section containing a specified number of beats"
},
{
  id: "music_0165",
  category: "music",
  difficulty: 50,
  question: "What does a time signature tell a musician?",
  options: ["How beats are grouped in each measure", "Which singer performs the song", "How many pages are in the score", "What language the lyrics use"],
  answer: "How beats are grouped in each measure"
},
{
  id: "music_0166",
  category: "music",
  difficulty: 50,
  question: "Which clef is commonly used for the higher notes played by instruments such as the flute and violin?",
  options: ["Treble clef", "Bass clef", "Alto clef", "Tenor clef"],
  answer: "Treble clef"
},
{
  id: "music_0167",
  category: "music",
  difficulty: 50,
  question: "Which clef is commonly used for the lower notes played by instruments such as the bassoon and cello?",
  options: ["Bass clef", "Treble clef", "Soprano clef", "Percussion clef"],
  answer: "Bass clef"
},
{
  id: "music_0168",
  category: "music",
  difficulty: 50,
  question: "In music, what is an octave?",
  options: ["The interval between notes eight scale steps apart", "A group of eight musicians", "A rhythm lasting eight beats", "A song with eight verses"],
  answer: "The interval between notes eight scale steps apart"
},
{
  id: "music_0169",
  category: "music",
  difficulty: 50,
  question: "What is a musical scale?",
  options: ["A sequence of notes arranged by pitch", "A device used to measure sound volume", "A group of singers performing together", "A pattern of drum movements"],
  answer: "A sequence of notes arranged by pitch"
},
{
  id: "music_0170",
  category: "music",
  difficulty: 50,
  question: "How many different notes are found in a standard major scale before its octave repeats?",
  options: ["Seven", "Five", "Six", "Eight"],
  answer: "Seven"
},
{
  id: "music_0171",
  category: "music",
  difficulty: 50,
  question: "In standard Western music theory, what is the distance of a semitone?",
  options: ["One half step", "Two whole steps", "Three octaves", "One perfect fifth"],
  answer: "One half step"
},
{
  id: "music_0172",
  category: "music",
  difficulty: 50,
  question: "What is a basic triad in music?",
  options: ["A chord made from three notes", "A melody played by three singers", "A rhythm with three instruments", "A song divided into three verses"],
  answer: "A chord made from three notes"
},
{
  id: "music_0173",
  category: "music",
  difficulty: 50,
  question: "What is an arpeggio?",
  options: ["The notes of a chord played one after another", "Several drums played at the same time", "A singer holding one note", "A sudden increase in tempo"],
  answer: "The notes of a chord played one after another"
},
{
  id: "music_0174",
  category: "music",
  difficulty: 50,
  question: "What does a key signature show in written music?",
  options: ["The sharps or flats that apply to a piece's key", "The name of the performer", "The number of instruments in an orchestra", "The length of the recording"],
  answer: "The sharps or flats that apply to a piece's key"
},
{
  id: "music_0175",
  category: "music",
  difficulty: 50,
  question: "What is the main role of a conductor in an orchestra?",
  options: ["To guide the ensemble's timing and performance", "To build the musical instruments", "To write every audience ticket", "To operate the theatre lighting"],
  answer: "To guide the ensemble's timing and performance"
},
{
  id: "music_0176",
  category: "music",
  difficulty: 50,
  question: "What is the small stick often used by an orchestral conductor called?",
  options: ["A baton", "A mallet", "A bow", "A reed"],
  answer: "A baton"
},
{
  id: "music_0177",
  category: "music",
  difficulty: 50,
  question: "What is an orchestra?",
  options: ["A large group of musicians playing together", "A solo singer performing without instruments", "A collection of music posters", "A machine used to record sound"],
  answer: "A large group of musicians playing together"
},
{
  id: "music_0178",
  category: "music",
  difficulty: 50,
  question: "What is a symphony?",
  options: ["An extended musical composition, often for orchestra", "A short poem written for a singer", "A single drum used in marching bands", "A device for adjusting a guitar"],
  answer: "An extended musical composition, often for orchestra"
},
{
  id: "music_0179",
  category: "music",
  difficulty: 50,
  question: "Which type of classical composition is commonly written for a solo instrument or small group and several contrasting movements?",
  options: ["Sonata", "March", "Anthem", "Lullaby"],
  answer: "Sonata"
},
{
  id: "music_0180",
  category: "music",
  difficulty: 50,
  question: "What is a concerto traditionally written to feature?",
  options: ["A solo instrument with an orchestra", "A choir without instruments", "A marching band with dancers", "A group of percussion instruments only"],
  answer: "A solo instrument with an orchestra"
},
{
  id: "music_0181",
  category: "music",
  difficulty: 50,
  question: "What is chamber music?",
  options: ["Music written for a small ensemble", "Music performed only in stadiums", "Music played exclusively on electronic keyboards", "Music written only for large choirs"],
  answer: "Music written for a small ensemble"
},
{
  id: "music_0182",
  category: "music",
  difficulty: 50,
  question: "Which art form combines singing, instrumental music, drama and stage performance?",
  options: ["Opera", "Etude", "March", "Fugue"],
  answer: "Opera"
},
{
  id: "music_0183",
  category: "music",
  difficulty: 50,
  question: "What is the written text of an opera called?",
  options: ["Libretto", "Sonata", "Refrain", "Scoreboard"],
  answer: "Libretto"
},
{
  id: "music_0184",
  category: "music",
  difficulty: 50,
  question: "What is an overture in an opera or musical theatre production?",
  options: ["An orchestral introduction", "The final spoken line", "A list of performers", "A silent dance sequence"],
  answer: "An orchestral introduction"
},
{
  id: "music_0185",
  category: "music",
  difficulty: 50,
  question: "What is a duet?",
  options: ["A performance for two musicians or singers", "A performance for one soloist", "A song performed by a large choir", "A composition for four orchestras"],
  answer: "A performance for two musicians or singers"
},
{
  id: "music_0186",
  category: "music",
  difficulty: 50,
  question: "What is a choir?",
  options: ["A group of people who sing together", "A group of people who only play drums", "A collection of wind instruments", "A team that repairs pianos"],
  answer: "A group of people who sing together"
},
{
  id: "music_0187",
  category: "music",
  difficulty: 50,
  question: "Which classical singing voice is typically the highest female voice?",
  options: ["Soprano", "Alto", "Tenor", "Bass"],
  answer: "Soprano"
},
{
  id: "music_0188",
  category: "music",
  difficulty: 50,
  question: "Which classical singing voice is typically the lowest male voice?",
  options: ["Bass", "Tenor", "Countertenor", "Baritone"],
  answer: "Bass"
},
{
  id: "music_0189",
  category: "music",
  difficulty: 50,
  question: "Which classical singing voice generally sits between baritone and countertenor in the male voice classification?",
  options: ["Tenor", "Bass", "Alto", "Soprano"],
  answer: "Tenor"
},
{
  id: "music_0190",
  category: "music",
  difficulty: 50,
  question: "Which term commonly describes the lower female voice in classical choral music?",
  options: ["Alto", "Soprano", "Tenor", "Bass"],
  answer: "Alto"
},
{
  id: "music_0191",
  category: "music",
  difficulty: 50,
  question: "Gregorian chant is historically associated with which religious tradition?",
  options: ["Western Christianity", "Shinto", "Ancient Greek theatre", "Traditional Hindu temple dance"],
  answer: "Western Christianity"
},
{
  id: "music_0192",
  category: "music",
  difficulty: 50,
  question: "Which musical genre is strongly associated with the traditional 12-bar blues structure?",
  options: ["Blues", "Waltz", "Opera", "March"],
  answer: "Blues"
},
{
  id: "music_0193",
  category: "music",
  difficulty: 50,
  question: "Which feature is especially associated with jazz performance?",
  options: ["Improvisation", "Singing without any rhythm", "Using only one fixed note", "Avoiding instrumental solos"],
  answer: "Improvisation"
},
{
  id: "music_0194",
  category: "music",
  difficulty: 50,
  question: "Reggae music developed in which country?",
  options: ["Jamaica", "Brazil", "Japan", "Egypt"],
  answer: "Jamaica"
},
{
  id: "music_0195",
  category: "music",
  difficulty: 50,
  question: "Salsa music developed through a blend of musical traditions strongly associated with which region?",
  options: ["The Caribbean and Latin America", "Northern Europe", "Central Asia", "The Arctic"],
  answer: "The Caribbean and Latin America"
},
{
  id: "music_0196",
  category: "music",
  difficulty: 50,
  question: "Flamenco music and dance are especially associated with which Spanish region?",
  options: ["Andalusia", "Catalonia", "Galicia", "Basque Country"],
  answer: "Andalusia"
},
{
  id: "music_0197",
  category: "music",
  difficulty: 50,
  question: "Tango music and dance are strongly associated with which South American country?",
  options: ["Argentina", "Peru", "Colombia", "Venezuela"],
  answer: "Argentina"
},
{
  id: "music_0198",
  category: "music",
  difficulty: 50,
  question: "Samba is a music and dance style strongly associated with which country?",
  options: ["Brazil", "Chile", "Mexico", "Cuba"],
  answer: "Brazil"
},
{
  id: "music_0199",
  category: "music",
  difficulty: 50,
  question: "Bhangra music and dance originated in which region?",
  options: ["Punjab", "Sicily", "Bavaria", "Andalusia"],
  answer: "Punjab"
},
{
  id: "music_0200",
  category: "music",
  difficulty: 50,
  question: "Gamelan music is traditionally associated with which country?",
  options: ["Indonesia", "Norway", "Canada", "Morocco"],
  answer: "Indonesia"
},


{
  id: "music_0201",
  category: "music",
  difficulty: 50,
  question: "In which English city did the Beatles form as a band?",
  options: ["Liverpool", "Manchester", "London", "Birmingham"],
  answer: "Liverpool"
},
{
  id: "music_0202",
  category: "music",
  difficulty: 50,
  question: "What was the Beatles' first studio album, released in 1963?",
  options: ["Please Please Me", "Revolver", "Abbey Road", "Let It Be"],
  answer: "Please Please Me"
},
{
  id: "music_0203",
  category: "music",
  difficulty: 50,
  question: "Which Beatles album includes the song Lucy in the Sky with Diamonds?",
  options: ["Sgt. Pepper's Lonely Hearts Club Band", "Help!", "Let It Be", "Please Please Me"],
  answer: "Sgt. Pepper's Lonely Hearts Club Band"
},
{
  id: "music_0204",
  category: "music",
  difficulty: 50,
  question: "Which member of the Beatles was a co-founder and played rhythm guitar?",
  options: ["John Lennon", "Ringo Starr", "George Harrison", "Pete Best"],
  answer: "John Lennon"
},
{
  id: "music_0205",
  category: "music",
  difficulty: 50,
  question: "Which instrument was Paul McCartney especially known for playing in the Beatles?",
  options: ["Bass guitar", "Trumpet", "Violin", "Trombone"],
  answer: "Bass guitar"
},
{
  id: "music_0206",
  category: "music",
  difficulty: 50,
  question: "Which Beatle was the band's lead guitarist?",
  options: ["George Harrison", "John Lennon", "Paul McCartney", "Ringo Starr"],
  answer: "George Harrison"
},
{
  id: "music_0207",
  category: "music",
  difficulty: 50,
  question: "Which Beatles member played drums?",
  options: ["Ringo Starr", "John Lennon", "George Harrison", "Paul McCartney"],
  answer: "Ringo Starr"
},
{
  id: "music_0208",
  category: "music",
  difficulty: 50,
  question: "Who was the lead singer of the rock band Queen?",
  options: ["Freddie Mercury", "Mick Jagger", "Bono", "Robert Plant"],
  answer: "Freddie Mercury"
},
{
  id: "music_0209",
  category: "music",
  difficulty: 50,
  question: "Which musician played guitar in the band Queen and is also an astrophysicist?",
  options: ["Brian May", "Roger Taylor", "John Deacon", "Freddie Mercury"],
  answer: "Brian May"
},
{
  id: "music_0210",
  category: "music",
  difficulty: 50,
  question: "Who is the lead vocalist of the Rolling Stones?",
  options: ["Mick Jagger", "Keith Richards", "Ronnie Wood", "Charlie Watts"],
  answer: "Mick Jagger"
},
{
  id: "music_0211",
  category: "music",
  difficulty: 50,
  question: "Which musician is a founding member of the Rolling Stones and is known for playing guitar?",
  options: ["Keith Richards", "Roger Waters", "Eric Clapton", "Pete Townshend"],
  answer: "Keith Richards"
},
{
  id: "music_0212",
  category: "music",
  difficulty: 50,
  question: "Who was the lead singer and guitarist of Nirvana?",
  options: ["Kurt Cobain", "Eddie Vedder", "Dave Grohl", "Thom Yorke"],
  answer: "Kurt Cobain"
},
{
  id: "music_0213",
  category: "music",
  difficulty: 50,
  question: "Which Nirvana album features the hit song Smells Like Teen Spirit?",
  options: ["Nevermind", "In Utero", "Bleach", "Incesticide"],
  answer: "Nevermind"
},
{
  id: "music_0214",
  category: "music",
  difficulty: 50,
  question: "What is the stage name of Paul David Hewson, the lead singer of U2?",
  options: ["Bono", "Sting", "Moby", "Seal"],
  answer: "Bono"
},
{
  id: "music_0215",
  category: "music",
  difficulty: 50,
  question: "U2, the band behind songs such as With or Without You, originated in which country?",
  options: ["Ireland", "Canada", "Australia", "Germany"],
  answer: "Ireland"
},
{
  id: "music_0216",
  category: "music",
  difficulty: 50,
  question: "Which Jamaican musician released the album Exodus in 1977?",
  options: ["Bob Marley and the Wailers", "Jimmy Cliff", "Peter Tosh", "Toots and the Maytals"],
  answer: "Bob Marley and the Wailers"
},
{
  id: "music_0217",
  category: "music",
  difficulty: 50,
  question: "Which reggae artist recorded the song Three Little Birds?",
  options: ["Bob Marley", "Sean Paul", "Shaggy", "Damian Marley"],
  answer: "Bob Marley"
},
{
  id: "music_0218",
  category: "music",
  difficulty: 50,
  question: "Which singer is widely known by the title King of Rock and Roll?",
  options: ["Elvis Presley", "Chuck Berry", "Little Richard", "Jerry Lee Lewis"],
  answer: "Elvis Presley"
},
{
  id: "music_0219",
  category: "music",
  difficulty: 50,
  question: "Which record label released Elvis Presley's early recording That's All Right in 1954?",
  options: ["Sun Records", "Motown Records", "Atlantic Records", "Blue Note Records"],
  answer: "Sun Records"
},
{
  id: "music_0220",
  category: "music",
  difficulty: 50,
  question: "Which singer released a famous soul version of the song Respect in 1967?",
  options: ["Aretha Franklin", "Diana Ross", "Tina Turner", "Nina Simone"],
  answer: "Aretha Franklin"
},
{
  id: "music_0221",
  category: "music",
  difficulty: 50,
  question: "Which singer was nicknamed the Godfather of Soul?",
  options: ["James Brown", "Marvin Gaye", "Ray Charles", "Sam Cooke"],
  answer: "James Brown"
},
{
  id: "music_0222",
  category: "music",
  difficulty: 50,
  question: "Who recorded the songs Superstition and Isn't She Lovely?",
  options: ["Stevie Wonder", "Lionel Richie", "Al Green", "Otis Redding"],
  answer: "Stevie Wonder"
},
{
  id: "music_0223",
  category: "music",
  difficulty: 50,
  question: "Which artist released the album and film Purple Rain?",
  options: ["Prince", "David Bowie", "Elton John", "George Michael"],
  answer: "Prince"
},
{
  id: "music_0224",
  category: "music",
  difficulty: 50,
  question: "Which British singer released the song Space Oddity in 1969?",
  options: ["David Bowie", "Elton John", "Rod Stewart", "Phil Collins"],
  answer: "David Bowie"
},
{
  id: "music_0225",
  category: "music",
  difficulty: 50,
  question: "Which singer performed the song Rocket Man?",
  options: ["Elton John", "Billy Joel", "Freddie Mercury", "David Bowie"],
  answer: "Elton John"
},
{
  id: "music_0226",
  category: "music",
  difficulty: 50,
  question: "Which Swedish pop group released the hit song Dancing Queen?",
  options: ["ABBA", "Ace of Base", "Roxette", "A-ha"],
  answer: "ABBA"
},
{
  id: "music_0227",
  category: "music",
  difficulty: 50,
  question: "Which musical features songs by the Swedish group ABBA?",
  options: ["Mamma Mia!", "Les Misérables", "Cats", "The Phantom of the Opera"],
  answer: "Mamma Mia!"
},
{
  id: "music_0228",
  category: "music",
  difficulty: 50,
  question: "Which group recorded the disco hit Stayin' Alive?",
  options: ["Bee Gees", "The Supremes", "The Jackson 5", "The Beach Boys"],
  answer: "Bee Gees"
},
{
  id: "music_0229",
  category: "music",
  difficulty: 50,
  question: "Which film features the Bee Gees prominently on its soundtrack and is associated with disco dancing?",
  options: ["Saturday Night Fever", "Footloose", "Dirty Dancing", "Grease"],
  answer: "Saturday Night Fever"
},
{
  id: "music_0230",
  category: "music",
  difficulty: 50,
  question: "Which singer recorded the hit version of I Will Always Love You for the film The Bodyguard?",
  options: ["Whitney Houston", "Mariah Carey", "Celine Dion", "Toni Braxton"],
  answer: "Whitney Houston"
},
{
  id: "music_0231",
  category: "music",
  difficulty: 50,
  question: "Which Canadian singer performed My Heart Will Go On, the theme song from Titanic?",
  options: ["Celine Dion", "Alanis Morissette", "Shania Twain", "Avril Lavigne"],
  answer: "Celine Dion"
},
{
  id: "music_0232",
  category: "music",
  difficulty: 50,
  question: "Which British singer released the album 21, featuring the song Rolling in the Deep?",
  options: ["Adele", "Dua Lipa", "Amy Winehouse", "Jessie J"],
  answer: "Adele"
},
{
  id: "music_0233",
  category: "music",
  difficulty: 50,
  question: "Which singer released the album Back to Black in 2006?",
  options: ["Amy Winehouse", "Adele", "Duffy", "Lily Allen"],
  answer: "Amy Winehouse"
},
{
  id: "music_0234",
  category: "music",
  difficulty: 50,
  question: "Which American singer was a member of Destiny's Child before launching a highly successful solo career?",
  options: ["Beyoncé", "Alicia Keys", "Pink", "Christina Aguilera"],
  answer: "Beyoncé"
},
{
  id: "music_0235",
  category: "music",
  difficulty: 50,
  question: "Which Colombian singer released the global hit Hips Don't Lie?",
  options: ["Shakira", "Karol G", "Rosalía", "Gloria Estefan"],
  answer: "Shakira"
},
{
  id: "music_0236",
  category: "music",
  difficulty: 50,
  question: "Which Puerto Rican artist is often called the King of Reggaeton?",
  options: ["Daddy Yankee", "Ricky Martin", "Bad Bunny", "Marc Anthony"],
  answer: "Daddy Yankee"
},
{
  id: "music_0237",
  category: "music",
  difficulty: 50,
  question: "Which artist collaborated with Luis Fonsi on the worldwide hit Despacito?",
  options: ["Daddy Yankee", "J Balvin", "Maluma", "Enrique Iglesias"],
  answer: "Daddy Yankee"
},
{
  id: "music_0238",
  category: "music",
  difficulty: 50,
  question: "Which South Korean group released the English-language hit Dynamite in 2020?",
  options: ["BTS", "BLACKPINK", "EXO", "BIGBANG"],
  answer: "BTS"
},
{
  id: "music_0239",
  category: "music",
  difficulty: 50,
  question: "Which South Korean performer became internationally famous for the song Gangnam Style?",
  options: ["PSY", "Rain", "G-Dragon", "Jay Park"],
  answer: "PSY"
},
{
  id: "music_0240",
  category: "music",
  difficulty: 50,
  question: "What does the abbreviation K-pop stand for?",
  options: ["Korean pop", "Karaoke pop", "Keynote pop", "Kingdom pop"],
  answer: "Korean pop"
},
{
  id: "music_0241",
  category: "music",
  difficulty: 50,
  question: "Which country is most closely associated with the music style known as J-pop?",
  options: ["Japan", "China", "South Korea", "Thailand"],
  answer: "Japan"
},
{
  id: "music_0242",
  category: "music",
  difficulty: 50,
  question: "Which American singer released the album Fearless, featuring the song Love Story?",
  options: ["Taylor Swift", "Katy Perry", "Demi Lovato", "Selena Gomez"],
  answer: "Taylor Swift"
},
{
  id: "music_0243",
  category: "music",
  difficulty: 50,
  question: "Which singer played the title character in the television series Hannah Montana?",
  options: ["Miley Cyrus", "Ariana Grande", "Hilary Duff", "Vanessa Hudgens"],
  answer: "Miley Cyrus"
},
{
  id: "music_0244",
  category: "music",
  difficulty: 50,
  question: "Which Barbadian singer released the hit song Umbrella featuring Jay-Z?",
  options: ["Rihanna", "Nicki Minaj", "Cardi B", "Alicia Keys"],
  answer: "Rihanna"
},
{
  id: "music_0245",
  category: "music",
  difficulty: 50,
  question: "Which American singer released the song Poker Face?",
  options: ["Lady Gaga", "Madonna", "Katy Perry", "Britney Spears"],
  answer: "Lady Gaga"
},
{
  id: "music_0246",
  category: "music",
  difficulty: 50,
  question: "Which American singer was born in Honolulu, Hawaii, and released the song Just the Way You Are?",
  options: ["Bruno Mars", "Justin Timberlake", "John Legend", "Jason Derulo"],
  answer: "Bruno Mars"
},
{
  id: "music_0247",
  category: "music",
  difficulty: 50,
  question: "Which English singer released the album Divide, featuring Shape of You?",
  options: ["Ed Sheeran", "Sam Smith", "Harry Styles", "James Blunt"],
  answer: "Ed Sheeran"
},
{
  id: "music_0248",
  category: "music",
  difficulty: 50,
  question: "Who is the lead singer of the British rock band Coldplay?",
  options: ["Chris Martin", "Thom Yorke", "Bono", "Alex Turner"],
  answer: "Chris Martin"
},
{
  id: "music_0249",
  category: "music",
  difficulty: 50,
  question: "Which band released the album Hybrid Theory in 2000?",
  options: ["Linkin Park", "Green Day", "Oasis", "The Killers"],
  answer: "Linkin Park"
},
{
  id: "music_0250",
  category: "music",
  difficulty: 50,
  question: "Who is the lead vocalist and guitarist of the band Green Day?",
  options: ["Billie Joe Armstrong", "Dave Grohl", "Kurt Cobain", "Tom DeLonge"],
  answer: "Billie Joe Armstrong"
},


{
  id: "music_0251",
  category: "music",
  difficulty: 50,
  question: "Which American rapper is also known by the nickname Slim Shady?",
  options: ["Eminem", "Jay-Z", "Nas", "Snoop Dogg"],
  answer: "Eminem"
},
{
  id: "music_0252",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the album The Marshall Mathers LP in 2000?",
  options: ["Eminem", "50 Cent", "Dr. Dre", "LL Cool J"],
  answer: "Eminem"
},
{
  id: "music_0253",
  category: "music",
  difficulty: 50,
  question: "Which hip-hop producer helped popularize the G-funk sound and co-founded Aftermath Entertainment?",
  options: ["Dr. Dre", "DJ Khaled", "Pharrell Williams", "Timbaland"],
  answer: "Dr. Dre"
},
{
  id: "music_0254",
  category: "music",
  difficulty: 50,
  question: "What was the stage name of rapper Tupac Shakur?",
  options: ["2Pac", "The Game", "Ice Cube", "DMX"],
  answer: "2Pac"
},
{
  id: "music_0255",
  category: "music",
  difficulty: 50,
  question: "Which rapper was widely known as The Notorious B.I.G.?",
  options: ["Christopher Wallace", "Sean Combs", "Shawn Carter", "Calvin Broadus"],
  answer: "Christopher Wallace"
},
{
  id: "music_0256",
  category: "music",
  difficulty: 50,
  question: "Which rapper's birth name is Shawn Corey Carter?",
  options: ["Jay-Z", "Nas", "Kanye West", "Snoop Dogg"],
  answer: "Jay-Z"
},
{
  id: "music_0257",
  category: "music",
  difficulty: 50,
  question: "Which rapper won the Pulitzer Prize for Music in 2018 for the album DAMN.?",
  options: ["Kendrick Lamar", "Drake", "J. Cole", "Travis Scott"],
  answer: "Kendrick Lamar"
},
{
  id: "music_0258",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the influential debut album Illmatic in 1994?",
  options: ["Nas", "Jay-Z", "Common", "Method Man"],
  answer: "Nas"
},
{
  id: "music_0259",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the album Doggystyle in 1993?",
  options: ["Snoop Dogg", "Ice Cube", "Dr. Dre", "Warren G"],
  answer: "Snoop Dogg"
},
{
  id: "music_0260",
  category: "music",
  difficulty: 50,
  question: "Which hip-hop duo released the song Hey Ya! in 2003?",
  options: ["OutKast", "Mobb Deep", "Black Star", "Clipse"],
  answer: "OutKast"
},
{
  id: "music_0261",
  category: "music",
  difficulty: 50,
  question: "Which hip-hop group collaborated with Aerosmith on the 1986 version of Walk This Way?",
  options: ["Run-D.M.C.", "Public Enemy", "Beastie Boys", "N.W.A"],
  answer: "Run-D.M.C."
},
{
  id: "music_0262",
  category: "music",
  difficulty: 50,
  question: "Which hip-hop group released the politically charged song Fight the Power?",
  options: ["Public Enemy", "De La Soul", "Wu-Tang Clan", "A Tribe Called Quest"],
  answer: "Public Enemy"
},
{
  id: "music_0263",
  category: "music",
  difficulty: 50,
  question: "Which rapper and singer released the song Work It in 2002?",
  options: ["Missy Elliott", "Lauryn Hill", "Eve", "Queen Latifah"],
  answer: "Missy Elliott"
},
{
  id: "music_0264",
  category: "music",
  difficulty: 50,
  question: "Which artist released the album The Miseducation of Lauryn Hill?",
  options: ["Lauryn Hill", "Missy Elliott", "Mary J. Blige", "Erykah Badu"],
  answer: "Lauryn Hill"
},
{
  id: "music_0265",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the debut studio album The College Dropout?",
  options: ["Kanye West", "Kid Cudi", "Common", "Lupe Fiasco"],
  answer: "Kanye West"
},
{
  id: "music_0266",
  category: "music",
  difficulty: 50,
  question: "Which rapper released Tha Carter III in 2008?",
  options: ["Lil Wayne", "T.I.", "Rick Ross", "Ludacris"],
  answer: "Lil Wayne"
},
{
  id: "music_0267",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the hit single Super Bass in 2011?",
  options: ["Nicki Minaj", "Cardi B", "Iggy Azalea", "Lil' Kim"],
  answer: "Nicki Minaj"
},
{
  id: "music_0268",
  category: "music",
  difficulty: 50,
  question: "Which rapper released Bodak Yellow as her breakthrough single?",
  options: ["Cardi B", "Megan Thee Stallion", "Doja Cat", "Nicki Minaj"],
  answer: "Cardi B"
},
{
  id: "music_0269",
  category: "music",
  difficulty: 50,
  question: "Which Canadian rapper released the song Hotline Bling?",
  options: ["Drake", "The Weeknd", "Justin Bieber", "Shawn Mendes"],
  answer: "Drake"
},
{
  id: "music_0270",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the album 2014 Forest Hills Drive?",
  options: ["J. Cole", "Kendrick Lamar", "Big Sean", "Meek Mill"],
  answer: "J. Cole"
},
{
  id: "music_0271",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the album Astroworld in 2018?",
  options: ["Travis Scott", "Future", "Tyler, the Creator", "A$AP Rocky"],
  answer: "Travis Scott"
},
{
  id: "music_0272",
  category: "music",
  difficulty: 50,
  question: "Which artist featured on the 2017 hit song Rockstar by Post Malone?",
  options: ["21 Savage", "Drake", "Kendrick Lamar", "Lil Wayne"],
  answer: "21 Savage"
},
{
  id: "music_0273",
  category: "music",
  difficulty: 50,
  question: "Which rapper released the song 99 Problems in 2003?",
  options: ["Jay-Z", "Nas", "50 Cent", "Kanye West"],
  answer: "Jay-Z"
},
{
  id: "music_0274",
  category: "music",
  difficulty: 50,
  question: "What does the abbreviation A&R mean in the music industry?",
  options: ["Artists and Repertoire", "Audio and Recording", "Albums and Rhythm", "Artists and Radio"],
  answer: "Artists and Repertoire"
},
{
  id: "music_0275",
  category: "music",
  difficulty: 50,
  question: "What is one of a music producer's main responsibilities during a recording project?",
  options: ["Guiding the creative and recording process", "Selling all concert tickets", "Designing the venue's seating plan", "Manufacturing every instrument"],
  answer: "Guiding the creative and recording process"
},
{
  id: "music_0276",
  category: "music",
  difficulty: 50,
  question: "What does audio mixing involve?",
  options: ["Balancing and processing recorded sound elements", "Writing the lyrics of every song", "Booking musicians for a tour", "Printing sheet music for sale"],
  answer: "Balancing and processing recorded sound elements"
},
{
  id: "music_0277",
  category: "music",
  difficulty: 50,
  question: "What is the main purpose of audio mastering?",
  options: ["Preparing a final recording for distribution", "Teaching a singer to read lyrics", "Composing the melody from scratch", "Choosing the outfits for a band"],
  answer: "Preparing a final recording for distribution"
},
{
  id: "music_0278",
  category: "music",
  difficulty: 50,
  question: "Which device converts sound waves into an electrical audio signal during recording?",
  options: ["Microphone", "Loudspeaker", "Headphone", "Metronome"],
  answer: "Microphone"
},
{
  id: "music_0279",
  category: "music",
  difficulty: 50,
  question: "What does DAW stand for in music production?",
  options: ["Digital Audio Workstation", "Direct Acoustic Wave", "Dynamic Arrangement Writing", "Digital Amplifier Wire"],
  answer: "Digital Audio Workstation"
},
{
  id: "music_0280",
  category: "music",
  difficulty: 50,
  question: "What does MIDI stand for?",
  options: ["Musical Instrument Digital Interface", "Music Input and Digital Instruments", "Musical Information Data Internet", "Modern Instrument Display Interface"],
  answer: "Musical Instrument Digital Interface"
},
{
  id: "music_0281",
  category: "music",
  difficulty: 50,
  question: "What is the main purpose of an audio interface in a home recording setup?",
  options: ["Connecting microphones and instruments to a computer", "Displaying lyrics on a television", "Measuring the size of a recording studio", "Storing printed music scores"],
  answer: "Connecting microphones and instruments to a computer"
},
{
  id: "music_0282",
  category: "music",
  difficulty: 50,
  question: "Which device helps musicians keep a steady beat while practising?",
  options: ["Metronome", "Amplifier", "Microphone", "Equalizer"],
  answer: "Metronome"
},
{
  id: "music_0283",
  category: "music",
  difficulty: 50,
  question: "Which device helps a guitarist check whether the instrument's strings are at the correct pitch?",
  options: ["Electronic tuner", "Drum machine", "Audio mixer", "Foot pedal"],
  answer: "Electronic tuner"
},
{
  id: "music_0284",
  category: "music",
  difficulty: 50,
  question: "What does BPM stand for when describing the tempo of a song?",
  options: ["Beats per minute", "Bars per melody", "Bass pitch measurement", "Balanced performance mode"],
  answer: "Beats per minute"
},
{
  id: "music_0285",
  category: "music",
  difficulty: 50,
  question: "In music production, what is a loop?",
  options: ["A section of audio or music repeated continuously", "A microphone used for recording vocals", "A device that increases speaker volume", "A written description of a concert"],
  answer: "A section of audio or music repeated continuously"
},
{
  id: "music_0286",
  category: "music",
  difficulty: 50,
  question: "What is sampling in music production?",
  options: ["Using a portion of an existing recording in a new track", "Measuring the weight of an instrument", "Repeating a live performance without recording it", "Changing the language of a song"],
  answer: "Using a portion of an existing recording in a new track"
},
{
  id: "music_0287",
  category: "music",
  difficulty: 50,
  question: "What is a remix?",
  options: ["A new version made by reworking an existing recording", "A song performed without any instruments", "A recording made only for radio news", "A written arrangement for a choir"],
  answer: "A new version made by reworking an existing recording"
},
{
  id: "music_0288",
  category: "music",
  difficulty: 50,
  question: "What is a cover version of a song?",
  options: ["A new performance or recording of a song previously recorded by another artist", "A song that has no lyrics", "A short musical advertisement", "A recording made only with drums"],
  answer: "A new performance or recording of a song previously recorded by another artist"
},
{
  id: "music_0289",
  category: "music",
  difficulty: 50,
  question: "What does the musical term a cappella mean?",
  options: ["Singing without instrumental accompaniment", "Singing with a full orchestra", "Playing a song at high volume", "Performing only with electronic instruments"],
  answer: "Singing without instrumental accompaniment"
},
{
  id: "music_0290",
  category: "music",
  difficulty: 50,
  question: "What are backing vocals?",
  options: ["Supporting vocals that accompany the lead singer", "The main instrumental solo in a song", "The final track on an album", "The sound effects used in a film"],
  answer: "Supporting vocals that accompany the lead singer"
},
{
  id: "music_0291",
  category: "music",
  difficulty: 50,
  question: "What is Auto-Tune commonly used for in modern music production?",
  options: ["Correcting or adjusting vocal pitch", "Increasing the size of a recording studio", "Changing the lyrics into another language", "Measuring the speed of a drummer"],
  answer: "Correcting or adjusting vocal pitch"
},
{
  id: "music_0292",
  category: "music",
  difficulty: 50,
  question: "Which electronic instrument can generate and shape sounds using electronic circuits or digital processing?",
  options: ["Synthesizer", "Acoustic violin", "Concert harp", "Classical guitar"],
  answer: "Synthesizer"
},
{
  id: "music_0293",
  category: "music",
  difficulty: 50,
  question: "What is a drum machine designed to do?",
  options: ["Produce programmed percussion patterns", "Tune the strings of a guitar", "Record spoken interviews", "Display sheet music on a screen"],
  answer: "Produce programmed percussion patterns"
},
{
  id: "music_0294",
  category: "music",
  difficulty: 50,
  question: "What is a sampler used for in electronic music production?",
  options: ["Recording and playing back audio samples", "Measuring the loudness of an audience", "Replacing the need for all microphones", "Printing album covers"],
  answer: "Recording and playing back audio samples"
},
{
  id: "music_0295",
  category: "music",
  difficulty: 50,
  question: "What does an equalizer, commonly called an EQ, adjust in an audio signal?",
  options: ["The balance of different frequencies", "The number of musicians on stage", "The length of a song's lyrics", "The speed of a music video"],
  answer: "The balance of different frequencies"
},
{
  id: "music_0296",
  category: "music",
  difficulty: 50,
  question: "Which audio effect creates a sense of space by adding reflections that resemble sound in a room or hall?",
  options: ["Reverb", "Distortion", "Panning", "Pitch shifting"],
  answer: "Reverb"
},
{
  id: "music_0297",
  category: "music",
  difficulty: 50,
  question: "Which audio effect produces repeated echoes of a sound?",
  options: ["Delay", "Compression", "Equalization", "Filtering"],
  answer: "Delay"
},
{
  id: "music_0298",
  category: "music",
  difficulty: 50,
  question: "Which audio effect can make a sound seem fuller by combining it with slightly varied copies?",
  options: ["Chorus", "Noise gate", "Limiter", "Pitch correction"],
  answer: "Chorus"
},
{
  id: "music_0299",
  category: "music",
  difficulty: 50,
  question: "What does an audio compressor generally do?",
  options: ["Reduces the difference between louder and quieter parts", "Adds lyrics to an instrumental recording", "Changes a recording into a video", "Raises every note by one octave"],
  answer: "Reduces the difference between louder and quieter parts"
},
{
  id: "music_0300",
  category: "music",
  difficulty: 50,
  question: "In stereo audio, what does panning control?",
  options: ["The position of a sound between the left and right channels", "The speed of the song", "The pitch of the lead singer", "The number of tracks on an album"],
  answer: "The position of a sound between the left and right channels"
},


{
  id: "music_0301",
  category: "music",
  difficulty: 50,
  question: "Which organization presents the Grammy Awards?",
  options: ["The Recording Academy", "The Rock and Roll Hall of Fame", "The American Film Institute", "The National Academy of Television Arts and Sciences"],
  answer: "The Recording Academy"
},
{
  id: "music_0302",
  category: "music",
  difficulty: 50,
  question: "In which year were the first Grammy Awards presented?",
  options: ["1959", "1965", "1971", "1980"],
  answer: "1959"
},
{
  id: "music_0303",
  category: "music",
  difficulty: 50,
  question: "Which television network presents the MTV Video Music Awards?",
  options: ["MTV", "CNN", "BBC", "ESPN"],
  answer: "MTV"
},
{
  id: "music_0304",
  category: "music",
  difficulty: 50,
  question: "Which international television song competition is commonly known as Eurovision?",
  options: ["Eurovision Song Contest", "The World Music Awards", "The Brit Awards", "The Mercury Prize"],
  answer: "Eurovision Song Contest"
},
{
  id: "music_0305",
  category: "music",
  difficulty: 50,
  question: "In which English county is the Glastonbury Festival held?",
  options: ["Somerset", "Kent", "Essex", "Yorkshire"],
  answer: "Somerset"
},
{
  id: "music_0306",
  category: "music",
  difficulty: 50,
  question: "Coachella Valley Music and Arts Festival takes place in which US state?",
  options: ["California", "Texas", "Florida", "New York"],
  answer: "California"
},
{
  id: "music_0307",
  category: "music",
  difficulty: 50,
  question: "The famous 1969 Woodstock music festival was held in which US state?",
  options: ["New York", "California", "Tennessee", "Illinois"],
  answer: "New York"
},
{
  id: "music_0308",
  category: "music",
  difficulty: 50,
  question: "Which major charity concert was held in London and Philadelphia in 1985 to raise money for famine relief in Ethiopia?",
  options: ["Live Aid", "Live 8", "Farm Aid", "The Concert for Bangladesh"],
  answer: "Live Aid"
},
{
  id: "music_0309",
  category: "music",
  difficulty: 50,
  question: "Which charity supergroup recorded Do They Know It's Christmas? in 1984?",
  options: ["Band Aid", "USA for Africa", "The Traveling Wilburys", "Artists United Against Apartheid"],
  answer: "Band Aid"
},
{
  id: "music_0310",
  category: "music",
  difficulty: 50,
  question: "Which charity music project recorded the song We Are the World in 1985?",
  options: ["USA for Africa", "Band Aid", "Live Aid", "The Concert for Bangladesh"],
  answer: "USA for Africa"
},
{
  id: "music_0311",
  category: "music",
  difficulty: 50,
  question: "Which record company was founded by Berry Gordy in Detroit in 1959?",
  options: ["Motown Records", "Def Jam Recordings", "Atlantic Records", "Blue Note Records"],
  answer: "Motown Records"
},
{
  id: "music_0312",
  category: "music",
  difficulty: 50,
  question: "Which American record label became especially famous for soul music from Memphis?",
  options: ["Stax Records", "ECM Records", "Sub Pop", "Warp Records"],
  answer: "Stax Records"
},
{
  id: "music_0313",
  category: "music",
  difficulty: 50,
  question: "Which record label was founded by Ahmet Ertegun and Herb Abramson in 1947?",
  options: ["Atlantic Records", "Motown Records", "Sun Records", "Island Records"],
  answer: "Atlantic Records"
},
{
  id: "music_0314",
  category: "music",
  difficulty: 50,
  question: "Which record label is especially associated with jazz recordings and was founded in New York in 1939?",
  options: ["Blue Note Records", "Def Jam Recordings", "Stax Records", "Sub Pop"],
  answer: "Blue Note Records"
},
{
  id: "music_0315",
  category: "music",
  difficulty: 50,
  question: "Which two people co-founded Def Jam Recordings?",
  options: ["Rick Rubin and Russell Simmons", "Berry Gordy and Smokey Robinson", "Ahmet Ertegun and Herb Abramson", "Chris Blackwell and Bob Marley"],
  answer: "Rick Rubin and Russell Simmons"
},
{
  id: "music_0316",
  category: "music",
  difficulty: 50,
  question: "Who founded Island Records?",
  options: ["Chris Blackwell", "Berry Gordy", "Clive Davis", "Russell Simmons"],
  answer: "Chris Blackwell"
},
{
  id: "music_0317",
  category: "music",
  difficulty: 50,
  question: "Which record label became famous for releasing blues recordings in Chicago?",
  options: ["Chess Records", "Motown Records", "Island Records", "Def Jam Recordings"],
  answer: "Chess Records"
},
{
  id: "music_0318",
  category: "music",
  difficulty: 50,
  question: "Which Memphis record label released early recordings by Elvis Presley?",
  options: ["Sun Records", "Blue Note Records", "Atlantic Records", "Def Jam Recordings"],
  answer: "Sun Records"
},
{
  id: "music_0319",
  category: "music",
  difficulty: 50,
  question: "Which magazine, first published in 1967, became known for its music journalism and reviews?",
  options: ["Rolling Stone", "National Geographic", "Time", "The Economist"],
  answer: "Rolling Stone"
},
{
  id: "music_0320",
  category: "music",
  difficulty: 50,
  question: "Which publication is widely known for publishing the Billboard music charts?",
  options: ["Billboard", "Rolling Stone", "The Guardian", "Variety"],
  answer: "Billboard"
},
{
  id: "music_0321",
  category: "music",
  difficulty: 50,
  question: "What does the Billboard Hot 100 mainly rank?",
  options: ["Popular songs in the United States", "The world's largest concert venues", "The highest-paid music producers", "The longest-running orchestras"],
  answer: "Popular songs in the United States"
},
{
  id: "music_0322",
  category: "music",
  difficulty: 50,
  question: "In the United States, how many units traditionally qualify a recording for a Gold certification from the RIAA?",
  options: ["500,000", "100,000", "250,000", "2,000,000"],
  answer: "500,000"
},
{
  id: "music_0323",
  category: "music",
  difficulty: 50,
  question: "Under the RIAA's traditional US certification levels, how many units are required for a Platinum award?",
  options: ["1,000,000", "500,000", "250,000", "5,000,000"],
  answer: "1,000,000"
},
{
  id: "music_0324",
  category: "music",
  difficulty: 50,
  question: "Under the RIAA's US certification system, how many units are traditionally required for a Diamond award?",
  options: ["10,000,000", "1,000,000", "5,000,000", "20,000,000"],
  answer: "10,000,000"
},
{
  id: "music_0325",
  category: "music",
  difficulty: 50,
  question: "Which two companies worked together to develop the compact disc format?",
  options: ["Sony and Philips", "Apple and Microsoft", "Samsung and Nokia", "Panasonic and IBM"],
  answer: "Sony and Philips"
},
{
  id: "music_0326",
  category: "music",
  difficulty: 50,
  question: "Which part of a vinyl record is read by the stylus of a record player?",
  options: ["The grooves", "The paper label", "The outer sleeve", "The centre spindle"],
  answer: "The grooves"
},
{
  id: "music_0327",
  category: "music",
  difficulty: 50,
  question: "What type of material stores audio on a traditional compact cassette tape?",
  options: ["Magnetic tape", "Optical film", "Solid wood", "Printed paper"],
  answer: "Magnetic tape"
},
{
  id: "music_0328",
  category: "music",
  difficulty: 50,
  question: "What is MP3 best known as?",
  options: ["A digital audio format using lossy compression", "A type of vinyl record player", "A brand of studio microphone", "A musical notation system"],
  answer: "A digital audio format using lossy compression"
},
{
  id: "music_0329",
  category: "music",
  difficulty: 50,
  question: "Which audio format is commonly used for uncompressed PCM sound?",
  options: ["WAV", "MP3", "AAC", "Ogg Vorbis"],
  answer: "WAV"
},
{
  id: "music_0330",
  category: "music",
  difficulty: 50,
  question: "Which audio format uses lossless compression?",
  options: ["FLAC", "MP3", "AAC", "WMA Lossy"],
  answer: "FLAC"
},
{
  id: "music_0331",
  category: "music",
  difficulty: 50,
  question: "What is an LP in the traditional recorded-music industry?",
  options: ["A long-playing record", "A live performance microphone", "A digital mixing program", "A type of concert ticket"],
  answer: "A long-playing record"
},
{
  id: "music_0332",
  category: "music",
  difficulty: 50,
  question: "What does EP stand for when describing a music release?",
  options: ["Extended Play", "Electronic Performance", "Extra Production", "Equalized Playback"],
  answer: "Extended Play"
},
{
  id: "music_0333",
  category: "music",
  difficulty: 50,
  question: "On a traditional vinyl single, what is the B-side?",
  options: ["The reverse side of the record", "The album's front cover", "The first track on every album", "The recording studio's master tape"],
  answer: "The reverse side of the record"
},
{
  id: "music_0334",
  category: "music",
  difficulty: 50,
  question: "What is an instrumental track?",
  options: ["A piece of music without sung or spoken vocals", "A song performed only by a choir", "A recording containing only spoken dialogue", "A track made entirely of sound effects"],
  answer: "A piece of music without sung or spoken vocals"
},
{
  id: "music_0335",
  category: "music",
  difficulty: 50,
  question: "What is a film soundtrack?",
  options: ["Music and audio associated with a film", "A list of actors in a film", "A camera used during filming", "A printed copy of the film script"],
  answer: "Music and audio associated with a film"
},
{
  id: "music_0336",
  category: "music",
  difficulty: 50,
  question: "What is a theme song in a television series?",
  options: ["Music associated with identifying or introducing the show", "The final scene of every episode", "A list of the show's actors", "The sound recorded by the studio audience"],
  answer: "Music associated with identifying or introducing the show"
},
{
  id: "music_0337",
  category: "music",
  difficulty: 50,
  question: "What is a ringtone?",
  options: ["A sound or melody used to alert someone to an incoming call", "A device used to tune a guitar", "A type of concert recording", "A song played only by an orchestra"],
  answer: "A sound or melody used to alert someone to an incoming call"
},
{
  id: "music_0338",
  category: "music",
  difficulty: 50,
  question: "What is a fanfare?",
  options: ["A short, ceremonial musical passage", "A long silent pause", "A type of recording cable", "A song performed only as a lullaby"],
  answer: "A short, ceremonial musical passage"
},
{
  id: "music_0339",
  category: "music",
  difficulty: 50,
  question: "What is the main purpose of a national anthem?",
  options: ["To represent a country through an official or patriotic song", "To announce the start of a private concert", "To teach musicians how to read notes", "To provide background music for advertisements"],
  answer: "To represent a country through an official or patriotic song"
},
{
  id: "music_0340",
  category: "music",
  difficulty: 50,
  question: "Which type of song is traditionally sung to help a baby fall asleep?",
  options: ["Lullaby", "Anthem", "March", "Fanfare"],
  answer: "Lullaby"
},
{
  id: "music_0341",
  category: "music",
  difficulty: 50,
  question: "What is a hymn?",
  options: ["A song of praise or worship", "A piece written only for a marching band", "A type of electronic dance track", "A recording used to tune instruments"],
  answer: "A song of praise or worship"
},
{
  id: "music_0342",
  category: "music",
  difficulty: 50,
  question: "Which type of song is traditionally associated with Christmas celebrations?",
  options: ["Christmas carol", "Work song", "Sea shanty", "War march"],
  answer: "Christmas carol"
},
{
  id: "music_0343",
  category: "music",
  difficulty: 50,
  question: "Which musical form is commonly written for a regular walking or marching beat?",
  options: ["March", "Waltz", "Nocturne", "Rhapsody"],
  answer: "March"
},
{
  id: "music_0344",
  category: "music",
  difficulty: 50,
  question: "Which dance form is traditionally associated with music in triple time?",
  options: ["Waltz", "March", "Tango", "Polka"],
  answer: "Waltz"
},
{
  id: "music_0345",
  category: "music",
  difficulty: 50,
  question: "What is syncopation in music?",
  options: ["Emphasizing unexpected beats or offbeat parts of a rhythm", "Playing every note at the same volume", "Repeating a melody without changing its pitch", "Singing without instrumental accompaniment"],
  answer: "Emphasizing unexpected beats or offbeat parts of a rhythm"
},
{
  id: "music_0346",
  category: "music",
  difficulty: 50,
  question: "What is a polyrhythm?",
  options: ["The use of contrasting rhythms at the same time", "A melody played only in one octave", "A song performed by several solo singers in turn", "A recording with no percussion"],
  answer: "The use of contrasting rhythms at the same time"
},
{
  id: "music_0347",
  category: "music",
  difficulty: 50,
  question: "What is counterpoint in music?",
  options: ["The combination of independent melodic lines", "The use of only one repeated note", "A technique for increasing recording volume", "A type of drum used in orchestras"],
  answer: "The combination of independent melodic lines"
},
{
  id: "music_0348",
  category: "music",
  difficulty: 50,
  question: "Which musical term describes the distinctive quality that makes one instrument sound different from another?",
  options: ["Timbre", "Tempo", "Meter", "Dynamics"],
  answer: "Timbre"
},
{
  id: "music_0349",
  category: "music",
  difficulty: 50,
  question: "What does pitch describe in music?",
  options: ["How high or low a sound is", "How long a song lasts", "How many people are singing", "How loud an audience applauds"],
  answer: "How high or low a sound is"
},
{
  id: "music_0350",
  category: "music",
  difficulty: 50,
  question: "What is vibrato in singing or instrumental performance?",
  options: ["A slight, regular variation in pitch", "A sudden stop in the music", "A repeated drum pattern", "A gradual increase in tempo"],
  answer: "A slight, regular variation in pitch"
},


{
  id: "music_0351",
  category: "music",
  difficulty: 50,
  question: "The kora is a traditional string instrument associated with which region?",
  options: ["West Africa", "Eastern Europe", "South America", "East Asia"],
  answer: "West Africa"
},
{
  id: "music_0352",
  category: "music",
  difficulty: 50,
  question: "How many strings does a traditional 21-string kora usually have?",
  options: ["21", "6", "12", "36"],
  answer: "21"
},
{
  id: "music_0353",
  category: "music",
  difficulty: 50,
  question: "Which West African instrument can change its pitch when a player squeezes its cords?",
  options: ["Talking drum", "Kora", "Shekere", "Balafon"],
  answer: "Talking drum"
},
{
  id: "music_0354",
  category: "music",
  difficulty: 50,
  question: "Which West African hand drum has a goblet-shaped body?",
  options: ["Djembe", "Tabla", "Timpani", "Bongo"],
  answer: "Djembe"
},
{
  id: "music_0355",
  category: "music",
  difficulty: 50,
  question: "The mbira, often called a thumb piano, is strongly associated with which country?",
  options: ["Zimbabwe", "Morocco", "Egypt", "Ghana"],
  answer: "Zimbabwe"
},
{
  id: "music_0356",
  category: "music",
  difficulty: 50,
  question: "Which traditional percussion instrument is made from a gourd covered with a net of beads?",
  options: ["Shekere", "Djembe", "Kora", "Oud"],
  answer: "Shekere"
},
{
  id: "music_0357",
  category: "music",
  difficulty: 50,
  question: "Which instrument is played by plucking metal tines, often with the thumbs?",
  options: ["Kalimba", "Sitar", "Erhu", "Shamisen"],
  answer: "Kalimba"
},
{
  id: "music_0358",
  category: "music",
  difficulty: 50,
  question: "The oud is a traditional string instrument widely associated with which musical region?",
  options: ["The Middle East", "The Caribbean", "Northern Europe", "The Pacific Islands"],
  answer: "The Middle East"
},
{
  id: "music_0359",
  category: "music",
  difficulty: 50,
  question: "Which plucked string instrument is strongly associated with classical music from North India?",
  options: ["Sitar", "Erhu", "Koto", "Balalaika"],
  answer: "Sitar"
},
{
  id: "music_0360",
  category: "music",
  difficulty: 50,
  question: "Which pair of hand drums is widely used in North Indian classical music?",
  options: ["Tabla", "Taiko", "Bongos", "Timpani"],
  answer: "Tabla"
},
{
  id: "music_0361",
  category: "music",
  difficulty: 50,
  question: "Which Chinese instrument is a two-stringed bowed instrument?",
  options: ["Erhu", "Sitar", "Kora", "Shamisen"],
  answer: "Erhu"
},
{
  id: "music_0362",
  category: "music",
  difficulty: 50,
  question: "The shakuhachi is a traditional bamboo flute from which country?",
  options: ["Japan", "China", "India", "Indonesia"],
  answer: "Japan"
},
{
  id: "music_0363",
  category: "music",
  difficulty: 50,
  question: "Which traditional Japanese instrument is a three-stringed lute?",
  options: ["Shamisen", "Koto", "Erhu", "Oud"],
  answer: "Shamisen"
},
{
  id: "music_0364",
  category: "music",
  difficulty: 50,
  question: "Taiko are traditional drums associated with which country?",
  options: ["Japan", "Brazil", "Greece", "Mexico"],
  answer: "Japan"
},
{
  id: "music_0365",
  category: "music",
  difficulty: 50,
  question: "The didgeridoo is a traditional wind instrument of Indigenous peoples from which country?",
  options: ["Australia", "New Zealand", "Canada", "South Africa"],
  answer: "Australia"
},
{
  id: "music_0366",
  category: "music",
  difficulty: 50,
  question: "The steelpan instrument originated in which country?",
  options: ["Trinidad and Tobago", "Jamaica", "Barbados", "Cuba"],
  answer: "Trinidad and Tobago"
},
{
  id: "music_0367",
  category: "music",
  difficulty: 50,
  question: "Which instrument is strongly associated with traditional Argentine tango music?",
  options: ["Bandoneon", "Didgeridoo", "Shakuhachi", "Balalaika"],
  answer: "Bandoneon"
},
{
  id: "music_0368",
  category: "music",
  difficulty: 50,
  question: "The charango is a small string instrument associated with which region?",
  options: ["The Andes", "Scandinavia", "West Africa", "The Middle East"],
  answer: "The Andes"
},
{
  id: "music_0369",
  category: "music",
  difficulty: 50,
  question: "Which instrument consists of several pipes of different lengths arranged together and is also called a pan flute?",
  options: ["Panpipes", "Bagpipes", "Piccolo", "Bassoon"],
  answer: "Panpipes"
},
{
  id: "music_0370",
  category: "music",
  difficulty: 50,
  question: "The bouzouki is a traditional string instrument associated with which country?",
  options: ["Greece", "Russia", "Japan", "Ethiopia"],
  answer: "Greece"
},
{
  id: "music_0371",
  category: "music",
  difficulty: 50,
  question: "Which Russian string instrument is known for its triangular body?",
  options: ["Balalaika", "Sitar", "Koto", "Oud"],
  answer: "Balalaika"
},
{
  id: "music_0372",
  category: "music",
  difficulty: 50,
  question: "The bağlama is a traditional long-necked string instrument associated with which country?",
  options: ["Turkey", "Brazil", "Japan", "Norway"],
  answer: "Turkey"
},
{
  id: "music_0373",
  category: "music",
  difficulty: 50,
  question: "Which Middle Eastern instrument is a type of plucked zither with many strings?",
  options: ["Qanun", "Djembe", "Erhu", "Didgeridoo"],
  answer: "Qanun"
},
{
  id: "music_0374",
  category: "music",
  difficulty: 50,
  question: "Which traditional Japanese string instrument is a large zither with movable bridges?",
  options: ["Koto", "Oud", "Balalaika", "Charango"],
  answer: "Koto"
},
{
  id: "music_0375",
  category: "music",
  difficulty: 50,
  question: "The guzheng is a traditional plucked string instrument from which country?",
  options: ["China", "India", "Greece", "Mexico"],
  answer: "China"
},
{
  id: "music_0376",
  category: "music",
  difficulty: 50,
  question: "Which Chinese plucked string instrument has a pear-shaped body and a short neck?",
  options: ["Pipa", "Kora", "Tabla", "Shakuhachi"],
  answer: "Pipa"
},
{
  id: "music_0377",
  category: "music",
  difficulty: 50,
  question: "Which double-headed drum is widely used in Punjabi folk music?",
  options: ["Dhol", "Koto", "Oud", "Erhu"],
  answer: "Dhol"
},
{
  id: "music_0378",
  category: "music",
  difficulty: 50,
  question: "Which bowed string instrument is widely associated with classical music from South Asia?",
  options: ["Sarangi", "Balalaika", "Bouzouki", "Shekere"],
  answer: "Sarangi"
},
{
  id: "music_0379",
  category: "music",
  difficulty: 50,
  question: "Which Indian musician became internationally known for popularizing the sitar?",
  options: ["Ravi Shankar", "Zakir Hussain", "A. R. Rahman", "Bhimsen Joshi"],
  answer: "Ravi Shankar"
},
{
  id: "music_0380",
  category: "music",
  difficulty: 50,
  question: "Which Indian musician was internationally celebrated for his tabla playing?",
  options: ["Zakir Hussain", "Ravi Shankar", "Anoushka Shankar", "Hariprasad Chaurasia"],
  answer: "Zakir Hussain"
},
{
  id: "music_0381",
  category: "music",
  difficulty: 50,
  question: "Qawwali is a devotional music tradition especially associated with which region?",
  options: ["South Asia", "Northern Europe", "The Caribbean", "South America"],
  answer: "South Asia"
},
{
  id: "music_0382",
  category: "music",
  difficulty: 50,
  question: "Which Pakistani singer became internationally famous for performing qawwali?",
  options: ["Nusrat Fateh Ali Khan", "Atif Aslam", "Ali Zafar", "Rahat Fateh Ali Khan"],
  answer: "Nusrat Fateh Ali Khan"
},
{
  id: "music_0383",
  category: "music",
  difficulty: 50,
  question: "Rai music developed in which North African country?",
  options: ["Algeria", "Egypt", "Kenya", "Senegal"],
  answer: "Algeria"
},
{
  id: "music_0384",
  category: "music",
  difficulty: 50,
  question: "Which Algerian singer is internationally known for popularizing rai music?",
  options: ["Khaled", "Youssou N'Dour", "Salif Keita", "Fela Kuti"],
  answer: "Khaled"
},
{
  id: "music_0385",
  category: "music",
  difficulty: 50,
  question: "Mbalax is a popular music genre that developed in which country?",
  options: ["Senegal", "Nigeria", "Morocco", "Zimbabwe"],
  answer: "Senegal"
},
{
  id: "music_0386",
  category: "music",
  difficulty: 50,
  question: "Which Senegalese singer is known worldwide for the song 7 Seconds with Neneh Cherry?",
  options: ["Youssou N'Dour", "Khaled", "Salif Keita", "Manu Chao"],
  answer: "Youssou N'Dour"
},
{
  id: "music_0387",
  category: "music",
  difficulty: 50,
  question: "Soukous is a dance music genre associated especially with which part of Africa?",
  options: ["Central Africa", "North Africa", "Southern Europe", "East Asia"],
  answer: "Central Africa"
},
{
  id: "music_0388",
  category: "music",
  difficulty: 50,
  question: "Highlife music developed in which West African country?",
  options: ["Ghana", "Ethiopia", "Morocco", "Angola"],
  answer: "Ghana"
},
{
  id: "music_0389",
  category: "music",
  difficulty: 50,
  question: "Juju music is a popular music style that developed in which country?",
  options: ["Nigeria", "Ghana", "South Africa", "Uganda"],
  answer: "Nigeria"
},
{
  id: "music_0390",
  category: "music",
  difficulty: 50,
  question: "Which Nigerian musician is widely known for popularizing juju music internationally?",
  options: ["King Sunny Ade", "Fela Kuti", "William Onyeabor", "Olamide"],
  answer: "King Sunny Ade"
},
{
  id: "music_0391",
  category: "music",
  difficulty: 50,
  question: "Which Nigerian music genre was developed by Alhaji Sikiru Ayinde Barrister?",
  options: ["Fuji", "Highlife", "Mbalax", "Soukous"],
  answer: "Fuji"
},
{
  id: "music_0392",
  category: "music",
  difficulty: 50,
  question: "Apala music is a traditional popular music genre associated with which Nigerian ethnic group?",
  options: ["Yoruba", "Igbo", "Tiv", "Kanuri"],
  answer: "Yoruba"
},
{
  id: "music_0393",
  category: "music",
  difficulty: 50,
  question: "Benga is a popular guitar-based music style associated with which country?",
  options: ["Kenya", "Morocco", "Ghana", "Egypt"],
  answer: "Kenya"
},
{
  id: "music_0394",
  category: "music",
  difficulty: 50,
  question: "Taarab music is especially associated with the Swahili coastal culture of which region?",
  options: ["East Africa", "West Africa", "Central Asia", "Northern Europe"],
  answer: "East Africa"
},
{
  id: "music_0395",
  category: "music",
  difficulty: 50,
  question: "Gnawa music is a traditional musical form associated with which country?",
  options: ["Morocco", "Senegal", "Ethiopia", "Namibia"],
  answer: "Morocco"
},
{
  id: "music_0396",
  category: "music",
  difficulty: 50,
  question: "Fado is a traditional music genre that originated in which country?",
  options: ["Portugal", "Spain", "Italy", "France"],
  answer: "Portugal"
},
{
  id: "music_0397",
  category: "music",
  difficulty: 50,
  question: "Calypso music is strongly associated with which Caribbean country?",
  options: ["Trinidad and Tobago", "Jamaica", "Haiti", "The Bahamas"],
  answer: "Trinidad and Tobago"
},
{
  id: "music_0398",
  category: "music",
  difficulty: 50,
  question: "Soca music developed in which Caribbean country?",
  options: ["Trinidad and Tobago", "Cuba", "Barbados", "Dominican Republic"],
  answer: "Trinidad and Tobago"
},
{
  id: "music_0399",
  category: "music",
  difficulty: 50,
  question: "Merengue is a popular music and dance genre originating in which country?",
  options: ["Dominican Republic", "Argentina", "Colombia", "Chile"],
  answer: "Dominican Republic"
},
{
  id: "music_0400",
  category: "music",
  difficulty: 50,
  question: "Cumbia is a music and dance genre that originated in which country?",
  options: ["Colombia", "Brazil", "Peru", "Venezuela"],
  answer: "Colombia"
},


  ];

  var currentQuestionIndex = 0;
  var score = 0;
  var selectedAnswer = null;
  var urlParams = new URLSearchParams(window.location.search);
  var selectedCategory = urlParams.get("category");
  var allQuestions = questions;

  questions = allQuestions.filter(function(item){
    return item.category === selectedCategory;
  });
  var categoryQuestions = questions.slice();
  var usedQuestions = new Set ();

  if (questions.length === 0){
    question.textContent = "No questions available in this category yet.";
    options.innerHTML = "";
    nextQuestion.disabled = true;
    quizTimer.textContent = "No question available";
  }
  console.log("Questions in this category:", questions .length)

  console.log("selected category:", selectedCategory);
  var timerLeft = 20;
  var timerInterval;

function startTimer(){
  clearInterval(timerInterval);
  timeLeft = 20;
  quizTimer.textContent = "Time: " + timeLeft + "s";

  timerInterval = setInterval(function(){
    timeLeft--

    quizTimer.textContent = "Time: " + timeLeft + "s";

    if(timeLeft <= 0){
      clearInterval(timerInterval);

      if (currentQuestionIndex === questions.length - 1) {
        showResults();

      } else {
        currentQuestionIndex++;
        showQuestion();
      }
    }
  }, 1000);
}

function showResults(){document
  var percentage = (score / questions.length) * 100;

  if (percentage < 40) {
    performanceMessage.textContent = "POOR";
  } else if (percentage < 60) {
    performanceMessage.textContent = "GOOD";
  } else if (percentage < 75) {
    performanceMessage.textContent = "NICE";
  } else if (percentage < 90) {
    performanceMessage.textContent = "FANTASTIC";
  } else {
    performanceMessage.textContent = "EXCELLENT 🏆";
  }

  finalScore.textContent = " Score: " + score + "/" + questions.length;
  finalPercentage.textContent = "Percentage: " + percentage + "%";
  resultPopup.style.display = "block";
  nextQuestion.textContent = "Quiz Completed!";
  nextQuestion.disabled = true;

}


  function showQuestion(){
    var currentQuestion = questions[currentQuestionIndex];
    questionProgress.textContent = "Question " + (currentQuestionIndex + 1) + " of " + questions.length;
    progressBar.max = questions.length;
    progressBar.value = currentQuestionIndex + 1;
    selectedAnswer = null
    nextQuestion.disabled = true
    feedback.textContent = "";
    var currentOptions = currentQuestion.options;
    question.textContent = currentQuestion.question;

options.innerHTML ="";

    currentOptions.forEach(function(option){

 var li = document.createElement("li");

 li.addEventListener("click", function(){

  if(selectedAnswer !== null) {
  return;
  }

  if(timeLeft <= 0){
    return;
  }

  selectedAnswer = li;
  clearInterval(timerInterval);
  nextQuestion.disabled = false

   options.querySelectorAll("li").forEach(function(item){
 item.classList.remove("correct");
  item.classList.remove("incorrect");
  });
  
  if(selectedAnswer.textContent === currentQuestion.answer){
    score++;
    feedback.textContent = "Correct answer";
    selectedAnswer.classList.add("correct")
    console.log(selectedAnswer.className);

  } else {
    feedback.textContent = "Wrong answer! Try again"
    selectedAnswer.classList.add("incorrect")
    options.querySelectorAll("li").forEach(function(item){
      if(item.textContent === currentQuestion.answer){
        item.classList.add("correct")

      }
    });
  }

  if (currentQuestionIndex === questions.length - 1) {
   
  showResults();

  }

 });

    li.textContent = option;
    options.appendChild(li);
    });

    startTimer();
  }
   

showQuestion();

nextQuestion.addEventListener("click", function(){
  if(currentQuestionIndex < questions.length - 1){
currentQuestionIndex++;
  showQuestion();
  }
})

restartQuiz.addEventListener("click", function(){
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswer = null;
  result.textContent = "";
  nextQuestion.disabled = false;
  nextQuestion.textContent = "Next Qustion";
   resultPopup.style.display = "none";
   shuffelQuestions();
  showQuestion();
});

closeResult.addEventListener("click", function(){
  resultPopup.style.display = "none";
})

backToCategories.addEventListener("click", function(){
  window.location.href = "index.html";
});

function shuffelQuestions(){
    var availableQuestions = categoryQuestions.filter(function(item){
      return !usedQuestions.has(item);
    });

    if (availableQuestions.length === 0) {
      usedQuestions.clear();
      availableQuestions=categoryQuestions.slice();
    }

    for(var i = availableQuestions.length - 1; i > 0; i--){
      var j = Math.floor(Math.random() * (i = 1));
      var temp = availableQuestions [i];
      availableQuestions[i] = availableQuestions[j];
      availableQuestions[j] = temp;
    }

    questions = availableQuestions.slice(0, 50);

    questions.forEach(function(item){
      usedQuestions.add(item);
    });
  }

if (questions.length > 0) {
   shuffelQuestions();
  showQuestion();
}
