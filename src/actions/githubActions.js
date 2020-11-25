import axios from "axios";
const GITHUB_KEY = process.env.REACT_APP_GITHUB_API_TOKEN;
const GITHUB_ENDPOINT = process.env.REACT_APP_GITHUB_API_GRAPHQL_ENDPOINT;

export const getRepoTopics = (name, owner) => async (dispatch) => {
  const query = `{
    repository(owner: "${owner}", name: "${name}") {
    repositoryTopics(first: 15) {
      edges {
        node {
          topic {
            name
          }
        }
      }
    }
  }
  }`;
  try {
    dispatch({ type: "GET_REPO_TOPICS_START" });
    const { data } = await axios({
      headers: {
        Authorization: `Bearer ${GITHUB_KEY}`,
        "Content-Type": "application/json"
      },
      url: GITHUB_ENDPOINT,
      method: "post",
      data: {
        query
      }
    });
    console.log("DATA: ", data);
    if (data.errors && data.errors.length) {
      throw new Error(data.errors[0].message);
    }

    return Promise.resolve(data);
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_REPO_TOPICS_FAIL" });
    return Promise.reject(error);
  }
};

export const getGithubTopics = () => async (dispatch) => {
  const query = `{
    search(query: "topic:react", type: REPOSITORY, first: 10) {
      pageInfo{
        hasNextPage
        startCursor
        endCursor
      }
      repositoryCount,
      edges {
        cursor
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }`;

  try {
    dispatch({ type: "GET_GITHUB_TOPICS_START" });
    const { data } = await axios({
      headers: {
        Authorization: `Bearer ${GITHUB_KEY}`,
        "Content-Type": "application/json"
      },
      url: GITHUB_ENDPOINT,
      method: "post",
      data: {
        query
      }
    });
    console.log("DATA: ", data);
    if (data.errors && data.errors.length) {
      throw new Error(data.errors[0].message);
    }

    dispatch({
      type: "SET_INITIAL_FIRST_CURSOR",
      payload: data.data.search.edges[0].cursor
    });

    const payload = {
      count: 0,
      pageInfo: data.data.search.pageInfo,
      topics: data.data.search.edges,
      repositoryCount: data.data.search.repositoryCount
    };
    dispatch({
      type: "GET_GITHUB_TOPICS_SUCCESS",
      payload
    });
    return Promise.resolve();
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_GITHUB_TOPICS_FAIL" });
    return Promise.reject(error);
  }
};

export const getNextGithubTopics = (cursor) => async (dispatch) => {
  const query = `{
    search(query: "topic:react", type: REPOSITORY, first: 10, after: "${cursor}" ) {
      pageInfo{
        hasNextPage
        startCursor
        endCursor
      }
      repositoryCount,
      edges {
        cursor
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }`;

  try {
    dispatch({ type: "GET_GITHUB_TOPICS_START" });
    const { data } = await axios({
      headers: {
        Authorization: `Bearer ${GITHUB_KEY}`,
        "Content-Type": "application/json"
      },
      url: GITHUB_ENDPOINT,
      method: "post",
      data: {
        query
      }
    });
    console.log("DATA: ", data);
    if (data.errors && data.errors.length) {
      throw new Error(data.errors[0].message);
    }

    const payload = {
      count: 10,
      pageInfo: data.data.search.pageInfo,
      topics: data.data.search.edges,
      repositoryCount: data.data.search.repositoryCount
    };
    dispatch({
      type: "GET_GITHUB_TOPICS_SUCCESS",
      payload
    });
    return Promise.resolve();
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_GITHUB_TOPICS_FAIL" });
    return Promise.reject(error);
  }
};

export const getPreviousGithubTopics = (cursor) => async (dispatch) => {
  const query = `{
    search(query: "topic:react", type: REPOSITORY, last: 10, before: "${cursor}" ) {
      pageInfo{
        hasNextPage
        startCursor
        endCursor
      }
      repositoryCount,
      edges {
        cursor
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }`;

  try {
    dispatch({ type: "GET_GITHUB_TOPICS_START" });
    const { data } = await axios({
      headers: {
        Authorization: `Bearer ${GITHUB_KEY}`,
        "Content-Type": "application/json"
      },
      url: GITHUB_ENDPOINT,
      method: "post",
      data: {
        query
      }
    });
    console.log("DATA: ", data);
    if (data.errors && data.errors.length) {
      throw new Error(data.errors[0].message);
    }

    const payload = {
      count: -10,
      pageInfo: data.data.search.pageInfo,
      topics: data.data.search.edges,
      repositoryCount: data.data.search.repositoryCount
    };
    dispatch({
      type: "GET_GITHUB_TOPICS_SUCCESS",
      payload
    });
    return Promise.resolve();
  } catch (error) {
    console.warn(error);
    dispatch({ type: "GET_GITHUB_TOPICS_FAIL" });
    return Promise.reject(error);
  }
};
