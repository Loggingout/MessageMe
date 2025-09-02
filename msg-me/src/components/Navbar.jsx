import Logo from '../assets/Logo.jpg'

export default function Navbar() {
    //function
    
    //Render content
    return(
        <>
        <div className="navbar-bg-container bg-green-200 h-full mask-clip-content shadow-md">
            {/** */}
            <div className="navbar-content-div flex justify-between">
                <div className="brand-container flex gap-2">
                    <img src={Logo} alt="" className="logo rounded-full w-20 h-20 "/>
                    <h3 className="brand-name self-center font-bold">MsgMe</h3>
                </div>
                <div className="nav-item-container self-center">
                    <ul className="nav-items flex gap-3">
                        <li className="nav-item bg-gray-200 rounded-full  hover:bg-gray-400  active:bg-white font-semibold cursor-pointer">Contact Us</li>
                        <li className="nav-item bg-gray-200 rounded-full  hover:bg-gray-400  active:bg-white font-semibold cursor-pointer">Follow Us</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}