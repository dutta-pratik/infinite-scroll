import axios from "axios";

const fetchUserData = async ({ page }) => {
  try {
    const respData = await axios.get(
      `https://randomuser.me/api/?page=${page}&results=20`
    );
    const userData = respData.data.results.map((user) => ({
      name: user.name,
      image: user.picture.thumbnail,
    }));
    return userData;
  } catch (error) {
    throw error();
  }
};

export default fetchUserData;
