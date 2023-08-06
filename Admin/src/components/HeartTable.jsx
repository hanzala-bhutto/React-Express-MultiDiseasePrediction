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
// import {heartColumns} from '../constants';
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

    const getHeartRecords = () => {
        fetch("http://localhost:3001/admin/getHeartRecords")
            .then(response => response.json())
            .then(json => {
                setData(json);
                console.log("data",data);
        });
    }

    const deleteHeartRecord = (id) => {
        fetch("http://localhost:3001/admin/deleteHeartRecord", {
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
                getHeartRecords();
                alert("Heart Record deleted successfully!");
            }
            else {
                alert("Heart Record deletion failed!");
            }
        });
    }

    useEffect(() => {
        getHeartRecords();
    }, [])

    const heartColumns = [
        { title: 'ID', field: 'id' , align: 'left'},
        { title: 'Age', field: 'age', align: 'left' },
        { title: 'Sex', field: 'sex', align: 'left' },
        { title: 'CP', field: 'cp', align: 'left' },
        { title: 'TrestBPS', field: 'trestbps', align: 'left' },
        { title: 'Chol', field: 'chol', align: 'left' },
        { title: 'Fbs', field: 'fbs', align: 'left' },
        { title: 'Restecg', field: 'restecg', align: 'left' },
        { title: 'Thalach', field: 'thalach', align: 'left', hidden: true },
        { title: 'Exang', field: 'exang', align: 'left', hidden: true },
        { title: 'Oldpeak', field: 'oldpeak', align: 'left', hidden: true },
        { title: 'Slope', field: 'slope', align: 'left', hidden: true },
        { title: 'CA', field: 'ca', align: 'left', hidden: true },
        { title: 'Thal', field: 'thal', align: 'left', hidden: true },
        { title: 'Target', field: 'target', align: 'left' },
    ]

  return (
    <div className=''>
        <ThemeProvider theme={defaultMaterialTheme}>
            <MaterialTable
                columns={heartColumns}
                data = {data}
                title="Heart Table"
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
                                deleteHeartRecord(oldData.id);
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