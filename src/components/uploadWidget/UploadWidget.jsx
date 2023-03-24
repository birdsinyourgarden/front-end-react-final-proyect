import { useEffect, useRef } from 'react';
import '../uploadWidget/UploadWidget.css';

const UploadWidget = (props) => {
    const cloudinaryRef = useRef();
    const widgetRef = useRef();
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        widgetRef.current = cloudinaryRef.current.createUploadWidget({
            cloudName: 'dkbwmuo7n',
            uploadPreset: 'q6l5mrmq'
        }, function(error, result) {
            if (result.info.secure_url) {
                props.url(result.info.secure_url);
            }
        });
    }, []);
    return (
        <button type="button" className="btn btn-custom rounded-4 p-2" onClick={() => widgetRef.current.open()}>
            Añadir justificante
        </button>
    )
}
export default UploadWidget;