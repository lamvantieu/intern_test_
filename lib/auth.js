import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
import { JwtPayload } from "@/types/auth";

export const getDecodedToken = () => {
    const token = Cookies.get("token");
    if (!token) return null;
    return jwtDecode < JwtPayload > (token);
};
