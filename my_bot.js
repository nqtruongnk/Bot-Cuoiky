const Discord = require('discord.js')
const gyphyToken = 'RIDsWMyOtppMLpxLBZ6Xr1TjGoj4Ow5F'
const token = 'Nzk0MDQxNTE4MDU3OTc5OTE1.X-1Cyg.lYXxTdonHiGzoAQdDx5lFfk7gJI'
const client = new Discord.Client()
let channel = null;
var GphApiClient = require('giphy-js-sdk-core')
gyPhy = GphApiClient(gyphyToken)
const prefix = '!'
client.on('ready', () => {
    console.log(`${client.user.tag} has logged in.`)
    // channel = client.channels.cache.find(x => x.name === 'general')
    // channel.send(`Hello! Bot is now connected`)
})
client.on('message', (msg) => {
    // if (msg.content.toLowerCase() == 'hello' || msg.content.toLowerCase() === 'hi') {
    //     msg.channel.send(`Hello ${msg.author}`)
    // } else 
    var contentCommand = msg.content.toLowerCase()
    var l = contentCommand.search('lol')
    var c = contentCommand.search('cặc')
    var dm = contentCommand.search('du me')
    var dm1 = contentCommand.search('dm')
    var dm2 = contentCommand.search('dmm')
    
    if (msg.content.toLowerCase() == 'hello' || msg.content.toLowerCase() == 'hi') {
        msg.reply('hello there!')
    } else if (msg.content.toLowerCase() == 'viet nam') {
        msg.reply(`Việt Nam, tên chính thức là Cộng hòa Xã hội chủ nghĩa Việt Nam, 
        là quốc gia nằm ở cực phía Đông của bán đảo Đông Dương thuộc khu vực Đông Nam Á, 
        giáp với Lào, Trung Quốc, Campuchia, Biển Đông và vịnh Thái Lan. Quốc gia này có chung đường 
        biên giới trên biển với Thái Lan qua vịnh Thái Lan và với Philippines, Indonesia và Malaysia qua Biển Đông. 
        Thủ đô của Việt Nam là thành phố Hà Nội, còn thành phố đông dân nhất của nó là Thành phố Hồ Chí Minh, 
        còn được gọi với tên cũ là Sài Gòn.`)
    } else if (msg.content.toLowerCase() == 'bac ho') {
        msg.reply(` Tên thường gọi là Hồ Chí Minh (19 tháng 5 năm 1890 – 2 tháng 9 năm 1969), tên khai sinh là Nguyễn Sinh Cung,
        là nhà cách mạng, người sáng lập Đảng Cộng sản Việt Nam, một trong những người đặt nền móng 
        và lãnh đạo công cuộc đấu tranh giành độc lập, toàn vẹn lãnh thổ cho Việt Nam trong thế kỷ XX, 
        một chiến sĩ cộng sản quốc tế. Ông là người viết và đọc bản Tuyên ngôn Độc lập khai sinh nước 
        Việt Nam Dân chủ Cộng hòa ngày 2 tháng 9 năm 1945 tại Quảng trường Ba Đình, Hà Nội, Chủ tịch nước Việt Nam Dân chủ 
        Cộng hòa trong thời gian 1945–1969, Chủ tịch Ban Chấp hành Trung ương Đảng Lao động Việt Nam trong thời gian 1951–1969. `)
    } else if (contentCommand == 'yt' || contentCommand == 'youtube') {
        msg.reply('https://www.youtube.com/')
    } else if (contentCommand == 'fb' || contentCommand == 'facebook') {
        msg.reply('https://www.facebook.com/')
    }
    else if (l > 0 || c > 0) {
        msg.reply('Khong duoc noi tuc')
    } else if (dm > 0 || dm1 > 0 || dm2 > 0) {
        msg.reply('Khong duoc noi tuc')
    }

    if (msg.author.bot) return
    if (!msg.content.startsWith(prefix)) return

    const commandBody = msg.content.slice(prefix.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLocaleLowerCase()
    if (command === 'ping') {
        const timeTaken = Date.now() - msg.createdTimestamp
        msg.reply(`Pong! This is message had a latency of ${timeTaken}`)
    } else if (command === 'sum') {
        const sumArgs = args.map(x => parseFloat(x))
        const sum = sumArgs.reduce((counter, x) => counter += x)
        msg.reply(`The sum of all the arguments you provides is ${sum}`)
    } else if (command == 'kick') {
        //msg.reply('kick')
        let member = msg.mentions.members.first()
        member.kick().then((member) => {
            msg.channel.send(':wave: ' + member.displayName + ' has been kicked!')
        })
    }



})

client.login(token);