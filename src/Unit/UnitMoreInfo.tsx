import InstalledDevices from "../components/InstalledDevices/InstalledDevices"
import UnitInfo from "./UnitInfo"

const UnitMoreInfo = () => {
  return (
   <>
   <div className="bg-[#EDF1F7] w-(100%]  h-[fit-content] my-4  rounded-md relative top-[3rem] pb-[4rem] h-[100vh] " id="sensors">

   <UnitInfo />
   <InstalledDevices/>
</div>
   </>
  )
}

export default UnitMoreInfo