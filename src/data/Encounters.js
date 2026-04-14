const defaultEncounters = [
  {
    "area": "Aquacorde Town",
    "status": "Available",
    "pokemon": {
      "gift": [
        "Froakie",
        "Fennekin",
        "Chespin"
      ]
    },
    "methodLevels": {
      "gift": "Level 5"
    }
  },
  {
    "area": "Route 1",
    "status": "Available",
    "pokemon": {
      "none": [
        "No encounters"
      ]
    }
  },
  {
    "area": "Avance Trail",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Bunnelby",
        "Fletchling",
        "Pidgey",
        "Zigzagoon",
        "Kricketot",
        "Poochyena",
        "Patrat",
        "Purrloin",
        "Weedle",
        "Bonsly",
        "Surskit"
      ],
      "secondPatchGrass": [
        "Torchic"
      ]
    },
    "methodLevels": {
      "grass": "Level 2-3",
      "secondPatchGrass": "Level 5"
    },
    "methodRates": {
      "grass": {
        "Bunnelby": 10,
        "Fletchling": 10,
        "Pidgey": 10,
        "Zigzagoon": 10,
        "Kricketot": 10,
        "Poochyena": 10,
        "Patrat": 10,
        "Purrloin": 10,
        "Weedle": 10,
        "Bonsly": 5,
        "Surskit": 5
      },
      "secondPatchGrass": {
        "Torchic": 100
      }
    }
  },
  {
    "area": "Santalune Forest",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Wurmple",
        "Scatterbug",
        "Cottonee",
        "Petilil",
        "Shroomish",
        "Pansage",
        "Pansear",
        "Panpour",
        "Sewaddle",
        "Pikachu",
        "Slakoth"
      ]
    },
    "methodLevels": {
      "grass": "Level 3-5"
    },
    "methodRates": {
      "grass": {
        "Wurmple": 10,
        "Scatterbug": 10,
        "Cottonee": 10,
        "Petilil": 10,
        "Shroomish": 10,
        "Pansage": 10,
        "Pansear": 10,
        "Panpour": 10,
        "Sewaddle": 10,
        "Pikachu": 5,
        "Slakoth": 5
      }
    }
  },
  {
    "area": "Route 3",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Rattata",
        "Shinx",
        "Bidoof",
        "Caterpie",
        "Pidove",
        "Tympole",
        "Lillipup",
        "Hoothoot",
        "Jigglypuff",
        "Smoochum",
        "Zorua"
      ],
      "oldRod": [
        "Magikarp",
        "Corphish",
        "Goldeen"
      ],
      "goodRod": [
        "Goldeen",
        "Corphish"
      ],
      "superRod": [
        "Gyarados",
        "Seaking",
        "Crawdaunt"
      ],
      "surf": [
        "Masquerain",
        "Marill",
        "Azumarill"
      ]
    },
    "methodLevels": {
      "grass": "Level 6-7",
      "oldRod": "Level 19-24",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 32-35"
    },
    "methodRates": {
      "grass": {
        "Rattata": 10,
        "Shinx": 10,
        "Bidoof": 10,
        "Caterpie": 10,
        "Pidove": 10,
        "Tympole": 10,
        "Lillipup": 10,
        "Hoothoot": 10,
        "Jigglypuff": 10,
        "Smoochum": 5,
        "Zorua": 5
      },
      "oldRod": {
        "Magikarp": 60,
        "Corphish": 35,
        "Goldeen": 5
      },
      "goodRod": {
        "Goldeen": 60,
        "Corphish": 40
      },
      "superRod": {
        "Gyarados": 60,
        "Seaking": 35,
        "Crawdaunt": 5
      },
      "surf": {
        "Masquerain": 50,
        "Marill": 30,
        "Azumarill": 20
      }
    }
  },
  {
    "area": "Route 22 (Détourner Way)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Spearow",
        "Mankey",
        "Litleo",
        "Starly",
        "Psyduck",
        "Lotad",
        "Seedot",
        "Azurill",
        "Farfetch’d",
        "Dunsparce",
        "Riolu"
      ],
      "yellowFlowers": [
        "Bibarel",
        "Golduck",
        "Azumarill",
        "Pyroar",
        "Diggersby",
        "Farfetch’d",
        "Dunsparce",
        "Lucario",
        "Deoxys"
      ],
      "oldRod": [
        "Magikarp",
        "Carvanha"
      ],
      "goodRod": [
        "Goldeen",
        "Carvanha"
      ],
      "superRod": [
        "Gyarados",
        "Seaking",
        "Sharpedo"
      ],
      "surf": [
        "Psyduck",
        "Azumarill"
      ]
    },
    "methodLevels": {
      "grass": "Level 9-10",
      "yellowFlowers": "Level 70-72",
      "oldRod": "Level 19-24",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 40-42"
    },
    "methodRates": {
      "grass": {
        "Spearow": 10,
        "Mankey": 10,
        "Litleo": 10,
        "Starly": 10,
        "Psyduck": 10,
        "Lotad": 10,
        "Seedot": 10,
        "Azurill": 10,
        "Farfetch’d": 10,
        "Dunsparce": 5,
        "Riolu": 5
      },
      "yellowFlowers": {
        "Bibarel": 20,
        "Golduck": 20,
        "Azumarill": 20,
        "Pyroar": 10,
        "Diggersby": 10,
        "Farfetch’d": 10,
        "Dunsparce": 5,
        "Lucario": 4,
        "Deoxys": 1
      },
      "oldRod": {
        "Magikarp": 60,
        "Carvanha": 40
      },
      "goodRod": {
        "Goldeen": 60,
        "Carvanha": 40
      },
      "superRod": {
        "Gyarados": 60,
        "Seaking": 35,
        "Sharpedo": 5
      },
      "surf": {
        "Psyduck": 95,
        "Azumarill": 5
      }
    }
  },
  {
    "area": "Route 4 (Parterre Way)",
    "status": "Available",
    "pokemon": {
      "yellowFlowers": [
        "Flabébé (Yellow)",
        "Sunkern",
        "Togepi",
        "Combee",
        "Munna",
        "Skitty",
        "Ralts",
        "Flabébé (Blue)",
        "Flabébé (White)"
      ],
      "redFlowers": [
        "Flabébé (Red)",
        "Natu",
        "Buneary",
        "Spinda",
        "Ledyba",
        "Budew",
        "Happiny",
        "Glammeow",
        "Flabébé (Orange)",
        "Flabébé (Green)"
      ]
    },
    "methodLevels": {
      "yellowFlowers": "Level 11-13",
      "redFlowers": "Level 11-13"
    },
    "methodRates": {
      "yellowFlowers": {
        "Flabébé (Yellow)": 20,
        "Sunkern": 10,
        "Togepi": 10,
        "Combee": 20,
        "Munna": 10,
        "Skitty": 10,
        "Ralts": 15,
        "Flabébé (Blue)": 4,
        "Flabébé (White)": 1
      },
      "redFlowers": {
        "Flabébé (Red)": 20,
        "Natu": 10,
        "Buneary": 10,
        "Spinda": 10,
        "Ledyba": 10,
        "Budew": 15,
        "Happiny": 10,
        "Glammeow": 10,
        "Flabébé (Orange)": 4,
        "Flabébé (Green)": 1
      }
    }
  },
  {
    "area": "Lumiose City",
    "status": "Available",
    "pokemon": {
      "gift": [
        "Eevee",
        "Bulbasaur",
        "Charmander",
        "Squirtle",
        "Rotom"
      ],
      "oldRod": [
        "Magikarp"
      ],
      "goodRod": [
        "Gyarados",
        "Luvdisc"
      ],
      "superRod": [
        "Luvdisc",
        "Gyarados",
        "Basculin"
      ],
      "trade": [
        "Farfetch'd"
      ]
    },
    "levelCap": null
  },
  {
    "area": "Route 5 (Versant Road)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Meowth",
        "Blitzle",
        "Skiddo",
        "Furfrou",
        "Pancham",
        "Doduo",
        "Phanpy",
        "Abra",
        "Plusle",
        "Minun"
      ],
      "purpleFlowers": [
        "Gulpin",
        "Pancham",
        "Skiddo",
        "Blitzle",
        "Elekid",
        "Magby",
        "Doduo",
        "Abra",
        "Minun",
        "Plusle"
      ],
      "horde": [
        "Cyndaquil",
        "Scraggy",
        "Plusle",
        "Minun"
      ]
    },
    "methodLevels": {
      "grass": "Level 14-16",
      "purpleFlowers": "Level 14-16"
    },
    "methodRates": {
      "grass": {
        "Meowth": 10,
        "Blitzle": 10,
        "Skiddo": 20,
        "Furfrou": 20,
        "Pancham": 10,
        "Doduo": 10,
        "Phanpy": 10,
        "Abra": 5,
        "Plusle": 4,
        "Minun": 1
      },
      "purpleFlowers": {
        "Gulpin": 20,
        "Pancham": 20,
        "Skiddo": 10,
        "Blitzle": 10,
        "Elekid": 10,
        "Magby": 10,
        "Doduo": 10,
        "Abra": 5,
        "Minun": 4,
        "Plusle": 1
      },
      "horde": {
        "Cyndaquil": 60,
        "Scraggy": 35,
        "Plusle": 2.5,
        "Minun": 2.5
      }
    }
  },
  {
    "area": "Route 6 (Palais Lane)",
    "status": "Available",
    "pokemon": {
      "tallGrass": [
        "Espurr",
        "Oddish",
        "Aipom",
        "Tangela",
        "Sentret",
        "Venonat",
        "Nincada",
        "Ekans",
        "Honedge",
        "Kecleon"
      ],
      "rustlingBush": [
        "Audino",
        "Venipede"
      ]
    },
    "methodLevels": {
      "tallGrass": "Level 17-19"
    },
    "methodRates": {
      "tallGrass": {
        "Espurr": 15,
        "Oddish": 10,
        "Aipom": 10,
        "Tangela": 10,
        "Sentret": 10,
        "Venonat": 10,
        "Nincada": 10,
        "Ekans": 10,
        "Honedge": 10,
        "Kecleon": 5
      }
    }
  },
  {
    "area": "Parfum Palace",
    "status": "Available",
    "pokemon": {
      "oldRod": [
        "Feebas",
        "Dratini",
        "Magikarp"
      ],
      "goodRod": [
        "Feebas",
        "Corphish",
        "Dragonair"
      ],
      "superRod": [
        "Gyarados",
        "Crawdaunt",
        "Milotic"
      ]
    },
    "methodLevels": {
      "oldRod": "Level 19-24",
      "goodRod": "Level 35",
      "superRod": "Level 45"
    },
    "methodRates": {
      "oldRod": {
        "Feebas": 60,
        "Dratini": 35,
        "Magikarp": 5
      },
      "goodRod": {
        "Feebas": 60,
        "Corphish": 35,
        "Dragonair": 5
      },
      "superRod": {
        "Gyarados": 60,
        "Crawdaunt": 35,
        "Milotic": 5
      }
    }
  },
  {
    "area": "Route 7 (Rivière Walk)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Croagunk",
        "Smeargle",
        "Buizel",
        "Hoppip",
        "Volbeat",
        "Illumise",
        "Ducklett",
        "Flabébé"
      ],
      "yellowFlowers": [
        "Shellos",
        "Swirlix",
        "Flabébé",
        "Volbeat",
        "Minccino",
        "Swablu",
        "Roselia",
        "Croagunk"
      ],
      "purpleFlowers": [
        "Shellos",
        "Spritzee",
        "Flabébé",
        "Minccino",
        "Illumise",
        "Ducklett",
        "Roselia",
        "Croagunk",
        "Munchlax"
      ],
      "horde": [
        "Turtwig",
        "Piplup",
        "Roselia"
      ],
      "sleepingSnorlax": [
        "Snorlax"
      ]
    },
    "methodLevels": {
      "grass": "Level 19-21",
      "yellowFlowers": "Level 19-21",
      "purpleFlowers": "Level 19-21",
      "sleepingSnorlax": "Static"
    },
    "methodRates": {
      "grass": {
        "Croagunk": 20,
        "Smeargle": 20,
        "Buizel": 15,
        "Hoppip": 10,
        "Volbeat": 10,
        "Illumise": 10,
        "Ducklett": 10,
        "Flabébé": 5
      },
      "yellowFlowers": {
        "Shellos": 20,
        "Swirlix": 20,
        "Flabébé": 15,
        "Volbeat": 10,
        "Minccino": 10,
        "Swablu": 10,
        "Roselia": 10,
        "Croagunk": 5
      },
      "purpleFlowers": {
        "Shellos": 20,
        "Spritzee": 20,
        "Flabébé": 10,
        "Minccino": 10,
        "Illumise": 10,
        "Ducklett": 10,
        "Roselia": 10,
        "Croagunk": 5,
        "Munchlax": 5
      },
      "horde": {
        "Turtwig": 60,
        "Piplup": 35,
        "Roselia": 5
      },
      "sleepingSnorlax": {
        "Snorlax": 100
      }
    }
  },
  {
    "area": "Berry Fields",
    "status": "Available",
    "pokemon": {
      "redBerryTree": [
        "Ledyba"
      ],
      "blueBerryTree": [
        "Volbeat"
      ],
      "purpleBerryTree": [
        "Illumise"
      ],
      "greenBerryTree": [
        "Burmy"
      ],
      "yellowBerryTree": [
        "Combee"
      ],
      "pinkBerryTree": [
        "Spewpa"
      ]
    },
    "methodRates": {
      "redBerryTree": {
        "Ledyba": 100
      },
      "blueBerryTree": {
        "Volbeat": 100
      },
      "purpleBerryTree": {
        "Illumise": 100
      },
      "greenBerryTree": {
        "Burmy": 100
      },
      "yellowBerryTree": {
        "Combee": 100
      },
      "pinkBerryTree": {
        "Spewpa": 100
      }
    }
  },
  {
    "area": "Connecting Cave: Zubat Roost",
    "status": "Available",
    "pokemon": {
      "cave": [
        "Zubat",
        "Meditite",
        "Whismur",
        "Teddiursa",
        "Lickitung",
        "Aron",
        "Axew",
        "Larvitar"
      ],
      "horde": [
        "Charmander",
        "Drilbur",
        "Axew"
      ]
    },
    "methodLevels": {
      "cave": "Level 18-20"
    },
    "methodRates": {
      "cave": {
        "Zubat": 20,
        "Meditite": 20,
        "Whismur": 10,
        "Teddiursa": 10,
        "Lickitung": 10,
        "Aron": 10,
        "Axew": 10,
        "Larvitar": 10
      },
      "horde": {
        "Charmander": 60,
        "Drilbur": 35,
        "Axew": 5
      }
    }
  },
  {
    "area": "Route 8 (Muraille Coast)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Drifloon",
        "Spoink",
        "Inkay",
        "Taillow",
        "Absol",
        "Sneasel",
        "Seviper",
        "Bagon"
      ],
      "yellowFlowers": [
        "Mienfoo",
        "Absol",
        "Inkay",
        "Taillow",
        "Spoink",
        "Gligar",
        "Zangoose",
        "Skarmory"
      ],
      "rockSmash": [
        "Dwebble",
        "Binacle"
      ],
      "oldRod": [
        "Clauncher",
        "Skrelp"
      ],
      "goodRod": [
        "Skrelp",
        "Clauncher"
      ],
      "superRod": [
        "Qwilfish",
        "Clawitzer",
        "Dragalge"
      ],
      "surf": [
        "Frillish",
        "Wailmer",
        "Tentacool"
      ],
      "horde": [
        "Chimchar",
        "Zangoose",
        "Seviper",
        "Rufflet",
        "Vullaby"
      ]
    },
    "methodLevels": {
      "grass": "Level 20-22",
      "yellowFlowers": "Level 19-22",
      "rockSmash": "Level 20-23",
      "oldRod": "Level 24",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 32-34"
    },
    "methodRates": {
      "grass": {
        "Drifloon": 20,
        "Spoink": 20,
        "Inkay": 15,
        "Taillow": 10,
        "Absol": 10,
        "Sneasel": 10,
        "Seviper": 10,
        "Bagon": 5
      },
      "yellowFlowers": {
        "Mienfoo": 20,
        "Absol": 20,
        "Inkay": 15,
        "Taillow": 10,
        "Spoink": 10,
        "Gligar": 10,
        "Zangoose": 10,
        "Skarmory": 5
      },
      "rockSmash": {
        "Dwebble": 50,
        "Binacle": 50
      },
      "oldRod": {
        "Clauncher": 60,
        "Skrelp": 40
      },
      "goodRod": {
        "Skrelp": 60,
        "Clauncher": 40
      },
      "superRod": {
        "Qwilfish": 60,
        "Clawitzer": 35,
        "Dragalge": 5
      },
      "surf": {
        "Frillish": 50,
        "Wailmer": 31,
        "Tentacool": 19
      },
      "horde": {
        "Chimchar": 60,
        "Zangoose": 17.5,
        "Seviper": 17.5,
        "Rufflet": 2.5,
        "Vullaby": 2.5
      }
    }
  },
  {
    "area": "Ambrette Town",
    "status": "Available",
    "pokemon": {
      "rockSmash": [
        "Dwebble",
        "Binacle"
      ],
      "oldRod": [
        "Luvdisc",
        "Relicanth"
      ],
      "goodRod": [
        "Horsea",
        "Relicanth"
      ],
      "superRod": [
        "Relicanth",
        "Clawitzer",
        "Seadra"
      ],
      "surf": [
        "Tentacool",
        "Wailmer"
      ]
    },
    "methodLevels": {
      "rockSmash": "Level 18-20",
      "oldRod": "Level 21-22",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 32-34"
    },
    "methodRates": {
      "rockSmash": {
        "Dwebble": 66,
        "Binacle": 34
      },
      "oldRod": {
        "Luvdisc": 95,
        "Relicanth": 5
      },
      "goodRod": {
        "Horsea": 60,
        "Relicanth": 40
      },
      "superRod": {
        "Relicanth": 60,
        "Clawitzer": 35,
        "Seadra": 5
      },
      "surf": {
        "Tentacool": 69,
        "Wailmer": 31
      }
    }
  },
  {
    "area": "Route 9 (Spikes Passage)",
    "status": "Available",
    "pokemon": {
      "roughTerrain": [
        "Sandile",
        "Hippopotas",
        "Helioptile",
        "Maractus",
        "Cacnea",
        "Torkoal",
        "Numel",
        "Larvesta"
      ]
    },
    "methodLevels": {
      "roughTerrain": "Level 21-23"
    }
  },
  {
    "area": "Glittering Cave",
    "status": "Available",
    "pokemon": {
      "cave": [
        "Machop",
        "Paras",
        "Rhyhorn",
        "Kangaskhan",
        "Cubone",
        "Spinarak",
        "Solrock",
        "Lunatone",
        "Mawile",
        "Druddigon"
      ],
      "rockSmash": [
        "Dwebble",
        "Onix"
      ],
      "ceiling": [
        "Woobat",
        "Ferroseed"
      ]
    },
    "methodLevels": {
      "cave": "Level 22-24",
      "rockSmash": "Level 23-25"
    },
    "methodRates": {
      "cave": {
        "Machop": 15,
        "Paras": 10,
        "Rhyhorn": 10,
        "Kangaskhan": 10,
        "Cubone": 10,
        "Spinarak": 10,
        "Solrock": 10,
        "Lunatone": 10,
        "Mawile": 10,
        "Druddigon": 5
      },
      "rockSmash": {
        "Dwebble": 65,
        "Onix": 35
      }
    }
  },
  {
    "area": "Cyllage City",
    "status": "Available",
    "pokemon": {
      "rockSmash": [
        "Krabby",
        "Onix",
        "Dwebble"
      ],
      "oldRod": [
        "Staryu",
        "Shellder"
      ],
      "goodRod": [
        "Horsea",
        "Finneon",
        "Relicanth"
      ],
      "superRod": [
        "Relicanth",
        "Clawitzer",
        "Seadra"
      ],
      "surf": [
        "Tentacool",
        "Wailmer",
        "Wingull"
      ]
    },
    "methodLevels": {
      "rockSmash": "Level 24-26",
      "oldRod": "Level 26",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 32-34"
    },
    "methodRates": {
      "rockSmash": {
        "Krabby": 50,
        "Onix": 35,
        "Dwebble": 15
      },
      "oldRod": {
        "Staryu": 60,
        "Shellder": 40
      },
      "goodRod": {
        "Horsea": 60,
        "Finneon": 35,
        "Relicanth": 5
      },
      "superRod": {
        "Relicanth": 60,
        "Clawitzer": 35,
        "Seadra": 5
      },
      "surf": {
        "Tentacool": 50,
        "Wailmer": 35,
        "Wingull": 15
      }
    }
  },
  {
    "area": "Route 10 (Menhir Trail)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Hawlucha",
        "Golett",
        "Baltoy",
        "Growlithe",
        "Vulpix",
        "Sigilyph",
        "Nosepass",
        "Elgyem",
        "Emolga"
      ],
      "yellowFlowers": [
        "Electrike",
        "Houndour",
        "Eevee",
        "Yanma",
        "Snubbull",
        "Darumaka"
      ],
      "horde": [
        "Tepig",
        "Snivy",
        "Tyrogue"
      ]
    },
    "methodLevels": {
      "grass": "Level 24-26",
      "yellowFlowers": "Level 24-26"
    }
  },
  {
    "area": "Route 11 (Miroir Way)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Hariyama",
        "Joltik",
        "Sawk",
        "Throh",
        "Staravia",
        "Cherubi",
        "Drowzee",
        "Stunky",
        "Nidorino",
        "Nidorina",
        "Dedenne"
      ],
      "horde": [
        "Torchic",
        "Nidoran♂",
        "Nidoran♀",
        "Timburr"
      ]
    },
    "methodLevels": {
      "grass": "Level 26-28"
    }
  },
  {
    "area": "Reflection Cave",
    "status": "Available",
    "pokemon": {
      "1F": {
        "cave": [
          "Mr. Mime",
          "Solosis",
          "Roggenrola",
          "Chingling",
          "Carbink",
          "Wobbuffet",
          "Sableye"
        ],
        "horde": [
          "Mime Jr.",
          "Clefairy",
          "Roggenrola",
          "Carbink"
        ]
      },
      "B1F": {
        "cave": [
          "Gastly",
          "Klink",
          "Misdreavus",
          "Solosis",
          "Roggenrola",
          "Wobbuffet",
          "Sableye",
          "Meloetta"
        ],
        "horde": [
          "Mime Jr.",
          "Clefairy",
          "Roggenrola",
          "Carbink"
        ]
      },
      "B2F": {
        "cave": [
          "Mr. Mime",
          "Bronzor",
          "Solosis",
          "Roggenrola",
          "Carbink",
          "Chingling",
          "Wobbuffet",
          "Sableye",
          "Diancie"
        ],
        "horde": [
          "Tynamo",
          "Clefairy",
          "Roggenrola",
          "Carbink"
        ]
      },
      "B2F - Alakazite Room": {
        "cave": [
          "Gothita",
          "Noibat",
          "Mr. Mime",
          "Roggenrola",
          "Sableye",
          "Carbink",
          "Wobbuffet",
          "Beldum"
        ],
        "horde": [
          "Tynamo",
          "Clefairy",
          "Roggenrola",
          "Carbink"
        ]
      },
      "ceiling": [
        "Woobat",
        "Ferroseed"
      ]
    },
    "methodLevels": {
      "1F": {
        "cave": "Level 29-31"
      },
      "B1F": {
        "cave": "Level 29-31"
      },
      "B2F": {
        "cave": "Level 29-31"
      },
      "B2F - Alakazite Room": {
        "cave": "Level 29-31"
      }
    }
  },
  {
    "area": "Shalour City",
    "status": "Available",
    "pokemon": {
      "oldRod": [
        "Shellder",
        "Staryu"
      ],
      "goodRod": [
        "Remoraid",
        "Chinchou"
      ],
      "superRod": [
        "Alomomola",
        "Octillery",
        "Lanturn"
      ],
      "surf": [
        "Tentacool",
        "Frillish",
        "Mantyke"
      ]
    },
    "methodLevels": {
      "oldRod": "Level 30",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 32-34"
    }
  },
  {
    "area": "Tower of Mastery",
    "status": "Available",
    "pokemon": {
      "gift": [
        "Lucario"
      ]
    },
    "methodLevels": {
      "gift": "Gift"
    }
  },
  {
    "area": "Route 12 (Fourrage Road)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Slowpoke",
        "Pachirisu",
        "Scyther",
        "Chatot",
        "Ponyta",
        "Miltank",
        "Tauros",
        "Exeggcute"
      ],
      "yellowFlowers": [
        "Tauros",
        "Miltank",
        "Pinsir",
        "Heracross",
        "Chatot",
        "Slowpoke",
        "Exeggcute"
      ],
      "rockSmash": [
        "Dwebble",
        "Binacle"
      ],
      "oldRod": [
        "Remoraid",
        "Clamperl"
      ],
      "goodRod": [
        "Remoraid",
        "Clamperl"
      ],
      "superRod": [
        "Corsola",
        "Octillery",
        "Huntail"
      ],
      "surf": [
        "Tentacool",
        "Frillish",
        "Mantyke",
        "Lapras"
      ],
      "horde": [
        "Mareep",
        "Chikorita",
        "Tauros",
        "Miltank"
      ]
    },
    "methodLevels": {
      "grass": "Level 30-32",
      "yellowFlowers": "Level 30-32",
      "rockSmash": "Level 30-32",
      "oldRod": "Level 30",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 30-32"
    }
  },
  {
    "area": "Azure Bay",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Chatot",
        "Slowpoke",
        "Inkay",
        "Exeggcute",
        "Gastrodon",
        "Spheal",
        "Seel"
      ],
      "rockSmash": [
        "Dwebble",
        "Binacle",
        "Krabby"
      ],
      "oldRod": [
        "Chinchou",
        "Finneon"
      ],
      "goodRod": [
        "Lumineon",
        "Lanturn",
        "Alomomola"
      ],
      "superRod": [
        "Alomomola",
        "Octillery",
        "Lanturn"
      ],
      "surf": [
        "Pelipper",
        "Frillish",
        "Mantyke",
        "Lapras",
        "Manaphy"
      ],
      "horde": [
        "Oshawott",
        "Slowpoke",
        "Exeggcute"
      ]
    },
    "methodLevels": {
      "grass": "Level 31-33",
      "oldRod": "Level 30",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 30-33"
    }
  },
  {
    "area": "Route 13 (Lumiose Badlands)",
    "status": "Available",
    "pokemon": {
      "roughTerrain": [
        "Dugtrio",
        "Sandslash",
        "Trapinch",
        "Gible",
        "Drilbur",
        "Durant"
      ],
      "rockSmash": [
        "Graveler",
        "Slugma"
      ],
      "dirtMound": [
        "Dugtrio",
        "Trapinch",
        "Gible"
      ]
    },
    "methodLevels": {
      "roughTerrain": "Level 34-36"
    }
  },
  {
    "area": "Route 14 (Laverre Nature Trail)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Skorupi",
        "Arbok",
        "Weepinbell",
        "Pineco",
        "Quagsire",
        "Weezing",
        "Karrablast",
        "Shelmet",
        "Carnivine",
        "Haunter",
        "Misdreavus"
      ],
      "shallowWater": [
        "Quagsire",
        "Goomy",
        "Stunfisk",
        "Muk",
        "Karrablast",
        "Shelmet",
        "Haunter"
      ],
      "oldRod": [
        "Poliwag",
        "Barboach"
      ],
      "goodRod": [
        "Barboach",
        "Poliwhirl",
        "Whiscash"
      ],
      "superRod": [
        "Poliwhirl",
        "Whiscash",
        "Poliwrath"
      ],
      "surf": [
        "Quagsire",
        "Stunfisk",
        "Goomy"
      ],
      "horde": [
        "Totodile",
        "Mudkip",
        "Goomy"
      ]
    },
    "methodLevels": {
      "grass": "Level 42-44",
      "shallowWater": "Level 42-44",
      "oldRod": "Level 35",
      "goodRod": "Level 42",
      "superRod": "Level 45",
      "surf": "Level 43-45"
    }
  },
  {
    "area": "Laverre City",
    "status": "Available",
    "pokemon": {
      "oldRod": [
        "Poliwag"
      ],
      "goodRod": [
        "Basculin",
        "Poliwhirl"
      ],
      "superRod": [
        "Poliwhirl",
        "Basculin",
        "Poliwrath"
      ]
    },
    "methodLevels": {
      "oldRod": "Level 30",
      "goodRod": "Level 35",
      "superRod": "Level 50"
    }
  },
  {
    "area": "Route 15 (Brun Way)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Mightyena",
        "Liepard",
        "Castform",
        "Stantler",
        "Deerling",
        "Pawniard",
        "Watchog",
        "Foongus",
        "Girafarig",
        "Klefki"
      ],
      "redFlowers": [
        "Pawniard",
        "Watchog",
        "Liepard",
        "Deino",
        "Skorupi",
        "Mightyena",
        "Duskull",
        "Shuppet",
        "Klefki"
      ],
      "oldRod": [
        "Poliwag"
      ],
      "goodRod": [
        "Basculin",
        "Poliwhirl"
      ],
      "superRod": [
        "Poliwhirl",
        "Basculin",
        "Politoed"
      ],
      "surf": [
        "Lombre",
        "Floatzel"
      ],
      "horde": [
        "Murkrow",
        "Treecko",
        "Porygon"
      ]
    },
    "methodLevels": {
      "grass": "Level 45-47",
      "redFlowers": "Level 45-47",
      "oldRod": "Level 35",
      "goodRod": "Level 40",
      "superRod": "Level 45",
      "surf": "Level 44-46"
    }
  },
  {
    "area": "Lost Hotel",
    "status": "Available",
    "pokemon": {
      "building": [
        "Magneton",
        "Yamask",
        "Litwick",
        "Electrode",
        "Spiritomb",
        "Klefki",
        "Hoopa"
      ],
      "trashDaily": [
        "Trubbish",
        "Garbodor"
      ],
      "trashTuesday": [
        "Rotom"
      ]
    },
    "methodLevels": {
      "building": "Level 46-48"
    }
  },
  {
    "area": "Route 16 (Mélancolie Path)",
    "status": "Available",
    "pokemon": {
      "yellowFlowers": [
        "Skorupi",
        "Phantump",
        "Weepinbell",
        "Bouffalant",
        "Floatzel",
        "Sunflora",
        "Klefki"
      ],
      "tallGrass": [
        "Pumpkaboo",
        "Misdreavus",
        "Foongus",
        "Tropius",
        "Klefki"
      ],
      "oldRod": [
        "Poliwag"
      ],
      "goodRod": [
        "Basculin",
        "Poliwhirl"
      ],
      "superRod": [
        "Poliwhirl",
        "Basculin"
      ],
      "surf": [
        "Lombre",
        "Floatzel",
        "Palpitoad",
        "Seismitoad"
      ],
      "horde": [
        "Squirtle",
        "Bulbasaur",
        "Tropius"
      ]
    },
    "methodLevels": {
      "yellowFlowers": "Level 46-48",
      "tallGrass": "Level 46-48",
      "oldRod": "Level 35",
      "goodRod": "Level 40",
      "superRod": "Level 45",
      "surf": "Level 45-47"
    }
  },
  {
    "area": "Frost Cavern",
    "status": "Available",
    "pokemon": {
      "outside": {
        "oldRod": [
          "Poliwag"
        ],
        "goodRod": [
          "Basculin",
          "Poliwhirl"
        ],
        "superRod": [
          "Poliwhirl",
          "Basculin"
        ],
        "surf": [
          "Dewgong",
          "Floatzel",
          "Poliwrath"
        ]
      },
      "1F": {
        "cave": [
          "Piloswine",
          "Bergmite",
          "Beartic",
          "Jynx",
          "Haunter",
          "Cryogonal"
        ],
        "horde": [
          "Vanillite",
          "Cubchoo",
          "Smoochum"
        ]
      },
      "2F": {
        "cave": [
          "Piloswine",
          "Bergmite",
          "Sealeo",
          "Beartic",
          "Jynx",
          "Haunter",
          "Cryogonal"
        ],
        "oldRod": [
          "Seel",
          "Poliwag"
        ],
        "goodRod": [
          "Basculin",
          "Seel"
        ],
        "superRod": [
          "Dewgong",
          "Basculin",
          "Poliwhirl"
        ],
        "surf": [
          "Seel",
          "Sealeo",
          "Poliwhirl",
          "Floatzel"
        ],
        "horde": [
          "Vanillite",
          "Cubchoo",
          "Smoochum"
        ]
      },
      "3F & Ice Rock Room": {
        "cave": [
          "Piloswine",
          "Bergmite",
          "Beartic",
          "Jynx",
          "Haunter",
          "Cryogonal",
          "Kyurem"
        ],
        "horde": [
          "Snorunt",
          "Cubchoo",
          "Smoochum"
        ]
      }
    },
    "methodLevels": {
      "outside": {
        "oldRod": "Level 40",
        "goodRod": "Level 45",
        "superRod": "Level 50",
        "surf": "Level 48-50"
      },
      "1F": {
        "cave": "Level 50-52"
      },
      "2F": {
        "cave": "Level 50-52",
        "oldRod": "Level 40",
        "goodRod": "Level 45",
        "superRod": "Level 50",
        "surf": "Level 50-52"
      },
      "3F & Ice Rock Room": {
        "cave": "Level 50-52"
      }
    }
  },
  {
    "area": "Route 17 (Mamoswine Road)",
    "status": "Available",
    "pokemon": {
      "snow": [
        "Snover",
        "Delibird",
        "Sneasel",
        "Abomasnow"
      ]
    },
    "methodLevels": {
      "snow": "Level 54-56"
    }
  },
  {
    "area": "Team Flare Secret HQ",
    "status": "Available",
    "pokemon": {
      "static": [
        "Yveltal"
      ]
    },
    "methodLevels": {
      "static": "Static"
    }
  },
  {
    "area": "Route 18 (Vallée Étroite Way)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Gurdurr",
        "Torkoal",
        "Larvesta",
        "Sandslash",
        "Lairon",
        "Durant",
        "Pupitar",
        "Graveler",
        "Heatmor"
      ],
      "redFlowers": [
        "Lairon",
        "Sandslash",
        "Pupitar",
        "Torkoal",
        "Gurdurr",
        "Durant",
        "Graveler",
        "Heatmor"
      ],
      "rockSmash": [
        "Graveler",
        "Shuckle"
      ],
      "horde": [
        "Fennekin",
        "Durant",
        "Heatmor"
      ],
      "rustlingBush": [
        "Heatmor",
        "Durant"
      ]
    },
    "methodLevels": {
      "grass": "Level 60-62",
      "redFlowers": "Level 60-62",
      "rockSmash": "Level 60-62"
    }
  },
  {
    "area": "Terminus Cave",
    "status": "Available",
    "pokemon": {
      "allAreas": {
        "cave": [
          "Lairon",
          "Sandslash",
          "Pupitar",
          "Durant",
          "Graveler"
        ],
        "rockSmash": [
          "Graveler",
          "Shuckle"
        ]
      },
      "1F": {
        "cave": [
          "Genesect"
        ],
        "horde": [
          "Durant",
          "Aron",
          "Unown"
        ]
      },
      "B1F (Both Rooms)": {
        "cave": [
          "Volcanion"
        ],
        "horde": [
          "Durant",
          "Larvitar",
          "Unown"
        ]
      },
      "B2F": {
        "cave": [
          "Heatran"
        ],
        "horde": [
          "Durant",
          "Sandshrew",
          "Unown"
        ]
      },
      "Small Room, B1F (accessible from Route 18)": {
        "cave": [
          "Regigigas"
        ],
        "horde": [
          "Durant",
          "Excadrill",
          "Unown"
        ]
      },
      "Small Room, 1F (accessible from Route 18)": {
        "cave": [
          "Lairon",
          "Sandslash",
          "Pupitar",
          "Durant",
          "Graveler",
          "Unown"
        ],
        "horde": [
          "Durant",
          "Geodude",
          "Unown"
        ]
      },
      "ceiling": [
        "Ariados",
        "Noibat"
      ]
    },
    "methodLevels": {
      "allAreas": {
        "cave": "Level 61-63"
      },
      "1F": {
        "cave": "Level 61-63"
      },
      "B1F (Both Rooms)": {
        "cave": "Level 61-63"
      },
      "B2F": {
        "cave": "Level 61-63"
      },
      "Small Room, B1F (accessible from Route 18)": {
        "cave": "Level 61-63"
      },
      "Small Room, 1F (accessible from Route 18)": {
        "cave": "Level 61-63"
      }
    }
  },
  {
    "area": "Couriway Town",
    "status": "Available",
    "pokemon": {
      "oldRod": [
        "Poliwag"
      ],
      "goodRod": [
        "Basculin",
        "Poliwhirl"
      ],
      "superRod": [
        "Poliwhirl",
        "Basculin"
      ],
      "surf": [
        "Lombre",
        "Floatzel"
      ]
    },
    "methodLevels": {
      "oldRod": "Level 25",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 44-46"
    }
  },
  {
    "area": "Route 19 (Grande Vallée Way)",
    "status": "Available",
    "pokemon": {
      "yellowFlowers": [
        "Quagsire",
        "Sliggoo",
        "Weepinbell",
        "Drapion",
        "Karrablast",
        "Shelmet",
        "Haunter",
        "Carnivine",
        "Latias"
      ],
      "purpleFlowers": [
        "Drapion",
        "Weepinbell",
        "Sliggoo",
        "Quagsire",
        "Karrablast",
        "Shelmet",
        "Haunter",
        "Carnivine",
        "Latios"
      ],
      "shallowWater": [
        "Palpitoad",
        "Sliggoo",
        "Stunfisk",
        "Karrablast",
        "Shelmet",
        "Haunter",
        "Carnivine",
        "Keldeo"
      ],
      "oldRod": [
        "Goomy"
      ],
      "goodRod": [
        "Barboach",
        "Poliwhirl"
      ],
      "superRod": [
        "Poliwhirl",
        "Whiscash",
        "Politoed"
      ],
      "surf": [
        "Quagsire",
        "Stunfisk",
        "Sliggoo"
      ],
      "horde": [
        "Weepinbell",
        "Gligar",
        "Arbok"
      ]
    },
    "methodLevels": {
      "yellowFlowers": "Level 62-64",
      "purpleFlowers": "Level 62-64",
      "shallowWater": "Level 62-63",
      "oldRod": "Level 45",
      "goodRod": "Level 55",
      "superRod": "Level 65",
      "surf": "Level 62-64"
    }
  },
  {
    "area": "Route 20 (Winding Woods)",
    "status": "Available",
    "pokemon": {
      "grass": [
        "Noctowl",
        "Amoonguss",
        "Jigglypuff",
        "Misdreavus",
        "Trevenant",
        "Gothorita",
        "Zoroark"
      ],
      "redFlowers": [
        "Amoonguss",
        "Gothorita",
        "Trevenant",
        "Zoroark",
        "Jigglypuff",
        "Noctowl"
      ],
      "horde": [
        "Chespin",
        "Trevenant",
        "Sudowoodo"
      ]
    },
    "methodLevels": {
      "grass": "Level 64-66",
      "redFlowers": "Level 64-66"
    }
  },
  {
    "area": "Pokémon Village",
    "status": "Available",
    "pokemon": {
      "yellowFlowers": [
        "Ditto",
        "Raikou",
        "Suicune",
        "Entei",
        "Articuno",
        "Zapdos",
        "Moltres",
        "Celebi",
        "Mew",
        "Darkrai"
      ],
      "purpleFlowers": [
        "Regirock",
        "Regice",
        "Registeel",
        "Mesprit",
        "Azelf",
        "Uxie",
        "Cobalion",
        "Virizion",
        "Terrakion",
        "Shaymin",
        "Jirachi",
        "Cresselia"
      ],
      "oldRod": [
        "Poliwhirl",
        "Phione"
      ],
      "goodRod": [
        "Basculin",
        "Poliwhirl"
      ],
      "superRod": [
        "Poliwhirl",
        "Basculin",
        "Politoed"
      ],
      "surf": [
        "Lombre",
        "Poliwhirl"
      ],
      "horde": [
        "Froakie",
        "Ditto",
        "Thundurus",
        "Landorus",
        "Tornadus"
      ],
      "trashDaily": [
        "Garbodor"
      ],
      "trashThursday": [
        "Banette"
      ]
    },
    "methodLevels": {
      "yellowFlowers": "Level 64-66",
      "purpleFlowers": "Level 64-66",
      "oldRod": "Level 40",
      "goodRod": "Level 50",
      "superRod": "Level 65",
      "surf": "Level 64-66"
    }
  },
  {
    "area": "Route 21 (Dernière Way)",
    "status": "Available",
    "pokemon": {
      "purpleFlowers": [
        "Floatzel",
        "Altaria",
        "Cherrim",
        "Spinda",
        "Ursaring",
        "Scyther",
        "Xerneas"
      ],
      "redFlowers": [
        "Ursaring",
        "Altaria",
        "Spinda",
        "Scyther",
        "Floatzel",
        "Cherrim",
        "Yveltal"
      ],
      "oldRod": [
        "Poliwag"
      ],
      "goodRod": [
        "Basculin",
        "Dratini",
        "Dragonair"
      ],
      "superRod": [
        "Dratini",
        "Dragonair",
        "Dragonite"
      ],
      "surf": [
        "Lombre",
        "Floatzel"
      ],
      "horde": [
        "Spinda",
        "Swablu",
        "Scyther"
      ]
    },
    "methodLevels": {
      "purpleFlowers": "Level 65-67",
      "redFlowers": "Level 65-67",
      "oldRod": "Level 50",
      "goodRod": "Level 55",
      "superRod": "Level 65",
      "surf": "Level 65-67"
    }
  },
  {
    "area": "Victory Road",
    "status": "Available",
    "pokemon": {
      "1F": {
        "cave": [
          "Gurdurr",
          "Graveler",
          "Hariyama",
          "Druddigon",
          "Haunter",
          "Lickitung",
          "Zweilous"
        ],
        "rockSmash": [
          "Graveler",
          "Shuckle"
        ],
        "oldRod": [
          "Poliwag"
        ],
        "goodRod": [
          "Basculin",
          "Poliwhirl",
          "Whiscash"
        ],
        "superRod": [
          "Poliwhirl",
          "Basculin",
          "Whiscash"
        ],
        "surf": [
          "Poliwhirl",
          "Floatzel",
          "Poliwrath"
        ],
        "horde": [
          "Deino",
          "Floatzel",
          "Lugia",
          "Ho-Oh"
        ]
      },
      "2F": {
        "cave": [
          "Gurdurr",
          "Druddigon",
          "Graveler",
          "Lickitung",
          "Donphan",
          "Haunter",
          "Zweilous"
        ],
        "rockSmash": [
          "Graveler",
          "Shuckle"
        ],
        "horde": [
          "Phanpy",
          "Graveler",
          "Kyogre",
          "Groudon",
          "Rayquaza"
        ]
      },
      "3F": {
        "cave": [
          "Gurdurr",
          "Druddigon",
          "Graveler",
          "Zweilous",
          "Lickitung",
          "Haunter"
        ],
        "horde": [
          "Gurdurr",
          "Lickitung",
          "Dialga",
          "Palkia",
          "Giratina"
        ]
      },
      "Waterfall Area": {
        "oldRod": [
          "Poliwag"
        ],
        "goodRod": [
          "Basculin",
          "Poliwhirl"
        ],
        "superRod": [
          "Poliwhirl",
          "Basculin",
          "Poliwrath"
        ],
        "surf": [
          "Lombre",
          "Floatzel",
          "Ludicolo"
        ]
      },
      "Final Cave": {
        "cave": [
          "Gurdurr",
          "Graveler",
          "Druddigon",
          "Lickitung",
          "Gabite",
          "Haunter",
          "Zweilous",
          "Victini"
        ],
        "oldRod": [
          "Poliwag"
        ],
        "goodRod": [
          "Basculin",
          "Poliwhirl"
        ],
        "superRod": [
          "Poliwhirl",
          "Basculin",
          "Poliwrath"
        ],
        "surf": [
          "Poliwhirl",
          "Floatzel",
          "Poliwrath"
        ],
        "horde": [
          "Haunter",
          "Floatzel",
          "Reshiram",
          "Zekrom",
          "Arceus"
        ]
      },
      "ceiling": [
        "Graveler",
        "Ariados",
        "Noibat"
      ],
      "sky": [
        "Fearow",
        "Skarmory",
        "Hydreigon"
      ]
    },
    "methodLevels": {
      "1F": {
        "cave": "Level 70-72",
        "oldRod": "Level 55",
        "goodRod": "Level 65",
        "superRod": "Level 75",
        "surf": "Level 70-72"
      },
      "2F": {
        "cave": "Level 70-72"
      },
      "3F": {
        "cave": "Level 70-72"
      },
      "Waterfall Area": {
        "oldRod": "Level 55",
        "goodRod": "Level 65",
        "superRod": "Level 75",
        "surf": "Level 70-72"
      },
      "Final Cave": {
        "cave": "Level 70-72",
        "oldRod": "Level 55",
        "goodRod": "Level 65",
        "superRod": "Level 75-76",
        "surf": "Level 70-72"
      }
    }
  },
  {
    "area": "Unknown Dungeon (Post-Game)",
    "status": "Available",
    "pokemon": {
      "cave": [
        "Mewtwo"
      ]
    },
    "methodLevels": {
      "cave": "Post-Game"
    }
  },
  {
    "area": "Chamber of Emptiness (Post-Game)",
    "status": "Available",
    "pokemon": {
      "static": [
        "None – Only contains TM or Mega Stone"
      ]
    },
    "methodLevels": {
      "static": "Post-Game"
    }
  },
  {
    "area": "Azure Bay Cave",
    "status": "Available",
    "pokemon": {
      "static": [
        "Articuno",
        "Zapdos",
        "Moltres"
      ]
    }
  }
];

export default defaultEncounters;
