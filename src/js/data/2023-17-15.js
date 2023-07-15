dataSetVersion = "2023-17-15"; // Change this when creating a new data set version. YYYY-MM-DD format.
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
      { name: "Xyto", tooltop: "Xyto Characters", key: "x" },
      { name: "PCs", tooltip: "Playable Characters", key: "pc" },
      { name: "Ambrosia", tooltip: "Ambrosia Characters", key: "amb" },
      { name: "Genesis", tooltip: "Genesis Characters", key: "gns" },
      { name: "Uncategorized", tooltip: "No category characters", key: "no" }
    ]
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Pollux",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129752256225493093/Pollux.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Miu",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129752354128920686/Miu.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Judgement",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129752631007522836/Judgement.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Caliculus",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129752650548776970/Caliculus.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Arthur Aiscen",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129752682668757163/Arthur.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Glistantine",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129752699546640475/Glistantine.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Kronicorlus",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754061458124870/Kronicorlus.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Calamity",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754137253396490/Calamity.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Heartha Lupin",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754179380977704/Heartha.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Lili Wilde",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754342346477588/Lili.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Marion Celeste",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754443697623130/Marion.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Tristan",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754475985383536/Tristan.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Ion",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754594344439868/Ion.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Promilia",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754635192774686/Promilia.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Jane Sue",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754665597276200/Jane.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Elena Moemii",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754778587639859/Elena.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Twilight Oyuyu",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129755041788608682/Oyuyu.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Lisa",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1105886033452740738/Lisa.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Reon Feish",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129754854617784370/Reon.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Shinata Line",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129756621376065616/Line.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Hisume Ifumi",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129756641366114358/Ifumi.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Liu Xingzu",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129756674689876069/Liu.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Adversity",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129756780633804911/Adversity.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Nono",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129756814980952094/Nono.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Sapphire Malcour",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129756847969161246/Sapphire.png",
    opts: {
      series: ["gd", "x"]
    }
  },
  {
    name: "Majestueuse",
    img: "https://cdn.discordapp.com/attachments/1105885770276950166/1129756991301091478/Majestueuse.png",
    opts: {
      series: ["gd", "x"]
    }
  },
];
