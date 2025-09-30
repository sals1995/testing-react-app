import { http, HttpResponse } from "msw";

import { setupServer } from 'msw/node'

const handlers=[
    http.get('https://api.chucknorris.io/jokes/random',()=>{
        return HttpResponse.json({value:"fake joke"},{status:200})
    })
]

const server= setupServer(...handlers)

export default server