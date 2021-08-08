import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export default function Home({exploreData}) {
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
          {exploreData?.map((item) =>(
            <SmallCard img={item.img} distance={item.distance} location={item.location} />
          ))}
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('http://localhost:3000/api/homeicon').then(
    (res) => res.json()
  )

  return{
    props : {
      exploreData
    }
  }
}