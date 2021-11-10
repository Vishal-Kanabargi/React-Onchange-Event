import { useState } from "react";

export const useList = (init) => {
    const [list, setList] = useState(init)
        return {
            list,
            removeItem(name) {
                console.log(name)
                let filteredData = list.filter(i => i.name !== name)
                setList(filteredData)
            },
            saveItem(index, newVal) {
                const copyList = [...list];
                copyList[index].name = newVal;
            }
        }
}