function flagFromCode(code) {
  return code
    .toUpperCase()
    .split("")
    .map((letter) => String.fromCodePoint(127397 + letter.charCodeAt(0)))
    .join("");
}

const countryRows = `
AF|Afganistan|Kabul|41400000
AL|Albaania|Tirana|2740000
DZ|Alžeeria|Alžiir|46800000
AD|Andorra|Andorra la Vella|81000
AO|Angola|Luanda|36700000
AG|Antigua ja Barbuda|Saint John's|94000
AR|Argentina|Buenos Aires|47000000
AM|Armeenia|Jerevan|2780000
AU|Austraalia|Canberra|27200000
AT|Austria|Viin|9200000
AZ|Aserbaidžaan|Bakuu|10300000
BS|Bahama|Nassau|401000
BH|Bahrein|Manama|1570000
BD|Bangladesh|Dhaka|174700000
BB|Barbados|Bridgetown|282000
BE|Belgia|Brüssel|11800000
BY|Valgevene|Minsk|9100000
BZ|Belize|Belmopan|423000
BJ|Benin|Porto-Novo|14100000
BT|Bhutan|Thimphu|787000
BO|Boliivia|Sucre|12400000
BA|Bosnia ja Hertsegoviina|Sarajevo|3180000
BW|Botswana|Gaborone|2560000
BR|Brasiilia|Brasília|203100000
BN|Brunei|Bandar Seri Begawan|456000
BG|Bulgaaria|Sofia|6440000
BF|Burkina Faso|Ouagadougou|23200000
BI|Burundi|Gitega|13300000
CV|Cabo Verde|Praia|523000
KH|Kambodža|Phnom Penh|17300000
CM|Kamerun|Yaoundé|29100000
CA|Kanada|Ottawa|41000000
CF|Kesk-Aafrika Vabariik|Bangui|5600000
TD|Tšaad|N'Djamena|18900000
CL|Tšiili|Santiago|19800000
CN|Hiina|Peking|1409000000
CO|Colombia|Bogotá|52300000
KM|Komoorid|Moroni|852000
CG|Kongo Vabariik|Brazzaville|6180000
CD|Kongo Demokraatlik Vabariik|Kinshasa|109300000
CR|Costa Rica|San José|5260000
CI|Côte d'Ivoire|Yamoussoukro|32200000
HR|Horvaatia|Zagreb|3860000
CU|Kuuba|Havanna|10900000
CY|Küpros|Nikosia|1270000
CZ|Tšehhi|Praha|10900000
DK|Taani|Kopenhaagen|5960000
DJ|Djibouti|Djibouti|1160000
DM|Dominica|Roseau|66000
DO|Dominikaani Vabariik|Santo Domingo|11500000
EC|Ecuador|Quito|18200000
EG|Egiptus|Kairo|114000000
SV|El Salvador|San Salvador|6380000
GQ|Ekvatoriaal-Guinea|Malabo|1890000
ER|Eritrea|Asmara|3600000
EE|Eesti|Tallinn|1373310
SZ|Eswatini|Mbabane|1240000
ET|Etioopia|Addis Abeba|129700000
FJ|Fidži|Suva|928000
FI|Soome|Helsingi|5629000
FR|Prantsusmaa|Pariis|68300000
GA|Gabon|Libreville|2510000
GM|Gambia|Banjul|2800000
GE|Gruusia|Tbilisi|3710000
DE|Saksamaa|Berliin|84500000
GH|Ghana|Accra|34100000
GR|Kreeka|Ateena|10400000
GD|Grenada|Saint George's|125000
GT|Guatemala|Guatemala|18600000
GN|Guinea|Conakry|14800000
GW|Guinea-Bissau|Bissau|2200000
GY|Guyana|Georgetown|831000
HT|Haiti|Port-au-Prince|11700000
HN|Honduras|Tegucigalpa|10800000
HU|Ungari|Budapest|9590000
IS|Island|Reykjavik|394000
IN|India|New Delhi|1438000000
ID|Indoneesia|Jakarta|281000000
IR|Iraan|Teheran|89100000
IQ|Iraak|Bagdad|45500000
IE|Iirimaa|Dublin|5300000
IL|Iisrael|Jeruusalemm|9900000
IT|Itaalia|Rooma|58900000
JM|Jamaica|Kingston|2830000
JP|Jaapan|Tokyo|123300000
JO|Jordaania|Amman|11400000
KZ|Kasahstan|Astana|20200000
KE|Keenia|Nairobi|55200000
KI|Kiribati|Tarawa|134000
KP|Põhja-Korea|Pyongyang|26200000
KR|Lõuna-Korea|Seoul|51700000
KW|Kuveit|Kuveit|4930000
KG|Kõrgõzstan|Biškek|7100000
LA|Laos|Vientiane|7760000
LV|Läti|Riia|1883000
LB|Liibanon|Beirut|5490000
LS|Lesotho|Maseru|2330000
LR|Libeeria|Monrovia|5600000
LY|Liibüa|Tripoli|7380000
LI|Liechtenstein|Vaduz|40000
LT|Leedu|Vilnius|2857000
LU|Luksemburg|Luxembourg|672000
MG|Madagaskar|Antananarivo|30800000
MW|Malawi|Lilongwe|21500000
MY|Malaisia|Kuala Lumpur|35100000
MV|Maldiivid|Malé|526000
ML|Mali|Bamako|24500000
MT|Malta|Valletta|553000
MH|Marshalli Saared|Majuro|42000
MR|Mauritaania|Nouakchott|5000000
MU|Mauritius|Port Louis|1270000
MX|Mehhiko|México|129000000
FM|Mikroneesia|Palikir|113000
MD|Moldova|Chișinău|2420000
MC|Monaco|Monaco|39000
MN|Mongoolia|Ulaanbaatar|3510000
ME|Montenegro|Podgorica|617000
MA|Maroko|Rabat|37900000
MZ|Mosambiik|Maputo|34100000
MM|Myanmar|Naypyidaw|55000000
NA|Namiibia|Windhoek|3100000
NR|Nauru|Yaren|12000
NP|Nepal|Kathmandu|29600000
NL|Holland|Amsterdam|18000000
NZ|Uus-Meremaa|Wellington|5300000
NI|Nicaragua|Managua|7000000
NE|Niger|Niamey|27200000
NG|Nigeeria|Abuja|227000000
MK|Põhja-Makedoonia|Skopje|1830000
NO|Norra|Oslo|5560000
OM|Omaan|Muscat|4570000
PK|Pakistan|Islamabad|241500000
PW|Belau|Ngerulmud|18000
PS|Palestiina|Jeruusalemm|5500000
PA|Panama|Panama|4500000
PG|Paapua Uus-Guinea|Port Moresby|10300000
PY|Paraguay|Asunción|6860000
PE|Peruu|Lima|34400000
PH|Filipiinid|Manila|117300000
PL|Poola|Varssavi|37500000
PT|Portugal|Lissabon|10300000
QA|Katar|Doha|3050000
RO|Rumeenia|Bukarest|19000000
RU|Venemaa|Moskva|144000000
RW|Rwanda|Kigali|14200000
KN|Saint Kitts ja Nevis|Basseterre|47000
LC|Saint Lucia|Castries|180000
VC|Saint Vincent ja Grenadiinid|Kingstown|101000
WS|Samoa|Apia|225000
SM|San Marino|San Marino|34000
ST|Sao Tome ja Principe|São Tomé|232000
SA|Saudi Araabia|Riyadh|33900000
SN|Senegal|Dakar|18600000
RS|Serbia|Belgrad|6660000
SC|Seišellid|Victoria|131000
SL|Sierra Leone|Freetown|8750000
SG|Singapur|Singapur|5920000
SK|Slovakkia|Bratislava|5430000
SI|Sloveenia|Ljubljana|2120000
SB|Saalomoni Saared|Honiara|830000
SO|Somaalia|Mogadishu|19100000
ZA|Lõuna-Aafrika Vabariik|Pretoria|63400000
SS|Lõuna-Sudaan|Juba|11900000
ES|Hispaania|Madrid|48400000
LK|Sri Lanka|Sri Jayawardenepura Kotte|21900000
SD|Sudaan|Khartoum|50400000
SR|Suriname|Paramaribo|639000
SE|Rootsi|Stockholm|10540000
CH|Šveits|Bern|8900000
SY|Süüria|Damaskus|23800000
TJ|Tadžikistan|Dušanbe|10500000
TZ|Tansaania|Dodoma|68700000
TH|Tai|Bangkok|71800000
TL|Ida-Timor|Dili|1400000
TG|Togo|Lomé|9300000
TO|Tonga|Nuku'alofa|104000
TT|Trinidad ja Tobago|Port of Spain|1530000
TN|Tuneesia|Tunis|12200000
TR|Türgi|Ankara|85300000
TM|Türkmenistan|Aşgabat|7060000
TV|Tuvalu|Funafuti|11000
UG|Uganda|Kampala|50000000
UA|Ukraina|Kiiev|36700000
AE|Araabia Ühendemiraadid|Abu Dhabi|10400000
GB|Ühendkuningriik|London|69100000
US|Ameerika Ühendriigid|Washington|336000000
UY|Uruguay|Montevideo|3400000
UZ|Usbekistan|Taškent|36500000
VU|Vanuatu|Port Vila|335000
VA|Vatikan|Vatikan|800
VE|Venezuela|Caracas|28500000
VN|Vietnam|Hanoi|101300000
YE|Jeemen|Sanaa|40500000
ZM|Sambia|Lusaka|20700000
ZW|Zimbabwe|Harare|16600000
`.trim();

