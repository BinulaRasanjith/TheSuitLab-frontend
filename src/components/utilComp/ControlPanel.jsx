
// eslint-disable-next-line react/prop-types
const ControlPanel = ({ control, setControl }) => {
    return (
        <div className="absolute -left-10 top-0 z-50 flex flex-col">
            x : {control.x} <input type="range" step={0.1} max={10} min={-10} value={control.x} onChange={(e) => setControl({ ...control, x: e.target.value })} />
            y : {control.y} <input type="range" step={0.1} max={10} min={-10} value={control.y} onChange={(e) => setControl({ ...control, y: e.target.value })} />
            z : {control.z} <input type="range" step={0.1} max={10} min={-10} value={control.z} onChange={(e) => setControl({ ...control, z: e.target.value })} />
        </div>
    )
}

export default ControlPanel