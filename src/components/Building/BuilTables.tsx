// import { Accordion, AccordionSummary, Typography } from "@mui/material";
// import SmokeDetectorImage from "../../assets/smokedtec.png";
// import TemperatureImage from "../../assets/tempdtec.png";
// import RedTempImg from "../../assets/image5.png";
// import TempImage from "../../assets/image3.png";
// import DropImage from "../../assets/image4.png";
// import RightArrow from "../../assets/rightarrowsmokep.png";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import MobileImg from "../../assets/mobile.png";
// import DDectorImage from "../../assets/smokedtec.png";
// import DTempImage from "../../assets/tempdtec.png";
// import Tempside from "../../assets/tempside.png";

// function getDeviceBackgroundColor(deviceType: string) {
//   switch (deviceType) {
//     case "Smoke Detector":
//     case "Temperature/Humidity":
//       return "#f0f0f0";
//     default:
//       return "";
//   }
// }

// function getDeviceImage(deviceType: string) {
//   switch (deviceType) {
//     case "Smoke Detector":
//       return SmokeDetectorImage;
//     case "Temperature/Humidity":
//       return TemperatureImage;
//     default:
//       return null;
//   }
// }

// function BuilTables({ data }: any) {
//   const { UNIT, DEVICES, INSTALLED_DATE, READINGS, TENANT_NAME } = data;
//   const isSmallScreen = useMediaQuery("(max-width:600px)");

//   return (
//     <div>
//       {isSmallScreen ? (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             marginTop: "2rem",
//             marginLeft: "1rem",
//             marginRight: "1rem",
//           }}
//         >
//           <div
//             style={{
//               marginTop: "-2rem",
//               marginRight: "-6rem",
//               marginLeft: "2rem",
//               display: "flex",
//               flexDirection: "column",
//               padding: "1rem",
//               borderRadius: "5px",
//               backgroundColor: "white",
//               width: "106%",
//               maxWidth: "400px",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center" }}>
//               <img
//                 src={MobileImg}
//                 alt="Your Image"
//                 style={{ width: "24px", marginRight: "8px" }}
//               />
//               <Typography style={{ padding: "0.5rem", color: "black" }}>
//                 <span style={{ fontWeight: "normal", fontSize: "1.3rem" }}>
//                   {UNIT}
//                 </span>
//               </Typography>

//               <img
//                 src={RightArrow}
//                 alt="RightArrow"
//                 className="h-8 w-8"
//                 style={{ marginLeft: "158px" }}
//               />
//             </div>

//             <div style={{ display: "flex", alignItems: "center" }}>
//               <Typography
//                 style={{
//                   marginLeft: "0rem",
//                   borderRadius: "4px",
//                   padding: "0.5rem",
//                   paddingRight: "0rem",
//                   fontWeight: "400",
//                   backgroundColor: "var(--Shades-25, #EDF1F7)",
//                   width: "calc(59% - 0.375rem)",
//                   display: "flex",
//                   alignItems: "center",
//                   marginRight: "0.5rem",
//                 }}
//               >
//                 <img
//                   src={DDectorImage}
//                   alt="Detector Icon"
//                   style={{ width: "19px", marginRight: "8px" }}
//                 />
//                 <span style={{ marginLeft: "0rem", fontSize: "0.9rem" }}>
//                   {DEVICES[0].DDector}
//                 </span>
//               </Typography>
//               <Typography
//                 style={{
//                   marginLeft: "0rem",
//                   borderRadius: "4px",
//                   padding: "0.5rem",
//                   paddingRight: "0rem",
//                   fontWeight: "400",
//                   backgroundColor: "var(--Shades-25, #EDF1F7)",
//                   width: "calc(59% - 0.375rem)",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <img
//                   src={Tempside}
//                   alt="Temp side"
//                   style={{
//                     width: "20px",
//                     height: "20px",
//                     marginRight: "-21px",
//                   }}
//                 />
//                 <img
//                   src={DTempImage}
//                   alt="Temperature Icon"
//                   style={{ width: "24px", marginRight: "8px" }}
//                 />
//                 <span style={{ fontSize: "0.9rem", marginLeft: "0rem" }}>
//                   Temp/Humidity
//                 </span>
//               </Typography>
//             </div>
//             <Typography
//               style={{
//                 marginTop: "0.5rem",
//                 marginLeft: "0rem",
//                 marginRight: "0rem",
//                 borderRadius: "4px",
//                 fontWeight: "400",
//                 backgroundColor: "var(--Shades-25, #EDF1F7)",
//                 marginBottom: "0.5rem",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 {parseInt(READINGS[0].REDETAIL.split(":")[1]) <= 25 ? (
//                   <img
//                     src={RedTempImg}
//                     alt="Temperature"
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       marginRight: "0.5rem",
//                     }}
//                   />
//                 ) : (
//                   <img
//                     src={TempImage}
//                     alt="Temperature"
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       marginRight: "0.5rem",
//                     }}
//                   />
//                 )}
//                <div
//                 style={{
//                   marginRight: "0.5rem",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     backgroundColor: "#f0f0f0",
//                     padding: "0.5rem",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   <Typography style={{fontSize:"large"}}>
//                     <span>{READINGS[0].REDETAIL.split(":")[0]}: </span>
//                     <span
//                       style={{
//                         color:
//                           parseFloat(READINGS[0].REDETAIL.split(":")[1]) <= 25.2
//                             ? "#00C17B"
//                             : "red",
//                       }}
//                     >
//                       {READINGS[0].REDETAIL.split(":")[1]}
//                     </span>
//                   </Typography>
//                 </div>
//               </div>
//               </div>
//             </Typography>
//             <Typography
//               style={{
//                 marginLeft: "0rem",
//                 marginRight: "0rem",
//                 borderRadius: "4px",
//                 fontWeight: "400",
//                 backgroundColor: "var(--Shades-25, #EDF1F7)",
//                 marginBottom: "0.5rem",
//               }}
//             >
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src={DropImage}
//                   alt="Humidity"
//                   style={{
//                     width: "20px",
//                     height: "20px",
//                     marginRight: "0.5rem",
//                   }}
//                 />
//                 <div
//                   style={{
//                     backgroundColor: "#f0f0f0",
//                     padding: "0.5rem",
//                     borderRadius: "5px",
//                     marginLeft: "0.5rem",
//                   }}
//                 >
//                   <Typography style={{fontSize:"large"}}>
//                     <span>{READINGS[0].HUDETAIL.split(":")[0]}: </span>
//                     <span
//                       style={{
//                         color:
//                           parseFloat(
//                             READINGS[0].HUDETAIL.split(":")[1].replace("%", "")
//                           ) <= 84
//                             ? "#00C17B"
//                             : "black",
//                       }}
//                     >
//                       {READINGS[0].HUDETAIL.split(":")[1]}
//                     </span>
//                   </Typography>
//                 </div>
//               </div>
//             </Typography>