const countries = countryRows.split("\n").map((row) => {
  const [code, name, capital, population] = row.split("|");
  return {
    code,
    name,
    capital,
    population: Number(population),
    flag: flagFromCode(code),
  };
});

const state = {
  mode: "quiz",
  topic: "flag",
  difficulty: "easy",
  score: 0,
  streak: 0,
  round: 0,
  maxRounds: 10,
  answered: false,
  usedStudyIndices: [],
  usedQuizIndices: [],
  currentQuestion: null,
};

const scoreEl = document.querySelector("#score");
const streakEl = document.querySelector("#streak");
const roundEl = document.querySelector("#round");
const questionTitleEl = document.querySelector("#questionTitle");
const questionBadgeEl = document.querySelector("#questionBadge");
const promptVisualEl = document.querySelector("#promptVisual");
const promptTextEl = document.querySelector("#promptText");
const answerGridEl = document.querySelector("#answerGrid");
const feedbackTextEl = document.querySelector("#feedbackText");
const nextButtonEl = document.querySelector("#nextButton");
const restartButtonEl = document.querySelector("#restartButton");
const studyCardEl = document.querySelector("#studyCard");

const topicLabels = {
  flag: "Lipud",
  "choose-flag": "Vali lipp",
  capital: "Pealinnad",
  population: "Rahvaarv",
  mixed: "Segarežiim",
};

