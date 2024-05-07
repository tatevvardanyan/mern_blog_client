import ReactQuill from "react-quill";

const Editor = ({ value, onChange }) => {
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };
    return (
        <ReactQuill
            value={value}
            theme={"snow"}
            onChange={onChange}
            modules={modules} />
    )
}
export default Editor