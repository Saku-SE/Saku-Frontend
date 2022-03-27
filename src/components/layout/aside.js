import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  SubMenu,
} from "react-pro-sidebar";
import { FaInstagram } from "react-icons/fa";
import { IoMdAlert } from "react-icons/io";
import logo from "assets/img/gavel.svg";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import GavelIcon from "@mui/icons-material/Gavel";
import Person from "@mui/icons-material/Person";
import WorkIcon from "@mui/icons-material/Work";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import { useNavigate } from "react-router-dom";
import {
  SPLASH,
  CREATE_AUCTION,
  JOB_INFO,
  MESSAGES,
  MY_AUCTIONS,
  NOTIFICATIONS,
  PROFILE,
  TRANSACTIONS,
  AUCTION_PAGE,
} from "constant/routes";

const Aside = ({ toggled, handleToggleSidebar }) => {
  const navigate = useNavigate();
  return (
    <ProSidebar
      rtl={true}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <SidebarHeader>
        <div onClick={(e) => navigate(SPLASH)} className="flex cursor-pointer">
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 18,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              color: "#8ba8f5",
            }}
          >
            سکو
          </div>
          <img src={logo} alt="hammer" height="40" width="40" />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <MenuItem
            icon={<Person />}
            suffix={
              // <span className="badge yellow">
              <IoMdAlert size={24} color="orange" />
              // </span>
            }
            active={window.location.pathname === PROFILE}
            onClick={(e) => navigate(PROFILE)}
          >
            پروفایل
          </MenuItem>
          <MenuItem
            active={window.location.pathname === JOB_INFO}
            onClick={(e) => navigate(JOB_INFO)}
            icon={<WorkIcon />}
          >
            کسب و کار
          </MenuItem>
          <MenuItem
            active={window.location.pathname === TRANSACTIONS}
            onClick={(e) => navigate(TRANSACTIONS)}
            icon={<AccountBalanceWalletIcon />}
          >
            تراکنش‌های مالی
          </MenuItem>
          <MenuItem
            active={window.location.pathname === MESSAGES}
            onClick={(e) => navigate(MESSAGES)}
            icon={<InsertCommentIcon />}
            suffix={<span className="badge red">3</span>}
          >
            پیام‌ها
          </MenuItem>
          <MenuItem
            active={window.location.pathname === NOTIFICATIONS}
            onClick={(e) => navigate(NOTIFICATIONS)}
            icon={<NotificationsIcon />}
          >
            اعلانات
          </MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <MenuItem
            active={window.location.pathname === AUCTION_PAGE}
            onClick={(e) => navigate(AUCTION_PAGE)}
            icon={<GavelIcon fontSize="small" />}
          >
            مزایده‌ها
          </MenuItem>
          <MenuItem
            active={window.location.pathname === CREATE_AUCTION}
            onClick={(e) => navigate(CREATE_AUCTION)}
            icon={<AddOutlinedIcon fontSize="small" />}
          >
            ایجاد مزایده
          </MenuItem>

          <SubMenu
            title="مزایده‌ های من"
            icon={<LocalActivityIcon fontSize="small" />}
          >
            <MenuItem
              active={window.location.pathname === MY_AUCTIONS}
              onClick={(e) => navigate(MY_AUCTIONS)}
            >
              ایجاد شده
            </MenuItem>
            <MenuItem
              active={window.location.pathname === MY_AUCTIONS}
              onClick={(e) => navigate(MY_AUCTIONS)}
            >
              شرکت کرده
            </MenuItem>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaInstagram />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            ></span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
