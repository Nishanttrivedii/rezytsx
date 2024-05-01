import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    marginTop: "17px",
    width: "calc(95% - 2rem)",
    margin: "0 1rem",
    marginLeft: "10px",
    borderRadius: "10px",
    height: "3rem",
    marginBottom: "14px",
    background:
      "linear-gradient(182.98deg, #01337C 28.19%, #013A8C 28.2%, #013A8C 96.59%, #00C17B 119.39%)",
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: "0.9rem",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between", marginBottom:"2rem" }}>
        <Typography variant="h6" className={classes.heading}>
          DEVICE ID
        </Typography>
        <Typography variant="h6" className={classes.heading}>
          PROPERTY
        </Typography>
        <Typography variant="h6" className={classes.heading}>
          INSTALLED DATE
        </Typography>
        <Typography variant="h6" className={classes.heading}>
          READINGS
        </Typography>
        <Typography variant="h6" className={classes.heading}>
          STATUS
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
