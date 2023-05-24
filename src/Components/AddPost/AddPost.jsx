import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import "./AddPost.css";
import { Autocomplete, Button, FormControlLabel, Switch, TextField } from "@mui/material";
import { useState } from "react";
import { uploadToFirebase } from "../../store/services/uploadToFirebase";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { postBlog } from "../../store/services/postBlog";
import { useNavigate } from "react-router-dom";

const modules = {
    toolbar: [
        [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' },
        { 'indent': '-1' }, { 'indent': '+1' }],
        ['link'],
        ['clean']
    ], clipboard: { matchVisual: false }
}
const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'imcategory', 'video'
]

const AddPost = () => {
    const { categories } = useSelector((state) =>state.store);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [query, setQuery] = useState({ content: "", featured: false, inTop10: false, tag: null, stockMarket: null });
    const [uploadStatus, setUploadStatus] = useState(null);
    const handleInput = (e) => {
        setQuery({ ...query, [e.target.name]: e.target.value });
    }
    const handleUpload = (e) => {
        setUploadStatus(null);
        uploadToFirebase("coverImage", e, "blogs", setUploadStatus, query, setQuery);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(query.content.length===0) return toast.error("Enter Valid Blog Content")
        dispatch(postBlog(query)).unwrap()
            .then(() => {
                navigate("/", {replace: true})
            })
            .catch(() => {})
    }

    return (
        <form className="container add-post" onSubmit={handleSubmit}>
            <h2 className="color-blk">Compose a new Blog</h2>
            <TextField name="title" label="Title" placeholder="Enter Title here..." required
                InputLabelProps={{ shrink: true }} onChange={handleInput} />

            <TextField name="description" label="Description" placeholder="Enter Description here..." required
                InputLabelProps={{ shrink: true }} onChange={handleInput} />
            
            <ReactQuill value={query.content} id="content" className="color-blk no-bold" theme="snow" modules={modules} formats={formats}
                placeholder={"Start Typing Blog Content..."}
                onChange={(value) => setQuery({ ...query, content: value })} />
            
            <Autocomplete
                fullWidth
                disablePortal
                options={categories || []}
                getOptionLabel={(option) => `${option.name}` || ""}
                renderInput={(params) => <TextField required {...params} label="Category" placeholder="Choose Category" InputLabelProps={{ shrink: true }} />}
                onChange={(e, value) => setQuery({ ...query, tag: value.name })}
            />
            
            <div>
                <label htmlFor="formFile" className="form-label color-blk">Upload Cover Image&nbsp;-&nbsp;
                    {uploadStatus>0 && <div className="upload-status">{uploadStatus} %</div>}
                </label>
                <input required className="form-control" name="coverImage" type="file" id="formFile"
                    accept="image/png, image/jpeg" onChange={handleUpload}/>
            </div>
            
            <div className="switch-wrapper">
                <FormControlLabel control={<Switch onChange={(e) => setQuery({...query, featured: e.target.checked})} />} label="Featured" className="color-blk" />
                <FormControlLabel control={<Switch onChange={(e) => setQuery({...query, inTop10: e.target.checked})} />} label="Top 10" className="color-blk" />
                <FormControlLabel control={<Switch onChange={(e) => setQuery({...query, stockMarket: e.target.checked})} />} label="Stock Market" className="color-blk" />
            </div>
            <Button type="submit" variant="contained">Post Blog</Button>
        </form>
    )
}

export default AddPost;