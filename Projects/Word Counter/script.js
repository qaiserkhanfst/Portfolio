// script.js

const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');
const sentenceCount = document.getElementById('sentenceCount');
const paragraphCount = document.getElementById('paragraphCount');
const readingTime = document.getElementById('readingTime');
const longestWord = document.getElementById('longestWord');
const pronounCount = document.getElementById('pronounCount');

const pronouns = [
    'i', 'we', 'you', 'he', 'she', 'it', 'they', 'me', 'us', 'her', 'him', 'them',
    'mine', 'ours', 'yours', 'hers', 'his', 'theirs', 'myself', 'yourself', 'herself',
    'himself', 'itself', 'ourselves', 'yourselves', 'themselves'
];

textInput.addEventListener('input', () => {
    const text = textInput.value;
    
    // Words
    const words = text.match(/\b[-?(\w+)?]+\b/gi);
    wordCount.textContent = words ? words.length : 0;
    
    // Characters
    charCount.textContent = text.length;
    
    // Sentences
    const sentences = text.match(/[^\.!\?]+[\.!\?]+/g);
    sentenceCount.textContent = sentences ? sentences.length : 0;
    
    // Paragraphs
    const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.length > 0);
    paragraphCount.textContent = paragraphs.length;
    
    // Average Reading Time (assuming 200 words per minute)
    readingTime.textContent = words ? (words.length / 200).toFixed(2) : 0;
    
    // Longest Word
    let longest = '';
    if (words) {
        longest = words.reduce((long, word) => word.length > long.length ? word : long, '');
    }
    longestWord.textContent = longest || 'None';
    
    // Pronoun Count
    let pronounCounter = 0;
    if (words) {
        pronounCounter = words.filter(word => pronouns.includes(word.toLowerCase())).length;
    }
    pronounCount.textContent = pronounCounter;
});
