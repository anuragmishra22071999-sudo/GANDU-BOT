module.exports = {
    name: "help",
    description: "Shows all available commands",
    execute: (api, message, commands) => {
        let reply = "📜 *Available Commands:*\n\n";

        for (const cmdName in commands) {
            const cmd = commands[cmdName];
            reply += `➡️ ${cmd.name} : ${cmd.description || "No description"}\n`;
        }

        api.sendMessage(reply, message.threadID);
    }
};￼Enter
