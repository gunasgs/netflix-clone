import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import logo from "../assets/logonet.png";

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <div>
        <AppBar
          className={isScrolled ? "appbar-scrolled" : "appbar"}
          color="transparent"
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Link class="navbar-brand" to="/">
                  <img src={logo} alt="Netflix Logo" />
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={"/netflix"}>Home</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={"/moviesadd"}>Movies</Link>
                    </Typography>
                  </MenuItem>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <Link to={"/movieslist"}>MoviesList</Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>

              <Typography
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Link class="navbar-brand" to="/">
                  <img
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="Netflix Logo"
                  />
                </Link>
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    padding: 2,
                    fontWeight: 500,
                    color: "#fff",
                    display: "block",
                  }}
                >
                  <Link to={"/netflix"}>Home</Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    padding: 2,
                    fontWeight: 500,
                    color: "#fff",
                    display: "block",
                  }}
                >
                  <Link to={"/moviesadd"}>Movies</Link>
                </Button>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    padding: 2,
                    fontWeight: 500,
                    color: "#fff",
                    display: "block",
                  }}
                >
                  <Link to={"/movieslist"}>MoviesList</Link>
                </Button>
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip>
                  <IconButton onClick={handleOpenUserMenu}>
                    <section class="netflix-profile ">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                        alt="profile"
                      />
                    </section>
                  </IconButton>
                </Tooltip>
                <Menu
                  class="nav-avatar-container"
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography class="nav-avatar" textAlign="center">
                      <Link to="/" className=" nav-link  ">
                        Profile
                      </Link>

                      <Link to="/" className=" nav-link ">
                        Log Out
                      </Link>
                    </Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}

export default Nav;
