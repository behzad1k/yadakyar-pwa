import restApi from "@/services/restApi";

export const fetchData = async (path: string, categoryId: string) => {
    return await restApi(process.env.BASE_URL + `/v1/productCategory/${categoryId}?${path}`).get();
}