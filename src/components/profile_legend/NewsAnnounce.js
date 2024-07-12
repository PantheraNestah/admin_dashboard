import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';
import "./NewsAnnounce.scss";

const newsData = [
  {
    id: 1,
    title: "New Office Opening",
    date: "2024-07-01",
    description: "We are excited to announce the opening of our new office in downtown!",
  },
  {
    id: 2,
    title: "Top Sales Award",
    date: "2024-06-20",
    description: "Congratulations to Jane Doe for receiving the top sales award!",
  },
  // More news items...
];

const NewsAndAnnouncements = () => {
  return (
    <Box className="news-container">
      <Typography variant="h6" className="news-header">
        News and Announcements
      </Typography>
      <Box className="news-list">
        {newsData.map((news) => (
          <Card key={news.id}  className="news-card">
            <CardContent>
              <Typography variant="subtitle1" className="news-title">
                {news.title}
              </Typography>
              <Typography variant="caption" className="news-date">
                {news.date}
              </Typography>
              <Typography variant="body2" className="news-description">
                {news.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    overflowY: 'auto',
    padding: '16px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: '16px',
    fontWeight: 'bold',
    textAlign: 'start',
  },
  newsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    color: '#888',
  },
  description: {
    marginTop: '8px',
  },
};

export default NewsAndAnnouncements;
