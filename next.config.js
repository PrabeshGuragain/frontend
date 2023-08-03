/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:["www.freecodecamp.org"]
    },
    
    experimental:{
        forceSwcTransforms:false,
        serverActions:true
    },
    crossOrigin:'use-credentials'
    
}
module.exports = {
    middleware:['middleware/default']
}

module.exports = nextConfig
