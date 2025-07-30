const evolutionFamilies = {
  bulbasaur: ["Bulbasaur", "Ivysaur", "Venusaur"],
  ivysaur: ["Bulbasaur", "Ivysaur", "Venusaur"],
  venusaur: ["Bulbasaur", "Ivysaur", "Venusaur"],

  charmander: ["Charmander", "Charmeleon", "Charizard"],
  charmeleon: ["Charmander", "Charmeleon", "Charizard"],
  charizard: ["Charmander", "Charmeleon", "Charizard"],

  squirtle: ["Squirtle", "Wartortle", "Blastoise"],
  wartortle: ["Squirtle", "Wartortle", "Blastoise"],
  blastoise: ["Squirtle", "Wartortle", "Blastoise"],

  caterpie: ["Caterpie", "Metapod", "Butterfree"],
  metapod: ["Caterpie", "Metapod", "Butterfree"],
  butterfree: ["Caterpie", "Metapod", "Butterfree"],

  weedle: ["Weedle", "Kakuna", "Beedrill"],
  kakuna: ["Weedle", "Kakuna", "Beedrill"],
  beedrill: ["Weedle", "Kakuna", "Beedrill"],

  pidgey: ["Pidgey", "Pidgeotto", "Pidgeot"],
  pidgeotto: ["Pidgey", "Pidgeotto", "Pidgeot"],
  pidgeot: ["Pidgey", "Pidgeotto", "Pidgeot"],

  rattata: ["Rattata", "Raticate"],
  raticate: ["Rattata", "Raticate"],
  alolan_rattata: ["Alolan Rattata", "Alolan Raticate"],
  alolan_raticate: ["Alolan Rattata", "Alolan Raticate"],

  spearow: ["Spearow", "Fearow"],
  fearow: ["Spearow", "Fearow"],

  ekans: ["Ekans", "Arbok"],
  arbok: ["Ekans", "Arbok"],

  pikachu: ["Pichu", "Pikachu", "Raichu"],
  pichu: ["Pichu", "Pikachu", "Raichu"],
  raichu: ["Pichu", "Pikachu", "Raichu"],
  alolan_raichu: ["Pichu", "Pikachu", "Alolan Raichu"],

  sandshrew: ["Sandshrew", "Sandslash"],
  sandslash: ["Sandshrew", "Sandslash"],
  alolan_sandshrew: ["Alolan Sandshrew", "Alolan Sandslash"],
  alolan_sandslash: ["Alolan Sandshrew", "Alolan Sandslash"],

  nidoran_f: ["Nidoran♀", "Nidorina", "Nidoqueen"],
  nidorina: ["Nidoran♀", "Nidorina", "Nidoqueen"],
  nidoqueen: ["Nidoran♀", "Nidorina", "Nidoqueen"],

  nidoran_m: ["Nidoran♂", "Nidorino", "Nidoking"],
  nidorino: ["Nidoran♂", "Nidorino", "Nidoking"],
  nidoking: ["Nidoran♂", "Nidorino", "Nidoking"],

  cleffa: ["Cleffa", "Clefairy", "Clefable"],
  clefairy: ["Cleffa", "Clefairy", "Clefable"],
  clefable: ["Cleffa", "Clefairy", "Clefable"],

  vulpix: ["Vulpix", "Ninetales"],
  ninetales: ["Vulpix", "Ninetales"],
  alolan_vulpix: ["Alolan Vulpix", "Alolan Ninetales"],
  alolan_ninetales: ["Alolan Vulpix", "Alolan Ninetales"],

  igglybuff: ["Igglybuff", "Jigglypuff", "Wigglytuff"],
  jigglypuff: ["Igglybuff", "Jigglypuff", "Wigglytuff"],
  wigglytuff: ["Igglybuff", "Jigglypuff", "Wigglytuff"],

  zubat: ["Zubat", "Golbat", "Crobat"],
  golbat: ["Zubat", "Golbat", "Crobat"],
  crobat: ["Zubat", "Golbat", "Crobat"],

  oddish: ["Oddish", "Gloom", "Vileplume", "Bellossom"],
  gloom: ["Oddish", "Gloom", "Vileplume", "Bellossom"],
  vileplume: ["Oddish", "Gloom", "Vileplume", "Bellossom"],
  bellossom: ["Oddish", "Gloom", "Vileplume", "Bellossom"],

  paras: ["Paras", "Parasect"],
  parasect: ["Paras", "Parasect"],

  venonat: ["Venonat", "Venomoth"],
  venomoth: ["Venonat", "Venomoth"],

  diglett: ["Diglett", "Dugtrio"],
  dugtrio: ["Diglett", "Dugtrio"],
  alolan_diglett: ["Alolan Diglett", "Alolan Dugtrio"],
  alolan_dugtrio: ["Alolan Diglett", "Alolan Dugtrio"],

  meowth: ["Meowth", "Persian"],
  persian: ["Meowth", "Persian"],
  alolan_meowth: ["Alolan Meowth", "Alolan Persian"],
  alolan_persian: ["Alolan Meowth", "Alolan Persian"],
  galarian_meowth: ["Galarian Meowth", "Perrserker"],
  perrserker: ["Galarian Meowth", "Perrserker"],

  psyduck: ["Psyduck", "Golduck"],
  golduck: ["Psyduck", "Golduck"],

  mankey: ["Mankey", "Primeape", "Annihilape"],
  primeape: ["Mankey", "Primeape", "Annihilape"],
  annihilape: ["Mankey", "Primeape", "Annihilape"],

  growlithe: ["Growlithe", "Arcanine"],
  arcanine: ["Growlithe", "Arcanine"],
  hisuian_growlithe: ["Hisuian Growlithe", "Hisuian Arcanine"],
  hisuian_arcanine: ["Hisuian Growlithe", "Hisuian Arcanine"],

  poliwag: ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"],
  poliwhirl: ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"],
  poliwrath: ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"],
  politoed: ["Poliwag", "Poliwhirl", "Poliwrath", "Politoed"],

  abra: ["Abra", "Kadabra", "Alakazam"],
  kadabra: ["Abra", "Kadabra", "Alakazam"],
  alakazam: ["Abra", "Kadabra", "Alakazam"],

  machop: ["Machop", "Machoke", "Machamp"],
  machoke: ["Machop", "Machoke", "Machamp"],
  machamp: ["Machop", "Machoke", "Machamp"],

  bellsprout: ["Bellsprout", "Weepinbell", "Victreebel"],
  weepinbell: ["Bellsprout", "Weepinbell", "Victreebel"],
  victreebel: ["Bellsprout", "Weepinbell", "Victreebel"],

  tentacool: ["Tentacool", "Tentacruel"],
  tentacruel: ["Tentacool", "Tentacruel"],

  geodude: ["Geodude", "Graveler", "Golem"],
  graveler: ["Geodude", "Graveler", "Golem"],
  golem: ["Geodude", "Graveler", "Golem"],
  alolan_geodude: ["Alolan Geodude", "Alolan Graveler", "Alolan Golem"],
  alolan_graveler: ["Alolan Geodude", "Alolan Graveler", "Alolan Golem"],
  alolan_golem: ["Alolan Geodude", "Alolan Graveler", "Alolan Golem"],

  ponyta: ["Ponyta", "Rapidash"],
  rapidash: ["Ponyta", "Rapidash"],
  galarian_ponyta: ["Galarian Ponyta", "Galarian Rapidash"],
  galarian_rapidash: ["Galarian Ponyta", "Galarian Rapidash"],

  slowpoke: ["Slowpoke", "Slowbro", "Slowking"],
  slowbro: ["Slowpoke", "Slowbro", "Slowking"],
  slowking: ["Slowpoke", "Slowbro", "Slowking"],
  galarian_slowpoke: ["Galarian Slowpoke", "Galarian Slowbro", "Galarian Slowking"],
  galarian_slowbro: ["Galarian Slowpoke", "Galarian Slowbro", "Galarian Slowking"],
  galarian_slowking: ["Galarian Slowpoke", "Galarian Slowbro", "Galarian Slowking"],

  magnemite: ["Magnemite", "Magneton", "Magnezone"],
  magneton: ["Magnemite", "Magneton", "Magnezone"],
  magnezone: ["Magnemite", "Magneton", "Magnezone"],

  farfetchd: ["Farfetch’d", "Sirfetch’d"],
  sirfetchd: ["Farfetch’d", "Sirfetch’d"],
  galarian_farfetchd: ["Galarian Farfetch’d", "Sirfetch’d"],

  doduo: ["Doduo", "Dodrio"],
  dodrio: ["Doduo", "Dodrio"],

  seel: ["Seel", "Dewgong"],
  dewgong: ["Seel", "Dewgong"],

  grimer: ["Grimer", "Muk"],
  muk: ["Grimer", "Muk"],
  alolan_grimer: ["Alolan Grimer", "Alolan Muk"],
  alolan_muk: ["Alolan Grimer", "Alolan Muk"],

  shellder: ["Shellder", "Cloyster"],
  cloyster: ["Shellder", "Cloyster"],

  gastly: ["Gastly", "Haunter", "Gengar"],
  haunter: ["Gastly", "Haunter", "Gengar"],
  gengar: ["Gastly", "Haunter", "Gengar"],

  onix: ["Onix", "Steelix"],
  steelix: ["Onix", "Steelix"],

  drowzee: ["Drowzee", "Hypno"],
  hypno: ["Drowzee", "Hypno"],

  krabby: ["Krabby", "Kingler"],
  kingler: ["Krabby", "Kingler"],

  voltorb: ["Voltorb", "Electrode"],
  electrode: ["Voltorb", "Electrode"],
  hisuian_voltorb: ["Hisuian Voltorb", "Hisuian Electrode"],
  hisuian_electrode: ["Hisuian Voltorb", "Hisuian Electrode"],

  exeggcute: ["Exeggcute", "Exeggutor"],
  exeggutor: ["Exeggcute", "Exeggutor"],
  alolan_exeggutor: ["Exeggcute", "Alolan Exeggutor"],

    cubone: ["Cubone", "Marowak"],
  marowak: ["Cubone", "Marowak"],
  alolan_marowak: ["Cubone", "Alolan Marowak"],

  tyrogue: ["Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop"],
  hitmonlee: ["Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop"],
  hitmonchan: ["Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop"],
  hitmontop: ["Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop"],

  lickitung: ["Lickitung", "Lickilicky"],
  lickilicky: ["Lickitung", "Lickilicky"],

  koffing: ["Koffing", "Weezing"],
  weezing: ["Koffing", "Weezing"],
  galarian_weezing: ["Koffing", "Galarian Weezing"],

  rhyhorn: ["Rhyhorn", "Rhydon", "Rhyperior"],
  rhydon: ["Rhyhorn", "Rhydon", "Rhyperior"],
  rhyperior: ["Rhyhorn", "Rhydon", "Rhyperior"],

  chansey: ["Happiny", "Chansey", "Blissey"],
  happiny: ["Happiny", "Chansey", "Blissey"],
  blissey: ["Happiny", "Chansey", "Blissey"],

  tangela: ["Tangela", "Tangrowth"],
  tangrowth: ["Tangela", "Tangrowth"],

  kangaskhan: ["Kangaskhan"],

  horsea: ["Horsea", "Seadra", "Kingdra"],
  seadra: ["Horsea", "Seadra", "Kingdra"],
  kingdra: ["Horsea", "Seadra", "Kingdra"],

  goldeen: ["Goldeen", "Seaking"],
  seaking: ["Goldeen", "Seaking"],

  staryu: ["Staryu", "Starmie"],
  starmie: ["Staryu", "Starmie"],

  mime_jr: ["Mime Jr.", "Mr. Mime", "Mr. Rime"],
  mr_mime: ["Mime Jr.", "Mr. Mime", "Mr. Rime"],
  galarian_mr_mime: ["Mime Jr.", "Galarian Mr. Mime", "Mr. Rime"],
  mr_rime: ["Mime Jr.", "Galarian Mr. Mime", "Mr. Rime"],

  scyther: ["Scyther", "Scizor", "Kleavor"],
  scizor: ["Scyther", "Scizor", "Kleavor"],
  kleavor: ["Scyther", "Scizor", "Kleavor"],

  smoochum: ["Smoochum", "Jynx"],
  jynx: ["Smoochum", "Jynx"],

  electabuzz: ["Elekid", "Electabuzz", "Electivire"],
  elekid: ["Elekid", "Electabuzz", "Electivire"],
  electivire: ["Elekid", "Electabuzz", "Electivire"],

  magby: ["Magby", "Magmar", "Magmortar"],
  magmar: ["Magby", "Magmar", "Magmortar"],
  magmortar: ["Magby", "Magmar", "Magmortar"],

  pinsir: ["Pinsir"],

  tauros: ["Tauros"],
  paldean_tauros_combat_breed: ["Paldean Tauros (Combat Breed)"],
  paldean_tauros_blaze_breed: ["Paldean Tauros (Blaze Breed)"],
  paldean_tauros_aqua_breed: ["Paldean Tauros (Aqua Breed)"],

  magikarp: ["Magikarp", "Gyarados"],
  gyarados: ["Magikarp", "Gyarados"],

  lapras: ["Lapras"],

  ditto: ["Ditto"],

  eevee: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  vaporeon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  jolteon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  flareon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  espeon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  umbreon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  leafeon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  glaceon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],
  sylveon: [
    "Eevee",
    "Vaporeon",
    "Jolteon",
    "Flareon",
    "Espeon",
    "Umbreon",
    "Leafeon",
    "Glaceon",
    "Sylveon"
  ],

  porygon: ["Porygon", "Porygon2", "Porygon-Z"],
  porygon2: ["Porygon", "Porygon2", "Porygon-Z"],
  porygonz: ["Porygon", "Porygon2", "Porygon-Z"],

  omanyte: ["Omanyte", "Omastar"],
  omastar: ["Omanyte", "Omastar"],

  kabuto: ["Kabuto", "Kabutops"],
  kabutops: ["Kabuto", "Kabutops"],

  aerodactyl: ["Aerodactyl"],

  munchlax: ["Munchlax", "Snorlax"],
  snorlax: ["Munchlax", "Snorlax"],

  articuno: ["Articuno"],
  galarian_articuno: ["Galarian Articuno"],

  zapdos: ["Zapdos"],
  galarian_zapdos: ["Galarian Zapdos"],

  moltres: ["Moltres"],
  galarian_moltres: ["Galarian Moltres"],

  dratini: ["Dratini", "Dragonair", "Dragonite"],
  dragonair: ["Dratini", "Dragonair", "Dragonite"],
  dragonite: ["Dratini", "Dragonair", "Dragonite"],

  mewtwo: ["Mewtwo"],

  mew: ["Mew"],

  // ...next batch will continue with Gen 2!
  chikorita: ["Chikorita", "Bayleef", "Meganium"],
  bayleef: ["Chikorita", "Bayleef", "Meganium"],
  meganium: ["Chikorita", "Bayleef", "Meganium"],

  cyndaquil: ["Cyndaquil", "Quilava", "Typhlosion", "Hisuian Typhlosion"],
  quilava: ["Cyndaquil", "Quilava", "Typhlosion", "Hisuian Typhlosion"],
  typhlosion: ["Cyndaquil", "Quilava", "Typhlosion", "Hisuian Typhlosion"],
  hisuian_typhlosion: ["Cyndaquil", "Quilava", "Typhlosion", "Hisuian Typhlosion"],

  totodile: ["Totodile", "Croconaw", "Feraligatr"],
  croconaw: ["Totodile", "Croconaw", "Feraligatr"],
  feraligatr: ["Totodile", "Croconaw", "Feraligatr"],

  sentret: ["Sentret", "Furret"],
  furret: ["Sentret", "Furret"],

  hoothoot: ["Hoothoot", "Noctowl"],
  noctowl: ["Hoothoot", "Noctowl"],

  ledyba: ["Ledyba", "Ledian"],
  ledian: ["Ledyba", "Ledian"],

  spinarak: ["Spinarak", "Ariados"],
  ariados: ["Spinarak", "Ariados"],

  chinchou: ["Chinchou", "Lanturn"],
  lanturn: ["Chinchou", "Lanturn"],

  togepi: ["Togepi", "Togetic", "Togekiss"],
  togetic: ["Togepi", "Togetic", "Togekiss"],
  togekiss: ["Togepi", "Togetic", "Togekiss"],

  natu: ["Natu", "Xatu"],
  xatu: ["Natu", "Xatu"],

  mareep: ["Mareep", "Flaaffy", "Ampharos"],
  flaaffy: ["Mareep", "Flaaffy", "Ampharos"],
  ampharos: ["Mareep", "Flaaffy", "Ampharos"],

  azurill: ["Azurill", "Marill", "Azumarill"],
  marill: ["Azurill", "Marill", "Azumarill"],
  azumarill: ["Azurill", "Marill", "Azumarill"],

  bonsly: ["Bonsly", "Sudowoodo"],
  sudowoodo: ["Bonsly", "Sudowoodo"],

  hoppip: ["Hoppip", "Skiploom", "Jumpluff"],
  skiploom: ["Hoppip", "Skiploom", "Jumpluff"],
  jumpluff: ["Hoppip", "Skiploom", "Jumpluff"],

  aipom: ["Aipom", "Ambipom"],
  ambipom: ["Aipom", "Ambipom"],

  sunkern: ["Sunkern", "Sunflora"],
  sunflora: ["Sunkern", "Sunflora"],

  yanma: ["Yanma", "Yanmega"],
  yanmega: ["Yanma", "Yanmega"],

  wooper: ["Wooper", "Clodsire", "Quagsire"],
  paldean_wooper: ["Paldean Wooper", "Clodsire"],
  quagsire: ["Wooper", "Quagsire"],
  clodsire: ["Paldean Wooper", "Clodsire"],

  murkrow: ["Murkrow", "Honchkrow"],
  honchkrow: ["Murkrow", "Honchkrow"],

  misdreavus: ["Misdreavus", "Mismagius"],
  mismagius: ["Misdreavus", "Mismagius"],

  unown: ["Unown"],

  wynaut: ["Wynaut", "Wobbuffet"],
  wobbuffet: ["Wynaut", "Wobbuffet"],

  girafarig: ["Girafarig", "Farigiraf"],
  farigiraf: ["Girafarig", "Farigiraf"],

  pineco: ["Pineco", "Forretress"],
  forretress: ["Pineco", "Forretress"],

  dunsparce: ["Dunsparce", "Dudunsparce"],
  dudunsparce: ["Dunsparce", "Dudunsparce"],

  gligar: ["Gligar", "Gliscor"],
  gliscor: ["Gligar", "Gliscor"],

  snubbull: ["Snubbull", "Granbull"],
  granbull: ["Snubbull", "Granbull"],

  qwilfish: ["Qwilfish", "Hisuian Qwilfish", "Overqwil"],
  hisuian_qwilfish: ["Qwilfish", "Hisuian Qwilfish", "Overqwil"],
  overqwil: ["Qwilfish", "Hisuian Qwilfish", "Overqwil"],

  shuckle: ["Shuckle"],

  heracross: ["Heracross"],

  sneasel: ["Sneasel", "Weavile", "Sneasler"],
  weavile: ["Sneasel", "Weavile", "Sneasler"],
  sneasler: ["Sneasel", "Sneasler"],
  hisuian_sneasel: ["Hisuian Sneasel", "Sneasler"],

  teddiursa: ["Teddiursa", "Ursaring", "Ursaluna", "Ursaluna Bloodmoon"],
  ursaring: ["Teddiursa", "Ursaring", "Ursaluna", "Ursaluna Bloodmoon"],
  ursaluna: ["Teddiursa", "Ursaring", "Ursaluna"],
  ursaluna_bloodmoon: ["Teddiursa", "Ursaring", "Ursaluna Bloodmoon"],

  slugma: ["Slugma", "Magcargo"],
  magcargo: ["Slugma", "Magcargo"],

  swinub: ["Swinub", "Piloswine", "Mamoswine"],
  piloswine: ["Swinub", "Piloswine", "Mamoswine"],
  mamoswine: ["Swinub", "Piloswine", "Mamoswine"],

  corsola: ["Corsola", "Cursola"],
  galarian_corsola: ["Galarian Corsola", "Cursola"],
  cursola: ["Galarian Corsola", "Cursola"],

  remoraid: ["Remoraid", "Octillery"],
  octillery: ["Remoraid", "Octillery"],

  delibird: ["Delibird"],

  mantyke: ["Mantyke", "Mantine"],
  mantine: ["Mantyke", "Mantine"],

  skarmory: ["Skarmory"],

  houndour: ["Houndour", "Houndoom"],
  houndoom: ["Houndour", "Houndoom"],

  phanpy: ["Phanpy", "Donphan"],
  donphan: ["Phanpy", "Donphan"],

  porygon2: ["Porygon", "Porygon2", "Porygon-Z"],
  porygonz: ["Porygon", "Porygon2", "Porygon-Z"],

  stantler: ["Stantler", "Wyrdeer"],
  wyrdeer: ["Stantler", "Wyrdeer"],

  smeargle: ["Smeargle"],

  tyrogue: ["Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop"],
  hitmontop: ["Tyrogue", "Hitmonlee", "Hitmonchan", "Hitmontop"],

  smoochum: ["Smoochum", "Jynx"],
  elekid: ["Elekid", "Electabuzz", "Electivire"],
  magby: ["Magby", "Magmar", "Magmortar"],

  miltank: ["Miltank"],

  blissey: ["Happiny", "Chansey", "Blissey"],

  raikou: ["Raikou"],
  entei: ["Entei"],
  suicune: ["Suicune"],

  larvitar: ["Larvitar", "Pupitar", "Tyranitar"],
  pupitar: ["Larvitar", "Pupitar", "Tyranitar"],
  tyranitar: ["Larvitar", "Pupitar", "Tyranitar"],

  lugia: ["Lugia"],

  ho_oh: ["Ho-Oh"],

  celebi: ["Celebi"],

  treecko: ["Treecko", "Grovyle", "Sceptile"],
  grovyle: ["Treecko", "Grovyle", "Sceptile"],
  sceptile: ["Treecko", "Grovyle", "Sceptile"],

  torchic: ["Torchic", "Combusken", "Blaziken"],
  combusken: ["Torchic", "Combusken", "Blaziken"],
  blaziken: ["Torchic", "Combusken", "Blaziken"],

  mudkip: ["Mudkip", "Marshtomp", "Swampert"],
  marshtomp: ["Mudkip", "Marshtomp", "Swampert"],
  swampert: ["Mudkip", "Marshtomp", "Swampert"],

  poochyena: ["Poochyena", "Mightyena"],
  mightyena: ["Poochyena", "Mightyena"],

  zigzagoon: ["Zigzagoon", "Linoone", "Obstagoon", "Galarian Zigzagoon", "Galarian Linoone"],
  linoone: ["Zigzagoon", "Linoone", "Obstagoon", "Galarian Zigzagoon", "Galarian Linoone"],
  obstagoon: ["Galarian Zigzagoon", "Galarian Linoone", "Obstagoon"],
  galarian_zigzagoon: ["Galarian Zigzagoon", "Galarian Linoone", "Obstagoon"],
  galarian_linoone: ["Galarian Zigzagoon", "Galarian Linoone", "Obstagoon"],

  wurmple: ["Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox"],
  silcoon: ["Wurmple", "Silcoon", "Beautifly"],
  beautifly: ["Wurmple", "Silcoon", "Beautifly"],
  cascoon: ["Wurmple", "Cascoon", "Dustox"],
  dustox: ["Wurmple", "Cascoon", "Dustox"],

  lotad: ["Lotad", "Lombre", "Ludicolo"],
  lombre: ["Lotad", "Lombre", "Ludicolo"],
  ludicolo: ["Lotad", "Lombre", "Ludicolo"],

  seedot: ["Seedot", "Nuzleaf", "Shiftry"],
  nuzleaf: ["Seedot", "Nuzleaf", "Shiftry"],
  shiftry: ["Seedot", "Nuzleaf", "Shiftry"],

  taillow: ["Taillow", "Swellow"],
  swellow: ["Taillow", "Swellow"],

  wingull: ["Wingull", "Pelipper"],
  pelipper: ["Wingull", "Pelipper"],

  ralts: ["Ralts", "Kirlia", "Gardevoir", "Gallade"],
  kirlia: ["Ralts", "Kirlia", "Gardevoir", "Gallade"],
  gardevoir: ["Ralts", "Kirlia", "Gardevoir", "Gallade"],
  gallade: ["Ralts", "Kirlia", "Gallade"],

  surskit: ["Surskit", "Masquerain"],
  masquerain: ["Surskit", "Masquerain"],

  shroomish: ["Shroomish", "Breloom"],
  breloom: ["Shroomish", "Breloom"],

  slakoth: ["Slakoth", "Vigoroth", "Slaking"],
  vigoroth: ["Slakoth", "Vigoroth", "Slaking"],
  slaking: ["Slakoth", "Vigoroth", "Slaking"],

  nincada: ["Nincada", "Ninjask", "Shedinja"],
  ninjask: ["Nincada", "Ninjask", "Shedinja"],
  shedinja: ["Nincada", "Ninjask", "Shedinja"],

  whismur: ["Whismur", "Loudred", "Exploud"],
  loudred: ["Whismur", "Loudred", "Exploud"],
  exploud: ["Whismur", "Loudred", "Exploud"],

  makuhita: ["Makuhita", "Hariyama"],
  hariyama: ["Makuhita", "Hariyama"],

  azurill: ["Azurill", "Marill", "Azumarill"],
  nosepass: ["Nosepass", "Probopass"],
  probopass: ["Nosepass", "Probopass"],

  skitty: ["Skitty", "Delcatty"],
  delcatty: ["Skitty", "Delcatty"],

  sableye: ["Sableye"],
  mawile: ["Mawile"],

  aron: ["Aron", "Lairon", "Aggron"],
  lairon: ["Aron", "Lairon", "Aggron"],
  aggron: ["Aron", "Lairon", "Aggron"],

  meditite: ["Meditite", "Medicham"],
  medicham: ["Meditite", "Medicham"],

  electrike: ["Electrike", "Manectric"],
  manectric: ["Electrike", "Manectric"],

  plusle: ["Plusle"],
  minun: ["Minun"],

  volbeat: ["Volbeat"],
  illumise: ["Illumise"],

  budew: ["Budew", "Roserade", "Roselia"],
  roselia: ["Budew", "Roselia", "Roserade"],
  roserade: ["Budew", "Roselia", "Roserade"],

  gulpin: ["Gulpin", "Swalot"],
  swalot: ["Gulpin", "Swalot"],

  carvanha: ["Carvanha", "Sharpedo"],
  sharpedo: ["Carvanha", "Sharpedo"],

  wailmer: ["Wailmer", "Wailord"],
  wailord: ["Wailmer", "Wailord"],

  numel: ["Numel", "Camerupt"],
  camerupt: ["Numel", "Camerupt"],

  torkoal: ["Torkoal"],

  spoink: ["Spoink", "Grumpig"],
  grumpig: ["Spoink", "Grumpig"],

  spinda: ["Spinda"],

  trapinch: ["Trapinch", "Vibrava", "Flygon"],
  vibrava: ["Trapinch", "Vibrava", "Flygon"],
  flygon: ["Trapinch", "Vibrava", "Flygon"],

  cacnea: ["Cacnea", "Cacturne"],
  cacturne: ["Cacnea", "Cacturne"],

  swablu: ["Swablu", "Altaria"],
  altaria: ["Swablu", "Altaria"],

  zangoose: ["Zangoose"],
  seviper: ["Seviper"],

  lunatone: ["Lunatone"],
  solrock: ["Solrock"],

  barboach: ["Barboach", "Whiscash"],
  whiscash: ["Barboach", "Whiscash"],

  corphish: ["Corphish", "Crawdaunt"],
  crawdaunt: ["Corphish", "Crawdaunt"],

  baltoy: ["Baltoy", "Claydol"],
  claydol: ["Baltoy", "Claydol"],

  lileep: ["Lileep", "Cradily"],
  cradily: ["Lileep", "Cradily"],

  anorith: ["Anorith", "Armaldo"],
  armaldo: ["Anorith", "Armaldo"],

  feebas: ["Feebas", "Milotic"],
  milotic: ["Feebas", "Milotic"],

  castform: ["Castform"],

  kecleon: ["Kecleon"],

  shuppet: ["Shuppet", "Banette"],
  banette: ["Shuppet", "Banette"],

  duskull: ["Duskull", "Dusclops", "Dusknoir"],
  dusclops: ["Duskull", "Dusclops", "Dusknoir"],
  dusknoir: ["Duskull", "Dusclops", "Dusknoir"],

  tropius: ["Tropius"],

  chimecho: ["Chingling", "Chimecho"],
  chingling: ["Chingling", "Chimecho"],

  absol: ["Absol"],

  wynaut: ["Wynaut", "Wobbuffet"],

  snorunt: ["Snorunt", "Glalie", "Froslass"],
  glalie: ["Snorunt", "Glalie", "Froslass"],
  froslass: ["Snorunt", "Froslass"],

  spheal: ["Spheal", "Sealeo", "Walrein"],
  sealeo: ["Spheal", "Sealeo", "Walrein"],
  walrein: ["Spheal", "Sealeo", "Walrein"],

  clamperl: ["Clamperl", "Huntail", "Gorebyss"],
  huntail: ["Clamperl", "Huntail"],
  gorebyss: ["Clamperl", "Gorebyss"],

  relicanth: ["Relicanth"],

  luvdisc: ["Luvdisc"],

  bagon: ["Bagon", "Shelgon", "Salamence"],
  shelgon: ["Bagon", "Shelgon", "Salamence"],
  salamence: ["Bagon", "Shelgon", "Salamence"],

  beldum: ["Beldum", "Metang", "Metagross"],
  metang: ["Beldum", "Metang", "Metagross"],
  metagross: ["Beldum", "Metang", "Metagross"],

  regirock: ["Regirock"],
  regice: ["Regice"],
  registeel: ["Registeel"],

  latias: ["Latias"],
  latios: ["Latios"],

  kyogre: ["Kyogre"],
  groudon: ["Groudon"],
  rayquaza: ["Rayquaza"],

  jirachi: ["Jirachi"],
  deoxys: ["Deoxys"],

    turtwig: ["Turtwig", "Grotle", "Torterra"],
  grotle: ["Turtwig", "Grotle", "Torterra"],
  torterra: ["Turtwig", "Grotle", "Torterra"],

  chimchar: ["Chimchar", "Monferno", "Infernape"],
  monferno: ["Chimchar", "Monferno", "Infernape"],
  infernape: ["Chimchar", "Monferno", "Infernape"],

  piplup: ["Piplup", "Prinplup", "Empoleon"],
  prinplup: ["Piplup", "Prinplup", "Empoleon"],
  empoleon: ["Piplup", "Prinplup", "Empoleon"],

  starly: ["Starly", "Staravia", "Staraptor"],
  staravia: ["Starly", "Staravia", "Staraptor"],
  staraptor: ["Starly", "Staravia", "Staraptor"],

  bidoof: ["Bidoof", "Bibarel"],
  bibarel: ["Bidoof", "Bibarel"],

  kricketot: ["Kricketot", "Kricketune"],
  kricketune: ["Kricketot", "Kricketune"],

  shinx: ["Shinx", "Luxio", "Luxray"],
  luxio: ["Shinx", "Luxio", "Luxray"],
  luxray: ["Shinx", "Luxio", "Luxray"],

  cranidos: ["Cranidos", "Rampardos"],
  rampardos: ["Cranidos", "Rampardos"],

  shieldon: ["Shieldon", "Bastiodon"],
  bastiodon: ["Shieldon", "Bastiodon"],

  burmy: ["Burmy", "Wormadam", "Mothim"],
  wormadam: ["Burmy", "Wormadam"],
  mothim: ["Burmy", "Mothim"],

  combee: ["Combee", "Vespiquen"],
  vespiquen: ["Combee", "Vespiquen"],

  pachirisu: ["Pachirisu"],

  buizel: ["Buizel", "Floatzel"],
  floatzel: ["Buizel", "Floatzel"],

  cherubi: ["Cherubi", "Cherrim"],
  cherrim: ["Cherubi", "Cherrim"],

  shellos: ["Shellos", "Gastrodon"],
  gastrodon: ["Shellos", "Gastrodon"],

  ambipom: ["Aipom", "Ambipom"],
  aipom: ["Aipom", "Ambipom"],

  drifloon: ["Drifloon", "Drifblim"],
  drifblim: ["Drifloon", "Drifblim"],

  buneary: ["Buneary", "Lopunny"],
  lopunny: ["Buneary", "Lopunny"],

  mismagius: ["Misdreavus", "Mismagius"],
  misdreavus: ["Misdreavus", "Mismagius"],

  honchkrow: ["Murkrow", "Honchkrow"],
  murkrow: ["Murkrow", "Honchkrow"],

  glameow: ["Glameow", "Purugly"],
  purugly: ["Glameow", "Purugly"],

  chingling: ["Chingling", "Chimecho"],
  chimecho: ["Chingling", "Chimecho"],

  stunky: ["Stunky", "Skuntank"],
  skuntank: ["Stunky", "Skuntank"],

  bronzor: ["Bronzor", "Bronzong"],
  bronzong: ["Bronzor", "Bronzong"],

  bonsly: ["Bonsly", "Sudowoodo"],
  sudowoodo: ["Bonsly", "Sudowoodo"],

  mime_jr: ["Mime Jr.", "Mr. Mime", "Mr. Rime", "Galarian Mr. Mime", "Galarian Mr. Rime"],
  mr_mime: ["Mime Jr.", "Mr. Mime", "Mr. Rime", "Galarian Mr. Mime", "Galarian Mr. Rime"],
  galarian_mr_mime: ["Mime Jr.", "Galarian Mr. Mime", "Galarian Mr. Rime"],
  mr_rime: ["Mime Jr.", "Mr. Mime", "Mr. Rime", "Galarian Mr. Mime", "Galarian Mr. Rime"],

  happiny: ["Happiny", "Chansey", "Blissey"],
  chansey: ["Happiny", "Chansey", "Blissey"],
  blissey: ["Happiny", "Chansey", "Blissey"],

  chatot: ["Chatot"],

  spiritomb: ["Spiritomb"],

  gible: ["Gible", "Gabite", "Garchomp"],
  gabite: ["Gible", "Gabite", "Garchomp"],
  garchomp: ["Gible", "Gabite", "Garchomp"],

  munchlax: ["Munchlax", "Snorlax"],
  snorlax: ["Munchlax", "Snorlax"],

  riolu: ["Riolu", "Lucario"],
  lucario: ["Riolu", "Lucario"],

  hippopotas: ["Hippopotas", "Hippowdon"],
  hippowdon: ["Hippopotas", "Hippowdon"],

  skorupi: ["Skorupi", "Drapion"],
  drapion: ["Skorupi", "Drapion"],

  croagunk: ["Croagunk", "Toxicroak"],
  toxicroak: ["Croagunk", "Toxicroak"],

  carnivine: ["Carnivine"],

  finneon: ["Finneon", "Lumineon"],
  lumineon: ["Finneon", "Lumineon"],

  mantyke: ["Mantyke", "Mantine"],
  mantine: ["Mantyke", "Mantine"],

  snover: ["Snover", "Abomasnow"],
  abomasnow: ["Snover", "Abomasnow"],

  weavile: ["Sneasel", "Weavile", "Sneasler", "Hisuian Sneasel"],
  sneasel: ["Sneasel", "Weavile", "Sneasler", "Hisuian Sneasel"],
  sneasler: ["Hisuian Sneasel", "Sneasler"],

  magnezone: ["Magnemite", "Magneton", "Magnezone"],
  magnemite: ["Magnemite", "Magneton", "Magnezone"],
  magneton: ["Magnemite", "Magneton", "Magnezone"],

  lickilicky: ["Lickitung", "Lickilicky"],
  lickitung: ["Lickitung", "Lickilicky"],

  rhyperior: ["Rhyhorn", "Rhydon", "Rhyperior"],
  rhyhorn: ["Rhyhorn", "Rhydon", "Rhyperior"],
  rhydon: ["Rhyhorn", "Rhydon", "Rhyperior"],

  tangrowth: ["Tangela", "Tangrowth"],
  tangela: ["Tangela", "Tangrowth"],

  electivire: ["Elekid", "Electabuzz", "Electivire"],
  elekid: ["Elekid", "Electabuzz", "Electivire"],
  electabuzz: ["Elekid", "Electabuzz", "Electivire"],

  magmortar: ["Magby", "Magmar", "Magmortar"],
  magby: ["Magby", "Magmar", "Magmortar"],
  magmar: ["Magby", "Magmar", "Magmortar"],

  togekiss: ["Togepi", "Togetic", "Togekiss"],
  togepi: ["Togepi", "Togetic", "Togekiss"],
  togetic: ["Togepi", "Togetic", "Togekiss"],

  yanmega: ["Yanma", "Yanmega"],
  yanma: ["Yanma", "Yanmega"],

  leafeon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  glaceon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  eevee: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  vaporeon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  jolteon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  flareon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  espeon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  umbreon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],
  sylveon: ["Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon", "Glaceon", "Sylveon"],

  gliscor: ["Gligar", "Gliscor"],
  gligar: ["Gligar", "Gliscor"],

  mamoswine: ["Swinub", "Piloswine", "Mamoswine"],
  swinub: ["Swinub", "Piloswine", "Mamoswine"],
  piloswine: ["Swinub", "Piloswine", "Mamoswine"],

  porygon_z: ["Porygon", "Porygon2", "Porygon-Z"],
  porygon: ["Porygon", "Porygon2", "Porygon-Z"],
  porygon2: ["Porygon", "Porygon2", "Porygon-Z"],

  gallade: ["Ralts", "Kirlia", "Gardevoir", "Gallade"],
  froslass: ["Snorunt", "Glalie", "Froslass"],

  probopass: ["Nosepass", "Probopass"],
  dusknoir: ["Duskull", "Dusclops", "Dusknoir"],
  rotom: ["Rotom"],

  uxie: ["Uxie"],
  mesprit: ["Mesprit"],
  azelf: ["Azelf"],

  dialga: ["Dialga"],
  palkia: ["Palkia"],
  heatran: ["Heatran"],
  regigigas: ["Regigigas"],

  giratina: ["Giratina"],
  cresselia: ["Cresselia"],
  phione: ["Phione"],
  manaphy: ["Manaphy"],
  darkrai: ["Darkrai"],
  shaymin: ["Shaymin"],
  arceus: ["Arceus"],

    victini: ["Victini"],

  snivy: ["Snivy", "Servine", "Serperior"],
  servine: ["Snivy", "Servine", "Serperior"],
  serperior: ["Snivy", "Servine", "Serperior"],

  tepig: ["Tepig", "Pignite", "Emboar"],
  pignite: ["Tepig", "Pignite", "Emboar"],
  emboar: ["Tepig", "Pignite", "Emboar"],

  oshawott: ["Oshawott", "Dewott", "Samurott", "Hisuian Samurott"],
  dewott: ["Oshawott", "Dewott", "Samurott", "Hisuian Samurott"],
  samurott: ["Oshawott", "Dewott", "Samurott", "Hisuian Samurott"],
  hisuian_samurott: ["Oshawott", "Dewott", "Samurott", "Hisuian Samurott"],

  patrat: ["Patrat", "Watchog"],
  watchog: ["Patrat", "Watchog"],

  lillipup: ["Lillipup", "Herdier", "Stoutland"],
  herdier: ["Lillipup", "Herdier", "Stoutland"],
  stoutland: ["Lillipup", "Herdier", "Stoutland"],

  purrloin: ["Purrloin", "Liepard"],
  liepard: ["Purrloin", "Liepard"],

  pansage: ["Pansage", "Simisage"],
  simisage: ["Pansage", "Simisage"],

  pansear: ["Pansear", "Simisear"],
  simisear: ["Pansear", "Simisear"],

  panpour: ["Panpour", "Simipour"],
  simipour: ["Panpour", "Simipour"],

  munna: ["Munna", "Musharna"],
  musharna: ["Munna", "Musharna"],

  pidove: ["Pidove", "Tranquill", "Unfezant"],
  tranquill: ["Pidove", "Tranquill", "Unfezant"],
  unfezant: ["Pidove", "Tranquill", "Unfezant"],

  blitzle: ["Blitzle", "Zebstrika"],
  zebstrika: ["Blitzle", "Zebstrika"],

  roggenrola: ["Roggenrola", "Boldore", "Gigalith"],
  boldore: ["Roggenrola", "Boldore", "Gigalith"],
  gigalith: ["Roggenrola", "Boldore", "Gigalith"],

  woobat: ["Woobat", "Swoobat"],
  swoobat: ["Woobat", "Swoobat"],

  drilbur: ["Drilbur", "Excadrill"],
  excadrill: ["Drilbur", "Excadrill"],

  audino: ["Audino", "Mega Audino"],

  timburr: ["Timburr", "Gurdurr", "Conkeldurr"],
  gurdurr: ["Timburr", "Gurdurr", "Conkeldurr"],
  conkeldurr: ["Timburr", "Gurdurr", "Conkeldurr"],

  tympole: ["Tympole", "Palpitoad", "Seismitoad"],
  palpitoad: ["Tympole", "Palpitoad", "Seismitoad"],
  seismitoad: ["Tympole", "Palpitoad", "Seismitoad"],

  throh: ["Throh"],
  sawk: ["Sawk"],

  sewaddle: ["Sewaddle", "Swadloon", "Leavanny"],
  swadloon: ["Sewaddle", "Swadloon", "Leavanny"],
  leavanny: ["Sewaddle", "Swadloon", "Leavanny"],

  venipede: ["Venipede", "Whirlipede", "Scolipede"],
  whirlipede: ["Venipede", "Whirlipede", "Scolipede"],
  scolipede: ["Venipede", "Whirlipede", "Scolipede"],

  cottonee: ["Cottonee", "Whimsicott"],
  whimsicott: ["Cottonee", "Whimsicott"],

  petilil: ["Petilil", "Lilligant", "Hisuian Lilligant"],
  lilligant: ["Petilil", "Lilligant", "Hisuian Lilligant"],
  hisuian_lilligant: ["Petilil", "Lilligant", "Hisuian Lilligant"],

  basculin: ["Basculin", "Basculegion", "White-Striped Basculin"],
  white_striped_basculin: ["Basculin", "White-Striped Basculin", "Basculegion"],
  basculegion: ["Basculin", "White-Striped Basculin", "Basculegion"],

  sandile: ["Sandile", "Krokorok", "Krookodile"],
  krokorok: ["Sandile", "Krokorok", "Krookodile"],
  krookodile: ["Sandile", "Krokorok", "Krookodile"],

  darumaka: ["Darumaka", "Darmanitan", "Galarian Darumaka", "Galarian Darmanitan"],
  darmanitan: ["Darumaka", "Darmanitan", "Galarian Darumaka", "Galarian Darmanitan"],
  galarian_darumaka: ["Galarian Darumaka", "Galarian Darmanitan"],
  galarian_darmanitan: ["Galarian Darumaka", "Galarian Darmanitan"],

  maractus: ["Maractus"],

  dwebble: ["Dwebble", "Crustle"],
  crustle: ["Dwebble", "Crustle"],

  scraggy: ["Scraggy", "Scrafty"],
  scrafty: ["Scraggy", "Scrafty"],

  sigilyph: ["Sigilyph"],

  yamask: ["Yamask", "Cofagrigus", "Galarian Yamask", "Runerigus"],
  cofagrigus: ["Yamask", "Cofagrigus"],
  galarian_yamask: ["Galarian Yamask", "Runerigus"],
  runerigus: ["Galarian Yamask", "Runerigus"],

  tirtouga: ["Tirtouga", "Carracosta"],
  carracosta: ["Tirtouga", "Carracosta"],

  archen: ["Archen", "Archeops"],
  archeops: ["Archen", "Archeops"],

  trubbish: ["Trubbish", "Garbodor"],
  garbodor: ["Trubbish", "Garbodor"],

  zorua: ["Zorua", "Zoroark", "Hisuian Zorua", "Hisuian Zoroark"],
  zoroark: ["Zorua", "Zoroark", "Hisuian Zorua", "Hisuian Zoroark"],
  hisuian_zorua: ["Hisuian Zorua", "Hisuian Zoroark"],
  hisuian_zoroark: ["Hisuian Zorua", "Hisuian Zoroark"],

  minccino: ["Minccino", "Cinccino"],
  cinccino: ["Minccino", "Cinccino"],

  gothita: ["Gothita", "Gothorita", "Gothitelle"],
  gothorita: ["Gothita", "Gothorita", "Gothitelle"],
  gothitelle: ["Gothita", "Gothorita", "Gothitelle"],

  solosis: ["Solosis", "Duosion", "Reuniclus"],
  duosion: ["Solosis", "Duosion", "Reuniclus"],
  reuniclus: ["Solosis", "Duosion", "Reuniclus"],

  ducklett: ["Ducklett", "Swanna"],
  swanna: ["Ducklett", "Swanna"],

  vanillite: ["Vanillite", "Vanillish", "Vanilluxe"],
  vanillish: ["Vanillite", "Vanillish", "Vanilluxe"],
  vanilluxe: ["Vanillite", "Vanillish", "Vanilluxe"],

  deerling: ["Deerling", "Sawsbuck"],
  sawsbuck: ["Deerling", "Sawsbuck"],

  emolga: ["Emolga"],

  karrablast: ["Karrablast", "Escavalier"],
  escavalier: ["Karrablast", "Escavalier"],

  foongus: ["Foongus", "Amoonguss"],
  amoonguss: ["Foongus", "Amoonguss"],

  frillish: ["Frillish", "Jellicent"],
  jellicent: ["Frillish", "Jellicent"],

  alomomola: ["Alomomola"],

  joltik: ["Joltik", "Galvantula"],
  galvantula: ["Joltik", "Galvantula"],

  ferroseed: ["Ferroseed", "Ferrothorn"],
  ferrothorn: ["Ferroseed", "Ferrothorn"],

  klink: ["Klink", "Klang", "Klinklang"],
  klang: ["Klink", "Klang", "Klinklang"],
  klinklang: ["Klink", "Klang", "Klinklang"],

  tynamo: ["Tynamo", "Eelektrik", "Eelektross"],
  eelektrik: ["Tynamo", "Eelektrik", "Eelektross"],
  eelektross: ["Tynamo", "Eelektrik", "Eelektross"],

  elgyem: ["Elgyem", "Beheeyem"],
  beheeyem: ["Elgyem", "Beheeyem"],

  litwick: ["Litwick", "Lampent", "Chandelure"],
  lampent: ["Litwick", "Lampent", "Chandelure"],
  chandelure: ["Litwick", "Lampent", "Chandelure"],

  axew: ["Axew", "Fraxure", "Haxorus"],
  fraxure: ["Axew", "Fraxure", "Haxorus"],
  haxorus: ["Axew", "Fraxure", "Haxorus"],

  cubchoo: ["Cubchoo", "Beartic"],
  beartic: ["Cubchoo", "Beartic"],

  cryogonal: ["Cryogonal"],

  shelmet: ["Shelmet", "Accelgor"],
  accelgor: ["Shelmet", "Accelgor"],

  stunfisk: ["Stunfisk", "Galarian Stunfisk"],
  galarian_stunfisk: ["Stunfisk", "Galarian Stunfisk"],

  mienfoo: ["Mienfoo", "Mienshao"],
  mienshao: ["Mienfoo", "Mienshao"],

  druddigon: ["Druddigon"],

  golett: ["Golett", "Golurk"],
  golurk: ["Golett", "Golurk"],

  pawniard: ["Pawniard", "Bisharp", "Kingambit"],
  bisharp: ["Pawniard", "Bisharp", "Kingambit"],
  kingambit: ["Pawniard", "Bisharp", "Kingambit"],

  bouffalant: ["Bouffalant"],

  rufflet: ["Rufflet", "Braviary", "Hisuian Braviary"],
  braviary: ["Rufflet", "Braviary", "Hisuian Braviary"],
  hisuian_braviary: ["Rufflet", "Braviary", "Hisuian Braviary"],

  vullaby: ["Vullaby", "Mandibuzz"],
  mandibuzz: ["Vullaby", "Mandibuzz"],

  heatmor: ["Heatmor"],

  durant: ["Durant"],

  deino: ["Deino", "Zweilous", "Hydreigon"],
  zweilous: ["Deino", "Zweilous", "Hydreigon"],
  hydreigon: ["Deino", "Zweilous", "Hydreigon"],

  larvesta: ["Larvesta", "Volcarona"],
  volcarona: ["Larvesta", "Volcarona"],

  cobalion: ["Cobalion"],
  terrakion: ["Terrakion"],
  virizion: ["Virizion"],

  tornadus: ["Tornadus"],
  thundurus: ["Thundurus"],
  landorus: ["Landorus"],

  reshiram: ["Reshiram"],
  zekrom: ["Zekrom"],
  kyurem: ["Kyurem"],

  keldeo: ["Keldeo"],
  meloetta: ["Meloetta"],
  genesect: ["Genesect"],

    chespin: ["Chespin", "Quilladin", "Chesnaught"],
  quilladin: ["Chespin", "Quilladin", "Chesnaught"],
  chesnaught: ["Chespin", "Quilladin", "Chesnaught"],

  fenniken: ["Fennekin", "Braixen", "Delphox"],
  fennekin: ["Fennekin", "Braixen", "Delphox"], // correcting spelling!
  braixen: ["Fennekin", "Braixen", "Delphox"],
  delphox: ["Fennekin", "Braixen", "Delphox"],

  froakie: ["Froakie", "Frogadier", "Greninja", "Ash-Greninja"],
  frogadier: ["Froakie", "Frogadier", "Greninja", "Ash-Greninja"],
  greninja: ["Froakie", "Frogadier", "Greninja", "Ash-Greninja"],
  ash_greninja: ["Froakie", "Frogadier", "Greninja", "Ash-Greninja"],

  bunnelby: ["Bunnelby", "Diggersby"],
  diggersby: ["Bunnelby", "Diggersby"],

  fletchling: ["Fletchling", "Fletchinder", "Talonflame"],
  fletchinder: ["Fletchling", "Fletchinder", "Talonflame"],
  talonflame: ["Fletchling", "Fletchinder", "Talonflame"],

  scatterbug: ["Scatterbug", "Spewpa", "Vivillon"],
  spewpa: ["Scatterbug", "Spewpa", "Vivillon"],
  vivillon: ["Scatterbug", "Spewpa", "Vivillon"],

  litleo: ["Litleo", "Pyroar"],
  pyroar: ["Litleo", "Pyroar"],

  flabebe: ["Flabébé", "Floette", "Florges"],
  floette: ["Flabébé", "Floette", "Florges"],
  florges: ["Flabébé", "Floette", "Florges"],

  skiddo: ["Skiddo", "Gogoat"],
  gogoat: ["Skiddo", "Gogoat"],

  pancham: ["Pancham", "Pangoro"],
  pangoro: ["Pancham", "Pangoro"],

  furfrou: ["Furfrou"],

  espurr: ["Espurr", "Meowstic"],
  meowstic: ["Espurr", "Meowstic"],

  honedge: ["Honedge", "Doublade", "Aegislash"],
  doublade: ["Honedge", "Doublade", "Aegislash"],
  aegislash: ["Honedge", "Doublade", "Aegislash"],

  spritzee: ["Spritzee", "Aromatisse"],
  aromatisse: ["Spritzee", "Aromatisse"],

  swirlix: ["Swirlix", "Slurpuff"],
  slurpuff: ["Swirlix", "Slurpuff"],

  inkay: ["Inkay", "Malamar"],
  malamar: ["Inkay", "Malamar"],

  binacle: ["Binacle", "Barbaracle"],
  barbaracle: ["Binacle", "Barbaracle"],

  skrelp: ["Skrelp", "Dragalge"],
  dragalge: ["Skrelp", "Dragalge"],

  clauncher: ["Clauncher", "Clawitzer"],
  clawitzer: ["Clauncher", "Clawitzer"],

  helioptile: ["Helioptile", "Heliolisk"],
  heliolisk: ["Helioptile", "Heliolisk"],

  tyrunt: ["Tyrunt", "Tyrantrum"],
  tyrantrum: ["Tyrunt", "Tyrantrum"],

  amaura: ["Amaura", "Aurorus"],
  aurorus: ["Amaura", "Aurorus"],

  sylveon: [
    "Eevee", "Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbreon", "Leafeon",
    "Glaceon", "Sylveon"
  ],

  hawlucha: ["Hawlucha"],

  dedenne: ["Dedenne"],

  carbink: ["Carbink"],

  goomy: ["Goomy", "Sliggoo", "Goodra", "Hisuian Sliggoo", "Hisuian Goodra"],
  sliggoo: ["Goomy", "Sliggoo", "Goodra", "Hisuian Sliggoo", "Hisuian Goodra"],
  goodra: ["Goomy", "Sliggoo", "Goodra", "Hisuian Sliggoo", "Hisuian Goodra"],
  hisuian_sliggoo: ["Goomy", "Sliggoo", "Goodra", "Hisuian Sliggoo", "Hisuian Goodra"],
  hisuian_goodra: ["Goomy", "Sliggoo", "Goodra", "Hisuian Sliggoo", "Hisuian Goodra"],

  klefki: ["Klefki"],

  phantump: ["Phantump", "Trevenant"],
  trevenant: ["Phantump", "Trevenant"],

  pumpkaboo: [
    "Pumpkaboo", "Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super", "Gourgeist",
    "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"
  ],
  gourgeist: [
    "Pumpkaboo", "Pumpkaboo-Small", "Pumpkaboo-Large", "Pumpkaboo-Super", "Gourgeist",
    "Gourgeist-Small", "Gourgeist-Large", "Gourgeist-Super"
  ],

  bergmite: ["Bergmite", "Avalugg", "Hisuian Avalugg"],
  avalugg: ["Bergmite", "Avalugg", "Hisuian Avalugg"],
  hisuian_avalugg: ["Bergmite", "Avalugg", "Hisuian Avalugg"],

  noibat: ["Noibat", "Noivern"],
  noivern: ["Noibat", "Noivern"],

  xerneas: ["Xerneas"],
  yveltal: ["Yveltal"],
  zygarde: ["Zygarde"],

  diancie: ["Diancie", "Mega Diancie"],
  hoopa: ["Hoopa", "Hoopa Unbound"],
  volcanion: ["Volcanion"],

    rowlet: ["Rowlet", "Dartrix", "Decidueye", "Hisuian Decidueye"],
  dartrix: ["Rowlet", "Dartrix", "Decidueye", "Hisuian Decidueye"],
  decidueye: ["Rowlet", "Dartrix", "Decidueye", "Hisuian Decidueye"],
  hisuian_decidueye: ["Rowlet", "Dartrix", "Decidueye", "Hisuian Decidueye"],

  litten: ["Litten", "Torracat", "Incineroar"],
  torracat: ["Litten", "Torracat", "Incineroar"],
  incineroar: ["Litten", "Torracat", "Incineroar"],

  popplio: ["Popplio", "Brionne", "Primarina"],
  brionne: ["Popplio", "Brionne", "Primarina"],
  primarina: ["Popplio", "Brionne", "Primarina"],

  pikipek: ["Pikipek", "Trumbeak", "Toucannon"],
  trumbeak: ["Pikipek", "Trumbeak", "Toucannon"],
  toucannon: ["Pikipek", "Trumbeak", "Toucannon"],

  yungoos: ["Yungoos", "Gumshoos"],
  gumshoos: ["Yungoos", "Gumshoos"],

  grubbin: ["Grubbin", "Charjabug", "Vikavolt"],
  charjabug: ["Grubbin", "Charjabug", "Vikavolt"],
  vikavolt: ["Grubbin", "Charjabug", "Vikavolt"],

  crabrawler: ["Crabrawler", "Crabominable"],
  crabominable: ["Crabrawler", "Crabominable"],

  oricorio: [
    "Oricorio-Baile", "Oricorio-Pa'u", "Oricorio-Pom-Pom", "Oricorio-Sensu"
  ],
  oricorio_baile: [
    "Oricorio-Baile", "Oricorio-Pa'u", "Oricorio-Pom-Pom", "Oricorio-Sensu"
  ],
  oricorio_pom_pom: [
    "Oricorio-Baile", "Oricorio-Pa'u", "Oricorio-Pom-Pom", "Oricorio-Sensu"
  ],
  oricorio_pau: [
    "Oricorio-Baile", "Oricorio-Pa'u", "Oricorio-Pom-Pom", "Oricorio-Sensu"
  ],
  oricorio_sensu: [
    "Oricorio-Baile", "Oricorio-Pa'u", "Oricorio-Pom-Pom", "Oricorio-Sensu"
  ],

  cutiefly: ["Cutiefly", "Ribombee"],
  ribombee: ["Cutiefly", "Ribombee"],

  rockruff: [
    "Rockruff", "Lycanroc", "Lycanroc-Midday", "Lycanroc-Midnight", "Lycanroc-Dusk"
  ],
  lycanroc: [
    "Rockruff", "Lycanroc", "Lycanroc-Midday", "Lycanroc-Midnight", "Lycanroc-Dusk"
  ],
  lycanroc_midday: [
    "Rockruff", "Lycanroc", "Lycanroc-Midday", "Lycanroc-Midnight", "Lycanroc-Dusk"
  ],
  lycanroc_midnight: [
    "Rockruff", "Lycanroc", "Lycanroc-Midday", "Lycanroc-Midnight", "Lycanroc-Dusk"
  ],
  lycanroc_dusk: [
    "Rockruff", "Lycanroc", "Lycanroc-Midday", "Lycanroc-Midnight", "Lycanroc-Dusk"
  ],

  wishiwashi: ["Wishiwashi", "Wishiwashi-School"],
  wishiwashi_school: ["Wishiwashi", "Wishiwashi-School"],

  mareanie: ["Mareanie", "Toxapex"],
  toxapex: ["Mareanie", "Toxapex"],

  mudbray: ["Mudbray", "Mudsdale"],
  mudsdale: ["Mudbray", "Mudsdale"],

  dewpider: ["Dewpider", "Araquanid"],
  araquanid: ["Dewpider", "Araquanid"],

  fomantis: ["Fomantis", "Lurantis"],
  lurantis: ["Fomantis", "Lurantis"],

  morelull: ["Morelull", "Shiinotic"],
  shiinotic: ["Morelull", "Shiinotic"],

  salandit: ["Salandit", "Salazzle"],
  salazzle: ["Salandit", "Salazzle"],

  stufful: ["Stufful", "Bewear"],
  bewear: ["Stufful", "Bewear"],

  bounsweet: ["Bounsweet", "Steenee", "Tsareena"],
  steenee: ["Bounsweet", "Steenee", "Tsareena"],
  tsareena: ["Bounsweet", "Steenee", "Tsareena"],

  comfey: ["Comfey"],

  oranguru: ["Oranguru"],
  passimian: ["Passimian"],

  wimpod: ["Wimpod", "Golisopod"],
  golisopod: ["Wimpod", "Golisopod"],

  sandygast: ["Sandygast", "Palossand"],
  palossand: ["Sandygast", "Palossand"],

  pyukumuku: ["Pyukumuku"],

  type_null: ["Type: Null", "Silvally"],
  silvally: ["Type: Null", "Silvally"],

  minior: ["Minior", "Minior-Meteor", "Minior-Core"],

  komala: ["Komala"],

  turtonator: ["Turtonator"],

  togedemaru: ["Togedemaru"],

  mimikyu: ["Mimikyu", "Mimikyu-Busted"],

  bruxish: ["Bruxish"],

  drampa: ["Drampa"],

  dhelmise: ["Dhelmise"],

  jangmo_o: ["Jangmo-o", "Hakamo-o", "Kommo-o"],
  hakamo_o: ["Jangmo-o", "Hakamo-o", "Kommo-o"],
  kommo_o: ["Jangmo-o", "Hakamo-o", "Kommo-o"],

  tapu_koko: ["Tapu Koko"],
  tapu_lele: ["Tapu Lele"],
  tapu_bulu: ["Tapu Bulu"],
  tapu_fini: ["Tapu Fini"],

  cosmog: ["Cosmog", "Cosmoem", "Solgaleo", "Lunala"],
  cosmoem: ["Cosmog", "Cosmoem", "Solgaleo", "Lunala"],
  solgaleo: ["Cosmog", "Cosmoem", "Solgaleo", "Lunala"],
  lunala: ["Cosmog", "Cosmoem", "Solgaleo", "Lunala"],

  nihilego: ["Nihilego"],
  buzzwole: ["Buzzwole"],
  pheromosa: ["Pheromosa"],
  xurkitree: ["Xurkitree"],
  celesteela: ["Celesteela"],
  kartana: ["Kartana"],
  guzzlord: ["Guzzlord"],

  necrozma: [
    "Necrozma", "Dusk Mane Necrozma", "Dawn Wings Necrozma", "Ultra Necrozma"
  ],
  dusk_mane_necrozma: [
    "Necrozma", "Dusk Mane Necrozma", "Dawn Wings Necrozma", "Ultra Necrozma"
  ],
  dawn_wings_necrozma: [
    "Necrozma", "Dusk Mane Necrozma", "Dawn Wings Necrozma", "Ultra Necrozma"
  ],
  ultra_necrozma: [
    "Necrozma", "Dusk Mane Necrozma", "Dawn Wings Necrozma", "Ultra Necrozma"
  ],

  magearna: ["Magearna", "Magearna-Original"],

  marshadow: ["Marshadow"],

  poipole: ["Poipole", "Naganadel"],
  naganadel: ["Poipole", "Naganadel"],

  stakataka: ["Stakataka"],
  blacephalon: ["Blacephalon"],

  zeraora: ["Zeraora"],

  meltan: ["Meltan", "Melmetal"],
  melmetal: ["Meltan", "Melmetal"],

    grookey: ["Grookey", "Thwackey", "Rillaboom"],
  thwackey: ["Grookey", "Thwackey", "Rillaboom"],
  rillaboom: ["Grookey", "Thwackey", "Rillaboom"],

  scorbunny: ["Scorbunny", "Raboot", "Cinderace"],
  raboot: ["Scorbunny", "Raboot", "Cinderace"],
  cinderace: ["Scorbunny", "Raboot", "Cinderace"],

  sobble: ["Sobble", "Drizzile", "Inteleon"],
  drizzile: ["Sobble", "Drizzile", "Inteleon"],
  inteleon: ["Sobble", "Drizzile", "Inteleon"],

  skwovet: ["Skwovet", "Greedent"],
  greedent: ["Skwovet", "Greedent"],

  rookidee: ["Rookidee", "Corvisquire", "Corviknight"],
  corvisquire: ["Rookidee", "Corvisquire", "Corviknight"],
  corviknight: ["Rookidee", "Corvisquire", "Corviknight"],

  blipbug: ["Blipbug", "Dottler", "Orbeetle"],
  dottler: ["Blipbug", "Dottler", "Orbeetle"],
  orbeetle: ["Blipbug", "Dottler", "Orbeetle"],

  nickit: ["Nickit", "Thievul"],
  thievul: ["Nickit", "Thievul"],

  gossifleur: ["Gossifleur", "Eldegoss"],
  eldegoss: ["Gossifleur", "Eldegoss"],

  wooloo: ["Wooloo", "Dubwool"],
  dubwool: ["Wooloo", "Dubwool"],

  chewtle: ["Chewtle", "Drednaw"],
  drednaw: ["Chewtle", "Drednaw"],

  yamper: ["Yamper", "Boltund"],
  boltund: ["Yamper", "Boltund"],

  rolycoly: ["Rolycoly", "Carkol", "Coalossal"],
  carkol: ["Rolycoly", "Carkol", "Coalossal"],
  coalossal: ["Rolycoly", "Carkol", "Coalossal"],

  applin: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],
  flapple: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],
  appletun: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],
  dipplin: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],
  hydrapple: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],

  silicobra: ["Silicobra", "Sandaconda"],
  sandaconda: ["Silicobra", "Sandaconda"],

  cramorant: ["Cramorant"],

  arrokuda: ["Arrokuda", "Barraskewda"],
  barraskewda: ["Arrokuda", "Barraskewda"],

  toxel: ["Toxel", "Toxtricity", "Toxtricity-Low-Key"],
  toxtricity: ["Toxel", "Toxtricity", "Toxtricity-Low-Key"],
  toxtricity_low_key: ["Toxel", "Toxtricity", "Toxtricity-Low-Key"],

  sizzlipede: ["Sizzlipede", "Centiskorch"],
  centiskorch: ["Sizzlipede", "Centiskorch"],

  clobbopus: ["Clobbopus", "Grapploct"],
  grapploct: ["Clobbopus", "Grapploct"],

  sinistea: ["Sinistea", "Polteageist"],
  polteageist: ["Sinistea", "Polteageist"],

  hatenna: ["Hatenna", "Hattrem", "Hatterene"],
  hattrem: ["Hatenna", "Hattrem", "Hatterene"],
  hatterene: ["Hatenna", "Hattrem", "Hatterene"],

  impidimp: ["Impidimp", "Morgrem", "Grimmsnarl"],
  morgrem: ["Impidimp", "Morgrem", "Grimmsnarl"],
  grimmsnarl: ["Impidimp", "Morgrem", "Grimmsnarl"],

  obstagoon: [
    "Galarian Zigzagoon", "Galarian Linoone", "Obstagoon"
  ],
  galarian_zigzagoon: [
    "Galarian Zigzagoon", "Galarian Linoone", "Obstagoon"
  ],
  galarian_linoone: [
    "Galarian Zigzagoon", "Galarian Linoone", "Obstagoon"
  ],

  perrserker: [
    "Galarian Meowth", "Perrserker"
  ],
  galarian_meowth: [
    "Galarian Meowth", "Perrserker"
  ],

  cursola: [
    "Galarian Corsola", "Cursola"
  ],
  galarian_corsola: [
    "Galarian Corsola", "Cursola"
  ],

  sirfetchd: [
    "Galarian Farfetch’d", "Sirfetch’d"
  ],
  galarian_farfetchd: [
    "Galarian Farfetch’d", "Sirfetch’d"
  ],

  mr_rime: [
    "Galarian Mr. Mime", "Mr. Rime"
  ],
  galarian_mr_mime: [
    "Galarian Mr. Mime", "Mr. Rime"
  ],

  runerigus: [
    "Galarian Yamask", "Runerigus"
  ],
  galarian_yamask: [
    "Galarian Yamask", "Runerigus"
  ],

  milcery: [
    "Milcery", "Alcremie", "Alcremie (All Forms)"
  ],
  alcremie: [
    "Milcery", "Alcremie", "Alcremie (All Forms)"
  ],

  falinks: ["Falinks"],

  pincurchin: ["Pincurchin"],

  snom: ["Snom", "Frosmoth"],
  frosmoth: ["Snom", "Frosmoth"],

  stonjourner: ["Stonjourner"],

  eiscue: ["Eiscue", "Eiscue-Noice"],

  indeedee: ["Indeedee", "Indeedee (Female)"],

  morpeko: ["Morpeko", "Morpeko (Hangry)"],

  cufant: ["Cufant", "Copperajah"],
  copperajah: ["Cufant", "Copperajah"],

  dracozolt: ["Dracozolt"],
  arctozolt: ["Arctozolt"],
  dracovish: ["Dracovish"],
  arctovish: ["Arctovish"],

  duraludon: ["Duraludon"],

  dreepy: ["Dreepy", "Drakloak", "Dragapult"],
  drakloak: ["Dreepy", "Drakloak", "Dragapult"],
  dragapult: ["Dreepy", "Drakloak", "Dragapult"],

  zacian: ["Zacian", "Zacian (Crowned Sword)"],
  zamazenta: ["Zamazenta", "Zamazenta (Crowned Shield)"],

  eternatus: ["Eternatus", "Eternamax Eternatus"],

  kubfu: ["Kubfu", "Urshifu", "Urshifu Single Strike", "Urshifu Rapid Strike"],
  urshifu: ["Kubfu", "Urshifu", "Urshifu Single Strike", "Urshifu Rapid Strike"],

  zarude: ["Zarude", "Zarude Dada"],

  regieleki: ["Regieleki"],
  regidrago: ["Regidrago"],

  glastrier: ["Glastrier"],
  spectrier: ["Spectrier"],

  calyrex: [
    "Calyrex", "Ice Rider Calyrex", "Shadow Rider Calyrex",
    "Glastrier", "Spectrier"
  ],
  ice_rider_calyrex: [
    "Calyrex", "Ice Rider Calyrex", "Glastrier"
  ],
  shadow_rider_calyrex: [
    "Calyrex", "Shadow Rider Calyrex", "Spectrier"
  ],

  wyrdeer: ["Stantler", "Wyrdeer"],
  stantler: ["Stantler", "Wyrdeer"],

  kleavor: ["Scyther", "Scizor", "Kleavor"],
  scyther: ["Scyther", "Scizor", "Kleavor"],
  scizor: ["Scyther", "Scizor", "Kleavor"],

  ursaluna: ["Ursaring", "Ursaluna", "Ursaluna-Bloodmoon"],
  ursaring: ["Ursaring", "Ursaluna", "Ursaluna-Bloodmoon"],

  basculegion: ["Basculin", "Basculegion"],
  basculin: ["Basculin", "Basculegion"],

  sneasler: ["Hisuian Sneasel", "Sneasler"],
  hisuian_sneasel: ["Hisuian Sneasel", "Sneasler"],

  overqwil: ["Hisuian Qwilfish", "Overqwil"],
  hisuian_qwilfish: ["Hisuian Qwilfish", "Overqwil"],

  enamorus: ["Enamorus", "Enamorus Therian"],

  // ...continue with Paldea (Gen 9) next!

    sprigatito: ["Sprigatito", "Floragato", "Meowscarada"],
  floragato: ["Sprigatito", "Floragato", "Meowscarada"],
  meowscarada: ["Sprigatito", "Floragato", "Meowscarada"],

  fuecoco: ["Fuecoco", "Crocalor", "Skeledirge"],
  crocalor: ["Fuecoco", "Crocalor", "Skeledirge"],
  skeledirge: ["Fuecoco", "Crocalor", "Skeledirge"],

  quaxly: ["Quaxly", "Quaxwell", "Quaquaval"],
  quaxwell: ["Quaxly", "Quaxwell", "Quaquaval"],
  quaquaval: ["Quaxly", "Quaxwell", "Quaquaval"],

  lechonk: ["Lechonk", "Oinkologne", "Oinkologne-Female"],
  oinkologne: ["Lechonk", "Oinkologne", "Oinkologne-Female"],
  oinkologne_female: ["Lechonk", "Oinkologne", "Oinkologne-Female"],

  tarountula: ["Tarountula", "Spidops"],
  spidops: ["Tarountula", "Spidops"],

  nymble: ["Nymble", "Lokix"],
  lokix: ["Nymble", "Lokix"],

  rellor: ["Rellor", "Rabsca"],
  rabsca: ["Rellor", "Rabsca"],

  greavard: ["Greavard", "Houndstone"],
  houndstone: ["Greavard", "Houndstone"],

  flittle: ["Flittle", "Espathra"],
  espathra: ["Flittle", "Espathra"],

  tandemaus: ["Tandemaus", "Maushold", "Maushold-Family-of-Three"],
  maushold: ["Tandemaus", "Maushold", "Maushold-Family-of-Three"],
  maushold_family_of_three: ["Tandemaus", "Maushold", "Maushold-Family-of-Three"],

  shroodle: ["Shroodle", "Grafaiai"],
  grafaiai: ["Shroodle", "Grafaiai"],

  fidough: ["Fidough", "Dachsbun"],
  dachsbun: ["Fidough", "Dachsbun"],

  smoliv: ["Smoliv", "Dolliv", "Arboliva"],
  dolliv: ["Smoliv", "Dolliv", "Arboliva"],
  arboliva: ["Smoliv", "Dolliv", "Arboliva"],

  squawkabilly: ["Squawkabilly", "Squawkabilly-Blue", "Squawkabilly-White", "Squawkabilly-Yellow"],
  squawkabilly_blue: ["Squawkabilly", "Squawkabilly-Blue", "Squawkabilly-White", "Squawkabilly-Yellow"],
  squawkabilly_white: ["Squawkabilly", "Squawkabilly-Blue", "Squawkabilly-White", "Squawkabilly-Yellow"],
  squawkabilly_yellow: ["Squawkabilly", "Squawkabilly-Blue", "Squawkabilly-White", "Squawkabilly-Yellow"],

  nacli: ["Nacli", "Naclstack", "Garganacl"],
  naclstack: ["Nacli", "Naclstack", "Garganacl"],
  garganacl: ["Nacli", "Naclstack", "Garganacl"],

  charcadet: ["Charcadet", "Armarouge", "Ceruledge"],
  armarouge: ["Charcadet", "Armarouge", "Ceruledge"],
  ceruledge: ["Charcadet", "Armarouge", "Ceruledge"],

  tadbulb: ["Tadbulb", "Bellibolt"],
  bellibolt: ["Tadbulb", "Bellibolt"],

  wattrel: ["Wattrel", "Kilowattrel"],
  kilowattrel: ["Wattrel", "Kilowattrel"],

  maschiff: ["Maschiff", "Mabosstiff"],
  mabosstiff: ["Maschiff", "Mabosstiff"],

  shroodle: ["Shroodle", "Grafaiai"],
  grafaiai: ["Shroodle", "Grafaiai"],

  bramblin: ["Bramblin", "Brambleghast"],
  brambleghast: ["Bramblin", "Brambleghast"],

  gimmighoul: ["Gimmighoul", "Gholdengo"],
  gholdengo: ["Gimmighoul", "Gholdengo"],

  ghimmighoul: ["Gimmighoul", "Gholdengo"], // just in case a typo

  capsakid: ["Capsakid", "Scovillain"],
  scovillain: ["Capsakid", "Scovillain"],

  rellor: ["Rellor", "Rabsca"],
  rabsca: ["Rellor", "Rabsca"],

  tandemaus: ["Tandemaus", "Maushold", "Maushold-Family-of-Three"],
  maushold: ["Tandemaus", "Maushold", "Maushold-Family-of-Three"],
  maushold_family_of_three: ["Tandemaus", "Maushold", "Maushold-Family-of-Three"],

  cetoddle: ["Cetoddle", "Cetitan"],
  cetitan: ["Cetoddle", "Cetitan"],

  veluza: ["Veluza"],

  dondozo: ["Dondozo"],

  tatsugiri: [
    "Tatsugiri", "Tatsugiri-Droopy", "Tatsugiri-Stretchy", "Tatsugiri-Curly"
  ],
  tatsugiri_droopy: [
    "Tatsugiri", "Tatsugiri-Droopy", "Tatsugiri-Stretchy", "Tatsugiri-Curly"
  ],
  tatsugiri_stretchy: [
    "Tatsugiri", "Tatsugiri-Droopy", "Tatsugiri-Stretchy", "Tatsugiri-Curly"
  ],
  tatsugiri_curly: [
    "Tatsugiri", "Tatsugiri-Droopy", "Tatsugiri-Stretchy", "Tatsugiri-Curly"
  ],

  cyclizar: ["Cyclizar"],

  orthworm: ["Orthworm"],

  glimmet: ["Glimmet", "Glimmora"],
  glimmora: ["Glimmet", "Glimmora"],

  greavard: ["Greavard", "Houndstone"],
  houndstone: ["Greavard", "Houndstone"],

  flamigo: ["Flamigo"],

  cetoddle: ["Cetoddle", "Cetitan"],
  cetitan: ["Cetoddle", "Cetitan"],

  annihilape: ["Mankey", "Primeape", "Annihilape"],
  mankey: ["Mankey", "Primeape", "Annihilape"],
  primeape: ["Mankey", "Primeape", "Annihilape"],

  clodsire: ["Wooper (Paldean)", "Clodsire"],
  paldean_wooper: ["Wooper (Paldean)", "Clodsire"],

  farigiraf: ["Girafarig", "Farigiraf"],
  girafarig: ["Girafarig", "Farigiraf"],

  dudunsparce: ["Dunsparce", "Dudunsparce", "Dudunsparce-Three-Segment"],
  dunsparce: ["Dunsparce", "Dudunsparce", "Dudunsparce-Three-Segment"],
  dudunsparce_three_segment: ["Dunsparce", "Dudunsparce", "Dudunsparce-Three-Segment"],

  kingambit: ["Pawniard", "Bisharp", "Kingambit"],
  pawniard: ["Pawniard", "Bisharp", "Kingambit"],
  bisharp: ["Pawniard", "Bisharp", "Kingambit"],

  great_tusk: ["Great Tusk"],    // Paradox Pokémon (no evolutions)
  scream_tail: ["Scream Tail"],
  brute_bonnet: ["Brute Bonnet"],
  flutter_mane: ["Flutter Mane"],
  slither_wing: ["Slither Wing"],
  sandy_shocks: ["Sandy Shocks"],
  iron_treads: ["Iron Treads"],
  iron_bundle: ["Iron Bundle"],
  iron_hands: ["Iron Hands"],
  iron_jugulis: ["Iron Jugulis"],
  iron_moth: ["Iron Moth"],
  iron_thorns: ["Iron Thorns"],

  frigibax: ["Frigibax", "Arctibax", "Baxcalibur"],
  arctibax: ["Frigibax", "Arctibax", "Baxcalibur"],
  baxcalibur: ["Frigibax", "Arctibax", "Baxcalibur"],

  gimmighoul: ["Gimmighoul", "Gholdengo"],
  gholdengo: ["Gimmighoul", "Gholdengo"],

  wo_chien: ["Wo-Chien"],
  chien_pao: ["Chien-Pao"],
  ting_lu: ["Ting-Lu"],
  chi_yu: ["Chi-Yu"],

  roaring_moon: ["Roaring Moon"],
  iron_valiant: ["Iron Valiant"],

  koraidon: ["Koraidon"],
  miraidon: ["Miraidon"],

  walking_wake: ["Walking Wake"],
  iron_leaves: ["Iron Leaves"],

  dipplin: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],
  hydrapple: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],

  poltchageist: ["Poltchageist", "Sinistcha"],
  sinistcha: ["Poltchageist", "Sinistcha"],

  okidogi: ["Okidogi"],
  munkidori: ["Munkidori"],
  fezandipiti: ["Fezandipiti"],

  ogerpon: [
    "Ogerpon", "Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone"
  ],
  ogerpon_wellspring: [
    "Ogerpon", "Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone"
  ],
  ogerpon_hearthflame: [
    "Ogerpon", "Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone"
  ],
  ogerpon_cornerstone: [
    "Ogerpon", "Ogerpon-Wellspring", "Ogerpon-Hearthflame", "Ogerpon-Cornerstone"
  ],

  archaludon: ["Duraludon", "Archaludon"],
  duraludon: ["Duraludon", "Archaludon"],

  hydrapple: ["Applin", "Flapple", "Appletun", "Dipplin", "Hydrapple"],

  };
export default evolutionFamilies;
