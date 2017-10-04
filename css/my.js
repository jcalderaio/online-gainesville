import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "services span3": {
        "paddingTop": 25,
        "paddingRight": 6,
        "paddingBottom": 25,
        "paddingLeft": 6,
        "cursor": "pointer",
        "height": 290
    },
    "services span3:hover": {
        "background": "#3a3a3a",
        "color": "#fff",
        "paddingTop": 25,
        "paddingRight": 10,
        "paddingBottom": 25,
        "paddingLeft": 10,
        "WebkitTransition": "all 0.5s ease-in-out",
        "MozTransition": "all 0.5s ease-in-out",
        "OTransition": "all 0.5s ease-in-out",
        "MsTransition": "all 0.5s ease-in-out",
        "transition": "all 0.5s ease-in-out",
        "WebkitTransform": "rotate(360deg)",
        "MozTransform": "rotate(360deg)",
        "OTransform": "rotate(360deg)",
        "MsTransform": "rotate(360deg)"
    },
    "responsive-image": {
        "height": "auto",
        "width": "85%"
    },
    "enlarge": {
        "WebkitTransition": "all 1s ease",
        "MozTransition": "all 1s ease",
        "OTransition": "all 1s ease",
        "MsTransition": "all 1s ease",
        "transition": "all 1s ease"
    },
    "enlarge:hover": {
        "WebkitTransform": "scale(1.25)",
        "MozTransform": "scale(1.25)",
        "MsTransform": "scale(1.25)",
        "OTransform": "scale(1.25)",
        "transform": "scale(1.25)"
    },
    "shadowed": {
        "filter": "drop-shadow(9px 9px 9px rgba(0,0,0,0.3))"
    },
    "hrstar-light": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderTop": "solid 5px",
        "textAlign": "center",
        "maxWidth": 250,
        "marginTop": 25,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "borderColor": "white"
    },
    "hrstar-primary": {
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": "none",
        "borderTop": "solid 5px",
        "textAlign": "center",
        "maxWidth": 250,
        "marginTop": 25,
        "marginRight": "auto",
        "marginBottom": 30,
        "marginLeft": "auto",
        "borderColor": "#337AB7"
    },
    "hrstar-light:after": {
        "content": "\\f005",
        "fontFamily": "FontAwesome",
        "display": "inline-block",
        "position": "relative",
        "top": -0.8,
        "fontSize": 2,
        "paddingTop": 0,
        "paddingRight": 0.25,
        "paddingBottom": 0,
        "paddingLeft": 0.25,
        "backgroundColor": "#337AB7",
        "color": "white"
    },
    "hrstar-primary:after": {
        "content": "\\f005",
        "fontFamily": "FontAwesome",
        "display": "inline-block",
        "position": "relative",
        "top": -0.8,
        "fontSize": 2,
        "paddingTop": 0,
        "paddingRight": 0.25,
        "paddingBottom": 0,
        "paddingLeft": 0.25,
        "backgroundColor": "white",
        "color": "#337AB7"
    },
    "profile": {
        "backgroundColor": "#fff",
        "paddingTop": 6,
        "paddingRight": 6,
        "paddingBottom": 6,
        "paddingLeft": 6
    },
    "signature": {
        "fontFamily": "'Tangerine', serif",
        "fontSize": 3,
        "textShadow": "4px 4px 4px #aaa",
        "textAlign": "right"
    },
    "button": {
        "display": "inline-block",
        "marginTop": 0.3,
        "marginRight": 0.3,
        "marginBottom": 0.3,
        "marginLeft": 0.3,
        "paddingTop": 1.2,
        "paddingRight": 5,
        "paddingBottom": 1.2,
        "paddingLeft": 5,
        "overflow": "hidden",
        "position": "relative",
        "textDecoration": "none",
        "textTransform": "uppercase",
        "borderRadius": 25,
        "WebkitTransition": "0.3s",
        "MozTransition": "0.3s",
        "MsTransition": "0.3s",
        "OTransition": "0.3s",
        "transition": "0.3s",
        "filter": "drop-shadow(9px 9px 9px rgba(0,0,0,0.3))",
        "border": "none",
        "fontSize": 15,
        "textAlign": "center"
    },
    "button:hover": {
        "boxShadow": "1px 6px 15px rgba(0,0,0,0.5)"
    },
    "green": {
        "backgroundColor": "#4CAF50",
        "color": "white"
    },
    "red": {
        "backgroundColor": "#F44336",
        "color": "white"
    },
    "blue": {
        "backgroundColor": "#03A9F4",
        "color": "white"
    },
    "white": {
        "backgroundColor": "white",
        "color": "black"
    },
    "ripple": {
        "position": "absolute",
        "background": "rgba(0,0,0,.25)",
        "borderRadius": "100%",
        "transform": "scale(0.2)",
        "opacity": 0,
        "pointerEvents": "none",
        "WebkitAnimation": "ripple .75s ease-out",
        "MozAnimation": "ripple .75s ease-out",
        "animation": "ripple .75s ease-out"
    },
    "pricingstyle-2 plan-title": {
        "borderTopLeftRadius": 2,
        "borderTopRightRadius": 2
    },
    "pricing price": {
        "paddingTop": 15,
        "paddingRight": 0,
        "paddingBottom": 15,
        "paddingLeft": 0
    },
    "pricing price h4": {
        "textAlign": "center"
    },
    "pricing plan-title h5": {
        "textAlign": "center"
    },
    "pricing price span": {
        "display": "inline-block",
        "position": "relative"
    },
    "pricing plan-title span": {
        "display": "inline-block",
        "position": "relative"
    },
    "pricing plan-title spanplan": {
        "fontSize": 25,
        "fontWeight": "200",
        "paddingBottom": 20
    },
    "pricing price spanamount": {
        "fontSize": 50,
        "fontWeight": "100"
    },
    "pricing price spanperiod": {
        "marginLeft": -10,
        "fontSize": 16
    },
    "pricing price spancurrency": {
        "letterSpacing": -6,
        "top": -20,
        "fontSize": 16
    },
    "pricing collection licollection-item:hover": {
        "background": "#f5f5f5"
    },
    "dark-grey-text": {
        "color": "#121212"
    },
    "antispam": {
        "display": "none"
    }
});