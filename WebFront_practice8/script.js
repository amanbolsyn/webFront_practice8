document.addEventListener("DOMContentLoaded", function () {
    const paragraphs = document.querySelectorAll('p'); // Select all paragraph elements
    let totalWordCount = 0; // Variable to hold the total word count across all paragraphs

    paragraphs.forEach(paragraph => {
        // Replace question marks with thinking face emoji and exclamation marks with astonished face emoji
        let text = paragraph.innerHTML.replace(/\?/g, '🤔').replace(/\!/g, '😲');

        // Split the text into sentences based on period (.)
        let sentences = text.split('.');

        // Trim whitespace and filter out any empty sentences, then wrap each sentence with <br> for new lines
        sentences = sentences
            .filter(sentence => sentence.trim() !== "") // Remove empty sentences
            .map(sentence => sentence.trim() + '.<br>'); // Add the period back and break the line

        // Join the sentences back into a string and update the paragraph HTML
        paragraph.innerHTML = sentences.join(' ');

        // Split the paragraph text into words and highlight those longer than 8 characters
        let words = paragraph.innerHTML.split(' ');
        words = words.map(word => {
            if (word.length > 8) {
                return `<span style="background-color: yellow;">${word}</span>`;
            }
            return word;
        });

        // Update the paragraph with the highlighted words
        paragraph.innerHTML = words.join(' ');

        // Count the number of words in this paragraph
        totalWordCount += words.length;
    });

    // Display the word count after the heading
    const wordCountElement = document.createElement('p');
    wordCountElement.innerHTML = `Word Count: ${totalWordCount}`;
    document.querySelector('h1').after(wordCountElement);

    // Add a link to the source of the text
    const sourceLink = document.createElement('a');
    sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-jobinterview-questions-and-how-great-job-candidates-answer-them.html";
    sourceLink.innerText = "Source of the text";
    sourceLink.target = "_blank"; // Open link in a new tab

    // Append the link after the last paragraph
    document.body.appendChild(sourceLink);
});
