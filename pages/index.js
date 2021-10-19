import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'


export default function Home({exploreData, cardData}) {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     {/* Header */}
      <Header/>
      
     {/* Banner */}
      <Banner/>

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Server Render */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) =>(
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>
        <section >
          <h2 className="text-4xl font-semibold py-8" >Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3">
            {cardData?.map( item => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
            
        </section>
        <LargeCard
          img="https://imagedelivery.net/Y07ySA3u_Km8xu1A8ejC2g/83b0cf87-31f2-4fc9-434a-4c42fca79f00/public"
          title="this job is suck."
          description="I want to quit"
          buttonText="Get Inspiration"
        />
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps(){
  
  const baseurl = process.env.BASE_URL;
  const exploreData = await fetch(`${baseurl}api/homeicon`).then(
    (res) => res.json()
  )

  const cardData = await fetch(`${baseurl}api/zp1`).then(
    (res) => res.json()
  )

  return{
    props : {
      exploreData,
      cardData
    }
  }
}