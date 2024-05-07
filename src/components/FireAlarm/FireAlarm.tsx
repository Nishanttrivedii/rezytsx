import { Typography, Button, AppBar, Toolbar, Badge } from "@mui/material";
import { Sort } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import FireImage from "../../assets/image2.png";
import Header from "./Header.tsx";
import Tables from "./Tables.tsx";
import { sampleData } from "./Data.tsx";
import useMediaQuery from "@mui/material/useMediaQuery";
import FilterIcon from "../../assets/filterIcon.png";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles(() => ({
  appBar: {
    marginTop: "3rem",
    backgroundColor: "white",
    borderRadius: "0.7rem",
    width: "99%",
    margin: "0 1rem",
    marginLeft: "1rem",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  content: {
    marginLeft: "1rem",
    marginRight: "1rem",
    minHeight: "calc(100vh - 4rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  image: {
    width: 25,
    height: "auto",
    color: "black",
  },
  table: {
    marginLeft: "-6px",
    flexBasis: "calc(100% - -2rem)",
    margin: "-0.5rem 0",
    borderRadius: "0.5rem",
    marginRight: "1rem",
  },
  dataCount: {
    color: "darkblue",
    marginLeft: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

function FireAlarm() {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <>
      <div style={{}}>
        <AppBar position="static" className={classes.appBar} style={{ width: isSmallScreen ? "92%" : "98%" }}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.heading}>
              <svg
                style={{ color: "darkblue", marginRight: "10px" }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              <img src={FireImage} alt="Your Image" className={classes.image} />
              <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                Fire Alarms
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center", color: "black" }}>
              {isSmallScreen ? (
                <IconButton color="inherit" sx={{ padding: "8px" }}>
                  <img src={FilterIcon} alt="Filter" style={{ width: "46px", height: "46px", color: "darkblue" }} />
                </IconButton>
              ) : (
                <Badge color="secondary">
                  <Button
                    style={{
                      backgroundColor: "rgba(192, 217, 255, 1)",
                      color: "darkblue",
                    }}
                    endIcon={<Sort />}
                  >
                    Sort By
                  </Button>
                  <Typography className={classes.dataCount} style={{marginLeft:"0.5rem"}}>{sampleData.length}</Typography>
                </Badge>
              )}
            </div>
          </Toolbar>
        </AppBar>
        <div
          className={classes.content}
          style={
            !isSmallScreen
              ? { backgroundColor: "transparent", marginLeft: "0.5rem", width: "100%" }
              : { }
          }
        >
          <Header />
        
            <div className={classes.table}>
              <Tables  />
            </div>
        </div>
      </div>
    </>
  );
}

export default FireAlarm;
