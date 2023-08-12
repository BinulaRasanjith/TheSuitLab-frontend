import { ReactPropTypes } from "react"

const ControlPanel = ({ control, setControl }) => {
    return (
        <div className="absolute left-2 top-10 z-20 flex flex-col">
            x : {control.x} <input max={10} min={-10} onChange={(e) => setControl({ ...control, x: e.target.value })} step={0.1} type="range" value={control.x} />
            y : {control.y} <input max={10} min={-10} onChange={(e) => setControl({ ...control, y: e.target.value })} step={0.1} type="range" value={control.y} />
            z : {control.z} <input max={10} min={-10} onChange={(e) => setControl({ ...control, z: e.target.value })} step={0.1} type="range" value={control.z} />
        </div>
    )
}

ControlPanel.propTypes = {
    control: ReactPropTypes.object,
    setControl: ReactPropTypes.func
}

export default ControlPanel