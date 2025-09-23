"use client";
import React, {useState} from 'react'
import SideMenu from "./SideMenu"
import  {AlignLeft} from "lucide-react"

const MobileMenu = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState (false);
	return (
		<>
			<button onClick={()=> setIsSidebarOpen (!isSidebarOpen)}>
				<AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer"/>
			</button>
			<div className="md:hidden"></div>
			<SideMenu
				isOpen={isSidebarOpen}
				onClose={() => setIsSidebarOpen(false)}
			/>
		</>


		)
};
export default MobileMenu;