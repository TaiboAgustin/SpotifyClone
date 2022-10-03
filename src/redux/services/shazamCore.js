import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

    export const shazamCoreApi = createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            prepareHeaders: (headers)=>{
                headers.set('X-RapidAPI-Key', '879e8f4572mshf02cba147cf3e7fp154b1djsn52541904d11f' )

                return headers;
            },
        }),
        endpoints: (builder)=>({
            getTopCharts : builder.query({ query: () => '/charts/world' }),
        }),
    });

    export const {
        useGetTopChartsQuery,
    } = shazamCoreApi;