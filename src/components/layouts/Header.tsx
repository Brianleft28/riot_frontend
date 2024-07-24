import { Button, Link, Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, NavbarBrand } from "@nextui-org/react";
import { useState } from "react";
import { Link as RouterLink, NavLink } from "react-router-dom";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
              <NavbarContent>
                <NavbarMenuToggle
                  aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                  className="sm:hidden"
                />
                <NavbarBrand>
                  <div className="hover:cursor-pointer">
                    <NavLink to="/">
                      <span className="font-bold text-inherit">RiotAPI</span>
                    </NavLink>
                  </div>
                </NavbarBrand>
              </NavbarContent>

              <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                  <Link as={'div'} color="foreground" href="#">
                      <RouterLink to="/searchPlayer">
                        Puuid
                      </RouterLink>
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                  <Link href="#" aria-current="page">
                    Summoner
                  </Link>
                </NavbarItem>
                <NavbarItem>
                  <Link color="foreground" href="#">
                    Integrations
                  </Link>
                </NavbarItem>
              </NavbarContent>
              <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                  <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                  <Button  color="primary" href="#" variant="flat">
                    Sign Up
                  </Button>
                </NavbarItem>
              </NavbarContent>
              <NavbarMenu>
                {menuItems.map((item, index) => (
                  <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                      color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                      }
                      className="w-full"
                      href="#"
                      size="lg"
                    >
                      {item}
                    </Link>
                  </NavbarMenuItem>
                ))}
              </NavbarMenu>
            </Navbar>
)
}

export default Header;