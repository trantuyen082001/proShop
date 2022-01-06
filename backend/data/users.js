import bcryptjs from "bcryptjs"

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Tuyen Tran',
        email: 'tuyen@example.com',
        password: bcryptjs.hashSync('123456',10),

    },
    {
        name: 'Bin Tran',
        email: 'bin@example.com',
        password: bcryptjs.hashSync('123456',10),

    }
]

export default users;