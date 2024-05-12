import {
  Typography,
  Button,
  AppBar,
  Toolbar,
  Badge,
  IconButton,
} from "@mui/material";
import { Sort } from "@mui/icons-material";
import FireImage from "../../assets/image2.png";
import Header from "./Header.tsx";
import Tables from "./Tables.tsx";
import FilterIcon from "../../assets/filterIcon.png";
import { useSelector } from "react-redux";
import { RootState } from "../../store.ts";
import { useEffect, useState } from "react";
import axios from "axios";

interface FireData {
  id: number;
  propertyName: string;
  installedDate: string;
  reading: {
    temperature: string;
    humidity: string;
  };
  battery: number;
  connection: string;
}

function FireAlarm() {
  const { isSmallScreen } = useSelector((state: RootState) => state.screenSize);
  const [data, setData] = useState<FireData[]>([]);
  const [showSortModal, setShowSortModal] = useState(false);
  const [sortCategory, setSortCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<FireData[]>(
        "http://localhost:8080/device/Fire Alarm/info/property/1"
      );
      setData(response.data);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  };

  const sortData = () => {
    if (sortCategory && sortOrder) {
      let sortedData = [...data];
      switch (sortCategory) {
        case "id":
          sortedData.sort((a, b) => {
            return sortOrder === "Ascending" ? a.id - b.id : b.id - a.id;
          });
          break;
        case "propertyName":
          sortedData.sort((a, b) => {
            return sortOrder === "Ascending"
              ? a.propertyName.localeCompare(b.propertyName)
              : b.propertyName.localeCompare(a.propertyName);
          });
          break;
        case "installedDate":
          sortedData.sort((a, b) => {
            return sortOrder === "Ascending"
              ? new Date(a.installedDate).getTime() -
                  new Date(b.installedDate).getTime()
              : new Date(b.installedDate).getTime() -
                  new Date(a.installedDate).getTime();
          });
          break;
        case "reading":
          sortedData.sort((a, b) => {
            const aTemperature =
              a.reading && a.reading.temperature
                ? parseFloat(a.reading.temperature)
                : null;
            const bTemperature =
              b.reading && b.reading.temperature
                ? parseFloat(b.reading.temperature)
                : null;

            if (aTemperature === null && bTemperature === null) return 0;
            if (aTemperature === null)
              return sortOrder === "Ascending" ? 1 : -1;
            if (bTemperature === null)
              return sortOrder === "Ascending" ? -1 : 1;

            // Sort based on 'temperature'
            return sortOrder === "Ascending"
              ? aTemperature - bTemperature
              : bTemperature - aTemperature;
          });
          break;
        case "connection":
          sortedData.sort((a, b) => {
            const aConnection = a.connection || "";
            const bConnection = b.connection || "";
            return sortOrder === "Ascending"
              ? aConnection.localeCompare(bConnection)
              : bConnection.localeCompare(aConnection);
          });
          break;
        default:
          break;
      }
      setData(sortedData);
    }
  };

  return (
    <>
      <AppBar
        position="static"
        style={{
          borderRadius: isSmallScreen ? "0.5rem" : "0.5rem 0.5rem 0 0",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          width: "auto",
          backgroundColor: "white",
          marginTop: "6rem",
          position: "relative",
          margin: "70 1rem",
          boxShadow: "none",
          borderTopLeftRadius: "0.5rem",
          borderTopRightRadius: "0.5rem",
        }}
      >
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", color: "black" }}
          >
            <svg
              style={{ color: "darkblue", marginRight: "10px" }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <img
              src={FireImage}
              alt="Your Image"
              style={{ width: 25, height: "auto", color: "black" }}
            />
            <Typography variant="h6" style={{ whiteSpace: "nowrap" }}>
              Fire Alarms
            </Typography>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", color: "black" }}
          >
            {isSmallScreen ? (
              <IconButton color="inherit" sx={{ padding: "8px" }}>
                <img
                  src={FilterIcon}
                  alt="Filter"
                  style={{ width: "46px", height: "46px", color: "darkblue" }}
                />
              </IconButton>
            ) : (
              <Badge color="secondary">
                <Button
                  onClick={() => setShowSortModal(true)}
                  style={{
                    backgroundColor: "rgba(192, 217, 255, 1)",
                    color: "darkblue",
                  }}
                  endIcon={<Sort />}
                >
                  Sort By
                </Button>
                <Typography
                  style={{
                    marginLeft: "0.5rem",
                    color: "darkblue",
                    // marginLeft: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></Typography>
              </Badge>
            )}
          </div>
        </Toolbar>
      </AppBar>

      {showSortModal && (
        <div className="w-[35rem] min-h-[10rem] bg-neutral-100 absolute top-[10rem] right-[2rem] rounded shadow-lg z-50">
          <div className="font-semibold m-4 text-xl font-serif">Sorting</div>
          <div className="flex flex-row justify-center h-full gap-10">
            <form className="max-w-sm ">
              <select
                value={sortCategory}
                onChange={(e) => setSortCategory(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose Category</option>
                <option value="id">Device Id</option>
                <option value="name">Property Name</option>
                <option value="installedDate">Installed Date</option>
                <option value="reading">Readings</option>
                <option value="connection">Status</option>
              </select>
            </form>
            <form className="max-w-sm ">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="">Choose sorting order</option>
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </form>
          </div>
          <div className="flex flex-row gap-2 absolute bottom-1 right-1 m-2">
            <button
              onClick={sortData}
              className="h-8 w-14 bg-blue-700 text-neutral-100 rounded"
            >
              Apply
            </button>
            <button
              onClick={() => setShowSortModal(false)}
              className="bg-red-400 rounded h-8 w-14 text-neutral-100"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div
        style={{
          backgroundColor: isSmallScreen ? "" : "#EDF1F7",
          marginTop: "0.5rem",
          marginLeft: "1.5rem",
          marginRight: "1.5rem",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <Header />
        <div
          style={{
            marginLeft: "1rem",
            marginRight: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              marginLeft: "-6px",
              flexBasis: "calc(100% - -2rem)",
              margin: "-0.5rem 0",
              borderRadius: "0.5rem",
              marginRight: "1rem",
            }}
          >
            <Tables sortCategory={sortCategory} sortOrder={sortOrder}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default FireAlarm;
