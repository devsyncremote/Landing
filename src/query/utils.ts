export const API_URL = 'https://dev.api.syncremote.co/api/v1'

type HeadersInit_ = Headers | string[][] | { [key: string]: string };
type BodyInit_ =
    | Blob
    | Int8Array
    | Int16Array
    | Int32Array
    | Uint8Array
    | Uint16Array
    | Uint32Array
    | Uint8ClampedArray
    | Float32Array
    | Float64Array
    | DataView
    | ArrayBuffer
    | FormData
    | string
    | null
    | Object;

interface IApiRequest {
    path: string;
    method?: string;
    body?: BodyInit_;
    headers?: HeadersInit_;
    token?: string | null;
    noRequestWithoutToken?: boolean;
    EXCEPTION_API_URL?: string;
}


export const apiRequest = async ({
    path,
    method = "GET",
    body,
    headers,
    token = null,
    noRequestWithoutToken = false,
    EXCEPTION_API_URL
}: IApiRequest) => {
    const requestOptions: any = {
        method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            ...headers,
            Authorization: "Bearer " + token,
        },
        body: JSON.stringify(body),
    };

    if (noRequestWithoutToken && !token) {
        return null;
    }

    return fetch((EXCEPTION_API_URL || API_URL) + path, requestOptions).then((response) =>
        response ? response.json() : {}
    );
};
