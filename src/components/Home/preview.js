import React from "react";
import classes from "./preview.css";

function preview() {
  const [header] = React.useState({
    mainHeader: "What We Do",
    text: "These are the domains we work on.",
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "algo1",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 2,
      heading: "algo2",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 3,
      heading: "algo3",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 4,
      heading: "algo4",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 5,
      heading: "algo5",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      id: 6,
      heading: "algo6",
      text: "Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
  ]);
  return (
    <div className={classes.container}>
      <div className={classes.common}>
        <h3 className={classes.heading}>{header.mainHeader}</h3>
        <h1 className={classes.mainHeader}>{header.subHeading}</h1>
        <p className={classes.mainContent}>{header.text}</p>
        <div className={classes.commonBorder}></div>
      </div>

      <div className={classes.card__wrapper}>
        {state.map(info => (
          <div key={info.id} className={classes.services__box}>
            {info.icon}
            <div className={classes.services__boxheader}>{info.heading}</div>
            <div className={classes.services__boxheader} style={{ fontFamily: "sans-serif", fontSize: 14 }}>
              {info.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default preview;