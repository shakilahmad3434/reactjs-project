import React, { useEffect, useState } from 'react'

const useSaveLocalStorage = (storageName) => {
    const [items, setItems] = useState([]);
    useEffect(()=>{
        if(storageName){
            try {
                const storeValue = localStorage.getItem(storageName)
                setItems(storeValue ? JSON.parse(storeValue) : []);
            } catch (error) {
                console.error('Error parsing localStorage data', error);
                setItems([])
            }
        }
    }, [storageName])

    const saveItem = (item) => {
        if(!storageName){
            console.warn('Storage name is not defined');
            return;
        }
        const updatedItems = [...items, item];
        setItems(updatedItems)
        localStorage.setItem(storageName, JSON.stringify(updatedItems))
    }

    return [items, saveItem];
}

export default useSaveLocalStorage
// this is a get and save data on localStorage