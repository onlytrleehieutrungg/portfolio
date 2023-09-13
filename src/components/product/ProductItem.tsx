import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Product } from "../../types/product";

interface ProductItemProps {
  product: Product;
}
export default function ProductItem({ product }: ProductItemProps) {
  return (
    <Card
      sx={{
        display: "flex",
        py: 2,
        my: 2,
        maxWidth: 300,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{}}>
          <Typography component="div" variant="h5">
            {product?.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {product?.price}$
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={`${product?.images[0]}`}
        alt="Live from space album cover"
      />
    </Card>
  );
}
