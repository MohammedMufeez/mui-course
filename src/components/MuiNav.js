import "./MuiNavbarStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, IconButton, Menu, MenuItem, List, ListItem, ListItemText, Divider, ListItemIcon, Box, Collapse, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const menuItems = [
  {
    label: "Hotels",
    link: "/hoteldashboard",
  },
  {
    label: "Flights",
    link: "/flightdashboard",
  },
  {
    label: "Transfers",
    link: "/transfersdashboard",
  },
  {
    label: "D.Pkg.",
    link: "/package/dashboard",
  },
 
];

const cpkgSubmenuItems = [
  {
    label: "CREATE",
    subMenu: [
      {
        label: "PACKAGES",
        link: "/customPackage/create",
      },
      {
        label: "STATIC EXTRAS",
        link: "/customPackage/master/staticExtra",
      },
      {
        label: "CATEGORY",
        link: "/customPackage/master/category",
      },
      {
        label: "SITES",
        link: "/customPackage/master/site",
      },
    ],
  },
  {
    label: "SEARCH",
    subMenu: [
      {
        label: "DASHBOARD",
        link: "/customPackage/dashboard",
      },
    ],
  },
  {
    label: "VIEW",
    subMenu: [
      {
        label: "BOOKINGS",
        link: "/customPackage/bookingView",
      },
      {
        label: "PACKAGES",
        link: "/customPackage/view",
      },
    ],
  },

];

const directContractsSubmenuItems = [
  {
    label: "MASTER",
    link: "/directContract/master/boardType",
  },
  {
    label: "CONTRACTS",
    link: "/directcontract/detailed-reports",
    subMenu: [
      {
        label: "ADD",
        link: "/directcontract/create",
      },
      {
        label: "VIEW",
        link: "/directContract/view",
      },
      {
        label: "CALCULATION",
        link: "/directContract/calculation",
      },
    ],
  },

];

const adminSubmenuItems = [
  {
    label: "DASHBOARD",
    link: "/admin/dashboard",
  },
  {
    label: "LOGS",
    link: "/admin/ActivityLogs",
  },
  {
    label: "REPORTS",
    link: "/admin/detailedReports",
  },
  {
    label: "BRANCH",
    link: "/admin/branch",
  },
  {
    label: "USER",
    link: "/admin/user",
  },
  {
    label: "HSD",
    link: "/hotels/staticData",
  },
 
];


