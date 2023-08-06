import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

import React from 'react'
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';

const UserTable = () => {
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
        };
    

    const defaultMaterialTheme = createTheme();
    const [data, setData] = useState();

    const getDiabetesRecords = () => {
        fetch("http://localhost:3001/admin/getDiabetesRecords")
            .then(response => response.json())
            .then(json => {
                setData(json);
                console.log("data",data);
        });
    }

    const deleteDiabetesRecord = (id) => {
        fetch("http://localhost:3001/admin/deleteDiabetesRecord", {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({id: id}),
        })
        .then(response => response.json())
        .then(json => {
            console.log("json",json);
            if (json === "success") {
                console.log("json",json);
                getDiabetesRecords();
                alert("Diabetes Record deleted successfully!");
            }
            else {
                alert("Diabetes Record deletion failed!");
            }
        });
    }

    useEffect(() => {
        getDiabetesRecords();
    }, [])

    const diabetesColumns = [
        { title: 'ID', field: 'id' , align: 'left'},
        { title: 'Pregnancies', field: 'pregnancies', align: 'left' },
        { title: 'Glucose', field: 'glucose', align: 'left' },
        { title: 'BloodPressure', field: 'bloodPressure', align: 'left' },
        { title: 'SkinThickness', field: 'skinThickness', align: 'left' },
        { title: 'Insulin', field: 'insulin', align: 'left' },
        { title: 'BMI', field: 'bmi', align: 'left' },
        { title: 'DPF', field: 'dpf', align: 'left' },
        { title: 'Age', field: 'age', align: 'left', hidden: true },
        { title: 'Outcome', field: 'outcome', align: 'left' },
    ]

  return (
    <div className=''>
        <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
                columns={diabetesColumns}
                data = {data}
                title="Diabetes Table"
                icons={tableIcons}
                options={{
                    actionsColumnIndex: -1,
                    minBodyHeight: "69vh",
                    maxBodyHeight: "69vh"
                }}
                editable={{
                    onRowDelete: (oldData) => {
                        console.log(oldData);
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                deleteDiabetesRecord(oldData.id);
                                resolve();
                            }, 1000);
                        })
                    }
                }}
            />
        </ThemeProvider>    
    </div>
  )
}

export default UserTable;