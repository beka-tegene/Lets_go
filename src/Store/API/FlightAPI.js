import axios from "axios";

export const searchFlights = async (data) => {
  axios.defaults.withCredentials = true;
  
  const response = await axios.get(
    `http://localhost:5000/api/v1/flightrapid/search-flights`,
    {
      params: data,
    }
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};


export const searchFlightsMultiStops = async (data) => {
  axios.defaults.withCredentials = true;
  
  const response = await axios.get(
    `http://localhost:5000/api/v1/flightrapid/search-flights-multi-stops`,
    {
      params: data,
    }
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};


export const getFlightDetails = async (data) => { 
  axios.defaults.withCredentials = true;

  const response = await axios.get(
    `http://localhost:5000/api/v1/flightrapid/get-flight-details`,
    {
      params: data,
    }
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};


export const getMinPrice= async (data) => {
  axios.defaults.withCredentials = true;
  
  const response = await axios.get(
    `http://localhost:5000/api/v1/flightrapid/getminprice`,
    {
      params: data,
    }
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};

export const getMinPriceMultiStops = async (data) => {
  axios.defaults.withCredentials = true;
  
  const response = await axios.get(
    `http://localhost:5000/api/v1/flightrapid/getminpricemultistops`,
    {
      params: data,
    }
  );

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch legal documents");
  }
};



export const getAllFlightDetails = async (data) => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(`/api/v1/flightrapid/getall-flight-details`);

  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Failed to fetch recipes");
  }
};
