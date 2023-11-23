import { useEffect, useState } from "react";

const List = ()=>{
    const initialItems = ['Apple', 'Bannana', 'Pineapple', 'Grapes', 'Orange', 'Custardapple'];
    const [items, setItems] = useState(initialItems);
    const [query, setquery] = useState('');
    
    const search = (e)=>{
        e.target.value? setquery(e.target.value): setItems(initialItems);
    }

    useEffect(()=>{
        const filterItem = items.filter((item)=>{
            if(item.toLowerCase().includes(query.toLowerCase()) ){
                return item;

            }
            
    })
    setItems(filterItem);
    }, [query]);


return (
    <center>
    <input type="text" placeholder="Enter item to search" onChange={search} />
    <ul style={{listStyle:"none"}}>
        {items.map((data, index)=>(<li key={index}>{data}</li>))}
    </ul>
    </center>
)

}

export default List;