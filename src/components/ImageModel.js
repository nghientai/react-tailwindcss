import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ImageModel = (props) => {
    const tags = props.image.tags.split(",");

    return (
        <Modal {...props} size="lg" centered>

            <Modal.Body>
                <img src={props.image.webformatURL} alt="" className="w-full" />
            </Modal.Body>
            <Modal.Footer>
                <div className="px-4 py-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="inline-block bg-gray-200 round-full px-1 py-1 text-sm font-semibold text-gray-700 mr-1">
                            #{tag}
                        </span>
                    ))}
                </div>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ImageModel;