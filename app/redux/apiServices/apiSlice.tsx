import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

interface getAllProductsTypes{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:string,
  }

export const ApiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com"}),
    tagTypes: ["cart"],
    endpoints: (builder)=>({
        getAllProducts: builder.query<getAllProductsTypes[], void>({
            query: ()=> "products"
        })
    })
})

export const {useGetAllProductsQuery} = ApiSlice
