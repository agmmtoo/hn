export default function parsePostBody(escapedHTMLText) {
    const newTabRegex = /<a href/g
    const newTabHTML = escapedHTMLText?.replace(newTabRegex, '<a target="_blank" rel="noreferrer" href')
    const regex = /<a target="_blank" rel="noreferrer" href="https:&#x2F;&#x2F;news\.ycombinator\.com&#x2F;item\?id=(\d+)">/g
    const processedHTML = newTabHTML?.replace(regex, '<a target="_blank" rel="noreferrer" href="&#x2F;$1">')
    return processedHTML
}