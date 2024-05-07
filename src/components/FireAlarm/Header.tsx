import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    marginTop: "17px",
    width: "calc(96% - 2rem)",
    margin: "0 1rem",
    marginLeft: "10px",
    borderRadius: "10px",
    height: "3rem",
    marginBottom: "14px",
    background:
      "linear-gradient(182.98deg, #01337C 28.19%, #013A8C 28.2%, #013A8C 96.59%, #00C17B 119.39%)",
  },
  heading: {
    fontWeight: "400",
    color: "white",
    padding: "0.5rem",
    textAlign: "left",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
}));

function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  if (isSmallScreen) {
    return null;
  }

  return (
    <AppBar
      position="static"
      className={classes.appBar}
      style={{ marginLeft: "-1rem", width: "96%", height: "3.5rem" }}
    >
      <Toolbar style={{ display: "flex", marginBottom: "2rem" }}>
        <table style={{ width: "100%" }}>
          <thead>
            <tr style={{ justifyContent: "center" }}>
              <th style={{ padding: "0.5rem" }} colSpan={2}></th>
              <th style={{ width: "14%" }} className={classes.heading}>
                DEVICES
              </th>
              <th style={{ width: "16%" }} className={classes.heading}>
                PROPERTY
              </th>

              <th style={{ padding: "0.5rem" }} colSpan={2}></th>
              <th style={{ width: "19%" }} className={classes.heading}>
                INSTALLED DATE
              </th>
              <th style={{ width: "49%" }} className={classes.heading}>
                READINGS
              </th>
              <th style={{ width: "1%" }} className={classes.heading}>
                STATUS
              </th>
            </tr>
          </thead>
        </table>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
