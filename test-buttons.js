var channelName;

window.addEventListener("onWidgetLoad", obj => {
    channelName = obj.detail.channel.username;
});

window.addEventListener("onEventReceived", obj => {
    if (obj.detail.event.listener === "widget-button") {

        //REGULAR, SUB / VIP / ARTIST, MOD / STREAMER, ACTION, HIGHLIGHTED, EMOTE ONLY, REPLY, NIGHTBOT

        if (obj.detail.event.field === "regularMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "RegularViewer",
                                "user-id": "1",
                                "id": "1-001",
                                "color": "#efeff1",
                                "badge-info": "",
                                "badges": "",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "RegularViewer",
                            "nick": "regularviewer",
                            "userId": "1",
                            "msgId": "1-001",
                            "displayColor": "#efeff1",
                            "text": "A message from a regular viewer",
                            "isAction": false,
                            "badges": [],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        } 
        
        if (obj.detail.event.field === "subscriberMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "Subscriber",
                                "user-id": "2",
                                "id": "2-001",
                                "color": "#9b62ac",
                                "badge-info": "subscriber/14",
                                "badges": " subscriber/0",
                                "subscriber": "1",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "Subscriber",
                            "nick": "subscriber",
                            "userId": "2",
                            "msgId": "2-001",
                            "displayColor": "#9b62ac",
                            "text": "Subscriber message!",
                            "isAction": false,
                            "badges": [
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        } 
        
        if (obj.detail.event.field === "vipMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "VeryImportantPerson",
                                "user-id": "3",
                                "id": "3-001",
                                "badge-info": "",
                                "color": "#ff69b4",
                                "badge-info": "",
                                "badges": "vip/1",
                                "vip": "1",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "VeryImportantPerson",
                            "nick": "veryimportantperson",
                            "userId": "3",
                            "msgId": "3-001",
                            "displayColor": "#ff69b4",
                            "text": "VIP message",
                            "isAction": false,
                            "badges": [
                                {
                                    "type": "vip",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
                                    "description": "VIP"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        } 
        
        if (obj.detail.event.field === "artistMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "にこりん",
                                "user-id": "4",
                                "id": "4-001",
                                "color": "#5F9EA0",
                                "badge-info": "",
                                "badges": "artist-badge/1",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "にこりん",
                            "nick": "nikorin",
                            "userId": "4",
                            "msgId": "4-001",
                            "displayColor": "#5F9EA0",
                            "text": "Artist message",
                            "isAction": false,
                            "badges": [
                                {
                                    "type": "artist-badge",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3",
                                    "description": "Artist"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        }
        
        if (obj.detail.event.field === "moderatorMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "63065903",
                                "display-name": "Moderator",
                                "user-id": "5",
                                "id": "5-001",
                                "color": "#2e8b57",
                                "badge-info": "",
                                "badges": "moderator/1,subscriber/0",
                                "subscriber": "1",
                                "mod": "1",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "mod",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "Moderator",
                            "nick": "moderator",
                            "userId": "5",
                            "msgId": "5-001",
                            "displayColor": "#2e8b57",
                            "text": "I HAVE THE POWER HERE! >:D",
                            "isAction": false,
                            "badges": [
                                {
                                    "type": "moderator",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                                    "description": "Moderator"
                                },
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        }
        
        if (obj.detail.event.field === "broadcasterMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "Sonnelia",
                                "user-id": "6",
                                "id": "6-001",
                                "color": "#9d95ac",
                                "badge-info": "subscriber/14",
                                "badges": "broadcaster/1,subscriber/0,partner/1",
                                "subscriber": "1",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "Sonnelia",
                            "nick": "sonnelia",
                            "userId": "6",
                            "msgId": "6-001",
                            "displayColor": "#9d95ac",
                            "text": "This is a broadcaster message!",
                            "isAction": false,
                            "badges": [
                                {
                                    "type": "broadcaster",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                    "description": "Broadcaster"
                                },
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                },
                                {
                                    "type": "partner",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                    "description": "Verified"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        } 

        if (obj.detail.event.field === "actionMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "VeryImportantPerson",
                                "user-id": "3",
                                "id": "3-002",
                                "color": "#ff69b4",
                                "badge-info": "",
                                "badges": "vip/1",
                                "vip": "1",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "VeryImportantPerson",
                            "nick": "veryimportantperson",
                            "userId": "3",
                            "msgId": "3-002",
                            "displayColor": "#ff69b4",
                            "text": "Action message (type /me at the front of a message)",
                            "isAction": true,
                            "badges": [
                                {
                                    "type": "vip",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
                                    "description": "VIP"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        } 

        if (obj.detail.event.field === "highlightedMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "RegularViewer",
                                "user-id": "1",
                                "id": "1-002",
                                "color": "#efeff1",
                                "badge-info": "",
                                "badges": "",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": "",
                                "msg-id": "highlighted-message"
                            },
                            "displayName": "RegularViewer",
                            "nick": "regularviewer",
                            "userId": "1",
                            "msgId": "1-002",
                            "displayColor": "#efeff1",
                            "text": "Highlighted message~! Can be purchased with channel points",
                            "isAction": false,
                            "badges": [],
                            "emotes": [],
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        } 
            
        if (obj.detail.event.field === "emoteOnlyMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "RegularViewer",
                                "user-id": "1",
                                "id": "1-003",
                                "color": "#efeff1",
                                "badge-info": "",
                                "badges": "",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "RegularViewer",
                            "nick": "regularviewer",
                            "userId": "1",
                            "msgId": "1-003",
                            "displayColor": "#efeff1",
                            "text": "hehe wideSNIFFA WideJoel",
                            "isAction": false,
                            "badges": [],
                            "emotes": [
                                {
                                    "animated": false,
                                    "gif": false,
                                    "start": 0,
                                    "end": 4,
                                    "id": "618cc5a217e4d50afc0cf377",
                                    "name": "hehe",
                                    "type": "7tv",
                                    "urls": {
                                        "1": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/1x.webp",
                                        "2": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/2x.webp",
                                        "3": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/3x.webp",
                                        "4": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/4x.webp"
                                    }
                                },
                                {
                                    "animated": true,
                                    "gif": true,
                                    "start": 5,
                                    "end": 15,
                                    "id": "6212e98f180be49d725bdfa8",
                                    "name": "wideSNIFFA",
                                    "type": "7tv",
                                    "urls": {
                                        "1": "https://cdn.7tv.app/emote/6212e98f180be49d725bdfa8/1x.webp",
                                        "2": "https://cdn.7tv.app/emote/6212e98f180be49d725bdfa8/2x.webp",
                                        "3": "https://cdn.7tv.app/emote/6212e98f180be49d725bdfa8/3x.webp",
                                        "4": "https://cdn.7tv.app/emote/6212e98f180be49d725bdfa8/4x.webp"
                                    }
                                },
                                {
                                    "animated": true,
                                    "gif": true,
                                    "start": 16,
                                    "end": 24,
                                    "id": "63f3e81bface0f3bbeaad78e",
                                    "name": "WideJoel",
                                    "type": "7tv",
                                    "urls": {
                                        "1": "https://cdn.7tv.app/emote/63f3e81bface0f3bbeaad78e/1x.webp",
                                        "2": "https://cdn.7tv.app/emote/63f3e81bface0f3bbeaad78e/2x.webp",
                                        "3": "https://cdn.7tv.app/emote/63f3e81bface0f3bbeaad78e/3x.webp",
                                        "4": "https://cdn.7tv.app/emote/63f3e81bface0f3bbeaad78e/4x.webp"
                                    }
                                }
                            ]
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        } 
            
        if (obj.detail.event.field === "replyMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "にこりん",
                                "user-id": "4",
                                "id": "4-002",
                                "color": "#5F9EA0",
                                "badge-info": "",
                                "badges": "artist-badge/1",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "にこりん",
                            "nick": "nikorin",
                            "userId": "4",
                            "msgId": "4-002",
                            "displayColor": "#5F9EA0",
                            "text": "Please reply to me below! I will try to be very long to see if the message gets cut correctly",
                            "isAction": false,
                            "badges": [
                                {
                                    "type": "artist-badge",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3",
                                    "description": "Artist"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            
        let emulated2 = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": Date.now(),
                        "channel": channelName,
                        "tags": {
                            "room-id": "000",
                            "display-name": "Sonnelia",
                            "user-id": "6",
                            "id": "6-002",
                            "color": "#9d95ac",
                            "badge-info": "subscriber/14",
                            "badges": "broadcaster/1,subscriber/0,partner/1",
                            "subscriber": "1",
                            "mod": "0",
                            "turbo": "0",
                            "returning-chatter": "0",
                            "first-msg": "0",
                            "user-type": "",
                            "emotes": "",
                            "flags": "",
                            "reply-parent-display-name": "にこりん",
                            "reply-parent-user-login": "nikorin",
                            "reply-parent-user-id": "4",
                            "reply-parent-msg-id": "4-002",
                            "reply-parent-msg-body": "Please\\sreply\\sto\\sme\\sbelow!\\sI\\swill\\stry\\sto\\sbe\\svery\\slong\\sto\\ssee\\sif\\sthe\\smessage\\sgets\\scut\\scorrectly",
                            "reply-thread-parent-display-name": "にこりん",
                            "reply-thread-parent-user-login": "nikorin",
                            "reply-thread-parent-user-id": "4",
                            "reply-thread-parent-msg-id": "4-002"
                        },
                        "displayName": "Sonnelia",
                        "nick": "sonnelia",
                        "userId": "6",
                        "msgId": "6-002",
                        "displayColor": "#9d95ac",
                        "text": "@にこりん reply message hehe",
                        "isAction": false,
                        "badges": [
                            {
                                "type": "broadcaster",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                "description": "Broadcaster"
                            },
                            {
                                "type": "subscriber",
                                "version": "0",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                "description": "Subscriber"
                            },
                            {
                                "type": "partner",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                "description": "Verified"
                            }
                        ],
                        "emotes": [
                            {
                                "animated": false,
                                "gif": false,
                                "start": 0,
                                "end": 4,
                                "id": "618cc5a217e4d50afc0cf377",
                                "name": "hehe",
                                "type": "7tv",
                                "urls": {
                                    "1": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/1x.webp",
                                    "2": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/2x.webp",
                                    "3": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/3x.webp",
                                    "4": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/4x.webp"
                                }
                            }
                        ]
                    }
                }
            }
        });
            window.dispatchEvent(emulated);
              setTimeout(() => {
                window.dispatchEvent(emulated2);
            }, 600);
        }
            
        if (obj.detail.event.field === "deleteMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "NewChatter",
                                "user-id": "7",
                                "id": "7-001",
                                "color": "#daa520",
                                "badge-info": "",
                                "badges": "",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "NewChatter",
                            "nick": "newchatter",
                            "userId": "7",
                            "msgId": "7-001",
                            "displayColor": "#daa520",
                            "text": "*insert a bad word here*",
                            "isAction": false,
                            "badges": [],
                            "emotes": []
                        },
                    }
                }
            });

            let emulated2 = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "NewChatter",
                                "user-id": "7",
                                "id": "7-002",
                                "color": "#daa520",
                                "badge-info": "",
                                "badges": "",
                                "subscriber": "0",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "NewChatter",
                            "nick": "newchatter",
                            "userId": "7",
                            "msgId": "7-002",
                            "displayColor": "#daa520",
                            "text": "haha, i'm invincible!",
                            "isAction": true,
                            "badges": [],
                            "emotes": []
                        },
                    }
                }
            });
            
        let emulated3 = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": Date.now(),
                        "channel": channelName,
                        "tags": {
                            "room-id": "000",
                            "display-name": "Sonnelia",
                            "user-id": "6",
                            "id": "6-003",
                            "color": "#9d95ac",
                            "badge-info": "subscriber/14",
                            "badges": "broadcaster/1,subscriber/0,partner/1",
                            "subscriber": "1",
                            "mod": "0",
                            "turbo": "0",
                            "returning-chatter": "0",
                            "first-msg": "0",
                            "user-type": "",
                            "emotes": "",
                            "flags": "",
                            "reply-parent-display-name": "NewChatter",
                            "reply-parent-user-login": "newchatter",
                            "reply-parent-user-id": "7",
                            "reply-parent-msg-id": "7-002",
                            "reply-parent-msg-body": "haha,\\si'm\\sinvincible!",
                            "reply-thread-parent-display-name": "NewChatter",
                            "reply-thread-parent-user-login": "newchatter",
                            "reply-thread-parent-user-id": "7",
                            "reply-thread-parent-msg-id": "7-002"
                        },
                        "nick": "sonnelia",
                        "displayName": "Sonnelia",
                        "userId": "6",
                        "msgId": "6-003",
                        "displayColor": "#9d95ac",
                        "text": "@NewChatter are you sure?",
                        "isAction": false,
                        "badges": [
                            {
                                "type": "broadcaster",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                "description": "Broadcaster"
                            },
                            {
                                "type": "subscriber",
                                "version": "0",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                "description": "Subscriber"
                            },
                            {
                                "type": "partner",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                "description": "Verified"
                            }
                        ],
                        "emotes": [
                            {
                                "animated": false,
                                "gif": false,
                                "start": 0,
                                "end": 4,
                                "id": "618cc5a217e4d50afc0cf377",
                                "name": "hehe",
                                "type": "7tv",
                                "urls": {
                                    "1": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/1x.webp",
                                    "2": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/2x.webp",
                                    "3": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/3x.webp",
                                    "4": "https://cdn.7tv.app/emote/618cc5a217e4d50afc0cf377/4x.webp"
                                }
                            }
                        ]
                    }
                }
            }
        });

        let emulated4 = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "delete-message",
                "event": {
                    "msgId": "7-001"
                }
            }
        });

        let emulated5 = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": Date.now(),
                        "channel": channelName,
                        "tags": {
                            "room-id": "000",
                            "display-name": "NewChatter",
                            "user-id": "7",
                            "id": "7-003",
                            "color": "#daa520",
                            "badge-info": "",
                            "badges": "",
                            "subscriber": "0",
                            "mod": "0",
                            "turbo": "0",
                            "returning-chatter": "0",
                            "first-msg": "0",
                            "user-type": "",
                            "emotes": "",
                            "flags": ""
                        },
                        "displayName": "NewChatter",
                        "nick": "newchatter",
                        "userId": "7",
                        "msgId": "7-003",
                        "displayColor": "#daa520",
                        "text": "*more bad words*",
                        "isAction": false,
                        "badges": [],
                        "emotes": []
                    },
                }
            }
        });

        let emulated6 = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "message",
                "event": {
                    "service": "twitch",
                    "data": {
                        "time": Date.now(),
                        "channel": channelName,
                        "tags": {
                            "room-id": "000",
                            "display-name": "Sonnelia",
                            "user-id": "6",
                            "id": "6-004",
                            "color": "#9d95ac",
                            "badge-info": "subscriber/14",
                            "badges": "broadcaster/1,subscriber/0,partner/1",
                            "subscriber": "1",
                            "mod": "0",
                            "turbo": "0",
                            "returning-chatter": "0",
                            "first-msg": "0",
                            "user-type": "",
                            "emotes": "",
                            "flags": ""
                        },
                        "displayName": "Sonnelia",
                        "nick": "sonnelia",
                        "userId": "6",
                        "msgId": "6-004",
                        "displayColor": "#9d95ac",
                        "text": "ok i ban you :)",
                        "isAction": false,
                        "badges": [
                            {
                                "type": "broadcaster",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                "description": "Broadcaster"
                            },
                            {
                                "type": "subscriber",
                                "version": "0",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                "description": "Subscriber"
                            },
                            {
                                "type": "partner",
                                "version": "1",
                                "url": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                "description": "Verified"
                            }
                        ],
                        "emotes": []
                    }
                }
            }
        });

        let emulated7 = new CustomEvent("onEventReceived", {
            detail: {
                "listener": "delete-messages",
                "event": {
                    "userId": "7",
                }
            }
        });

            let events = [emulated, emulated2, emulated3, emulated4, emulated5, emulated6, emulated7];

            for (let i = 0; i < events.length; i++) {
                setTimeout(() => {
                    window.dispatchEvent(events[i]);
                }, 1500 * i);
            }
        }
        
        if (obj.detail.event.field === "nightbotMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "Nightbot",
                                "user-id": "8",
                                "id": "8-001",
                                "color": "#7c7ce1",
                                "badge-info": "subscriber/14",
                                "badges": "moderator/1,subscriber/0,partner/1",
                                "subscriber": "1",
                                "mod": "1",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "mod",
                                "emotes": "",
                                "flags": "",
                                "reply-parent-display-name": "Nightbot",
                                "reply-parent-user-login": "nightbot",
                                "reply-parent-user-id": "8",
                                "reply-parent-msg-id": "8-001",
                                "reply-parent-msg-body": "──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌\\s───▄▄██▌█\\sBEEP\\sBEEP\\s\\s⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\\s▄▄▄▌▐██▌█\\s-43\\sLP\\sDELIVERY\\s███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌\\s▀(⊙)▀▀▀▀▀▀▀(⊙)(⊙)▀▀▀▀▀▀▀▀▀▀(⊙)▀▀",
                                "reply-thread-parent-display-name": "Nightbot",
                                "reply-thread-parent-user-login": "nightbot",
                                "reply-thread-parent-user-id": "8",
                                "reply-thread-parent-msg-id": "8-001"
                            },
                            "displayName": "Nightbot",
                            "nick": "nightbot",
                            "userId": "8",
                            "msgId": "8-001",
                            "displayColor": "#7c7ce1",
                            "text": " ──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌ ───▄▄██▌█ BEEP BEEP ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ▄▄▄▌▐██▌█ -44 LP DELIVERY ███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌ ▀(⊙)▀▀▀▀▀▀▀(⊙)(⊙)▀▀▀▀▀▀▀▀▀▀(⊙)▀▀",
                            "isAction": true,
                            "badges": [
                                {
                                    "type": "moderator",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3",
                                    "description": "Moderator"
                                },
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                },
                                {
                                    "type": "partner",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                    "description": "Verified"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        }

        //FOLLOW, SUB, RESUB, GIFTSUB, BULKGIFTSUB, CHEER, RAID, HOST, UPDATE
        
        if (obj.detail.event.field === "followAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "follower-latest",
                    "event": {
                        "displayName": "RegularViewer",
                        "name": "regularviewer"
                    },
                }
            });
            window.dispatchEvent(emulated);
        }
    
        if (obj.detail.event.field === "subAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "subscriber-latest",
                    "event": {
                        "amount": "prime",
                        "tier": "1000",
                        "displayName": "Subscriber",
                        "name": "subscriber",
                        "message": "Hi I'm new here :D"
                    },
                }	
            });
            window.dispatchEvent(emulated);
        }
        
        if (obj.detail.event.field === "resubAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "subscriber-latest",
                    "event": {
                        "amount": "25",
                        "tier": "3000",
                        "displayName": "にこりん",
                        "name": "nikorin",
                        "message": "Long time no see..."
                    },
                }
            });
            window.dispatchEvent(emulated);
        }
        
        if (obj.detail.event.field === "giftsubAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "subscriber-latest",
                    "event": {
                        "amount": "1",
                        "tier": "1000",
                        "displayName": "Moderator",
                        "name": "moderator",
                        "gifted": "true",
                        "sender": "Sonnelia"
                    },
                }
            });
            window.dispatchEvent(emulated);
        }
        
        
        if (obj.detail.event.field === "bulkgiftsubAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "subscriber-latest",
                    "event": {
                        "amount": "13",
                        "tier": "1000",
                        "displayName": "VeryImportantPerson",
                        "name": "veryimportantperson",
                        "bulkGifted": "true",
                        "sender": "Sonnelia"
                    },
                }
            });
            window.dispatchEvent(emulated);
        }

        if (obj.detail.event.field === "cheerAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "cheer-latest",
                    "event": {
                        "amount": "2",
                        "displayName": "VeryImportantPerson",
                        "name": "veryimportantperson",
                        "message": "Cheer1 Cheer1"
                    },
                }
            });
            window.dispatchEvent(emulated);
        }

        if (obj.detail.event.field === "tipAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "tip-latest",
                    "event": {
                        "amount": "3",
                        "displayName": "Moderator",
                        "name": "moderator",
                        "message": "3 dolla 4 u"
                    },
                }
            });
            window.dispatchEvent(emulated);
        }

        if (obj.detail.event.field === "raidAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "raid-latest",
                    "event": {
                        "amount": "5",
                        "displayName": "AnotherStreamer",
                        "name": "anotherstreamer",
                    },
                }
            });
            window.dispatchEvent(emulated);
        }
        
        if (obj.detail.event.field === "hostAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "host-latest",
                    "event": {
                        "amount": "7",
                        "displayName": "AnotherStreamer",
                        "name": "anotherstreamer",
                    },
                }
            });
            window.dispatchEvent(emulated);
        }
        
        if (obj.detail.event.field === "updateMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "update-message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "channel": channelName,
                            "tags": {
                                "room-id": "000",
                                "display-name": "Sonnelia",
                                "user-id": "6",
                                "id": "6-005",
                                "color": "#9d95ac",
                                "badge-info": "subscriber/14",
                                "badges": "broadcaster/1,subscriber/0,partner/1",
                                "subscriber": "1",
                                "mod": "0",
                                "turbo": "0",
                                "returning-chatter": "0",
                                "first-msg": "0",
                                "user-type": "",
                                "emotes": "",
                                "flags": ""
                            },
                            "displayName": "Sonnelia",
                            "nick": "sonnelia",
                            "userId": "6",
                            "msgId": "6-005",
                            "displayColor": "#9d95ac",
                            "text": "Update available!",
                            "isAction": false,
                            "badges": [
                                {
                                    "type": "broadcaster",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3",
                                    "description": "Broadcaster"
                                },
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                },
                                {
                                    "type": "partner",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3",
                                    "description": "Verified"
                                }
                            ],
                            "emotes": []
                        }
                    }
                }
            });
            window.dispatchEvent(emulated);
        }
    
        if (obj.detail.event.field === "updateAlert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "update-latest",
                    "event": {
                        "displayName": "Sonnelia",
                        "name": "sonnelia",
                        "message": "Update available!"
                    },
                }
            });
            window.dispatchEvent(emulated);
        }
        return;
    }
});