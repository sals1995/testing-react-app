import { http, HttpResponse } from "msw";
import { setupServer } from 'msw/node'


const handlers=[
    http.get('https://api.chucknorris.io/jokes/random',()=>{
        return new HttpResponse.json({value:"hahaha"})
    }),
    // http.post("",()=> )
]

export const server=setupServer(...handlers)