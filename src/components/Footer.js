import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <div>
      <footer>
        <BottomNavigation
          sx={{ width: "100%", backgroundColor: "#4a4545", color: "#fff" }}
          showLabels
        >
          <BottomNavigationAction
            icon={<FacebookIcon sx={{ color: "#fff" }} />}
          />
          <BottomNavigationAction
            icon={<TwitterIcon sx={{ color: "#fff" }} />}
          />
          <BottomNavigationAction
            icon={<InstagramIcon sx={{ color: "#fff" }} />}
          />
        </BottomNavigation>
      </footer>
    </div>
  );
};

export default Footer;
