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
    },
    "methodRates": {
      "roughTerrain": {
        "Sandile": 20,
        "Hippopotas": 20,
        "Helioptile": 15,
        "Maractus": 10,
        "Cacnea": 10,
        "Torkoal": 10,
        "Numel": 10,
        "Larvesta": 5
      }
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
      "glitteringCaveGuaranteedFossils": [
        "Tyrunt",
        "Amaura"
      ],
      "heldItemFossils": [
        "Omanyte",
        "Kabuto",
        "Aerodactyl",
        "Lileep",
        "Anorith",
        "Cranidos",
        "Shieldon",
        "Tirtouga",
        "Archen"
      ],
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
      "glitteringCaveGuaranteedFossils": "Revive",
      "heldItemFossils": "Revive",
      "rockSmash": "Level 24-26",
      "oldRod": "Level 26",
      "goodRod": "Level 35",
      "superRod": "Level 45",
      "surf": "Level 32-34"
    },
    "methodRates": {
      "glitteringCaveGuaranteedFossils": {
        "Tyrunt": 100,
        "Amaura": 100
      },
      "heldItemFossils": {
        "Omanyte": 100,
        "Kabuto": 100,
        "Aerodactyl": 100,
        "Lileep": 100,
        "Anorith": 100,
        "Cranidos": 100,
        "Shieldon": 100,
        "Tirtouga": 100,
        "Archen": 100
      },
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
    },
    "methodRates": {
      "grass": {
        "Hawlucha": 20,
        "Golett": 10,
        "Baltoy": 10,
        "Growlithe": 10,
        "Vulpix": 10,
        "Sigilyph": 10,
        "Nosepass": 10,
        "Elgyem": 10,
        "Emolga": 10
      },
      "yellowFlowers": {
        "Electrike": 20,
        "Houndour": 20,
        "Eevee": 20,
        "Yanma": 20,
        "Snubbull": 10,
        "Darumaka": 10
      },
      "horde": {
        "Tepig": 60,
        "Snivy": 35,
        "Tyrogue": 5
      }
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
    },
    "methodRates": {
      "grass": {
        "Hariyama": 10,
        "Joltik": 10,
        "Sawk": 10,
        "Throh": 10,
        "Staravia": 10,
        "Cherubi": 10,
        "Drowzee": 10,
        "Stunky": 10,
        "Nidorino": 10,
        "Nidorina": 5,
        "Dedenne": 5
      },
      "horde": {
        "Torchic": 60,
        "Nidoran♂": 17.5,
        "Nidoran♀": 17.5,
        "Timburr": 5
      }
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
    },
    "methodRates": {
      "1F": {
        "cave": {
          "Mr. Mime": 20,
          "Solosis": 20,
          "Roggenrola": 20,
          "Chingling": 15,
          "Carbink": 10,
          "Wobbuffet": 10,
          "Sableye": 10
        },
        "horde": {
          "Mime Jr.": 60,
          "Clefairy": 35,
          "Roggenrola": 2.5,
          "Carbink": 2.5
        }
      },
      "B1F": {
        "cave": {
          "Gastly": 20,
          "Klink": 20,
          "Misdreavus": 20,
          "Solosis": 10,
          "Roggenrola": 10,
          "Wobbuffet": 10,
          "Sableye": 4,
          "Meloetta": 1
        },
        "horde": {
          "Mime Jr.": 60,
          "Clefairy": 35,
          "Roggenrola": 2.5,
          "Carbink": 2.5
        }
      },
      "B2F": {
        "cave": {
          "Mr. Mime": 20,
          "Bronzor": 20,
          "Solosis": 10,
          "Roggenrola": 10,
          "Carbink": 10,
          "Chingling": 20,
          "Wobbuffet": 10,
          "Sableye": 4,
          "Diancie": 1
        },
        "horde": {
          "Tynamo": 60,
          "Clefairy": 35,
          "Roggenrola": 2.5,
          "Carbink": 2.5
        }
      },
      "B2F - Alakazite Room": {
        "cave": {
          "Gothita": 20,
          "Noibat": 15,
          "Mr. Mime": 10,
          "Roggenrola": 10,
          "Sableye": 20,
          "Carbink": 10,
          "Wobbuffet": 10,
          "Beldum": 5
        },
        "horde": {
          "Tynamo": 60,
          "Clefairy": 35,
          "Roggenrola": 2.5,
          "Carbink": 2.5
        }
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
    },
    "methodRates": {
      "oldRod": {
        "Shellder": 60,
        "Staryu": 40
      },
      "goodRod": {
        "Remoraid": 60,
        "Chinchou": 40
      },
      "superRod": {
        "Alomomola": 60,
        "Octillery": 35,
        "Lanturn": 5
      },
      "surf": {
        "Tentacool": 50,
        "Frillish": 30,
        "Mantyke": 20
      }
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
    },
    "methodRates": {
      "grass": {
        "Slowpoke": 20,
        "Pachirisu": 20,
        "Scyther": 10,
        "Chatot": 10,
        "Ponyta": 10,
        "Miltank": 10,
        "Tauros": 10,
        "Exeggcute": 10
      },
      "yellowFlowers": {
        "Tauros": 20,
        "Miltank": 20,
        "Pinsir": 15,
        "Heracross": 15,
        "Chatot": 10,
        "Slowpoke": 10,
        "Exeggcute": 10
      },
      "rockSmash": {
        "Dwebble": 50,
        "Binacle": 50
      },
      "oldRod": {
        "Remoraid": 60,
        "Clamperl": 40
      },
      "goodRod": {
        "Remoraid": 60,
        "Clamperl": 40
      },
      "superRod": {
        "Corsola": 60,
        "Octillery": 35,
        "Huntail": 5
      },
      "surf": {
        "Tentacool": 50,
        "Frillish": 30,
        "Mantyke": 15,
        "Lapras": 5
      },
      "horde": {
        "Mareep": 60,
        "Chikorita": 35,
        "Tauros": 2.5,
        "Miltank": 2.5
      }
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
    },
    "methodRates": {
      "grass": {
        "Chatot": 20,
        "Slowpoke": 10,
        "Inkay": 15,
        "Exeggcute": 15,
        "Gastrodon": 20,
        "Spheal": 10,
        "Seel": 10
      },
      "rockSmash": {
        "Dwebble": 50,
        "Binacle": 30,
        "Krabby": 20
      },
      "oldRod": {
        "Chinchou": 60,
        "Finneon": 40
      },
      "goodRod": {
        "Lumineon": 60,
        "Lanturn": 35,
        "Alomomola": 5
      },
      "superRod": {
        "Alomomola": 60,
        "Octillery": 35,
        "Lanturn": 5
      },
      "surf": {
        "Pelipper": 50,
        "Frillish": 30,
        "Mantyke": 15,
        "Lapras": 4,
        "Manaphy": 1
      },
      "horde": {
        "Oshawott": 60,
        "Slowpoke": 35,
        "Exeggcute": 5
      }
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
    },
    "methodRates": {
      "roughTerrain": {
        "Dugtrio": 20,
        "Sandslash": 20,
        "Trapinch": 20,
        "Gible": 20,
        "Drilbur": 10,
        "Durant": 10
      },
      "rockSmash": {
        "Graveler": 66,
        "Slugma": 34
      }
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
    },
    "methodRates": {
      "grass": {
        "Skorupi": 10,
        "Arbok": 10,
        "Weepinbell": 10,
        "Pineco": 10,
        "Quagsire": 10,
        "Weezing": 10,
        "Karrablast": 10,
        "Shelmet": 10,
        "Carnivine": 10,
        "Haunter": 5,
        "Misdreavus": 5
      },
      "shallowWater": {
        "Quagsire": 20,
        "Goomy": 20,
        "Stunfisk": 20,
        "Muk": 10,
        "Karrablast": 10,
        "Shelmet": 10,
        "Haunter": 10
      },
      "oldRod": {
        "Poliwag": 60,
        "Barboach": 40
      },
      "goodRod": {
        "Barboach": 60,
        "Poliwhirl": 35,
        "Whiscash": 5
      },
      "superRod": {
        "Poliwhirl": 60,
        "Whiscash": 35,
        "Poliwrath": 5
      },
      "surf": {
        "Quagsire": 50,
        "Stunfisk": 35,
        "Goomy": 15
      },
      "horde": {
        "Totodile": 60,
        "Mudkip": 35,
        "Goomy": 5
      }
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
    },
    "methodRates": {
      "oldRod": {
        "Poliwag": 100
      },
      "goodRod": {
        "Basculin": 65,
        "Poliwhirl": 35
      },
      "superRod": {
        "Poliwhirl": 60,
        "Basculin": 35,
        "Poliwrath": 5
      }
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
    },
    "methodRates": {
      "grass": {
        "Mightyena": 10,
        "Liepard": 10,
        "Castform": 10,
        "Stantler": 10,
        "Deerling": 10,
        "Pawniard": 10,
        "Watchog": 10,
        "Foongus": 10,
        "Girafarig": 10,
        "Klefki": 10
      },
      "redFlowers": {
        "Pawniard": 20,
        "Watchog": 10,
        "Liepard": 10,
        "Deino": 10,
        "Skorupi": 10,
        "Mightyena": 10,
        "Duskull": 10,
        "Shuppet": 10,
        "Klefki": 10
      },
      "oldRod": {
        "Poliwag": 100
      },
      "goodRod": {
        "Basculin": 65,
        "Poliwhirl": 35
      },
      "superRod": {
        "Poliwhirl": 60,
        "Basculin": 35,
        "Politoed": 5
      },
      "surf": {
        "Lombre": 66,
        "Floatzel": 34
      },
      "horde": {
        "Murkrow": 60,
        "Treecko": 35,
        "Porygon": 5
      }
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
    },
    "methodRates": {
      "building": {
        "Magneton": 20,
        "Yamask": 20,
        "Litwick": 20,
        "Electrode": 20,
        "Spiritomb": 10,
        "Klefki": 9,
        "Hoopa": 1
      }
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
    },
    "methodRates": {
      "yellowFlowers": {
        "Skorupi": 20,
        "Phantump": 20,
        "Weepinbell": 10,
        "Bouffalant": 20,
        "Floatzel": 10,
        "Sunflora": 10,
        "Klefki": 10
      },
      "tallGrass": {
        "Pumpkaboo": 41,
        "Misdreavus": 20,
        "Foongus": 20,
        "Tropius": 10,
        "Klefki": 9
      },
      "oldRod": {
        "Poliwag": 100
      },
      "goodRod": {
        "Basculin": 65,
        "Poliwhirl": 35
      },
      "superRod": {
        "Poliwhirl": 60,
        "Basculin": 40
      },
      "surf": {
        "Lombre": 50,
        "Floatzel": 30,
        "Palpitoad": 19,
        "Seismitoad": 1
      },
      "horde": {
        "Squirtle": 60,
        "Bulbasaur": 35,
        "Tropius": 5
      }
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
    },
    "methodRates": {
      "outside": {
        "oldRod": {
          "Poliwag": 100
        },
        "goodRod": {
          "Basculin": 65,
          "Poliwhirl": 35
        },
        "superRod": {
          "Poliwhirl": 65,
          "Basculin": 35
        },
        "surf": {
          "Dewgong": 50,
          "Floatzel": 49,
          "Poliwrath": 1
        }
      },
      "1F": {
        "cave": {
          "Piloswine": 20,
          "Bergmite": 20,
          "Beartic": 20,
          "Jynx": 20,
          "Haunter": 15,
          "Cryogonal": 5
        },
        "horde": {
          "Vanillite": 60,
          "Cubchoo": 35,
          "Smoochum": 5
        }
      },
      "2F": {
        "cave": {
          "Piloswine": 20,
          "Bergmite": 20,
          "Sealeo": 20,
          "Beartic": 10,
          "Jynx": 10,
          "Haunter": 15,
          "Cryogonal": 5
        },
        "oldRod": {
          "Seel": 60,
          "Poliwag": 40
        },
        "goodRod": {
          "Basculin": 65,
          "Seel": 35
        },
        "superRod": {
          "Dewgong": 60,
          "Basculin": 35,
          "Poliwhirl": 5
        },
        "surf": {
          "Seel": 50,
          "Sealeo": 30,
          "Poliwhirl": 16,
          "Floatzel": 4
        },
        "horde": {
          "Vanillite": 60,
          "Cubchoo": 35,
          "Smoochum": 5
        }
      },
      "3F & Ice Rock Room": {
        "cave": {
          "Piloswine": 20,
          "Bergmite": 20,
          "Beartic": 20,
          "Jynx": 20,
          "Haunter": 15,
          "Cryogonal": 4,
          "Kyurem": 1
        },
        "horde": {
          "Snorunt": 60,
          "Cubchoo": 35,
          "Smoochum": 5
        }
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
    },
    "methodRates": {
      "snow": {
        "Snover": 30,
        "Delibird": 30,
        "Sneasel": 30,
        "Abomasnow": 10
      }
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
    },
    "methodRates": {
      "grass": {
        "Gurdurr": 20,
        "Torkoal": 20,
        "Larvesta": 10,
        "Sandslash": 10,
        "Lairon": 10,
        "Durant": 10,
        "Pupitar": 10,
        "Graveler": 5,
        "Heatmor": 5
      },
      "redFlowers": {
        "Lairon": 20,
        "Sandslash": 20,
        "Pupitar": 10,
        "Torkoal": 10,
        "Gurdurr": 10,
        "Durant": 10,
        "Graveler": 10,
        "Heatmor": 10
      },
      "rockSmash": {
        "Graveler": 80,
        "Shuckle": 20
      },
      "horde": {
        "Fennekin": 60,
        "Durant": 37.5,
        "Heatmor": 2.5
      }
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
    },
    "methodRates": {
      "allAreas": {
        "cave": {
          "Lairon": 20,
          "Sandslash": 20,
          "Pupitar": 20,
          "Durant": 20,
          "Graveler": 19
        },
        "rockSmash": {
          "Graveler": 80,
          "Shuckle": 20
        }
      },
      "1F": {
        "cave": {
          "Genesect": 1
        },
        "horde": {
          "Durant": 60,
          "Aron": 35,
          "Unown": 5
        }
      },
      "B1F (Both Rooms)": {
        "cave": {
          "Volcanion": 1
        },
        "horde": {
          "Durant": 60,
          "Larvitar": 35,
          "Unown": 5
        }
      },
      "B2F": {
        "cave": {
          "Heatran": 1
        },
        "horde": {
          "Durant": 60,
          "Sandshrew": 35,
          "Unown": 5
        }
      },
      "Small Room, B1F (accessible from Route 18)": {
        "cave": {
          "Regigigas": 1
        },
        "horde": {
          "Durant": 60,
          "Excadrill": 35,
          "Unown": 5
        }
      },
      "Small Room, 1F (accessible from Route 18)": {
        "cave": {
          "Lairon": 20,
          "Sandslash": 20,
          "Pupitar": 20,
          "Durant": 20,
          "Graveler": 10,
          "Unown": 10
        },
        "horde": {
          "Durant": 60,
          "Geodude": 35,
          "Unown": 5
        }
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
    },
    "methodRates": {
      "oldRod": {
        "Poliwag": 100
      },
      "goodRod": {
        "Basculin": 65,
        "Poliwhirl": 35
      },
      "superRod": {
        "Poliwhirl": 65,
        "Basculin": 35
      },
      "surf": {
        "Lombre": 66,
        "Floatzel": 34
      }
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
    },
    "methodRates": {
      "yellowFlowers": {
        "Quagsire": 30,
        "Sliggoo": 20,
        "Weepinbell": 10,
        "Drapion": 10,
        "Karrablast": 10,
        "Shelmet": 10,
        "Haunter": 5,
        "Carnivine": 4,
        "Latias": 1
      },
      "purpleFlowers": {
        "Drapion": 30,
        "Weepinbell": 20,
        "Sliggoo": 10,
        "Quagsire": 10,
        "Karrablast": 10,
        "Shelmet": 10,
        "Haunter": 5,
        "Carnivine": 4,
        "Latios": 1
      },
      "shallowWater": {
        "Palpitoad": 30,
        "Sliggoo": 20,
        "Stunfisk": 20,
        "Karrablast": 10,
        "Shelmet": 10,
        "Haunter": 5,
        "Carnivine": 4,
        "Keldeo": 1
      },
      "oldRod": {
        "Goomy": 100
      },
      "goodRod": {
        "Barboach": 65,
        "Poliwhirl": 35
      },
      "superRod": {
        "Poliwhirl": 60,
        "Whiscash": 35,
        "Politoed": 5
      },
      "surf": {
        "Quagsire": 50,
        "Stunfisk": 34,
        "Sliggoo": 16
      },
      "horde": {
        "Weepinbell": 60,
        "Gligar": 35,
        "Arbok": 5
      }
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
    },
    "methodRates": {
      "grass": {
        "Noctowl": 20,
        "Amoonguss": 20,
        "Jigglypuff": 20,
        "Misdreavus": 15,
        "Trevenant": 10,
        "Gothorita": 10,
        "Zoroark": 5
      },
      "redFlowers": {
        "Amoonguss": 25,
        "Gothorita": 20,
        "Trevenant": 20,
        "Zoroark": 15,
        "Jigglypuff": 10,
        "Noctowl": 10
      },
      "horde": {
        "Chespin": 60,
        "Trevenant": 37.5,
        "Sudowoodo": 2.5
      }
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
    },
    "methodRates": {
      "yellowFlowers": {
        "Ditto": 30,
        "Raikou": 10,
        "Suicune": 10,
        "Entei": 10,
        "Articuno": 10,
        "Zapdos": 10,
        "Moltres": 10,
        "Celebi": 5,
        "Mew": 4,
        "Darkrai": 1
      },
      "purpleFlowers": {
        "Regirock": 10,
        "Regice": 10,
        "Registeel": 10,
        "Mesprit": 10,
        "Azelf": 10,
        "Uxie": 10,
        "Cobalion": 10,
        "Virizion": 10,
        "Terrakion": 10,
        "Shaymin": 5,
        "Jirachi": 4,
        "Cresselia": 1
      },
      "oldRod": {
        "Poliwhirl": 95,
        "Phione": 5
      },
      "goodRod": {
        "Basculin": 65,
        "Poliwhirl": 35
      },
      "superRod": {
        "Poliwhirl": 60,
        "Basculin": 35,
        "Politoed": 5
      },
      "surf": {
        "Lombre": 66,
        "Poliwhirl": 34
      },
      "horde": {
        "Froakie": 60,
        "Ditto": 35,
        "Thundurus": 1.6667,
        "Landorus": 1.6667,
        "Tornadus": 1.6666
      }
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
    },
    "methodRates": {
      "purpleFlowers": {
        "Floatzel": 20,
        "Altaria": 20,
        "Cherrim": 20,
        "Spinda": 20,
        "Ursaring": 10,
        "Scyther": 9,
        "Xerneas": 1
      },
      "redFlowers": {
        "Ursaring": 20,
        "Altaria": 20,
        "Spinda": 20,
        "Scyther": 19,
        "Floatzel": 10,
        "Cherrim": 10,
        "Yveltal": 1
      },
      "oldRod": {
        "Poliwag": 100
      },
      "goodRod": {
        "Basculin": 60,
        "Dratini": 35,
        "Dragonair": 5
      },
      "superRod": {
        "Dratini": 60,
        "Dragonair": 35,
        "Dragonite": 5
      },
      "surf": {
        "Lombre": 50,
        "Floatzel": 50
      },
      "horde": {
        "Spinda": 60,
        "Swablu": 35,
        "Scyther": 5
      }
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
    },
    "methodRates": {
      "1F": {
        "cave": {
          "Gurdurr": 20,
          "Graveler": 20,
          "Hariyama": 10,
          "Druddigon": 20,
          "Haunter": 10,
          "Lickitung": 15,
          "Zweilous": 5
        },
        "rockSmash": {
          "Graveler": 95,
          "Shuckle": 5
        },
        "oldRod": {
          "Poliwag": 100
        },
        "goodRod": {
          "Basculin": 60,
          "Poliwhirl": 35,
          "Whiscash": 5
        },
        "superRod": {
          "Poliwhirl": 60,
          "Basculin": 35,
          "Whiscash": 5
        },
        "surf": {
          "Poliwhirl": 65,
          "Floatzel": 34,
          "Poliwrath": 1
        },
        "horde": {
          "Deino": 60,
          "Floatzel": 35,
          "Lugia": 2.5,
          "Ho-Oh": 2.5
        }
      },
      "2F": {
        "cave": {
          "Gurdurr": 20,
          "Druddigon": 20,
          "Graveler": 20,
          "Lickitung": 15,
          "Donphan": 10,
          "Haunter": 10,
          "Zweilous": 5
        },
        "rockSmash": {
          "Graveler": 95,
          "Shuckle": 5
        },
        "horde": {
          "Phanpy": 60,
          "Graveler": 35,
          "Kyogre": 1.6667,
          "Groudon": 1.6667,
          "Rayquaza": 1.6666
        }
      },
      "3F": {
        "cave": {
          "Gurdurr": 20,
          "Druddigon": 20,
          "Graveler": 20,
          "Zweilous": 15,
          "Lickitung": 15,
          "Haunter": 10
        },
        "horde": {
          "Gurdurr": 60,
          "Lickitung": 35,
          "Dialga": 1.6667,
          "Palkia": 1.6667,
          "Giratina": 1.6666
        }
      },
      "Waterfall Area": {
        "oldRod": {
          "Poliwag": 100
        },
        "goodRod": {
          "Basculin": 65,
          "Poliwhirl": 35
        },
        "superRod": {
          "Poliwhirl": 60,
          "Basculin": 35,
          "Poliwrath": 5
        },
        "surf": {
          "Lombre": 65,
          "Floatzel": 34,
          "Ludicolo": 1
        }
      },
      "Final Cave": {
        "cave": {
          "Gurdurr": 20,
          "Graveler": 20,
          "Druddigon": 20,
          "Lickitung": 15,
          "Gabite": 10,
          "Haunter": 10,
          "Zweilous": 4,
          "Victini": 1
        },
        "oldRod": {
          "Poliwag": 100
        },
        "goodRod": {
          "Basculin": 65,
          "Poliwhirl": 35
        },
        "superRod": {
          "Poliwhirl": 60,
          "Basculin": 35,
          "Poliwrath": 5
        },
        "surf": {
          "Poliwhirl": 65,
          "Floatzel": 34,
          "Poliwrath": 1
        },
        "horde": {
          "Haunter": 60,
          "Floatzel": 35,
          "Reshiram": 1.6667,
          "Zekrom": 1.6667,
          "Arceus": 1.6666
        }
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
