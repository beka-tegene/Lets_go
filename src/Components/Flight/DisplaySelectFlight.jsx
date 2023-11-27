import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const DisplaySelectFlight = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);

  const dummyData = {
    seatMapOption: [
      {
        cabins: [
          {
            columns: [
              { id: "A", description: ["WINDOW"] },
              { id: "B", description: ["BETWEEN"] },
              { id: "C", description: ["AISLE"] },
              { id: "D", description: ["AISLE"] },
              { id: "E", description: ["BETWEEN"] },
              { id: "F", description: ["WINDOW"] },
            ],
            rows: [
              { id: 1, description: null },
              { id: 2, description: null },
              { id: 3, description: null },
              { id: 4, description: null },
              { id: 5, description: null },
            ],
            seats: [
              { colId: "A", rowId: 1, description: "NORMAL", price: null },
              { colId: "B", rowId: 1, description: "NORMAL", price: 70.65 },
              { colId: "C", rowId: 1, description: "NORMAL", price: 70.65 },
              { colId: "D", rowId: 1, description: "NORMAL", price: 70.65 },
              { colId: "E", rowId: 1, description: "NORMAL", price: 70.65 },
              { colId: "F", rowId: 1, description: "NORMAL", price: null },
              // Continue adding other seats as needed
            ],
          },
          // Add other cabins if applicable
        ],
      },
      // Add other seatMapOptions if applicable
    ],
  };

  const seatMapData = dummyData.seatMapOption[0].cabins[0].rows.map((row) =>
    dummyData.seatMapOption[0].cabins[0].columns.map((col) => {
      const seat = dummyData.seatMapOption[0].cabins[0].seats.find(
        (s) => s.colId === col.id && s.rowId === row.id
      );
      return (
        seat || {
          colId: col.id,
          rowId: row.id,
          description: "EMPTY",
          price: null,
        }
      );
    })
  );

  const handleSeatClick = (rowIndex, colIndex) => {
    const selectedSeatData = seatMapData[rowIndex][colIndex];
    if (selectedSeatData.description === "NORMAL") {
      setSelectedSeat(
        `Seat ${selectedSeatData.colId}${selectedSeatData.rowId}`
      );
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1 style={{ color: "#333" }}>Airline Seat Map</h1>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {seatMapData.map((row, rowIndex) => (
          <Box key={rowIndex} style={{ display: "flex" }}>
            {row.map((seatData, colIndex) => (
              <Box
                key={colIndex}
                style={{
                  width: "30px",
                  height: "30px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "2px",
                  border: "1px solid #ccc",
                  cursor:
                    seatData.description === "NORMAL"
                      ? "pointer"
                      : "not-allowed",
                  backgroundColor:
                    seatData.description === "NORMAL" ? "#00ff00" : "#fff",
                  color: seatData.description === "NORMAL" ? "#000" : "#000",
                  transition: "background-color 0.3s, color 0.3s",
                }}
                onClick={() => handleSeatClick(rowIndex, colIndex)}
              >
                {seatData.description === "NORMAL" ? "N" : ""}
              </Box>
            ))}
          </Box>
        ))}
      </Box>
      <div style={{ marginTop: "20px" }}>
        <Typography variant="h5">Front View of the Plane</Typography>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "150px",
            border: "1px solid #ccc",
            marginTop: "10px",
          }}
        >
          {selectedSeat ? (
            <Typography variant="body1">
              You selected: {selectedSeat}
            </Typography>
          ) : (
            <Typography variant="body1">
              Click on an available seat to select
            </Typography>
          )}
        </Box>
      </div>
    </div>
  );
};

export default DisplaySelectFlight;
