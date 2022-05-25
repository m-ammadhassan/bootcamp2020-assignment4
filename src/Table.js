import React from 'react';
import './Table.css';

function Table(props)
{

    function generateTable()
    {
        if(props.tableNum < 0)
        {
            return `${props.tableNum} is not a valid number`;
        }

        else
        {
            let tableLength = [];

            for(let i=1; i<=props.tableUpto; i++)
            {
                tableLength.push(i);  
            }


            return tableLength.map( (element)=>{ 
                return <>
                    <div className='table-row'>
                        <div>{props.tableNum}</div>
                        <div>x</div>
                        <div>{element}</div>
                        <div>=</div>
                        <div>{props.tableNum * element}</div>
                    </div>
                </>
            } );
            
        }
    }

    return(
        <div className="table-container flex">{generateTable()}</div>
    );
}

export default Table;