import { ReactPropTypes } from "react"

const CamControl = ({ camCont, setCamCont }) => {
    return (
        <div className="absolute right-2 top-10 z-20 flex flex-col">
            Camera :
            scale : {camCont.scale} <input max={10} min={-10} onChange={(e) => setCamCont({ ...camCont, scale: e.target.value })} step={0.1} type="range" value={camCont.scale} />
        </div>
    )
}

CamControl.propTypes = {
    camCont: ReactPropTypes.object,
    setCamCont: ReactPropTypes.func
}

export default CamControl