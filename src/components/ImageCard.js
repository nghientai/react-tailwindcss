import React, { useState } from 'react';
import ImageModal from './ImageModel';

const ImageCard = ({ image }) => {
    const [modalShow, setModalShow] = useState(false);
    const tags = image.tags.split(",");
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="relative hover:opacity-1">
                <img title="Click to zoom"
                    onClick={() => setModalShow(true)}
                    src={image.webformatURL} alt="Click to zoom"
                    className="w-full hover:bg-black hover:opacity-75 focus:outline-none"
                    height="100px" />

            </div>

            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb-2">Photo by {image.user}</div>
                <ul>
                    <li>
                        <strong>Views: </strong>
                        {image.views}
                    </li>
                    <li>
                        <strong>Downloads: </strong>
                        {image.downloads}
                    </li>
                    <li>
                        <strong>Likes: </strong>
                        {image.likes}
                    </li>
                </ul>

            </div>
            <div className="px-4 py-2">
                {tags.map((tag, index) => (
                    <span key={index} className="inline-block bg-gray-200 round-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1">
                        #{tag}
                    </span>
                ))}

            </div>
            <ImageModal image={image} show={modalShow} onHide={() => setModalShow(false)} />
        </div>

    );
};

export default ImageCard;