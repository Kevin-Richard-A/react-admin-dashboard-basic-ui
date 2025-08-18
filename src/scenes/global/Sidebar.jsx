import { useEffect, useState } from "react";
import {
  Sidebar as ProSidebar,
  sidebarClasses,
  menuClasses,
  Menu,
  MenuItem,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import user from "../../assets/user.png";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Sidebar = ({
  isMd,
  isSm,
  toggled,
  handleToggle,
  isCollapsed,
  handleCollapse,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [selected, setSelected] = useState(
    sessionStorage.getItem("selectedPage") || "Dashboard"
  );

  useEffect(() => {
    sessionStorage.setItem("selectedPage", selected);
  }, [selected]);

  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        style={{ color: colors.grey[100] }}
        onClick={() => {
          setSelected(title);
          isSm && handleToggle();
        }}
        icon={icon}
        component={<Link to={to} />}
      >
        <Typography>{title}</Typography>
      </MenuItem>
    );
  };

  return (
    <Box
      sx={{
        // "& .ps-sidebar-root","& .ps-sidebar-container", "& .ps-menu-button", "& .ps-menu-button.active"
        "& .ps-sidebar-root": {
          height: "100%",
          border: 0,
        },
      }}
    >
      <ProSidebar
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: `${colors.primary[400]} !important`,
          },
          [`.${menuClasses.button}`]: {
            padding: "5px 35px 5px 20px !important",
          },
          [`.${menuClasses.button}:hover`]: {
            backgroundColor: "transparent !important",
            color: "#868dfb !important",
          },
          [`.${menuClasses.active}`]: {
            color: `${colors.greenAccent[400]} !important`,
          },
        }}
        collapsed={isCollapsed}
        onBackdropClick={handleToggle}
        toggled={toggled}
        breakPoint={!isMd ? undefined : "all"}
      >
        <Menu
          iconShape="square"
          menuItemStyles={{
            icon: {
              backgroundColor: "transparent !important",
            },
          }}
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={(e) => handleCollapse(e, !isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={(e) => handleCollapse(e, !isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* USER */}
          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`${user}`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{
                    m: "10px 0 0 0",
                  }}
                >
                  Kevin Richard
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  SUPER ADMIN
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEMS */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title={"Dashboard"}
              to={"/"}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title={"Manage Team"}
              to={"/team"}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Contact Information"}
              to={"/contacts"}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title={"Invoices Balances"}
              to={"/invoices"}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Profile Form"}
              to={"/form"}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Calendar"}
              to={"/calendar"}
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"FAQ Page"}
              to={"/faq"}
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title={"Bar Chart"}
              to={"/bar"}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Pie Chart"}
              to={"/pie"}
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Line Chart"}
              to={"/line"}
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title={"Geography Chart"}
              to={"/geography"}
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
