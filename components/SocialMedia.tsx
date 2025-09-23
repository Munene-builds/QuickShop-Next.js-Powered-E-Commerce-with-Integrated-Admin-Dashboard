import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {Facebook, Github, Linkedin, Slack, Youtube} from "lucide-react"
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

interface Props {
	className?: string;
	iconClassName?: string;
	TooltipClassName?: string;
}

const SocialLink = [
	{
		title:"Youtube",
		href: "https://www.youtube.com",
		icon: <Youtube className= "w-5 h-5" />,
	},

	{
		title:"Github",
		href: "https://www.github.com",
		icon: <Github className= "w-5 h-5" />,
	},
	{
		title:"Linkedin",
		href: "https://www.Linkedin.com",
		icon: <Linkedin className= "w-5 h-5" />,
	},
	{
		title:"Facebook",
		href: "https://www.Facebook.com",
		icon: <Facebook className= "w-5 h-5" />,
	},

];

const SocialMedia = ({className,iconClassName,TooltipClassName}:Props) => {
	return (
	<TooltipProvider>
		 <div className={cn("flex items-center gap-3.5", className)}>
		 	{SocialLink?.map((item)=>(
		 		<Tooltip key = {item?.title}>
		 			<TooltipTrigger asChild>
		 				<Link 
		 					key={item?.title}
		 					target="_blank"
		 					rel= "noopener noreferrer"
		 					href={item?.href}
		 					className={cn("p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect, iconClassName")}
		 				>
		 				{item?.icon}
		 			</Link>
		 			</TooltipTrigger>
		 			<TooltipContent 
		 				className={cn( "bg-white text-darkColor font-semibold",TooltipClassName)}>
		 				{item?.title}
		 			</TooltipContent>
		 		</Tooltip>
		 		))}
		 </div>
		 </TooltipProvider>
		)
};

export default SocialMedia;