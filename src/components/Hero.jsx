import React from "react";
import Carousel from "./Carousel";
import { Button } from "@mui/material";

function Hero() {
  return (
    <div className="text-center py-10">
      <Carousel />
      <h2 className="mt-8 text-2xl font-bold">IEI STUDENT’S FORUM MITS</h2>
      <p className="text-gray-600 mt-2 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac odio
        efficitur, fringilla tellus eu, scelerisque tortor
      </p>
      <Button
        variant="contained"
        sx={{ marginTop: "20px", backgroundColor: "#007bff" }}
      >
        Memberships
      </Button>
    </div>
  );
}

export default Hero;
