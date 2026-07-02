import { useEffect, useState } from "react";

import ActivityHeader from "../sections/ActivityHeader";
import ActivityToolbar from "../sections/ActivityToolbar";
import ActivityTable from "../components/ActivityTable";

import { getActivities } from "../../../services/activityService";

import "../styles/Activity.css";

function ActivityLogs() {

  const [activities,setActivities]=useState([]);

  const [searchTerm,setSearchTerm]=useState("");

  const [moduleFilter,setModuleFilter]=useState("All");

  const [actionFilter,setActionFilter]=useState("All");

  const [sortBy,setSortBy]=useState("Newest");

  useEffect(()=>{

    fetchActivities();

  },[]);

  const fetchActivities=async()=>{

    try{

      const data=await getActivities();

      setActivities(data);

    }

    catch(error){

      console.error(error);

    }

  };

  const filteredActivities=activities

    .filter(activity=>{

      const search=

      activity.message.toLowerCase().includes(searchTerm.toLowerCase());

      const module=

      moduleFilter==="All" ||

      activity.module===moduleFilter;

      const action=

      actionFilter==="All" ||

      activity.action===actionFilter;

      return search && module && action;

    })

    .sort((a,b)=>{

      if(sortBy==="Newest"){

        return new Date(b.createdAt)-new Date(a.createdAt);

      }

      return new Date(a.createdAt)-new Date(b.createdAt);

    });

  const handleRefresh=()=>{

    fetchActivities();

  };

  const handleExport=()=>{

    alert("Export CSV Coming Soon");

  };

  return(

    <main className="activity-page">

      <ActivityHeader/>

      <ActivityToolbar

        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}

        moduleFilter={moduleFilter}
        setModuleFilter={setModuleFilter}

        actionFilter={actionFilter}
        setActionFilter={setActionFilter}

        sortBy={sortBy}
        setSortBy={setSortBy}

        handleRefresh={handleRefresh}

        handleExport={handleExport}

      />

      <ActivityTable

        activities={filteredActivities}

      />

    </main>

  );

}

export default ActivityLogs;