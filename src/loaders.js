import { useLoaderData } from "react-router-dom";

export const priceLoader = async ({params}) => {

    const symbol = params.symbol
   
    const apiKey = "4da6c97c5aa576af51039f473000f580"
   
    return (await fetch(`https://financialmodelingprep.com/api/v3/${symbol}/AAPL?limit=120&apikey=${apiKey}`)).json()}