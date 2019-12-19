import React, { useState } from "react";
import { Placeholder } from "semantic-ui-react";

interface ImageProps{
    index: number;
    src: string;
}

const Image: React.FC<ImageProps> = ({index, src}) =>{
    const [ loaded, setLoaded ] = useState(false);
    return(
        <>
        {!loaded ? (
            <Placeholder style={{height:"300px",position: "absolute",top:0,right:0,left:0}}>
                <Placeholder.Image square/>
            </Placeholder>
        ):null}
        <img alt={`product ${index}`} onLoad={()=>setLoaded(true)} src={src} />
        
        </>
    )
}

export default Image;