module.exports = {
    status200: (res, content) => {
        if(content == null){
            return res.status(404).json();
        }
        return res.status(200).json(content);
    
    },
    status204: (res, content) => {
        if(content == null){
            return res.status(404).json();
        }
        return res.status(204).json(content);
    
    } 
};