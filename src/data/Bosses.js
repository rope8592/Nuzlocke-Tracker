const bosses = [
  // 1. Shauna - Aquacorde Town (Rival, starter dependent)
 {
  id: "shauna-aquacorde",
  name: "Shauna",
  location: "Aquacorde Town",
  sprite: "shauna.png",
  levelCap: 5,
  conditionalTeams: {
    "Chespin_Serena": [
      {
        species: "Froakie",
        level: 5,
        ability: "Protean",
        IVs: 15,
        moves: ["Pound", "Growl", "Bubble"]
      }
    ],
    "Fennekin_Serena": [
      {
        species: "Chespin",
        level: 5,
        ability: "Bulletproof",
        IVs: 15,
        moves: ["Tackle", "Growl", "Vine Whip"]
      }
    ],
    "Froakie_Serena": [
      {
        species: "Fennekin",
        level: 5,
        ability: "Magic Guard",
        IVs: 15,
        moves: ["Scratch", "Tail Whip", "Ember"]
      }
    ],
    "Chespin_Calem": [
      {
        species: "Froakie",
        level: 5,
        ability: "Protean",
        IVs: 15,
        moves: ["Pound", "Growl", "Bubble"]
      }
    ],
    "Fennekin_Calem": [
      {
        species: "Chespin",
        level: 5,
        ability: "Bulletproof",
        IVs: 15,
        moves: ["Tackle", "Growl", "Vine Whip"]
      }
    ],
    "Froakie_Calem": [
      {
        species: "Fennekin",
        level: 5,
        ability: "Magic Guard",
        IVs: 15,
        moves: ["Scratch", "Tail Whip", "Ember"]
      }
    ]
  },
  storyBefore: "Route 1",
  storyAfter: "Aquacorde Town"
},

  // 2. Viola - Santalune City Gym
  {
    id: "viola-santalune",
    name: "Viola",
    location: "Santalune Gym",
    sprite: "viola.png",
    levelCap: 16,
    team: [
      {
        species: "Surskit",
        level: 13,
        ability: "Swift Swim",
        IVs: 25,
        item: "Mystic Water",
        moves: ["Bubble", "Infestation", "Icy Wind", "Rain Dance"]
      },
      {
        species: "Dustox",
        level: 14,
        ability: "Compound Eyes",
        IVs: 25,
        item: "Binding Band",
        moves: ["Infestation", "Poison Powder", "Confusion", "Protect"]
      },
      {
        species: "Dwebble",
        level: 13,
        ability: "Sturdy",
        IVs: 25,
        item: "Rock Gem",
        moves: ["Smack Down", "Fury Cutter", "Sand Attack", "Withdraw"]
      },
      {
        species: "Ledian",
        level: 14,
        ability: "Aerilate",
        IVs: 25,
        item: "Black Belt",
        moves: ["Infestation", "Comet Punch", "Mach Punch", "Supersonic"]
      },
      {
        species: "Joltik",
        level: 13,
        ability: "Compound Eyes",
        IVs: 25,
        item: "Occa Berry",
        moves: ["Electroweb", "Infestation", "Screech", "Cross Poison"]
      },
      {
        species: "Vivillon",
        level: 16,
        ability: "Compound Eyes",
        IVs: 31,
        item: "Oran Berry",
        moves: ["Infestation", "Gust", "Powder", "Struggle Bug"]
      }
    ],
    storyBefore: "Route 4 (Parterre Way)",
    storyAfter: "Route 22 (Détourner Way)"
  },
  // 3. Professor Sycamore - Lumiose City (story event, not rival)
 {
  id: "sycamore-lumiose",
  name: "Professor Sycamore",
  location: "Pokémon Lab, Lumiose City",
  sprite: "sycamore.png",
  levelCap: 18,
  team: [
    {
      species: "Ivysaur",
      level: 18,
      ability: "Overgrow",
      IVs: 18,
      // Default moves at level 18 in Gen 6
      moves: ["Tackle", "Vine Whip", "Leech Seed", "Sleep Powder"]
    },
    {
      species: "Charmeleon",
      level: 18,
      ability: "Blaze",
      IVs: 18,
      moves: ["Scratch", "Ember", "Growl", "Dragon Rage"]
    },
    {
      species: "Wartortle",
      level: 18,
      ability: "Torrent",
      IVs: 18,
      moves: ["Tackle", "Tail Whip", "Water Gun", "Withdraw"]
    }
  ],
  storyBefore: "Route 4 (Parterre Way)",
  storyAfter: "Lumiose City"
},

  // 4. Tierno - Route 5
  {
    id: "tierno-route5",
    name: "Tierno",
    location: "Route 5",
    sprite: "tierno.png",
    levelCap: 18,
    team: [
      {
        species: "Corphish",
        level: 18,
        ability: "Adaptability",
        IVs: 31,
        moves: ["Swords Dance", "Aqua Jet", "Knock Off"]
      },
      {
        species: "Lombre",
        level: 18,
        ability: "Swift Swim",
        IVs: 31,
        moves: ["Swords Dance", "Ice Punch", "Fake Out", "Fire Punch"]
      },
      {
        species: "Lilligant",
        level: 18,
        ability: "Own Tempo",
        IVs: 31,
        moves: ["Sleep Powder", "Leech Seed", "Mega Drain", "Synthesis"]
      },
      {
        species: "Farfetch’d",
        level: 18,
        ability: "Super Luck",
        item: "Stick",
        IVs: 31,
        moves: ["Swords Dance", "Aerial Ace", "Knock Off", "Fury Cutter"]
      }
    ],
    storyBefore: "Route 5 (Versant Road)",
    storyAfter: "Lumiose City"
  },
  // 5. Route 7 - Multi Battle (You & Calem/Serena vs Trevor & Tierno)
  {
    id: "multi-route7",
    name: "Multi Battle: Trevor & Tierno",
    location: "Route 7",
    sprite: "tierno-trevor.png",
    levelCap: 26,
    conditionalTeams: {
      // ALL Calem/Serena combos for the player's starter:
      "Chespin_Serena": [
        {
          species: "Fletchinder",
          level: 25,
          ability: "Gale Wings",
          IVs: 18,
          moves: ["Peck", "Roost", "Growl", "Incinerate"]
        },
        {
          species: "Braixen",
          level: 26,
          ability: "Magic Guard",
          IVs: 18,
          moves: ["Flame Charge", "Psybeam", "Tail Whip", "Thunder Punch"]
        },
        {
          species: "Dratini",
          level: 25,
          ability: "Marvel Scale",
          IVs: 18,
          moves: ["Dragon Rage", "Thunder Wave", "Incinerate", "Light Screen"]
        }
      ],
      "Fennekin_Serena": [
        {
          species: "Fletchinder",
          level: 25,
          ability: "Gale Wings",
          IVs: 18,
          moves: ["Peck", "Incinerate", "Growl", "Roost"]
        },
        {
          species: "Frogadier",
          level: 26,
          ability: "Protean",
          IVs: 18,
          moves: ["Water Pulse", "Quick Attack", "Ice Punch", "Smack Down"]
        },
        {
          species: "Dratini",
          level: 25,
          ability: "Marvel Scale",
          IVs: 18,
          moves: ["Dragon Rage", "Thunder Wave", "Light Screen", "Incinerate"]
        }
      ],
      "Froakie_Serena": [
        {
          species: "Fletchinder",
          level: 25,
          ability: "Gale Wings",
          IVs: 18,
          moves: ["Peck", "Incinerate", "Growl", "Roost"]
        },
        {
          species: "Quilladin",
          level: 26,
          ability: "Bulletproof",
          IVs: 18,
          moves: ["Needle Arm", "Pin Missile", "Thunder Punch", "Bite"]
        },
        {
          species: "Dratini",
          level: 25,
          ability: "Marvel Scale",
          IVs: 18,
          moves: ["Dragon Rage", "Thunder Wave", "Incinerate", "Light Screen"]
        }
      ],
      "Chespin_Calem": [
        {
          species: "Fletchinder",
          level: 25,
          ability: "Gale Wings",
          IVs: 18,
          moves: ["Peck", "Roost", "Growl", "Incinerate"]
        },
        {
          species: "Braixen",
          level: 26,
          ability: "Magic Guard",
          IVs: 18,
          moves: ["Flame Charge", "Psybeam", "Tail Whip", "Thunder Punch"]
        },
        {
          species: "Dratini",
          level: 25,
          ability: "Marvel Scale",
          IVs: 18,
          moves: ["Dragon Rage", "Thunder Wave", "Incinerate", "Light Screen"]
        }
      ],
      "Fennekin_Calem": [
        {
          species: "Fletchinder",
          level: 25,
          ability: "Gale Wings",
          IVs: 18,
          moves: ["Peck", "Incinerate", "Growl", "Roost"]
        },
        {
          species: "Frogadier",
          level: 26,
          ability: "Protean",
          IVs: 18,
          moves: ["Water Pulse", "Quick Attack", "Ice Punch", "Smack Down"]
        },
        {
          species: "Dratini",
          level: 25,
          ability: "Marvel Scale",
          IVs: 18,
          moves: ["Dragon Rage", "Thunder Wave", "Light Screen", "Incinerate"]
        }
      ],
      "Froakie_Calem": [
        {
          species: "Fletchinder",
          level: 25,
          ability: "Gale Wings",
          IVs: 18,
          moves: ["Peck", "Incinerate", "Growl", "Roost"]
        },
        {
          species: "Quilladin",
          level: 26,
          ability: "Bulletproof",
          IVs: 18,
          moves: ["Needle Arm", "Pin Missile", "Thunder Punch", "Bite"]
        },
        {
          species: "Dratini",
          level: 25,
          ability: "Marvel Scale",
          IVs: 18,
          moves: ["Dragon Rage", "Thunder Wave", "Incinerate", "Light Screen"]
        }
      ]
    },
    storyBefore: "Route 7 (Rivière Walk)",
    storyAfter: "Connecting Cave: Zubat Roost"
  },
  // 6. Grant - Cyllage City Gym
 {
  id: "grant-cyllage-gym",
  name: "Grant",
  location: "Cyllage Gym",
  sprite: "grant.png",
  levelCap: 30, // Highest level is 30
  team: [
    {
      species: "Amaura",
      level: 30,
      ability: "Refrigerate",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Light Screen", "Reflect", "Round", "Discharge"]
    },
    {
      species: "Aerodactyl",
      level: 30,
      ability: "Pressure",
      item: "Yache Berry",
      IVs: 31,
      moves: ["Rock Tomb", "Aerial Ace", "Bulldoze", "Bite"]
    },
    {
      species: "Anorith",
      level: 30,
      ability: "Swift Swim",
      item: "Weakness Policy",
      IVs: 31,
      moves: ["Rock Tomb", "X-Scissor", "Swords Dance", "Aqua Jet"]
    },
    {
      species: "Tirtouga",
      level: 30,
      ability: "Solid Rock",
      item: "Power Herb",
      IVs: 31,
      moves: ["Dive", "Zen Headbutt", "Rock Tomb", "Knock Off"]
    },
    {
      species: "Lileep",
      level: 30,
      ability: "Storm Drain",
      item: "Sitrus Berry",
      IVs: 31,
      moves: ["Giga Drain", "Brine", "Rock Tomb", "Toxic"]
    },
    {
      species: "Tyrunt",
      level: 30,
      ability: "Strong Jaw",
      item: "Eviolite",
      IVs: 31,
      moves: ["Fire Fang", "Ice Fang", "Dragon Dance", "Rock Tomb"]
    }
  ],
  storyBefore: "Cyllage City",
  storyAfter: "Route 10 (Menhir Trail)"
},

  // 7. Korrina - Geosenge Town
  {
    id: "korrina-geosenge",
    name: "Korrina",
    location: "Geosenge Town",
    sprite: "korrina.png",
    levelCap: 32,
    team: [
      {
        species: "Mienfoo",
        level: 31,
        ability: "Regenerator",
        IVs: 31,
        moves: ["Fake Out", "U-turn", "Drain Punch", "Knock Off"]
      },
      {
        species: "Hawlucha",
        level: 32,
        ability: "Unburden",
        IVs: 31,
        moves: ["Flying Press", "Encore", "Acrobatics", "Swords Dance"]
      }
    ],
    storyBefore: "Route 10 (Menhir Trail)",
    storyAfter: "Route 11 (Miroir Way)"
  },
  // 8. Tower of Mastery - Calem/Serena Rival (ALL starter/player combos)
  {
    id: "tower-mastery-rival",
    name: "Calem/Serena",
    location: "Tower of Mastery",
    sprite: "serena-calem.png",
    levelCap: 36,
    conditionalTeams: {
      "Chespin_Serena": [
        {
          species: "Meowstic",
          level: 35,
          ability: "Prankster",
          item: "Light Clay",
          IVs: 31,
          moves: ["Psyshock", "Charm", "Light Screen", "Reflect"]
        },
        {
          species: "Kangaskhan",
          level: 35,
          ability: "Scrappy",
          item: "Chople Berry",
          IVs: 31,
          moves: ["Dizzy Punch", "Fake Out", "Ice Punch", "Bulldoze"]
        },
        {
          species: "Dragonair",
          level: 35,
          ability: "Marvel Scale",
          item: "Eviolite",
          IVs: 31,
          moves: ["Aqua Tail", "Dragon Tail", "Sleep Talk", "Rest"]
        },
        {
          species: "Jolteon",
          level: 35,
          ability: "Volt Absorb",
          item: "Air Balloon",
          IVs: 31,
          moves: ["Thunder Wave", "Baton Pass", "Charge Beam", "Light Screen"]
        },
        {
          species: "Delphox",
          level: 36,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Mystical Fire", "Psyshock", "Light Screen", "Shadow Ball"]
        }
      ],
      "Fennekin_Serena": [
        {
          species: "Meowstic",
          level: 35,
          ability: "Prankster",
          item: "Light Clay",
          IVs: 31,
          moves: ["Psyshock", "Charm", "Light Screen", "Reflect"]
        },
        {
          species: "Kangaskhan",
          level: 35,
          ability: "Scrappy",
          item: "Chople Berry",
          IVs: 31,
          moves: ["Dizzy Punch", "Thunder Punch", "Fake Out", "Bulldoze"]
        },
        {
          species: "Dragonair",
          level: 35,
          ability: "Marvel Scale",
          item: "Eviolite",
          IVs: 31,
          moves: ["Aqua Tail", "Dragon Tail", "Sleep Talk", "Rest"]
        },
        {
          species: "Flareon",
          level: 35,
          ability: "Guts",
          item: "Toxic Orb",
          IVs: 31,
          moves: ["Fire Fang", "Quick Attack", "Bite", "Return"]
        },
        {
          species: "Greninja",
          level: 36,
          ability: "Protean",
          item: "Life Orb",
          IVs: 31,
          moves: ["Water Shuriken", "Ice Punch", "Smack Down", "Aerial Ace"]
        }
      ],
      "Froakie_Serena": [
        {
          species: "Meowstic",
          level: 35,
          ability: "Prankster",
          item: "Light Clay",
          IVs: 31,
          moves: ["Psyshock", "Reflect", "Light Screen", "Charm"]
        },
        {
          species: "Kangaskhan",
          level: 35,
          ability: "Scrappy",
          item: "Chople Berry",
          IVs: 31,
          moves: ["Dizzy Punch", "Fire Punch", "Fake Out", "Bulldoze"]
        },
        {
          species: "Dragonair",
          level: 35,
          ability: "Marvel Scale",
          item: "Eviolite",
          IVs: 31,
          moves: ["Aqua Tail", "Dragon Tail", "Sleep Talk", "Rest"]
        },
        {
          species: "Vaporeon",
          level: 35,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Aurora Beam", "Acid Armor", "Baton Pass", "Surf"]
        },
        {
          species: "Chesnaught",
          level: 36,
          ability: "Bulletproof",
          item: "Rocky Helmet",
          IVs: 31,
          moves: ["Spiky Shield", "Leech Seed", "Seed Bomb", "Thunder Punch"]
        }
      ],
      "Chespin_Calem": [
        {
          species: "Meowstic",
          level: 35,
          ability: "Prankster",
          item: "Light Clay",
          IVs: 31,
          moves: ["Psyshock", "Charm", "Light Screen", "Reflect"]
        },
        {
          species: "Kangaskhan",
          level: 35,
          ability: "Scrappy",
          item: "Chople Berry",
          IVs: 31,
          moves: ["Dizzy Punch", "Fake Out", "Ice Punch", "Bulldoze"]
        },
        {
          species: "Dragonair",
          level: 35,
          ability: "Marvel Scale",
          item: "Eviolite",
          IVs: 31,
          moves: ["Aqua Tail", "Dragon Tail", "Sleep Talk", "Rest"]
        },
        {
          species: "Jolteon",
          level: 35,
          ability: "Volt Absorb",
          item: "Air Balloon",
          IVs: 31,
          moves: ["Thunder Wave", "Baton Pass", "Charge Beam", "Light Screen"]
        },
        {
          species: "Delphox",
          level: 36,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Mystical Fire", "Psyshock", "Light Screen", "Shadow Ball"]
        }
      ],
      "Fennekin_Calem": [
        {
          species: "Meowstic",
          level: 35,
          ability: "Prankster",
          item: "Light Clay",
          IVs: 31,
          moves: ["Psyshock", "Charm", "Light Screen", "Reflect"]
        },
        {
          species: "Kangaskhan",
          level: 35,
          ability: "Scrappy",
          item: "Chople Berry",
          IVs: 31,
          moves: ["Dizzy Punch", "Thunder Punch", "Fake Out", "Bulldoze"]
        },
        {
          species: "Dragonair",
          level: 35,
          ability: "Marvel Scale",
          item: "Eviolite",
          IVs: 31,
          moves: ["Aqua Tail", "Dragon Tail", "Sleep Talk", "Rest"]
        },
        {
          species: "Flareon",
          level: 35,
          ability: "Guts",
          item: "Toxic Orb",
          IVs: 31,
          moves: ["Fire Fang", "Quick Attack", "Bite", "Return"]
        },
        {
          species: "Greninja",
          level: 36,
          ability: "Protean",
          item: "Life Orb",
          IVs: 31,
          moves: ["Water Shuriken", "Ice Punch", "Smack Down", "Aerial Ace"]
        }
      ],
      "Froakie_Calem": [
        {
          species: "Meowstic",
          level: 35,
          ability: "Prankster",
          item: "Light Clay",
          IVs: 31,
          moves: ["Psyshock", "Reflect", "Light Screen", "Charm"]
        },
        {
          species: "Kangaskhan",
          level: 35,
          ability: "Scrappy",
          item: "Chople Berry",
          IVs: 31,
          moves: ["Dizzy Punch", "Fire Punch", "Fake Out", "Bulldoze"]
        },
        {
          species: "Dragonair",
          level: 35,
          ability: "Marvel Scale",
          item: "Eviolite",
          IVs: 31,
          moves: ["Aqua Tail", "Dragon Tail", "Sleep Talk", "Rest"]
        },
        {
          species: "Vaporeon",
          level: 35,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Aurora Beam", "Acid Armor", "Baton Pass", "Surf"]
        },
        {
          species: "Chesnaught",
          level: 36,
          ability: "Bulletproof",
          item: "Rocky Helmet",
          IVs: 31,
          moves: ["Spiky Shield", "Leech Seed", "Seed Bomb", "Thunder Punch"]
        }
      ]
    },
    storyBefore: "Reflection Cave",
    storyAfter: "Shalour City"
  },
  // 9. Korrina - Shalour City Gym
  {
  id: "korrina-shalour-gym",
  name: "Korrina",
  location: "Shalour Gym",
  sprite: "korrina.png",
  levelCap: 37, // Hawlucha is the highest
  team: [
    {
      species: "Breloom",
      level: 35,
      ability: "Technician",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Power-Up Punch", "Spore", "Bullet Seed", "Rock Tomb"]
    },
    {
      species: "Lopunny",
      level: 35,
      ability: "Scrappy",
      item: "Eject Button",
      IVs: 31,
      moves: ["Jump Kick", "Retaliate", "Power-Up Punch", "Baton Pass"]
    },
    {
      species: "Pangoro",
      level: 35,
      ability: "Iron Fist",
      item: "Assault Vest",
      IVs: 31,
      moves: ["Power-Up Punch", "Sucker Punch", "Ice Punch", "Thunder Punch"]
    },
    {
      species: "Gallade",
      level: 35,
      ability: "Justified",
      item: "Scope Lens",
      IVs: 31,
      moves: ["Power-Up Punch", "Leaf Blade", "Psycho Cut", "Night Slash"]
    },
    {
      species: "Lucario",
      level: 36,
      ability: "Steadfast",
      item: "Shuca Berry",
      IVs: 31,
      moves: ["Nasty Plot", "Vacuum Wave", "Flash Cannon", "Dark Pulse"]
    },
    {
      species: "Hawlucha",
      level: 37,
      ability: "Unburden",
      item: "Flying Gem",
      IVs: 31,
      moves: ["Acrobatics", "Flying Press", "Fire Punch", "Iron Head"]
    }
  ],
  storyBefore: "Shalour City",
  storyAfter: "Tower of Mastery"
},
  // 10. Korrina - Tower of Mastery (Mega Lucario)
  {
    id: "korrina-mega-lucario",
    name: "Korrina (Mega Lucario)",
    location: "Tower of Mastery",
    sprite: "korrina.png",
    levelCap: 35,
    team: [
      {
        species: "Lucario",
        level: 35,
        ability: "Adaptability",
        item: "Lucarionite",
        IVs: 31,
        moves: ["Power-Up Punch", "Bone Rush", "Metal Sound", "Feint"]
      }
    ],
    storyBefore: "Tower of Mastery",
    storyAfter: "Route 12 (Fourrage Road)"
  },
 
  // 11. Calem/Serena – Coumarine City (ALL starter/player combos)
{
  id: "calem-serena-coumarine",
  name: "Calem/Serena",
  location: "Coumarine City",
  sprite: "serena-calem.png",
  levelCap: 42,
  conditionalTeams: {
    "Chespin_Serena": [
      {
        species: "Meowstic",
        level: 41,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Reflect", "Thunder Wave", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 40,
        ability: "Scrappy",
        item: "Life Orb",
        IVs: 31,
        moves: ["Return", "Crunch", "Bulldoze", "Ice Punch"]
      },
      {
        species: "Dragonair",
        level: 40,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Tail", "Thunder Wave", "Rest", "Sleep Talk"]
      },
      {
        species: "Jolteon",
        level: 40,
        ability: "Volt Absorb",
        item: "Shuca Berry",
        IVs: 31,
        moves: ["Discharge", "Agility", "Baton Pass", "Shadow Ball"]
      },
      {
        species: "Delphox",
        level: 42,
        ability: "Magic Guard",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Flamethrower", "Psyshock", "Flame Charge", "Thunder Punch"]
      }
    ],
    "Fennekin_Serena": [
      {
        species: "Meowstic",
        level: 41,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Reflect", "Thunder Wave", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 40,
        ability: "Scrappy",
        item: "Life Orb",
        IVs: 31,
        moves: ["Return", "Crunch", "Thunder Punch", "Bulldoze"]
      },
      {
        species: "Dragonair",
        level: 40,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Tail", "Thunder Wave", "Rest", "Sleep Talk"]
      },
      {
        species: "Flareon",
        level: 40,
        ability: "Guts",
        item: "Power Herb",
        IVs: 31,
        moves: ["Dig", "Fire Fang", "Quick Attack", "Lava Plume"]
      },
      {
        species: "Greninja",
        level: 42,
        ability: "Protean",
        IVs: 31,
        moves: ["Acrobatics", "Surf", "Ice Punch", "Smack Down"]
      }
    ],
    "Froakie_Serena": [
      {
        species: "Meowstic",
        level: 41,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Reflect", "Thunder Wave", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 40,
        ability: "Scrappy",
        item: "Life Orb",
        IVs: 31,
        moves: ["Return", "Crunch", "Fire Punch", "Bulldoze"]
      },
      {
        species: "Dragonair",
        level: 40,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Tail", "Thunder Wave", "Rest", "Sleep Talk"]
      },
      {
        species: "Vaporeon",
        level: 40,
        ability: "Hydration",
        item: "Leftovers",
        IVs: 31,
        moves: ["Surf", "Aurora Beam", "Acid Armor", "Rain Dance"]
      },
      {
        species: "Chesnaught",
        level: 42,
        ability: "Bulletproof",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Spiky Shield", "Leech Seed", "Seed Bomb", "Low Sweep"]
      }
    ],
    "Chespin_Calem": [
      {
        species: "Meowstic",
        level: 41,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Reflect", "Thunder Wave", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 40,
        ability: "Scrappy",
        item: "Life Orb",
        IVs: 31,
        moves: ["Return", "Crunch", "Bulldoze", "Ice Punch"]
      },
      {
        species: "Dragonair",
        level: 40,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Tail", "Thunder Wave", "Rest", "Sleep Talk"]
      },
      {
        species: "Jolteon",
        level: 40,
        ability: "Volt Absorb",
        item: "Shuca Berry",
        IVs: 31,
        moves: ["Discharge", "Agility", "Baton Pass", "Shadow Ball"]
      },
      {
        species: "Delphox",
        level: 42,
        ability: "Magic Guard",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Flamethrower", "Psyshock", "Flame Charge", "Thunder Punch"]
      }
    ],
    "Fennekin_Calem": [
      {
        species: "Meowstic",
        level: 41,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Reflect", "Thunder Wave", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 40,
        ability: "Scrappy",
        item: "Life Orb",
        IVs: 31,
        moves: ["Return", "Crunch", "Thunder Punch", "Bulldoze"]
      },
      {
        species: "Dragonair",
        level: 40,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Tail", "Thunder Wave", "Rest", "Sleep Talk"]
      },
      {
        species: "Flareon",
        level: 40,
        ability: "Guts",
        item: "Power Herb",
        IVs: 31,
        moves: ["Dig", "Fire Fang", "Quick Attack", "Lava Plume"]
      },
      {
        species: "Greninja",
        level: 42,
        ability: "Protean",
        IVs: 31,
        moves: ["Acrobatics", "Surf", "Ice Punch", "Smack Down"]
      }
    ],
    "Froakie_Calem": [
      {
        species: "Meowstic",
        level: 41,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Reflect", "Thunder Wave", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 40,
        ability: "Scrappy",
        item: "Life Orb",
        IVs: 31,
        moves: ["Return", "Crunch", "Fire Punch", "Bulldoze"]
      },
      {
        species: "Dragonair",
        level: 40,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Tail", "Thunder Wave", "Rest", "Sleep Talk"]
      },
      {
        species: "Vaporeon",
        level: 40,
        ability: "Hydration",
        item: "Leftovers",
        IVs: 31,
        moves: ["Surf", "Aurora Beam", "Acid Armor", "Rain Dance"]
      },
      {
        species: "Chesnaught",
        level: 42,
        ability: "Bulletproof",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Spiky Shield", "Leech Seed", "Seed Bomb", "Low Sweep"]
      }
    ]
  },
  storyBefore: "Route 12 (Fourrage Road)",
  storyAfter: "Azure Bay"
},
// 12. Ramos – Coumarine Gym
{
  id: "ramos-coumarine",
  name: "Ramos",
  location: "Coumarine Gym",
  sprite: "ramos.png",
  levelCap: 45, // Gogoat is the highest
  team: [
    {
      species: "Ferrothorn",
      level: 42,
      ability: "Iron Barbs",
      item: "Rocky Helmet",
      IVs: 31,
      moves: ["Power Whip", "Thunder Wave", "Iron Head", "Stealth Rock"]
    },
    {
      species: "Venusaur",
      level: 42,
      ability: "Chlorophyll",
      item: "Venusaurite",
      IVs: 31,
      moves: ["Sleep Powder", "Giga Drain", "Sludge Bomb", "Earthquake"]
    },
    {
      species: "Sceptile",
      level: 42,
      ability: "Unburden",
      item: "Weakness Policy",
      IVs: 31,
      moves: ["Endure", "Rock Slide", "Dragon Claw", "Earthquake"]
    },
    {
      species: "Ludicolo",
      level: 42,
      ability: "Swift Swim",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Rain Dance", "Giga Drain", "Ice Beam", "Hydro Pump"]
    },
    {
      species: "Torterra",
      level: 42,
      ability: "Sap Sipper",
      item: "Coba Berry",
      IVs: 31,
      moves: ["Stone Edge", "Earthquake", "Wood Hammer", "Synthesis"]
    },
    {
      species: "Gogoat",
      level: 45,
      ability: "Sap Sipper",
      item: "Sitrus Berry",
      IVs: 31,
      moves: ["Bulk Up", "Horn Leech", "Earthquake", "Wild Charge"]
    }
  ],
  storyBefore: "Azure Bay",
  storyAfter: "Route 13 (Lumiose Badlands)"
},
// 13. Alianna – Power Plant
{
  id: "aliana-power-plant",
  name: "Aliana",
  location: "Kalos Power Plant",
  sprite: "aliana.png",
  levelCap: 46, // Heracross is the highest
  team: [
    {
      species: "Mightyena",
      level: 45,
      ability: "Intimidate",
      item: "Sitrus Berry",
      IVs: 31,
      moves: ["Swagger", "Foul Play", "Sucker Punch", "Play Rough"]
    },
    {
      species: "Druddigon",
      level: 45,
      ability: "Sheer Force",
      item: "Life Orb",
      IVs: 31,
      moves: ["Fire Punch", "Dragon Claw", "Superpower", "Iron Head"]
    },
    {
      species: "Diggersby",
      level: 45,
      ability: "Huge Power",
      item: "Silk Scarf",
      IVs: 31,
      moves: ["Swords Dance", "Giga Impact", "Ice Punch", "Earthquake"]
    },
    {
      species: "Pyroar",
      level: 45,
      ability: "Competitive",
      item: "Chople Berry",
      IVs: 31,
      moves: ["Flamethrower", "Endeavor", "Crunch", "Will-O-Wisp"]
    },
    {
      species: "Heracross",
      level: 46,
      ability: "Moxie",
      item: "Heracronite",
      IVs: 31,
      moves: ["Arm Thrust", "Pin Missile", "Night Slash", "Bullet Seed"]
    }
  ],
  storyBefore: "Route 13 (Lumiose Badlands)",
  storyAfter: "Route 14 (Laverre Nature Trail)"
},
// 14. Clemont – Lumiose Gym
{
  id: "clemont-lumiose",
  name: "Clemont",
  location: "Lumiose Gym",
  sprite: "clemont.png",
  levelCap: 47, // Heliolisk is the highest
  team: [
    {
      species: "Rotom",
      level: 46,
      ability: "Levitate",
      item: "Red Card",
      IVs: 31,
      moves: ["Volt Switch", "Will-O-Wisp", "Hydro Pump", "Confuse Ray"]
    },
    {
      species: "Eelektross",
      level: 46,
      ability: "Levitate",
      item: "Leftovers",
      IVs: 31,
      moves: ["Wild Charge", "Aqua Tail", "Fire Punch", "Coil"]
    },
    {
      species: "Magnezone",
      level: 46,
      ability: "Sturdy",
      item: "Air Balloon",
      IVs: 31,
      moves: ["Flash Cannon", "Thunder Wave", "Volt Switch", "Signal Beam"]
    },
    {
      species: "Galvantula",
      level: 46,
      ability: "Compound Eyes",
      item: "Assault Vest",
      IVs: 31,
      moves: ["Bug Buzz", "Thunder", "Energy Ball", "Poison Jab"]
    },
    {
      species: "Ampharos",
      level: 46,
      ability: "Static",
      item: "Ampharosite",
      IVs: 31,
      moves: ["Thunderbolt", "Dragon Pulse", "Focus Blast", "Cotton Guard"]
    },
    {
      species: "Heliolisk",
      level: 47,
      ability: "Dry Skin",
      item: "Life Orb",
      IVs: 31,
      moves: ["Thunderbolt", "Surf", "Focus Blast", "Grass Knot"]
    }
  ],
  storyBefore: "Route 13 (Lumiose Badlands)",
  storyAfter: "Route 14 (Laverre Nature Trail)"
},
// 15. Calem/Serena – Route 14
{
  id: "calem-serena-route14",
  name: "Calem/Serena",
  location: "Route 14",
  sprite: "serena-calem.png",
  levelCap: 49,
  conditionalTeams: {
    "Chespin_Serena": [
      {
        species: "Meowstic",
        level: 47,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Thunder Wave", "Reflect", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 47,
        ability: "Scrappy",
        item: "Kangaskhanite",
        IVs: 31,
        moves: ["Sucker Punch", "Return", "Ice Punch", "Crunch"]
      },
      {
        species: "Dragonair",
        level: 48,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Rush", "Aqua Tail", "Fire Blast", "Thunder"]
      },
      {
        species: "Jolteon",
        level: 47,
        ability: "Volt Absorb",
        item: "Air Balloon",
        IVs: 31,
        moves: ["Thunder", "Baton Pass", "Thunder Wave", "Shadow Ball"]
      },
      {
        species: "Clefable",
        level: 47,
        ability: "Magic Guard",
        item: "Leftovers",
        IVs: 31,
        moves: ["Moonblast", "Cosmic Power", "Charge Beam", "Soft-Boiled"]
      },
      {
        species: "Delphox",
        level: 49,
        ability: "Magic Guard",
        item: "Passho Berry",
        IVs: 31,
        moves: ["Psyshock", "Sunny Day", "Flamethrower", "Solar Beam"]
      }
    ],
    "Fennekin_Serena": [
      {
        species: "Meowstic",
        level: 47,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Thunder Wave", "Reflect", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 47,
        ability: "Scrappy",
        item: "Kangaskhanite",
        IVs: 31,
        moves: ["Sucker Punch", "Return", "Thunder Punch", "Crunch"]
      },
      {
        species: "Dragonair",
        level: 48,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Aqua Tail", "Dragon Rush", "Thunder", "Fire Blast"]
      },
      {
        species: "Flareon",
        level: 47,
        ability: "Guts",
        item: "Toxic Orb",
        IVs: 31,
        moves: ["Flare Blitz", "Protect", "Last Resort"]
      },
      {
        species: "Clefable",
        level: 47,
        ability: "Magic Guard",
        item: "Leftovers",
        IVs: 31,
        moves: ["Moonblast", "Cosmic Power", "Charge Beam", "Soft-Boiled"]
      },
      {
        species: "Greninja",
        level: 49,
        ability: "Protean",
        item: "Flying Gem",
        IVs: 31,
        moves: ["Surf", "Grass Knot", "Ice Punch", "Acrobatics"]
      }
    ],
    "Froakie_Serena": [
      {
        species: "Meowstic",
        level: 47,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Thunder Wave", "Reflect", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 47,
        ability: "Scrappy",
        item: "Kangaskhanite",
        IVs: 31,
        moves: ["Sucker Punch", "Return", "Fire Punch", "Crunch"]
      },
      {
        species: "Dragonair",
        level: 48,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Rush", "Aqua Tail", "Thunder", "Fire Blast"]
      },
      {
        species: "Vaporeon",
        level: 47,
        ability: "Hydration",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Hydro Pump", "Blizzard", "Toxic", "Acid Armor"]
      },
      {
        species: "Clefable",
        level: 47,
        ability: "Magic Guard",
        item: "Leftovers",
        IVs: 31,
        moves: ["Moonblast", "Cosmic Power", "Charge Beam", "Soft-Boiled"]
      },
      {
        species: "Chesnaught",
        level: 49,
        ability: "Bulletproof",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Drain Punch", "Seed Bomb", "Poison Jab", "Stone Edge"]
      }
    ],
    "Chespin_Calem": [
      {
        species: "Meowstic",
        level: 47,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Thunder Wave", "Reflect", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 47,
        ability: "Scrappy",
        item: "Kangaskhanite",
        IVs: 31,
        moves: ["Sucker Punch", "Return", "Ice Punch", "Crunch"]
      },
      {
        species: "Dragonair",
        level: 48,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Rush", "Aqua Tail", "Fire Blast", "Thunder"]
      },
      {
        species: "Jolteon",
        level: 47,
        ability: "Volt Absorb",
        item: "Air Balloon",
        IVs: 31,
        moves: ["Thunder", "Baton Pass", "Thunder Wave", "Shadow Ball"]
      },
      {
        species: "Clefable",
        level: 47,
        ability: "Magic Guard",
        item: "Leftovers",
        IVs: 31,
        moves: ["Moonblast", "Cosmic Power", "Charge Beam", "Soft-Boiled"]
      },
      {
        species: "Delphox",
        level: 49,
        ability: "Magic Guard",
        item: "Passho Berry",
        IVs: 31,
        moves: ["Psyshock", "Sunny Day", "Flamethrower", "Solar Beam"]
      }
    ],
    "Fennekin_Calem": [
      {
        species: "Meowstic",
        level: 47,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Thunder Wave", "Reflect", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 47,
        ability: "Scrappy",
        item: "Kangaskhanite",
        IVs: 31,
        moves: ["Sucker Punch", "Return", "Thunder Punch", "Crunch"]
      },
      {
        species: "Dragonair",
        level: 48,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Aqua Tail", "Dragon Rush", "Thunder", "Fire Blast"]
      },
      {
        species: "Flareon",
        level: 47,
        ability: "Guts",
        item: "Toxic Orb",
        IVs: 31,
        moves: ["Flare Blitz", "Protect", "Last Resort"]
      },
      {
        species: "Clefable",
        level: 47,
        ability: "Magic Guard",
        item: "Leftovers",
        IVs: 31,
        moves: ["Moonblast", "Cosmic Power", "Charge Beam", "Soft-Boiled"]
      },
      {
        species: "Greninja",
        level: 49,
        ability: "Protean",
        item: "Flying Gem",
        IVs: 31,
        moves: ["Surf", "Grass Knot", "Ice Punch", "Acrobatics"]
      }
    ],
    "Froakie_Calem": [
      {
        species: "Meowstic",
        level: 47,
        ability: "Prankster",
        item: "Light Clay",
        IVs: 31,
        moves: ["Psychic", "Thunder Wave", "Reflect", "Light Screen"]
      },
      {
        species: "Kangaskhan",
        level: 47,
        ability: "Scrappy",
        item: "Kangaskhanite",
        IVs: 31,
        moves: ["Sucker Punch", "Return", "Fire Punch", "Crunch"]
      },
      {
        species: "Dragonair",
        level: 48,
        ability: "Marvel Scale",
        item: "Eviolite",
        IVs: 31,
        moves: ["Dragon Rush", "Aqua Tail", "Thunder", "Fire Blast"]
      },
      {
        species: "Vaporeon",
        level: 47,
        ability: "Hydration",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Hydro Pump", "Blizzard", "Toxic", "Acid Armor"]
      },
      {
        species: "Clefable",
        level: 47,
        ability: "Magic Guard",
        item: "Leftovers",
        IVs: 31,
        moves: ["Moonblast", "Cosmic Power", "Charge Beam", "Soft-Boiled"]
      },
      {
        species: "Chesnaught",
        level: 49,
        ability: "Bulletproof",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Drain Punch", "Seed Bomb", "Poison Jab", "Stone Edge"]
      }
    ]
  },
  storyBefore: "Route 14 (Laverre Nature Trail)",
  storyAfter: "Laverre City"
},

  // 16. Valerie – Laverre Gym
  {
  id: "valerie-laverre",
  name: "Valerie",
  location: "Laverre Gym",
  sprite: "valerie.png",
  levelCap: 52, // Mawile is the highest
  team: [
    {
      species: "Klefki",
      level: 50,
      ability: "Prankster",
      item: "Black Glasses",
      IVs: 31,
      moves: ["Swagger", "Foul Play", "Spikes", "Dazzling Gleam"]
    },
    {
      species: "Granbull",
      level: 50,
      ability: "Quick Feet",
      item: "Toxic Orb",
      IVs: 31,
      moves: ["Protect", "Play Rough", "Close Combat", "Earthquake"]
    },
    {
      species: "Azumarill",
      level: 50,
      ability: "Huge Power",
      item: "Assault Vest",
      IVs: 31,
      moves: ["Waterfall", "Aqua Jet", "Play Rough", "Bulldoze"]
    },
    {
      species: "Togekiss",
      level: 50,
      ability: "Serene Grace",
      item: "Lum Berry",
      IVs: 31,
      moves: ["Air Slash", "Flamethrower", "Thunder Wave", "Roost"]
    },
    {
      species: "Sylveon",
      level: 51,
      ability: "Pixilate",
      item: "Leftovers",
      IVs: 31,
      moves: ["Hyper Voice", "Psyshock", "Yawn", "Calm Mind"]
    },
    {
      species: "Mawile",
      level: 52,
      ability: "Intimidate",
      item: "Mawilite",
      IVs: 31,
      moves: ["Iron Head", "Play Rough", "Sucker Punch", "Foul Play"]
    }
  ],
  storyBefore: "Laverre City",
  storyAfter: "Route 15 (Brun Way)"
},

  // 17. Celosia & Bryony – Poké Ball Factory
  {
  id: "celosia-bryony-pokeball-factory",
  name: "Celosia & Bryony",
  location: "Poké Ball Factory (Double Battle)",
  sprite: "celosia-bryony.png", // or use whichever sprite your app uses for doubles
  levelCap: 53,
  doubleTeams: {
    Celosia: [
      {
        species: "Doublade",
        level: 51,
        ability: "No Guard",
        item: "Eviolite",
        IVs: 31,
        moves: ["Wide Guard", "Sacred Sword", "Shadow Claw", "Gyro Ball"]
      },
      {
        species: "Drapion",
        level: 51,
        ability: "Sniper",
        item: "Scope Lens",
        IVs: 31,
        moves: ["Aqua Tail", "Night Slash", "Cross Poison", "Rock Slide"]
      },
      {
        species: "Hydreigon",
        level: 51,
        ability: "Levitate",
        item: "Roseli Berry",
        IVs: 31,
        moves: ["Dark Pulse", "Flamethrower", "Dragon Pulse", "Flash Cannon"]
      },
      {
        species: "Magmortar",
        level: 51,
        ability: "Vital Spirit",
        item: "Air Balloon",
        IVs: 31,
        moves: ["Heat Wave", "Thunderbolt", "Psychic", "Will-O-Wisp"]
      },
      {
        species: "Toxicroak",
        level: 51,
        ability: "Poison Touch",
        item: "Life Orb",
        IVs: 31,
        moves: ["Fake Out", "Quick Guard", "Gunk Shot", "Drain Punch"]
      },
      {
        species: "Manectric",
        level: 53,
        ability: "Lightning Rod",
        item: "Manectite",
        IVs: 31,
        moves: ["Thunderbolt", "Flamethrower", "Ice Fang", "Light Screen"]
      }
    ],
    Bryony: [
      {
        species: "Liepard",
        level: 51,
        ability: "Prankster",
        item: "Focus Sash",
        IVs: 31,
        moves: ["Fake Out", "Assurance", "Psych Up", "Swagger"]
      },
      {
        species: "Bisharp",
        level: 51,
        ability: "Defiant",
        item: "Air Balloon",
        IVs: 31,
        moves: ["Sucker Punch", "Iron Head", "Low Kick", "Protect"]
      },
      {
        species: "Chandelure",
        level: 51,
        ability: "Flash Fire",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Shadow Ball", "Heat Wave", "Protect", "Energy Ball"]
      },
      {
        species: "Haxorus",
        level: 51,
        ability: "Mold Breaker",
        item: "Life Orb",
        IVs: 31,
        moves: ["Dragon Claw", "Low Kick", "Rock Slide", "Poison Jab"]
      },
      {
        species: "Luxray",
        level: 51,
        ability: "Intimidate",
        item: "Shuca Berry",
        IVs: 31,
        moves: ["Super Fang", "Thunder Wave", "Wild Charge", "Ice Fang"]
      },
      {
        species: "Pinsir",
        level: 53,
        ability: "Moxie",
        item: "Pinsirite",
        IVs: 31,
        moves: ["Quick Attack", "Double-Edge", "Close Combat", "Rock Slide"]
      }
    ]
  },
  storyBefore: "Laverre City",
  storyAfter: "Route 15 (Brun Way)"
},

  // 18. Mable – Frost Cavern
  {
  id: "mable-frost-cavern",
  name: "Mable",
  location: "Frost Cavern",
  sprite: "mable.png",
  levelCap: 60, // Houndoom is the highest
  team: [
    {
      species: "Weavile",
      level: 58,
      ability: "Technician",
      item: "Life Orb",
      IVs: 31,
      moves: ["Icicle Crash", "Bite", "Low Kick", "Poison Jab"]
    },
    {
      species: "Electivire",
      level: 58,
      ability: "Motor Drive",
      item: "Expert Belt",
      IVs: 31,
      moves: ["Wild Charge", "Close Combat", "Ice Punch", "Flamethrower"]
    },
    {
      species: "Mandibuzz",
      level: 58,
      ability: "Overcoat",
      item: "Leftovers",
      IVs: 31,
      moves: ["Brave Bird", "Foul Play", "Roost", "Toxic"]
    },
    {
      species: "Infernape",
      level: 58,
      ability: "Iron Fist",
      item: "Passho Berry",
      IVs: 31,
      moves: ["Close Combat", "Overheat", "Stone Edge", "Thunder Punch"]
    },
    {
      species: "Dugtrio",
      level: 58,
      ability: "Arena Trap",
      item: "Heat Rock",
      IVs: 31,
      moves: ["Sunny Day", "Memento"] // No damaging moves, AI behavior note in comment
    },
    {
      species: "Houndoom",
      level: 60,
      ability: "Flash Fire",
      item: "Houndoominite",
      IVs: 31,
      moves: ["Flamethrower", "Dark Pulse", "Sludge Bomb", "Hidden Power"]
    }
  ],
  storyBefore: "Frost Cavern",
  storyAfter: "Route 17 (Mamoswine Road)"
},

  // 19. Calem/Serena – Anistar City (ALL starter/player combos)
  {
    id: "calem-serena-anistar",
    name: "Calem/Serena",
    location: "Anistar City",
    sprite: "serena-calem.png",
    levelCap: 61,
    conditionalTeams: {
      "Chespin_Serena": [
        {
          species: "Meowstic",
          level: 60,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Jolteon",
          level: 59,
          ability: "Volt Absorb",
          item: "Air Balloon",
          IVs: 31,
          moves: ["Thunder", "Signal Beam", "Shadow Ball", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 60,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Return", "Seismic Toss", "Sucker Punch", "Drain Punch"]
        },
        {
          species: "Clefable",
          level: 59,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Flamethrower", "Calm Mind", "Soft-Boiled"]
        },
        {
          species: "Dragonite",
          level: 60,
          ability: "Multiscale",
          item: "Weakness Policy",
          IVs: 31,
          moves: ["Dragon Rush", "Extreme Speed", "Fire Punch", "Hurricane"]
        },
        {
          species: "Delphox",
          level: 61,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Flamethrower", "Psychic", "Dazzling Gleam", "Shadow Ball"]
        }
      ],
      "Fennekin_Serena": [
        {
          species: "Meowstic",
          level: 60,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Calm Mind", "Thunder Wave", "Shadow Ball"]
        },
        {
          species: "Flareon",
          level: 59,
          ability: "Guts",
          item: "Toxic Orb",
          IVs: 31,
          moves: ["Flare Blitz", "Superpower", "Quick Attack", "Protect"]
        },
        {
          species: "Kangaskhan",
          level: 60,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Return", "Seismic Toss", "Sucker Punch", "Drain Punch"]
        },
        {
          species: "Clefable",
          level: 59,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Flamethrower", "Calm Mind", "Soft-Boiled"]
        },
        {
          species: "Dragonite",
          level: 60,
          ability: "Multiscale",
          item: "Weakness Policy",
          IVs: 31,
          moves: ["Dragon Rush", "Fire Punch", "Extreme Speed", "Hurricane"]
        },
        {
          species: "Greninja",
          level: 61,
          ability: "Protean",
          item: "Life Orb",
          IVs: 31,
          moves: ["Hydro Pump", "Dark Pulse", "Extrasensory", "Grass Knot"]
        }
      ],
      "Froakie_Serena": [
        {
          species: "Meowstic",
          level: 60,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Vaporeon",
          level: 59,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Scald", "Acid Armor", "Aqua Ring", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 60,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Return", "Seismic Toss", "Drain Punch", "Sucker Punch"]
        },
        {
          species: "Clefable",
          level: 59,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Moonblast", "Flamethrower", "Calm Mind", "Soft-Boiled"]
        },
        {
          species: "Dragonite",
          level: 60,
          ability: "Multiscale",
          item: "Weakness Policy",
          IVs: 31,
          moves: ["Dragon Rush", "Extreme Speed", "Fire Punch", "Hurricane"]
        },
        {
          species: "Chesnaught",
          level: 61,
          ability: "Bulletproof",
          item: "Rocky Helmet",
          IVs: 31,
          moves: ["Drain Punch", "Synthesis", "Spiky Shield", "Wood Hammer"]
        }
      ],
      "Chespin_Calem": [
        {
          species: "Meowstic",
          level: 60,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Jolteon",
          level: 59,
          ability: "Volt Absorb",
          item: "Air Balloon",
          IVs: 31,
          moves: ["Thunder", "Signal Beam", "Shadow Ball", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 60,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Return", "Seismic Toss", "Sucker Punch", "Drain Punch"]
        },
        {
          species: "Clefable",
          level: 59,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Flamethrower", "Calm Mind", "Soft-Boiled"]
        },
        {
          species: "Dragonite",
          level: 60,
          ability: "Multiscale",
          item: "Weakness Policy",
          IVs: 31,
          moves: ["Dragon Rush", "Extreme Speed", "Fire Punch", "Hurricane"]
        },
        {
          species: "Delphox",
          level: 61,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Flamethrower", "Psychic", "Dazzling Gleam", "Shadow Ball"]
        }
      ],
      "Fennekin_Calem": [
        {
          species: "Meowstic",
          level: 60,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Calm Mind", "Thunder Wave", "Shadow Ball"]
        },
        {
          species: "Flareon",
          level: 59,
          ability: "Guts",
          item: "Toxic Orb",
          IVs: 31,
          moves: ["Flare Blitz", "Superpower", "Quick Attack", "Protect"]
        },
        {
          species: "Kangaskhan",
          level: 60,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Return", "Seismic Toss", "Sucker Punch", "Drain Punch"]
        },
        {
          species: "Clefable",
          level: 59,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Flamethrower", "Calm Mind", "Soft-Boiled"]
        },
        {
          species: "Dragonite",
          level: 60,
          ability: "Multiscale",
          item: "Weakness Policy",
          IVs: 31,
          moves: ["Dragon Rush", "Fire Punch", "Extreme Speed", "Hurricane"]
        },
        {
          species: "Greninja",
          level: 61,
          ability: "Protean",
          item: "Life Orb",
          IVs: 31,
          moves: ["Hydro Pump", "Dark Pulse", "Extrasensory", "Grass Knot"]
        }
      ],
      "Froakie_Calem": [
        {
          species: "Meowstic",
          level: 60,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Vaporeon",
          level: 59,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Scald", "Acid Armor", "Aqua Ring", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 60,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Return", "Seismic Toss", "Drain Punch", "Sucker Punch"]
        },
        {
          species: "Clefable",
          level: 59,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Moonblast", "Flamethrower", "Calm Mind", "Soft-Boiled"]
        },
        {
          species: "Dragonite",
          level: 60,
          ability: "Multiscale",
          item: "Weakness Policy",
          IVs: 31,
          moves: ["Dragon Rush", "Extreme Speed", "Fire Punch", "Hurricane"]
        },
        {
          species: "Chesnaught",
          level: 61,
          ability: "Bulletproof",
          item: "Rocky Helmet",
          IVs: 31,
          moves: ["Drain Punch", "Synthesis", "Spiky Shield", "Wood Hammer"]
        }
      ]
    },
    storyBefore: "Route 17 (Mamoswine Road)",
    storyAfter: "Team Flare Secret HQ"
  },
  // 20. Olympia – Anistar Gym
 {
  id: "olympia-anistar",
  name: "Olympia",
  location: "Anistar Gym",
  sprite: "olympia.png",
  levelCap: 65, // Medicham is the highest
  team: [
    {
      species: "Claydol",
      level: 63,
      ability: "Levitate",
      item: "Leftovers",
      IVs: 31,
      moves: ["Earth Power", "Stealth Rock", "Calm Mind", "Ice Beam"]
    },
    {
      species: "Sigilyph",
      level: 63,
      ability: "Magic Guard",
      item: "Flame Orb",
      IVs: 31,
      moves: ["Stored Power", "Cosmic Power", "Psycho Shift", "Roost"]
    },
    {
      species: "Alakazam",
      level: 63,
      ability: "Magic Guard",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Psychic", "Dazzling Gleam", "Focus Blast", "Shadow Ball"]
    },
    {
      species: "Delphox",
      level: 63,
      ability: "Magician",
      item: "Power Herb",
      IVs: 31,
      moves: ["Calm Mind", "Solar Beam", "Aura Sphere", "Fire Blast"]
    },
    {
      species: "Metagross",
      level: 63,
      ability: "Tough Claws",
      item: "Life Orb",
      IVs: 31,
      moves: ["Meteor Mash", "Earthquake", "Ice Punch", "Rock Polish"]
    },
    {
      species: "Medicham",
      level: 65,
      ability: "Pure Power",
      item: "Medichamite",
      IVs: 31,
      moves: ["Drain Punch", "Zen Headbutt", "Ice Punch", "Poison Jab"]
    }
  ],
  storyBefore: "Route 17 (Mamoswine Road)",
  storyAfter: "Team Flare Secret HQ"
},

  // 21. Lysandre – Lysandre Labs (First Battle)
 {
  id: "lysandre-labs-1",
  name: "Lysandre",
  location: "Lysandre Labs",
  sprite: "lysandre.png",
  levelCap: 65, // Gyarados is the highest
  team: [
    {
      species: "Mienshao",
      level: 63,
      ability: "Regenerator",
      IVs: 31,
      moves: ["Swords Dance", "High Jump Kick", "Acrobatics", "Baton Pass"]
    },
    {
      species: "Pyroar",
      level: 64,
      ability: "Rivalry",
      IVs: 31,
      moves: ["Hyper Voice", "Fire Blast", "Dark Pulse", "Will-O-Wisp"]
    },
    {
      species: "Honchkrow",
      level: 63,
      ability: "Moxie",
      IVs: 31,
      moves: ["Sucker Punch", "Brave Bird", "Roost", "Substitute"]
    },
    {
      species: "Gyarados",
      level: 65,
      ability: "Intimidate",
      IVs: 31,
      moves: ["Aqua Tail", "Earthquake", "Iron Head", "Crunch"]
    }
  ],
  storyBefore: "Route 17 (Mamoswine Road)",
  storyAfter: "Team Flare Secret HQ"
},

  // 22. Aliana – Lysandre Labs
  {
  id: "aliana-lysandre-labs",
  name: "Aliana",
  location: "Lysandre Labs",
  sprite: "aliana.png",
  levelCap: 65, // Heracross is the highest
  team: [
    {
      species: "Mightyena",
      level: 63,
      ability: "Intimidate",
      item: "Black Glasses",
      IVs: 31,
      moves: ["Swagger", "Foul Play", "Sucker Punch", "Play Rough"]
    },
    {
      species: "Druddigon",
      level: 63,
      ability: "Sheer Force",
      item: "Life Orb",
      IVs: 31,
      moves: ["Dragon Rush", "Fire Punch", "Gunk Shot", "Rock Slide"]
    },
    {
      species: "Diggersby",
      level: 63,
      ability: "Huge Power",
      item: "Choice Scarf",
      IVs: 31,
      moves: ["Earthquake", "Wild Charge", "Ice Punch", "Knock Off"]
    },
    {
      species: "Pyroar",
      level: 63,
      ability: "Competitive",
      item: "Power Herb",
      IVs: 31,
      moves: ["Solar Beam", "Hyper Voice", "Dark Pulse", "Flamethrower"]
    },
    {
      species: "Klinklang",
      level: 63,
      ability: "Motor Drive",
      item: "Air Balloon",
      IVs: 31,
      moves: ["Shift Gear", "Gear Grind", "Wild Charge", "Earthquake"]
    },
    {
      species: "Heracross",
      level: 65,
      ability: "Moxie",
      item: "Heracronite",
      IVs: 31,
      moves: ["Arm Thrust", "Pin Missile", "Knock Off", "Rock Blast"]
    }
  ],
  storyBefore: "Route 17 (Mamoswine Road)",
  storyAfter: "Team Flare Secret HQ"
},

  // 23. Bryony – Lysandre Labs
  {
  id: "bryony-lysandre-labs",
  name: "Bryony",
  location: "Lysandre Labs",
  sprite: "bryony.png",
  levelCap: 65, // Pinsir is the highest
  team: [
    {
      species: "Liepard",
      level: 63,
      ability: "Prankster",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Nasty Plot", "Dark Pulse", "Copycat"]
    },
    {
      species: "Bisharp",
      level: 63,
      ability: "Defiant",
      item: "Choice Scarf",
      IVs: 31,
      moves: ["Knock Off", "Iron Head", "Low Kick", "Stone Edge"]
    },
    {
      species: "Chandelure",
      level: 63,
      ability: "Flash Fire",
      item: "Salac Berry",
      IVs: 31,
      moves: ["Fire Blast", "Shadow Ball", "Energy Ball", "Endure"]
    },
    {
      species: "Haxorus",
      level: 63,
      ability: "Mold Breaker",
      item: "Life Orb",
      IVs: 31,
      moves: ["Dragon Dance", "Earthquake", "Iron Tail", "Outrage"]
    },
    {
      species: "Luxray",
      level: 63,
      ability: "Strong Jaw",
      item: "Life Orb",
      IVs: 31,
      moves: ["Volt Tackle", "Crunch", "Ice Fang", "Fire Fang"]
    },
    {
      species: "Pinsir",
      level: 65,
      ability: "Moxie",
      item: "Pinsirite",
      IVs: 31,
      moves: ["Earthquake", "Quick Attack", "Double-Edge", "Stone Edge"]
    }
  ],
  storyBefore: "Route 17 (Mamoswine Road)",
  storyAfter: "Team Flare Secret HQ"
},

  // 24. Celosia – Lysandre Labs
  {
  id: "celosia-lysandre-labs",
  name: "Celosia",
  location: "Lysandre Labs",
  sprite: "celosia.png",
  levelCap: 65, // Manectric is the highest
  team: [
    {
      species: "Aegislash",
      level: 63,
      ability: "Stance Change",
      item: "Weakness Policy",
      IVs: 31,
      moves: ["Autotomize", "Shadow Ball", "Flash Cannon", "King's Shield"]
    },
    {
      species: "Drapion",
      level: 63,
      ability: "Sniper",
      item: "Scope Lens",
      IVs: 31,
      moves: ["Aqua Tail", "Night Slash", "Cross Poison", "Swords Dance"]
    },
    {
      species: "Hydreigon",
      level: 63,
      ability: "Levitate",
      item: "Life Orb",
      IVs: 31,
      moves: ["U-turn", "Fire Blast", "Surf", "Dragon Pulse"]
    },
    {
      species: "Magmortar",
      level: 63,
      ability: "Mega Launcher",
      item: "Air Balloon",
      IVs: 31,
      moves: ["Fire Blast", "Thunderbolt", "Dark Pulse", "Aura Sphere"]
    },
    {
      species: "Toxicroak",
      level: 63,
      ability: "Poison Touch",
      item: "Wide Lens",
      IVs: 31,
      moves: ["Sucker Punch", "Ice Punch", "Gunk Shot", "Cross Chop"]
    },
    {
      species: "Manectric",
      level: 65,
      ability: "Lightning Rod",
      item: "Manectite",
      IVs: 31,
      moves: ["Thunderbolt", "Flamethrower", "Signal Beam", "Charge Beam"]
    }
  ],
  storyBefore: "Route 17 (Mamoswine Road)",
  storyAfter: "Team Flare Secret HQ"
},

  // 25. Mable – Lysandre Labs
  {
  id: "mable-lysandre-labs",
  name: "Mable",
  location: "Lysandre Labs",
  sprite: "mable.png",
  levelCap: 65, // Houndoom is the highest
  team: [
    {
      species: "Infernape",
      level: 63,
      ability: "Iron Fist",
      item: "Life Orb",
      IVs: 31,
      moves: ["U-turn", "Overheat", "Close Combat", "Thunder Punch"]
    },
    {
      species: "Electivire",
      level: 63,
      ability: "Motor Drive",
      item: "Expert Belt",
      IVs: 31,
      moves: ["Volt Tackle", "Close Combat", "Ice Punch", "Earthquake"]
    },
    {
      species: "Mandibuzz",
      level: 63,
      ability: "Weak Armor",
      item: "Weakness Policy",
      IVs: 31,
      moves: ["Nasty Plot", "Roost", "Air Slash", "Dark Pulse"]
    },
    {
      species: "Weavile",
      level: 63,
      ability: "Technician",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Counter", "Bite", "Icicle Spear", "Low Kick"]
    },
    {
      species: "Dugtrio",
      level: 63,
      ability: "Arena Trap",
      item: "Heat Rock",
      IVs: 31,
      moves: ["Sunny Day", "Memento"]
    },
    {
      species: "Houndoom",
      level: 65,
      ability: "Flash Fire",
      item: "Houndoominite",
      IVs: 31,
      moves: ["Dark Pulse", "Sludge Bomb", "Fire Blast", "Nasty Plot"]
    }
  ],
  storyBefore: "Route 17 (Mamoswine Road)",
  storyAfter: "Team Flare Secret HQ"
},

  // 26. Xerosic – Lysandre Labs
  {
  id: "xerosic-lysandre-labs",
  name: "Xerosic",
  location: "Lysandre Labs",
  sprite: "xerosic.png",
  levelCap: 66, // Scizor is the highest
  team: [
    {
      species: "Crobat",
      level: 64,
      ability: "Infiltrator",
      item: "Life Orb",
      IVs: 31,
      moves: ["Brave Bird", "U-turn", "Heat Wave", "Cross Poison"]
    },
    {
      species: "Eelektross",
      level: 64,
      ability: "Levitate",
      item: "Assault Vest",
      IVs: 31,
      moves: ["Volt Switch", "Giga Drain", "Flamethrower", "Dragon Pulse"]
    },
    {
      species: "Darmanitan",
      level: 64,
      ability: "Sheer Force",
      item: "Choice Scarf",
      IVs: 31,
      moves: ["Flare Blitz", "Earthquake", "Rock Slide", "U-turn"]
    },
    {
      species: "Gengar",
      level: 64,
      ability: "Levitate",
      item: "Black Sludge",
      IVs: 31,
      moves: ["Shadow Ball", "Sludge Wave", "Hypnosis", "Focus Blast"]
    },
    {
      species: "Malamar",
      level: 64,
      ability: "Contrary",
      item: "Leftovers",
      IVs: 31,
      moves: ["Superpower", "Psycho Cut", "Knock Off", "Sucker Punch"]
    },
    {
      species: "Scizor",
      level: 66,
      ability: "Light Metal",
      item: "Scizorite",
      IVs: 31,
      moves: ["Bullet Punch", "Bug Bite", "Strength", "Swords Dance"]
    }
  ],
  storyBefore: "Route 17 (Mamoswine Road)",
  storyAfter: "Team Flare Secret HQ"
},

  // 27. Lysandre – Flare HQ (Second Battle)
  {
  id: "lysandre-hq-2",
  name: "Lysandre",
  location: "Team Flare HQ",
  sprite: "lysandre.png",
  levelCap: 67, // Gyarados is the highest
  team: [
    {
      species: "Mienshao",
      level: 65,
      ability: "Regenerator",
      IVs: 31,
      moves: ["Swords Dance", "High Jump Kick", "Stone Edge", "Baton Pass"]
    },
    {
      species: "Pyroar",
      level: 65,
      ability: "Rivalry",
      IVs: 31,
      moves: ["Hyper Voice", "Fire Blast", "Dark Pulse", "Wild Charge"]
    },
    {
      species: "Honchkrow",
      level: 65,
      ability: "Moxie",
      IVs: 31,
      moves: ["Sucker Punch", "Brave Bird", "Roost", "Superpower"]
    },
    {
      species: "Garchomp",
      level: 65,
      ability: "Rough Skin",
      IVs: 31,
      moves: ["Earthquake", "Poison Jab", "Fire Blast", "Dragon Rush"]
    },
    {
      species: "Gyarados",
      level: 67,
      ability: "Intimidate",
      IVs: 31,
      moves: ["Aqua Tail", "Earthquake", "Iron Head", "Crunch"]
    }
  ],
  storyBefore: "Team Flare Secret HQ",
  storyAfter: "Route 18 (Vallée Étroite Way)"
},
  // 28. Lysandre – Flare HQ (Final Battle)
  {
  id: "lysandre-hq-final",
  name: "Lysandre (Final)",
  location: "Team Flare HQ",
  sprite: "lysandre.png",
  levelCap: 68, // Pyroar, Gyarados highest
  team: [
    {
      species: "Mienshao",
      level: 67,
      ability: "Reckless",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Swords Dance", "High Jump Kick", "Poison Jab", "Baton Pass"]
    },
    {
      species: "Honchkrow",
      level: 67,
      ability: "Moxie",
      item: "Choice Scarf",
      IVs: 31,
      moves: ["Brave Bird", "Night Slash", "Heat Wave", "Superpower"]
    },
    {
      species: "Garchomp",
      level: 67,
      ability: "Rough Skin",
      item: "Rocky Helmet",
      IVs: 31,
      moves: ["Earthquake", "Stone Edge", "Fire Blast", "Dragon Rush"]
    },
    {
      species: "Pyroar",
      level: 68,
      ability: "Rivalry",
      item: "Life Orb",
      IVs: 31,
      moves: ["Hyper Voice", "Fire Blast", "Sunny Day", "Solar Beam"]
    },
    {
      species: "Volcarona",
      level: 67,
      ability: "Flame Body",
      item: "Leftovers",
      IVs: 31,
      moves: ["Fiery Dance", "Bug Buzz", "Quiver Dance", "Psychic"]
    },
    {
      species: "Gyarados",
      level: 68,
      ability: "Intimidate",
      item: "Gyaradosite",
      IVs: 31,
      moves: ["Waterfall", "Earthquake", "Crunch", "Dragon Dance"]
    }
  ],
  storyBefore: "Team Flare Secret HQ",
  storyAfter: "Route 18 (Vallée Étroite Way)"
},
  // 29. Professor Sycamore – Couriway Town
  {
    id: "sycamore-couriway",
    name: "Professor Sycamore",
    location: "Couriway Town",
    sprite: "sycamore.png",
    levelCap: 69,
    team: [
      {
        species: "Venusaur",
        level: 67,
        ability: "Overgrow",
        item: "Venusaurite",
        IVs: 31,
        moves: ["Giga Drain", "Sludge Bomb", "Earthquake", "Synthesis"]
      },
      {
        species: "Charizard",
        level: 68,
        ability: "Blaze",
        item: "Charizardite X",
        IVs: 31,
        moves: ["Dragon Claw", "Fire Blast", "Earthquake", "Roost"]
      },
      {
        species: "Blastoise",
        level: 69,
        ability: "Torrent",
        item: "Blastoisinite",
        IVs: 31,
        moves: ["Scald", "Aura Sphere", "Ice Beam", "Dragon Pulse"]
      }
    ],
    storyBefore: "Couriway Town",
    storyAfter: "Route 19 (Grande Vallée Way)"
  },
  // 30. Shauna – Route 19 (ALL starter/player combos)
  {
  id: "shauna-route19",
  name: "Shauna",
  location: "Route 19",
  sprite: "shauna.png",
  levelCap: 69,
  conditionalTeams: {
    "Chespin_Serena": [
      {
        species: "Sylveon",
        level: 67,
        ability: "Pixilate",
        item: "Life Orb",
        IVs: 31,
        moves: ["Hyper Voice", "Quick Attack", "Shadow Ball", "Psyshock"]
      },
      {
        species: "Goodra",
        level: 67,
        ability: "Sap Sipper",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Dragon Pulse", "Sludge Wave", "Power Whip", "Earthquake"]
      },
      {
        species: "Cinccino",
        level: 67,
        ability: "Skill Link",
        item: "King’s Rock",
        IVs: 31,
        moves: ["Tail Slap", "Bullet Seed", "Rock Blast", "Knock Off"]
      },
      {
        species: "Rapidash",
        level: 67,
        ability: "Reckless",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Flare Blitz", "Jump Kick", "Wild Charge", "Poison Jab"]
      },
      {
        species: "Roserade",
        level: 67,
        ability: "Natural Cure",
        item: "Black Sludge",
        IVs: 31,
        moves: ["Giga Drain", "Sleep Powder", "Shadow Ball", "Sludge Bomb"]
      },
      {
        species: "Greninja",
        level: 69,
        ability: "Protean",
        item: "Flying Gem",
        IVs: 31,
        moves: ["Acrobatics", "Hydro Pump", "Gunk Shot", "Grass Knot"]
      }
    ],
    "Fennekin_Serena": [
      {
        species: "Sylveon",
        level: 67,
        ability: "Pixilate",
        item: "Life Orb",
        IVs: 31,
        moves: ["Hyper Voice", "Quick Attack", "Psyshock", "Shadow Ball"]
      },
      {
        species: "Goodra",
        level: 67,
        ability: "Sap Sipper",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Dragon Pulse", "Sludge Wave", "Power Whip", "Earthquake"]
      },
      {
        species: "Cinccino",
        level: 67,
        ability: "Skill Link",
        item: "King’s Rock",
        IVs: 31,
        moves: ["Tail Slap", "Bullet Seed", "Rock Blast", "Knock Off"]
      },
      {
        species: "Rapidash",
        level: 67,
        ability: "Reckless",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Flare Blitz", "Jump Kick", "Wild Charge", "Poison Jab"]
      },
      {
        species: "Lapras",
        level: 67,
        ability: "Water Absorb",
        item: "Leftovers",
        IVs: 31,
        moves: ["Freeze-Dry", "Hydro Pump", "Ice Beam", "Psychic"]
      },
      {
        species: "Chesnaught",
        level: 69,
        ability: "Bulletproof",
        item: "Rocky Helmet",
        IVs: 31,
        moves: ["Wood Hammer", "Drain Punch", "Spiky Shield", "Leech Seed"]
      }
    ],
    "Froakie_Serena": [
      {
        species: "Sylveon",
        level: 67,
        ability: "Pixilate",
        item: "Life Orb",
        IVs: 31,
        moves: ["Hyper Voice", "Shadow Ball", "Psyshock", "Quick Attack"]
      },
      {
        species: "Goodra",
        level: 67,
        ability: "Sap Sipper",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Dragon Pulse", "Sludge Wave", "Power Whip", "Earthquake"]
      },
      {
        species: "Cinccino",
        level: 67,
        ability: "Skill Link",
        item: "King’s Rock",
        IVs: 31,
        moves: ["Tail Slap", "Bullet Seed", "Rock Blast", "Knock Off"]
      },
      {
        species: "Lapras",
        level: 67,
        ability: "Water Absorb",
        item: "Leftovers",
        IVs: 31,
        moves: ["Freeze-Dry", "Ice Beam", "Hydro Pump", "Psychic"]
      },
      {
        species: "Roserade",
        level: 67,
        ability: "Natural Cure",
        item: "Black Sludge",
        IVs: 31,
        moves: ["Giga Drain", "Sleep Powder", "Sludge Bomb", "Shadow Ball"]
      },
      {
        species: "Delphox",
        level: 69,
        ability: "Magic Guard",
        item: "Expert Belt",
        IVs: 31,
        moves: ["Fire Blast", "Psychic", "Shadow Ball", "Dazzling Gleam"]
      }
    ],
    // For Calem as player (same teams as Serena, but you might want both for your app logic):
    "Chespin_Calem": [
      {
        species: "Sylveon",
        level: 67,
        ability: "Pixilate",
        item: "Life Orb",
        IVs: 31,
        moves: ["Hyper Voice", "Quick Attack", "Shadow Ball", "Psyshock"]
      },
      {
        species: "Goodra",
        level: 67,
        ability: "Sap Sipper",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Dragon Pulse", "Sludge Wave", "Power Whip", "Earthquake"]
      },
      {
        species: "Cinccino",
        level: 67,
        ability: "Skill Link",
        item: "King’s Rock",
        IVs: 31,
        moves: ["Tail Slap", "Bullet Seed", "Rock Blast", "Knock Off"]
      },
      {
        species: "Rapidash",
        level: 67,
        ability: "Reckless",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Flare Blitz", "Jump Kick", "Wild Charge", "Poison Jab"]
      },
      {
        species: "Roserade",
        level: 67,
        ability: "Natural Cure",
        item: "Black Sludge",
        IVs: 31,
        moves: ["Giga Drain", "Sleep Powder", "Shadow Ball", "Sludge Bomb"]
      },
      {
        species: "Greninja",
        level: 69,
        ability: "Protean",
        item: "Flying Gem",
        IVs: 31,
        moves: ["Acrobatics", "Hydro Pump", "Gunk Shot", "Grass Knot"]
      }
    ],
    "Fennekin_Calem": [
      {
        species: "Sylveon",
        level: 67,
        ability: "Pixilate",
        item: "Life Orb",
        IVs: 31,
        moves: ["Hyper Voice", "Quick Attack", "Psyshock", "Shadow Ball"]
      },
      {
        species: "Goodra",
        level: 67,
        ability: "Sap Sipper",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Dragon Pulse", "Sludge Wave", "Power Whip", "Earthquake"]
      },
      {
        species: "Cinccino",
        level: 67,
        ability: "Skill Link",
        item: "King’s Rock",
        IVs: 31,
        moves: ["Tail Slap", "Bullet Seed", "Rock Blast", "Knock Off"]
      },
      {
        species: "Rapidash",
        level: 67,
        ability: "Reckless",
        item: "Sitrus Berry",
        IVs: 31,
        moves: ["Flare Blitz", "Jump Kick", "Wild Charge", "Poison Jab"]
      },
      {
        species: "Lapras",
        level: 67,
        ability: "Water Absorb",
        item: "Leftovers",
        IVs: 31,
        moves: ["Freeze-Dry", "Hydro Pump", "Ice Beam", "Psychic"]
      },
      {
        species: "Chesnaught",
        level: 69,
        ability: "Bulletproof",
        item: "Rocky Helmet",
        IVs: 31,
        moves: ["Wood Hammer", "Drain Punch", "Spiky Shield", "Leech Seed"]
      }
    ],
    "Froakie_Calem": [
      {
        species: "Sylveon",
        level: 67,
        ability: "Pixilate",
        item: "Life Orb",
        IVs: 31,
        moves: ["Hyper Voice", "Shadow Ball", "Psyshock", "Quick Attack"]
      },
      {
        species: "Goodra",
        level: 67,
        ability: "Sap Sipper",
        item: "Assault Vest",
        IVs: 31,
        moves: ["Dragon Pulse", "Sludge Wave", "Power Whip", "Earthquake"]
      },
      {
        species: "Cinccino",
        level: 67,
        ability: "Skill Link",
        item: "King’s Rock",
        IVs: 31,
        moves: ["Tail Slap", "Bullet Seed", "Rock Blast", "Knock Off"]
      },
      {
        species: "Lapras",
        level: 67,
        ability: "Water Absorb",
        item: "Leftovers",
        IVs: 31,
        moves: ["Freeze-Dry", "Ice Beam", "Hydro Pump", "Psychic"]
      },
      {
        species: "Roserade",
        level: 67,
        ability: "Natural Cure",
        item: "Black Sludge",
        IVs: 31,
        moves: ["Giga Drain", "Sleep Powder", "Sludge Bomb", "Shadow Ball"]
      },
      {
        species: "Delphox",
        level: 69,
        ability: "Magic Guard",
        item: "Expert Belt",
        IVs: 31,
        moves: ["Fire Blast", "Psychic", "Shadow Ball", "Dazzling Gleam"]
      }
    ]
  },
  storyBefore: "Route 19 (Grande Vallée Way)",
  storyAfter: "Route 20 (Winding Woods)"
},
  // 31. Tierno – Route 19
  {
    id: "tierno-route19",
    name: "Tierno",
    location: "Route 19",
    sprite: "tierno.png",
    levelCap: 69,
    team: [
      {
        species: "Talonflame",
        level: 67,
        ability: "Gale Wings",
        item: "Flying Gem",
        IVs: 31,
        moves: ["Swords Dance", "Acrobatics", "Roost", "Flare Blitz"]
      },
      {
        species: "Lilligant",
        level: 67,
        ability: "Own Tempo",
        item: "Leftovers",
        IVs: 31,
        moves: ["Petal Dance", "Quiver Dance", "Sleep Powder", "Earth Power"]
      },
      {
        species: "Ludicolo",
        level: 67,
        ability: "Swift Swim",
        item: "Damp Rock",
        IVs: 31,
        moves: ["Rain Dance", "Hydro Pump", "Giga Drain", "Ice Beam"]
      },
      {
        species: "Volcarona",
        level: 67,
        ability: "Flame Body",
        item: "Life Orb",
        IVs: 31,
        moves: ["Quiver Dance", "Fiery Dance", "Giga Drain", "Bug Buzz"]
      },
      {
        species: "Kingdra",
        level: 67,
        ability: "Swift Swim",
        item: "Roseli Berry",
        IVs: 31,
        moves: ["Dragon Dance", "Waterfall", "Outrage", "Return"]
      },
      {
        species: "Crawdaunt",
        level: 69,
        ability: "Adaptability",
        item: "Focus Sash",
        IVs: 31,
        moves: ["Crabhammer", "Crunch", "Swords Dance", "Aqua Jet"]
      }
    ],
    storyBefore: "Route 19 (Grande Vallée Way)",
    storyAfter: "Route 20 (Winding Woods)"
  },
  // 32. Trevor – Route 19
  {
    id: "trevor-route19",
    name: "Trevor",
    location: "Route 19",
    sprite: "trevor.png",
    levelCap: 72,
    team: [
      {
        species: "Raichu",
        level: 70,
        ability: "Lightning Rod",
        item: "Expert Belt",
        IVs: 31,
        moves: ["Thunderbolt", "Focus Blast", "Grass Knot", "Surf"]
      },
      {
        species: "Aerodactyl",
        level: 70,
        ability: "Rock Head",
        item: "Focus Sash",
        IVs: 31,
        moves: ["Stone Edge", "Aqua Tail", "Earthquake", "Hone Claws"]
      },
      {
        species: "Breloom",
        level: 70,
        ability: "Poison Heal",
        item: "Toxic Orb",
        IVs: 31,
        moves: ["Spore", "Substitute", "Focus Punch", "Seed Bomb"]
      },
      {
        species: "Froslass",
        level: 70,
        ability: "Cursed Body",
        item: "Life Orb",
        IVs: 31,
        moves: ["Ice Beam", "Shadow Ball", "Thunder", "Destiny Bond"]
      },
      {
        species: "Bastiodon",
        level: 71,
        ability: "Sturdy",
        item: "Custap Berry",
        IVs: 31,
        moves: ["Metal Burst", "Fissure", "Smack Down", "Slack Off"]
      },
      {
        species: "Florges",
        level: 72,
        ability: "Natural Cure",
        item: "Leftovers",
        IVs: 31,
        moves: ["Moonblast", "Calm Mind", "Leech Seed", "Earth Power"]
      }
    ],
    storyBefore: "Route 19 (Grande Vallée Way)",
    storyAfter: "Route 20 (Winding Woods)"
  },
  // 33. Wulfric – Snowbelle Gym
 {
  id: "wulfric-snowbelle",
  name: "Wulfric",
  location: "Snowbelle Gym",
  sprite: "wulfric.png",
  levelCap: 78, // Abomasnow is the highest
  team: [
    {
      species: "Aurorus",
      level: 75,
      ability: "Snow Warning",
      item: "Icy Rock",
      IVs: 31,
      moves: ["Blizzard", "Earth Power", "Power Gem", "Protect"]
    },
    {
      species: "Jynx",
      level: 75,
      ability: "Dry Skin",
      item: "Life Orb",
      IVs: 31,
      moves: ["Lovely Kiss", "Psychic", "Blizzard", "Energy Ball"]
    },
    {
      species: "Froslass",
      level: 75,
      ability: "Snow Cloak",
      item: "Bright Powder",
      IVs: 31,
      moves: ["Blizzard", "Thunderbolt", "Shadow Ball", "Psychic"]
    },
    {
      species: "Beartic",
      level: 75,
      ability: "Snow Cloak",
      item: "Sitrus Berry",
      IVs: 31,
      moves: ["Icicle Crash", "Close Combat", "Waterfall", "Protect"]
    },
    {
      species: "Avalugg",
      level: 77,
      ability: "Sturdy",
      item: "Leftovers",
      IVs: 31,
      moves: ["Protect", "Recover", "Avalanche", "Crunch"]
    },
    {
      species: "Abomasnow",
      level: 78,
      ability: "Snow Warning",
      item: "Abomasite",
      IVs: 31,
      moves: ["Blizzard", "Giga Drain", "Focus Blast", "Ice Shard"]
    }
  ],
  storyBefore: "Pokémon Village",
  storyAfter: "Route 21 (Dernière Way)"
},
  // 34. Calem/Serena – Victory Road (ALL starter/player combos)
  {
    id: "calem-serena-victory-road",
    name: "Calem/Serena",
    location: "Victory Road",
    sprite: "serena-calem.png",
    levelCap: 78,
    conditionalTeams: {
      "Chespin_Serena": [
        {
          species: "Meowstic",
          level: 76,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Jolteon",
          level: 76,
          ability: "Volt Absorb",
          item: "Air Balloon",
          IVs: 31,
          moves: ["Thunder", "Signal Beam", "Shadow Ball", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 77,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Double-Edge", "Power-Up Punch", "Sucker Punch", "Earthquake"]
        },
        {
          species: "Clefable",
          level: 77,
          ability: "Unaware",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Stealth Rock", "Thunder Wave", "Soft-Boiled"]
        },
        {
          species: "Celebi",
          level: 76,
          ability: "Natural Cure",
          item: "Salac Berry",
          IVs: 31,
          moves: ["Earth Power", "Giga Drain", "Nasty Plot", "Baton Pass"]
        },
        {
          species: "Dragonite",
          level: 77,
          ability: "Multiscale",
          item: "Lum Berry",
          IVs: 31,
          moves: ["Dragon Dance", "Earthquake", "Outrage", "Waterfall"]
        },
        {
          species: "Delphox",
          level: 78,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Psychic", "Fire Blast", "Thunderbolt", "Aura Sphere"]
        }
      ],
      "Fennekin_Serena": [
        {
          species: "Meowstic",
          level: 76,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Flareon",
          level: 76,
          ability: "Guts",
          item: "Toxic Orb",
          IVs: 31,
          moves: ["Flare Blitz", "Superpower", "Quick Attack", "Protect"]
        },
        {
          species: "Kangaskhan",
          level: 77,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Double-Edge", "Power-Up Punch", "Sucker Punch", "Earthquake"]
        },
        {
          species: "Clefable",
          level: 77,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Stealth Rock", "Soft-Boiled", "Thunder Wave"]
        },
        {
          species: "Victini",
          level: 76,
          ability: "Victory Star",
          item: "Expert Belt",
          IVs: 31,
          moves: ["V-create", "Bolt Strike", "Glaciate", "Grass Knot"]
        },
        {
          species: "Dragonite",
          level: 77,
          ability: "Multiscale",
          item: "Lum Berry",
          IVs: 31,
          moves: ["Dragon Dance", "Outrage", "Thunder Punch", "Earthquake"]
        },
        {
          species: "Scizor",
          level: 76,
          ability: "Technician",
          item: "Leftovers",
          IVs: 31,
          moves: ["Bullet Punch", "U-turn", "Knock Off", "Roost"]
        },
        {
          species: "Greninja",
          level: 78,
          ability: "Protean",
          item: "Life Orb",
          IVs: 31,
          moves: ["Hydro Pump", "Gunk Shot", "Ice Beam", "Extrasensory"]
        }
      ],
      "Froakie_Serena": [
        {
          species: "Meowstic",
          level: 76,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Vaporeon",
          level: 76,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Scald", "Acid Armor", "Aqua Ring", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 77,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Double-Edge", "Power-Up Punch", "Sucker Punch", "Earthquake"]
        },
        {
          species: "Clefable",
          level: 77,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Stealth Rock", "Rain Dance", "Thunder Wave"]
        },
        {
          species: "Manaphy",
          level: 76,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Scald", "Ice Beam", "Tail Glow", "Energy Ball"]
        },
        {
          species: "Dragonite",
          level: 77,
          ability: "Multiscale",
          item: "Lum Berry",
          IVs: 31,
          moves: ["Dragon Dance", "Outrage", "Earthquake", "Hurricane"]
        },
        {
          species: "Scizor",
          level: 76,
          ability: "Technician",
          item: "Life Orb",
          IVs: 31,
          moves: ["Bullet Punch", "U-turn", "Strength", "Swords Dance"]
        },
        {
          species: "Chesnaught",
          level: 78,
          ability: "Bulletproof",
          item: "White Herb",
          IVs: 31,
          moves: ["Seed Bomb", "Drain Punch", "Stone Edge", "Shell Smash"]
        }
      ],
      "Chespin_Calem": [
        {
          species: "Meowstic",
          level: 76,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Jolteon",
          level: 76,
          ability: "Volt Absorb",
          item: "Air Balloon",
          IVs: 31,
          moves: ["Thunder", "Signal Beam", "Shadow Ball", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 77,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Double-Edge", "Power-Up Punch", "Sucker Punch", "Earthquake"]
        },
        {
          species: "Clefable",
          level: 77,
          ability: "Unaware",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Stealth Rock", "Thunder Wave", "Soft-Boiled"]
        },
        {
          species: "Celebi",
          level: 76,
          ability: "Natural Cure",
          item: "Salac Berry",
          IVs: 31,
          moves: ["Earth Power", "Giga Drain", "Nasty Plot", "Baton Pass"]
        },
        {
          species: "Dragonite",
          level: 77,
          ability: "Multiscale",
          item: "Lum Berry",
          IVs: 31,
          moves: ["Dragon Dance", "Earthquake", "Outrage", "Waterfall"]
        },
        {
          species: "Delphox",
          level: 78,
          ability: "Magic Guard",
          item: "Life Orb",
          IVs: 31,
          moves: ["Psychic", "Fire Blast", "Thunderbolt", "Aura Sphere"]
        }
      ],
      "Fennekin_Calem": [
        {
          species: "Meowstic",
          level: 76,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Flareon",
          level: 76,
          ability: "Guts",
          item: "Toxic Orb",
          IVs: 31,
          moves: ["Flare Blitz", "Superpower", "Quick Attack", "Protect"]
        },
        {
          species: "Kangaskhan",
          level: 77,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Double-Edge", "Power-Up Punch", "Sucker Punch", "Earthquake"]
        },
        {
          species: "Clefable",
          level: 77,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Stealth Rock", "Soft-Boiled", "Thunder Wave"]
        },
        {
          species: "Victini",
          level: 76,
          ability: "Victory Star",
          item: "Expert Belt",
          IVs: 31,
          moves: ["V-create", "Bolt Strike", "Glaciate", "Grass Knot"]
        },
        {
          species: "Dragonite",
          level: 77,
          ability: "Multiscale",
          item: "Lum Berry",
          IVs: 31,
          moves: ["Dragon Dance", "Outrage", "Thunder Punch", "Earthquake"]
        },
        {
          species: "Scizor",
          level: 76,
          ability: "Technician",
          item: "Leftovers",
          IVs: 31,
          moves: ["Bullet Punch", "U-turn", "Knock Off", "Roost"]
        },
        {
          species: "Greninja",
          level: 78,
          ability: "Protean",
          item: "Life Orb",
          IVs: 31,
          moves: ["Hydro Pump", "Gunk Shot", "Ice Beam", "Extrasensory"]
        }
      ],
      "Froakie_Calem": [
        {
          species: "Meowstic",
          level: 76,
          ability: "Prankster",
          item: "Sitrus Berry",
          IVs: 31,
          moves: ["Psychic", "Thunder Wave", "Calm Mind", "Shadow Ball"]
        },
        {
          species: "Vaporeon",
          level: 76,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Scald", "Acid Armor", "Aqua Ring", "Baton Pass"]
        },
        {
          species: "Kangaskhan",
          level: 77,
          ability: "Scrappy",
          item: "Kangaskhanite",
          IVs: 31,
          moves: ["Double-Edge", "Power-Up Punch", "Sucker Punch", "Earthquake"]
        },
        {
          species: "Clefable",
          level: 77,
          ability: "Magic Guard",
          item: "Leftovers",
          IVs: 31,
          moves: ["Moonblast", "Stealth Rock", "Rain Dance", "Thunder Wave"]
        },
        {
          species: "Manaphy",
          level: 76,
          ability: "Hydration",
          item: "Leftovers",
          IVs: 31,
          moves: ["Scald", "Ice Beam", "Tail Glow", "Energy Ball"]
        },
        {
          species: "Dragonite",
          level: 77,
          ability: "Multiscale",
          item: "Lum Berry",
          IVs: 31,
          moves: ["Dragon Dance", "Outrage", "Earthquake", "Hurricane"]
        },
        {
          species: "Scizor",
          level: 76,
          ability: "Technician",
          item: "Life Orb",
          IVs: 31,
          moves: ["Bullet Punch", "U-turn", "Strength", "Swords Dance"]
        },
        {
          species: "Chesnaught",
          level: 78,
          ability: "Bulletproof",
          item: "White Herb",
          IVs: 31,
          moves: ["Seed Bomb", "Drain Punch", "Stone Edge", "Shell Smash"]
        }
      ]
    },
    storyBefore: "Victory Road",
    storyAfter: "Unknown Dungeon (Post-Game)"
  },
  // 35. Malva – Elite Four
  {
  id: "elite-four-malva",
  name: "Elite Four Malva",
  location: "Pokémon League",
  sprite: "malva.png",
  levelCap: 82, // Talonflame & Charizard are the highest
  team: [
    {
      species: "Ninetales",
      level: 80,
      ability: "Drought",
      item: "Heat Rock",
      IVs: 31,
      moves: ["Heat Wave", "Solar Beam", "Will-O-Wisp", "Dark Pulse"]
    },
    {
      species: "Typhlosion",
      level: 80,
      ability: "Flash Fire",
      item: "Choice Scarf",
      IVs: 31,
      moves: ["Eruption", "Focus Blast", "Earth Power"]
    },
    {
      species: "Chandelure",
      level: 80,
      ability: "Flame Body",
      item: "Air Balloon",
      IVs: 31,
      moves: ["Heat Wave", "Shadow Ball", "Solar Beam", "Protect"]
    },
    {
      species: "Talonflame",
      level: 82,
      ability: "Gale Wings",
      item: "White Herb",
      IVs: 31,
      moves: ["Brave Bird", "Overheat", "Roost", "Will-O-Wisp"]
    },
    {
      species: "Heatran",
      level: 80,
      ability: "Flash Fire",
      item: "Life Orb",
      IVs: 31,
      moves: ["Heat Wave", "Rock Slide", "Dragon Pulse", "Earth Power"]
    },
    {
      species: "Charizard",
      level: 82,
      ability: "Blaze",
      item: "Charizardite Y",
      IVs: 31,
      moves: ["Heat Wave", "Solar Beam", "Air Slash", "Dragon Pulse"]
    }
  ],
  storyBefore: "Victory Road",
  storyAfter: "Unknown Dungeon (Post-Game)"
},

  // 36. Siebold – Elite Four
  {
  id: "elite-four-siebold",
  name: "Elite Four Siebold",
  location: "Pokémon League",
  sprite: "siebold.png",
  levelCap: 82, // Barbaracle & Blastoise are the highest
  team: [
    {
      species: "Kingdra",
      level: 80,
      ability: "Swift Swim",
      item: "Life Orb",
      IVs: 31,
      moves: ["Muddy Water", "Ice Beam", "Dragon Pulse", "Flash Cannon"]
    },
    {
      species: "Politoed",
      level: 80,
      ability: "Drizzle",
      item: "Damp Rock",
      IVs: 31,
      moves: ["Surf", "Psychic", "Rain Dance", "Protect"]
    },
    {
      species: "Ludicolo",
      level: 80,
      ability: "Swift Swim",
      item: "Absorb Bulb",
      IVs: 31,
      moves: ["Surf", "Energy Ball", "Focus Blast", "Ice Beam"]
    },
    {
      species: "Barbaracle",
      level: 82,
      ability: "Tough Claws",
      item: "White Herb",
      IVs: 31,
      moves: ["Shell Smash", "Rock Slide", "Razor Shell", "Poison Jab"]
    },
    {
      species: "Gyarados",
      level: 80,
      ability: "Intimidate",
      item: "Wacan Berry",
      IVs: 31,
      moves: ["Waterfall", "Bounce", "Dragon Dance", "Protect"]
    },
    {
      species: "Blastoise",
      level: 82,
      ability: "Rain Dish",
      item: "Blastoisinite",
      IVs: 31,
      moves: ["Dark Pulse", "Aura Sphere", "Dragon Pulse", "Muddy Water"]
    }
  ],
  storyBefore: "Victory Road",
  storyAfter: "Unknown Dungeon (Post-Game)"
},
  // 37. Wikstrom – Elite Four
  {
  id: "elite-four-wikstrom",
  name: "Elite Four Wikstrom",
  location: "Pokémon League",
  sprite: "wikstrom.png",
  levelCap: 82, // Aggron & Aegislash highest
  team: [
    {
      species: "Klefki",
      level: 80,
      ability: "Prankster",
      item: "Air Balloon",
      IVs: 31,
      moves: ["Dazzling Gleam", "Foul Play", "Swagger", "Thunder Wave"]
    },
    {
      species: "Empoleon",
      level: 80,
      ability: "Torrent",
      item: "Petaya Berry",
      IVs: 31,
      moves: ["Agility", "Surf", "Ice Beam", "Grass Knot"]
    },
    {
      species: "Ferrothorn",
      level: 80,
      ability: "Iron Barbs",
      item: "Rocky Helmet",
      IVs: 31,
      moves: ["Power Whip", "Bulldoze", "Leech Seed", "Protect"]
    },
    {
      species: "Aegislash",
      level: 82,
      ability: "Stance Change",
      item: "Weakness Policy",
      IVs: 31,
      moves: ["King's Shield", "Sacred Sword", "Shadow Ball", "Flash Cannon"]
    },
    {
      species: "Escavalier",
      level: 80,
      ability: "Overcoat",
      item: "Leftovers",
      IVs: 31,
      moves: ["Swords Dance", "Megahorn", "Iron Head", "Drill Run"]
    },
    {
      species: "Aggron",
      level: 82,
      ability: "Sturdy",
      item: "Aggronite",
      IVs: 31,
      moves: ["Heavy Slam", "Earthquake", "Stone Edge", "Ice Punch"]
    }
  ],
  storyBefore: "Victory Road",
  storyAfter: "Unknown Dungeon (Post-Game)"
},
  // 38. Drasna – Elite Four
  {
  id: "elite-four-drasna",
  name: "Elite Four Drasna",
  location: "Pokémon League",
  sprite: "drasna.png",
  levelCap: 82, // Noivern/Charizard highest
  team: [
    {
      species: "Hydreigon",
      level: 80,
      ability: "Levitate",
      item: "Choice Scarf",
      IVs: 31,
      moves: ["Dragon Pulse", "Dark Pulse", "Fire Blast", "U-turn"]
    },
    {
      species: "Salamence",
      level: 80,
      ability: "Moxie",
      item: "Roseli Berry",
      IVs: 31,
      moves: ["Outrage", "Earthquake", "Iron Tail", "Fire Blast"]
    },
    {
      species: "Latias",
      level: 80,
      ability: "Levitate",
      item: "Soul Dew",
      IVs: 31,
      moves: ["Calm Mind", "Roost", "Dragon Pulse", "Psyshock"]
    },
    {
      species: "Noivern",
      level: 82,
      ability: "Infiltrator",
      item: "Focus Sash",
      IVs: 31,
      moves: ["Air Slash", "Dragon Pulse", "Flamethrower", "Nasty Plot"]
    },
    {
      species: "Dragalge",
      level: 80,
      ability: "Adaptability",
      item: "Assault Vest",
      IVs: 31,
      moves: ["Gunk Shot", "Draco Meteor", "Focus Blast", "Scald"]
    },
    {
      species: "Charizard",
      level: 82,
      ability: "Blaze",
      item: "Charizardite X",
      IVs: 31,
      moves: ["Dragon Dance", "Dragon Claw", "Flare Blitz", "Brick Break"]
    }
  ],
  storyBefore: "Victory Road",
  storyAfter: "Unknown Dungeon (Post-Game)"
},
  // 39. Diantha – Champion
  {
  id: "champion-diantha",
  name: "Champion Diantha",
  location: "Pokémon League",
  sprite: "diantha.png",
  levelCap: 87, // Gardevoir highest
  team: [
    {
      species: "Forretress",
      level: 85,
      ability: "Sturdy",
      item: "Red Card",
      IVs: 31,
      moves: ["Sticky Web", "Stealth Rock", "Counter", "Earthquake"]
    },
    {
      species: "Blaziken",
      level: 85,
      ability: "Speed Boost",
      item: "Lum Berry",
      IVs: 31,
      moves: ["High Jump Kick", "Fire Blast", "Stone Edge", "Work Up"]
    },
    {
      species: "Milotic",
      level: 85,
      ability: "Multiscale",
      item: "Leftovers",
      IVs: 31,
      moves: ["Scald", "Ice Beam", "Recover", "Dragon Tail"]
    },
    {
      species: "Gourgeist-Super",
      level: 85,
      ability: "Flash Fire",
      item: "Life Orb",
      IVs: 31,
      moves: ["Shadow Ball", "Giga Drain", "Fire Blast", "Psychic"]
    },
    {
      species: "Tyranitar",
      level: 86,
      ability: "Sand Stream",
      item: "Chople Berry",
      IVs: 31,
      moves: ["Stone Edge", "Crunch", "Earthquake", "Dragon Dance"]
    },
    {
      species: "Gardevoir",
      level: 87,
      ability: "Trace",
      item: "Gardevoirite",
      IVs: 31,
      moves: ["Hyper Voice", "Psyshock", "Shadow Ball", "Focus Blast"]
    }
  ],
  storyBefore: "Victory Road",
  storyAfter: "Unknown Dungeon (Post-Game)"
},
  // 40. AZ – Lumiose City
{
  id: "az-lumiose",
  name: "Pokémon Trainer AZ",
  location: "Lumiose City",
  sprite: "az.png",
  levelCap: 86, // Highest: Aerodactyl
  team: [
    {
      species: "Bronzong",
      level: 85,
      ability: "Heatproof",
      item: "Iron Ball",
      IVs: 31,
      moves: ["Gyro Ball", "Grass Knot", "Earthquake", "Trick Room"]
    },
    {
      species: "Torkoal",
      level: 85,
      ability: "Shell Armor",
      item: "Life Orb",
      IVs: 31,
      moves: ["Overheat", "Steam Eruption", "Earthquake", "Shell Smash"]
    },
    {
      species: "Golurk",
      level: 85,
      ability: "Iron Fist",
      item: "Assault Vest",
      IVs: 31,
      moves: ["Drain Punch", "Shadow Punch", "Earthquake", "Ice Punch"]
    },
    {
      species: "Sigilyph",
      level: 85,
      ability: "Magic Guard",
      item: "Leftovers",
      IVs: 31,
      moves: ["Air Slash", "Heat Wave", "Cosmic Power", "Roost"]
    },
    {
      species: "Aerodactyl",
      level: 86,
      ability: "Pressure",
      item: "Aerodactylite",
      IVs: 31,
      moves: ["Aerial Ace", "Return", "Earthquake"]
    }
  ],
  storyBefore: "Victory Road",
  storyAfter: "Unknown Dungeon (Post-Game)"
},
];

export default bosses;