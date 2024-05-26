import 'dotenv/config'
const getConfig = () => {
    return {
        name: process.env.NAME || 'MARIA-MD',
        session: process.env.SESSION || 'Ak',
        prefix: process.env.PREFIX || '-',
        port: process.env.PORT || 3000,
        imgbb: process.env.IMGBB,
        chatboturi: process.env.BRAINSHOP || 'http://api.brainshop.ai/get?bid=165801&key=1ftAuFL7Fhj21Fyp&uid=[uid]&msg=[msg]',
        mongo: process.env.MONGO || 'mongodb+srv://mongodb:y3tAo2XWyXXbdGXF@cluster0.riheec9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        mods: process.env.MODS
            ? process.env.MODS.split(',').map((id) => {
                  if (id.endsWith('@s.whatsapp.net')) return id
                  return id.replace('+', '').concat('@s.whatsapp.net')
              })
            : []
    }
}

export default getConfig
