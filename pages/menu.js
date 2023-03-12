import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'next/image'
import { Menu } from '@headlessui/react'
import {stuffed} from "public/images/stuffed.png"
import {Cookie} from "public/images/classic_cookie.png"
import {Cheese} from "public/images/i2.png"
import {Cupcake} from "public/images/cupcake.png"
import {Roll} from "public/images/rollcake.png"
import {Brownie} from "public/images/brownies.png"
import {Donut} from "public/images/donut2.png"
import {Cake} from "public/images/i10.png"
import {Banana} from "public/images/banana_bread.png"
import {Turnover} from "public/images/turnovers.png"
import {Madeline} from "public/images/madeline.png"


export default function menu(){
    return(
        <div className = 'products pt-12 font-serif text-center bg-blush h-full'>
            <h1 className = "head mt-10 text-2xl pb-6 md:text-3xl  ">
                Flavor Preview
            </h1>  

            <div className = "productmenu grid sm:grid-cols-4 lg:grid-cols-5 grid-cols-2 w-full">

                <div class="p_cards m-3">
                        <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995825/stuffed_vl64o6.png" alt="Card image cap"/>
                        <div class="card-body pt-2">
                            <h5 class="card-title">Stuffed Cookies</h5>
                            <p class="card-text">Dozen/Half Dozen</p>
                        </div>
                        <div class="card-body border-2 border-black">
                            <h3 class="card-title">Flavours</h3>
                            <p class="card-text">Brownie Batter, Red Velvet, Hazelnut Churro</p>

                        </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995822/classic_cookie_sfjpff.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">O.G. Cookies</h5>
                        

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995813/i2_psc67b.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Cheesecakes</h5>
                        <p class="card-text">1 Large/12 Mini</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995808/cupcake_yl4dkr.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Cupcakes</h5>
                        <p class="card-text">Dozen/Half Dozen</p>
                       

                    </div>
                </div>


                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995830/rollcake_wjrpvu.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Swiss Roll Cake</h5>
                        <p class="card-text">1 large roll sliced</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995815/brownies_bbekrq.png"alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Layered Brownies</h5>
                        <p class="card-text">12 piece</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995813/donut2_pzbmlx.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Baked donuts</h5>
                        <p class="card-text">12 mini donuts</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= 'https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995822/i10_bv3mxo.png' alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Cakes</h5>
                        

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995810/banana_bread_zzu6f1.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Banana Bread</h5>
                        <p class="card-text">1 Loaf Sliced</p>
                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995828/turnovers_yqcfja.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Turnovers</h5>
                        
                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= "https://res.cloudinary.com/dnldvhhyw/image/upload/v1674995824/madeline_rp2z0l.png" alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Madelines</h5>
                        <p class="card-text">16 Madelines</p>
                    </div>
                </div>



            </div>
        </div>

    )
}