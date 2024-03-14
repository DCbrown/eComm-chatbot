import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const StoreFront = () => {
  const items = [
    {
      id: 1,
      name: "Amazon Echo Dot (5th Gen)",
      price: 49.99,
      imgLink: "https://cv.browncdonovan.com/assets/img/ecom/alex.jpg",
    },
    {
      id: 2,
      name: "JavaScript from Beginner to Professional",
      price: 24.99,
      imgLink: "https://cv.browncdonovan.com/assets/img/ecom/book.jpg",
    },
    {
      id: 3,
      name: "M17R5 Gaming Laptop - 17.3-inch",
      price: "1,879.97",
      imgLink: "https://cv.browncdonovan.com/assets/img/ecom/computer.jpg",
    },
    {
      id: 4,
      name: "TAGRY Bluetooth Headphones True Wireless Earbuds",
      price: 29.99,
      imgLink: "https://cv.browncdonovan.com/assets/img/ecom/earphone.jpg",
    },
    {
      id: 5,
      name: "Logitech MK270 Wireless Keyboard And Mouse Combo",
      price: 27.99,
      imgLink: "https://cv.browncdonovan.com/assets/img/ecom/keyboard.jpg",
    },
    {
      id: 6,
      name: "TAKAGI [MFi Certified iPhone Charger, Lightning Cable 3PACK 6FT",
      price: 8.99,
      imgLink: "https://cv.browncdonovan.com/assets/img/ecom/wire.jpg",
    },
  ];

  return (
    <div>
      <Container sx={{ padding: "20px 0" }}>
        <Grid container spacing={2}>
          {items.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4} lg={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={item.imgLink}
                  alt="Placeholder"
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "0",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                  }}
                >
                  Add to Cart
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default StoreFront;
