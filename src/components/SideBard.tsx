import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { TbListDetails } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 270 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ul className="flex justify-center flex-col px-6 lg:gap-8 gap-4 my-6">
          <li className="flex justify-between text-xl hover:bg-gray-200 px-5 py-3 rounded-full cursor-pointer">
            <a href="#" className="  text-secondary font-[600]">
              الرئيسية
            </a>
            <IoIosArrowBack />
          </li>
          <li className="flex justify-between text-xl hover:bg-gray-200 px-5 py-3 rounded-full cursor-pointer">
            <a href="#" className="  text-[#000000] font-[600]">
              المكاتب الهندسية
            </a>
            <IoIosArrowBack />
          </li>
          <li className="flex justify-between text-xl hover:bg-gray-200 px-5 py-3 rounded-full cursor-pointer">
            <a href="#" className="  text-[#000000] font-[600]">
              المقاولات والديكور
            </a>
            <IoIosArrowBack />
          </li>
          <li className="flex justify-between text-xl hover:bg-gray-200 px-5 py-3 rounded-full cursor-pointer">
            <a href="#" className="  text-[#000000] font-[600]">
              المقالات
            </a>
            <IoIosArrowBack />
          </li>
          <li className="flex justify-between text-xl hover:bg-gray-200 px-5 py-3 rounded-full cursor-pointer">
            <a href="#" className="  text-[#000000] font-[600]">
              تواصل معنا
            </a>
            <IoIosArrowBack />
          </li>
          <li className="flex justify-between text-xl hover:bg-gray-200 px-5 py-3 rounded-full cursor-pointer">
            <a href="#" className="  text-[#000000] font-[600]">
              إعرفني
            </a>
            <IoIosArrowBack />
          </li>
        </ul>
        <Divider />
        <div className="flex justify-center mt-5">
          <button className="min-w-[200px] bg-[#004267] text-white px-6 py-6 rounded-full font-[600]">
            احصل على عرض مجاناً
          </button>
        </div>
      </List>
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
