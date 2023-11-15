import { useState } from "react";
import { logo, menu, close} from "../assets";
import { navLinks } from "../constants";
function NavBar() {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="p-3 flex justify-around items-center">
            <img src={logo} alt="-growth-logo"/>
            <div className="sm:flex hidden w-[70%] justify-end items-center p-3">
                <ul className="list-none flex  justify-around item-center w-[40%]">
                {
                    navLinks.map((nav) => (
                        <li key={nav.id} className="font-poppins text-base font-medium leading-6" >
                            <a href={`#{nav.id}`}> {nav.title}</a>
                        </li>
                    ))
                }
                </ul>
                <button className="p-3 bg-[#F5F5F5] rounded-[12px] text-center px-3 py-3 w-[8%]">Log in</button>
            </div>
            <div className="sm:hidden flex justify-end items-center">
                <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle((previousTogglState) => !previousTogglState)}/>
                <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-[#4891FF] absolute top-16 right-0 mx-1 my-1 min-w-[35%] rounded-xl `}>
                    <ul className=' list-none flex flex-col justify-end items-center flex-1'>
                        {navLinks.map((nav, index) => (
                            <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length -1 ? 'mr-0' : 'mb-4'} text-black`} >
                                <a href={`#${nav.id}`}>{nav.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )

}

export default NavBar;