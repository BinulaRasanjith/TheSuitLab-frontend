import { useDispatch, useSelector } from 'react-redux'

import BootCut from '../../assets/images/pant_styles/BootCut 1.png'
// import Dave from '../../assets/images/pant_styles/Dave 1.png'
import Normal from '../../assets/images/pant_styles/Normal 1.png'
import { setJacket, selectJacket } from '../../store/slices/jacketCustomizationSlice'
import { setRotation } from "../../store/slices/rotationHandleSlice"
import { MdDoneOutline } from "react-icons/md";


const ChoosePant = () => {
    const dispatch = useDispatch()
    const trouserSelected = useSelector(selectJacket).trouser;

    return (
        <div className='my-5 px-10'>
            <span className='p-5 text-2xl font-bold'>Choose Pant</span>
            <div className='grid grid-cols-3 gap-5 mt-5'>
                <div onClick={() => {
                    dispatch(setJacket({ trouser: 'center-vent' }))
                    dispatch(setRotation(Math.PI / 2));
                }} className='flex relative flex-col items-center p-6 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    {trouserSelected === 'center-vent' && (
                        <div className="absolute z-5 top-1 right-2">
                            <MdDoneOutline size={24} color="black" />
                        </div>
                    )}
                    <img alt="Center Vent" className='pb-5' src={BootCut} />
                    <label className='text-sm'>CENTER VENT</label>
                </div>
                {/* <div className='flex flex-col items-center p-6 justify-center'>
                    <img alt="SIDE VENT" className='pb-5' src={Dave} />
                    <label className='text-sm'>SIDE VENT</label>
                </div> */}
                <div onClick={() => {
                    dispatch(setJacket({ trouser: 'no-vent' }))
                    dispatch(setRotation(Math.PI / 2));
                }} className='flex relative flex-col items-center p-6 justify-center cursor-pointer rounded-lg border border-black-2  shadow'>
                    {trouserSelected === 'no-vent' && (
                        <div className="absolute z-5 top-1 right-2">
                            <MdDoneOutline size={24} color="black" />
                        </div>
                    )}
                    <img alt="NO VENT" className='pb-5' src={Normal} />
                    <label className='text-sm'>NO VENT</label>
                </div>
            </div>

        </div>
    )
}

// import colors from '../../constants/colors.js'
// import { selectJacket } from "../../store/slices/jacketCustomizationSlice.js";

// export function NewPant(props) {
//   const { nodes, materials } = useGLTF('/models/NewSuit.gltf')


{/* <mesh geometry={nodes.PantsSlim_Suit.geometry} material={materials['b0b0b0.002']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={trouser === 'no-vent' ? true : false} ><meshStandardMaterial {...TextureProps[material]} /></mesh>
<mesh geometry={nodes.Pants_Button.geometry} material={materials['Button.006']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={backPocket === 'with-btn' ? true : false}></mesh>

<mesh geometry={nodes.Pants_Back_PocketLine.geometry} material={materials['b0b0b0.005']} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={backPocket === 'no-btn' || backPocket === 'with-btn' ? true : false} ></mesh>
<mesh geometry={nodes.Pants_Normal.geometry} material={materials.Suit_OlivieSolidBrushedTwill} position={[-0.002, 0.008, 0.009]} rotation={[-Math.PI / 2, 0, 0]} scale={0.025} visible={trouser === 'center-vent' ? true : false}><meshStandardMaterial {...TextureProps[material]} /></mesh> */}


export default ChoosePant