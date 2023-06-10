import { db } from '@/FirebaseConfig';
import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import { Popup, Spinner } from '@/Components';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { produce } from 'immer';

export const Vehicles = () => {

    let [data, setData] = useState([])
    const [spin, setSpin] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [vehicle, setVehicle] = useState(true);

    const vehiclesRef = collection(db, "vehiclecatogories")

    const getData = async () => {
        const vehiclesData = await getDocs(vehiclesRef)
        setData(vehiclesData.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };

    useEffect(() => {
        getData();
    }, [])

    data = [...data].sort((a, b) => {
        return a.order - b.order
    })

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm();

    const setVehicleData = (id) => {
        setVehicle(id)
        const updatedData = data.filter((e) => e.id == id);
        setValue("weight", updatedData[0].weight)
        setValue("height", updatedData[0].height)
        setValue("length", updatedData[0].length)
        setValue("width", updatedData[0].width)
        setValue("color", (updatedData[0].color).replace("0xff", "#"))
        setValue("price", updatedData[0].price)
        setIsEdit(true)
    }

    const updateVehicle = async (formData) => {
        try {
            setSpin(true);
            const vehicleDoc = doc(db, "vehiclecatogories", vehicle);
            formData.color = formData.color.replace("#", "0xff");
            await updateDoc(vehicleDoc, formData);
            setData((prevData) =>
                produce(prevData, (draft) => {
                    const vehicleData = draft.find((vehicleData) => vehicleData.id === vehicle);
                    vehicleData.height = formData.height;
                    vehicleData.weight = formData.weight;
                    vehicleData.width = formData.width;
                    vehicleData.length = formData.length;
                    vehicleData.price = formData.price;
                    vehicleData.color = formData.color;
                })
            );
            setSpin(false);
            Swal.fire({
                icon: "success",
                title: "Vehicle updated successfully",
                toast: true,
                showCancelButton: false,
                animation: false,
                position: "top",
                timer: 3000,
                showConfirmButton: false,
                iconColor: "#A8C256",
                confirmButtonColor: "#E0A800",
            });
            setIsEdit(false);
        } catch (error) {
            setSpin(false);
            Swal.fire({
                icon: "error",
                title: "Unable to update Vehicle",
                toast: true,
                showCancelButton: false,
                animation: false,
                position: "top",
                timer: 3000,
                showConfirmButton: false,
                iconColor: "#C33149",
                confirmButtonColor: "#E0A800",
            });
        }
    };


    return (
        <>
            <Spinner isSpinning={spin} />
            <Popup
                title="Update Vehicle"
                open={isEdit}
                width="w-1/3"
                close={() => setIsEdit(false)}
            >
                <div className="">
                    <div className="grid grid-cols-3 gap-2">
                        <label htmlFor="height" className="col-span-1 flex items-center">Height</label>
                        <input type="number" {...register("height", { required: true })} min={0} id="height" className="col-span-2 rounded px-2 py-1 bg-zinc-100 outline-none border-2 border-zinc-200 focus:border-primary-1 w-full" />

                        <label htmlFor="weight" className="col-span-1 flex items-center">Weight</label>
                        <input type="number" {...register("weight", { required: true })} min={0} id="weight" className="col-span-2 rounded px-2 py-1 bg-zinc-100 outline-none border-2 border-zinc-200 focus:border-primary-1 w-full" />

                        <label htmlFor="length" className="col-span-1 flex items-center">Length</label>
                        <input type="number" {...register("length", { required: true })} min={0} id="length" className="col-span-2 rounded px-2 py-1 bg-zinc-100 outline-none border-2 border-zinc-200 focus:border-primary-1 w-full" />

                        <label htmlFor="width" className="col-span-1 flex items-center">Width</label>
                        <input type="number" {...register("width", { required: true })} min={0} id="width" className="col-span-2 rounded px-2 py-1 bg-zinc-100 outline-none border-2 border-zinc-200 focus:border-primary-1 w-full" />

                        <label htmlFor="price" className="col-span-1 flex items-center">Price</label>
                        <input type="number" {...register("price", { required: true })} min={0} id="price" className="col-span-2 rounded px-2 py-1 bg-zinc-100 outline-none border-2 border-zinc-200 focus:border-primary-1 w-full" />

                        <label htmlFor="color" className="col-span-1 flex items-center">Color</label>
                        <input type="color" {...register("color", { required: true })} min={0} id="color" className="col-span-2 outline-none w-full color-input h-10" />

                        <button onClick={handleSubmit(updateVehicle)} type="button" className="col-span-3 w-full bg-primary-1 hover:bg-transparent border-2 border-primary-1 transition-all duration-75 text-white hover:text-primary-1 px-4 py-1 rounded">
                            Update
                        </button>
                    </div>
                </div>
            </Popup>
            <div className="">
                <h1 className="text-2xl font-medium text-zinc-700">
                    Manage Vehicles
                </h1>
                <table className="text-white text-left w-full mt-4">
                    <thead className="">
                        <tr className="border-b-transparent text-sm text-zinc-600">
                            <th className="bg-orange-100 p-4 rounded-tl-md w-32">Image</th>
                            <th className="bg-orange-100 p-4">Vehicles</th>
                            <th className="bg-orange-100 p-4">Weight</th>
                            <th className="bg-orange-100 p-4">Height</th>
                            <th className="bg-orange-100 p-4">Width</th>
                            <th className="bg-orange-100 p-4">Length</th>
                            <th className="bg-orange-100 p-4 rounded-tr-md w-32">Action</th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {
                            data == undefined ? null : data.map((e, i) => (
                                <tr key={i} className="text-sm text-zinc-600 font-light hover:bg-orange-50 hover:text-zinc-700 whitespace-nowrap border-b border-b-zinc-100">
                                    <td className="p-4 w-32">
                                        <img src={e.image} className="h-6" />
                                    </td>
                                    <td className="p-4">{e.vehicle}</td>
                                    <td className="p-4">{e.weight}</td>
                                    <td className="p-4">{e.height}</td>
                                    <td className="p-4">{e.width}</td>
                                    <td className="p-4">{e.length}</td>
                                    <td className="p-4">
                                        <button onClick={() => setVehicleData(e.id)} type="button" className="">
                                            Update
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
