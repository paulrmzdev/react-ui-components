import PropTypes from "prop-types";
import styles from "./ProgressBar.module.css"

function ProgressBar ({goal,progress,color,label=true}) {
    
    function progressCalc(aportaciones,value){
        var progress = (aportaciones / value)*100;
        return progress;
      }

    const fillerStyles = {
        width: `${progressCalc(progress,goal)}%`,
        backgroundColor: color
      }
    
      const processLabelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
      }  
      
  return (
    <div className={styles.progressContainer}>
      <div className={styles.filler} style={fillerStyles}>
        {label ? <span style={processLabelStyles}>{progressCalc(progress,goal)}%</span>:""}
      </div>
    </div>
  )
}

ProgressBar.propTypes = {
  progress: PropTypes.string,
  goal: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.bool
}

export default ProgressBar