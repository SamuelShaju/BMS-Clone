import React from "react";
import {BiChevronDown, BiMenu, BiSearch} from "react-icons/bi";


function NavSm() {
    return <>
        <div className="text-samuel-400 flex items-center justify-between shadow-sm py-2 px-3">
            <div className="">
                <h3 className="text-xl font-bold">Fast and Furious 9</h3>
            </div>
            <div className="w-8 h-8">
                <BiSearch className="w-full h-full"></BiSearch>
            </div>
        </div>
    </>
}

function NavMd() {
    return <>
        <div className="text-samuel-400 flex items-center justify-between shadow-sm py-3 px-3">
            <div className="">
                <h3 className="text-xl font-bold">Fast and Furious 9</h3>
            </div>
            <div className="w-8 h-8">
                <BiMenu className="w-full h-full"></BiMenu>
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
                {/* <BiSearch/> */}
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

const MovieNavBar = () => {
    return (
        <>
        <nav className="bg-white lg:bg-samuel-500">
            <div className="md:hidden">
                {/* {Mobile screen} */}
                <NavSm></NavSm>
            </div>


            <div className="hidden md:block lg:hidden">
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

export default MovieNavBar;