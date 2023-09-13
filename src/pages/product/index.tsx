import { TextField } from "@mui/material";
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItem from "../../components/product/ProductItem";
import { useProduct, useSearchProduct } from "../../hook/useProduct";
import { Params } from "../../types/base";

export default function ProductPage() {
  const [params, setParams] = useState<Partial<Params>>({
    limit: 20,
  });
  const [searchParams, setSearchParams] = useState<Partial<Params>>({
    limit: 0,
  });
  const [searchValue, setSearchValue] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const [timeoutName, setTimeoutName] = useState<any>();

  const [hashNext, setHasNext] = useState(true);
  const { data } = useProduct({
    params,
  });
  const { data: searchList } = useSearchProduct({
    params: searchParams,
  });
  const products =
    searchValue === "" ? data?.data?.products : searchList?.data?.products;

  const fetchData = () => {
    if (searchValue != "") {
      setSearchParams({ q: searchValue });
    } else if (params?.limit! + 20 <= data?.data?.total!) {
      setParams({ limit: params?.limit! + 20 });
    } else {
      setHasNext(false);
    }
  };

  function handleSearchValue(searchString: string) {
    setSearchValue(searchString);
    setSearchParams({ q: searchString });
  }

  const handleFilterValue = (filterValue: string) => {
    setSearchValue(filterValue);

    if (timeoutName) {
      clearTimeout(timeoutName);
    }

    const newTimeoutname = setTimeout(() => {
      handleSearchValue(filterValue);
    }, 300);

    setTimeoutName(newTimeoutname);
  };

  return (
    <div>
      <h1>Product List</h1>
      <TextField
        id="outlined-basic"
        label="Search Product"
        variant="outlined"
        placeholder="Search products..."
        value={searchValue}
        onChange={(e) => handleFilterValue(e.target.value)}
      />
      <div>
        <InfiniteScroll
          dataLength={products?.length || 0}
          next={fetchData}
          hasMore={hashNext}
          scrollThreshold={1}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div>
            {products?.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
