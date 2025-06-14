import React, { useEffect, useRef } from "react";

const MarketWidget = () => {
  const widgetRef = useRef(null);

  useEffect(() => {
    if (widgetRef.current && window.Widget) {
      window.Widget.init({
        widgetId: "d9bd562b-0ca9-4d1c-a3ab-3889204e1dd8",
        type: "StripBar",
        language: "en",
        showBrand: true,
        isShowTradeButton: true,
        isShowBeneathLink: true,
        isShowDataFromACYInfo: true,
        symbolPairs: [
          { symbolId: "10007", symbolName: "Apple" },
          { symbolId: "10014", symbolName: "Tesla" },
          { symbolId: "10004", symbolName: "Alphabet" },
          { symbolId: "10028", symbolName: "MetaPlatformsInc" },
          { symbolId: "20070", symbolName: "Infosys" },
          { symbolId: "81", symbolName: "US2000" },
          { symbolId: "51", symbolName: "DJ30" },
          { symbolId: "52", symbolName: "SP500" },
          { symbolId: "10068", symbolName: "Nasdaq" },
        ],
        isAdaptive: true,
      });
    }
  }, []);

  return <div ref={widgetRef} className="finlogix-container"></div>;
};

export default MarketWidget;
