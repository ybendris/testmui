import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const AboutPage = () => {
    return (
      <>
        <Typography variant="h5" gutterBottom>
          About Page
        </Typography>
        <Typography variant="h6" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <Link to="/test2" >
            Cancel
        </Link>
        </Typography>
      </>
    );
  };