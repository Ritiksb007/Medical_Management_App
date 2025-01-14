import React, { useState } from "react";

const CustomRoutes = ({ routes, defaultRoute }) => {
  const [currentPath, setCurrentPath] = useState(defaultRoute);

  const navigate = (path) => setCurrentPath(path);

  const CurrentComponent = routes[currentPath] || (() => <h2>Page Not Found</h2>);

  return (
    <div>
      <nav style={{ marginBottom: "20px" }}>
        {Object.keys(routes).map((path) => (
          <button
            key={path}
            onClick={() => navigate(path)}
            style={{
              margin: "0 10px",
              padding: "10px 20px",
              backgroundColor: "#7D4CDB",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {path}
          </button>
        ))}
      </nav>
      <CurrentComponent />
    </div>
  );
};

export default CustomRoutes;
