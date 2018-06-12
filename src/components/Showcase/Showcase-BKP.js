import React from 'react';
import './showcase.css';

const Showcase = (props) => {
    
    return (
        <div id="showcase">
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." aria-describedby="inputGroup-sizing-default"/>
                            <div className="input-group-append">
                    <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
                    </div>

                    </div>
                </div>
                <div className="col-12 col-md-4"></div>
                <div className="col-12 col-md-4">
                    <div className="btn-group float-right" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light">Grid</button>
                        <button type="button" className="btn btn-light">List</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-4">
                    <div className="card" style={{ width: '18rem' }}>
                        <img className="card-img-top img-thumbnail" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_163ea1a0538%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_163ea1a0538%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22106.3984375%22%20y%3D%2296.3%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" />
                        <div className="card-body">
                            <h5 className="card-title">{props.cardtitle}</h5>
                            <p className="card-text">{props.cardtext}.</p>
                            <button href="#" className="btn btn-success btn-add-cart float-right" onClick={props.action}>&#x002B;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
        }

export default Showcase;