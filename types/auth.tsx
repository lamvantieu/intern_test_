export interface LoginPayload {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    user: {
        id: number;
        name: string;
    };
}

export interface JwtPayload {
    exp: number;
    userId: number;
}
