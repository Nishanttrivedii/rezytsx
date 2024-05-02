import { Accordion, AccordionSummary, Typography } from "@mui/material";
import batteryImg from "../../assets/Battery.png";
import RedTempImg from "../../assets/image5.png";
import TempImage from "../../assets/image3.png";
import DropImage from "../../assets/image4.png";
import useMediaQuery from "@mui/material/useMediaQuery";

function Tables({ data }: any) {
  const { DEVICE_ID, PROPERTY, INSTALLED_DATE, READINGS, STATUS } = data;
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Accordion
      style={{
        backgroundColor: "white",
        marginBottom: "1rem",
        marginLeft: "24px",
        marginRight: "24px",
        marginTop: "1.5rem",
        width: "calc(100% - 48px)",
      }}
    >
      <AccordionSummary
        id="myc"
        style={{
          marginTop: "-1.5rem",
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: "1.5rem",
          padding: "0 12px",
        }}
      >
        {isSmallScreen ? (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Typography
              style={{
                padding: "0.5rem",
                fontWeight: "400",
                backgroundColor: "var(--Shades-25, #EDF1F7)",
              }}
            >
              {DEVICE_ID}
            </Typography>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography
                style={{
                  padding: "0.5rem",
                  fontWeight: "400",
                  backgroundColor: "var(--Shades-25, #EDF1F7)",
                  flex: "1",
                }}
              >
                {PROPERTY}
              </Typography>
              <Typography
                style={{
                  padding: "0.5rem",
                  fontWeight: "400",
                  backgroundColor: "var(--Shades-25, #EDF1F7)",
                  flex: "1",
                }}
              >
                {INSTALLED_DATE}
              </Typography>
            </div>
            <Typography
              style={{
                padding: "0.5rem",
                fontWeight: "400",
                backgroundColor: "var(--Shades-25, #EDF1F7)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {parseInt(READINGS[0].REDETAIL.split(":")[1]) <= 25 ? (
                  <img
                    src={RedTempImg}
                    alt="Temperature"
                    style={{ width: "20px", height: "20px" }}
                  />
                ) : (
                  <img
                    src={TempImage}
                    alt="Temperature"
                    style={{ width: "20px", height: "20px" }}
                  />
                )}
                <Typography style={{ marginLeft: "0.5rem" }}>
                  <span>{READINGS[0].REDETAIL.split(":")[0]}:</span>{" "}
                  <span style={{ color: "rgba(0, 193, 123, 1)" }}>
                    {READINGS[0].REDETAIL.split(":")[1]}
                  </span>
                </Typography>
              </div>
            </Typography>
            <Typography
              style={{
                padding: "0.5rem",
                fontWeight: "400",
                backgroundColor: "var(--Shades-25, #EDF1F7)",
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
                <Typography>{READINGS[0].HUDETAIL}</Typography>
              </div>
            </Typography>
            <Typography style={{ padding: "0.5rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                    width: "8rem",
                  }}
                >
                  <img
                    src={batteryImg}
                    alt="Battery"
                    style={{
                      width: "20px",
                      height: "20px",
                      marginRight: "0.5rem",
                    }}
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
                    width: "6rem",
                  }}
                >
                  <Typography>{STATUS[0].ONDETAIL}</Typography>
                </div>
              </div>
            </Typography>
          </div>
        ) : (
          <table style={{ width: "100%" }}>
            <thead>
              <tr>
                <th
                  style={{
                    padding: "0.5rem",
                    fontWeight: "400",
                    flex: "1 1 100px",
                  }}
                >
                  {DEVICE_ID}
                </th>
                <th style={{ width: "6%" }}></th> {/* Space */}
                <th
                  style={{
                    padding: "0.5rem",
                    fontWeight: "400",
                    flex: "1 1 200px",
                  }}
                >
                  {PROPERTY}
                </th>
                <th style={{ width: "6%" }}></th> {/* Space */}
                <th
                  style={{
                    padding: "0.5rem",
                    fontWeight: "400",
                    flex: "1 1 150px",
                  }}
                >
                  {INSTALLED_DATE}
                </th>
                <th style={{ width: "10%" }}></th> {/* Space */}
                <th
                  style={{
                    padding: "0.5rem",
                    fontWeight: "400",
                    flex: "1 1 280px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div
                      style={{
                        marginRight: "1rem",
                        backgroundColor: "rgb(240, 240, 240)",
                        padding: "0.5rem",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
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
                      <Typography
                        style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                      >
                        <span>{READINGS[0].REDETAIL.split(":")[0]}:</span>
                        <span style={{ color: "rgba(0, 193, 123, 1)" }}>
                          {READINGS[0].REDETAIL.split(":")[1]}
                        </span>
                      </Typography>
                    </div>
                    <div
                      style={{
                        backgroundColor: "rgb(240, 240, 240)",
                        padding: "0.5rem",
                        borderRadius: "5px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={DropImage}
                        alt="Image"
                        style={{ width: "20px", height: "20px" }}
                      />
                      <Typography
                        style={{ marginLeft: "0.5rem", marginRight: "0.5rem" }}
                      >
                        {READINGS[0].HUDETAIL}
                      </Typography>
                    </div>
                  </div>
                </th>
                <th style={{ width: "20px" }}></th> {/* Space */}
                <th
                  style={{
                    padding: "0.5rem",
                    fontWeight: "400",
                    flex: "1 1 120px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "10px",
                      color: "white",
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
                        width: "8rem",
                      }}
                    >
                      <img
                        src={batteryImg}
                        alt="Battery"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "0.5rem",
                        }}
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
                        width: "6rem",
                      }}
                    >
                      <Typography>{STATUS[0].ONDETAIL}</Typography>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        )}
      </AccordionSummary>
    </Accordion>
  );
}

export default Tables;
