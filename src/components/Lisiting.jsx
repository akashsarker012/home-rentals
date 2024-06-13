import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import { Container, IconButton, Typography } from "@mui/material";
import { categories } from "./../style/Data";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Lisiting() {
  return (
    // <Container maxWidth="xl">
    //   <h1>This is listing</h1>
    //   <Box sx={{ display: 'flex' ,  justifyContent: 'space-between', flexWrap: 'wrap',alignItems: 'center', gap: 5 }}>

    //   {
    //     categories.map((category, index) => {
    //       return (
    //         <Box sx={{ display: 'flex' , flexDirection: 'column',  }} key={index}>
    //              <IconButton

    //           size="midium"
    //           aria-label="account of current user"
    //           aria-controls="menu-appbar"
    //           aria-haspopup="true"
    //           color="inherit">
    //             {category.icon}
    //           {/* <MenuIcon /> */}
    //         </IconButton>
    //         <Typography

    //         variant="p" >
    //        {category.label}
    //       </Typography>
    //         </Box >
    //       )
    //     })
    //   }
    //   </Box>
    // </Container>
      <Box sx={{backgroundColor: "#132d2d08", py: 5}}>
    <Container>
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 2,
          }}
           >
          {categories.map((category, index) => {
            return (
              <Grid key={index}>
                <Item sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
                  <IconButton
                    size="small"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit" >
                    {category.icon}
                  </IconButton>
                  <Typography variant="p">{category.label}</Typography>
                </Item>
              </Grid>
            );
          })}
        </Grid>
    </Container>
      </Box>
  );
}
