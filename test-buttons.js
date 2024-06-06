var channelName;

window.addEventListener("onWidgetLoad", obj => {
    channelName = obj.detail.channel.username;
});

window.addEventListener("onEventReceived", obj => {
    if (obj.detail.event.listener === "widget-button") {

        //REGULAR, SUB / VIP / ARTIST, MOD / STREAMER, ACTION, HIGHLIGHTED, EMOTE ONLY, REPLY

        if (obj.detail.event.field === "regularMessage") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    "listener": "message",
                    "event": {
                        "service": "twitch",
                        "data": {
                            "time": Date.now(),
                            "tags": {
                                "badge-info": "",
                                "badges": "",
                                "color": "#efeff1",
                                "display-name": "RegularViewer",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "514ad498-1139-4002-a52d-700cf099d015",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1711108669423",
                                "turbo": "0",
                                "user-id": "1",
                                "user-type": ""
                            },
                            "nick": "regularviewer",
                            "userId": "1",
                            "displayName": "RegularViewer",
                            "displayColor": "#efeff1",
                            "badges": [],
                            "channel": channelName,
                            "text": "A message from a regular viewer",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "514ad498-1139-4002-a52d-700cf099d015"
                        },
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
                            "tags": {
                                "badge-info": "subscriber/14",
                                "badges": " subscriber/0",
                                "color": "#9b62ac",
                                "display-name": "Subscriber",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "22c694d7-53fd-4d9f-bde4-dfa9507cda30",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "1",
                                "tmi-sent-ts": "1688898286742",
                                "turbo": "0",
                                "user-id": "2",
                                "user-type": ""
                            },
                            "nick": "subscriber",
                            "userId": "2",
                            "displayName": "Subscriber",
                            "displayColor": "#9b62ac",
                            "badges": [
                                {
                                    "type": "subscriber",
                                    "version": "0",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3",
                                    "description": "Subscriber"
                                }
                            ],
                            "channel": channelName,
                            "text": "Subscriber message!",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "22c694d7-53fd-4d9f-bde4-dfa9507cda30"
                        },
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
                            "tags": {
                                "badge-info": "",
                                "badges": "vip/1",
                                "color": "#ff69b4",
                                "display-name": "VeryImportantPerson",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "f64d86b5-dd6a-4a10-8924-916c89c499bb",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688897999440",
                                "turbo": "0",
                                "user-id": "3",
                                "user-type": "",
                                "vip": "1"
                            },
                            "nick": "veryimportantperson",
                            "userId": "3",
                            "displayName": "VeryImportantPerson",
                            "displayColor": "#ff69b4",
                            "badges": [
                                {
                                    "type": "vip",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
                                    "description": "VIP"
                                }
                            ],
                            "channel": channelName,
                            "text": "VIP message",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "f64d86b5-dd6a-4a10-8924-916c89c499bb"
                        },
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
                            "tags": {
                                "badge-info": "",
                                "badges": "artist-badge/1",
                                "color": "#5F9EA0",
                                "display-name": "にこりん",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "f64d86b5-dd6a-4a10-8924-916c89c499bb",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688897999440",
                                "turbo": "0",
                                "user-id": "4",
                                "user-type": ""
                            },
                            "nick": "nikorin",
                            "userId": "4",
                            "displayName": "にこりん",
                            "displayColor": "#5F9EA0",
                            "badges": [
                                {
                                    "type": "artist-badge",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3",
                                    "description": "Artist"
                                }
                            ],
                            "channel": channelName,
                            "text": "Artist message",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "f64d86b5-dd6a-4a10-8924-916c89c499bb"
                        },
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
                            "tags": {
                                "badge-info": "",
                                "badges": "moderator/1,subscriber/0,partner/1",
                                "color": "#7c7ce1",
                                "display-name": "Nightbot",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "314588ea-eb54-4047-bdd9-7d2f6e3bbd68",
                                "mod": "1",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688897514912",
                                "turbo": "0",
                                "user-id": "5",
                                "user-type": "mod"
                            },
                            "nick": "nightbot",
                            "userId": "5",
                            "displayName": "Nightbot",
                            "displayColor": "#7c7ce1",
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
                            "channel": channelName,
                            "text": " ──────▄▌▐▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▌ ───▄▄██▌█ BEEP BEEP ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ ▄▄▄▌▐██▌█ -44 LP DELIVERY ███████▌█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▌ ▀(⊙)▀▀▀▀▀▀▀(⊙)(⊙)▀▀▀▀▀▀▀▀▀▀(⊙)▀▀",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "314588ea-eb54-4047-bdd9-7d2f6e3bbd68"
                        },
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
                                "tags": {
                                    "badge-info": "subscriber/14",
                                    "badges": "broadcaster/1,subscriber/0",
                                    "color": "#9d95ac",
                                    "display-name": "Sonnelia",
                                    "emotes": "",
                                    "first-msg": "0",
                                    "flags": "",
                                    "id": "54b903a4-1130-4c46-820b-f589b7102c4b",
                                    "mod": "0",
                                    "returning-chatter": "0",
                                    "room-id": "63065903",
                                    "subscriber": "1",
                                    "tmi-sent-ts": "1688895262653",
                                    "turbo": "0",
                                    "user-id": "6",
                                    "user-type": ""
                                },
                                "nick": "sonnelia",
                                "userId": "6",
                                "displayName": "Sonnelia",
                                "displayColor": "#9d95ac",
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
                                    }
                                ],
                                "channel": channelName,
                                "text": "This is a broadcaster message!",
                                "isAction": false,
                                "emotes": [],
                                "msgId": "54b903a4-1130-4c46-820b-f589b7102c4b"
                            },
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
                            "tags": {
                                "badge-info": "",
                                "badges": "vip/1",
                                "color": "#ff69b4",
                                "display-name": "VeryImportantPerson",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "f64d86b5-dd6a-4a10-8924-916c89c499bb",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1688897999440",
                                "turbo": "0",
                                "user-id": "3",
                                "user-type": "",
                                "vip": "1"
                            },
                            "nick": "veryimportantperson",
                            "userId": "3",
                            "displayName": "VeryImportantPerson",
                            "displayColor": "#ff69b4",
                            "badges": [
                                {
                                    "type": "vip",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3",
                                    "description": "VIP"
                                }
                            ],
                            "channel": channelName,
                            "text": "Action message (type /me at the front of a message)",
                            "isAction": true,
                            "emotes": [],
                            "msgId": "514ad498-1139-4002-a52d-700cf099d015"
                        },
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
                            "tags": {
                                "badge-info": "",
                                "badges": "",
                                "color": "#efeff1",
                                "display-name": "RegularViewer",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "514ad498-1139-4002-a52d-700cf099d015",
                                "mod": "0",
                                "msg-id": "highlighted-message",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1711108669423",
                                "turbo": "0",
                                "user-id": "1",
                                "user-type": ""
                            },
                            "nick": "regularviewer",
                            "userId": "1",
                            "displayName": "RegularViewer",
                            "displayColor": "#efeff1",
                            "badges": [],
                            "channel": channelName,
                            "text": "Highlighted message~! Can be purchased with channel points",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "514ad498-1139-4002-a52d-700cf099d015"
                        },
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
                            "tags": {
                                "badge-info": "",
                                "badges": "",
                                "color": "#efeff1",
                                "display-name": "RegularViewer",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "514ad498-1139-4002-a52d-700cf099d015",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1711108669423",
                                "turbo": "0",
                                "user-id": "1",
                                "user-type": ""
                            },
                            "nick": "regularviewer",
                            "userId": "1",
                            "displayName": "RegularViewer",
                            "displayColor": "#efeff1",
                            "badges": [],
                            "channel": channelName,
                            "text": "hehe wideSNIFFA WideJoel",
                            "isAction": false,
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
                            ],
                            "msgId": "328c2bd1-5ece-454a-8788-352e7da38ce2"
                        },
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
                            "tags": {
                                "badge-info": "",
                                "badges": "artist-badge/1",
                                "client-nonce": "dbac27a4cd2c31da8166a1711d513272",
                                "color": "#5F9EA0",
                                "display-name": "にこりん",
                                "emotes": "",
                                "first-msg": "0",
                                "flags": "",
                                "id": "baeed773-a977-450e-ae76-a37fc77e4a8c",
                                "mod": "0",
                                "returning-chatter": "0",
                                "room-id": "63065903",
                                "subscriber": "0",
                                "tmi-sent-ts": "1711118332284",
                                "turbo": "0",
                                "user-id": "4",
                                "user-type": ""
                            },
                            "nick": "nikorin",
                            "userId": "4",
                            "displayName": "にこりん",
                            "displayColor": "#5F9EA0",
                            "badges": [
                                {
                                    "type": "artist-badge",
                                    "version": "1",
                                    "url": "https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3",
                                    "description": "Artist"
                                }
                            ],
                            "channel": channelName,
                            "text": "Please reply to me below! I will try to be very long to see if the message gets cut correctly",
                            "isAction": false,
                            "emotes": [],
                            "msgId": "cb696381-9751-4985-a898-5c28d69ab3a2"
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
                        "tags": {
                            "badge-info": "subscriber/14",
                            "badges": "broadcaster/1,subscriber/0",
                            "client-nonce": "d35b21a75079310076f33488c44f5c3a",
                            "color": "#9d95ac",
                            "display-name": "sonnelia",
                            "emotes": "",
                            "first-msg": "0",
                            "flags": "",
                            "id": "6a7cf06f-4a54-4437-9742-5c4036b90c3f",
                            "mod": "0",
                            "reply-parent-display-name": "にこりん",
                            "reply-parent-msg-body": "Please\\sreply\\sto\\sme\\sbelow!\\sI\\swill\\stry\\sto\\sbe\\svery\\slong\\sto\\ssee\\sif\\sthe\\smessage\\sgets\\scut\\scorrectly",
                            "reply-parent-msg-id": "cb696381-9751-4985-a898-5c28d69ab3a2",
                            "reply-parent-user-id": "4",
                            "reply-parent-user-login": "nikorin",
                            "reply-thread-parent-display-name": "にこりん",
                            "reply-thread-parent-msg-id": "cb696381-9751-4985-a898-5c28d69ab3a2",
                            "reply-thread-parent-user-id": "4",
                            "reply-thread-parent-user-login": "nikorin",
                            "returning-chatter": "0",
                            "room-id": "63065903",
                            "subscriber": "1",
                            "tmi-sent-ts": "1711118336081",
                            "turbo": "0",
                            "user-id": "6",
                            "user-type": ""
                        },
                        "nick": "sonnelia",
                        "userId": "6",
                        "displayName": "Sonnelia",
                        "displayColor": "#9d95ac",
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
                            }
                        ],
                        "channel": channelName,
                        "text": "@にこりん reply message hehe",
                        "isAction": false,
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
                        ],
                        "msgId": "6a7cf06f-4a54-4437-9742-5c4036b90c3f"
                    },}
                }
            });
            window.dispatchEvent(emulated);
              setTimeout(() => {
                window.dispatchEvent(emulated2);
            }, 600);
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
    
        if (obj.detail.event.field === "updatealert") {
            let emulated = new CustomEvent("onEventReceived", {
                detail: {
                    'listener': "update-latest",
                    "event": {
                        "displayName": "Sonnelia",
                        "name": "sonnelia",
                        "message": "Update available :3"
                    },
                }
            });
            window.dispatchEvent(emulated);
        }
        return;
    }
});