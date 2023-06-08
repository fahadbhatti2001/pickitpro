import { db } from '@/FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'

export const Vehicles = () => {

    let [data, setData] = useState()
    const vehiclesRef = collection(db, "vehiclecatogories")

    const getData = async () => {
        const vehiclesData = await getDocs(vehiclesRef)
        setData(vehiclesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    useEffect(() => {
        getData();
    }, [])

    console.log(data)

    return (
        <div>
            Vehicles
        </div>
    )
}
