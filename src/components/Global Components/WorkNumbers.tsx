import React from "react";
import { Grid, Typography } from "@mui/material";

export interface WorkNumbersProps {
  title: string;
  desc: string;
  statCounts: string[];
  statDescs: string[]
}

const WorkNumbers = ({
  title,
  desc,
  statCounts,
  statDescs,
}: WorkNumbersProps) => {
  return (
    <Grid
      container
      justifyContent="start"
      sx={{ marginTop: 10, marginBottom: 5 }}
    >
      <Grid item md={6} sx={{ justifyContent: "start", marginLeft: 5 }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", marginLeft: 5 }}>
          {title}
        </Typography>
      </Grid>
      <Grid item md={8} sx={{ marginLeft: 5 }}>
        <Typography variant="subtitle1" sx={{ marginTop: 3, marginLeft: 5 }}>
          {desc}
        </Typography>
      </Grid>

      <Grid
        container
        justifyContent="space-between"
        sx={{ marginTop: 5, marginLeft: 5, padding: 1 }}
      >
        {statCounts.map((statcount, index: number) => (
          <Grid
            key={index}
            item
            md={3}
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: 4,
              borderRadius: 3,
              backgroundColor: "#F8F8FB",
              margin: 2,
            }}
          >
            <Typography variant="h2" component="h2" sx={{ fontWeight: "bold" }}>
              {statCounts[index]}
            </Typography>
            <Typography variant="body1" sx={{ marginLeft: 1, marginTop: 3 }}>
              {statDescs[index]}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default WorkNumbers;
