import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Inter } from '@next/font/google'
import collage from '/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/collage.png'
import title from '/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/title.png'
import cake from '/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/cake.png';
import donut from '/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/donut.png';
import ingred from '/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/ingredients.png'
import insta from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/instaL.png"
import i1 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i1.png";
import i2 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i2.png";
import i3 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i3.png";
import i4 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i4.png";
import i5 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i5.png";
import i6 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i6.png";
import i7 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i7.png";
import i8 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i8.png";
import i9 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i9.png";
import i10 from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i10.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sweet Batter Bakes</title>
      </Head>
   
      <div className = 'topCollage pt-12 w-full h-full sm:h-1/2 flex flex-col sm:flex-row bg-blush justify-center text-center items-center '>
          <div className = 'leftSide object-contain h-full pl-10 sm:pl-0 sm:h-3/6 w-4/5 sm:w-2/5 flex-auto'>
            <Image className = 'collage sm:pl-12 h-6/6 w-5/6 object-contain' src = {collage} />
          </div>

          <div className = 'rightSide object-fill h-full w-full flex-auto item-center pl-12 ml-12  sm:ml-0 sm:pl-0 sm:h-3/5 sm:w-2/6 flex-auto '> 
            <Image className = 'w-9/12 object-fill' src = {title} />
          </div>

      </div>

      <div className='3-Section w-full h-3/5 py-4 mt-2 bg-cream text-center font-serif'> 
        <h1 className = 'heading text-lg pb-6 md:text-3xl'> Why Sweet Batter Bakes?</h1>
        <div className = "why_cards flex flex-col md:flex-row h-full">
            
            <div className ="card items-center h-full" >
                <Image className ="card-img-top mx-auto  object-cover h-12 w-12" src = {cake} alt="Card image cap"/>
                <div className ="card-body">
                    <h5 class="card-title pt-6">Delicious Flavours</h5>
                    <p class="card-text pb-6"> Many different flavours for every sweet treat including mango, apple cider, and cinnamon sugar</p>
                </div>      
            </div>


            <div class="card items-center h-full">
                <Image class="card-img-top mx-auto  object-cover h-12 w-12" src = {donut} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title pt-6">Fresh Ingredients</h5>
                    <p class="card-text pb-6"> Every dessert is artfully crafted with only the freshest ingredients</p>
                </div>      
            </div>

            <div class="card items-center h-full" >
                <Image class="card-img-top mx-auto object-top object-cover h-12 w-12"  src = {ingred} alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title pt-6">Perfect For Any Event</h5>
                    <p class="card-text pb-6"> We offer many different desserts including but not limited to donuts, cheescakes, and cupcakes </p>
                </div>      
            </div>
        </div>
      </div>

      <div>
          <Image className = "mx-auto h-1/6 w-1/6" src = {insta}/> 
      </div>

      <div className = "Insta-Grid h-3/6 grid grid-cols-3 sm:grid-cols-5  w-6/6">
        <a href = "https://www.instagram.com/p/Ch0GpotAbt9/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i1}/> 
        </a>
        <a href = "https://www.instagram.com/p/CfKocyKLaQA/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i2}/> 
        </a>
        <a href = "https://www.instagram.com/p/Cd9Y12WLOhW/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i3}/> 
        </a>
        <a href = "https://www.instagram.com/p/CWuDRjUrMFY/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i4}/> 
        </a>
        <a href = "https://www.instagram.com/p/CZS2l7crOnw/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i5}/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i6}/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i7}/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i8}/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
         <Image className = "w-full h-full object-contain" src = {i9}/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = {i10}/> 
        </a>


      </div>
      
    </>
  )
}
