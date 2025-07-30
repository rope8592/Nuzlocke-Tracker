const defaultEncounters = [
  {
    area: 'Aquacorde Town',
    status: 'Available',
    pokemon: {
      gift: ['Froakie', 'Fennekin', 'Chespin']
    }
  },
  {
    area: 'Route 1',
    status: 'Available',
    pokemon: {
      none: ['No encounters']
    }
  },
   {
    area: 'Avance Trail',
    status: 'Available',
    pokemon: {
      grass: [
        'Bunnelby', 'Fletchling', 'Pidgey', 'Zigzagoon', 'Kricketot', 'Poochyena', 'Patrat', 'Purrloin', 'Weedle', 'Bonsly', 'Surskit'
      ]
    }
   },
   {
    area: 'Santalune Forest',
    status: 'Available',
    pokemon: {
      grass: [
        'Wurmple', 'Scatterbug', 'Cottonee', 'Petilil', 'Shroomish', 'Pansage', 'Pansear', 'Panpour', 'Sewaddle', 'Pikachu', 'Slakoth'
      ]
    }
  },
  {
    area: 'Route 3',
    status: 'Available',
    pokemon: {
      grass: [
        'Rattata', 'Shinx', 'Bidoof', 'Caterpie', 'Pidove', 'Tympole', 'Lillipup', 'Hoothoot', 'Jigglypuff', 'Smoochum', 'Zorua'
      ],
      oldRod: ['Magikarp', 'Corphish', 'Goldeen'],
      goodRod: ['Goldeen', 'Corphish', 'Goldeen'],
      superRod: ['Gyarados', 'Seaking', 'Crawdaunt'],
      surf: ['Masquerain', 'Mantine', 'Azumarill']
    }
  },
  {
    area: 'Route 22 (Détourner Way)',
    status: 'Available',
    pokemon: {
      grass: [
        'Spearow', 'Mankey', 'Litleo', 'Starly', 'Psyduck', 'Lotad', 'Seedot', 'Azurill', 'Farfetch’d', 'Dunsparce', 'Riolu'
      ],
      yellowFlowers: [
        'Bibarel', 'Golduck', 'Azumarill', 'Pyroar', 'Diggersby', 'Farfetch’d', 'Dunsparce', 'Lucario', 'Deoxys'
      ],
      oldRod: ['Magikarp', 'Carvanha'],
      goodRod: ['Goldeen', 'Carvanha'],
      superRod: ['Gyarados', 'Seaking', 'Sharpedo'],
      surf: ['Psyduck', 'Azumarill']
    }
  },
  {
    area: 'Route 4 (Parterre Way)',
    status: 'Available',
    pokemon: {
      yellowFlowers: [
        'Flabébé (Yellow)', 'Sunkern', 'Togepi', 'Combee', 'Munna', 'Skitty', 'Ralts', 'Flabébé (Blue)', 'Flabébé (White)'
      ],
      redFlowers: [
        'Flabébé (Red)', 'Natu', 'Buneary', 'Spinda', 'Ledyba', 'Budew', 'Happiny', 'Glammeow', 'Flabébé (Orange)', 'Flabébé (Green)'
      ]
    }
  },
{
  area: "Lumiose City",
  status: "Available",
  pokemon: {
    gift: ["Eevee", "Bulbasaur", "Charmander", "Squirtle", "Rotom"],
    oldRod: ["Magikarp"],
    goodRod: ["Gyarados", "Luvdisc"],
    superRod: ["Luvdisc", "Gyarados", "Basculin"],
    trade: ["Farfetch'd"]
  },
  levelCap: null // or whatever is appropriate
},
  {
    area: 'Route 5 (Versant Road)',
    status: 'Available',
    pokemon: {
      grass: [
        'Meowth', 'Blitzle', 'Skiddo', 'Furfrou', 'Pancham', 'Doduo', 'Phanpy', 'Abra', 'Plusle', 'Minun'
      ],
      purpleFlowers: [
        'Gulpin', 'Pancham', 'Skiddo', 'Blitzle', 'Elekid', 'Magby', 'Doduo', 'Abra', 'Minun', 'Plusle'
      ],
      horde: ['Cyndaquil', 'Scraggy', 'Plusle', 'Minun']
    }
  },
  {
    area: 'Route 6 (Palais Lane)',
    status: 'Available',
    pokemon: {
      tallGrass: [
        'Espurr', 'Oddish', 'Aipom', 'Tangela', 'Sentret', 'Venonat', 'Nincada', 'Ekans', 'Honedge', 'Kecleon'
      ]
    }
  },
  {
    area: 'Parfum Palace',
    status: 'Available',
    pokemon: {
      oldRod: ['Feebas', 'Dratini', 'Magikarp'],
      goodRod: ['Feebas', 'Corphish', 'Dragonair'],
      superRod: ['Gyarados', 'Crawdaunt', 'Milotic']
    }
  },
  {
    area: 'Route 7 (Rivière Walk)',
    status: 'Available',
    pokemon: {
      grass: [
        'Croagunk', 'Smeargle', 'Buizel', 'Hoppip', 'Volbeat', 'Illumise', 'Ducklett', 'Flabébé'
      ],
      yellowFlowers: [
        'Shellos', 'Swirlix', 'Flabébé', 'Volbeat', 'Minccino', 'Swablu', 'Roselia', 'Croagunk'
      ],
      purpleFlowers: [
        'Shellos', 'Spritzee', 'Flabébé', 'Minccino', 'Illumise', 'Ducklett', 'Roselia', 'Croagunk', 'Munchlax'
      ],
      horde: ['Turtwig', 'Piplup', 'Roselia']
    }
  },
   {
    area: 'Connecting Cave: Zubat Roost',
    status: 'Available',
    pokemon: {
      cave: [
        'Zubat', 'Meditite', 'Whismur', 'Teddiursa', 'Lickitung', 'Aron', 'Axew', 'Larvitar'
      ],
      horde: ['Charmander', 'Drilbur', 'Axew']
    }
  },
    {
     area: 'Route 8 (Muraille Coast)',
    status: 'Available',
    pokemon: {
      grass: [
        'Drifloon', 'Spoink', 'Inkay', 'Taillow', 'Absol', 'Sneasel', 'Serviper', 'Bagon'
      ],
      yellowFlowers: [
        'Mienfoo', 'Absol', 'Inkay', 'Taillow', 'Gligar', 'Zangoose', 'Skarmory'
      ],
      rockSmash: ['Dwebble', 'Binacle'],
      oldRod: ['Clauncher', 'Skrelp'],
      goodRod: ['Skrelp', 'Clauncher'],
      superRod: ['Qwilfish', 'Clawitzer', 'Dragalge'],
      surf: ['Frillish', 'Wailmer', 'Tentacool'],
      horde: ['Chimchar', 'Zangoose', 'Serviper', 'Rufflet', 'Vullaby']
    }
  },
  {
    area: 'Ambrette Town',
    status: 'Available',
    pokemon: {
      rockSmash: ['Dwebble', 'Binacle'],
      oldRod: ['Luvdisc', 'Relicanth'],
      goodRod: ['Horsea', 'Relicanth'],
      superRod: ['Relicanth', 'Clawitzer', 'Seadra'],
      surf: ['Tentacool', 'Wailmer']
    }
  },
   {
    area: 'Route 9 (Spikes Passage)',
    status: 'Available',
    pokemon: {
      roughTerrain: [
        'Sandile', 'Hippopotas', 'Helioptile', 'Maractus', 'Cacnea', 'Torkoal', 'Numel', 'Larvesta'
      ]
    }
  },
  {
    area: 'Glittering Cave',
    status: 'Available',
    pokemon: {
      cave: [
        'Machop', 'Paras', 'Rhyhorn', 'Kangaskhan', 'Cubone', 'Spinarak', 'Solrock', 'Lunatone', 'Mawile', 'Druddigon'
      ],
      rockSmash: ['Dwebble', 'Onix']
    }
  },
  {
    area: 'Cyllage City',
    status: 'Available',
    pokemon: {
      rockSmash: ['Krabby', 'Onix', 'Dwebble'],
      oldRod: ['Staryu', 'Shellder'],
      goodRod: ['Horsea', 'Finneon', 'Relicanth'],
      superRod: ['Relicanth', 'Clawitzer', 'Seadra'],
      surf: ['Tentacool', 'Wailmer', 'Wingull']
    }
  },
   {
    area: 'Route 10 (Menhir Trail)',
    status: 'Available',
    pokemon: {
      grass: [
        'Hawlucha', 'Golett', 'Baltoy', 'Growlithe', 'Vulpix', 'Sigilyph', 'Nosepass', 'Elgyem', 'Emolga'
      ],
      yellowFlowers: [
        'Electrike', 'Houndour', 'Eevee', 'Yanma', 'Snubbull', 'Darumaka'
      ],
      horde: ['Tepig', 'Snivy', 'Tyrogue']
    }
  },
  {
    area: 'Route 11 (Miroir Way)',
    status: 'Available',
    pokemon: {
      grass: [
        'Hariyama', 'Joltik', 'Sawk', 'Throh', 'Staravia', 'Cherubi', 'Drowzee', 'Stunky', 'Nidorino', 'Nidorina', 'Dedenne'
      ],
      horde: ['Torchic', 'Nidoran♂/♀', 'Timburr']
    }
  },
   {
    area: 'Reflection Cave',
    status: 'Available',
    pokemon: {
      cave: [
        'Mr. Mime', 'Solosis', 'Roggenrola', 'Chingling', 'Carbink', 'Wobbuffet', 'Sableye', 'Gastly', 'Klink', 'Misdreavus', 'Bronzor', 'Beldum', 'Gothita', 'Meloetta', 'Diancie', 'Beldum', 'Noibat'
      ],
      horde: ['Mime Jr.', 'Clefairy', 'Roggenrola', 'Carbink', 'Tynamo']
    }
  },
  {
    area: 'Shalour City',
    status: 'Available',
    pokemon: {
      oldRod: ['Shellder', 'Staryu'],
      goodRod: ['Remoraid', 'Chinchou'],
      superRod: ['Alomomola', 'Octillery', 'Lanturn'],
      surf: ['Tentacool', 'Frillish', 'Mantyke']
    }
  },
  {
  area: 'Tower of Mastery',
  status: 'Available',
  pokemon: {
    gift: ['Lucario']
  }
},
  {
    area: 'Route 12 (Fourrage Road)',
    status: 'Available',
    pokemon: {
      grass: [
        'Slowpoke', 'Pachirisu', 'Scyther', 'Chatot', 'Ponyta', 'Miltank', 'Tauros', 'Exeggcute'
      ],
      yellowFlowers: [
        'Tauros', 'Miltank', 'Pinsir', 'Heracross', 'Chatot', 'Slowpoke', 'Exeggcute'
      ],
      rockSmash: ['Dwebble', 'Binacle'],
      oldRod: ['Remoraid', 'Clamperl'],
      goodRod: ['Remoraid', 'Clamperl'],
      superRod: ['Corsola', 'Octillery', 'Huntail'],
      surf: ['Tentacool', 'Frillish', 'Mantyke', 'Tentacool', 'Lapras'],
      horde: ['Mareep', 'Chikorita', 'Tauros', 'Miltank']
    }
  },
 {
    area: 'Azure Bay',
    status: 'Available',
    pokemon: {
      grass: [
        'Chatot', 'Slowpoke', 'Inkay', 'Exeggcute', 'Gastrodon', 'Spheal', 'Seal'
      ],
      rockSmash: ['Dwebble', 'Binacle', 'Krabby'],
      oldRod: ['Chinchou', 'Finneon'],
      goodRod: ['Lumineon', 'Lanturn', 'Alomomola'],
      superRod: ['Alomomola', 'Octillery', 'Lanturn'],
      surf: ['Pelipper', 'Frillish', 'Mantyke', 'Lapras', 'Manaphy'],
      horde: ['Oshawott', 'Slowpoke', 'Exeggcute']
    }
  },
  {
    area: 'Route 13 (Lumiose Badlands)',
    status: 'Available',
    pokemon: {
      roughTerrain: [
        'Dugtrio', 'Sandslash', 'Trapinch', 'Gible', 'Drilbur', 'Durant'
      ],
      rockSmash: ['Graveler', 'Slugma']
    }
  },
  {
    area: 'Route 14 (Laverre Nature Trail)',
    status: 'Available',
    pokemon: {
      grass: [
        'Skorupi', 'Arbok', 'Weepinbell', 'Pineco', 'Quagsire', 'Weezing', 'Karrablast', 'Shelmet', 'Carnivine', 'Haunter', 'Misdreavus'
      ],
      shallowWater: [
        'Quagsire', 'Goomy', 'Stunfisk', 'Muk', 'Karrablast', 'Shelmet', 'Haunter'
      ],
      oldRod: ['Poliwag', 'Barboach'],
      goodRod: ['Barboach', 'Poliwhirl', 'Whiscash'],
      superRod: ['Poliwhirl', 'Whiscash', 'Poliwrath'],
      surf: ['Quagsire', 'Stunfisk', 'Goomy'],
      horde: ['Totodile', 'Mudkip', 'Goomy']
    }
  },
  {
    area: 'Laverre City',
    status: 'Available',
    pokemon: {
      oldRod: ['Poliwag'],
      goodRod: ['Basculin', 'Poliwhirl'],
      superRod: ['Poliwhirl', 'Basculin', 'Poliwrath']
    }
  },
  {
    area: 'Route 15 (Brun Way)',
    status: 'Available',
    pokemon: {
      grass: [
        'Mightyena', 'Liepard', 'Castform', 'Stantler', 'Deerling', 'Pawniard', 'Watchog', 'Foongus', 'Girafarig', 'Klefki'
      ],
      redFlowers: [
        'Pawniard', 'Watchog', 'Liepard', 'Deino', 'Skorupi', 'Mightyena', 'Dusclops', 'Shuppet', 'Klefki'
      ],
      oldRod: ['Poliwag'],
      goodRod: ['Basculin', 'Poliwhirl'],
      superRod: ['Poliwhirl', 'Basculin', 'Politoed'],
      surf: ['Lombre', 'Floatzel'],
      horde: ['Murkrow', 'Treecko', 'Porygon']
    }
  },
  {
    area: 'Lost Hotel',
    status: 'Available',
    pokemon: {
      building: [
        'Magneton', 'Yamask', 'Litwick', 'Electrode', 'Spiritomb', 'Klefki', 'Hoopa'
      ]
    }
  },
  {
    area: 'Route 16 (Mélancolie Path)',
    status: 'Available',
    pokemon: {
      yellowFlowers: [
        'Skorupi', 'Phantump', 'Weepinbell', 'Bouffalant', 'Floatzel', 'Sunflora', 'Klefki'
      ],
      tallGrass: [
        'Pumpkaboo', 'Misdreavus', 'Foongus', 'Pumpkaboo', 'Tyrogue', 'Klefki', 'Pumpkaboo'
      ],
      oldRod: ['Poliwag'],
      goodRod: ['Basculin', 'Poliwhirl'],
      superRod: ['Poliwhirl', 'Basculin', 'Poliwhirl'],
      surf: ['Lombre', 'Floatzel', 'Palpitoad', 'Seismitoad'],
      horde: ['Squirtle', 'Bulbasaur', 'Tropius']
    }
  },
  {
    area: 'Frost Cavern',
    status: 'Available',
    pokemon: {
      outside: {
        oldRod: ['Poliwag'],
        goodRod: ['Basculin', 'Poliwhirl', 'Basculin'],
        superRod: ['Poliwhirl', 'Basculin', 'Poliwhirl'],
        surf: ['Dewgong', 'Floatzel', 'Poliwrath']
      },
      '1F': {
        cave: ['Piloswine', 'Bergmite', 'Beartic', 'Jynx', 'Haunter', 'Cryogonal'],
        horde: ['Vanillite', 'Cubchoo', 'Smoochum']
      },
      '2F': {
        cave: ['Piloswine', 'Bergmite', 'Sealeo', 'Beartic', 'Jynx', 'Haunter', 'Cryogonal'],
        oldRod: ['Poliwag', 'Seel'],
        goodRod: ['Basculin', 'Seel'],
        superRod: ['Dewgong', 'Basculin', 'Poliwhirl'],
        surf: ['Seel', 'Floatzel', 'Poliwhirl', 'Sealeo'],
        horde: ['Vanillite', 'Cubchoo', 'Smoochum']
      },
      '3F & Ice Rock Room': {
        cave: ['Piloswine', 'Bergmite', 'Beartic', 'Jynx', 'Haunter', 'Cryogonal', 'Kyurem'],
        horde: ['Snorunt', 'Cubchoo', 'Smoochum']
      }
    }
  },
   {
    area: 'Route 17 (Mamoswine Road)',
    status: 'Available',
    pokemon: {
      snow: ['Snover', 'Delibird', 'Sneasel', 'Abomasnow']
    }
  },
  {
  area: 'Team Flare Secret HQ',
  status: 'Available',
  pokemon: {
    static: ['Yveltal']
  }
},

  {
    area: 'Route 18 (Vallée Étroite Way)',
    status: 'Available',
    pokemon: {
      grass: ['Gurdurr', 'Torkoal', 'Larvesta', 'Sandslash', 'Lairon', 'Durant', 'Pupitar', 'Graveler', 'Heatmor'],
      redFlowers: ['Lairon', 'Sandslash', 'Pupitar', 'Torkoal', 'Gurdurr', 'Durant', 'Graveler', 'Heatmor'],
      rockSmash: ['Graveler', 'Shuckle'],
      horde: ['Fennekin', 'Durant', 'Heatmor']
    }
  },
   {
    area: 'Terminus Cave',
    status: 'Available',
    pokemon: {
      allAreas: {
        cave: ['Lairon', 'Sandshash', 'Pupitar', 'Durant', 'Graveler'],
        rockSmash: ['Graveler', 'Shuckle']
      },
      '1F': {
        cave: ['Genesect'],
        horde: ['Durant', 'Aron', 'Unown']
      },
      'B1F (Both Rooms)': {
        cave: ['Volcanion'],
        horde: ['Durant', 'Larvitar', 'Unown']
      },
      'B2F': {
        cave: ['Heatran'],
        horde: ['Durant', 'Sandshrew', 'Unown']
      },
      'Small Room, B1F (accessible from Route 18)': {
        cave: ['Regigigas'],
        horde: ['Durant', 'Excadrill', 'Unown']
      },
      'Small Room, 1F (accessible from Route 18)': {
        cave: ['Lairon', 'Sandshash', 'Pupitar', 'Durant', 'Graveler', 'Unown'],
        horde: ['Durant', 'Geodude', 'Unown']
      }
    }
  },
    {
    area: 'Couriway Town',
    status: 'Available',
    pokemon: {
      oldRod: ['Poliwag'],
      goodRod: ['Basculin', 'Poliwhirl', 'Basculin'],
      superRod: ['Poliwhirl', 'Basculin'],
      surf: ['Lombre', 'Floatzel']
    }
  },
   {
    area: 'Route 19 (Grande Vallée Way)',
    status: 'Available',
    pokemon: {
      yellowFlowers: ['Quagsire', 'Sliggoo', 'Weepinbell', 'Drapion', 'Karrablast', 'Shelmet', 'Haunter', 'Carnivine', 'Latias'],
      purpleFlowers: ['Drapion', 'Weepinbell', 'Sliggoo', 'Quagsire', 'Karrablast', 'Shelmet', 'Haunter', 'Carnivine', 'Latios'],
      shallowWater: ['Palpitoad', 'Sliggoo', 'Stunfisk', 'Karrablast', 'Shelmet', 'Haunter', 'Carnivine', 'Keldeo'],
      oldRod: ['Goomy'],
      goodRod: ['Barboach', 'Poliwhirl'],
      superRod: ['Poliwhirl', 'Whiscash', 'Politoed'],
      surf: ['Quagsire', 'Stunfisk', 'Sliggoo'],
      horde: ['Weepinbell', 'Gligar', 'Arbok']
    }
  },
   {
    area: 'Route 20 (Winding Woods)',
    status: 'Available',
    pokemon: {
      grass: ['Noctowl', 'Amoonguss', 'Jigglypuff', 'Misdreavus', 'Trevenant', 'Gothorita', 'Zoroark'],
      redFlowers: ['Amoonguss', 'Gothorita', 'Trevenant', 'Zoroark', 'Jigglypuff', 'Noctowl'],
      horde: ['Chespin', 'Trevenant', 'Sudowoodo']
    }
  },
  {
    area: 'Pokémon Village',
    status: 'Available',
    pokemon: {
      yellowFlowers: [
        'Ditto', 'Raikou', 'Suicune', 'Entei', 'Articuno',
        'Zapdos', 'Moltres', 'Celebi', 'Mew', 'Darkrai'
      ],
      purpleFlowers: [
        'Regirock', 'Regice', 'Registeel', 'Mesprit', 'Azelf',
        'Uxie', 'Cobalion', 'Virizion', 'Terrakion',
        'Shaymin', 'Jirachi', 'Cresselia'
      ],
      oldRod: ['Poliwhirl', 'Phione'],
      goodRod: ['Basculin', 'Poliwhirl', 'Basculin'],
      superRod: ['Poliwhirl', 'Basculin', 'Politoed'],
      surf: ['Lombre', 'Poliwhirl'],
      horde: ['Froakie', 'Ditto', 'Thundurus', 'Landorus', 'Tornadus']
    }
  },
  {
    area: 'Route 21 (Dernière Way)',
    status: 'Available',
    pokemon: {
      purpleFlowers: ['Floatzel', 'Altaria', 'Cherrim', 'Spinda', 'Ursaring', 'Scyther', 'Xerneas'],
      redFlowers: ['Ursaring', 'Altaria', 'Spinda', 'Scyther', 'Floatzel', 'Cherrim', 'Yveltal'],
      oldRod: ['Poliwag'],
      goodRod: ['Basculin', 'Dratini', 'Dragonair'],
      superRod: ['Dratini', 'Dragonair', 'Dragonite'],
      surf: ['Lombre', 'Floatzel'],
      horde: ['Spinda', 'Swablu', 'Scyther']
    }
  },
  {
    area: 'Victory Road',
    status: 'Available',
    pokemon: {
      '1F': {
        cave: ['Gurdurr', 'Graveler', 'Hariyama', 'Druddigon', 'Haunter', 'Lickitung', 'Zweilous'],
        rockSmash: ['Graveler', 'Shuckle'],
        oldRod: ['Poliwag'],
        goodRod: ['Basculin', 'Poliwhirl', 'Whiscash'],
        superRod: ['Poliwhirl', 'Basculin', 'Whiscash'],
        surf: ['Poliwhirl', 'Floatzel', 'Poliwrath'],
        horde: ['Deino', 'Floatzel', 'Lugia', 'Ho-Oh']
      },
      '2F': {
        cave: ['Gurdurr', 'Druddigon', 'Graveler', 'Lickitung', 'Donphan', 'Zweilous', 'Haunter'],
        rockSmash: ['Graveler', 'Shuckle'],
        horde: ['Phanpy', 'Graveler', 'Kyogre', 'Groudon', 'Rayquaza']
      },
      '3F': {
        cave: ['Gurdurr', 'Druddigon', 'Graveler', 'Zweilous', 'Lickitung', 'Haunter'],
        horde: ['Gurdurr', 'Lickitung', 'Dialga', 'Palkia', 'Giratina']
      },
      'Waterfall Area': {
        oldRod: ['Poliwag'],
        goodRod: ['Basculin', 'Poliwhirl'],
        superRod: ['Poliwhirl', 'Basculin', 'Poliwrath'],
        surf: ['Lombre', 'Floatzel', 'Ludicolo']
      },
      'Final Cave': {
        cave: ['Gurdurr', 'Graveler', 'Druddigon', 'Lickitung', 'Gabite', 'Haunter', 'Zweilous', 'Victini'],
        oldRod: ['Poliwag'],
        goodRod: ['Basculin', 'Poliwhirl'],
        superRod: ['Poliwhirl', 'Basculin', 'Poliwrath'],
        surf: ['Poliwhirl', 'Floatzel', 'Poliwrath'],
        horde: ['Haunter', 'Floatzel', 'Reshiram', 'Zekrom', 'Arceus']
      }
    }
  },
  {
    area: 'Unknown Dungeon (Post-Game)',
    status: 'Available',
    pokemon: {
      cave: ['Mewtwo']
    }
  },
  {
    area: 'Chamber of Emptiness (Post-Game)',
    status: 'Available',
    pokemon: {
      static: ['None – Only contains TM or Mega Stone']
    }
  },
 {
  area: "Azure Bay Cave",
  status: "Available",
  pokemon: {
    static: ["Articuno", "Zapdos", "Moltres"]
  }
}
];

export default defaultEncounters;
