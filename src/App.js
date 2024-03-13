import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

function App() {
  const items = [
    { id: 1, name: "Item 1", price: 10.99 },
    { id: 2, name: "Item 2", price: 12.99 },
    { id: 3, name: "Item 3", price: 8.99 },
    { id: 4, name: "Item 4", price: 15.99 },
    { id: 5, name: "Item 5", price: 9.99 },
    { id: 6, name: "Item 6", price: 11.99 },
  ];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#f44336" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Radio Tech
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Products</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
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
                  src="https://via.placeholder.com/200x200"
                  alt="Placeholder"
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${item.price.toFixed(2)}
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
      <footer>
        <BottomNavigation
          sx={{ width: "100%", backgroundColor: "#4a4545", color: "#fff" }}
          showLabels
        >
          <BottomNavigationAction
            icon={<FacebookIcon sx={{ color: "#fff" }} />}
          />
          <BottomNavigationAction
            icon={<TwitterIcon sx={{ color: "#fff" }} />}
          />
          <BottomNavigationAction
            icon={<InstagramIcon sx={{ color: "#fff" }} />}
          />
        </BottomNavigation>
      </footer>
    </div>
  );
}

export default App;
