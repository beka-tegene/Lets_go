import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import image from "../../Images/Variant15.jpg";
const News = () => {
  return (
    <Stack sx={{ px: { xs: "5%", md: "3%" }, p: 2 }} gap={2}>
      <Stack alignItems={"center"}>
        <Typography fontSize={"14px"} color={"#EF9B01"}>
          Let's Go News
        </Typography>
        <Typography fontSize={"40px"} fontWeight={"bold"} color={"#112D4E"}>
          Latest News
        </Typography>
      </Stack>
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        <Card sx={{ maxWidth: { xs: 210, md: 345 } }}>
          <CardMedia
            component="img"
            sx={{
              height: {
                xs: "140",
                md: "160",
              },
            }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: { xs: 210, md: 345 } }}>
          <CardMedia
            component="img"
            sx={{
              height: {
                xs: "140",
                md: "160",
              },
            }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: { xs: 210, md: 345 } }}>
          <CardMedia
            component="img"
            sx={{
              height: {
                xs: "140",
                md: "160",
              },
            }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: { xs: 210, md: 345 } }}>
          <CardMedia
            component="img"
            sx={{
              height: {
                xs: "140",
                md: "160",
              },
            }}
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Stack>
    </Stack>
  );
};

export default News;
