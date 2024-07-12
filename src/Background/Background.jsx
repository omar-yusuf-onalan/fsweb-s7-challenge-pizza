import styles from "./Background.module.css";

const Background = ({height, width, source}) => {
    const backgroundStyle = {
        top: 0,
        left: 0,
        content: '',
        position: "absolute",
        height: height,
        width: width,
        background: `url(${source})`,
        backgroundSize: "cover",
        zIndex: -1
    }

    return (
        <div>
            <div style={backgroundStyle}></div>
        </div>
    )
}

export default Background;