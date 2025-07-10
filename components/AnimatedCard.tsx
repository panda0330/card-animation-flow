'use client';

import { useState, useMemo, ReactNode } from 'react';
import { Box, Stack, Card, Typography } from '@mui/material';

// Animation keyframes for the rotating border effect
const rotateOneTurn = 'rotateOneTurn';

// Add global styles for the animation
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes rotateOneTurn {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `;
  document.head.appendChild(style);
}

interface AnimatedCardWrapperProps {
  children: ReactNode;
  type?: number;
  sx?: any;
}

// Card wrapper component with border animation
function AnimatedCardWrapper({ children, type = 0, sx = {} }: AnimatedCardWrapperProps) {
  const [isHover, setIsHover] = useState(false);
  
  // Define shadow colors based on card type
  const shadowColor = useMemo(() => {
    switch (type) {
      case 4:
        return '#95042e';
      case 3:
        return '#ab4bff';
      case 2:
        return '#20C963';
      case 1:
        return '#f3cb78';
      default:
        return '';
    }
  }, [type]);

  return (
    <Stack
      sx={{
        position: 'relative',
        overflow: 'visible',
        transition: 'all 0.1s',
        '&:hover': { transform: 'translateY(-20px)' },
        mx: 'auto',
        ...sx,
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          p: '2px',
          borderRadius: '16px',
          zIndex: -1,
          contain: 'content',
          overflow: 'hidden',
          boxShadow: (theme: any) => theme.customShadows?.card || '0 0 20px rgba(0,0,0,0.1)',
          '&:before': {
            content: '""',
            position: 'absolute',
            width: '200%',
            height: '200%',
            zIndex: -1,
          },
          '&:hover': {
            '&:before': {
              backgroundImage: `conic-gradient(transparent, ${shadowColor}, transparent 30%)`,
              animation: `${rotateOneTurn} 5s linear infinite`,
            },
          },
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {children}
      </Stack>
    </Stack>
  );
}

interface AnimatedCardProps {
  type?: number;
  title?: string;
  content?: string;
}

// Example usage component
export default function AnimatedCard({ 
  type = 0, 
  title = "Tren Finance Protocol Token", 
  content = "Presale\nMax Buy: 10K USDC" 
}: AnimatedCardProps) {
  return (
    <AnimatedCardWrapper type={type} sx={{ maxWidth: 380, background: 'transparent' }}>
      <Card sx={{
        width: 1,
        borderRadius: '18px',
        bgcolor: '#fff',
        color: '#fff',
        boxShadow: '0 4px 24px 0 rgba(0,0,0,0.5)',
        position: 'relative',
        overflow: 'visible',
        p: 0
      }}>
        {/* Top badge and ribbon */}
        <Box sx={{ position: 'absolute', left: '50%', top: -32, transform: 'translateX(-50%)', zIndex: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* Placeholder for top icon */}
            <Box sx={{ width: 48, height: 48, bgcolor: '#222', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '3px solid #7c3aed' }}>
              {/* Example: Ethereum icon */}
              <Box component="span" sx={{ width: 24, height: 24, bgcolor: '#a682ff', borderRadius: '50%' }} />
            </Box>
            {/* Ribbon */}
            <Box sx={{
              mt: '-8px',
              bgcolor: '#20C963',
              color: '#fff',
              px: 1.5,
              py: 0.2,
              fontSize: 12,
              fontWeight: 700,
              borderRadius: '0 0 8px 8px',
              boxShadow: '0 2px 8px 0 rgba(32,201,99,0.2)'
            }}>
              3% REF
            </Box>
          </Box>
        </Box>
        {/* Card Content */}
        <Box sx={{ p: 3, pt: 6 }}>
          {/* Status */}
          <Typography variant="caption" sx={{ color: '#b0b0b0', fontWeight: 700, letterSpacing: 1, mb: 1, display: 'block' }}>
            ● CANCELLED
          </Typography>
          {/* Project logo and name */}
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Box sx={{ width: 40, height: 40, bgcolor: '#181c23', borderRadius: '50%', border: '2px solid #20C963', display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1.5 }}>
              {/* Placeholder for project logo */}
              <Box component="span" sx={{ width: 24, height: 24, bgcolor: '#20C963', borderRadius: '50%' }} />
            </Box>
            <Box>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#b0b0b0', fontSize: 13, lineHeight: 1.1 }}>
                Presale
              </Typography>
              <Typography variant="caption" sx={{ color: '#b0b0b0', fontSize: 12 }}>
                Max Buy: 10K USDC
              </Typography>
            </Box>
          </Box>
          {/* Progress bar and softcap/hardcap */}
          <Box sx={{ mt: 2, mb: 1 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#b0b0b0', mb: 0.5 }}>
              <span>Progress</span>
              <span>Softcap</span>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
              <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700, minWidth: 60 }}>
                0 USDC
              </Typography>
              <Box sx={{ flex: 1, mx: 1, height: 8, bgcolor: '#23272f', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
                <Box sx={{ width: '0%', height: 1, bgcolor: '#20C963', position: 'absolute', left: 0, top: 0, bottom: 0, borderRadius: 4 }} />
              </Box>
              <Typography variant="caption" sx={{ color: '#fff', fontWeight: 700, minWidth: 60, textAlign: 'right' }}>
                10,000 USDC
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: '#b0b0b0' }}>
              <span>0%</span>
              <span>10,000 USDC</span>
            </Box>
          </Box>
          {/* Info rows */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2, mb: 1 }}>
            <Box>
              <Typography variant="caption" sx={{ color: '#b0b0b0', fontWeight: 700 }}>Softcap</Typography>
              <Typography variant="body2" sx={{ color: '#20C963', fontWeight: 700 }}>10K USDC</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#b0b0b0', fontWeight: 700 }}>Hardcap</Typography>
              <Typography variant="body2" sx={{ color: '#20C963', fontWeight: 700 }}>100K USDC</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#b0b0b0', fontWeight: 700 }}>Rate</Typography>
              <Typography variant="body2" sx={{ color: '#fff', fontWeight: 700 }}>100 TREN</Typography>
            </Box>
            <Box>
              <Typography variant="caption" sx={{ color: '#b0b0b0', fontWeight: 700 }}>Lock</Typography>
              <Typography variant="body2" sx={{ color: '#20C963', fontWeight: 700 }}>Manual</Typography>
            </Box>
          </Box>
          {/* Action icons row (placeholders) */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {/* Placeholder icons */}
              <Box sx={{ width: 20, height: 20, bgcolor: '#23272f', borderRadius: '50%' }} />
              <Box sx={{ width: 20, height: 20, bgcolor: '#23272f', borderRadius: '50%' }} />
              <Box sx={{ width: 20, height: 20, bgcolor: '#23272f', borderRadius: '50%' }} />
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Box sx={{ width: 20, height: 20, bgcolor: '#23272f', borderRadius: '50%' }} />
              <Box sx={{ width: 20, height: 20, bgcolor: '#23272f', borderRadius: '50%' }} />
            </Box>
          </Box>
        </Box>
      </Card>
    </AnimatedCardWrapper>
  );
}

// Export the wrapper component for custom usage
export { AnimatedCardWrapper };