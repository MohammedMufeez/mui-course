import "./MuiNavbarStyles.css";
import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Button, Toolbar, IconButton, Menu, MenuItem, List, ListItem, ListItemText, Divider, ListItemIcon, Box, Collapse, Drawer, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const menuItems = [
  {
    code: "HOTELS_2",
    name: "HOTELS",
    href: "/hoteldashboard",
    product: "HOTELS",
  },
  {
    code: "FLIGHTS_1",
    name: "FLIGHTS",
    href: "/flightdashboard",
    product: "FLIGHTS",
  },
  {
    code: "TRANSFERS_0",
    name: "TRANSFERS",
    href: "/transfersdashboard",
    product: "TRANSFERS",
  },
  {
    code: "DYNAMICPACKAGE_4",
    name: "D.PKG.",
    href: "/package/dashboard",
    product: "DYNAMICPACKAGE",
  },
  {
    product: "PACKAGES",
    code: "PACKAGES_3",
    name: "C.PKG",
    subMenu: [
      {
        code: "create",
        name: "CREATE",
        subMenu: [
          {
            name: "PACKAGES",
            href: "/customPackage/create",
          },
          {
            name: "STATICEXTRAS",
            href: "/customPackage/master/staticExtra",
          },
          {
            name: "CATEGORY",
            href: "/customPackage/master/category",
          },
          {
            name: "SITES",
            href: "/customPackage/master/site",
          },
        ],
      },
      {
        code: "search",
        name: "SEARCH",
        subMenu: [
          {
            name: "DASHBOARD",
            href: "/customPackage/dashboard",
          },
        ],
      },
      {
        code: "view",
        name: "VIEW",
        subMenu: [
          {
            name: "BOOKINGS",
            href: "/customPackage/bookingView",
          },
          {
            name: "PACKAGES",
            href: "/customPackage/view",
          },
        ],
      },
    ],
  },
  {
    product: "DIRECTCONTRACTS",
    code: "DIRECTCONTRACTS_6",
    name: "DIRECT CONTRACTS",
    subMenu: [
      {
        code: "Master",
        name: "MASTERS",
        href: "/directContract/master/boardType",
      },
      {
        code: "contracts",
        name: "CONTRACTS",
       
        subMenu: [
          {
            code: "contractsadd",
            name: "ADD",
            href: "/directcontract/create",
          },
          {
            code: "contractsview",
            name: "VIEW",
            href: "/directContract/view",
          },
          {
            code: "contractsCalculation",
            name: "CALCULATION",
            href: "/directContract/calculation",
          },
        ],
      },
    ],
  },
  {
    code: "admin",
    product: "ADMIN",
    name: "ADMIN",
    subMenu: [
      {
        code: "dashboard",
        name: "DASHBOARD",
        href: "/admin/dashboard",
      },
      {
        code: "logs",
        name: "LOGS",
        href: "/admin/ActivityLogs",
      },
      {
        code: "detailedReports",
        name: "REPORTS",
        href: "/admin/detailedReports",
      },
      {
        code: "branch",
        name: "BRANCH",
        href: "/admin/branch",
      },
      {
        code: "user",
        name: "USER",
        href: "/admin/user",
      },
      {
        code: "HSD",
        name: "HSD",
        href: "/hotels/staticData",
      },
    ],
  },
];


const MuiNav = () => {
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(-1);
  const [openSubmenuItemIndex, setOpenSubmenuItemIndex] = useState(-1);
  
  const handleMenuItemClick = (index) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? -1 : index);
    setOpenSubmenuItemIndex(-1); 
  
  };

  const handleSubmenuItemClick = (index) => {
    setOpenSubmenuItemIndex(openSubmenuItemIndex === index ? -1 : index);
  };

    const [openDrawer, setOpenDrawer] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
    setClicked(!clicked);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const handleClickMenu = (event, index) => {
  setMenuAnchorEl(event.currentTarget);
  setOpenSubmenuIndex(index);
  setOpenSubmenuItemIndex(-1);
};

 

