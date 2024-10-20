function areAnagrams(str1, str2) {
    let normalize = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent"));
