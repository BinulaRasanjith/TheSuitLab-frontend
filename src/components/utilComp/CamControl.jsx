

// eslint-disable-next-line react/prop-types
const CamControl = ({ camCont, setCamCont }) => {
    return (
        <div className="absolute -right-0 top-10 z-20 flex flex-col">
            Camera :
            scale : {camCont.scale} <input type="range" step={0.1} max={10} min={-10} value={camCont.scale} onChange={(e) => setCamCont({ ...camCont, scale: e.target.value })} />
        </div>
    )
}

export default CamControl