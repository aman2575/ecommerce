import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    navbar: {
        backgroundColor: '#203040',
        '& a': {
            color: '#ffffff',
            marginLeft: 10,
        }
    },
    brand: {
        fontWeight:'bold',
        fontSize:'1.5rem'
    },
    grow: {
        flexgrow: 1,
    },
    main:{
        minHeight:'80vh'
    },
    
    footer:{
        textAlign:'center'
    },
    section: {
        marginBottom:'10px',
        marginTop:'10px',
    },
    
});

export default useStyles