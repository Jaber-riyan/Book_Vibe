import { toast } from 'react-toastify';
// read list functionality

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        const storeList = JSON.parse(storedListStr);
        return storeList;
    }
    else {
        return [];
    }
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        toast.error('Already exists in read list!!')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list', storedListStr);
    }
}


// wish list functionality

const getStoredWishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storeList = JSON.parse(storedListStr);
        return storeList;
    }
    else {
        return [];
    }
}

const addToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    const storedListRead = getStoredReadList();
    if (storedList.includes(id)) {
        toast.error("Already exists in wish list!!")
    }
    else if(storedListRead.includes(id)) {
        toast.error(`Already exists in read list`);
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr);
    }
}



export { getStoredReadList, addToStoredReadList, getStoredWishList, addToStoredWishList };