import React, { useState, useEffect } from "react";
import Select from "../Select/Select";

const GetCountriesList = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect((url = "https://api.covid19api.com/countries") => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    console.log("->", { items });

    return <div>Ups!!! {error.message}</div>;
  } else if (!isLoaded) {
    return <div> Loading...</div>;
  } else {
    return (
      <Select>
        {items.map((item, index) => {
          return (
            <option key={item.Slug} value={item.Slug}>
              {index}. {item.Country}
            </option>
          );
        })}
      </Select>
    );
  }
};
export default GetCountriesList;