const difficultyLevels = {
  easy: 4,
  medium: 6,
  hard: 8,
};

function shuffle(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function formatPopulation(population) {
  return new Intl.NumberFormat("et-EE").format(population);
}

function nextUnusedIndex(usedIndices) {
  if (usedIndices.length === 0) {
    usedIndices.push(...shuffle(countries.map((_, index) => index)));
  }

  return usedIndices.pop();
}

function takeRandomItems(list, count, getKey = (item) => item) {
  const seenKeys = new Set();

  return shuffle(list).filter((item) => {
    const key = getKey(item);
    if (seenKeys.has(key)) {
      return false;
    }

    seenKeys.add(key);
    return true;
  }).slice(0, count);
}

function getActiveTopic() {
  if (state.topic !== "mixed") {
    return state.topic;
  }

  const topics = ["flag", "choose-flag", "capital", "population"];
  return topics[Math.floor(Math.random() * topics.length)];
}

function createQuestion() {
  const index = nextUnusedIndex(state.usedQuizIndices);
  const country = countries[index];
  const topic = getActiveTopic();
  const answerCount = difficultyLevels[state.difficulty];

  let question;
  if (topic === "flag") {
    const distractors = takeRandomItems(
      countries.filter((item) => item.name !== country.name),
      answerCount - 1,
      (item) => item.name
    ).map((item) => item.name);

    const options = shuffle([
      country.name,
      ...distractors,
    ]);

    question = {
      topic,
      country,
      correctAnswer: country.name,
      title: "Millise riigi lipp see on?",
      promptText: "Tuvasta lipp ja vali õige riigi nimi.",
      visualType: "flag",
      visualValue: country.flag,
      options,
    };
  }

  if (topic === "capital") {
    const distractors = takeRandomItems(
      countries.filter((item) => item.name !== country.name),
      answerCount - 1,
      (item) => item.capital
    ).map((item) => item.capital);

    const options = shuffle([
      country.capital,
      ...distractors,
    ]);

    question = {
      topic,
      country,
      correctAnswer: country.capital,
      title: `Mis on riigi ${country.name} pealinn?`,
      promptText: "Vali sellele riigile õige pealinn.",
      visualType: "capital",
      visualValue: country.name,
      options,
    };
  }

  if (topic === "choose-flag") {
    const distractors = takeRandomItems(
      countries.filter((item) => item.name !== country.name),
      answerCount - 1,
      (item) => item.code
    ).map((item) => item.flag);

    const options = shuffle([country.flag, ...distractors]);

    question = {
      topic,
      country,
      correctAnswer: country.flag,
      title: `Milline lipp kuulub riigile ${country.name}?`,
      promptText: "Vali allolevate lippude seast õige vaste.",
      visualType: "country-name",
      visualValue: country.name,
      options,
      answerStyle: "flag",
    };
  }

  if (topic === "population") {
    const sorted = [...countries].sort(
      (first, second) =>
        Math.abs(first.population - country.population) -
        Math.abs(second.population - country.population)
    );

    const distractors = takeRandomItems(
      sorted.filter((item) => item.name !== country.name).slice(0, answerCount * 4),
      answerCount - 1,
      (item) => item.population
    ).map((item) => formatPopulation(item.population));

    const options = shuffle([formatPopulation(country.population), ...distractors]);

    question = {
      topic,
      country,
      correctAnswer: formatPopulation(country.population),
      title: `Kui suur on riigi ${country.name} rahvaarv?`,
      promptText: "Vali kõige õigem hinnang selle riigi rahvaarvule.",
      visualType: "population",
      visualValue: country.flag,
      options,
    };
  }

  return question;
}

function renderVisual(question) {
  if (question.visualType === "flag") {
    promptVisualEl.innerHTML = `<div class="flag-emoji">${question.visualValue}</div>`;
    return;
  }

  if (question.visualType === "capital") {
    promptVisualEl.innerHTML = `
      <div class="capital-visual">
        <div class="flag-emoji">${question.country.flag}</div>
        <div>${question.visualValue}</div>
      </div>
    `;
    return;
  }

  if (question.visualType === "country-name") {
    promptVisualEl.innerHTML = `
      <div class="capital-visual">
        <div>${question.visualValue}</div>
      </div>
    `;
    return;
  }

  promptVisualEl.innerHTML = `
    <div class="population-visual">
      <div class="flag-emoji">${question.visualValue}</div>
      <div>${question.country.name}</div>
    </div>
  `;
}

function renderQuizQuestion() {
  state.currentQuestion = createQuestion();
  state.answered = false;
  state.round += 1;

  const question = state.currentQuestion;
  questionTitleEl.textContent = question.title;
  questionBadgeEl.textContent = topicLabels[question.topic];
  promptTextEl.textContent = question.promptText;
  renderVisual(question);
  studyCardEl.classList.add("hidden");
  answerGridEl.classList.remove("hidden");
  answerGridEl.innerHTML = "";

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    if (question.answerStyle === "flag") {
      button.classList.add("flag-answer");
      button.innerHTML = `<span class="flag-emoji">${option}</span>`;
    } else {
      button.textContent = option;
    }
    button.addEventListener("click", () => handleAnswer(option, button));
    answerGridEl.append(button);
  });

  feedbackTextEl.textContent = "Vali üks vastus.";
  feedbackTextEl.className = "feedback-text";
  nextButtonEl.textContent = state.round >= state.maxRounds ? "Tulemused" : "Järgmine";
  updateStats();
}

