self.addEventListener('fetch', (event) => {
  const url = event.request.url;
  
  // If the request is for a .br file, add Content-Encoding header
  if (url.endsWith('.br')) {
    const modifiedHeaders = new Headers(event.request.headers);
    modifiedHeaders.set('Content-Encoding', 'br');
    
    const modifiedRequest = new Request(event.request, {
      headers: modifiedHeaders
    });
    
    event.respondWith(fetch(modifiedRequest));
  }
});