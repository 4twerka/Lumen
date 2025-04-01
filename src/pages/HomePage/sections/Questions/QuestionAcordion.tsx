import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface QuestionAcordionProps {
  title: string;
  text: string;
  number: string;
}

const QuestionAcordion: React.FC<QuestionAcordionProps> = ({
  title,
  text,
  number,
}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Accordion
      sx={{
        "&.MuiPaper-root": {
          borderRadius: 0,
          boxShadow: "none",
          borderBottom: "1px solid #A3A3A3",
        },
        "&.MuiPaper-root::before": {
          height: 0,
        },
      }}
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionSummary
        sx={{ "& .MuiAccordionSummary-content": { margin: "24px 0" } }}
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography
          component="span"
          sx={{ color: "#A3A3A3", fontWeight: 500, paddingRight: "0.5rem" }}
        >
          {number}
        </Typography>
        <Typography
          sx={{
            fontWeight: { xs: 400, md: 500 },
            fontSize: { xs: "0.75rem", md: "1rem" },
          }}
          component="span"
        >
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ fontSize: { xs: "0.75rem", md: "1rem" } }}>
        {text}
      </AccordionDetails>
    </Accordion>
  );
};

export default QuestionAcordion;