//             <div style={{ display: "flex", alignItems: "center" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   width: "50%",
//                   paddingRight: "0.5rem",
//                 }}
//               >
//                 <Typography
//                   style={{
//                     borderRadius: "4px",
//                     padding: "0.5rem",
//                     fontWeight: "400",
//                     backgroundColor: "var(--Shades-25, #EDF1F7)",
//                     marginBottom: "0.5rem",
//                     color: "#5C6970",
//                   }}
//                 >
//                   Installed Date
//                 </Typography>
//                 <Typography
//                   style={{
//                     marginTop: "-1.5rem",
//                     borderRadius: "4px",
//                     padding: "0.5rem",
//                     fontWeight: "400",
//                     backgroundColor: "var(--Shades-25, #EDF1F7)",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {INSTALLED_DATE}
//                 </Typography>
//               </div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   width: "50%",
//                   paddingLeft: "0.5rem",
//                 }}
//               >
//                 <Typography
//                   style={{
//                     borderRadius: "4px",
//                     padding: "0.5rem",
//                     fontWeight: "400",
//                     backgroundColor: "var(--Shades-25, #EDF1F7)",
//                     marginBottom: "0.5rem",
//                     color: "#5C6970",
//                   }}
//                 >
//                   Tenant Name
//                 </Typography>
//                 <Typography
//                   style={{
//                     marginTop: "-1.5rem",
//                     borderRadius: "4px",
//                     padding: "0.5rem",
//                     fontWeight: "400",
//                     backgroundColor: "var(--Shades-25, #EDF1F7)",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {TENANT_NAME}
//                 </Typography>
//               </div>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <Accordion
//           style={{
//             backgroundColor: "white",
//             marginBottom: "1rem",
//             marginLeft: "48px",
//             marginRight: "48px",
//             marginTop: "1.5rem",
//             width: "calc(99% - 1rem)",
//           }}
//         >
//           <AccordionSummary
//             id="myc"
//             style={{
//               marginTop: "-3rem",
//               backgroundColor: "white",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               borderRadius: "1.5rem",
//               width: "100%",
//               padding: "0 12px",
//             }}
//           >
//             <div style={{ width: "15%", marginTop: "0.5rem" }}>
//               <Typography>{UNIT}</Typography>
//               <Typography variant="subtitle2"></Typography>
//             </div>

