import React from "react";

function Dashboard(props) {
  const username = props.match.params;
  console.log(username);
  
  return (
    <div>
      <h1 style={{ marginTop: "400px" }}>Dash</h1>
    </div>
  );
}

export default Dashboard;
