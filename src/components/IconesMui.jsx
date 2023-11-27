import React, { useEffect, useState } from 'react';

import AccessAlarm from '@mui/icons-material/AccessAlarm';
import { ThumbUp } from '@mui/icons-material';



const IconesMui = () => {
    const [likeColor, setLikeColor] = useState('');
    const handelLick = ()=>{
        const color = likeColor ? '': "primary";
        setLikeColor(color)
    }
    const [user, setuser] = useState({});
    const [randomuser, setRandomUser] = useState({})
    useEffect(()=> {
        //jsonplaceholder users
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then(res=>res.json())
        .then(data=>setuser(data))

        //randomuser
        fetch('https://randomuser.me/api/')
        .then(res=>res.json())
        .then(data=>setRandomUser(data.results[0]))

    },[])
    console.log(randomuser)
    return (
        <div>
            <h4>Name:{user.name}</h4>
            <h4>Randome user Name: {randomuser.name && randomuser.name.first }</h4>
            <h3>Material icone</h3>
            <AccessAlarm></AccessAlarm>
            <ThumbUp onClick = {handelLick} color={likeColor} ></ThumbUp>

        </div>
    );
};

export default IconesMui;