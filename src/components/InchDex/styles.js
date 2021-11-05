const styles = {
  card: {
    maxWidth: "430px",
    width: "100%",
    padding: "20px",
    background: "#181a27",
    boxShadow: "rgb(0 0 0 / 45%) 0px 0px 12px 6px",
  borderRadius: "8px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  swapbox: {
    overflow: "auto",
    margin: "10px 0",
    borderRadius: "8px",
    padding: "13px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#252833",
    boxShadow: "inset 0px 3px 4px rgba(0, 0, 0, 0.25)",
  },
  swapboxHeader: {
    marginBottom: "10px",
  },
  swapboxSelect: {
    display: "flex",
    justifyContent: "space-between",
  },
  selectedToken: {
    height: "30px",
  },
  selectedRow: {
    display: "flex",
    alignItems: "center",
    gap: "3px",
    cursor: "pointer",
  },
  swapboxInput: {
    color: "#041836",
    outline: "none",
    fontSize: "16px",
    border: "none",
    backgroundColor: "transparent",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textverflow: "ellipsis",
    padding: "0px",
    appearance: "textfield",
  },
  swapButton: {
    border: "0px",
    cursor: "pointer",
    display: "inline-flex",
    fontSize: "16px",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    borderRadius: "8px",
    outline: "0px",
    height: "44px",
    color: "white",
    width: "100%",
    backgroundColor: "orange",
  },
};

export default styles;
