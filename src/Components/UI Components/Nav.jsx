import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react"
import { useState } from "react";


export default function Nav(){

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const menuItems = [
        "Travis",
        "Kiara",
        
    ];

    return(
        <>
        <Navbar className="dark text-foreground" height="8rem" onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    
                    {/* <a href="/"><p className="font-bold text-inherit"><img className="nav-logo" src={Logo} alt="logo" height="32"></img></p></a> */}
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="/Services">
                        Travis
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/About">
                        Kiara
                    </Link>
                </NavbarItem>
                
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                "foreground"
                            }
                            className="w-full"
                            href={`/${item}`}
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
        </>
    )
}