import axios from "axios";

/**
 * API url
 */
const myApi = "http://82.157.174.30:3000";

/**
 * Get movie (single)
 */
export function getRandomMovie() {
  return new Promise((resolve, reject) => {
    axios
      .get(`${myApi}/random_movie`)
      .then((response) => {
        console.log(response);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Get question (single)
 */
export function getQuestion(index) {
  return new Promise((resolve, reject) => {
    axios
      .get(`${myApi}/question`, {
        params: {
          index,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * Get movie recommended (single)
 */
export function getRecommend(params) {
  console.log(params);
  return new Promise((resolve, reject) => {
    axios
      .get(`${myApi}/recommend`, {
        params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
