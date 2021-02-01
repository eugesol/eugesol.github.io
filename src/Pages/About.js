import React from 'react'
import FadeIn from 'react-fade-in';
import Pic from '../Images/pic.jpg'
function About() {
    return (
    <FadeIn>
        <div>
            
            <div className="card justify-content-center">
            <FadeIn>
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
                            Web Developer with a background in design and accounting. Motivated and ambitious with excellent communication skills. Able to learn new concepts quickly, and work under pressure. Seeking to create innovative user experiences while cultivating knowledge and contributing to a collaborative team setting. 
                            </p>

                        </div>
                    </div>
                </div>
            </FadeIn>
            </div>
            
        </div>
    </FadeIn>

    )
}

export default About