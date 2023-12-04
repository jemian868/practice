module.exports = {
    list: (req, res) => {
        console.log('controller col');
        res.status(200).send([
            {
                name: 'biboy'
            }
        ])
    }
}