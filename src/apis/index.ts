import CLIENT from "../client";
import { API_ENDPOINTS } from "../constants/apiEndpoints";
type payload = {
  title: string;
  body: string;
  userId: number;
};
const GetPostbyID = (postID: string | number) =>
  CLIENT.get(`${API_ENDPOINTS.POST_API}${postID.toString()}`);

const GetAllPosts = () => CLIENT.get(`${API_ENDPOINTS.POST_API}`);

const DoCreatePost = (payload: payload) =>
  CLIENT.post(API_ENDPOINTS.POST_API, payload);

const api = { GetAllPosts, DoCreatePost, GetPostbyID };
export default api;
