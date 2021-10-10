import React from "react";
import {BiChevronDown, BiSearch, BiMenu} from "react-icons/bi";


function NavSm() {
    return <>
        <div className="text-white flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">It all starts here !!!</h3>
                <span className="text-grey-200 flex item-center cursor-pointe hover:text-white">
                    Delhi NCR 
                    <BiChevronDown></BiChevronDown>
                </span>
            </div>
            
            
            <div className="w-8 h-8 text-white">
                <BiMenu className="w-full h-full"></BiMenu>
            </div>
        </div>
    </>
}

function NavMd() {
    return <>
    <div className="container h-20 flex mx-auto max-w-none px-4 items-center justify-between">
        <div className="flex justify-centre w-1/2 gap-3">
            <div className="w-10 h-10">
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="top-icon" className="w-full h-full rounded-md" />
            </div>
            <div className="w-full flex items-center gap-3 bg-white  px-3 py-1 rounded-md">
                <BiSearch/>
                <input type="search" className="w-full bg-tranparent border-none focus:outline-none" placeholder="Search for Movies, Plays, Concert, Sports, Events and much more..."/>
            </div>
        </div>
        <div className="flex ">
            <span className="text-grey-200 mx-2 text-base flex items-center cursor-pointe hover:text-white">
                Delhi NCR <BiChevronDown></BiChevronDown>
            </span>
            <div className="w-8 h-8 mx-2 text-white">
                <BiMenu className="w-full h-full"></BiMenu>
            </div>
        </div>
    </div>
    </>
}

function NavLg() {
    return <>
    <div className="container h-20 flex mx-auto max-w-none px-4 items-center justify-between">
        <div className="flex justify-centre w-1/2 gap-3">
            <div className="w-10 h-10">
                <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="top-icon" className="w-full h-full rounded-md" />
            </div>
            <div className="w-full flex items-center gap-3 bg-white  px-3 py-1 rounded-md">
                <BiSearch/>
                <input type="search" className="w-full bg-tranparent border-none focus:outline-none" placeholder="Search for Movies, Plays, Concert, Sports, Events and much more..."/>
            </div>
        </div>
        <div className="flex ">
            <span className="text-grey-200 mx-2 text-base flex items-center cursor-pointe hover:text-white">
                Delhi NCR <BiChevronDown></BiChevronDown>
            </span>
            <button className="bg-red-500 mx-2 rounded-md text-center text-white px-2 py-1 text-sm">
                Sign In
            </button>
            <div className="w-8 h-8 mx-2 text-white">
                <BiMenu className="w-full h-full"></BiMenu>
            </div>
        </div>
    </div>
    </>
}

const NavBar = () => {
    return (
        <>
        <nav className="bg-samuel-500">
            <div className="md:hidden">
                {/* {Mobile screen} */}
                <NavSm></NavSm>
            </div>


            <div className="hidden md:flex lg:hidden">
                {/* Medium screen */}
                <NavMd></NavMd>
            </div>
            
            
            <div className="hidden w-full lg:flex">
                {/* Large screen */}
                <NavLg></NavLg>
            </div>
        </nav>
        </>
    );
}

export default NavBar;