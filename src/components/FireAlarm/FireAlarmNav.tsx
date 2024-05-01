import { Typography, Button, AppBar, Toolbar, Badge } from "@mui/material";
import { Sort } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import FireImage from "../../assets/image2.png";
import Header from "./Header";
import Tables from "./Tables";
import { sampleData } from "./Data.tsx";

const useStyles = makeStyles(() => ({
  appBar: {
    marginTop: "1rem",
    backgroundColor: "white",
    borderRadius: "0.7rem",
    width: "calc(100% - 2rem)",
    margin: "0.5rem 48px 1rem",
    marginLeft: "1px",
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  heading: {
    display: "flex",
    alignItems: "center",
    color: "black",
  },
  content: {
    marginLeft: "21px",
    marginRight: "23px",
    backgroundColor: "rgba(237, 241, 247, 1)",
    minHeight: "calc(100vh - 4rem)",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  image: {
    width: 25,
    height: "auto",
  },
  table: {
    marginLeft: "-47px",
    flexBasis: "calc(100% - -2rem)",
    margin: "1.5rem 48px 0rem",
    borderRadius: "0.5rem",
    marginRight: "1rem",
  },
  dataCount: {
    color: "darkblue",
    marginLeft: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
  
}));

function FireAlarmNav() {
  const classes = useStyles();

  return (
    <>
      <div>
        <AppBar
          position="static"
          className={classes.appBar}
          style={{
            width: "100%",
            marginBottom: "0px",
            boxShadow: "none",
          }}
        >
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <img src={FireImage} alt="Your Image" className={classes.image} />
              <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
                Fire Alarms
              </Typography>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
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
                <Typography className={classes.dataCount}>
                  {sampleData.length}
                </Typography>
              </Badge>
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.content}>
          <Header />
          {[...Array(10)].map((_, index) => (
            <div key={index} className={classes.table}>
              <Tables data={sampleData[index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FireAlarmNav;
