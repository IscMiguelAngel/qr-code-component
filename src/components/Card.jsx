import ImageQR from './ImageQR'

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-img">
                <ImageQR />
            </div>
            <div className="card-body">
                <h1>Improve your front-end skills by building projects</h1>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </div>
    )
}

export default Card