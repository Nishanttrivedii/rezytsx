import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import filterImg from "../assets/filter.png";
import ArrowRight from "../assets/rightarrow.png";
import PropertyImage from "../assets/property.png";
import useMediaQuery from "@mui/material/useMediaQuery";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const NavLink = styled(Typography)(({ theme }) => ({
  cursor: "pointer",
  padding: "0.5rem",
  "&:hover": {
    color: theme.palette.common.white,
  },
}));

const Logo = styled("img")(({ theme }) => ({
  width: "40px",
  marginRight: theme.spacing(2),
}));

const Container = styled(Box)(() => ({
  backgroundColor: "rgba(216, 223, 234, 1)",
  minHeight: "",
  paddingTop: "60px",
}));

export default function TopNavBar() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const Screen = useMediaQuery("(max-width: 600px)"); 
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 
  return (
    <Container>
      <AppBar
        position="fixed"
        style={{
          height: "5rem",
          background: "linear-gradient(184.98deg, #01337C 28.19%, #013A8C 28.2%, #013A8C 96.59%, #00C17B 119.39%)",
          fontFamily: "Roboto, Helvetica, Arial, sans-serif",
          borderRadius: isSmallScreen ? "1rem" : 0,
          width: isSmallScreen ? "94%" : "100%",
          marginRight: isSmallScreen ? "1rem" : "-1px", 
        }}        
      >
        <Toolbar>
          {isSmallScreen && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </IconButton>
          )}

          <Box
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "1rem",
              height: "100%",
            }}
          >
            {isSmallScreen ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={ArrowRight}
                  alt="Arrow Right"
                  style={{ height: "20px", width: "20px", marginRight: "5px" }}
                />
                <Typography color="white" sx={{ fontWeight: 600 }}>
                  Fire Alarms
                </Typography>
              </div>
            ) : (
              <>
                <img
                  src={PropertyImage}
                  alt="icon"
                  style={{ height: "20px", width: "20px", marginRight: "5px" }}
                />
                <Typography color="lightgray" sx={{ fontWeight: 600 }}>
                  Properties
                </Typography>
                <Typography color="white" sx={{ mx: 0.5 }}>
                  &gt;
                </Typography>
                <Typography color="lightgray" sx={{ fontWeight: 600 }}>
                  Property Name
                </Typography>
                <Typography color="white" sx={{ mx: 0.5 }}>
                  &gt;
                </Typography>
                <Typography color="white" sx={{ fontWeight: 600 }}>
                  Fire Alarms
                </Typography>
              </>
            )}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "flex", md: "flex", alignItems: "center" } }}
          >
            {isSmallScreen ? (
              <Box sx={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <IconButton size="medium" color="inherit">
                  <SearchIcon style={{ color: "white", marginRight: "8px" }} />
                  <Badge color="error" style={{ marginLeft: "8px" }}>
                    <MarkChatUnreadIcon style={{ color: "white" }} />
                  </Badge>
                </IconButton>

                <IconButton
                  size="medium"
                  color="inherit"
                  sx={{ marginLeft: "auto" }}
                >
                  <Badge
                    overlap="circular"
                    badgeContent=" "
                    variant="dot"
                    sx={{
                      color: "white",
                      "& .MuiBadge-dot": {
                        backgroundColor: "white",
                      },
                    }}
                  >
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </Box>
            ) : (
              <Search className="flex flex-row">
                <SearchIconWrapper>
                  <SearchIcon style={{ color: "white" }} />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search"
                  inputProps={{ "aria-label": "search" }}
                  style={{ marginRight: "8px" }}
                />
                <div className="flex flex-row  items-center gap-2">
                  <Button
                    variant="contained"
                    style={{
                      background: "white",
                      color: "black",
                      minWidth: "auto",
                      padding: "1px 10px",
                    }}
                  >
                    Properties
                  </Button>
                  <img src={filterImg} alt="Filter" className="h-6 w-6" />
                </div>
              </Search>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </Container>
  );
}
