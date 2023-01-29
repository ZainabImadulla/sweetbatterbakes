import Head from 'next/head'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { Inter } from '@next/font/google'
import {collage} from 'public/images/collage.png'
import {title} from 'public/images/title.png'
import {cake} from 'public/images/cake.png';
import {donut} from 'public/images/donut.png';
import {ingred} from 'public/images/ingredients.png'
import {insta} from "public/images/instaL.png"
import {i1} from "public/images/i1.png";
import {i2} from "public/images/i2.png";
import {i3} from "public/images/i3.png";
import {i4} from "public/images/i4.png";
import {i5} from "public/images/i5.png";
import {i6} from "public/images/i6.png";
import {i7} from "public/images/i7.png";
import {i8} from "public/images/i8.png";
import {i9} from "public/images/i9.png";
import {i10} from "public/images/i10.png";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sweet Batter Bakes</title>
      </Head>
   
      <div className = 'topCollage pt-12 w-full h-full sm:h-1/2 flex flex-col sm:flex-row bg-blush justify-center text-center items-center'>
          <div className = 'leftSide object-contain h-full pl-10 sm:pl-0 sm:h-3/6 w-4/5 sm:w-2/5 flex-auto'>
            <Image className = 'collage sm:pl-12 h-6/6 w-5/6 object-contain' src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995835/collage_ymrqwc.png" />
          </div>

          <div className = 'rightSide object-fill h-full w-full flex-auto item-center pl-12 sm:pl-0 sm:h-3/5 sm:w-2/6 flex-auto '> 
            <Image className = 'w-9/12 object-fill' src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995824/title_dhdaao.png" />
          </div>

      </div>

      <div className='3-Section w-full h-3/5 py-4 mt-2 bg-cream text-center font-serif'> 
        <h1 className = 'heading text-lg pb-6 md:text-3xl'> Why Sweet Batter Bakes?</h1>
        <div className = "why_cards flex flex-col md:flex-row h-full">
            
            <div className ="card items-center h-full" >
                <Image className ="card-img-top mx-auto  object-cover h-12 w-12" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995809/cake_us2uup.png" alt="Card image cap"/>
                <div className ="card-body">
                    <h5 class="card-title pt-6">Delicious Flavours</h5>
                    <p class="card-text pb-6"> Many different flavours for every sweet treat including mango, apple cider, and cinnamon sugar</p>
                </div>      
            </div>


            <div class="card items-center h-full">
                <Image class="card-img-top mx-auto  object-cover h-12 w-12" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995805/donut_ciuacw.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title pt-6">Fresh Ingredients</h5>
                    <p class="card-text pb-6"> Every dessert is artfully crafted with only the freshest ingredients</p>
                </div>      
            </div>

            <div class="card items-center h-full" >
                <Image class="card-img-top mx-auto object-top object-cover h-12 w-12"  src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995821/ingredients_o6ukxq.png" alt="Card image cap"/>
                <div class="card-body">
                <h5 class="card-title pt-6">Perfect For Any Event</h5>
                    <p class="card-text pb-6"> We offer many different desserts including but not limited to donuts, cheescakes, and cupcakes </p>
                </div>      
            </div>
        </div>
      </div>

      <div>
          <Image className = "mx-auto h-1/6 w-1/6" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995821/instaL_w7xjet.png"/> 
      </div>

      <div className = "Insta-Grid h-3/6 grid grid-cols-3 sm:grid-cols-5  w-6/6">
        <a href = "https://www.instagram.com/p/Ch0GpotAbt9/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995814/i1_kbqhwi.png" /> 
        </a>
        <a href = "https://www.instagram.com/p/CfKocyKLaQA/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995813/i2_psc67b.png"/> 
        </a>
        <a href = "https://www.instagram.com/p/Cd9Y12WLOhW/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995820/i3_cubbfc.png" /> 
        </a>
        <a href = "https://www.instagram.com/p/CWuDRjUrMFY/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995816/i4_fflyh7.png"/> 
        </a>
        <a href = "https://www.instagram.com/p/CZS2l7crOnw/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995819/i5_fjbbjp.png"/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995820/i6_u8guaq.png"/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995824/i7_qxy15g.png"/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995823/i8_wtb318.png"/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
         <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995820/i9_beycpl.png"/> 
        </a>
        <a href = "https://www.instagram.com/p/CXkNN-kLEk3/" target="_blank">
          <Image className = "w-full h-full object-contain" src = "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995822/i10_bv3mxo.png"/> 
        </a>


      </div>
      
    </>
  )
}
