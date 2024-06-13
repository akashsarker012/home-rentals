import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { categories, facilities, types } from "../style/Data";
import {
  AttachMoney as AttachMoneyIcon,
  AddCircleOutline as AddCircleOutlineIcon,
  RemoveCircleOutline as RemoveCircleOutlineIcon,
  CloudUpload as CloudUploadIcon,
} from "@mui/icons-material";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import Navbar from './../components/Navbar';

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
  border: 1px solid ${
    theme.palette.mode === "dark" ? grey[700] : grey[400]
  };
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
  const [formLocation, setFormLocation] = useState({
    streetAddress: "",
    aptSuite: "",
    city: "",
    province: "",
    country: "",
  });

  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [guests, setGuests] = useState(1);
  const [amenities, setAmenities] = useState([]);
  const [formDescription, setFormDescription] = useState({
    title: "",
    description: "",
    highlight: "",
    highlightDesc: "",
    price: "",
  });
  const creatorId = useSelector((state) => state.user._id);

  const handleChangeLocation = (e) => {
    const { name, value } = e.target;
    setFormLocation({
      ...formLocation,
      [name]: value,
    });
  };

  const handleSelectAmenities = (facility) => {
    if (amenities.includes(facility)) {
      setAmenities((prevAmenities) =>
        prevAmenities.filter((option) => option !== facility)
      );
    } else {
      setAmenities((prev) => [...prev, facility]);
    }
  };

  const handleImage = (event) => {
    console.log(event.target.files);
  };

  const handleChangeDescription = (e) => {
    const { name, value } = e.target;
    setFormDescription({
      ...formDescription,
      [name]: value,
    });
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
  
      const listingForm = new FormData();
      listingForm.append("creator", creatorId);
      listingForm.append("category", category);
      listingForm.append("type", type);
      listingForm.append("streetAddress", formLocation.streetAddress);
      listingForm.append("aptSuite", formLocation.aptSuite);
      listingForm.append("city", formLocation.city);
      listingForm.append("province", formLocation.province);
      listingForm.append("country", formLocation.country);
      listingForm.append("guestCount", guests);
      listingForm.append("bedroomCount", bedrooms);
      listingForm.append("bedCount", beds);
      listingForm.append("bathroomCount", bathrooms);
      listingForm.append("amenities", amenities);
      listingForm.append("title", formDescription.title);
      listingForm.append("description", formDescription.description);
      listingForm.append("highlight", formDescription.highlight);
      listingForm.append("highlightDesc", formDescription.highlightDesc); 
      listingForm.append("price", formDescription.price);

  
      const response = await fetch("http://localhost:8000/api/v1/listing/create", {
        method: "POST",
        body: listingForm,
      });

      console.log("Response:", response);
  
    } catch (err) {
      console.log("Publish Listing failed", err);
    }
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
        <form  >
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
                    onChange={handleChangeLocation}
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
                    onChange={handleChangeLocation}
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
                    onChange={handleChangeLocation}
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
                    onChange={handleChangeLocation}
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
                    onChange={handleChangeLocation}
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
                      }}>
                      <p>Guests</p>
                      <>
                        <RemoveCircleOutlineIcon
                          onClick={() => { guests > 1 && setGuests(guests - 1) }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>{guests}</p>
                        <AddCircleOutlineIcon
                          onClick={() => { setGuests(guests + 1); }}
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
                          onClick={() => { bedrooms > 1 && setBedrooms(bedrooms - 1) }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>{bedrooms}</p>
                        <AddCircleOutlineIcon
                          onClick={() => {
                            setBedrooms(bedrooms + 1);
                          }}
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
                          onClick={() => { beds > 1 && setBeds(beds - 1) }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>{beds}</p>
                        <AddCircleOutlineIcon
                          onClick={() => {
                            setBeds(beds + 1);
                          }}

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
                          onClick={() => { bathrooms > 1 && setBathrooms(bathrooms - 1) }}
                          sx={{
                            fontSize: "25px",
                            cursor: "pointer",
                            "&:hover": { color: "#FF385C" },
                          }}
                        />
                        <p>{bathrooms}</p>
                        <AddCircleOutlineIcon
                          onClick={() => {
                            setBathrooms(bathrooms + 1);
                          }}
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
            }}>
            <Typography
              variant="h3"
              py={3}
              fontSize={"1.5rem"}
              fontWeight="bold"
              component="h2">
              Step 2: Make your place stand out
            </Typography>

            <Box sx={{ width: "100%", py: 3, backgroundColor: "0.0.0.5" }}>
              <Grid container spacing={2}>
                {facilities?.map((item, index) => (
                  <Grid  item xs={6} md={3} sm={6} key={index}>
                  <Item sx={ amenities.includes(item.name) ? { backgroundColor: "primary.main", color: "white" } : ""}
                      key={index}
                      onClick={() => handleSelectAmenities(item.name)}>

                      <IconButton
                        size="medium"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit">
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
                startIcon={<CloudUploadIcon />}>
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
                    name="title"
                    onChange={handleChangeDescription}
                    value={formDescription.title}
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
                  onChange={handleChangeDescription}
                  value={formDescription.description}
                  name="description"
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
                    onChange={handleChangeDescription}
                    value={formDescription.highlight}
                    name="highlight"
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
                  onChange={handleChangeDescription}
                  value={formDescription.highlightDesc
                  }
                    name="highlightDesc"
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
                    name="price"
                    onChange={handleChangeDescription}
                    value={formDescription.price}
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
            <Button sx={{ mt: 3 }} onClick={handleSubmit}  type="submit" variant="contained">Outlined</Button>
          
          </div>
        </form>
      </Container>
    </>
  );
}
