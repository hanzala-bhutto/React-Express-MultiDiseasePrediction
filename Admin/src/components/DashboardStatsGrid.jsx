import React from 'react'
import {IoPieChart, IoPeople } from 'react-icons/io5';
import { useState } from 'react';
import { useEffect } from 'react';

const DashboardStatsGrid = () => {

    const [data, setData] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();

    const getUserCount = () => {
        fetch("http://localhost:3001/admin/getUserCount")
            .then(response => response.json())
            .then(json => {
                setData(json[0].count);
                // console.log("data",data[0].count);
                // console.log("json",json[0].count);
        });
    }

    const getHeartCount = () => {
        fetch("http://localhost:3001/admin/getHeartCount")
            .then(response => response.json())
            .then(json => {
                setData2(json[0].count);
                // console.log("data",data[0].count);
                // console.log("json",json[0].count);
        });
    }

    const getDiabetesCount = () => {
        fetch("http://localhost:3001/admin/getDiabetesCount")
            .then(response => response.json())
            .then(json => {
                setData3(json[0].count);
                // console.log("data",data[0].count);
                // console.log("json",json[0].count);
        });
    }

    useEffect(() => {
        getUserCount();
        getHeartCount();
        getDiabetesCount();
    },[]);

	return (
		<div className="flex gap-4">
			<BoxWrapper>
                <InsideBox icon={IoPeople} bg_color="bg-yellow-400" title="Total Users" total={data} />
			</BoxWrapper>
			<BoxWrapper>
                <InsideBox icon={IoPieChart} bg_color="bg-red-600" title="Heart Count" total={data2} />
			</BoxWrapper>
			<BoxWrapper>
                <InsideBox icon={IoPieChart} bg_color="bg-blue-600" title="Diabetes Count" total={data3} />
			</BoxWrapper>
		</div>
	)
}

function InsideBox({ icon, title, total, bg_color }) {
    return (
        <>
            <div className={`${bg_color} rounded-full h-12 w-12 flex items-center justify-center`}>
                {React.createElement(icon, { className: "text-2xl text-white" })}
            </div>
            <div className="pl-4">
                <span className="text-sm text-gray-500 font-light">{title}</span>
                <div className="flex items-center">
                    <strong className="text-xl text-gray-700 font-semibold">{total}</strong>
                    {/* <span className="text-sm text-green-500 pl-2">-343</span> */}
                </div>
            </div>
        </>
    )
}

function BoxWrapper({ children }) {
	return <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
}

export default DashboardStatsGrid;