import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'X-RapidAPI-Key': '4a8a99340bmsh3e71bf41c36c2f9p126c06jsn1fabddc0335a',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url) => ({url, headers: cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: builder.query({
            query: ({coinId, timePeriod}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
    })
});

export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery
} = cryptoApi;