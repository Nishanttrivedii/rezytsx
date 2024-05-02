import React from 'react'
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    appBar: {
      marginTop: "17px",
      width: "calc(98% - 2rem)",
      margin: "0 1rem",
      marginLeft: "3px",
      borderRadius: "10px",
      height: "3rem",
      marginBottom: "14px",
      background:
        "linear-gradient(182.98deg, #01337C 28.19%, #013A8C 28.2%, #013A8C 96.59%, #00C17B 119.39%)",
    },
    heading: {
      color: "white",
      fontSize: "0.9rem",
      padding: "0.5rem",
      textAlign: "left", // Align headers to the left
    },
  }));
const Tabless = ({data}:any) => {
    const classes = useStyles();
  return (
    <table style={{ width: "100%" }}>
    <thead>
    <tr>
              <th style={{ width: "20%" }} className={classes.heading}>
                DEVICES
              </th>
              <th style={{ width: "20%" }} className={classes.heading}>
                PROPERTY
              </th>
              <th style={{ width: "20%" }} className={classes.heading}>
                INSTALLED DATE
              </th>
              <th style={{ width: "20%" }} className={classes.heading}>
                READINGS
              </th>
              <th style={{ width: "20%" }} className={classes.heading}>
                STATUS
              </th>
            </tr>
    </thead>
   </table>
  )
}

export default Tabless