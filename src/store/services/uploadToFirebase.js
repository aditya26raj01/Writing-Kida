import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";

export const uploadToFirebase = async (image,e, folder, setUploadStatus, query, setQuery) => {
    const imageRef = ref(storage, `${folder}/${e.target.files[0].name}`);
    const uploadTask = uploadBytesResumable(imageRef, e.target.files[0]);
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setUploadStatus(percent);
        },
        (err) => console.log(err),
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                setQuery({ ...query, [image]: url });
            });
        }
    );
}