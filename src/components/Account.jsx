import { useMoralisDapp } from "providers/MoralisDappProvider/MoralisDappProvider";
import { useMoralis } from "react-moralis";
import { getEllipsisTxt } from "helpers/formatters";
const styles = {
  account: {
    height: "42px",
    padding: "0 15px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    borderRadius: "12px",
    backgroundColor: "transparent",
    outline: "1px solid orange",
    cursor: "pointer",
  },
  text: {
    color: "white",
  },
};

function Account() {
  const { authenticate, isAuthenticated, logout } = useMoralis();
  const { walletAddress } = useMoralisDapp();

  if (!isAuthenticated) {
    return (
      <div style={styles.account} onClick={() => authenticate({ signingMessage: "Welcome to Shibaverse!" })}>
        <p style={styles.text}>Authenticate</p>
      </div>
    );
  }

  return (
    <div style={styles.account} onClick={() => logout()}>
      <p style={styles.text}>{getEllipsisTxt(walletAddress, 6)}</p>
    </div>
  );
}

export default Account;
