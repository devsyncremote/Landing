import { apiRequest } from "./utils";

export const queries = {
    waitlist: {
        useJoinWailist: {
            query: async ({ email, testName, referral }: { email: string, testName: string, referral: string | undefined }) => await apiRequest({
                path: "/waitlist/join",
                method: "POST",
                body: {
                    email,
                    sourceTest: testName,
                    referral
                }
            }),
            key: "useJoinWailist",
        },
        useGetReferralLink: {
            query: async () => await apiRequest({
                path: "/waitlist/referral-link",
                method: "GET"
            }),
            key: "useGetReferralLink",
        }
    }
}