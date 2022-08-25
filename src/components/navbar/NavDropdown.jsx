import MotionLink from 'components/utils/MotionLink';
import { MenuItem, Menu } from 'material-ui';
import React from 'react';

const NavDropdown = ({ handleClose, anchorEl, open, classes, variants }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}>
      <MenuItem onClick={handleClose}>
        <MotionLink
          text="Game 1"
          url="/games/game1"
          onClick={null}
          variants={variants}
          classes={classes}
        />
      </MenuItem>
      <MenuItem onClick={handleClose}>Game 2</MenuItem>
      <MenuItem onClick={handleClose}>Game 3</MenuItem>
    </Menu>
  );
};

export default NavDropdown;
