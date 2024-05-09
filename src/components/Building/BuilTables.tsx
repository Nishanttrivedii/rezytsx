import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, AccordionSummary } from "@mui/material";
import RightArrow from "../../assets/rightarrowsmokep.png";
import Tempside from "../../assets/tempside.png";
// import RedTempImg from "../../assets/image5.png";
import TempImage from "../../assets/image3.png";
import DropImage from "../../assets/image4.png";
// import MobileImg from "../../assets/mobile.png";
// import DDectorImage from "../../assets/smokedtec.png";
import DTempImage from "../../assets/tempdtec.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import currentImg from "../../assets/current.png";

interface DeviceInfo {
  id: number;
  reading: {
    temperature?: string;
    humidity: string;
  };
  name: string;
  propertyName: string | null;
  battery: number;
  connection: string;
  installedDate: number;
}

interface BuildingInfo {
  id: number;
  name: string;
  deviceList: DeviceInfo[];
  tenantName: string;
}

function BuilTables() {
  const [buildingData, setBuildingData] = useState<any>(null);
  const { isSmallScreen } = useSelector((state: RootState) => state.screenSize);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/unit/building/1/list"
        );
        setBuildingData(response.data);
        console.log(response.data, "ress");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    console.log({ buildingData });
    fetchData();
  }, []);
  return (
    <div>
      {buildingData?.map((building: BuildingInfo) => (
        <div key={building.id} style={{ marginBottom: "1.5rem" }}>
          {isSmallScreen ? (
            <div>
              {building.deviceList.map((device: DeviceInfo) => (
                <div
                  key={device.id}
                  style={{
                    backgroundColor: "white",
                    marginTop: "1.5rem",
                    height: "275px",
                    width: "336px",
                    borderRadius: "5px",
                    padding: "1rem",
                  }}
                >
                  <Typography
                    style={{
                      display: "flex",
                      alignItems: "center",
                      fontSize: "large",
                      padding: "0.5rem",
                      fontWeight: "400",
                    }}
                  >
                    <img
                      src={currentImg}
                      alt="Tenant Image"
                      style={{
                        marginRight: "0.5rem",
                        marginTop: "0.3rem",
                        width: "30px",
                        height: "30px",
                      }}
                    />
                    UNIT {device.id}
                    <img
                      src={RightArrow}
                      alt="Tenant Image"
                      style={{
                        marginRight: "0rem",
                        marginTop: "0.3rem",
                        width: "32px",
                        height: "32px",
                        marginLeft: "auto",
                      }}
                    />
                  </Typography>

                  <Typography
                    style={{
                      marginLeft: "0.5rem",
                      padding: "8px 10px",
                      height: "32px",
                      width: "297px",
                      borderRadius: "4px",
                      fontWeight: "400",
                      backgroundColor: "var(--Shades-25, #EDF1F7)",
                      marginBottom: "0.5rem",
                      color: "black",
                      fontSize: "normal",
                      textAlign: "left",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src={Tempside}
                      alt="Device Image"
                      style={{
                        marginRight: "-1.5rem",
                        width: "24px",
                        height: "15px",
                      }}
                    />
                    <img
                      src={DTempImage}
                      alt="Device Image"
                      style={{
                        marginRight: "0.5rem",
                        width: "22px",
                        height: "22px",
                      }}
                    />
                    <span style={{ flex: "1" }}>{device.name}</span>
                  </Typography>

                  {device.reading?.temperature && (
                    <div
                      style={{
                        marginLeft: "0.5rem",
                        width: "298px",
                        height: "40px",
                        backgroundColor: "var(--Shades-25, #EDF1F7)",
                        padding: "8px",
                        borderRadius: "5px",
                        marginTop: "0.5rem",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={TempImage}
                        alt="Temperature"
                        style={{
                          width: "20px",
                          height: "20px",
                          marginRight: "5px",
                        }}
                      />
                      <span> Humidity: </span>
                      <span
                        style={{
                          fontSize: "large",
                          color: "red",
                          marginLeft: "5px",
                        }}
                      >
                        {device.reading.temperature}
                      </span>
                    </div>
                  )}
                  {device.reading?.humidity && (
                    <div
                      style={{
                        marginLeft: "0.5rem",
                        width: "298px",
                        height: "40px",
                        backgroundColor: "var(--Shades-25, #EDF1F7)",
                        padding: "8px",
                        borderRadius: "5px",
                        marginTop: "0.5rem",
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
                          marginRight: "5px",
                        }}
                      />
                      <span> Humidity: </span>
                      <span
                        style={{
                          fontSize: "large",
                          color: "#00C17B",
                          marginLeft: "5px",
                        }}
                      >
                        {device.reading.humidity}
                      </span>
                    </div>
                  )}

                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <Typography
                        style={{
                          marginLeft: "0.5rem",
                          width: "151px",
                          height: "60px",
                          marginTop: "0.5rem",
                          borderRadius: "4px",
                          padding: "0.5rem",
                          fontWeight: "400",
                          backgroundColor: "var(--Shades-25, #EDF1F7)",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                        <span style={{ color: "#5C6970", fontWeight: "500" }}>
                          Installed Date
                        </span>
                        <br />
                        {new Date(device.installedDate).toLocaleDateString()}
                      </Typography>

                      <Typography
                        style={{
                          marginLeft: "0.5rem",
                          width: "151px",
                          height: "60px",
                          marginTop: "0.5rem",
                          borderRadius: "4px",
                          padding: "0.5rem",
                          fontWeight: "400",
                          backgroundColor: "var(--Shades-25, #EDF1F7)",
                          color: "black",
                          textAlign: "left",
                        }}
                      >
                        <span style={{ color: "#5C6970", fontWeight: "500" }}>
                          Tenant Name
                        </span>
                        <br />
                        {building.tenantName}
                      </Typography>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              {building.deviceList.map((device: DeviceInfo) => (
                <Accordion
                  key={device.id}
                  style={{
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
                      height: "72px",
                      marginTop: "1.5rem",
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
                        <tr key={device.id}>
                          <th
                            style={{
                              fontWeight: "400",
                              textAlign: "left",
                              width: "200px",
                            }}
                          >
                            {device.id}
                          </th>
                          <th
                            style={{
                              fontWeight: "400",
                              textAlign: "left",
                              width: "333px",
                            }}
                          >
                            <div
                              style={{
                                width: "170px",
                                height: "40px",
                                display: "flex",
                                alignItems: "center",
                                backgroundColor: "#EDF1F7",
                                padding: "8px",
                                borderRadius: "4px",
                              }}
                            >
                              <img
                                src={Tempside}
                                alt="Device Image"
                                style={{
                                  marginRight: "-1.5rem",
                                  width: "24px", // Adjust width as needed
                                  height: "15px", // Adjust height as needed
                                }}
                              />
                              <img
                                src={DTempImage}
                                alt="Device Image"
                                style={{
                                  marginRight: "0.5rem",
                                  width: "24px", // Adjust width as needed
                                  height: "24px", // Adjust height as needed
                                }}
                              />

                              <span>{device.name}</span>
                            </div>
                          </th>

                          <th
                            style={{
                              // padding: "0.5rem 9rem 0.5rem 4.5rem",
                              fontWeight: "400",
                              textAlign: "left",
                              width: "400px",
                            }}
                          >
                            {new Date(
                              device.installedDate
                            ).toLocaleDateString()}
                          </th>
                          <th
                            style={{
                              // whiteSpace:"nowrap",
                              // padding: "0.5rem",
                              // fontWeight: "400",
                              textAlign: "left",
                              width: "358px",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "left",
                                // justifyContent: "center",
                                // width:"100%"
                              }}
                            >
                              {device.reading?.temperature && (
                                <div
                                  style={{
                                    backgroundColor: "#f0f0f0",
                                    padding: "0.5rem",
                                    borderRadius: "5px",
                                    marginRight: "0.5rem",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "400",
                                  }}
                                >
                                  <img
                                    src={TempImage}
                                    alt="Temperature"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      marginRight: "5px",
                                    }}
                                  />
                                  <span>Temperature:</span>
                                  <span
                                    style={{ marginLeft: "5px", color: "red" }}
                                  >
                                    {device.reading.temperature}
                                  </span>
                                </div>
                              )}
                              {device.reading?.humidity && (
                                <span
                                  style={{
                                    backgroundColor: "#f0f0f0",
                                    padding: "0.5rem",
                                    borderRadius: "5px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: "400",
                                  }}
                                >
                                  <img
                                    src={DropImage}
                                    alt="Humidity"
                                    style={{
                                      width: "20px",
                                      height: "20px",
                                      marginRight: "5px",
                                    }}
                                  />
                                  <span>Humidity:</span>
                                  <span
                                    style={{
                                      marginLeft: "5px",
                                      color: "#00C17B",
                                    }}
                                  >
                                    {device.reading.humidity}
                                  </span>
                                </span>
                              )}
                            </div>
                          </th>
                          <th
                            style={{
                              // padding: "0.5rem",
                               fontWeight: "400",
                              textAlign: "right",
                              width: "322px",
                            }}
                          >
                            {building.tenantName}
                          </th>
                          <img
                            src={RightArrow}
                            alt="Tenant Image"
                            style={{
                              marginRight: "0rem",
                              marginTop: "0.3rem",
                              width: "32px",
                              height: "32px",
                              marginLeft: "auto",
                            }}
                          />
                        </tr>
                      </tbody>
                    </table>
                  </AccordionSummary>
                </Accordion>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BuilTables;


// 
