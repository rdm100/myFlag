use flagsdb;

db.flags.remove({});

db.flags.insert([

  {
    "id": 1,
    "name": "Scotland",
    "flagLEDs":[
      {"position": [0, 1], "colour": "blue", "status": "off"},
      {"position": [0, 2], "colour": "blue", "status": "off"}
    ]
  },
  {
    "id": 2,
    "name": "Italy",
    "flagLEDs":[
      {"position": [0, 1], "colour": "red", "status": "off"},
      {"position": [0, 2], "colour": "red", "status": "off"}
    ]
  },
  {
    "id": ,
    "name": "off",
    "flagLEDs":[
      {"position": [0, 1], "colour": "grey", "status": "off"},
      {"position": [0, 2], "colour": "grey", "status": "off"}
    ]
  }

]
)
