import React, { useEffect, useState } from 'react'

export default function EmbeddedButtonContainer() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!scriptLoaded) {
      const script = document.createElement("script");
      script.src =
        "https://topmate-embed.s3.ap-south-1.amazonaws.com/v1/topmate-embed.js";
      script.async = true;
      script.defer = true;
      script.setAttribute(
        "user-profile",
        "https://topmate.io/embed/profile/vpdigital?theme=93C5F9"
      );
      script.setAttribute(
        "btn-style",
        '{ "backgroundColor": "#2788ff", "&:hover": { "backgroundColor": "#3182ce" }, "color": "#ffffff", "fontWeight": "bold", "paddingTop": "0.75rem", "paddingRight": "1.5rem", "paddingBottom": "0.75rem", "paddingLeft": "1.5rem", "borderRadius": "0.375rem", "outline": "none", "boxShadow": "0 0 0 3px rgba(66, 153, 225, 0.5)", "width": "100%", "position":"absolute" , "marginRight" : "23%" , "marginBottom" : "19%"  } '
      );
      script.setAttribute("embed-version", "v1");
      script.setAttribute("button-text", "Book Your Spot");
      script.setAttribute("custom-padding-right", "0");
      script.setAttribute("custom-padding-bottom", "0px");
      script.setAttribute("custom-font-size", "16px");
      script.setAttribute("custom-font-weight", "500");
      script.setAttribute("custom-width", "50%");

      document.body.appendChild(script);

      setScriptLoaded(true);
      return () => {
        // Remove the script when component unmounts
        if (scriptLoaded) {
          document.body.removeChild(script);
          setScriptLoaded(false);
        }
      };
    }

    // Cleanup function
    
  }, [scriptLoaded]);

  return <div />;
}

 

