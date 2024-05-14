import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Condtdown({deadline,darkmode=true,size=50,bground=false}) {
    const DEADLINE=deadline;
    const MILLISECONDS_OF_A_SECOND = 1000; 
    const MILLISECONDS_OF_A_MINUTE = MILLISECONDS_OF_A_SECOND * 60;
    const MILLISECONDS_OF_A_HOUR = MILLISECONDS_OF_A_MINUTE * 60;
    const MILLISECONDS_OF_A_DAY = MILLISECONDS_OF_A_HOUR * 24;
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function getTime(){
        const NOW = new Date();
        const MILLISECONDS_REMAINING = DEADLINE - NOW;
        //Días
        setDays(Math.floor(MILLISECONDS_REMAINING/MILLISECONDS_OF_A_DAY));
        //Horas
        setHours(Math.floor((MILLISECONDS_REMAINING%MILLISECONDS_OF_A_DAY)/MILLISECONDS_OF_A_HOUR));
        //Minutos
        setMinutes(Math.floor(((MILLISECONDS_REMAINING%MILLISECONDS_OF_A_DAY)%MILLISECONDS_OF_A_HOUR)/MILLISECONDS_OF_A_MINUTE));
        //Segundos
        setSeconds(Math.floor((((MILLISECONDS_REMAINING%MILLISECONDS_OF_A_DAY)%MILLISECONDS_OF_A_HOUR)%MILLISECONDS_OF_A_MINUTE)/MILLISECONDS_OF_A_SECOND));
        }

    useEffect(() => {
        const INTERVAL = setInterval(() => getTime(), MILLISECONDS_OF_A_SECOND);
        return () => clearInterval(INTERVAL);
    }, []);


    const counterContainerStyles= {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
    };

    const cardStyles = {
        width: `${size}px`,
        height: `${size}px`,
        margin: "0.2em",
        lineHeight: size/size,
        borderRadius: "10%",
        background: bground? darkmode?"rgba(36, 36, 36, 0.7)":"rgba(255, 255, 255, 0.7)" : "none",
        /*background: darkmode?"rgba(36, 36, 36, 0.9)":"rgba(255, 255, 255, 0.5)",*/
        color: darkmode?"#fafafa":"#242424"
    };

    const textStyles = {
        width: `${size}px`,
        display: "block",
        margin: "0 auto",
        marginTop: size/10,
        fontWeight: "bold",
        fontSize: `${size/2}px`
    };

    const labelStyles = {
        fontSize: `${size/6.4}px`,
        opacity: "60%"
    };


    return (
        <>
            <div className="counterContainer" style={counterContainerStyles}>
                <div style={{display: "flex"}}>
                    <div className="card" style={cardStyles}>
                        <span style={textStyles}>{days}</span>
                        <span style={labelStyles}>days</span>
                    </div>
                    <div className="card" style={cardStyles}>
                        <span style={textStyles}>{" "+hours}</span> 
                        <span style={labelStyles}>hours</span>
                    </div>
                </div>
                <div style={{display: "flex"}}>
                    <div className="card" style={cardStyles}>
                        <span style={textStyles}>{" "+minutes}</span>
                        <span style={labelStyles}>minutes</span>
                    </div> 
                    <div className="card" style={cardStyles}>
                        <span style={textStyles}>{" "+seconds}</span>
                        <span style={labelStyles}>seconds</span>
                    </div>
                </div> 
            </div>
        </>
    )
}

Condtdown.propTypes = {
    deadline: PropTypes.instanceOf(Date).isRequired,
    darkmode: PropTypes.bool,
    bground: PropTypes.bool,
    size: PropTypes.number
}

export default Condtdown