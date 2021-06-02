import React, { Component } from 'react';
import OneRow from './OneRow';

class MyTable extends Component {

    render() {

        const jsonObj = this.props.data;
        let myRows = [];

        for (let i = 0; i < jsonObj.length; i++) {

            const _id = jsonObj[i]['_id'];

            myRows[i] = (
                <OneRow
                    row={jsonObj[i]}
                    key={i}
                    delFunc={() => this.props.deleteFunc(_id)}
                />);
        }

        return (<table>
            <thead>
                <tr>
                    <td className='table-header' >Name</td>
                    <td className='table-header' >Age</td>
                </tr>
            </thead>
            <tbody>{myRows}</tbody>
        </table>);
    }
}

export default MyTable;