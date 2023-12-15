export function isReddishColor(rgba) {
    const rgbaColor = rgba.match(/\d+/g).map(Number);
    return rgbaColor[0] > 100 && rgbaColor[0] > rgbaColor[1] * 2 && rgbaColor[0] > rgbaColor[2] * 2;
}

export function findPasswordByUsername(users, username) {
    return users[users.findIndex(function (item, i) {
        return item.username === username
    })
    ].password;
}