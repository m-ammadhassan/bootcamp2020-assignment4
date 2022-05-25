import React, {useState} from 'react';
import './App.css';
import Table from './Table';

function App() {

  let [tableNum, setTableNum] = useState(1);
  let [tableUpto, setTableUpto] = useState(1);

  return (
    <>
      <header>
        <h1>Assignment Title : <span>useState Hook, Teranary Operator & CSS</span></h1>
      </header>

      <main>
        <h2>Mathematics Table Calculator</h2>

        <div className="table flex">

          <div className="table-head">
            
            <div className="flex table-msg">
              <h4>Display Table Of</h4>
              <div className="table-num">
                {tableNum}
              </div>
            </div>

            <div className="flex table-buttons">
              <button className="table-btn" onClick={ ()=>{ setTableNum(tableNum+1) } }>
                &#43;
              </button>

              <button className="table-btn" onClick={ ()=>{ setTableNum(tableNum-1) } }>
                &minus;
              </button>
            </div>

            <div className="flex table-msg">
              <h4>Display Table Upto</h4>
              <div className="table-num">
                {tableUpto}
              </div>
            </div>

            <div className="flex table-buttons">
              <button className="table-btn" onClick={ ()=>{ setTableUpto(tableUpto+1) } }>
                &#43;
              </button>

              <button className="table-btn" onClick={ ()=>{ setTableUpto(tableUpto-1) } }>
                &minus;
              </button>
            </div>

          </div>


          <div className="table-display flex">
            <Table tableNum = {tableNum} tableUpto = {tableUpto}/>
          </div>
        </div>

      </main>
    </>
  );
}

export default App;
