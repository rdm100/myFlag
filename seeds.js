use flagsdb;

db.flags.remove({});

db.flags.insert([

{
  "id": 1,
  "name": "Scotland",
  "flagLEDs":[
    {"position": [0, 1], "status": "off"},
    {"position": [0, 2], "status": "off"}
  ]
},
{
  "id": 2,
  "name": "Italy",
  "flagLEDs":[
    {"position": [0, 1], "status": "off"},
    {"position": [0, 2], "status": "off"}
  ]
}

]
)
