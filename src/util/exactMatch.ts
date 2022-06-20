/** 
 * It can lead some bad results, the awesome scenario would be to consider:
 * - Typo
 * - Number of words
 * - Proximity
 * - Exact
 * 
 * As Bonus: Populatiry, Geo, Predefined and so on
 * */
function exactMatch(source: string, match: string): boolean {
    return source.toLowerCase().indexOf(match.toLowerCase()) > -1;
}

export default exactMatch;