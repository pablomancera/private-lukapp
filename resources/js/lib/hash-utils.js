window.polyHash = function polyHash(S, p, x) {
    let hash = 0;
    for (let i = S.length - 1; i >= 0; i--) {
        hash = (hash * x + S.charCodeAt(i)) % p;
    }
    return hash;
}

window.precomputeHashes = function precomputeHashes(T, pLength, p, x) {
    let H = [];
    let S = T.slice(T.length - pLength, T.length);
    H[T.length - pLength] = polyHash(S, p, x);
    let y = 1;

    for (let i = 0; i < pLength; i++) {
        y = (y * x) % p;
    }
    for (let i = T.length - pLength - 1; i >= 0; i--) {
        H[i] =
            (x * H[i + 1] + T.charCodeAt(i) - y * T.charCodeAt(i + pLength)) %
            p;
    }
    return H;
}

window.areEqual = function areEqual(s1, s2) {
    if (s1.length != s2.length) {
        return false;
    }

    for (let i = 0; i < s1.length; i++) {
        if (s1.charAt(i) != s2.charAt(i)) {
            return false;
        }
    }
    return true;
}

window.rabinKarp = function rabinKarp(T, P) {
    let p = 12582917;
    let x = Math.floor(Math.random() * (p - 1) + 1);

    let result = new LinkedList();
    let pHash = polyHash(P, p, x);
    let H = precomputeHashes(T, P.length, p, x);

    for (let i = 0; i <= T.length - P.length; i++) {
        let t = T.slice(i, i + P.length);

        if (pHash != H[i]) {
            continue;
        }
        if (areEqual(t, P)) {
            result.pushBack(i);
        }
    }
    return result;
}