return (
    <AppBar className="app" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{display: 'flex', justifyContent: 'space-between',alignItems: 'center',fontFamily: 'Roboto, sans-serif',}}>
        <img className='logo'
          src="https://assets.elabs.technology/web-framework/images/logo/default.jpg"
          alt="Logo"
        />

<div className="nav-center" >
          {menuItems.map((item, index) => (
            <div key={item.code}>
              <Box sx={{ position: "relative", display: "inline-block" }}>
                <Button
                  component="a"
                  href={item.href}
                  sx={{ color: "white" }}
                  onClick={() => handleMenuItemClick(index)}
                >
                  {item.name}
                  {item.subMenu && <ArrowDropDownIcon />}
                </Button>

                {item.subMenu && openSubmenuIndex === index && (
                  <Box sx={{ position: "absolute", top: "100%", left: 0, zIndex: 999, border: "1px solid grey", borderRadius: "5px", display: "inline-block",}}>
                    <List sx={{ backgroundColor: "black", fontFamily: "Roboto, sans-serif" }}>
                      {item.subMenu.map((submenuItem, subIndex) => (
                        <div key={submenuItem.code}>
                          <ListItem
                            button
                            component="a"
                            href={submenuItem.href}
                            sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center",color: "white"}}
                            onClick={() => handleSubmenuItemClick(subIndex)}
                          >
                            {submenuItem.name}
                            {submenuItem.subMenu && <ArrowDropDownIcon />}
                          </ListItem>
                          {submenuItem.subMenu && openSubmenuItemIndex === subIndex && (
                            <Paper  sx={{ backgroundColor: "black", color: "white",  position: "absolute", top: 25,  left: "100%", zIndex: 999,  border: "1px solid grey", borderRadius: "5px", display: "inline-block" }}>
                              {submenuItem.subMenu.map((subOption) => (
                                <div key={subOption.code}>
                                  <ListItem
                                    button
                                    component="a"
                                    href={subOption.href}
                                    sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", color: "white" }}>
                                    {subOption.name}
                                  </ListItem>
                                </div>
                              ))}
                            </Paper>
                          )}
                        </div>
                      ))}
                    </List>
                  </Box>
                )}
              </Box>
            </div>
          ))}
        </div>

        <div className="nav-end">
        <Button
        sx={{ color: "white" }}
        onClick={handleClickMenu}
      >
        LANGUAGE<ArrowDropDownIcon />
      </Button>
      <Menu
  anchorEl={menuAnchorEl}
  open={Boolean(menuAnchorEl)}
  onClose={() => setMenuAnchorEl(null)} 
  sx={{
    '& .MuiPaper-root': {
      backgroundColor: 'black',
      color: 'white',
      border: '1px solid grey',
      borderRadius: '5px',

    },
  }}
>
  {["ENGLISH UK", "ENGLISH US", "SPANISH", "DANISH", "GERMAN", "ARABIC"].map((language, index) => (
    <MenuItem key={index} onClick={(event) => handleClick(event, index)}>
      {language}
    </MenuItem>
  ))}
</Menu>
          <Button sx={{ color: "white" }}><NotificationsIcon /></Button>
          <Button sx={{ color: "white" }}><AccountCircleIcon /></Button>
        </div>

        <div className="icon">
          <IconButton
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            sx={{marginLeft: 'auto',marginTop: '-0.5rem',color: 'white',position: 'absolute',right: '0',
              ...(clicked && {
                '&.clickedIconButton': {
                  border: '2px solid grey',
                  borderRadius: '20%',
                },
              }),
            }}
            className={clicked ? 'clickedIconButton' : ''}>
            <MenuIcon />
          </IconButton>
          <div>
   <Drawer
  className='drawer'
  anchor='top'
  open={openDrawer}
  onClose={handleDrawerToggle}
  classes={{
    paper: 'drawer-medium',
  }}
