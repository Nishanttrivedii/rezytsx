import { useEffect, useState } from "react";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import batteryImg from "../../assets/thumbnail.png";
import RedTempImg from "../../assets/thumbnail.png";
import TempImage from "../../assets/thumbnail.png";
import DropImage from "../../assets/drop.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";

interface DeviceInfo {
  id: number;
  reading: {
    temperature: string;
    humidity: string;
  };
  name: string;
  propertyName: string;
  battery: number;
  connection: string;
  installedDate: number;
}

function Tables() {
  const [data, setData] = useState<DeviceInfo[] | null>(null);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/device/Fire Alarm/info"
        );
        const responseData = response.data;
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data.map((item: DeviceInfo) => (
        <div
          key={item.id}
          style={{ marginBottom: "-1.2rem", marginTop: "1.5rem" }}
        >
          {isSmallScreen ? (
            <div
              style={{
                marginRight: "-3rem",
                marginLeft: "1.5rem",
                display: "flex",
                flexDirection: "column",
                padding: "2rem",
                borderRadius: "5px",
                backgroundColor: "white",
                width: "92%",
                maxWidth: "400px",
              }}
            >
              <Typography
                style={{
                  padding: "0.5rem",
                  fontWeight: "400",
                  marginLeft: "-1.3rem",
                }}
              >
                <b>ID: {item.id}</b>
              </Typography>

              <div
                style={{
                  marginRight: "-1rem",
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <Typography
                  style={{
                    marginLeft: "-1rem",
                    borderRadius: "4px",
                    padding: "0.5rem",
                    paddingRight: "0rem",
                    fontWeight: "400",
                    backgroundColor: "var(--Shades-25, #EDF1F7)",
                    width: "calc(59% - 0.375rem)",
                  }}
                >
                  {item.propertyName}
                </Typography>
                <Typography
                  style={{
                    borderRadius: "4px",
                    padding: "0.5rem",
                    paddingRight: "0rem",
                    fontWeight: "400",
                    backgroundColor: "var(--Shades-25, #EDF1F7)",
                    width: "calc(50% - 0.375rem)",
                    whiteSpace: "nowrap",
                    marginLeft: "0.5rem",
                  }}
                >
                  {new Date(item.installedDate).toLocaleDateString()}
                </Typography>
              </div>
              <Typography
                style={{
                  marginLeft: "-1rem",
                  marginRight: "-1rem",
                  borderRadius: "4px",
                  padding: "0.5rem",
                  fontWeight: "400",
                  backgroundColor: "var(--Shades-25, #EDF1F7)",
                  marginBottom: "0.5rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {parseInt(item.reading.temperature.split(":")[1]) <= 25 ? (
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
                        borderRadius: "5px",
                      }}
                    >
                      <Typography style={{ fontSize: "large" }}>
                        <span>
                          Temperature: {item.reading.temperature.split(":")[0]}:{" "}
                        </span>
                        <span
                          style={{
                            color:
                              parseFloat(
                                item.reading.temperature.split(":")[1]
                              ) <= 25.2
                                ? "#00C17B"
                                : "red",
                          }}
                        >
                          {item.reading.temperature.split(":")[1]}
                        </span>
                      </Typography>
                    </div>
                  </div>
                </div>
              </Typography>
              <Typography
                style={{
                  marginLeft: "-1rem",
                  marginRight: "-1rem",
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
                    Humidity: {item.reading.humidity}
                  </Typography>
                </div>
              </Typography>
              <Typography
                style={{
                  padding: "0.5rem",
                  fontWeight: "400",
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: `${
                      item.connection === "ONLINE"
                        ? item.battery === 100
                          ? "#00C17B"
                          : item.battery === 42
                          ? "rgba(255, 153, 0, 1)"
                          : item.battery === 18
                          ? "rgba(240, 83, 72, 1)"
                          : "#f0f0f0"
                        : "rgb(0, 193, 123,1)"
                    }`,
                    marginRight: "0.5rem",
                    marginLeft: "-1.5rem",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    width: "21rem",
                    color: "white",
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
                  <Typography>Battery {item.battery} %</Typography>
                </div>
                <div
                  style={{
                    backgroundColor: `${
                      item.connection === "ONLINE"
                        ? "#00C17B"
                        : "rgba(255, 153, 0, 1)"
                    }`,
                    marginRight: "-1.5rem",
                    padding: "0.5rem",
                    borderRadius: "5px",
                    width: "18rem",
                    color: "white",
                  }}
                >
                  <Typography>{item.connection}</Typography>
                </div>
              </Typography>
            </div>
          ) : (
            <Accordion
              style={{
                height: "-2.5rem",
                backgroundColor: "white",
                marginBottom: "2rem",
                marginLeft: "21px",
                marginRight: "21px",
                marginTop: "1rem",
                width: "calc(99% - 1rem)",
              }}
            >
              <AccordionSummary
                id="myc"
                style={{
                  height:"72px",
                  borderRadius: "0.5rem",
                  marginTop: "-0.5rem",
                  backgroundColor: "white",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  padding: "0 12px",
                }}
              >
                <table style={{ width: "100%" }}>
                  <tbody>
                    <tr>
                      <th
                        style={{
                          padding: "0.5rem",
                          fontWeight: "400",
                          textAlign: "right",
                        }}
                      >
                        {item.id}
                      </th>
                      <th
                        style={{
                          padding: "0.5rem 2rem 0.5rem 0.5rem", // Adjust padding-right for more space
                          fontWeight: "400",
                          textAlign: "right",
                        }}
                      >
                        {item.propertyName}
                      </th>

                      <th
                        style={{
                          padding: "0.5rem 9rem 0.5rem 4.5rem",
                          fontWeight: "400",
                          textAlign: "right",
                        }}
                      >
                        {new Date(item.installedDate).toLocaleDateString()}
                      </th>

                      <th
                        style={{
                          padding: "0.5rem",
                          fontWeight: "400",
                          textAlign: "right",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor:
                                parseFloat(
                                  item.reading.temperature.split(":")[1]
                                ) <= 25.2
                                  ? "#f0f0f0"
                                  : "#f0f0f0",
                              borderRadius: "5px",
                              padding: "0.5rem",
                              marginRight: "0.5rem",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={
                                parseInt(
                                  item.reading.temperature.split(":")[1]
                                ) <= 25
                                  ? RedTempImg
                                  : TempImage
                              }
                              alt="Temperature"
                              style={{
                                width: "20px",
                                height: "20px",
                                marginRight: "0.5rem",
                              }}
                            />
                            <Typography>
                              <span>Temperature: </span>
                              <span
                                style={{
                                  color:
                                    parseFloat(
                                      item.reading.temperature.split(":")[1]
                                    ) <= 25.2
                                      ? "red"
                                      : "#00C17B",
                                }}
                              >
                                {item.reading.temperature.split(":")[0]}
                              </span>
                            </Typography>
                          </div>

                          <div
                            style={{
                              backgroundColor: "#f0f0f0",
                              borderRadius: "5px",
                              padding: "0.5rem",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <img
                              src={DropImage}
                              alt="Humidity"
                              style={{
                                width: "20px",
                                height: "20px",
                                marginRight: "0.5rem",
                              }}
                            />
                            <Typography>
                              <span>Humidity: </span>
                              {item.reading.humidity}
                            </Typography>
                          </div>
                        </div>
                      </th>

                      <th
                        style={{
                          padding: "0.5rem",
                          fontWeight: "400",
                          textAlign: "right",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            fontSize: "10px",
                            color: "white",
                          }}
                        >
                          <div
                            style={{
                              backgroundColor:
                                item.connection === "ONLINE"
                                  ? item.battery === 100
                                    ? "#00C17B"
                                    : item.battery === 42
                                    ? "rgba(255, 153, 0, 1)"
                                    : item.battery === 18
                                    ? "rgba(240, 83, 72, 1)"
                                    : "#f0f0f0"
                                  : "rgb(0, 193, 123,1)",
                              padding: "0.5rem",
                              borderRadius: "5px",
                              marginRight: "0.5rem",
                              width: "9rem",
                              display: "flex",
                              alignItems: "center",
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
                            <Typography style={{ whiteSpace: "nowrap" }}>
                              <span>Battery: </span>
                              <span>{item.battery}%</span>
                            </Typography>
                          </div>

                          <div
                            style={{
                              backgroundColor:
                                item.connection === "ONLINE"
                                  ? "#00C17B"
                                  : "rgba(255, 153, 0, 1)",
                              padding: "0.5rem",
                              borderRadius: "5px",
                            }}
                          >
                            <Typography>{item.connection}</Typography>
                          </div>
                        </div>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </AccordionSummary>
            </Accordion>
          )}
        </div>
      ))}
    </div>
  );
}

export default Tables;
