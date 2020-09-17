import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import "../assets/trading-view.css";

class TradingView extends React.Component {
  render() {
    return <TradingViewWidget theme={Themes.LIGHT} locale="fr" />;
  }
}
export default TradingView;
