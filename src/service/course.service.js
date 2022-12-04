import { BASE_API_URL } from "@/common/constants";
import axios from "axios";
import { authHeader } from "./base.service";

class CourseService {
  async getAllCourse() {
    return axios({
      method: "get",
      url: BASE_API_URL + "/course",
      headers: authHeader(),
    });
  }

  async deleteCourse(id) {
    return axios({
      method: "delete",
      url: BASE_API_URL + "/course/" + id,
      headers: authHeader(),
    });
  }
}

export default new CourseService();
