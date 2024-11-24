import { useState, useEffect } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState(null);
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id)
    };

    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
            .then((res) => {
                console.log(res);
                setPost(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [idFromButtonClick]);

    return (
        <div>
            <input type="number" value={id} onChange={(e) => setId(Number(e.target.value))}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
        </div>
    );
}

export default DataFetching;
