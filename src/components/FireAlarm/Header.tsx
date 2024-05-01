import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    marginTop: "17px",
    width: "calc(95% - 2rem)",
    margin: "0 1rem",
    marginLeft: "10px", 
    justifyContent:"center"
  },
  heading: {
    color: "white",
    flexGrow: 1,
    textAlign: "center",
  },
  navItem: {
    color: "white",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.appBar}
      style={{
        background:
            "linear-gradient(182.98deg, #01337C 28.19%, #013A8C 28.2%, #013A8C 96.59%, #00C17B 119.39%)",
        marginBottom: "14px",
        borderRadius: "10px",
        width:"100%",
        height:"3rem"
      }}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.heading} style={{marginLeft:"-7rem"}}>
          DEVICE ID
        </Typography>
        <Typography variant="h6" className={classes.heading} style={{marginLeft:"3rem"}}>
          PROPERTY
        </Typography>
        <Typography variant="h6" className={classes.heading}>
          INSTALLED DATE
        </Typography>
        <div className={classes.heading} style={{ marginLeft: "5rem" }}>
          <Typography variant="h6">
            READINGS
          </Typography>
        </div>
        <div className={classes.heading} style={{ flexGrow: 1, textAlign: "right" }}>
          <Typography variant="h6" style={{ display: "inline-block" }}>
            STATUS
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
