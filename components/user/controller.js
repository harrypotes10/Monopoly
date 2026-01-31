const storage = require('./storage')

function addUser(data) {
    return new Promise((resolve, reject) => {
        if (!data.user || !data.password || !data.name || !data.last_name) {
            reject('Ingresar los datos solicitados.')
        } else {
            resolve(storage.add(data))
        }
    })
}

function getUser(data) {
    return new Promise((resolve, reject) => {
        if (data)
            resolve(storage.get(data))
        else
            reject('not-exist')
    })
}

function updateUser(data) {
    return new Promise(async (resolve, reject) => {
        try {
            // Validación de campos
            if (!data.user || !data.name || !data.last_name) {
                reject('Ingresar los datos solicitados.')
                return
            }

            // Llamada al storage
            const result = await storage.update(data)

            // Si no existe usuario
            if (!result) {
                reject('Usuario no encontrado.')
                return
            }

            resolve(result)

        } catch (error) {
            reject(error.message)
        }
    })
}

function deleteUser(data) {
    return new Promise((resolve, reject) => {
        if (!data.user) {
            reject('Ingresar los datos solicitados.')
        } else {
            resolve(storage.delete(data))
        }
    })
}

module.exports = {
    addUser,
    getUser,
    updateUser,
    deleteUser
}
