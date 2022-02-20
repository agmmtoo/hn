const formatTime = unixTime => {
    const periods = {
        mins: 60,
        h: 60 * 60,
        d: 24 * 60 * 60,
        w: 7 * 60 * 60 * 60,
        m: 30 * 60 * 60 * 60,
        y: 365 * 60 * 60 * 60
    };

    const now = new Date();
    const msAgo = now - unixTime * 1000;
    const sAgo = msAgo / 1000;

    let ago;
    let unit;

    if (sAgo > periods.y) {
        ago = sAgo / periods.y;
        unit = 'y'
    }
    else if (sAgo > periods.m) {
        ago = sAgo / periods.m;
        unit = 'm'
    }
    else if (sAgo > periods.w) {
        ago = sAgo / periods.w;
        unit = 'w'
    }
    else if (sAgo > periods.d) {
        ago = sAgo / periods.d;
        unit = 'd'
    }
    else if (sAgo > periods.h) {
        ago = sAgo / periods.h;
        unit = 'h'
    }
    else if (sAgo > periods.m) {
        ago = sAgo / periods.m;
        unit = 'mins'
    }
    else ago = 0

    return ago ? `${Math.floor(ago)}${unit}` : "justnow"
}

export default formatTime;