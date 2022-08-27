import { observer } from 'mobx-react-lite';
import { useCallback, useMemo, useState } from 'react';

import ByCondition from 'components/utils/ByCondition';
import useStore from 'hooks/useStore';
import { StyledNavBar, classes } from './NavBar.styles';
import NavDropdown from './NavDropdown';
import ShowWhen from 'components/utils/ShowWhen';
import MotionLink from 'components/utils/MotionLink';
import Logo from 'assets/Pictures/allmight.jpg';

const NavBar = observer(() => {
  const store = useStore();
  const loggedIn = store?.token && store?.loggedIn;
  const [anchorEl, setAnchorEl] = useState(null);
  const [openMenu, setOpenMenu] = useState(true);
  const open = Boolean(anchorEl);

  const logout = useCallback(() => {
    store?.logout();
  }, [store]);

  const variants = useMemo(
    () => ({
      hover: {
        // scale: [1, 1.5, 1.7, 2, 1.7, 1.5, 1],
        // rotate: [0, 270, 540, 810, 1080, 1350, 1440],
        // borderRadius: ['25%', '50%', '75%', '100%', '75%', '50%', '25%'],
      },
    }),
    [],
  );

  const setAnchor = useCallback(
    (event) => {
      setAnchorEl(event.currentTarget);
    },
    [setAnchorEl],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  const handleLogoClick = useCallback(() => {
    setOpenMenu((prev) => !prev);
  }, [setOpenMenu]);

  return (
    <StyledNavBar className={classes.navContainer} cssOpenMenu={openMenu}>
      <p className={classes.link} onClick={handleLogoClick}>
        <img className={classes.logo} src={Logo} alt="Logo" />
      </p>
      <ShowWhen condition={openMenu}>
        <div className={classes.container}>
          <MotionLink
            text="Home"
            url="/"
            onClick={null}
            variants={variants}
            classes={classes}
          />

          <ByCondition
            condition={loggedIn}
            ifTrue={
              <>
                <MotionLink
                  text="Transactions"
                  url="/transactions"
                  onClick={null}
                  variants={variants}
                  classes={classes}
                />
                <MotionLink
                  text="Weights"
                  url="/weights"
                  onClick={null}
                  variants={variants}
                  classes={classes}
                />
                <MotionLink
                  text="Foods"
                  url="/foods"
                  onClick={null}
                  variants={variants}
                  classes={classes}
                />

                <p onClick={setAnchor}>Games</p>
                <NavDropdown
                  handleClose={handleClose}
                  anchorEl={anchorEl}
                  open={open}
                  variants={variants}
                  classes={classes}
                />

                <MotionLink
                  text="Meals"
                  url="/meals"
                  onClick={null}
                  variants={variants}
                  classes={classes}
                />

                <MotionLink
                  text="Sign Out"
                  url="/"
                  onClick={logout}
                  variants={variants}
                  classes={classes}
                />
              </>
            }
            ifFalse={
              <>
                <MotionLink
                  text="Register"
                  url="/register"
                  onClick={null}
                  variants={variants}
                  classes={classes}
                />

                <MotionLink
                  text="Login"
                  url="/login"
                  onClick={null}
                  variants={variants}
                  classes={classes}
                />
              </>
            }
          />
        </div>
      </ShowWhen>
    </StyledNavBar>
  );
});

export default NavBar;
