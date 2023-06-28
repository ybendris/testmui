import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const HomePage = () => {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          test1
        </Typography>
        <Typography variant="h6" gutterBottom>
          test2
          <Link to="/" >
            Cancel
            </Link>
        </Typography>
      </>
    );
  };