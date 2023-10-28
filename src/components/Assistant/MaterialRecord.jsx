import { Button } from '@chakra-ui/react'
import PropTypes from "prop-types";

import { MATERIAL_IMAGES_URL } from "../../config/config";

const MaterialRecord = ({
    MaterialImage,
    MaterialName,
    MaterialCode,
    UnitPrice,
    Color,
    ColorCode,
    onOpen,
}) => {

    return (
        <>
            <div className=" flex flex-row justify-between w-full">
                <div className=" w-40 text-sm font-medium text-black">
                    <img className=" w-16 h-8 rounded-md" src={`${MATERIAL_IMAGES_URL}/${MaterialImage}`} alt="material" />
                </div>
                <div className="hidden">{MaterialCode}</div>
                <div className=" w-32 text-sm font-medium text-black">{MaterialName}</div>
                <div className=" w-32 text-sm font-medium text-black">Rs. {UnitPrice.toFixed(2)}</div>
                <div className=" w-32 text-sm font-medium text-black">{Color}</div>
                <div className=" w-32 text-sm font-medium text-black">{ColorCode}</div>
                <div className=" w-40 text-sm font-medium text-gray-500">
                    <Button
                        _hover={{
                            bg: '#6B9DCA',
                            textColor: 'white'
                        }}
                        bg={'#BEE7FF80'}
                        border={'1px'}
                        borderColor={'#6B9DCA'}
                        height={'2rem'}
                        onClick={onOpen} 
                        textColor={'#6B9DCA'}
                        width={'5.5rem'}>Update</Button>
                </div>
            </div>
            <div className=" w-full border border-b-zinc-200"></div>
        </>
    );
};

MaterialRecord.propTypes = {
    MaterialImage: PropTypes.string.isRequired, //  USE ACCORDING TO THE DATA GET FROM DATABASE
    MaterialName: PropTypes.string.isRequired,
    MaterialCode: PropTypes.string.isRequired,
    UnitPrice: PropTypes.number.isRequired,
    Color: PropTypes.string.isRequired,
    ColorCode: PropTypes.string.isRequired,
    onOpen: PropTypes.func.isRequired,
};

export default MaterialRecord;