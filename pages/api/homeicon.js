

export default function showIcon(req, res){
  res.status(200).json([
    {
      "img": "https://wongmw.com/assets/homeicon/london.webp",
      "location": "London",
      "distance": "45-minute drive"
    },
    {
      "img": "https://wongmw.com/assets/homeicon/manchester.webp",
      "location": "Manchester",
      "distance": "4.5-hour drive"
    },
    {
      "img": "https://wongmw.com/assets/homeicon/Liverpool.webp",
      "location": "Liverpool",
      "distance": "4.5-hour drive"
    },
    {
      "img": "https://wongmw.com/assets/homeicon/york.webp",
      "location": "York",
      "distance": "4-hour drive"
    },
    {
      "img": "https://wongmw.com/assets/homeicon/cardiff.webp",
      "location": "Cardiff",
      "distance": "45-minute drive"
    },
    {
      "img": "https://wongmw.com/assets/homeicon/birkenhead.webp",
      "location": "Birkenhead",
      "distance": "4.5-hour drive"
    },
    {
      "img": "https://wongmw.com/assets/homeicon/newquay.webp",
      "location": "Newquay",
      "distance": "6-hour drive"
    },
    {
      "img": "https://wongmw.com/assets/homeicon/hove.webp",
      "location": "Hove",
      "distance": "2-hour drive"
    }
  ])
}