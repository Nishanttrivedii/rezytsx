import React from "react";
import TempImage from "../../assets/image3.png";
import DropImage from "../../assets/image4.png";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import RedTempImg from "../../assets/image5.png";
import RightArrow from "../../assets/rightarrow.png"

function BuilTables({ data }: any) {
  const { UNIT, DEVICES, INSTALLED_DATE, READINGS, TENANT_NAME } = data;

  return (
    <Accordion
      style={{
        backgroundColor: "white",
        marginBottom: "1rem",
        marginLeft: "48px",
        marginRight: "48px",
        marginTop: "1.5rem",
        width: "calc(100% - 1rem)",
      }}
    >
      <AccordionSummary
        id="myc"
        style={{
          marginTop: "-3rem",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "1.5rem",
        }}
      >
        <div style={{ width: "15%", marginTop: "0.5rem" }}>
          <Typography>{UNIT}</Typography>
          <Typography variant="subtitle2"></Typography>
        </div>

        <div style={{ width: "41%", marginTop: "0.5rem" }}>
          <Typography>
            {DEVICES.map(
              (device: any) => `${device.DDector}  ${device.DTemp}`
            ).join(", ")}
          </Typography>
          <Typography variant="subtitle2"></Typography>
        </div>

        <div
          style={{ width: "15%", marginTop: "0.5rem", marginLeft: "-20rem" }}
        >
          <Typography>{INSTALLED_DATE}</Typography>
          <Typography variant="subtitle2"></Typography>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "17rem",
            marginLeft: "auto",
          }}
        >
          <div
            style={{
              height: "40px",
              marginRight: "-6px",
              backgroundColor: "rgb(240, 240, 240)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          >
            {parseInt(READINGS[0].REDETAIL.split(":")[1]) <= 25 ? (
              <img
                src={RedTempImg}
                alt="Image"
                style={{ width: "20px", height: "20px" }}
              />
            ) : (
              <img
                src={TempImage}
                alt="Another Image"
                style={{ width: "20px", height: "20px" }}
              />
            )}
          </div>

          <div
            style={{
              marginRight: "0.5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                backgroundColor: "#f0f0f0",
                padding: "0.5rem",
                borderRadius: "5px",
              }}
            >
              <Typography>
                <span>{READINGS[0].REDETAIL.split(":")[0]}:</span>
                <span style={{ color: "rgba(0, 193, 123, 1)" }}>
                  {READINGS[0].REDETAIL.split(":")[1]}
                </span>
              </Typography>
            </div>
          </div>

          {/* Humidity */}
          <div
            style={{
              height: "40px",
              marginRight: "-14px",
              backgroundColor: "rgb(240, 240, 240)",
              padding: "0.5rem",
              borderRadius: "5px",
            }}
          >
            <img
              src={DropImage}
              alt="Image"
              style={{ width: "20px", height: "20px" }}
            />
          </div>

          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: "0.5rem",
              borderRadius: "5px",
              marginLeft: "0.5rem",
            }}
          >
            <Typography>{READINGS[0].HUDETAIL}</Typography>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "10px",
            color: "black", 
            marginLeft: "1rem",
          }}
        >
          <Typography style={{marginRight:"1rem"}}>{TENANT_NAME}</Typography>
          <img src={RightArrow} alt="RightArrow" className="h-6 w-6" />
        </div>
      </AccordionSummary>
    </Accordion>
  );
}

export default BuilTables;
