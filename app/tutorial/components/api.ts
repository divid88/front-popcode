import axios from "axios"

const API = axios.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async(sourceCode: any) => {

    const res = await API.post("/execute", {
        "language": "python",
        "version": "3",
        "files":[
            {content: sourceCode}
        ]
    });
    return res.data
}
