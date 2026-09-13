export const authHeader = (token?: string) => {
    return {
        "Content-Type":"application/json",
        Authorization:`Bearer ${token}`
    }
};
 