import "@bitnoi.se/react-scheduler/dist/style.css";
import { Scheduler } from "@bitnoi.se/react-scheduler";
import {mockedSchedulerData,serviceJobs} from "./SampleData"
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
 
const convertDateFormat = (dateStr) => {
  const [month, day, year, time] = dateStr.split(' ');
  return new Date(`${year}-${month}-${day}T${time}:00.000Z`).toISOString();
};
 
function App() {
  const [filterButtonState, setFilterButtonState] = useState(-1);
  const [filteredData, setFilteredData] = useState([]);


 useEffect(()=>{
  const transformData = (data) => {
 
    const grouped = data.reduce((acc, item) => {
 
        const resource = item.Resource;
 
        if (!acc[resource]) {
            acc[resource] = [];
        }
 
        acc[resource].push({
            id: item.id,
            startDate: item.startDate,
            endDate: item.endDate,
            occupancy: 3600,
            title: item.jobTitle
        });
 
        return acc;
 
    }, {});
 
 
    const formate = Object.keys(grouped).map((resource, index) => (
        {
            id: uuidv4(),
            label: {
                title: resource
            },
            data: grouped[resource]
        }
    ));
 
    return formate;
};
 
const formattedData = transformData(serviceJobs);
setFilteredData(formattedData);
 },[])
  return (
    <section>
      <Scheduler
        data={mockedSchedulerData}
        isLoading={false}
    
        onRangeChange={(newRange) => console.log(newRange)}
        onTileClick={(clickedResource) => console.log(clickedResource)}
        onItemClick={(item) =>console.log(item)}
        onFilterData={() => {
          // Some filtering logic...
          setFilterButtonState(1);
        }}
        onClearFilterData={() => {
          // Some clearing filters logic...
          setFilterButtonState(0)
        }}
        config={{
          zoom: 1,
          filterButtonState:-1,
          showTooltip:false
        }}
      />
    </section>
  );
}

export default App
