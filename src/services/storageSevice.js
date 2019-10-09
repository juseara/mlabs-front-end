const KEYPAGE = 'page-key-mlabs';


const setPage = (page) =>{
    debugger
    const storage = getPages()
    if(!page)
        return

    debugger
    storage[page.channel_key] = page
    localStorage.setItem(KEYPAGE,JSON.stringify(storage))
}

const getPages = () => {
    return JSON.parse(localStorage.getItem(KEYPAGE)) || {}
}


export {
    setPage,
    getPages,
}