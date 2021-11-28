const STATIC_ASSETS = [
    '/about.html',
    '/index.html',
    '/paper.css'
]

async function preCache(){
    
}

self.addEventListener('install', event => {
    console.log("[SW] installed");
})


self.addEventListener('activate', event => {
    console.log("[SW] activated");
})

self.addEventListener('fetch', event => {
    console.log("[SW] fetched");
})