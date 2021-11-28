const STATIC_ASSETS = [
    '/image/imaage.jpg',
    '/index.html',
    '/style.css'
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