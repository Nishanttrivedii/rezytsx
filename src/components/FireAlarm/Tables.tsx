import react from "react";
import TempImage from "../../assets/image3.png";
import DropImage from "../../assets/image4.png";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import batteryImg from "../../assets/Battery.png";
import RedTempImg from "../../assets/image5.png";
function Tables({ data }: any) {
  const { DEVICE_ID, PROPERTY, INSTALLED_DATE, READINGS, STATUS } = data;

  return (
    <Accordion
      style={{
        backgroundColor: "white",
        marginBottom: "1rem",
        marginLeft: "48px",
        marginRight: "48px",
        marginTop: "1.5rem",
        width: "calc(100% - 2rem)",
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
        <div style={{ width: "22%", marginTop: "0.5rem" }}>
          <Typography>{DEVICE_ID}</Typography>
          <Typography variant="subtitle2"></Typography>
        </div>
        <div style={{ width: "22%", marginTop: "0.5rem" }}>
          <Typography>{PROPERTY}</Typography>
          <Typography variant="subtitle2"></Typography>
        </div>
        <div style={{ width: "22%", marginTop: "0.5rem" }}>
          <Typography>{INSTALLED_DATE}</Typography>
          <Typography variant="subtitle2"></Typography>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginRight: "11px",
            marginLeft: "-11rem",
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
            {/* ------------------------------------------------ */}
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: "40px",
                marginRight: "-6px",
                backgroundColor: "rgb(240, 240, 240)",
                padding: "0.5rem",
                borderRadius: "5px",
                // width:"1px"
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
          </div>

          {/* ----------------------------------- */}
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

        {/* ------------------------------ */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: "10px",
            color: "white",
            marginLeft: "10rem",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: `${
                STATUS[0].ONDETAIL === "ONLINE"
                  ? STATUS[0].STDETAIL === "Battery 100"
                    ? "#00C17B"
                    : STATUS[0].STDETAIL === "Battery 42"
                    ? "rgba(255, 153, 0, 1)"
                    : STATUS[0].STDETAIL === "Battery 18"
                    ? "rgba(240, 83, 72, 1)"
                    : "#f0f0f0"
                  : "rgb(0, 193, 123,1)"
              }`,
              padding: "0.5rem",
              borderRadius: "5px",
              marginRight: "0.5rem",
              width: "8rem", // Set fixed width for battery status box
            }}
          >
            <img
              src={batteryImg}
              alt="Battery"
              style={{ width: "20px", height: "20px", marginRight: "0.5rem" }}
            />
            <Typography>{STATUS[0].STDETAIL}</Typography>
          </div>

          <div
            style={{
              backgroundColor: `${
                STATUS[0].ONDETAIL === "ONLINE"
                  ? "#00C17B"
                  : "rgba(255, 153, 0, 1)"
              }`,
              padding: "0.5rem",
              borderRadius: "5px",
              width: "6rem", // Set fixed width for online status box
            }}
          >
            <Typography>{STATUS[0].ONDETAIL}</Typography>
          </div>
        </div>
      </AccordionSummary>
    </Accordion>
  );
}

export default Tables;
