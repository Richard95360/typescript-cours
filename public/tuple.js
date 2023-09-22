"use strict";
const menbers = {
    level: ['admin', 1]
};
menbers.level[0] = 'user';
menbers.level[1] = 2;
menbers.level.push('tirs');
console.log(menbers.level);
