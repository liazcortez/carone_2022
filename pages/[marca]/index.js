import React, { useEffect } from "react";
import { useRouter } from 'next/router'

const RedirectPage = ()=>{

    const router = useRouter();
    const { marca } = router.query;

    useEffect(() => {
        if(marca) router.push(`/autos/${marca}`)
        //eslint-disable-next-line
        },[marca]);

    return null
}
export default RedirectPage