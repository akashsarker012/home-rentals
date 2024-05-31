import { Typography } from "@mui/material";
import { categories } from "../style/Data";
// import "../styles/Categories.scss"
import { Link } from "react-router-dom";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Categories = () => {
  return (
    <div>
      <Typography
        variant="h2"
        py={3}
        align="center"
        fontSize={"2rem"}
        fontWeight="bold"
        component="h2"
      >
        Explore Top Categories
      </Typography>

      <Typography
        align="center"
        width={"80%"}
        fontSize={"1rem"}
        mx={"auto"}
        component="h2"
      >
        Explore our wide range of vacation rentals that cater to all types of
        travelers. Immerse yourself in the local culture, enjoy the comforts of
        home, and create unforgettable memories in your dream destination.
      </Typography>

      <div className="categories_list">
        <Box  sx={{ flexGrow: 1 }}>
          <Grid  
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {categories?.slice(1, 7).map((category, index) => (
              <Grid  item xs={2} sm={4} md={2} key={index}>
                <Link href="#" underline="none">
                  <Item sx={{position: 'relative', padding: 0,}} >
                    <img src={category.img} alt={category.label} />
                    <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', }}>
                      <>{category.icon}</>
                      <>{category.label}</>
                    </div>
                  </Item>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* {categories?.slice(1, 7).map((category, index) => (
        //  console.log(category)
        <Link to={''} >
          <div key={index}>
            <img src={category.img} alt={category.label}/>
            <div>
              <>{category.icon}</>
              <>{category.label}</>
            </div>
          </div>

        </Link>

        ))} */}

        {/* {categories?.slice(1, 7).map((category, index) => (
          <Link to={`/properties/category/${category.label}`}>
            <div className="category" key={index}>
              <img src={category.img} alt={category.label} />
              <div className="overlay"></div>
              <div className="category_text">
                <div className="category_text_icon">{category.icon}</div>
                <p>{category.label}</p>
              </div>
            </div>
          </Link>
        ))} */}
      </div>
    </div>
  );
};

export default Categories;
