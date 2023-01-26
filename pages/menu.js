import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Image from 'next/image'
import stuffed from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/stuffed.png"
import Cookie from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/classic_cookie.png"
import Cheese from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i2.png"
import Cupcake from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/cupcake.png"
import Roll from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/rollcake.png"
import Brownie from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/brownies.png"
import Donut from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/donut2.png"
import Cake from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/i10.png"
import Banana from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/banana_bread.png"
import Turnover from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/turnovers.png"
import Madeline from "/Users/zainab/Desktop/Next.js Projects/sweetbatterbakes/public/images/madeline.png"

export default function menu(){
    return(
        <div className = 'products pt-12 font-serif text-center bg-blush h-full'>
            <h1 className = "head mt-10 text-2xl pb-6 md:text-3xl  ">
                Flavor Preview
            </h1>  

            <div className = "productmenu grid sm:grid-cols-4 lg:grid-cols-5 grid-cols-2 w-full">

                <div class="p_cards m-3">
                        <Image class="p_img" src= {stuffed} alt="Card image cap"/>
                        <div class="card-body pt-2">
                            <h5 class="card-title">Stuffed Cookies</h5>
                            <p class="card-text">Dozen/Half Dozen</p>
                        </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Cookie} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">O.G. Cookies</h5>
                        

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Cheese} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Cheesecakes</h5>
                        <p class="card-text">1 Large/12 Mini</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Cupcake} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Cupcakes</h5>
                        <p class="card-text">Dozen/Half Dozen</p>
                       

                    </div>
                </div>


                <div class="p_cards m-3">
                    <Image class="p_img" src= {Roll} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Swiss Roll Cake</h5>
                        <p class="card-text">1 large roll sliced</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Brownie} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Layered Brownies</h5>
                        <p class="card-text">12 piece</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Donut} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Baked donuts</h5>
                        <p class="card-text">12 mini donuts</p>
                       

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Cake} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Cakes</h5>
                        

                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Banana} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Banana Bread</h5>
                        <p class="card-text">1 Loaf Sliced</p>
                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Turnover} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Turnovers</h5>
                        
                    </div>
                </div>

                <div class="p_cards m-3">
                    <Image class="p_img" src= {Madeline} alt="Card image cap"/>
                    <div class="card-body pt-2">
                        <h5 class="card-title">Madelines</h5>
                        <p class="card-text">16 Madelines</p>
                    </div>
                </div>



            </div>
        </div>

    )
}