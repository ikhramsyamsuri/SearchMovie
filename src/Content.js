import React, { useState } from "react";
import axios from "axios"
import { apiKey } from "./API";

const Content= () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [data, setData] = useState({});

    const onSearchHandler = () => {
        if (!searchTerm) {
            return;
        }

        axios({
            method:"GET",
            url:`http://www.omdbapi.com/?t=${searchTerm}&&apiKey=${apiKey}`,
        }).then(response => {
            setData (response.data);
            console.log(response.data);
        })

    };

    return (
        <div className='h-screen bg-slate-800 w-full pt-3'>
            <div className='w-full flex items-center justify-start'>
                <input 
                type="text" 
                placeholder="Movie Title..." 
                className="text-[18px] mr-4 outline-none rounded-md p-2 w-[15%]"
                value={searchTerm}
                onChange={(e) => setSearchTerm (e.target.value)}
                />
                <button 
                className="border border-white rounded-md p-1 text-white font-bold" 
                onClick={onSearchHandler}>Search
                </button>
            </div>

            <div className="mt-10 w-full flex items-center justify-center text-white font-bold flex-wrap">
                <div>
                    <img src={data.Poster} alt="#" className="border border-white rounded-lg"/>
                </div>
                <div className="ml-5 mr-5 p-2 bg-gray-500 rounded-md ">
                    <h1 className="text-2xl">{data.Title} ({data.Year})</h1>
                    <div className="pt-4"/>
                    <p>Genre : {data.Genre}</p>
                    <div className="pt-2"/>
                    <p>Release : {data.Released}</p>
                    <div className="pt-2"/>
                    <p>Director : {data.Director}</p>
                    <div className="pt-2"/>
                    <p>Duration : {data.Runtime}</p>
                    <div className="pt-2"/>
                    <p>Language : {data.Language}</p>
                    <div className="pt-2"/>
                    <p>Sinopsis : {data.Plot}</p>
                    <div className="pt-2"/>
                    <p>Rating : {data.imdbRating}</p>
                    <p>{data.Awarded}</p>
                </div>
            </div>
        </div>
    )
}

export default Content;