

export default function showIcon(req, res){
  res.status(200).json([
    {
      "img": "/assets/homeicon/london.webp",
      "location": "London",
      "distance": "45-minute drive"
    },
    {
      "img": "/assets/homeicon/manchester.webp",
      "location": "Manchester",
      "distance": "4.5-hour drive"
    },
    {
      "img": "/assets/homeicon/Liverpool.webp",
      "location": "Liverpool",
      "distance": "4.5-hour drive"
    },
    {
      "img": "/assets/homeicon/york.webp",
      "location": "York",
      "distance": "4-hour drive"
    },
    {
      "img": "/assets/homeicon/cardiff.webp",
      "location": "Cardiff",
      "distance": "45-minute drive"
    },
    {
      "img": "/assets/homeicon/birkenhead.webp",
      "location": "Birkenhead",
      "distance": "4.5-hour drive"
    },
    {
      "img": "/assets/homeicon/newquay.webp",
      "location": "Newquay",
      "distance": "6-hour drive"
    },
    {
      "img": "/assets/homeicon/hove.webp",
      "location": "Hove",
      "distance": "2-hour drive"
    }
  ])
}