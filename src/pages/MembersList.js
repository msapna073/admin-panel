import React from 'react';
import './Content.css';
function MembersList() {
  return <>
    <div className="workSection">
      <div className="heading"><h1>Members List</h1></div>
      <div className="formcontainer">
        <div className="searchEmp">
          <div className="row">
            <div className="col-md-5 offset-md-7">
              <input class="form-control" type="text" placeholder="Search" />

            </div>
          </div>

          <div className="showAttendance">
            <div className="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Employee Id</th>
                    <th>Full Name</th>
                    <th>Details</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>01lab</td>
                    <td>Srijib</td>
                    <td>detailsIcon</td>
                    <td>editIcon</td>
                    <td>deleteIcon</td>
                  </tr>
                  <tr>
                    <td>02lab</td>
                    <td>Sapna</td>
                    <td>detailsIcon</td>
                    <td>editIcon</td>
                    <td>deleteIcon</td>
                  </tr>
                  <tr>
                    <td>03lab</td>
                    <td>Maninder</td>
                    <td>detailsIcon</td>
                    <td>editIcon</td>
                    <td>deleteIcon</td>
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

export default MembersList;