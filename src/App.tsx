import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Box } from "@mui/material";

const App: React.FC = () => {
  const url = `https://qr-intiyaz-data.web.app/`;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "black",
      }}
    >
      <div style={{ textAlign: "center", margin: "auto" }}>
        <QRCodeCanvas
          value={url} // Embed the full URL
          size={256}
          level="H"
          includeMargin={true}
        />
        <p style={{ color: "white", marginTop: "20px" }}>
          Scan the QR Code to view user details.
        </p>
      </div>
    </Box>
  );
};

export default App;
