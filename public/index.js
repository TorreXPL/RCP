window.addEventListener('load', ()=>{
    registerSW();
});



async function registerSW(){
    if('serviceWorker' in navigator){
        try{
            await navigator.serviceWorker.register('sw.js')
        }
        catch(e){
            /*eslint no-console: ["error", { allow: ["warn", "error"] }] */
            console.warn('SW registration failed');
        }
    }
}



