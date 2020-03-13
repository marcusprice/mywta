import React, { useState } from 'react';
import NavBar from './dashboard-components/NavBar';
import DashboardHeader from './dashboard-components/DashboardHeader'
import ReportList from './dashboard-components/ReportList';
import AccountSettings from './dashboard-components/AccountSettings';
import CreateReport from './dashboard-components/CreateReport';
import EditReport from './dashboard-components/EditReport';
import ViewReport from './dashboard-components/ViewReport';

const Dashboard = (props) => {
  let [view, setView] = useState('report list');
  let [reportIndex, setReportIndex] = useState(0);

  const handleView = () => {
    let output;
    switch(view) {
      case 'account settings':
        output = <AccountSettings setUserData={props.setUserData} userData={props.userData} />;
        break;
      case 'create report':
        output = <CreateReport setReportData={props.setReportData} setView={setView} />;
        break;
      case 'edit report':
        output = <EditReport setReportData={props.setReportData} setView={setView} report={props.reportData[reportIndex]} />;
        break;
      case 'view report':
        output = <ViewReport setReportData={props.setReportData} setView={setView} report={props.reportData[reportIndex]} />;
        break;
      default:
        output = <ReportList reportData={props.reportData} setReportData={props.setReportData} setReportIndex={setReportIndex} setView={setView} />;
        break;
    }

    return output;
  }

  return(
    <div>
      <NavBar
        setView={setView}
        setUserLoggedIn={props.setUserLoggedIn}
        setUserData={props.setUserData}
        setReportData={props.setReportData}
      />
      <DashboardHeader
        view={view}
        setView={setView}
        numOfReports={props.reportData.length}
        firstName={props.userData.firstname}
        report={props.reportData[reportIndex]}
      />
      { handleView() }
    </div>
  );
}

export default Dashboard;