>
      <List sx={{ backgroundColor: 'black', overflowY: 'auto', overflowX:"auto", maxHeight: '40vh',fontFamily: 'Roboto, sans-serif',  }} >
      <div>
  {menuItems.map((item, index) => (
    <div key={item.code}>
      <ListItem
        button
        component="a"
        href={item.href}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: 'white',
        }}
        onClick={() => handleMenuItemClick(index)}
      >
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <span>{item.name}</span>
          {item.subMenu && <ArrowDropDownIcon />}
        </div>
      </ListItem>

      {item.subMenu && openSubmenuIndex === index && (
        <Collapse in={true}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ border: '1px solid grey', borderRadius: '5px', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              {item.subMenu.map((submenuItem, subIndex) => (
                <div key={submenuItem.code}>
                  <ListItem
                    button
                    component="a"
                    href={submenuItem.href}
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      color: 'white',
                    }}
                    onClick={() => handleSubmenuItemClick(subIndex)}
                  >
                    {submenuItem.name}
                    {submenuItem.subMenu && <ArrowDropDownIcon />}
                  </ListItem>

                  {submenuItem.subMenu && openSubmenuItemIndex === subIndex && (
                    <Box sx={{ border: '1px solid grey', borderRadius: '5px', marginLeft: '0.5rem', marginRight: '0.5rem' }}>
                      <div>
                        {submenuItem.subMenu.map((subOption) => (
                          <ListItem
                            button
                            component="a"
                            href={subOption.href}
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              alignItems: 'center',
                              color: 'white',
                            }}
                            key={subOption.code}
                          >
                            {subOption.name}
                          </ListItem>
                        ))}
                      </div>
                    </Box>
                  )}
                </div>
              ))}
            </Box>
          </div>
        </Collapse>
      )}

      {index < menuItems.length - 1 && (
        <Divider sx={{ display: 'block', margin: '0.5rem auto', borderTop: '1px solid grey', opacity: '0.6' }} />
      )}
    </div>
  ))}


  <Divider sx={{ display: 'block', margin: '0.5rem auto', borderTop: '1px solid grey', opacity: '0.6' }} />
  <ListItem
        button
        onClick={() => handleMenuItemClick(0)} 
        sx={{display: 'flex',  justifyContent: 'center',  color: 'white',}} >
        LANGUAGE<ArrowDropDownIcon />
      </ListItem>

      <Collapse in={openSubmenuIndex === 0}>
        <div style={{ display: 'flex', justifyContent: 'center',alignItems: 'center', }}>
          <Box sx={{ border: '1px solid grey', borderRadius: '5px', width: '150px', margin: '5px 0', }}>
            <List>
              {["ENGLISH UK", "ENGLISH US", "SPANISH", "DANISH", "GERMAN", "ARABIC"].map((language, index) => (
                <ListItem
                  key={index}
                  button
                  onClick={() => handleSubmenuItemClick(index)}
                  sx={{ color: 'white', justifyContent: 'center' }}
                >
                  <ListItemText primary={language} />
                </ListItem>
              ))}
            </List>
          </Box>
        </div>
      </Collapse>
</div>
<Divider sx={{display: 'block',margin: '0.5rem auto',borderTop: '1px solid grey',opacity: '0.6'}}/>
   <ListItem button sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center', color: "white", marginLeft: '12px' }}>
        <ListItemIcon sx={{ color: "white" }}>
          <NotificationsIcon />
        </ListItemIcon>
      </ListItem>
      <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white", marginLeft: '12px'}}>
          <ListItemIcon sx={{color:"white"}}>
            <AccountCircleIcon />
          </ListItemIcon>
        </ListItem>
 <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white",}}>
          <ListItemIcon style={{ transform: 'rotate(90deg)',color:"white",marginRight:"0.6rem" ,marginTop:"0.5rem"}}>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <span>LOGOUT</span>
        </ListItem>
      </List>
      </Drawer>
    </div>
   </div>
  </Toolbar>
</AppBar>
  );
};
export default MuiNav;


