import React, {useEffect, useState} from "react";

export default function WordAnimation() {
    const [word, setWord] = useState('');
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const targetWords = ['PedeMais.AI', 'WhatsApp'];
        const currentWord = targetWords[wordIndex];
        const wordArray = currentWord.split('');
        let displayedWord = '';
        let charIndex = 0;

        const interval = setInterval(() => {
            displayedWord += wordArray[charIndex];
            setWord(displayedWord);

            charIndex += 1;

            if (charIndex === wordArray.length) {
                clearInterval(interval);

                setTimeout(() => {
                    if (wordIndex === targetWords.length - 1) {
                        return;
                    }

                    setWordIndex((prevIndex) => prevIndex + 1);
                }, 1500);
            }
        }, 150);

        return () => clearInterval(interval);
    }, [wordIndex]);

    return (
        <>
            <h1 className="display-3 custom-bold mb-4 text-white">
                Venda Mais no <br/>
                <span className="text-yellow">#delivery</span> com <br/>
                o Poder do <span className="text-yellow">{word}!</span>
            </h1>
        </>
    );
};