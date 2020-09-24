import React from "react";
import "./DiaryCard.css";
import Header from '../Header/Header'

function DiaryCard() {
  return (
    <div>

        {/* headder */}
        <div>
        <Header/>
        </div>
     
     <br/>
     <br/>
    



      <div className="container-fluid ">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div>
              {/* input field  */}
              <input
                className="form-control textField1 mb-2"
                type="text"
                placeholder="Tital "></input>
            </div>

                
            {/* text area  */}
            <div className="form-group ">
              <textarea
                className="form-control textField1 mb-2"
                id="exampleFormControlTextarea1"
                rows="3"
              placeholder="Description"></textarea>
              
              <button type="button" className="btn btn-primary textField2">Submit</button>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default DiaryCard;
