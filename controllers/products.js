export const addProduct = (req, res)=>{
    res.send('Product added!');
}

export const getProducts = (req, res)=>{
    res.send('All products!');
}

export const countProducts = (req , res)=>{
    res.send('All Product count!');
}

export const updateProduct = (req, res) =>{
    res.send(`Product with id ${req.params.id} updated!`);
}

export const deleteProduct = (req , res)=>{
    res.send(`Products with id ${req.params.id} deleted!`);
}