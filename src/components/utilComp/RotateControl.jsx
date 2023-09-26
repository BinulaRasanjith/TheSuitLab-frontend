/* eslint-disable react/prop-types */


const RotateControl = ({ rotate, setRotate }) => {
    // return (
    //     <div className="absolute left-2 top-10 z-20 flex flex-col">
    //         x : {rotate.x} <input max={10} min={-10} onChange={(e) => setRotate({ ...rotate, x: e.target.value })} step={0.1} type="range" value={rotate.x} />
    //         y : {rotate.y} <input max={10} min={-10} onChange={(e) => setRotate({ ...rotate, y: e.target.value })} step={0.1} type="range" value={rotate.y} />
    //         z : {rotate.z} <input max={10} min={-10} onChange={(e) => setRotate({ ...rotate, z: e.target.value })} step={0.1} type="range" value={rotate.z} />
    //     </div>
    // )
    return (
        <div className="absolute left-2 top-10 z-20 flex flex-col">
            x : {rotate.x} <input max={10} min={-10} onChange={(e) => setRotate({ ...rotate, x: e.target.value })} step={0.1} type="range" value={rotate.x} />
            y : {rotate.y} <input max={10} min={-10} onChange={(e) => setRotate({ ...rotate, y: e.target.value })} step={0.1} type="range" value={rotate.y} />
            z : {rotate.z} <input max={10} min={-10} onChange={(e) => setRotate({ ...rotate, z: e.target.value })} step={0.1} type="range" value={rotate.z} />
        </div>
    )
}

export default RotateControl;