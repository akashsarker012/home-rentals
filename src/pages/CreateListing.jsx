import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Input,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { categories, facilities, types } from "../style/Data";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
const blue = {
  100: "#DAECFF",
  200: "#b6daff",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 80%;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 20px 12px;
  border-radius: 8px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: transparent;
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };

  &:focus-visible  {
    border-color: ${blue[400]};
  }
  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function CreateListing() {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  console.log(type);
  const [amenities, setAmenities] = useState([]);

  // const [formLocation]
  const [formLocation, setFormLocation] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: "",
  });

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
  };

  // console.log(formLocation, 'formLocation');
//   const [formLocation]
  // const [guestCount]
  const handleImage = (event) => {
    console.log(event.target.files);
  };
  return (
    <>
      <Navbar />
      <Container sx={{ py: 5 }} maxWidth="xl">
        <Typography
          variant="h4"
          py={3}
          fontSize={"2rem"}
          fontWeight="bold"
          component="h2"
        >
          Publish Your Place
        </Typography>
        <form action="">
          <Typography
            variant="h2"
            py={3}
            fontSize={"2rem"}
            fontWeight="bold"
            component="h2"
          >
            Step 1: Tell us about your place
          </Typography>
          <hr />
          <Typography
            variant="h3"
            py={3}
            fontSize={"1.5rem"}
            fontWeight="bold"
            component="h2"
          >
            Which of these categories best describes your place?
          </Typography>

          <Box sx={{ width: "100%", py: 3, backgroundColor: "0.0.0.5" }}>
            <Grid container spacing={2}>
              {categories?.map((item, index) => (
                <Grid item xs={6} md={3} sm={6} key={index}>
                  <Item
                    sx={
                      category === item.label
                        ? { backgroundColor: "primary.main", color: "white" }
                        : ""
                    }
                    onClick={() => setCategory(item.label)}
                    key={index}
                  >
                    <div>{item.icon}</div>
                    <p>{item.label}</p>
                  </Item>
                </Grid>
              ))}
            </Grid>
          </Box>
          <div>
            <Typography
              variant="h3"
              py={3}
              fontSize={"2rem"}
              fontWeight="bold"
              component="h2"
            >
              What type of place will guests have?
            </Typography>

            <div>
              <Box sx={{ width: "100%", py: 3 }}>
                <Grid container spacing={2}>
                  {types?.map((item, index) => (
                    <Grid item xs={8} key={index}>
                      <Item
                        sx={{
                          ...(type === item.name
                            ? {
                                backgroundColor: "primary.main",
                                color: "white",
                              }
                            : {}),
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        onClick={() => setType(item.name)}
                        key={index}
                      >
                        <div>
                          <Typography
                            variant="h4"
                            fontSize={"1rem"}
                            fontWeight={"bold"}
                            textAlign={"left"}
                          >
                            {item.name}
                          </Typography>
                          <Typography
                            variant="h4"
                            fontSize={"1rem"}
                            fontWeight={"semibold"}
                          >
                            {item.description}
                          </Typography>
                        </div>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          color="inherit"
                        >
                          {item.icon}
                        </IconButton>
                      </Item>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </div>
            <div>
              <Typography
                variant="h6"
                py={2}
                fontSize="1.4rem"
                fontWeight="bold"
                component="h6"
              >
                Where's your place located?
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    py={1}
                    fullWidth
                    fontSize="1.1rem"
                    fontWeight="bold"
                  >
                    Street Address
                  </Typography>
                  <TextField
                    style={{ width: "80%" }}
                    fullWidth
                    name="streetAddress"
                    value={formLocation.streetAddress}
                    onChange={ handleChangeLocation}
                    label="Street Address"
                    id="fullWidth"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    py={1}
                    fullWidth
                    fontSize="1.1rem"
                    fontWeight="bold"
                  >
                    Apartment, Suite, etc. (if applicable)
                  </Typography>
                  <TextField
                    style={{ width: "60%" }}
                    name="aptSuite"
                    onChange={ handleChangeLocation}
                    value={formLocation.aptSuite}
                    label="Apt, Suite, etc. (if applicable)"
                    id="fullWidth"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography py={1} fontSize="1.1rem" fontWeight="bold">
                    City
                  </Typography>
                  <TextField
                    name="city"
                    onChange={ handleChangeLocation}
                    value={formLocation.city}
                    style={{ width: "60%" }}
                    label="City"
                    id="fullWidth"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography py={1} fontSize="1.1rem" fontWeight="bold">
                    Province
                  </Typography>
                  <TextField
                    name="province"
                    onChange={ handleChangeLocation}
                    value={formLocation.province}
                    style={{ width: "60%" }}
                    label="Province"
                    id="fullWidth"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography py={1} fontSize="1.1rem" fontWeight="bold">
                    Country
                  </Typography>
                  <TextField
                    name="country"
                    onChange={ handleChangeLocation}
                    value={formLocation.country}
                    style={{ width: "60%" }}
                    label="Country"
                    id="fullWidth"
                  />
                </Grid>
              </Grid>
            </div>

            <div>
              <Typography
                variant="h6"
                py={2}
                fontSize="1.2rem"
                fontWeight="bold"
                component="h6"
              >
                Where's your place located?
              </Typography>

              <Box sx={{ width: "100%", py: 3, backgroundColor: "0.0.0.5" }}>
                <Grid md={10} container spacing={2}>
                  <Grid item xs={6} md={6} sm={6}>
                    <Item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Guests</p>
                      <>
                        <RemoveCircleOutlineIcon
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>1</p>
                        <AddCircleOutlineIcon
                          // onClick={() => {
                          //   setGuestCount(guestCount + 1);
                          // }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                      </>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6}>
                    <Item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Bedrooms</p>
                      <>
                        <RemoveCircleOutlineIcon
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>1</p>
                        <AddCircleOutlineIcon
                          // onClick={() => {
                          //   setGuestCount(guestCount + 1);
                          // }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                      </>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6}>
                    <Item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Beds</p>
                      <>
                        <RemoveCircleOutlineIcon
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>1</p>
                        <AddCircleOutlineIcon
                          // onClick={() => {
                          //   setGuestCount(guestCount + 1);
                          // }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                      </>
                    </Item>
                  </Grid>
                  <Grid item xs={6} md={6} sm={6}>
                    <Item
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <p>Bathrooms</p>
                      <>
                        <RemoveCircleOutlineIcon
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>1</p>
                        <AddCircleOutlineIcon
                          // onClick={() => {
                          //   setGuestCount(guestCount + 1);
                          // }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                      </>
                    </Item>
                  </Grid>
                </Grid>
              </Box>
            </div>
          </div>

          {/* part 2 */}

          <div
            style={{
              width: "100%",
              backdropFilter: "blur(5px)",
              backgroundColor: "#00000009",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <Typography
              variant="h3"
              py={3}
              fontSize={"1.5rem"}
              fontWeight="bold"
              component="h2"
            >
              Step 2: Make your place stand out
            </Typography>

            <Box sx={{ width: "100%", py: 3, backgroundColor: "0.0.0.5" }}>
              <Grid container spacing={2}>
                {facilities?.map((item, index) => (
                  <Grid item xs={6} md={3} sm={6} key={index}>
                    <Item key={index}>
                      <IconButton
                        size="medium"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                      >
                        {item.icon}
                      </IconButton>
                      <p>{item.name}</p>
                    </Item>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <>
              <Typography
                variant="h3"
                py={3}
                fontSize={"1.5rem"}
                fontWeight="bold"
                component="h2"
              >
                Add some photos of your place
              </Typography>

              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                onChange={handleImage}
                startIcon={<CloudUploadIcon />}
              >
                <input hidden type="file" multiple value="" />
                Upload file
                <VisuallyHiddenInput type="file" />
              </Button>
            </>
            <>
              <Typography
                variant="h3"
                py={3}
                fontSize={"1.2rem"}
                fontWeight="bold"
                component="h2"
              >
                What make your place attractive and exciting?
              </Typography>

              <div>
                <>
                  <Typography
                    py={1}
                    fullWidth
                    fontSize="1.1rem"
                    fontWeight="bold"
                  >
                    Title
                  </Typography>
                  <TextField
                    style={{ width: "80%" }}
                    fullWidth
                    label="Title"
                    id="fullWidth"
                  />
                </>
                <>
                  <Typography
                    py={1}
                    fullWidth
                    fontSize="1.1rem"
                    fontWeight="bold"
                  >
                    Description
                  </Typography>
                  <Textarea
                    maxRows={4}
                    aria-label="maximum height"
                    defaultValue=""
                    placeholder="Write a description"
                  />
                </>

                <>
                  <Typography
                    py={1}
                    fullWidth
                    fontSize="1.1rem"
                    fontWeight="bold"
                  >
                    Highlight
                  </Typography>
                  <TextField
                    style={{ width: "80%" }}
                    fullWidth
                    label="Highlight"
                  />
                </>

                <>
                  <Typography
                    py={1}
                    fullWidth
                    fontSize="1.1rem"
                    fontWeight="bold"
                  >
                    Highlight details
                  </Typography>
                  <TextField
                    style={{ width: "80%" }}
                    fullWidth
                    label="Highlight details"
                  />
                </>

                <>
                  <Typography
                    py={1}
                    fullWidth
                    fontSize="1.1rem"
                    fontWeight="bold"
                  >
                    Now, set your PRICE
                  </Typography>
                  <AttachMoneyIcon />
                  <input
                    type="number"
                    style={{
                      padding: "10px",
                      borderRadius: "5px",
                      backgroundColor: "transparent",
                      border: "1px solid #00000040",
                      outline: "none",
                    }}
                  />
                </>
              </div>
            </>
          </div>
        </form>
      </Container>
    </>
  );
}
