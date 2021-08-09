

export default function showIcon(req, res){
  res.status(200).json([
    {
      "img": "/assets/zp1/outdoorgetaways.webp",
      "title": "Outdoor getaways"
    },
    {
      "img": "/assets/zp1/uniquestays.webp",
      "title": "Unique stays"
    },
    {
      "img": "/assets/zp1/entirehomes.webp",
      "title": "Entire homes"
    },
    {
      "img": "/assets/zp1/petallowed.webp",
      "title": "Pet allowed"
    }
  ])
}

