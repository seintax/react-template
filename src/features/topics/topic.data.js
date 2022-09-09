import React, { useEffect } from 'react'
import { useState } from "react"
import { Grid } from "../../interface/grid.ui"
import TopicItem from "./topic.item"

const TopicData = ({ data, setdata, topic }) => {
    const [isloading, setisloading] = useState(false)
    const [active, setactive] = useState()
    const columnData = [
        { name: "#", width: 50 },
        { name: " ", width: 150 },
        { name: "FULLNAME", width: 360 },
        { name: "EMAIL", width: 250 },
        { name: "AGE", width: 80 },
        { name: "GENDER", width: 120 },
        { name: "STATUS", width: 120 },
        { name: "ADDRESS", width: 520 },
    ]

    useEffect(() => {
        if (topic) {
            setisloading(true)
            setdata()
            const delay = setTimeout(() => {
                let info = [
                    {
                        id: 0,
                        name: "George Stubborn",
                        email: "george.stubborn@gmail.com",
                        age: "30",
                        gender: "Male",
                        status: "Married",
                        address: "SchuckenPhackenShatten, Germany"
                    },
                    {
                        id: 1,
                        name: "Markus Incredible",
                        email: "markus.incredible@gmail.com",
                        age: "29",
                        gender: "Male",
                        status: "Single",
                        address: "DeekkenRackenTooten, Germany"
                    },
                    {
                        id: 2,
                        name: "Kenny Rogers",
                        email: "rogers.kenny@gmail.com",
                        age: "52",
                        gender: "Male",
                        status: "Married",
                        address: "New York, USA"
                    },
                    {
                        id: 3,
                        name: "Barrak Obama",
                        email: "barrak.obama@gmail.com",
                        age: "49",
                        gender: "Male",
                        status: "Married",
                        address: "Washington DC, USA"
                    }
                ]
                setdata(info)
                setisloading(false)
            }, 2000)

            return () => clearTimeout(delay)
        }
    }, [topic])

    return (
        <Grid.DataList columnData={columnData}>
            {
                (data && data.length) ? (
                    data.map((d, i) => (
                        <TopicItem index={i} item={d} column={columnData} active={active} setactive={setactive} />
                    ))
                ) : (
                    <Grid.NotFound status={isloading ? "RETRIEVING..." : "NO RECORDS FOUND."} />
                )
            }
        </Grid.DataList>
    )
}

export default TopicData