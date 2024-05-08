
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, AccordionSummary } from "@mui/material";
import RightArrow from "../../assets/arrow.png";
import TempImage from "../../assets/thumbnail.png";
import DropImage from "../../assets/drop.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

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
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    async function fetchData() {
      try {
        const response: any = await axios.get({`http://localhost:8080/unit/building/${buildingId}/list`});
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
                    marginBottom: "2rem",
                    marginLeft: "3rem",
                    marginRight: "-2rem",
                    borderRadius: "5px",
                    padding: "1rem",
                  }}
                >
                  <Typography style={{ padding: "0.5rem", fontWeight: "400" }}>
                    <b>ID: {device.id}</b>
                  </Typography>

                  <Typography
                    style={{
                      borderRadius: "4px",
                      padding: "0.5rem",
                      fontWeight: "400",
                      backgroundColor: "var(--Shades-25, #EDF1F7)",
                      marginBottom: "0.5rem",
                      color: "balck",
                    }}
                  >
                    {device.name}
                  </Typography>
                  {device.reading?.temperature && (
                    <div
                      style={{
                        backgroundColor: "var(--Shades-25, #EDF1F7)",
                        padding: "0.5rem",
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
                      <span style={{fontSize:"large"}}>
                        Temperature:{device.reading.temperature}
                      </span>
                    </div>
                  )}
                  {device.reading?.humidity && (
                    <div
                      style={{
                        backgroundColor: "var(--Shades-25, #EDF1F7)",
                        padding: "0.5rem",
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
                      <span style={{fontSize:"large"}}>
                      Humidity:{device.reading.humidity}
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
                          width: "45%",
                          marginTop: "0.5rem",
                          borderRadius: "4px",
                          padding: "0.5rem",
                          fontWeight: "400",
                          backgroundColor: "var(--Shades-25, #EDF1F7)",
                          color: "black",
                        }}
                      >
                        {new Date(device.installedDate).toLocaleDateString()}
                      </Typography>
                      <Typography
                        style={{
                          width: "53%",
                          marginRight: "0rem",
                          marginTop: "0.5rem",
                          borderRadius: "4px",
                          padding: "0.5rem",
                          fontWeight: "400",
                          backgroundColor: "var(--Shades-25, #EDF1F7)",
                          whiteSpace: "nowrap",
                          color: "black",
                        }}
                      >
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
                    height: "-2.5rem",
                    backgroundColor: "white",
                    marginBottom: "2rem",
                    marginLeft: "58px",
                    marginRight: "21px",
                    marginTop: "0rem",
                    width: "calc(99% - 1rem)",
                  }}
                >
                  <AccordionSummary
                    id="myc"
                    style={{
                      marginTop: "-1rem",
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "0 12px",
                    }}
                  >
                    <div style={{ width: "100%" }}>
                      <table style={{ width: "100%" }}>
                        <tbody>
                          <tr key={device.id}>
                            <th
                              style={{
                                padding: "0.5rem",
                                fontWeight: "400",
                                width: "5%",
                              }}
                            >
                              {device.id}
                            </th>
                            <th
                              style={{
                                padding: "0.5rem",
                                fontWeight: "400",
                                width: "25%",
                              }}
                            >
                              {device.name}
                            </th>
                            <th
                              style={{
                                padding: "0.5rem",
                                fontWeight: "400",
                                width: "57%",
                                display: "flex",
                                justifyContent: "flex-end",
                              }}
                            >
                              {new Date(
                                device.installedDate
                              ).toLocaleDateString()}
                            </th>
                            <th
                              style={{
                                padding: "0.5rem",
                                fontWeight: "400",
                                width: "25%",
                              }}
                            >
                              <span
                                style={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                  alignItems: "center",
                                }}
                              >
                                {device.reading?.temperature && (
                                  <span
                                    style={{
                                      backgroundColor: "#f0f0f0",
                                      padding: "0.5rem",
                                      borderRadius: "5px",
                                      marginRight: "0.5rem",
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
                                    <span>Temperature:</span>
                                    <span style={{ marginLeft: "5px" }}>
                                      {device.reading.temperature}
                                    </span>
                                  </span>
                                )}
                                {device.reading?.humidity && (
                                  <span
                                    style={{
                                      backgroundColor: "#f0f0f0",
                                      padding: "0.5rem",
                                      borderRadius: "5px",
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
                                    <span>Humidity:</span>
                                    <span style={{ marginLeft: "5px" }}>
                                      {device.reading.humidity}
                                    </span>
                                  </span>
                                )}
                              </span>
                            </th>
                            <th
                              style={{
                                padding: "0.5rem",
                                fontWeight: "400",
                                width: "15%",
                              }}
                            >
                              {building.tenantName}
                            </th>
                            <img
                              src={RightArrow}
                              alt="Tenant Image"
                              style={{
                                marginLeft: "-9px",
                                width: "29px",
                                height: "29px",
                              }}
                            />
                          </tr>
                        </tbody>
                      </table>
                    </div>
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
