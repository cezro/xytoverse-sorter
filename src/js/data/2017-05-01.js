dataSetVersion = "2017-05-01"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "1-26", key: "gd", tooltip: "The First 26 brilliance catalysts." },
      { name: "26-100", key: "ad" },
      { name: "101-200", key: "bd" },
      { name: "201-...", key: "cd" },
      { name: "PCs", tooltip: "Playable Characters", key: "pc" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Pollux",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885925931761836/Pollux.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Miu",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885924069478431/Miu.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Judgement",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886038011936898/Judgement.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Caliculus",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886029573001356/Caliculus.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Arthur Aiscen",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886038959853598/Arthur.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Glistantine",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886030747414658/Glistantine.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Kronicorlus",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886032135729323/Kronicorlus.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Calamity",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886039417028639/Calamity.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Heartha Lupin",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886031342997635/Heartha.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Lili Wilde",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886032634843330/Lili.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Marion Celeste",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885923469705296/Marion.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Tristan",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885928360263722/Tristan.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Ion",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886039794520165/Ion.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Promilia",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885926460248166/Promilia.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Jane Sue",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886040314609804/Jane.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Elena Moemii",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886030084710531/Elena.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Twilight Oyuyu",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885925336174592/Oyuyu.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Lisa",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886033452740738/Lisa.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Reon Feish",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885927101972520/Reon.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Shinata Line",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886033066860564/Line.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Hisume Ifumi",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886031720489020/Ifumi.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Liu Xingzu",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886033817636864/Liu.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Adversity",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886038448152777/Adversity.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Nono",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885924560224337/Nono.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Sapphire Malcour",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885927764660314/Sapphire.png",
    opts: {
      series: ["gd"]
    }
  },
  {
    name: "Majestueuse",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105885923100610731/Majestueuse.png",
    opts: {
      series: ["gd"]
    }
  },

];
