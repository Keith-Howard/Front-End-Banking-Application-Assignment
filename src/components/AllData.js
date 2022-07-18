import React from 'react';
import contextExports from './context.js';
import parse from "html-react-parser";


function AllData() {
    const ctx = React.useContext(contextExports.UserContext);

    function getTableData() {
        let tableString = "";
        for (const user of ctx.users) {
            tableString = tableString + 
            `<tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
            </tr>`
        }
        console.log(tableString);
        return parse(tableString);
    }  

    return (
        <>
            <contextExports.CardBootstrap 
                cardWidth='45%'
                bgcolor="info"
                txtcolor="white"
                header="All Data"
                fontSizeHeader="3.95"
                headerBgColor="#F65058FF"
                headerDisplay='flex'
                headerJustifyContent='center'
                bodyAlign="center"
                body={
                    <>
                    <table className='table'>
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                            </tr>
                        </thead>
                        <tbody className="table-light">
                            {getTableData()}
                        </tbody>
                    </table>
                    </>
                }
            
            />
        </>
    )
}

export default AllData;