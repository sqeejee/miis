import './selections.styles.css';
import Portrait from '../portrait/portrait.component';

const Selection = () => {
    const props = {
        hat: "blue",
        eye: "green",
        color: "orange"
    };

    return (
        <div className='screen'>
            <div className="box">
                <Portrait {...props} />
            </div>
        </div>
    )
}

export default Selection;
