import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@proshop.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'John Doe',
        email: 'john@doe.com',
        password: bcrypt.hashSync('123456', 10),

    },
    {
        name: 'Jim Bean',
        email: 'jim@bean.com',
        password: bcrypt.hashSync('123456', 10),
    }
]

export default users