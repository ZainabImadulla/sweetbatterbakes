import {sbb_gif} from "public/images/SBB.gif"
import Image from 'next/image'
import { Dropdown } from "@nextui-org/react";

export default function about() {
    
    return(
        <>
        <div className = "mt-12 pt-12 flex h-full  flex-col sm:flex-row justify-center items-center sm:items-start bg-cream ">
            <div className = "vid_arch w-2/6 sm:w-2/6 sm:h-2/6 sm:mx-12 my-12">
                <Image className = "rounded-t-full"src = {sbb_gif} />
             </div>
            <div className = "our_story w-4/6 sm:mt-12 sm:mr-12 text-center font-serif sm:ml-12">
                <h1 className = "header mt-10 text-2xl pb-6 md:text-3xl "> Our Story</h1>
                <p className = "blurb leading-loose pb-12"> Sweet Batter Bakes was founded in 2021 by Abir Khan. She started this business right out her house in Connecticut. She loves to experiment with different flavors and treats which you can check out her instagram @sweetbatterbakes </p>
            </div>
            <div>
            <Dropdown>
                <Dropdown.Button flat>Trigger</Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                    <Dropdown.Item key="new">New file</Dropdown.Item>
                    <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                    <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                    <Dropdown.Item key="delete" color="error">
                    Delete file
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            
            </div>
           
        
        </div>
        <div className = "h-5/6 bg-cream"> </div>
        </>

        

    )
};