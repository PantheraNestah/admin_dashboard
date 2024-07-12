import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import './Culture.scss'; // Make sure the path is correct

const cultureValuesData = [
  {
    id: 1,
    title: "Customer Focus",
    description: "We prioritize our customers in everything we do, ensuring their needs are met with excellence.",
  },
  {
    id: 2,
    title: "Integrity",
    description: "We adhere to the highest ethical standards, demonstrating honesty and fairness in every action.",
  },
  {
    id: 3,
    title: "Innovation",
    description: "We constantly seek new and creative solutions to meet the evolving needs of our clients.",
  },
  {
    id: 4,
    title: "Teamwork",
    description: "We work collaboratively, valuing the unique contributions of each team member.",
  },
  // More values...
];

const CompanyCultureAndValues = () => {
  return (
    <Box className="culture-container">
      <Typography variant="h6" className="culture-header">
        Our Culture and Values
      </Typography>
      <Box className="culture-list">
        {cultureValuesData.map((value) => (
          <Card key={value.id} className="culture-card">
            <CardContent>
              <Typography variant="subtitle1" className="culture-title">
                {value.title}
              </Typography>
              <Typography variant="body2" className="culture-description">
                {value.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default CompanyCultureAndValues;
