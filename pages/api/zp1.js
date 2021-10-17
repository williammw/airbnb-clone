

export default function showIcon(req, res){
  res.status(200).json([
    {
      "img": "https://wongmw.com/assets/zp1/outdoorgetaways.webp",
      "title": "Outdoor getaways"
    },
    {
      "img": "https://wongmw.com/assets/zp1/uniquestays.webp",
      "title": "Unique stays"
    },
    {
      "img": "https://wongmw.com/assets/zp1/entirehomes.webp",
      "title": "Entire homes"
    },
    {
      "img": "https://wongmw.com/assets/zp1/petallowed.webp",
      "title": "Pet allowed"
    }
  ])
}

