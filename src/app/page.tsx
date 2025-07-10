'use client';

import { Container, Grid, Typography, Box } from '@mui/material';
import AnimatedCard from '../../components/AnimatedCard';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        Animated Card Examples
      </Typography>
      
      <Grid container spacing={4}>
        <Grid item xs={12} md={6} lg={3}>
          <AnimatedCard 
            type={1}
            title="Gold Tier"
            content="This is a gold tier card with animated border effect. Hover to see the animation!"
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <AnimatedCard 
            type={2}
            title="Green Tier"
            content="This is a green tier card with animated border effect. Hover to see the animation!"
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <AnimatedCard 
            type={3}
            title="Purple Tier"
            content="This is a purple tier card with animated border effect. Hover to see the animation!"
          />
        </Grid>
        
        <Grid item xs={12} md={6} lg={3}>
          <AnimatedCard 
            type={4}
            title="Red Tier"
            content="This is a red tier card with animated border effect. Hover to see the animation!"
          />
        </Grid>
      </Grid>
      
    </Container>
  );
}