//             <div style={{ width: "41%", marginTop: "0.5rem" }}>
//               {DEVICES.map((device: any, index: number) => (
//                 <div key={index} style={{ display: "flex" }}>
//                   <div style={{ display: "flex", alignItems: "center" }}>
//                     <div
//                       style={{
//                         backgroundColor: getDeviceBackgroundColor(
//                           device.DDector
//                         ),
//                         padding: "0.5rem",
//                         borderRadius: "5px",
//                         marginBottom: "0.5rem",
//                         marginRight: "5px",
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                     >
//                       <img
//                         src={getDeviceImage(device.DDector)}
//                         alt="Device Image"
//                         style={{
//                           width: "20px",
//                           height: "20px",
//                           marginRight: "5px",
//                         }}
//                       />
//                       <Typography>{device.DDector}</Typography>
//                     </div>
//                     <div
//                       style={{
//                         backgroundColor: getDeviceBackgroundColor(device.DTemp),
//                         padding: "0.5rem",
//                         borderRadius: "5px",
//                         marginBottom: "0.5rem",
//                         display: "flex",
//                         alignItems: "center",
//                       }}
//                     >
//                       <img
//                         src={Tempside}
//                         alt="Temp side"
//                         style={{
//                           width: "20px",
//                           height: "20px",
//                           marginRight: "-21px",
//                         }}
//                       />
//                       <img
//                         src={getDeviceImage(device.DTemp)}
//                         alt="Device Image"
//                         style={{
//                           width: "20px",
//                           height: "20px",
//                           marginRight: "5px",
//                         }}
//                       />
//                       <Typography>{device.DTemp}</Typography>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <Typography variant="subtitle2"></Typography>
//             </div>

//             <div
//               style={{
//                 width: "15%",
//                 marginTop: "0.5rem",
//                 marginLeft: "-19rem",
//               }}
//             >
//               <Typography>{INSTALLED_DATE}</Typography>
//               <Typography variant="subtitle2"></Typography>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 marginRight: "17rem",
//                 marginLeft: "auto",
//               }}
//             >
//               <div
//                 style={{
//                   height: "40px",
//                   marginRight: "-6px",
//                   backgroundColor: "rgb(240, 240, 240)",
//                   padding: "0.5rem",
//                   borderRadius: "5px",
//                 }}
//               >
//                 {parseInt(READINGS[0].REDETAIL.split(":")[1]) <= 25 ? (
//                   <img
//                     src={RedTempImg}
//                     alt="Image"
//                     style={{ width: "20px", height: "20px" }}
//                   />
//                 ) : (
//                   <img
//                     src={TempImage}
//                     alt="Another Image"
//                     style={{ width: "20px", height: "20px" }}
//                   />
//                 )}
//               </div>

//               <div
//                 style={{
//                   marginRight: "0.5rem",
//                   display: "flex",
//                   alignItems: "center",
//                 }}
//               >
//                 <div
//                   style={{
//                     backgroundColor: "#f0f0f0",
//                     padding: "0.5rem",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   <Typography>
//                     <span>{READINGS[0].REDETAIL.split(":")[0]}: </span>
//                     <span
//                       style={{
//                         color:
//                           parseFloat(READINGS[0].REDETAIL.split(":")[1]) <= 25.2
//                             ? "#00C17B"
//                             : "red",
//                       }}
//                     >
//                       {READINGS[0].REDETAIL.split(":")[1]}
//                     </span>
//                   </Typography>
//                 </div>
//               </div>

//               <div
//                 style={{
//                   height: "40px",
//                   marginRight: "-14px",
//                   backgroundColor: "rgb(240, 240, 240)",
//                   padding: "0.5rem",
//                   borderRadius: "5px",
//                 }}
//               >
//                 <img
//                   src={DropImage}
//                   alt="Image"
//                   style={{ width: "20px", height: "20px" }}
//                 />
//               </div>

//               <div
//                 style={{
//                   backgroundColor: "#f0f0f0",
//                   padding: "0.5rem",
//                   borderRadius: "5px",
//                   marginLeft: "0.5rem",
//                 }}
//               >
//                 <Typography>
//                   <span>{READINGS[0].HUDETAIL.split(":")[0]}: </span>
//                   <span
//                     style={{
//                       color:
//                         parseFloat(
//                           READINGS[0].HUDETAIL.split(":")[1].replace("%", "")
//                         ) <= 84
//                           ? "#00C17B"
//                           : "black",
//                     }}
//                   >
//                     {READINGS[0].HUDETAIL.split(":")[1]}
//                   </span>
//                 </Typography>
//               </div>
//             </div>

//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 fontSize: "10px",
//                 color: "black",
//                 marginLeft: "1rem",
//               }}
//             >
//               <Typography style={{ marginRight: "1rem" }}>
//                 {TENANT_NAME}
//               </Typography>
//               <img src={RightArrow} alt="RightArrow" className="h-8 w-8" />
//             </div>
//           </AccordionSummary>
//         </Accordion>
//       )}
//     </div>
//   );
// }

// export default BuilTables;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Accordion, AccordionSummary } from "@mui/material";
import RightArrow from "../../assets/rightarrowsmokep.png";
// import Tempside from "../../assets/tempside.png";
// import RedTempImg from "../../assets/image5.png";
import TempImage from "../../assets/image3.png";
import DropImage from "../../assets/image4.png";
// import MobileImg from "../../assets/mobile.png";
// import DDectorImage from "../../assets/smokedtec.png";
// import DTempImage from "../../assets/tempdtec.png";
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
        const response: any = await axios.get(
          "http://localhost:8080/unit/list"
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
