import { Accordion, AccordionSummary, Typography } from "@mui/material";
import SmokeDetectorImage from "../../assets/smokedtec.png";
import TemperatureImage from "../../assets/tempdtec.png";
import RedTempImg from "../../assets/image5.png";
import TempImage from "../../assets/image3.png";
import DropImage from "../../assets/image4.png";
import RightArrow from "../../assets/rightarrowsmokep.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileImg from "../../assets/mobile.png";
import DDectorImage from "../../assets/smokedtec.png";
import DTempImage from "../../assets/tempdtec.png";

function getDeviceBackgroundColor(deviceType: string) {
  switch (deviceType) {
    case "Smoke Detector":
    case "Temperature/Humidity":
      return "#f0f0f0";
    default:
      return "";
  }
}

function getDeviceImage(deviceType: string) {
  switch (deviceType) {
    case "Smoke Detector":
      return SmokeDetectorImage;
    case "Temperature/Humidity":
      return TemperatureImage;
    default:
      return null;
  }
}

function BuilTables({ data }: any) {
  const { UNIT, DEVICES, INSTALLED_DATE, READINGS, TENANT_NAME } = data;
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div>
      {isSmallScreen ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "2rem",
            marginLeft: "1rem",
            marginRight: "1rem",
          }}
        >
          <div
            style={{
              marginTop: "-2rem",
              marginRight: "-6rem",
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              padding: "1rem",
              borderRadius: "5px",
              backgroundColor: "white",
              width: "106%",
              maxWidth: "400px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={MobileImg}
                alt="Your Image"
                style={{ width: "24px", marginRight: "8px" }}
              />
              <Typography style={{ padding: "0.5rem", color: "black" }}>
                <span style={{ fontWeight: "normal" }}>{UNIT}</span>
              </Typography>
              <img
                src={RightArrow}
                alt="RightArrow"
                className="h-8 w-8"
                style={{ marginLeft: "158px" }}
              />
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <Typography
                style={{
                  marginLeft: "0rem",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  paddingRight: "0rem",
                  fontWeight: "400",
                  backgroundColor: "var(--Shades-25, #EDF1F7)",
                  width: "calc(59% - 0.375rem)",
                  display: "flex",
                  alignItems: "center",
                  marginRight: "0.5rem",
                }}
              >
                <img
                  src={DDectorImage}
                  alt="Detector Icon"
                  style={{ width: "24px", marginRight: "8px" }}
                />
                <span style={{ fontSize: "small", marginLeft: "0rem" }}>
                  {DEVICES[0].DDector}
                </span>
              </Typography>
              <Typography
                style={{
                  marginLeft: "0rem",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  paddingRight: "0rem",
                  fontWeight: "400",
                  backgroundColor: "var(--Shades-25, #EDF1F7)",
                  width: "calc(59% - 0.375rem)",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={DTempImage}
                  alt="Temperature Icon"
                  style={{ width: "24px", marginRight: "8px" }}
                />
                <span style={{ fontSize: "small", marginLeft: "-1rem" }}>
                  {DEVICES[0].DTemp}
                </span>
              </Typography>
            </div>
            <Typography
              style={{
                marginTop: "0.5rem",
                marginLeft: "0rem",
                marginRight: "0rem",
                borderRadius: "4px",
                padding: "0.5rem",
                fontWeight: "400",
                backgroundColor: "var(--Shades-25, #EDF1F7)",
                marginBottom: "0.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {parseInt(READINGS[0].REDETAIL.split(":")[1]) <= 25 ? (
                  <img
                    src={RedTempImg}
                    alt="Temperature"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                    }}
                  />
                ) : (
                  <img
                    src={TempImage}
                    alt="Temperature"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                    }}
                  />
                )}
                <Typography style={{ fontSize: "large" }}>
                  <span>{READINGS[0].REDETAIL.split(":")[0]}:</span>{" "}
                  <span style={{ color: "rgba(0, 193, 123, 1)" }}>
                    {READINGS[0].REDETAIL.split(":")[1]}
                  </span>
                </Typography>
              </div>
            </Typography>
            <Typography
              style={{
                marginLeft: "0rem",
                marginRight: "0rem",
                borderRadius: "4px",
                padding: "0.5rem",
                fontWeight: "400",
                backgroundColor: "var(--Shades-25, #EDF1F7)",
                marginBottom: "0.5rem",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={DropImage}
                  alt="Humidity"
                  style={{
                    width: "20px",
                    height: "20px",
                    marginRight: "0.5rem",
                  }}
                />
                <Typography style={{ fontSize: "large" }}>
                  {READINGS[0].HUDETAIL}
                </Typography>
              </div>
            </Typography>

            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  paddingRight: "0.5rem",
                }}
              >
                <Typography
                  style={{
                    borderRadius: "4px",
                    padding: "0.5rem",
                    fontWeight: "400",
                    backgroundColor: "var(--Shades-25, #EDF1F7)",
                    marginBottom: "0.5rem",
                    color:"#5C6970",
                  }}
                >
                  Installed Date
                </Typography>
                <Typography
                  style={{
                    marginTop:"-1rem",
                    borderRadius: "4px",
                    padding: "0.5rem",
                    fontWeight: "400",
                    backgroundColor: "var(--Shades-25, #EDF1F7)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {INSTALLED_DATE}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  paddingLeft: "0.5rem",
                }}
              >
                <Typography
                  style={{
                    borderRadius: "4px",
                    padding: "0.5rem",
                    fontWeight: "400",
                    backgroundColor: "var(--Shades-25, #EDF1F7)",
                    marginBottom: "0.5rem",
                    color:"#5C6970",
                  }}
                >
                  Tenant Name
                </Typography>
                <Typography
                  style={{
                    marginTop:"-1rem",
                    borderRadius: "4px",
                    padding: "0.5rem",
                    fontWeight: "400",
                    backgroundColor: "var(--Shades-25, #EDF1F7)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {TENANT_NAME}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Accordion
          style={{
            backgroundColor: "white",
            marginBottom: "1rem",
            marginLeft: "48px",
            marginRight: "48px",
            marginTop: "1.5rem",
            width: "calc(99% - 1rem)",
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
              width: "100%",
              padding: "0 12px",
            }}
          >
            <div style={{ width: "15%", marginTop: "0.5rem" }}>
              <Typography>{UNIT}</Typography>
              <Typography variant="subtitle2"></Typography>
            </div>

            <div style={{ width: "41%", marginTop: "0.5rem" }}>
              {DEVICES.map((device: any, index: number) => (
                <div key={index} style={{ display: "flex" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        backgroundColor: getDeviceBackgroundColor(
                          device.DDector
                        ),
                        padding: "0.5rem",
                        borderRadius: "5px",
                        marginBottom: "0.5rem",
                        marginRight: "5px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={getDeviceImage(device.DDector)}
                        alt="Device Image"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                        }}
                      />
                      <Typography>{device.DDector}</Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor: getDeviceBackgroundColor(device.DTemp),
                        padding: "0.5rem",
                        borderRadius: "5px",
                        marginBottom: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={getDeviceImage(device.DTemp)}
                        alt="Device Image"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                        }}
                      />
                      <Typography>{device.DTemp}</Typography>
                    </div>
                  </div>
                </div>
              ))}
              <Typography variant="subtitle2"></Typography>
            </div>

            <div
              style={{
                width: "15%",
                marginTop: "0.5rem",
                marginLeft: "-19rem",
              }}
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
              <Typography style={{ marginRight: "1rem" }}>
                {TENANT_NAME}
              </Typography>
              <img src={RightArrow} alt="RightArrow" className="h-8 w-8" />
            </div>
          </AccordionSummary>
        </Accordion>
      )}
    </div>
  );
}

export default BuilTables;
