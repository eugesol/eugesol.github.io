import React from 'react'
import Pic from '../Images/pic.png'
function About() {
    return (
        <div>
            <div className="card justify-content-center">
                <div className="row no-gutters">
                    <div className="col-md-12">
                        <h4 className="card-title">About Me</h4>
                        <hr />
                    </div>
                </div>

                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="resize" src={Pic} alt="Eugenia Solana" width="300"
                            height="auto" />
                    </div>

                    <div className="col-md-7">
                        <div className="card-body">
                            <p className="card-text">
                            Web Developer with a background in Arts and accounting. Motivated and ambitious with excellent communication skills.  Able to create new and innovative user experiences while cultivating knowledge and contributing to a collaborative team setting. 
                            </p>
                            <p className="card-text">
                                <small className="text-muted">11/20/2020</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default About