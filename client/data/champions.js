var champs = [
  {"champId" : "1", "name" : "Aatrox", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "2", "name" : "Ahri", "primaryRole": "mage", "secondaryRole": "assassin", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "3", "name" : "Akali", "primaryRole": "assassin", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : "top"},
  {"champId" : "4", "name" : "Alistar", "primaryRole": "tank", "secondaryRole": "support", "primaryPosition" : "support", "secondaryPosition" : "jungle"},
  {"champId" : "5", "name" : "Amumu", "primaryRole": "tank", "secondaryRole": "mage", "primaryPosition" : "jungle", "secondaryPosition" : "support"},
  {"champId" : "6", "name" : "Anivia", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "7", "name" : "Annie", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : "support"},
  {"champId" : "8", "name" : "Ashe", "primaryRole": "marksman", "secondaryRole": "support", "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "9", "name" : "Azir", "primaryRole": "mage", "secondaryRole": "marksman", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "10", "name" : "Bard", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "11", "name" : "Blitzcrank", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "12", "name" : "Brand", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "13", "name" : "Braum", "primaryRole": "support", "secondaryRole": "tank", "primaryPosition" : "support", "secondaryPosition" : "top"},
  {"champId" : "14", "name" : "Caitlyn", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "15", "name" : "Cassiopeia", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : "top"},
  {"champId" : "16", "name" : "ChoGath", "primaryRole": "tank", "secondaryRole": "mage", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "17", "name" : "Corki", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : "middle"},
  {"champId" : "18", "name" : "Darius", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "19", "name" : "Diana", "primaryRole": "fighter", "secondaryRole": "mage", "primaryPosition" : "middle", "secondaryPosition" : "top"},
  {"champId" : "20", "name" : "DrMundo", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "21", "name" : "Draven", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "22", "name" : "Ekko", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "23", "name" : "Elise", "primaryRole": "mage", "secondaryRole": "fighter", "primaryPosition" : "middle", "secondaryPosition" : "jungle"},
  {"champId" : "24", "name" : "Evelynn", "primaryRole": "assassin", "secondaryRole": "mage", "primaryPosition" : "jungle", "secondaryPosition" : null},
  {"champId" : "25", "name" : "Ezreal", "primaryRole": "marksman", "secondaryRole": "mage", "primaryPosition" : "bottom", "secondaryPosition" : "middle"},
  {"champId" : "26", "name" : "Fiddlesticks", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : "support"},
  {"champId" : "27", "name" : "Fiora", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "28", "name" : "Fizz", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "middle", "secondaryPosition" : "jungle"},
  {"champId" : "29", "name" : "Galio", "primaryRole": "tank", "secondaryRole": "mage", "primaryPosition" : "top", "secondaryPosition" : "middle"},
  {"champId" : "30", "name" : "Gangplank", "primaryRole": "fighter", "secondaryRole": null, "primaryPosition" : "top", "secondaryPosition" : null},
  {"champId" : "31", "name" : "Garen", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "32", "name" : "Gnar", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "33", "name" : "Gragas", "primaryRole": "fighter", "secondaryRole": "mage", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "34", "name" : "Graves", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "35", "name" : "Hecarim", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "36", "name" : "Heimerdinger", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "37", "name" : "Illaoi", "primaryRole:": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "38", "name" : "Irelia", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "39", "name" : "Janna", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "40", "name" : "JarvanIV", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "41", "name" : "Jax", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "42", "name" : "Jayce", "primaryRole": "marksman", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : null},
  {"champId" : "43", "name" : "Jinx", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "44", "name" : "Kalista", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "45", "name" : "Karma", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : "support"},
  {"champId" : "46", "name" : "Karthus", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "47", "name" : "Kassadin", "primaryRole": "assassin", "secondaryRole": "mage", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "48", "name" : "Katarina", "primaryRole": "assassin", "secondaryRole": "mage", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "49", "name" : "Kayle", "primaryRole": "fighter", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : "support"},
  {"champId" : "50", "name" : "Kennen", "primaryRole": "mage", "secondaryRole": "marksman", "primaryPosition" : "middle", "secondaryPosition" : "top"},
  {"champId" : "51", "name" : "Khazix", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "52", "name" : "Kindred", "primaryRole" : "marksman", "secondaryRole" : null, "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "53", "name" : "KogMaw", "primaryRole": "marksman", "secondaryRole": "mage", "primaryPosition" : "bottom", "secondaryPosition" : "middle"},
  {"champId" : "54", "name" : "LeBlanc", "primaryRole": "assassin", "secondaryRole": "mage", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "55", "name" : "LeeSin", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "56", "name" : "Leona", "primaryRole": "tank", "secondaryRole": "support", "primaryPosition" : "support", "secondaryPosition" : "top"},
  {"champId" : "57", "name" : "Lissandra", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "58", "name" : "Lucian", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "59", "name" : "Lulu", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "60", "name" : "Lux", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : "support"},
  {"champId" : "61", "name" : "Malphite", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : "support"},
  {"champId" : "62", "name" : "Malzahar", "primaryRole": "mage", "secondaryRole": "assassin", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "63", "name" : "Maokai", "primaryRole": "tank", "secondaryRole": "mage", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "64", "name" : "MasterYi", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "65", "name" : "MissFortune", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "66", "name" : "Mordekaiser", "primaryRole": "fighter", "secondaryRole": "mage", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "67", "name" : "Morgana", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : "support"},
  {"champId" : "68", "name" : "Nami", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "69", "name" : "Nasus", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : null},
  {"champId" : "70", "name" : "Nautilus", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "support", "secondaryPosition" : "jungle"},
  {"champId" : "71", "name" : "Nidalee", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "72", "name" : "Nocturne", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "73", "name" : "Nunu", "primaryRole": "support", "secondaryRole": "fighter", "primaryPosition" : "support", "secondaryPosition" : "jungle"},
  {"champId" : "74", "name" : "Olaf", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "75", "name" : "Orianna", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "76", "name" : "Pantheon", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "77", "name" : "Poppy", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "78", "name" : "Quinn", "primaryRole": "marksman", "secondaryRole": "fighter", "primaryPosition" : "bottom", "secondaryPosition" : "top"},
  {"champId" : "79", "name" : "Rammus", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "80", "name" : "RekSai", "primaryRole": "fighter", "secondaryRole": null, "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "81", "name" : "Renekton", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "82", "name" : "Rengar", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "83", "name" : "Riven", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "84", "name" : "Rumble", "primaryRole": "fighter", "secondaryRole": "mage", "primaryPosition" : "top", "secondaryPosition" : "middle"},
  {"champId" : "85", "name" : "Ryze", "primaryRole": "mage", "secondaryRole": "fighter", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "86", "name" : "Sejuani", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "87", "name" : "Shaco", "primaryRole": "assassin", "secondaryRole": null, "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "88", "name" : "Shen", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : "support"},
  {"champId" : "89", "name" : "Shyvana", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "90", "name" : "Singed", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : null},
  {"champId" : "91", "name" : "Sion", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "92", "name" : "Sivir", "primaryRole": "marksman", "secondaryRole": null, "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "93", "name" : "Skarner", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "94", "name" : "Sona", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "95", "name" : "Soraka", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "96", "name" : "Swain", "primaryRole": "mage", "secondaryRole": "fighter", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "97", "name" : "Syndra", "primaryRole": "mage", "secondaryRole": "support", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "98", "name" : "TahmKench", "primaryRole": "support", "secondaryRole": "tank", "primaryPosition" : "support", "secondaryPosition" : "top"},
  {"champId" : "99", "name" : "Talon", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "100", "name" : "Taric", "primaryRole": "support", "secondaryRole": "fighter", "primaryPosition" : "support", "secondaryPosition" : "top"},
  {"champId" : "101", "name" : "Teemo", "primaryRole": "marksman", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "support"},
  {"champId" : "102", "name" : "Thresh", "primaryRole": "support", "secondaryRole": "fighter", "primaryPosition" : "support", "secondaryPosition" : null},
  {"champId" : "103", "name" : "Tristana", "primaryRole": "marksman", "secondaryRole": "assassin", "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "104", "name" : "Trundle", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "105", "name" : "Tryndamere", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "106", "name" : "TwistedFate", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : "jungle"},
  {"champId" : "107", "name" : "Twitch", "primaryRole": "marksman", "secondaryRole": "assassin", "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "108", "name" : "Udyr", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "109", "name" : "Urgot", "primaryRole": "marksman", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : null},
  {"champId" : "110", "name" : "Varus", "primaryRole": "marksman", "secondaryRole": "mage", "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "111", "name" : "Vayne", "primaryRole": "marksman", "secondaryRole": "assassin", "primaryPosition" : "bottom", "secondaryPosition" : null},
  {"champId" : "112", "name" : "Veigar", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "113", "name" : "Velkoz", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : "support"},
  {"champId" : "114", "name" : "Vi", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "115", "name" : "Viktor", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "116", "name" : "Vladimir", "primaryRole": "mage", "secondaryRole": "tank", "primaryPosition" : "middle", "secondaryPosition" : "top"},
  {"champId" : "117", "name" : "Volibear", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "118", "name" : "Warwick", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "119", "name" : "Wukong", "primaryRole": "fighter", "secondaryRole": "tank", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "120", "name" : "Xerath", "primaryRole": "mage", "secondaryRole": "assassin", "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "121", "name" : "XinZhao", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "jungle"},
  {"champId" : "122", "name" : "Yasuo", "primaryRole": "fighter", "secondaryRole": "assassin", "primaryPosition" : "top", "secondaryPosition" : "middle"},
  {"champId" : "123", "name" : "Yorick", "primaryRole": "fighter", "secondaryRole": "mage", "primaryPosition" : "top", "secondaryPosition" : null},
  {"champId" : "124", "name" : "Zac", "primaryRole": "tank", "secondaryRole": "fighter", "primaryPosition" : "jungle", "secondaryPosition" : "top"},
  {"champId" : "125", "name" : "Zed", "primaryRole": "assassin", "secondaryRole": "fighter", "primaryPosition" : "top", "secondaryPosition" : "middle"},
  {"champId" : "126", "name" : "Ziggs", "primaryRole": "mage", "secondaryRole": null, "primaryPosition" : "middle", "secondaryPosition" : null},
  {"champId" : "127", "name" : "Zilean", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : "middle"},
  {"champId" : "128", "name" : "Zyra", "primaryRole": "support", "secondaryRole": "mage", "primaryPosition" : "support", "secondaryPosition" : "middle"}
];