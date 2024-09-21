
import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <div dir="rtl">
      <h3 className="text-lg font-bold mb-2">المدينة</h3>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <Select
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            labelId="demo-custom-select-label"
            id="demo-custom-select"
            value={age}
            onChange={handleChange}
            sx={{
              textAlign: "right", // Align text to the right
              "& .MuiSelect-icon": {
                right: "unset", // Move the dropdown icon to the left
                left: 10,
              },
              fontSize: "16px",
              fontWeight: "800",
              paddingLeft: "10px",
            }}
          >
            <MenuItem value="" sx={{ textAlign: "right" }}>
              تحديد المدينة
            </MenuItem>
            <MenuItem value={10} sx={{ textAlign: "right" }}>
              جدة
            </MenuItem>
            <MenuItem value={20} sx={{ textAlign: "right" }}>
              الرياض
            </MenuItem>
            <MenuItem value={30} sx={{ textAlign: "right" }}>
              مكة
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
