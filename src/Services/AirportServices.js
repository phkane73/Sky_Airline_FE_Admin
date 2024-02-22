import API from "./API";

export const getAllAirport = async () => {
  try {
    const response = await API.get("/api/public/airport/allairport");
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getInfoAirport = async (id) => {
  try {
    const response = await API.get("/api/public/airport/getinfoairport", {
      params: { id: id },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getPlaneList = async (id) => {
  try {
    const response = await API.get("/api/public/airport/getallplane", {
      params: { id: id },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addAirport = async (name) => {
  try {
    const response = await API.post("/api/public/airport/add", {
      airportName: name,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const addFlightTime = async (fromId, toId, estimateTime) => {
  try {
    const response = await API.post("/api/public/flighttime/add", {
      from: fromId,
      to: toId,
      estimateTime: estimateTime,
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getListAirportNoFlightTime = async (id) => {
  try {
    const response = await API.get(
      "/api/public/airport/listairportnoflighttime",
      { params: { id: id } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};


export const activeAirport = async (id) => {
  try {
    const response = await API.get(
      "/api/public/airport/active",
      { params: { id: id } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const deActiveAirport = async (id) => {
  try {
    const response = await API.get(
      "/api/public/airport/deactive",
      { params: { id: id } }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};