import { Timeline, Typography } from "antd";
import React from "react";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "25px",
    fontWeight: "700",
    marginLeft: "-15px",
    marginBottom: "20px",
  },
  text: {
    fontSize: "17px",
  },
  wrapper: {
    maxWidth: "1000px",
    width: "80%",
    padding: "15px",
  },
};

export default function QuickStart(props) {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>Welcome to Shibaverse</h1>
      
    </div>
  );
}
