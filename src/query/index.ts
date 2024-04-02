import { useMutation, useQuery } from "react-query";
import { useCallback } from "react";

import { queries } from "./queries";


export const useJoinWailist = () => {
    const { mutate, error, data, isLoading } = useMutation<any, any, any>(
        queries.waitlist.useJoinWailist.key,
        queries.waitlist.useJoinWailist.query
    );
    const mutationWaitlist = useCallback(
        (email: string) => {
            mutate({ email });
        },
        [mutate]
    );

    return { mutationWaitlist, data, error, isLoading };
}
