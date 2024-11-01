import axios from "axios";

export const API_SERVER = "http://localhost:5247/";

export const login = async (email: string, password: string) => {
  try {
    const rs = await axios.post(`${API_SERVER}api/authentication/login`, {
      email,
      password,
    });
    return rs.data;
  } catch (error) {
    console.log(error);
  }
};

export const addKoi = async (value: any) => {
  console.log(value);
  try {
    const rs = await axios.post(`${API_SERVER}api/kois`, {
      pondId: value.pondId,
      physiqueId: value.physiqueld, // Required
      name: value.Name, // Required
      age: value.age, // Optional, defaults to an empty value
      length: value.length, // Required
      weight: value.weight, // Required
      gender: value.gender, // Optional, defaults to an empty value
      variety: value.variety, // Optional, defaults to an empty value
      date: value.inPondSince, // Optional, defaults to an empty value (format: "YYYY-MM-DD")
      price: value.purchasePrice, // Optional, defaults to an empty value
      imageUrl: value.image,
    });
    console.log(rs.data);
    return rs.data;
  } catch (error) {
    console.log(error);
  }
};

export const addPond = async (value: any) => {
  console.log(value);
  try {
    const rs = await axios.post(`${API_SERVER}api/ponds`, {
      pondId: 0,
      userId: 3,
      name: value.name,
      depth: value.depth,
      volume: value.volume,
      pumpCapacity: value.pumpCapacity,
      image: value.image,
    });
    console.log(rs.data);
    return rs.data;
  } catch (error) {
    console.log(error);
  }
};
