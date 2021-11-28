const CACHE_NAME ="static_cache"
const STATIC_ASSETS = [
    '/img/photo.jpg/',
    '/index.html',
    '/style.css'
]

async function preCache(){
    const cache = await caches.open(CACHE_NAME)
    return cache.addAll(STATIC_ASSETS)
}
self.addEventListener('install', event => {
    event.waitUntil(preCache())
})

self.addEventListener('activate', event => {
})

async function fetchAssets(event){
    try{
        const response =await  fetch(event.request)
        return response
    }catch(err){
        const cache = await caches.open(CACHE_NAME)
        return cache.match(event.request)
    }
}

self.addEventListener('fetch', event => {
    event.responseWith(fetchAssets(events))
})
