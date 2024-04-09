import React from "react";

export const Header = (props) => {
  return (
      <header id='header' >
        <div className='intro'>
          <div className='overlay'>
            {/*<div className='container'>*/}
              <div className='row'>
                <div className='col-xs-12 col-md-12 intro-text'>
                  {" "}
                  {/* Adjusted classes here */}
                  <h1>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>{props.data ? props.data.paragraph : "Loading"}</p>
                </div>
              {/*</div>*/}
            </div>
          </div>
        </div>
      </header>
  );
};
