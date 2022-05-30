import { useEffect, useState } from "react";

const useTools = () => {
    const [tool, setTools] = useState([]);
    useEffect(() => {
        fetch('https://mysterious-escarpment-73124.herokuapp.com/tools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return [tool, setTools];
}
export default useTools;