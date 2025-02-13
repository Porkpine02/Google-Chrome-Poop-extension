function highlightWords(words) {
    const regex = new RegExp(`\\b(${words.join("|")})\\b`, 'gi');

    function walk(node) {
        if (node.nodeType === 3) {
            let match = node.nodeValue.match(regex);
            if (match) {
                let span = document.createElement("span");
                span.innerHTML = node.nodeValue.replace(regex, '<span class="highlight">$&</span>');
                node.replaceWith(span);
            }
        } else if (node.nodeType === 1) {
            // Ignore images, videos, and picture elements
            const ignoredTags = ["SCRIPT", "STYLE", "IMG", "PICTURE", "VIDEO", "IFRAME"];
            if (!ignoredTags.includes(node.tagName)) {
                for (let i = 0; i < node.childNodes.length; i++) {
                    walk(node.childNodes[i]);
            }
        }
    }
    
    }
    walk(document.body);
}

// Define words to highlight
wordsToHighlight = ["poop", "poops","pooped","shit", "dung", "soil", "feces", "excrement", 
    "scat", "excreta", "dropping", "ordure", "doo-doo", "stool", "guano", 
    "night soil", "coprolite"];
highlightWords(wordsToHighlight);