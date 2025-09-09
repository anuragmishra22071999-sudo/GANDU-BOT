module.exports = {
    name: "message", // listen to all messages, ya thread events, group join events ke liye
    execute: (api, event) => {
        // Check if someone joined
        if (event.logMessageType === "log:subscribe") {
            const addedUsers = event.addedParticipants; // array of new members
            const threadID = event.threadID;

            addedUsers.forEach(user => {
                const name = user.fullName || "Friend";
                const welcomeMsg = `🎉 Welcome ${name} to the group! 😎\nPlease enjoy your stay.`;

                api.sendMessage(welcomeMsg, threadID);
            });
        }
    }
};￼Enter
