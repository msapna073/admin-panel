import React from 'react';
import './Content.css';


function Attendance(){
    return <>
    <div className="workSection">
    <div className="heading"><h1>Attendance</h1></div>
    <div className="formcontainer">
    <div className="searchEmp">
        <div className="row">
            <div className="col-md-7">
            <div className="btn-group">
                <button type="button" className="btn btn-primary">Print</button>
                <button type="button" className="btn btn-primary">Download</button>
                
            </div>
            </div>
            <div className="col-md-5">
            <input className="form-control" type="text" placeholder="Search with ID"/>

            </div>
        </div>

    <div className="showAttendance">
        <div className="table-responsive">
    <table className="table table-striped">
    <thead>
      <tr>
        <th>Full Name</th>
        <th>Time In</th>
        <th>Time Out</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Srijib</td>
        <td>11: 55</td>
        <td>18:55</td>
      </tr>
      <tr>
        <td>Sapna</td>
        <td>11: 55</td>
        <td>18:55</td>
      </tr>
      <tr>
        <td>Maninder</td>
        <td>11: 55</td>
        <td>18:55</td>
      </tr>
    </tbody>
  </table>
    </div>
    </div>

    </div>

    </div>
    </div>

</>
    
}


export default Attendance