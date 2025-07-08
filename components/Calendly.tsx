"use client"

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useTheme } from 'next-themes';

const lightThemeColors = {
  background: 'FFFFFF',
  text: '1A1A1A',
  primary: '0069FF'
};

const darkThemeColors = {
  background: '1F2937',
  text: 'F3F4F6',
  primary: '60A5FA'
};

export default function Calendly() {
  const { theme } = useTheme();
  const [calendlyUrl, setCalendlyUrl] = useState('');

  useEffect(() => {
    const colors = theme === 'light' ? lightThemeColors : darkThemeColors;
    const url = `https://calendly.com/maximecamp/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=${colors.background}&text_color=${colors.text}&primary_color=${colors.primary}`;
    setCalendlyUrl(url);
  }, [theme]);

  if (!calendlyUrl) {
    return <div>Chargement du calendrier...</div>;
  }

  return (
    <>
      <div 
        className="calendly-inline-widget" 
        data-url={calendlyUrl}
        style={{ minWidth: '320px', height: '1000px', colorScheme: "white" }}
      />
      <Script 
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
} 