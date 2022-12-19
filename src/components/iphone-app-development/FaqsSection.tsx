import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

interface FaqsProps {
  heading1: string,
  heading2: string,
  faqsummaries: string[],
  faqDetails: string[]
}

const FaqsSection = ({heading1, heading2, faqsummaries, faqDetails }: FaqsProps) => {
  const [flag, setFlag] = React.useState<number | false>(false);

  const handleChange = (isExpanded: boolean, panel: number) => {
    setFlag(isExpanded ? panel : false);
  };
  return (
    <Grid sx={{ pt: "95px", pb: "30px", paddingX: { xl: "270px"} }}>
      <Grid sx={{ px: "15px", mx: { md: "50px", xs: "0px" } }}>
        <Typography variant="h4" mb="20px">
          <Typography variant="h5" color="#7a7a7a" fontSize={"24px"} className="font-light">
            {heading1}
          </Typography>
          {heading2}
        </Typography>
        {faqsummaries.map((summary, index) => (
          <Accordion
            sx={{ color: flag === index ? "red" : "#666264" }}
            key={index}
            expanded={flag === index}
            onChange={(event, isExpanded) => handleChange(isExpanded, index)}
          >
            <AccordionSummary
              sx={{ flexDirection: "row-reverse" }}
              expandIcon={<AddIcon />}
            >
              <Typography variant="subtitle1" ml="40px">
                {summary}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" sx={{ px: "60px", color: "#666264" }}>
                {faqDetails[index]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </Grid>
  );
};

export default FaqsSection;
