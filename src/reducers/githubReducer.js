const initialState = {
  currentPosition: 1,
  initialFirstCursor: "",
  pageInfo: {},
  repositoryCount: "",
  topics: []
};
export const github = (state = { ...initialState }, action) => {
  switch (action.type) {
    case "SET_INITIAL_FIRST_CURSOR":
      return { ...state, initialFirstCursor: action.payload };
    case "GET_GITHUB_TOPICS_SUCCESS":
      const { count, pageInfo, topics, repositoryCount } = action.payload;
      return {
        ...state,
        currentPosition: state.currentPosition + count,
        topics,
        pageInfo,
        repositoryCount
      };
    default:
      return state;
  }
};
