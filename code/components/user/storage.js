const model = require('./model')

// CREATE
async function addUser(data) {
    const user = new model(data)
    return await user.save()
}

// READ
async function getUser(data) {
    let filter = {}

    if (data.user != null) {
        filter = { user: data.user }
    }

    const results = await model.find(filter)
    return results
}

// UPDATE
async function updateUser(data) {

    // buscamos el usuario por "user"
    const user = await model.findOne({ user: data.user })

    if (!user) {
        throw new Error('Usuario no encontrado')
    }

    // actualizamos campos
    user.name = data.name
    user.last_name = data.last_name
    user.date_birth = data.date_birth

    // guardamos cambios
    const result = await user.save()
    return result
}

// DELETE
async function deleteUser(data) {
    const result = await model.deleteOne({ user: data.user })
    return result
}

module.exports = {
    add: addUser,
    get: getUser,
    update: updateUser,
    delete: deleteUser
}
