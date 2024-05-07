// import { Accordion, AccordionSummary, Typography } from "@mui/material";
// import batteryImg from "../../assets/Battery.png";
// import RedTempImg from "../../assets/image5.png";
// import TempImage from "../../assets/image3.png";
// import DropImage from "../../assets/image4.png";
// import useMediaQuery from "@mui/material/useMediaQuery";

// function Tables({ data }: any) {
//   const { DEVICE_ID, PROPERTY, INSTALLED_DATE, READINGS, STATUS } = data;
//   const isSmallScreen = useMediaQuery("(max-width:600px)");

//   return (
//     <div>
//       {!isSmallScreen && (
//         <Accordion
//           style={{
//             height: "3.5rem",
//             backgroundColor: "white",
//             marginBottom: "2rem",
//             marginLeft: "21px",
//             marginRight: "21px",
//             marginTop: "1rem",
//             width: "calc(99% - 1rem)",
//           }}
//         >
//           <AccordionSummary
//             id="myc"
//             style={{
//               marginTop: "1.2rem",
//               backgroundColor: "white",
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               width: "100%",
//               padding: "0 12px",
//             }}
//           >
//             <div style={{ width: "100%" }}>
//               {" "}
//               <table style={{ width: "100%" }}>
//                 <thead>
//                   <tr>
//                     <th
//                       style={{
//                         marginLeft:"-1rem",
//                         padding: "0.5rem",
//                         fontWeight: "400",
//                         flex: "1 1 100px",
//                       }}
//                     >
//                       {DEVICE_ID}
//                     </th>
//                     <th style={{ width: "6%" }}></th>
//                     <th
//                       style={{
//                         padding: "0.5rem",
//                         fontWeight: "400",
//                         flex: "1 1 200px",
//                       }}
//                     >
//                       {PROPERTY}
//                     </th>
//                     <th style={{ width: "6%" }}></th>
//                     <th
//                       style={{
//                         padding: "0.5rem",
//                         fontWeight: "400",
//                         flex: "1 1 150px",
//                       }}
//                     >
//                       {INSTALLED_DATE}
//                     </th>
//                     <th style={{ width: "10%" }}></th>
//                     <th
//                       style={{
//                         whiteSpace:"nowrap",
//                         padding: "0.5rem",
//                         fontWeight: "400",
//                         flex: "1 1 280px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           marginRight: "17rem",
//                           marginLeft: "auto",
//                         }}
//                       >
//                         <div
//                           style={{
//                             height: "40px",
//                             marginRight: "-6px",
//                             backgroundColor: "rgb(240, 240, 240)",
//                             padding: "0.5rem",
//                             borderRadius: "5px",
//                           }}
//                         >
//                           {parseInt(READINGS[0].REDETAIL.split(":")[1]) <=
//                           25 ? (
//                             <img
//                               src={RedTempImg}
//                               alt="Image"
//                               style={{ width: "20px", height: "20px" }}
//                             />
//                           ) : (
//                             <img
//                               src={TempImage}
//                               alt="Another Image"
//                               style={{ width: "20px", height: "20px" }}
//                             />
//                           )}
//                         </div>

//                         <div
//                           style={{
//                             marginRight: "0.5rem",
//                             display: "flex",
//                             alignItems: "center",
//                           }}
//                         >
//                           <div
//                             style={{
//                               backgroundColor: "#f0f0f0",
//                               padding: "0.5rem",
//                               borderRadius: "5px",
//                             }}
//                           >
//                             <Typography>
//                               <span>
//                                 {READINGS[0].REDETAIL.split(":")[0]}:{" "}
//                               </span>
//                               <span
//                                 style={{
//                                   color:
//                                     parseFloat(
//                                       READINGS[0].REDETAIL.split(":")[1]
//                                     ) <= 25.2
//                                       ? "#00C17B"
//                                       : "red",
//                                 }}
//                               >
//                                 {READINGS[0].REDETAIL.split(":")[1]}
//                               </span>
//                             </Typography>
//                           </div>
//                         </div>

//                         <div
//                           style={{
//                             height: "40px",
//                             marginRight: "-14px",
//                             backgroundColor: "rgb(240, 240, 240)",
//                             padding: "0.5rem",
//                             borderRadius: "5px",
//                           }}
//                         >
//                           <img
//                             src={DropImage}
//                             alt="Image"
//                             style={{ width: "20px", height: "20px" }}
//                           />
//                         </div>

