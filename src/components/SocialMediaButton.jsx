import PropTypes from "prop-types";

function SocialMediaButton({target,name,size=40,icon}) {
    const TARGET=target;
    const NAME=name;
    

    const containerStyles= {
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        //margin: 10,
        marginLeft:0,
        width: size,
        height: size,
        /*background: "white",
        borderRadius: "100%"*/
    };

    const labelStyles = {
    /*    content: "Github"*/
    };

    return (
        <>
            <div className="socialbutton" style={containerStyles} title={name}>
                <a href={TARGET} target="_blank" rel="noopener noreferrer" style={labelStyles} title={NAME}><img width={size-15} height={size-15} src={icon} alt={NAME} title={NAME}/></a>
            </div>
        </>
    )
}

SocialMediaButton.propTypes = {
    target: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    icon: PropTypes.string
}

export default SocialMediaButton