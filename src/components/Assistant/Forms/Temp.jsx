/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
<><div className=' nflex gap-x-10 hidden'>

    <div className='w-64'>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Input
                type="text"
                placeholder="Costume Name"
                id="costumeName"
                name="costumeName"
                value={newCostumeData.costumeName}
                onChange={handleInputChange}
                className="mb-6" />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Input
                type="text"
                placeholder="Fabric"
                id="fabric"
                name="fabric"
                value={newCostumeData.fabric}
                onChange={handleInputChange}
                className="mb-6" />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Input
                type="number"
                placeholder="Price"
                id="price"
                name="price"
                value={newCostumeData.price}
                onChange={handleInputChange}
                className="mb-6" />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Input
                type="text"
                placeholder="Button Color"
                id="button-color"
                name="buttonColor"
                value={newCostumeData.buttonColor}
                onChange={handleInputChange}
                className="mb-6" />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                // placeholder='Lapel Type'
                size="lg"
                fontSize="sm"
                id="lapel-type"
                name="lapel"
                value={newCostumeData.lapel}
            >
                <option disabled selected>Lapel type</option>
                <option value='Standard'>Standard</option>
                <option value='Wide'>Wide</option>
            </Select>
        </div>



        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                placeholder='Pocket Type'
                size="lg"
                fontSize="sm"
                id="pocket-type"
                name="pocket"
                value={newCostumeData.pockets}
            >
                <option value='Standard'>Standard</option>
                <option value='Wide'>Wide</option>
            </Select>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                placeholder='Vent Type'
                size="lg"
                fontSize="sm"
                id="vent-type"
                name="vent"
                value={newCostumeData.vent}
            >
                <option value='Standard'>Standard</option>
                <option value='Thin'>Thin</option>
                <option value='Wide'>Wide</option>
            </Select>
        </div>
    </div>

    <div className='w-64'>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                placeholder='Costume Type'
                size="lg"
                fontSize="sm"
                id="costume-type"
                name="costumeType"
                value={newCostumeData.costumeType}
                onChange={(e) => {
                    const selectedValue = e.target.value;
                    setNewCostumeData({ ...newCostumeData, costumeType: selectedValue });
                } }
            >
                <option value='Jacket'>Jacket</option>
                <option value='Trouser'>Trouser</option>
                {/* <option value='Shirt'>Shirt</option> */}
            </Select>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Input
                type="text"
                placeholder="Color"
                id="color"
                name="color"
                value={newCostumeData.color}
                onChange={handleInputChange}
                className="mb-6" />
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                // placeholder='Costume Size'
                size="lg"
                fontSize="sm"
                id="costume-size"
                name="costumeSize"
                value={newCostumeData.costumeType}
            >
                <option disabled selected>Costume size</option>
                <option value='XS'>Extra Small</option>
                <option value='S'>Small</option>
                <option value='M'>Medium</option>
                <option value='L'>Large</option>
                <option value='XL'>Extra Large</option>
            </Select>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                placeholder='Buttons'
                size="lg"
                fontSize="sm"
                id="button-count"
                name="buttons"
                value={newCostumeData.buttons}
            >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='4'>4</option>
                <option value='6'>6</option>
                <option value='8'>8</option>
            </Select>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                placeholder='Sleeve Buttons'
                size="lg"
                fontSize="sm"
                id="sleeve-button"
                name="sleeveButton"
                value={newCostumeData.sleeveButton}
            >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </Select>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                placeholder='Pocket Color'
                size="lg"
                fontSize="sm"
                id="pocket-color"
                name="pocketColor"
                value={newCostumeData.pocketColor}
            >
                <option value='Same Color'>Same Color</option>
                <option value='Black'>Black</option>
                <option value='White'>White</option>
            </Select>
        </div>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <Select
                placeholder="Back Pocket"
                size="lg"
                fontSize="sm"
                id="back-pocket"
                name="backPocket"
                value={newCostumeData.backPocket}
            >
                <option value='none'>No button</option>
                <option value='single'>One Button</option>
            </Select>
        </div>
    </div>

</div><div className=' nflex hidden'>
        <div className="relative mb-6" data-te-input-wrapper-init>
            <label htmlFor="image" className=''>Add Images Here</label><br /><br />
            <input
                type="file"
                accept="image/*"
                id="image"
                // value={newAccessoryData.image[0]}
                value={selectedFile}
                onChange={handleFileChange}
                multiple />
        </div>
    </div></>

                        {/* <!--Submit button--> */}
                        {/* <button
                            type="submit"
                            className=" dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                        >
                            Add Accessory
                        </button> */}