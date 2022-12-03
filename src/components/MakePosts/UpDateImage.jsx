import React from "react";

const UploadImage = ({ imgInput, handlerUpload }) => {
    return (
        <div
            className="relative p-6 flex items-center justify-center"
            style={{ width: 570, height: 570, zIndex: 10000 }}>
            <div>
                <div className="mb-10 font-normal text-2xl">
                    Drag photos and videos here
                </div>
                <div className="flex justify-center">
                    <input
                        type="file"
                        className="hidden"
                        ref={imgInput}
                        onChange={handlerUpload}
                    />
                    <button
                        type="button"
                        className="bg-blue-500 font-bold text-sm rounded text-white px-2 py-1"
                        onClick={() => imgInput.current.click()}>
                        Select from Desktop
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UploadImage;
