const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) =>{
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log(req.body)
        let userCheck = await db.get_user(username)
        // console.log(userCheck)
        if(userCheck[0]){
            return res.status(409).send('Username is taken')
        }
        // console.log('hit')
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        let newUser = await db.add_user(username, hash)
        // console.log(newUser)
        req.session.user = {username: newUser[0].username}
        return res.status(201).send(req.session.user)
    },
    login: async (req, res) =>{
        const db = req.app.get('db')
        const {username, password} = req.body
        console.log(req.body)
        let foundUser = await db.get_user(username)
        let user = foundUser[0]
        if(!user){
            return res.status(401).send('Invalid username')
        }
        const authenticated = bcrypt.compareSync(password, user.password)
        if(!authenticated){
            return res.status(403).send('Incorrect Password')
        }
        req.session.user = {username: user.username}
        return res.status(201).send(req.session.user)
    },
    logout: async (req, res) =>{
        req.session.destroy()
        res.sendStatus(200)
    },
    createPost: async (req, res) => {
        const db = req.app.get('db')
        const {title, body, image_url, username} = req.body
        const {user_id} = req.params
        let newPost = await db.add_post(title, body, image_url, user_id, username)
        res.status(200).send(newPost)
    },
    searchPost: async (req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        let selectedPost = await db.get_post(id)
        res.status(200).send(selectedPost[0])
    },
    getAllPost: async (req, res) => {
        const db = req.app.get('db')
        let all = await db.all_post()
        res.status(200).send(all)
    }
}