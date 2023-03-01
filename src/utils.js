export const randomStrGenerator = (length) =>{

    let str = ""

    const strCollection = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    
    for (let i =0; i< length; i++){
        const charPosition = Math.round(Math.random() * strCollection.length)

        str += strCollection[charPosition]
    }

    return str

}