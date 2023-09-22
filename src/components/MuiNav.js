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
    label: "HOTELS",
    link: "/hoteldashboard",
  },
  {
    label: "FLIGHTS",
    link: "/flightdashboard",
  },
  {
    label: "TRANSFERS",
    link: "/transfersdashboard",
  },
  {
    label: "D.PKG.",
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

  const handleClickCpkg = (event) => {
    setAnchorElCpkg(event.currentTarget);
  };
  const handleCloseCpkg = () => {
    setAnchorElCpkg(null);
  };

  const handleClickDirectContracts = (event) => {
    setAnchorElDirectContracts(event.currentTarget);
  };
 
  
  const handleClickAdmin = (event) => {
    setAnchorElAdmin(event.currentTarget);
  };

  

  const handleCloseDirectContracts = () => {
    setAnchorElDirectContracts(null);
  };

  const handleCloseAdmin = () => {
    setAnchorElAdmin(null);
  };
  
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(-1);
  const handleSubmenuClick = (index) => (event) => {
    setOpenSubmenuIndex(openSubmenuIndex === index ? -1 : index);
  };

  const [submenuOpenCp, setSubmenuOpenCp] = useState(false);
  const handleSubmenuClickCp = () => {
    setSubmenuOpenCp(!submenuOpenCp);
  };

  const [submenuOpenDc, setSubmenuOpenDc] = useState(false);
  const handleSubmenuClickDc= () => {
    setSubmenuOpenDc(!submenuOpenDc);
  };

  const [submenuOpenAdm, setSubmenuOpenAdm] = useState(false);
  const handleSubmenuClickAdm = () => {
    setSubmenuOpenAdm(!submenuOpenAdm);
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
              <Link to={item.link} style={{ color: "inherit", textDecoration: "none" }}>
                {item.label}
              </Link>
              <ArrowDropDownIcon
                onClick={handleSubmenuClick(index)}
                sx={{ cursor: 'pointer' }}
              />
              {item.subMenu && openSubmenuIndex === index && (
                <Menu
                  anchorEl={anchorElCpkg}
                  open={openSubmenuIndex === index}
                  onClose={handleSubmenuClick(index)}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
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
                    <MenuItem key={subIndex}>
                      <Link to={subMenuItem.link} style={{ color: "inherit", textDecoration: "none" }}>
                        {subMenuItem.label}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* DIRECT CONTRACTS */}
      <div>
        <Button onClick={handleClickDirectContracts} sx={{ color: "white" }}>
          DIRECT CONTRACTS<ArrowDropDownIcon />
        </Button>

        <Menu
          anchorEl={anchorElDirectContracts}
          open={Boolean(anchorElDirectContracts)}
          onClose={handleCloseDirectContracts}
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
          {directContractsSubmenuItems.map((item, index) => (
            <MenuItem key={index}>
              <Link to={item.link} style={{ color: "inherit", textDecoration: "none" }}>
                {item.label}
              </Link>
              <ArrowDropDownIcon
                onClick={handleSubmenuClick(index)}
                sx={{ cursor: 'pointer' }}
              />
              {item.subMenu && openSubmenuIndex === index && (
                <Menu
                  anchorEl={anchorElDirectContracts}
                  open={openSubmenuIndex === index}
                  onClose={handleSubmenuClick(index)}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
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
                    <MenuItem key={subIndex}>
                      <Link to={subMenuItem.link} style={{ color: "inherit", textDecoration: "none" }}>
                        {subMenuItem.label}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              )}
            </MenuItem>
          ))}
        </Menu>
      </div>

      {/* ADMIN */}
      <div>
        <Button onClick={handleClickAdmin} sx={{ color: "white" }}>
          ADMIN<ArrowDropDownIcon />
        </Button>

        <Menu
          anchorEl={anchorElAdmin}
          open={Boolean(anchorElAdmin)}
          onClose={handleCloseAdmin}
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
          {adminSubmenuItems.map((item, index) => (
            <MenuItem key={index}>
              <Link to={item.link} style={{ color: "inherit", textDecoration: "none" }}>
                {item.label}
              </Link>
            </MenuItem>
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
       <div>
      {menuItems.map((item, index) => (
        <div key={index}>
          <ListItem
            button
            component="a"
            href={item.link}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
            }}
          >
            {item.label}
          </ListItem>
          <Divider
            sx={{
              display: 'block',
              margin: '0.5rem auto',
              borderTop: '1px solid grey',
              opacity: '0.6',
            }}
          />
        </div>
      ))}

<ListItem
  button
  onClick={handleSubmenuClickCp}
  sx={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
  }}
>
  C.PKG <ArrowDropDownIcon />
</ListItem>

<Collapse in={submenuOpenCp} timeout="auto" unmountOnExit sx={{ display: 'flex', color: 'white' }}>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Box
      style={{
        border: '1px solid grey',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
      }}
    >
      <List>
        {cpkgSubmenuItems.map((submenu, index) => (
          <div key={index}>
            <ListItem
              button
              onClick={submenu.subMenu ? handleSubmenuClick(index) : undefined} 
            >
              {submenu.label} {submenu.subMenu && <ArrowDropDownIcon />}
            </ListItem>
          
            {submenu.subMenu && openSubmenuIndex === index && (
              <Box
                style={{
                  border: '1px solid grey',
                  borderRadius: '5px',
                  display: 'inline-block',
                  marginLeft: '0.5rem',
                  marginRight: '0.5rem',
                }}
              >
                <List>
                  {submenu.subMenu.map((subMenuItem, subIndex) => (
                    <ListItem button key={subIndex} component="a" href={subMenuItem.link}>
                      {subMenuItem.label}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </div>
        ))}
      </List>
    </Box>
  </div>
</Collapse>



      <Divider
        sx={{
          display: 'block',
          margin: '0.5rem auto',
          borderTop: '1px solid grey',
          opacity: '0.6',
        }}
      />

      <ListItem
        button
        onClick={handleSubmenuClickDc} 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        DIRECT CONTRACTS <ArrowDropDownIcon />
      </ListItem>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Collapse in={submenuOpenDc} timeout="auto" unmountOnExit sx={{ display: 'flex', color: 'white' }}>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <Box
      style={{
        border: '1px solid grey',
        borderRadius: '5px',
        display: 'inline-block',
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
      }}
    >
      <List>
        {directContractsSubmenuItems.map((submenu, index) => (
          <div key={index}>
            <ListItem
              button
              onClick={submenu.subMenu ? handleSubmenuClick(index) : undefined} 
            >
              {submenu.label} {submenu.subMenu && <ArrowDropDownIcon />}
            </ListItem>
          
            {submenu.subMenu && openSubmenuIndex === index && (
              <Box
                style={{
                  border: '1px solid grey',
                  borderRadius: '5px',
                  display: 'inline-block',
                  marginLeft: '0.5rem',
                  marginRight: '0.5rem',
                }}
              >
                <List>
                  {submenu.subMenu.map((subMenuItem, subIndex) => (
                    <ListItem button key={subIndex} component="a" href={subMenuItem.link}>
                      {subMenuItem.label}
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}
          </div>
        ))}
      </List>
    </Box>
  </div>
</Collapse>
      </div>
    </div>
        <Divider sx={{ display: "block", margin: "0.5rem auto", borderTop: "1px solid grey", opacity: "0.6" }} />
         
        <ListItem
        button
        onClick={handleSubmenuClickAdm}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        ADMIN <ArrowDropDownIcon />
      </ListItem>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Collapse in={submenuOpenAdm} timeout="auto" unmountOnExit sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'white' }}>
          <Box
            style={{
              border: '1px solid grey',
              borderRadius: '5px',
              display: 'inline-block',
              marginLeft: '0.5rem',
              marginRight: '0.5rem',
            }}
          >
            <List>
              {adminSubmenuItems.map((submenuItem, index) => (
                <ListItem button key={index} component="a" href={submenuItem.link}>
                  {submenuItem.label}
                </ListItem>
              ))}
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
        <ListItem  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color:"white", marginLeft: '12px'}}>
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


