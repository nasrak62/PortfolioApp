import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";

import ByCondition from "components/utils/ByCondition";
import useStore from "hooks/useStore";
import { StyledNavBar, classes } from "./NavBar.styles";

const NavBar = observer(() => {
  const store = useStore();
  const loggedIn = store?.token && store?.loggedIn;

  const logout = useCallback(() => {
    store?.logout();
  }, [store]);

  const variants = useMemo(
    () => ({
      hover: {
        scale: [1, 1.5, 1.7, 2, 1.7, 1.5, 1],
        rotate: [0, 270, 540, 810, 1080, 1350, 1440],
        borderRadius: ["25%", "50%", "75%", "100%", "75%", "50%", "25%"],
      },
    }),
    []
  );

  const motionLink = useCallback(
    (text, url, onClick = null) => {
      return (
        <ByCondition
          condition={onClick}
          ifFalse={
            <Link className={classes.link} to={url}>
              <motion.p
                whileHover="hover"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                {text}
              </motion.p>
            </Link>
          }
          ifTrue={
            <Link className={classes.link} to={url} onClick={onClick}>
              <motion.p
                whileHover="hover"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                {text}
              </motion.p>
            </Link>
          }
        />
      );
    },
    [variants]
  );

  return (
    <StyledNavBar className={classes.navContainer}>
      <p className={classes.link}>Logo</p>
      <div className={classes.container}>
        {motionLink("Home", "/")}

        <ByCondition
          condition={loggedIn}
          ifTrue={
            <>
              {motionLink("Transactions", "/transactions")}
              {motionLink("icon", "/transactions")}
              {motionLink("Sign Out", "/", logout)}
            </>
          }
          ifFalse={
            <>
              {motionLink("Register", "/register")}
              {motionLink("Login", "/login")}
            </>
          }
        />
      </div>
    </StyledNavBar>
  );
});

export default NavBar;
