import { apiRequest } from "./utils";

export const queries = {
    waitlist: {
        useJoinWailist: {
            query: async ({ email }: { email: string }) => await apiRequest({
                path: "/waitlist/join",
                method: "POST",
                body: {
                    email
                }
            }),
            key: "useJoinWailist",
        },
    }
}