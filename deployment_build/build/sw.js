let cacheUserData = "data";

this.addEventListener("install",(event)=>{
    event.waitUntil(
        caches.open(cacheUserData).then((data)=>{
            data.addAll([
              "/static/js/bundle.js",
              "/static/js/main.chunk.js",
              "/static/js/1.chunk.js",
              "/main.0cdc45016f0f4511d250.hot-update.js",
              "https://fonts.googleapis.com/css?family=Lato&display=swap",
              "https://fonts.gstatic.com/s/lato/v16/S6uyw4BMUTPHjx4wXg.woff2",
              "/sockjs-node",
              "/favicon.ico",
              "/manifest.json",
              "/logo192.png",
               "/"
            ])
        })
    )
})

this.addEventListener("fetch",(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp; 
                }
                let requestUrl=event.request.clone();
                fetch(requestUrl)
            })
        )
    }
})