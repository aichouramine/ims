import React from 'react';
import classes from './MasteryTable.module.css';
import TableActions from "../../shared_components/TableActions/TableActions";
import Update from "../../shared_components/TableActions/Update/Update";
import Remove from "../../shared_components/TableActions/Remove/Remove";

const masteryTable = () => (
    <table className={`${classes.Table} table mb-0`}>
        <thead className="bg-light">
        <tr>
            <th scope="col">Person</th>
            <th scope="col">Dates</th>
            <th scope="col">Mentor</th>
            <th scope="col">Talent Manager</th>
            <th scope="col"></th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">Minsk</th>
            <td>5</td>
            <td>3</td>
            <td>L, S, M</td>
            <td >
                <TableActions>
                    <Update/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Brest</th>
            <td>2</td>
            <td>0</td>
            <td>Mastery x2</td>
            <td >
                <TableActions>
                    <Update/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Gomel</th>
            <td>3</td>
            <td>1</td>
            <td>L x2</td>
            <td >
                <TableActions>
                    <Update/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Grodno</th>
            <td>1</td>
            <td>1</td>
            <td></td>
            <td >
                <TableActions>
                    <Update/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        <tr>
            <th scope="row">Mogilev</th>
            <td>2</td>
            <td>0</td>
            <td>L</td>
            <td >
                <TableActions>
                    <Update/>
                    <Remove/>
                </TableActions>
            </td>
        </tr>
        </tbody>
    </table>
);

export default masteryTable;