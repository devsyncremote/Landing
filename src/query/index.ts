import { useMutation, useQuery } from "react-query";
import { useCallback } from "react";

import { queries } from "./queries";


export const useJoinWailist = () => {
    const { mutate, error, data, isLoading } = useMutation<any, any, any>(
        queries.waitlist.useJoinWailist.key,
        queries.waitlist.useJoinWailist.query
    );
    const mutationWaitlist = useCallback(
        (email: string, testName: string, referral: string | undefined) => {
            mutate({ email, testName, referral });
        },
        [mutate]
    );

    return { mutationWaitlist, data, error, isLoading };
}

export const useGetReferralLink = () => {
    const { data, error, isLoading } = useQuery(
        queries.waitlist.useGetReferralLink.key,
        queries.waitlist.useGetReferralLink.query
    );

    return { data, error, isLoading };
};