function renderStudyCard() {
  const index = nextUnusedIndex(state.usedStudyIndices);
  const country = countries[index];

  questionTitleEl.textContent = `${country.name} meelespea`;
  questionBadgeEl.textContent = "Õpi";
  promptTextEl.textContent = "Vaata lipu, pealinna ja rahvaarvu seoseid. Vajuta siis järgmine kaart.";
  promptVisualEl.innerHTML = `<div class="flag-emoji">${country.flag}</div>`;

  answerGridEl.classList.add("hidden");
  studyCardEl.classList.remove("hidden");
  studyCardEl.innerHTML = `
    <div class="study-title">
      <span class="flag-emoji">${country.flag}</span>
      <span>${country.name}</span>
    </div>
    <div class="study-fact"><span>Pealinn</span><strong>${country.capital}</strong></div>
    <div class="study-fact"><span>Rahvaarv</span><strong>${formatPopulation(country.population)}</strong></div>
    <div class="study-fact"><span>Harjutusvihje</span><strong>Korda nime koos pealinnaga kolm korda.</strong></div>
  `;

  feedbackTextEl.textContent = "Õpperežiimis punkte ei arvestata.";
  feedbackTextEl.className = "feedback-text";
  nextButtonEl.textContent = "Järgmine kaart";
  updateStats();
}

