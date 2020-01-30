import React from 'react';
import './Content.css';
function AddMembers() {
    return <>
        <div className="workSection">
            <div className="heading"><h1>Add Memebers</h1></div>
            <div className="formcontainer">
                <div className="row">
                    <div className="col-md-10 offset-md-1 ">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label>Last Name</label>
                                    <input type="text" className="form-control" placeholder="Last Name" />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label>Mobile No.</label>
                                    <input type="text" className="form-control" placeholder="Mobile No." />
                                </div>
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input type="text" className="form-control" placeholder="Email Address" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            

                            <div className="col-md-6 col-sm-6">
                                <div className="form-group">
                                    <label>Team</label>
                                        <select className="form-control">
                                            <option>--- Select Team Location ---</option>
                                            <option>Gurugram</option>
                                            <option>Delhi</option>
                                            <option>Noida</option>
                                        </select>
                                </div>
                            </div>      
                        </div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12">
                                <div className="form-group">
                                <button type="button" className="btn btn-primary">Submit</button>
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
}

export default AddMembers;