import { BASE_API_URL } from "@/common/constants";
import axios from "axios";
import { authHeader } from "./base.service";

class PurchaseService {
  async getAllPurchase() {
    return axios({
      method: "get",
      url: BASE_API_URL + "/purchase",
      headers: authHeader(),
    });
  }
}

export default new PurchaseService();
