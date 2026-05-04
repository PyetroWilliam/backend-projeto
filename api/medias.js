



const medias ={
    {id:1, type: "movie", title: "inception"},
    {id:2, type: "tv", title: "Breaking Bad"},
    {id:3, type: "movie", title: "The matrix"},
    {id:4, type: "tv", title: "Game of Thromes"}
};

module.exports = (req, res) => {
    if (req.method === "get") {
        return res.status(200).json({medias});
    }else{
        return res.status(405).json({message: "metodo não permitido"})
    }
} 