const MuiNav = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [anchorElCpkg, setAnchorElCpkg] = useState(null);
  const [anchorElDirectContracts, setAnchorElDirectContracts] = useState(null);
  const [anchorElAdmin, setAnchorElAdmin] = useState(null);

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
    setClicked(!clicked);
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleClickCpkg = (event) => {
    setAnchorElCpkg(event.currentTarget);
  };

  const handleClickDirectContracts = (event) => {
    setAnchorElDirectContracts(event.currentTarget);
  };

  const handleClickAdmin = (event) => {
    setAnchorElAdmin(event.currentTarget);
  };

  const handleCloseCpkg = () => {
    setAnchorElCpkg(null);
    setOpenSubmenuIndex(-1);
  };

  const handleCloseDirectContracts = () => {
    setAnchorElDirectContracts(null);
  };

  const handleCloseAdmin = () => {
    setAnchorElAdmin(null);
  };

  const [anchorElCPKG, setAnchorElCPKG] = useState(null);
  const [submenuOpenPACKAGES, setSubmenuOpenPACKAGES] = useState(false);
  const [submenuOpenDASHBOARD, setSubmenuOpenDASHBOARD] = useState(false); 
  const [submenuOpenBOOKINGS, setSubmenuOpenBOOKINGS] = useState(false); 

  const [anchorElADMIN, setAnchorElADMIN] = useState(null);
  const handleClickADMIN= () => {
    setAnchorElADMIN((prevOpen) => !prevOpen);
  };
  
  const handleClickCPKG = () => {
    setAnchorElCPKG((prevOpen) => !prevOpen);
  };

  const handleSubmenuClickCreate = () => {
    setSubmenuOpenPACKAGES(!submenuOpenPACKAGES);
  };

  const handleSubmenuClickSEARCH = () => {
    setSubmenuOpenDASHBOARD(!submenuOpenDASHBOARD);
  };

  const handleSubmenuClickVIEW = () => {
    setSubmenuOpenBOOKINGS(!submenuOpenBOOKINGS);
  };
  
  const [anchorElDIRECTCONTRACTS, setAnchorElDIRECTCONTRACTS] = useState(null);
  const [submenuOpenDIRECTCONTRACTS, setSubmenuOpenDIRECTCONTRACTS] = useState(false);

  const handleClickDIRECTCONTRACTS= () => {
    setAnchorElDIRECTCONTRACTS((prevOpen) => !prevOpen);
  };
  const handleSubmenuClickDIRECTCONTRACTS= () => {
    setSubmenuOpenDIRECTCONTRACTS(!submenuOpenDIRECTCONTRACTS);
  };

  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(-1);
  const handleSubmenuClick = (index) => (event) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? -1 : index);
  };

  return (
    <AppBar className="app" sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontFamily: 'Roboto, sans-serif', 
      }}>
        <img className='logo'
          src="https://assets.elabs.technology/web-framework/images/logo/default.jpg"
          alt="Logo"
        />

        <div className="nav-center">
          {menuItems.map((item, index) => (
            <Link to={item.link} key={index}>
              <Button sx={{ color: "white" }}>{item.label}</Button>
            </Link>
          ))}

          {/* C.PKG */}
          <div>
      <Button onClick={handleClickCpkg} sx={{ color: "white" }}>
        C.PKG<ArrowDropDownIcon />
      </Button>

      <Menu
         anchorEl={anchorElCpkg} 
        open={Boolean(anchorElCpkg)}
        onClose={handleCloseCpkg}
        PaperProps={{
          sx: {
            backgroundColor: 'black',
            border: "1px solid grey",
            borderRadius: "5px",
            display: "inline-block",
            marginLeft: "0.5rem",
            marginRight: "0.5rem",
          },
        }}
        MenuListProps={{
          sx: {
            color: 'white',
          },
        }}
      >
        {cpkgSubmenuItems.map((item, index) => (
          <MenuItem key={index}>
            {item.label}
            <ArrowDropDownIcon
              onClick={handleSubmenuClick(index)}
              sx={{ cursor: 'pointer' }}
            />
            {item.subMenu && openSubmenuIndex === index && (
              <Menu
                anchorEl={anchorElCpkg} 
                open={openSubmenuIndex === index}
                onClose={handleSubmenuClick(index)}
               
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
               
                PaperProps={{
                  sx: {
                    backgroundColor: 'black',
                    border: "1px solid grey",
                    borderRadius: "5px",
                    display: "inline-block",
                    marginLeft: "0.5rem",
                    marginRight: "0.5rem",
                  },
                }}
                MenuListProps={{
                  sx: {
                    color: 'white',
                  },
                }}
              >
                {item.subMenu.map((subMenuItem, subIndex) => (
                  <MenuItem key={subIndex}>{subMenuItem.label}</MenuItem>
                ))}
              </Menu>
            )}
          </MenuItem>
        ))}
      </Menu>
    </div>

          {/* DIRECT CONTRACTS */}
          <div>
            <Button
              onClick={handleClickDirectContracts}
              sx={{ color: "white" }}
            >
              DIRECT CONTRACTS<ArrowDropDownIcon />
            </Button>

            <Menu
              anchorEl={anchorElDirectContracts}
              open={Boolean(anchorElDirectContracts)}
              onClose={handleCloseDirectContracts}
              PaperProps={{
                sx: {
                  backgroundColor: 'black',
                  border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem"
                },
              }}
              MenuListProps={{
                sx: {
                  color: 'white',
                },
              }}
            >
              {directContractsSubmenuItems.map((item, index) => (
                <MenuItem key={index}>{item.label}</MenuItem>
              ))}
            </Menu>
          </div>

          {/* ADMIN */}
          <div>
            <Button
              onClick={handleClickAdmin}
              sx={{ color: "white" }}
            >
              ADMIN<ArrowDropDownIcon />
            </Button>

            <Menu
              anchorEl={anchorElAdmin}
              open={Boolean(anchorElAdmin)}
              onClose={handleCloseAdmin}
              PaperProps={{
                sx: {
                  backgroundColor: 'black',
                  border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem"
                },
              }}
              MenuListProps={{
                sx: {
                  color: 'white',
                },
              }}
            >
              {adminSubmenuItems.map((item, index) => (
                <MenuItem key={index}>{item.label}</MenuItem>
              ))}
            </Menu>
          </div>
        </div>

        <div className="nav-end">
          <Button sx={{ color: "white" }}>
            LANGUAGE<ArrowDropDownIcon />
          </Button>
          <Button sx={{ color: "white" }}><NotificationsIcon /></Button>
          <Button sx={{ color: "white" }}><AccountCircleIcon /></Button>
        </div>

        <div className="icon">
          <IconButton
            aria-label='open drawer'
            onClick={handleDrawerToggle}
            sx={{
              marginLeft: 'auto',
              marginTop: '-0.5rem',
              color: 'white',
              position: 'absolute',
              right: '0',
              ...(clicked && {
                '&.clickedIconButton': {
                  border: '2px solid grey',
                  borderRadius: '20%',
                },
              }),
            }}
            className={clicked ? 'clickedIconButton' : ''}
          >
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
      <List sx={{ backgroundColor: 'black',
      overflowY: 'auto', overflowX:"auto", maxHeight: '40vh', fontFamily: 'Roboto, sans-serif',  }} >
        <ListItem button component="a" href="/hotels" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white" }}>
          HOTELS
        </ListItem>
<Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button component="a" href="/flights" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white" }}>
        FLIGHTS 
        </ListItem>
 <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button component="a" href="/transfers" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white" }}>
        TRANSFERS 
        </ListItem>
<Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button component="a" href="/d.pkg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white" }}>
        D.PKG
        </ListItem>
 <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button onClick={handleClickCPKG} sx={{ display: 'flex',flexDirection: 'row',justifyContent: 'center',color:"white" }}>
        C.PKG<ArrowDropDownIcon />  
        </ListItem>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Collapse in={Boolean(anchorElCPKG)}  timeout="auto" unmountOnExit  sx={{ display: 'flex', color:"white",}}>
        <Box style={{ border: "1px solid grey",borderRadius: "5px", display: "inline-block",  marginLeft: "0.5rem", marginRight: "0.5rem" }}   >
          <List>
            <ListItem button onClick={handleSubmenuClickCreate} >
                CREATE  <ArrowDropDownIcon />
             </ListItem>
            {submenuOpenPACKAGES && (
              <Box style={{ border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                <ListItem button>PACKAGES</ListItem>
                <ListItem button>STATIC EXTRAS</ListItem>
                <ListItem button>CATEGORY</ListItem>
                <ListItem button>SITES</ListItem>
              </Box>
            )}
            <ListItem button onClick={handleSubmenuClickSEARCH}>
             SEARCH<ArrowDropDownIcon />
            </ListItem>
            {submenuOpenDASHBOARD && (
              <Box style={{ border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                <ListItem button>
                  DASHBOARD
                </ListItem>
              </Box>
            )}
            <ListItem button onClick={handleSubmenuClickVIEW}>
             VIEW  <ArrowDropDownIcon /> 
            </ListItem>
            {submenuOpenBOOKINGS && (
              <Box style={{ border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                <ListItem button>BOOKINGS</ListItem>
                <ListItem button>PACKAGES</ListItem>
              </Box>
            )}
          </List>
          </Box>
        </Collapse>
        </div>
      <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        
      <ListItem button onClick={handleClickDIRECTCONTRACTS} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', color: 'white' }}>
        DIRECT CONTRACTS<ArrowDropDownIcon />
        </ListItem>
        
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Collapse in={Boolean(anchorElDIRECTCONTRACTS)} timeout="auto" unmountOnExit  sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center',color:"white" }}>
        <Box style={{ border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem" }}>
          <List>
         <ListItem button>
         <ListItem> MASTER</ListItem>
         </ListItem>
            <ListItem button onClick={handleSubmenuClickDIRECTCONTRACTS} 
            sx={{ display: 'flex',flexDirection: 'column', alignItems: 'center',color:"white" }}>
              <ListItem>
                CONTRACTS <ArrowDropDownIcon />
              </ListItem>
              </ListItem>
            {submenuOpenDIRECTCONTRACTS && (
              <Box style={{ border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem" }}>
                <ListItem button>ADD</ListItem>
                <ListItem button>VIEW</ListItem>
                <ListItem button> CALCULATION</ListItem>
              </Box>
            )}
          </List>
          </Box>
        </Collapse>
        </div>
        <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button onClick={handleClickADMIN}   sx={{ display: 'flex',flexDirection: 'row', justifyContent: 'center', color:"white" }}>
        ADMIN<ArrowDropDownIcon />  
        </ListItem>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Collapse in={Boolean(anchorElADMIN)}  timeout="auto"  unmountOnExit 
         sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white" }} >
        <Box style={{ border: "1px solid grey", borderRadius: "5px", display: "inline-block", marginLeft: "0.5rem", marginRight: "0.5rem" }}>
          <List>
          <ListItem> DASHBOARD</ListItem>
          <ListItem>LOGS</ListItem>
          <ListItem>REPORTS</ListItem>
          <ListItem>BRANCH</ListItem>
          <ListItem>USER</ListItem>
          <ListItem>HSD</ListItem>
          </List>
          </Box>
        </Collapse>
        </div>

          <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white", marginLeft: '12px' }}>
          <ListItemIcon sx={{color:"white"}}>
            <NotificationsIcon />
          </ListItemIcon>
        </ListItem>
          <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white", marginLeft: '12px'}}>
          <ListItemIcon sx={{color:"white"}}>
            <AccountCircleIcon />
          </ListItemIcon>
        </ListItem>
 <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
        <ListItem button sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white"}}>
          <ListItemIcon style={{ transform: 'rotate(90deg)',color:"white" }}>
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