//                         <div
//                           style={{
//                             backgroundColor: "#f0f0f0",
//                             padding: "0.5rem",
//                             borderRadius: "5px",
//                             marginLeft: "0.5rem",
//                           }}
//                         >
//                           <Typography>
//                             <span>{READINGS[0].HUDETAIL.split(":")[0]}: </span>
//                             <span
//                               style={{
//                                 color:
//                                   parseFloat(
//                                     READINGS[0].HUDETAIL.split(":")[1].replace(
//                                       "%",
//                                       ""
//                                     )
//                                   ) <= 84
//                                     ? "#00C17B"
//                                     : "black",
//                               }}
//                             >
//                               {READINGS[0].HUDETAIL.split(":")[1]}
//                             </span>
//                           </Typography>
//                         </div>
//                       </div>
//                     </th>
//                     <th style={{ width: "20px" }}></th>
//                     <th
//                       style={{
//                         padding: "0.5rem",
//                         fontWeight: "400",
//                         flex: "1 1 120px",
//                       }}
//                     >
//                       <div
//                         style={{
//                           marginRight: "-1rem",
//                           display: "flex",
//                           alignItems: "center",
//                           fontSize: "10px",
//                           color: "white",
//                         }}
//                       >
//                         <div
//                           style={{
//                             display: "flex",
//                             alignItems: "center",
//                             backgroundColor: `${
//                               STATUS[0].ONDETAIL === "ONLINE"
//                                 ? STATUS[0].STDETAIL === "Battery 100"
//                                   ? "#00C17B"
//                                   : STATUS[0].STDETAIL === "Battery 42"
//                                   ? "rgba(255, 153, 0, 1)"
//                                   : STATUS[0].STDETAIL === "Battery 18"
//                                   ? "rgba(240, 83, 72, 1)"
//                                   : "#f0f0f0"
//                                 : "rgb(0, 193, 123,1)"
//                             }`,
//                             padding: "0.5rem",
//                             borderRadius: "5px",
//                             marginRight: "0.5rem",
//                             width: "8rem",
//                           }}
//                         >
//                           <img
//                             src={batteryImg}
//                             alt="Battery"
//                             style={{
//                               width: "20px",
//                               height: "20px",
//                               marginRight: "0.5rem",
//                             }}
//                           />
//                           <Typography>{STATUS[0].STDETAIL}</Typography>
//                         </div>
//                         <div
//                           style={{
//                             backgroundColor: `${
//                               STATUS[0].ONDETAIL === "ONLINE"
//                                 ? "#00C17B"
//                                 : "rgba(255, 153, 0, 1)"
//                             }`,
//                             padding: "0.5rem",
//                             borderRadius: "5px",
//                           }}
//                         >
//                           <Typography>{STATUS[0].ONDETAIL}</Typography>
//                         </div>
//                       </div>
//                     </th>
//                   </tr>
//                 </thead>
//               </table>
//             </div>
//           </AccordionSummary>
//         </Accordion>
//       )}
//       {isSmallScreen && (
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
//               marginRight: "-3rem",
//               marginLeft: "1.5rem",
//               display: "flex",
//               flexDirection: "column",
//               padding: "2rem",
//               borderRadius: "5px",
//               backgroundColor: "white",
//               width: "92%",
//               maxWidth: "400px",
//             }}
//           >
//             <Typography style={{ padding: "0.5rem", fontWeight: "400", marginLeft:"-1.3rem" }}>
//               <b>ID: {DEVICE_ID}</b>
//             </Typography>
//             <div
//               style={{
//                 marginRight: "-1rem",
//                 display: "flex",
//                 justifyContent: "space-between",
//                 marginBottom: "0.5rem",
//               }}
//             >
//               <Typography
//                 style={{
//                   marginLeft: "-1rem",
//                   borderRadius: "4px",
//                   padding: "0.5rem",
//                   paddingRight: "0rem",
//                   fontWeight: "400",
//                   backgroundColor: "var(--Shades-25, #EDF1F7)",
//                   width: "calc(59% - 0.375rem)",
//                 }}
//               >
//                 {PROPERTY}
//               </Typography>
//               <Typography
//                 style={{
//                   borderRadius: "4px",
//                   padding: "0.5rem",
//                   paddingRight: "0rem",
//                   fontWeight: "400",
//                   backgroundColor: "var(--Shades-25, #EDF1F7)",
//                   width: "calc(50% - 0.375rem)",
//                   whiteSpace: "nowrap",
//                   marginLeft: "0.5rem",
//                 }}
//               >
//                 {INSTALLED_DATE}
//               </Typography>
//             </div>
//             <Typography
//               style={{
//                 marginLeft: "-1rem",
//                 marginRight: "-1rem",
//                 borderRadius: "4px",
//                 padding: "0.5rem",
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
//                 <div
//                   style={{
//                     marginRight: "0.5rem",
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   <div
//                     style={{
//                       backgroundColor: "#f0f0f0",
//                       borderRadius: "5px",
//                     }}
//                   >
//                     <Typography style={{fontSize: "large"}}>
//                       <span>{READINGS[0].REDETAIL.split(":")[0]}: </span>
//                       <span
//                         style={{
//                           color:
//                             parseFloat(READINGS[0].REDETAIL.split(":")[1]) <=
//                             25.2
//                               ? "#00C17B"
//                               : "red",
//                         }}
//                       >
//                         {READINGS[0].REDETAIL.split(":")[1]}
//                       </span>
//                     </Typography>
//                   </div>
//                 </div>
//               </div>
//             </Typography>
//             <Typography
//               style={{
//                 marginLeft: "-1rem",
//                 marginRight: "-1rem",
//                 borderRadius: "4px",
//                 padding: "0.5rem",
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
//                 <Typography style={{ fontSize: "large" }}>
//                   {READINGS[0].HUDETAIL}
//                 </Typography>
//               </div>
//             </Typography>
//             <Typography style={{ padding: "0.5rem", fontWeight: "400" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   width: "100%",
//                 }}
//               >
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     backgroundColor: `${
//                       STATUS[0].ONDETAIL === "ONLINE"
//                         ? STATUS[0].STDETAIL === "Battery 100"
//                           ? "#00C17B"
//                           : STATUS[0].STDETAIL === "Battery 42"
//                           ? "rgba(255, 153, 0, 1)"
//                           : STATUS[0].STDETAIL === "Battery 18"
//                           ? "rgba(240, 83, 72, 1)"
//                           : "#f0f0f0"
//                         : "rgb(0, 193, 123,1)"
//                     }`,
//                     marginLeft: "-1.5rem",
//                     padding: "0.5rem",
//                     borderRadius: "5px",
//                     marginRight: "0.5rem",
//                     width: "13rem",
//                     color: "white",
//                   }}
//                 >
//                   <img
//                     src={batteryImg}
//                     alt="Battery"
//                     style={{
//                       width: "20px",
//                       height: "20px",
//                       marginRight: "0.5rem",
//                     }}
//                   />
//                   <Typography>{STATUS[0].STDETAIL}</Typography>
//                 </div>
//                 <div
//                   style={{
//                     backgroundColor: `${
//                       STATUS[0].ONDETAIL === "ONLINE"
//                         ? "#00C17B"
//                         : "rgba(255, 153, 0, 1)"
//                     }`,
//                     marginRight:"-1.5rem",
//                     padding: "0.5rem",
//                     borderRadius: "5px",
//                     width: "13rem",
//                     color: "white",
//                   }}
//                 >
//                   <Typography>{STATUS[0].ONDETAIL}</Typography>
//                 </div>
//               </div>
//             </Typography>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Tables;
import { useEffect, useState } from "react";
import { Accordion, AccordionSummary, Typography } from "@mui/material";
import batteryImg from "../../assets/Battery.png";
import RedTempImg from "../../assets/image5.png";
import TempImage from "../../assets/image3.png";
import DropImage from "../../assets/image4.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "axios";
import { CenterFocusStrong } from "@mui/icons-material";

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
        <div key={item.id} style={{ marginBottom: "-1.2rem", marginTop:"1.5rem" }}>
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
                        <span>{item.reading.temperature.split(":")[0]}: </span>
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
                    {item.reading.humidity}
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
                    marginRight:"0.5rem",
                    marginLeft:"-1.5rem",
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
                    marginRight:"-1.5rem",
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
                          textAlign: "center",
                        }}
                      >
                        {item.id}
                      </th>
                      <th
                        style={{
                          padding: "0.5rem",
                          fontWeight: "400",
                          textAlign: "center",
                        }}
                      >
                        {item.propertyName}
                      </th>
                      <th
                        style={{
                          padding: "0.5rem",
                          fontWeight: "400",
                          textAlign: "center",
                        }}
                      >
                        {new Date(item.installedDate).toLocaleDateString()}
                      </th>
                      <th
                        style={{
                          padding: "0.5rem",
                          fontWeight: "400",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", justifyContent:"center" }}>
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
                          textAlign: "center",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent:"center",
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
                              width: "8rem",
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
