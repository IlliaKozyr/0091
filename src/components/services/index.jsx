import "./style.css";

export const Services = () => {
    return (
        <div className="servicesContainer">
            <div className="servicesBlock">
            <div className="servicesTitle">
                <p>Services</p>
            </div>

            <hr></hr>

            <div>
                <div className="oneProgressBar">
                    <div className="progressBar1"><p>Manual tour booking</p></div>
                    <h2 className="progressResult">11</h2>
                </div>
                <div className="oneProgressBar">
                    <div className="progressBar2"><p>Package tours</p></div>
                    <h2 className="progressResult">3</h2>
                </div>

                <div className="oneProgressBar">
                    <div className="progressBar3"><p>Hotels</p></div>
                    <h2 className="progressResult">1</h2>
                </div>
            </div>

            <hr></hr>
            <div className="servicesTotal">
                <h2 className="progressResult">Total</h2>
                <h2 className="progressResult">15</h2>
            </div>
        </div>
        </div>
        
    );
};
