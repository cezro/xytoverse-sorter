dataSetVersion = "2024-13-17"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      {
        name: "1-26",
        key: "gd",
        tooltip: "The First 26 brilliance catalysts.",
      },
      { name: "26-100", key: "ad" },
      { name: "101-200", key: "bd" },
      { name: "201-...", key: "cd" },
      { name: "Xyto", tooltop: "Xyto Characters", key: "x" },
      { name: "PCs", tooltip: "Playable Characters", key: "pc" },
      { name: "Ambrosia", tooltip: "Ambrosia Characters", key: "amb" },
      { name: "Genesis", tooltip: "Genesis Characters", key: "gns" },
      { name: "Uncategorized", tooltip: "No category characters", key: "no" },
    ],
  },
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Corz Acsorez",
    img: "https://cdn.discordapp.com/attachments/1129760254972940318/1129769534665019502/Corz.png",
    opts: {
      series: ["amb", "pc"],
    },
  },
  {
    name: "Phantasma",
    img: "https://cdn.discordapp.com/attachments/1129760254972940318/1129769535537434804/Phantasma.png",
    opts: {
      series: ["amb", "pc"],
    },
  },
  {
    name: "Daimon Dessereigh",
    img: "https://cdn.discordapp.com/attachments/1129760254972940318/1129769535067652096/Daimon.png",
    opts: {
      series: ["amb", "pc"],
    },
  },
];
