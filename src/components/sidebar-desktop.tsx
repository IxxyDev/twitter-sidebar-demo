import {SidebarButton} from "@/components/sidebar-button";
import {SidebarItems} from "@/types";
import Link from "next/link";
import {Separator} from "@/components/ui/separator";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {Button} from "@/components/ui/button";
import {Avatar, AvatarFallback, AvatarImage} from "@radix-ui/react-avatar";
import {LogOut, MoreHorizontal, Settings} from "lucide-react";
import {usePathname} from "next/navigation";

interface SidebarDesktopProps {
	sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
	const pathname = usePathname();

	return (
		<aside className='w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r'>
			<div className='h-full px-3 py-4'>
				<h3 className='mx-3 text-lg font-semibold text-foreground'>
					Twitter
				</h3>
				<div className='mt-5'>
					<div className='flex flex-col gap-1 w-full'>
						{props.sidebarItems.links.map((link) => (
							<Link key={link.label} href={link.href}>
								<SidebarButton
									icon={link.icon}
									className='w-full'
									variant={pathname === link.href ? 'secondary' : 'ghost'}>
									{link.label}
								</SidebarButton>
							</Link>
						))}
						{props.sidebarItems.extras}
					</div>
				</div>
				<div className='absolute left-0 bottom-3 w-full px-3'>
					<Separator className='absolute -top-3 left-0 w-full' />
					<Popover>
						<PopoverTrigger asChild>
							<Button variant='ghost' className='w-full justify-start'>
								<div className='flex justify-between items-center w-full'>
									<div className='flex gap-2'>
										<Avatar className='h-5 w-5'>
											<AvatarImage src='https://github.com/ixxydev.png' />
											<AvatarFallback>IxxyDev</AvatarFallback>
										</Avatar>
										<span>IxxyDev</span>
									</div>
									<MoreHorizontal size={20} />
								</div>
							</Button>
						</PopoverTrigger>
						<PopoverContent className='mb-2 w-56 p-3 rounded-[1rem]'>
							<div className='space-y-1'>
								<Link href='/'>
									<SidebarButton size='sm' icon={Settings} className='w-full'>
										Account Settings
									</SidebarButton>
								</Link>
								<SidebarButton size='sm' icon={LogOut} className='w-full'>
									Log Out
								</SidebarButton>
							</div>
						</PopoverContent>
					</Popover>
				</div>
			</div>
		</aside>
	)
}
