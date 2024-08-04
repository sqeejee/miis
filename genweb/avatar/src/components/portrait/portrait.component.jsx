const Portrait = (props) => {


    const { hat, eye, color } = props;

    return (
        <div className="portrait">
            <h2>hat: {hat}</h2>
            <h2>eye: {eye}</h2>
            <h2>color: {color}</h2>
        </div>
    );
}

export default Portrait;