function updateStats() {
  scoreEl.textContent = state.score;
  streakEl.textContent = state.streak;

  if (state.mode === "quiz") {
    roundEl.textContent = `${Math.min(state.round, state.maxRounds)} / ${state.maxRounds}`;
  } else {
    roundEl.textContent = "Vaba";
  }
}

function showResults() {
  questionTitleEl.textContent = "Voor läbi";
  questionBadgeEl.textContent = "Tulemus";
  promptVisualEl.innerHTML = `
    <div class="population-visual">
      <div>${state.score} / ${state.maxRounds}</div>
    </div>
  `;
  promptTextEl.textContent = "Alusta uuesti või vaheta teemat, et harjutada teisi teadmisi.";
  answerGridEl.classList.add("hidden");
  studyCardEl.classList.remove("hidden");
  studyCardEl.innerHTML = `
    <div class="study-fact"><span>Lõppseis</span><strong>${state.score} punkti</strong></div>
    <div class="study-fact"><span>Parim seeria</span><strong>${state.streak}</strong></div>
    <div class="study-fact"><span>Soovitus</span><strong>Proovi nüüd segarežiimi või raskemat taset.</strong></div>
  `;
  feedbackTextEl.textContent = "Vajuta «Alusta uuesti», et uus mäng käivitada.";
  feedbackTextEl.className = "feedback-text success";
}

function handleAnswer(selectedAnswer, selectedButton) {
  if (state.answered) {
    return;
  }

  state.answered = true;
  const isCorrect = selectedAnswer === state.currentQuestion.correctAnswer;
  const buttons = [...document.querySelectorAll(".answer-button")];

  buttons.forEach((button) => {
    button.disabled = true;
    if (button.textContent === state.currentQuestion.correctAnswer) {
      button.classList.add("correct");
    }
  });

  if (isCorrect) {
    state.score += 1;
    state.streak += 1;
    selectedButton.classList.add("correct");
    feedbackTextEl.textContent = "Õige vastus.";
    feedbackTextEl.className = "feedback-text success";
  } else {
    state.streak = 0;
    selectedButton.classList.add("wrong");
    feedbackTextEl.textContent = `Vale. Õige vastus on ${state.currentQuestion.correctAnswer}.`;
    feedbackTextEl.className = "feedback-text error";
  }

  updateStats();
}

function nextTurn() {
  if (state.mode === "study") {
    renderStudyCard();
    return;
  }

  if (state.round >= state.maxRounds && state.answered) {
    showResults();
    return;
  }

  if (state.round >= state.maxRounds && !state.answered) {
    feedbackTextEl.textContent = "Vasta enne, siis näed tulemust.";
    feedbackTextEl.className = "feedback-text error";
    return;
  }

  if (state.round > 0 && !state.answered) {
    feedbackTextEl.textContent = "Vasta enne järgmise küsimuse juurde liikumist.";
    feedbackTextEl.className = "feedback-text error";
    return;
  }

  renderQuizQuestion();
}

function restartGame() {
  state.score = 0;
  state.streak = 0;
  state.round = 0;
  state.answered = false;
  state.usedQuizIndices = [];
  state.usedStudyIndices = [];

  if (state.mode === "quiz") {
    renderQuizQuestion();
  } else {
    renderStudyCard();
  }
}

function bindChipGroup(selector, key) {
  document.querySelector(selector).addEventListener("click", (event) => {
    const button = event.target.closest("[data-mode], [data-topic], [data-difficulty]");
    if (!button) {
      return;
    }

    const value = button.dataset[key];
    if (!value) {
      return;
    }

    state[key] = value;
    document.querySelectorAll(`${selector} .chip`).forEach((chip) => {
      chip.classList.toggle("active", chip === button);
    });
    restartGame();
  });
}

bindChipGroup("#modeSwitcher", "mode");
bindChipGroup("#topicSwitcher", "topic");
bindChipGroup("#difficultySwitcher", "difficulty");

nextButtonEl.addEventListener("click", nextTurn);
restartButtonEl.addEventListener("click", restartGame);

restartGame();
