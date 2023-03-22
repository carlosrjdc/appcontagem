import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Endereço", "Material", "Lote", "Quantidade"];

export default function Etapas(props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.etapa} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
