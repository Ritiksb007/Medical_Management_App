import React from "react";
import { Box, Card, CardBody, CardHeader, Button, Grid, Text } from "grommet";
import { User, Schedule, DocumentText } from "grommet-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <Box pad="large" fill background="background">
      <Box direction="row" justify="between" align="center" margin={{ bottom: "medium" }}>
        <Text size="xxlarge" weight="bold" color="brand">
          Dashboard
        </Text>
        <Button label="Logout" onClick={logout} primary color="status-critical" />
      </Box>
      <Grid columns="medium" gap="medium">
        <Card onClick={() => navigateTo("/patient-records")} hoverIndicator background="white" elevation="medium">
          <CardHeader pad="medium" direction="row" align="center" gap="small">
            <User color="brand" size="large" />
            <Text size="large" weight="bold">Patient Records</Text>
          </CardHeader>
          <CardBody pad="medium">
            <Text>View and manage patient data securely.</Text>
          </CardBody>
        </Card>
        <Card onClick={() => navigateTo("/appointments")} hoverIndicator background="white" elevation="medium">
          <CardHeader pad="medium" direction="row" align="center" gap="small">
            <Schedule color="accent-1" size="large" />
            <Text size="large" weight="bold">Appointments</Text>
          </CardHeader>
          <CardBody pad="medium">
            <Text>Check your schedule and upcoming appointments.</Text>
          </CardBody>
        </Card>
        <Card onClick={() => navigateTo("/reports")} hoverIndicator background="white" elevation="medium">
          <CardHeader pad="medium" direction="row" align="center" gap="small">
            <DocumentText color="accent-2" size="large" />
            <Text size="large" weight="bold">Reports</Text>
          </CardHeader>
          <CardBody pad="medium">
            <Text>Generate and access reports quickly.</Text>
          </CardBody>
        </Card>
      </Grid>
    </Box>
  );
};

export default Dashboard;


// import React from "react";
// import { Box, Card, CardBody, CardHeader, Button, Grid, Text } from "grommet";
// import { User, Schedule, DocumentText } from "grommet-icons";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../AuthContext";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { logout } = useAuth();

//   const navigateTo = (path) => {
//     navigate(path);
//   };

//   return (
//     <Box pad="large" fill background="background">
//       <Box direction="row" justify="between" align="center" margin={{ bottom: "medium" }}>
//         <Text size="xxlarge" weight="bold" color="brand">
//           Dashboard
//         </Text>
//         <Button label="Logout" onClick={logout} primary color="status-critical" />
//       </Box>
//       <Grid columns="medium" gap="medium">
//         <Card onClick={() => navigateTo("/patient-records")} hoverIndicator background="white" elevation="medium">
//           <CardHeader pad="medium" direction="row" align="center" gap="small">
//             <User color="brand" size="large" />
//             <Text size="large" weight="bold">Patient Records</Text>
//           </CardHeader>
//           <CardBody pad="medium">
//             <Text>View and manage patient data securely.</Text>
//           </CardBody>
//         </Card>
//         <Card onClick={() => navigateTo("/appointments")} hoverIndicator background="white" elevation="medium">
//           <CardHeader pad="medium" direction="row" align="center" gap="small">
//             <Schedule color="accent-1" size="large" />
//             <Text size="large" weight="bold">Appointments</Text>
//           </CardHeader>
//           <CardBody pad="medium">
//             <Text>Check your schedule and upcoming appointments.</Text>
//           </CardBody>
//         </Card>
//         <Card onClick={() => navigateTo("/reports")} hoverIndicator background="white" elevation="medium">
//           <CardHeader pad="medium" direction="row" align="center" gap="small">
//             <DocumentText color="accent-2" size="large" />
//             <Text size="large" weight="bold">Reports</Text>
//           </CardHeader>
//           <CardBody pad="medium">
//             <Text>Generate and access reports quickly.</Text>
//           </CardBody>
//         </Card>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;



// import React from "react";
// import { Box, Card, CardBody, CardHeader, Button, Grid, Text } from "grommet";
// import { User, Schedule, DocumentText } from "grommet-icons";

// const Dashboard = ({ onLogout }) => {
//   const navigateTo = (section) => {
//     alert(`Navigating to ${section} page!`);
//     // Replace alert with navigation logic (e.g., React Router)
//   };

//   return (
//     <Box pad="large" fill>
//       {/* Header with Logout */}
//       <Box direction="row" justify="between" align="center" margin={{ bottom: "medium" }}>
//         <Text size="xlarge" weight="bold">Dashboard</Text>
//         <Button label="Logout" onClick={onLogout} primary color="status-critical" />
//       </Box>

//       {/* Dashboard Grid */}
//       <Grid columns="medium" gap="medium">
//         {/* Patient Records */}
//         <Card
//           onClick={() => navigateTo("Patient Records")}
//           background="light-1"
//           elevation="small"
//           hoverIndicator
//         >
//           <CardHeader pad="medium" direction="row" align="center" gap="small">
//             <User color="brand" size="large" />
//             <Text size="large" weight="bold">Patient Records</Text>
//           </CardHeader>
//           <CardBody pad="medium">
//             <Text>View and manage patient data securely.</Text>
//             <Button label="View Records" margin={{ top: "small" }} onClick={() => navigateTo("Patient Records")} />
//           </CardBody>
//         </Card>

//         {/* Appointments */}
//         <Card
//           onClick={() => navigateTo("Appointments")}
//           background="light-1"
//           elevation="small"
//           hoverIndicator
//         >
//           <CardHeader pad="medium" direction="row" align="center" gap="small">
//             <Schedule color="accent-1" size="large" />
//             <Text size="large" weight="bold">Appointments</Text>
//           </CardHeader>
//           <CardBody pad="medium">
//             <Text>Check your schedule and upcoming appointments.</Text>
//             <Button label="View Appointments" margin={{ top: "small" }} onClick={() => navigateTo("Appointments")} />
//           </CardBody>
//         </Card>

//         {/* Reports */}
//         <Card
//           onClick={() => navigateTo("Reports")}
//           background="light-1"
//           elevation="small"
//           hoverIndicator
//         >
//           <CardHeader pad="medium" direction="row" align="center" gap="small">
//             <DocumentText color="accent-2" size="large" />
//             <Text size="large" weight="bold">Reports</Text>
//           </CardHeader>
//           <CardBody pad="medium">
//             <Text>Generate and access patient reports quickly.</Text>
//             <Button label="View Reports" margin={{ top: "small" }} onClick={() => navigateTo("Reports")} />
//           </CardBody>
//         </Card>
//       </Grid>
//     </Box>
//   );
// };

// export default Dashboard;
