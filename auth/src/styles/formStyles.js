export default {
    styles :{
        cssInputLabel: {
        color:'#fff',
        "& label": {
            color: "#999",
            "&.Mui-focused": {
            color: "primary",
            }
        },
        "& .MuiInputBase-root": {
            color: "#fff",
        },
        "& .MuiOutlinedInput-root:hover": {
            "& > fieldset": {
            borderColor: "#1976d2"
            }
        }
        },
        cssInputBgCl:{
        backgroundColor:"#333"
        },
        cssInput: {
        color: "white"
        }
    }
}
