function stringify(user) {
    const firstName = capitalize(user.name.first)
    const lastName = capitalize(user.name.last)
    return `${user.name.title} ${firstName} ${lastName}, ${user.email}`
}