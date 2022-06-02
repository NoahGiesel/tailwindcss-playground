import {BsPlus, BsFillLightningFill} from "react-icons/bs"
import { FaFire,FaPoo } from "react-icons/fa"

const SideBar = () => {
    return (<div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon icon={<FaFire size="28"  />} text="Home"/>
        <SideBarIcon icon={<BsPlus size="32"  />} text="Add" />
        <SideBarIcon icon={<BsFillLightningFill size="20"  />} text="Boost"/>
        <SideBarIcon icon={<FaPoo size="20"  />} text="Not Today"/>
    </div>)
}

const SideBarIcon = ({icon, text  }) => {
    return (
        <div className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                {text}
            </span>
        </div>
    )
}

export default SideBar