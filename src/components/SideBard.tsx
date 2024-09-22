import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { TbListDetails } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

type Anchor = "top" | "left" | "bottom" | "right";

export default function AnchorTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul className="flex justify-center items-center flex-col lg:gap-8 gap-4 ">
          <li className="text-xl">
            <a href="#" className="  text-secondary font-[600]">
              الرئيسية
            </a>
          </li>
          <li className="text-xl">
            <a
              href="#"
              className="  hover:text-secondary text-[#000000] font-[600]"
            >
              إعرفني
            </a>
          </li>
          <li className="flex gap-1 text-xl items-center hover:text-secondary">
            <a
              href="#"
              className="  hover:text-secondary text-[#000000] font-[600]"
            >
              المكاتب الهندسية
            </a>
            <IoIosArrowDown />
          </li>
          <li className="flex gap-1 text-xl items-center hover:text-secondary">
            <a
              href="#"
              className=" hover:text-secondary  text-[#000000] font-[600]"
            >
              المقاولات والديكور
            </a>
            <IoIosArrowDown />
          </li>
          <li className="text-xl">
            <a
              href="#"
              className="  hover:text-secondary text-[#000000] font-[600]"
            >
              المقالات
            </a>
          </li>
          <li className="text-xl">
            <a
              href="#"
              className="  hover:text-secondary text-[#000000] font-[600]"
            >
              تواصل معنا
            </a>
          </li>
        </ul>
        
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {(["right"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <TbListDetails color="#5E5E5E" size={40} />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
