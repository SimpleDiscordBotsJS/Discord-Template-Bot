/* Logger by LeonusDH (aka RADIO) */

/* Logger version 1.3.2 - Lite*/

//===========================================================//
function Debug() {
    for(var i = 0; i < arguments.length; i++) {
        construct(`\x1b[1;35m[  DEBUG  ]: ` + arguments[i]);
    }
}

//===========================================================//
function Error() {
    for(var i = 0; i < arguments.length; i++) {
        construct(`\x1b[1;31m[  ERROR  ]: ` + arguments[i]);
    }
}

//===========================================================//
function Info() {
    for(var i = 0; i < arguments.length; i++) {
        construct(`\x1b[1;32m[  INFO  ]:  ` + arguments[i]);
    }
}

//===========================================================//
function Message() {
    for(var i = 0; i < arguments.length; i++) {
        construct(`\x1b[0m[ MESSAGE ]: ` + arguments[i]);
    }
}

//===========================================================//
function Success() {
    for(var i = 0; i < arguments.length; i++) {
        construct(`\x1b[1;36m[ SUCCESS ]: ` + arguments[i]);
    }
}

//===========================================================//
function Warning() {
    for(var i = 0; i < arguments.length; i++) {
        construct(`\x1b[1;33m[ WARNING ]: ` + arguments[i]);
    }
}

//===========================================================//

exports.Debug = Debug;
exports.Error = Error;
exports.Info = Info;
exports.Message = Message;
exports.Success = Success;
exports.Warning = Warning;

//===========================================================//
function construct(str) {
    const time = new Date().toLocaleTimeString();
    return console.log(`[ \x1b[1;36m${time}\x1b[0m ]` + str + `\x1b[0m`);
}